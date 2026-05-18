export const runtime = "edge";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { companyKnowledge } from "@/data/chatbotKnowledge";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || "",
);

const rateLimitMap = new Map<
  string,
  { count: number; lastReset: number }
>();

const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

type ChatMessage = {
  role?: "user" | "model" | "assistant";
  text?: string;
  content?: string;
};

type SectionContext = {
  source?: string;

  categoryTitle?: string;

  categoryDescription?: string;

  technologies?: {
    name: string;
    desc: string;
  }[];
};

const systemInstruction = `
You are the official AI Assistant for Concepteur Technologies.

You are a premium AI-powered software agency assistant.

Your tone:
- modern
- intelligent
- concise
- professional
- conversational

You help users understand:
- services
- technologies
- AI systems
- engineering solutions
- infrastructure
- frontend systems
- backend architecture
- scalability
- business value

You must answer naturally and contextually.

If the user greets:
Respond warmly and professionally.

If the user asks unrelated things:
Politely say you only assist regarding Concepteur Technologies.

Never hallucinate.
Never invent company information.
Keep answers concise but valuable.
Reply in plain text only.
Do not use markdown.
Do not use stars, bullet points, emojis, or symbols.
Keep the formatting simple and clean.
COMPANY INFORMATION:

Company:
${companyKnowledge.company.name}

Email:
${companyKnowledge.company.email}

Services:
${companyKnowledge.services
  .map(
    (s) => `
${s.title}: ${s.description}
`,
  )
  .join("\n")}

Stats:
${companyKnowledge.stats
  .map((s) => `${s.label}: ${s.value}`)
  .join(", ")}

Team:
${companyKnowledge.team
  .map((t) => `${t.name} (${t.role})`)
  .join(", ")}
`;

function buildSectionContextInstruction(
  sectionContext?: SectionContext,
) {
  if (!sectionContext) return "";

  return `
ACTIVE CLICKED SECTION CONTEXT:

Category:
${sectionContext.categoryTitle || "Not provided"}

Category Description:
${sectionContext.categoryDescription || "Not provided"}

Technologies:
${
  sectionContext.technologies
    ?.map(
      (tech) => `
- ${tech.name}: ${tech.desc}
`,
    )
    .join("\n") || "No technologies provided"
}

AI Behavior Rules:

- Treat this as the currently selected service stack.
- Prioritize discussing these technologies.
- Mention the technologies naturally in responses.
- Explain benefits clearly.
- Explain business value.
- Explain real-world use cases.
- Answer follow-up questions using this context.
- Speak like a premium engineering consultancy assistant.
`;
}

export async function POST(req: Request) {
  try {

    /*
    RATE LIMITING
    */

    const ip =
      req.headers.get("x-forwarded-for") || "unknown";

    const now = Date.now();

    const userLimit = rateLimitMap.get(ip);

    if (userLimit) {

      if (
        now - userLimit.lastReset >
        RATE_LIMIT_WINDOW_MS
      ) {

        rateLimitMap.set(ip, {
          count: 1,
          lastReset: now,
        });

      } else {

        if (
          userLimit.count >=
          MAX_REQUESTS_PER_WINDOW
        ) {

          return new Response(
            JSON.stringify({
              error:
                "Too many requests. Please try again later.",
            }),
            {
              status: 429,
              headers: {
                "Content-Type":
                  "application/json",
              },
            },
          );
        }

        userLimit.count++;
      }

    } else {

      rateLimitMap.set(ip, {
        count: 1,
        lastReset: now,
      });
    }

    /*
    ENV CHECK
    */

    if (!process.env.GEMINI_API_KEY) {

      return new Response(
        JSON.stringify({
          error:
            "Missing Gemini API Key.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type":
              "application/json",
          },
        },
      );
    }

    /*
    REQUEST BODY
    */

    const body = await req.json();

    const message = body?.message;

    const history = Array.isArray(body?.history)
      ? body.history
      : [];

    const sectionContext =
      body?.sectionContext as
        | SectionContext
        | undefined;

    if (!message) {

      return new Response(
        JSON.stringify({
          error: "Message is required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type":
              "application/json",
          },
        },
      );
    }

    /*
    GEMINI MODEL
    */

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",

      systemInstruction:
        systemInstruction +
        buildSectionContextInstruction(
          sectionContext,
        ),
    });

    /*
    CHAT HISTORY
    */

    const formattedHistory = (
      history as ChatMessage[]
    )
      .filter(
        (msg) =>
          msg?.content || msg?.text,
      )
      .map((msg) => ({
        role:
          msg.role === "assistant"
            ? "model"
            : "user",

        parts: [
          {
            text: String(
              msg.content || msg.text,
            ),
          },
        ],
      }));

    /*
    START CHAT
    */

    const chat = model.startChat({
      history: formattedHistory,

      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.2,
        topP: 0.2
      },
    });

    /*
    SEND MESSAGE
    */

    const result =
      await chat.sendMessage(
        String(message),
      );

    const responseText =
      result.response.text();

    /*
    RESPONSE
    */

    return new Response(
      JSON.stringify({
        text: responseText,
      }),
      {
        status: 200,
        headers: {
          "Content-Type":
            "application/json",
        },
      },
    );

  } catch (error) {

    console.error(
      "Chat API Error:",
      error,
    );

    return new Response(
      JSON.stringify({
        error:
          "Failed to process request.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type":
            "application/json",
        },
      },
    );
  }
}
