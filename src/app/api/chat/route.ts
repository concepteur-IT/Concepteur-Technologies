export const runtime = "edge";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { companyKnowledge } from "@/data/chatbotKnowledge";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// In-memory rate limiting (Note: In production Edge environments, consider Upstash Redis or similar.
// This basic map works for simple demonstrations but state is not shared across edge nodes in Vercel/Cloudflare).
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

// Format the knowledge into a strict system prompt
const systemInstruction = `
You are the official AI Assistant for "Concepteur Technologies" (also known previously as Ampit).

You must answer strictly using the provided company knowledge.

You are allowed to answer questions about:
- Company overview and background
- Services
- Team members and their roles
- Company statistics
- Testimonials
- Contact information

If the user greets (hi, hello, hey, good morning, etc.), respond with a short, professional greeting and ask how you can assist regarding Concepteur Technologies.

For team-related questions:
- You may confirm whether a person works at the company.
- You may state their role if available.
- If asked about skill or quality (e.g., "Are they good?"), you may respond with a professional and confident statement such as:
  "Our team consists of experienced professionals across multiple engineering levels."
- Do not create exaggerated claims or superlatives unless explicitly present in the knowledge.

If a question is clearly unrelated to Concepteur Technologies, reply EXACTLY with:
"I can only answer questions related to Concepteur Technologies."

Do NOT hallucinate.
Do NOT invent information.
Do NOT use markdown formatting.
Keep responses clear, concise, and slightly conversational while remaining professional.


If a question is clearly unrelated to Concepteur Technologies, reply EXACTLY with:
"I can only answer questions related to Concepteur Technologies. For further assistance, please contact us at ${companyKnowledge.company.email}."

If the question appears to relate to the company but the answer cannot be found in the provided knowledge, respond with:
"I don’t have that specific information available. Please contact us at ${companyKnowledge.company.email} for more details."

COMPANY KNOWLEDGE:
Name: ${companyKnowledge.company.name}
Email: ${companyKnowledge.company.email}

SERVICES:
${companyKnowledge.services.map((s) => `${s.title}: ${s.description}`).join("\n")}

COMPANY STATS:
${companyKnowledge.stats.map((s) => `${s.label}: ${s.value}`).join(", ")}

TEAM MEMBERS:
${companyKnowledge.team.map((t) => `${t.name} (${t.role})`).join(", ")}

TESTIMONIALS:
${companyKnowledge.testimonials.map((t) => `"${t.message}" - ${t.name}, ${t.company}`).join("\n")}
`;

export async function POST(req: Request) {
  try {
    // Basic Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const userLimit = rateLimitMap.get(ip);

    if (userLimit) {
      if (now - userLimit.lastReset > RATE_LIMIT_WINDOW_MS) {
        // Reset window
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      } else {
        if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return new Response(
            JSON.stringify({
              error: "Too many requests. Please try again later.",
            }),
            { status: 429, headers: { "Content-Type": "application/json" } },
          );
        }
        userLimit.count++;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    // Check API Key
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set.");
      return new Response(
        JSON.stringify({ error: "Server configuration error." }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const { history, message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction,
    });

    const formattedHistory = (history || [])
      .filter((msg: any) => msg?.content || msg?.text) // remove empty
      .map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: String(msg.content || msg.text) }],
      }));

    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 2000,
        temperature: 0.2,
      },
    });

    // Start chat session with history

    const result = await chat.sendMessage(String(message));
    const responseText = result.response.text();

    return new Response(JSON.stringify({ text: responseText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
