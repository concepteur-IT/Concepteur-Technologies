"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Mail } from "lucide-react";
import ContactForm from "../ui-components/forms/ContactForm";
import WhatsAppIcon from "../ui-components/icons/WhatsAppIcon";
import { motion } from "framer-motion";

type TechItem = {
  name: string;
  desc: string;
};

export default function ContactSection() {
  const searchParams = useSearchParams();

  const topic = searchParams.get("topic");
  const desc = searchParams.get("desc");
  const tech = searchParams.get("tech");

  let parsedTech: TechItem[] = [];

  try {
    parsedTech = tech
      ? JSON.parse(decodeURIComponent(tech))
      : [];
  } catch {
    parsedTech = [];
  }

  const mapsUrl =
    "https://maps.app.goo.gl/KnKUJXcJ6CHmmFHn7";

  const [loading, setLoading] = useState(false);

  const [typedText, setTypedText] = useState("");

  
  const [fullText, setFullText] = useState("");

  /*
  TYPEWRITER EFFECT
  */

  useEffect(() => {
    if (!fullText) return;

    let index = 0;

    setTypedText("");

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));

      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);

  }, [fullText]);

  /*
  INITIAL AI MESSAGE
  */

  useEffect(() => {
    if (!topic) return;

    const currentCount = Number(
      sessionStorage.getItem("ai-chat-count") || "0"
    );

    if (currentCount >= 5) {
      setFullText(
        "Session limit reached. Please refresh the page to continue."
      );
      return;
    }

    async function generateReply() {
      setLoading(true);

      try {
        sessionStorage.setItem(
          "ai-chat-count",
          String(currentCount + 1)
        );

        const res = await fetch("/api/chat", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: `
Explain ${topic} professionally.

Include:
- what it does
- why companies use it
- real business value

Technology:
${parsedTech
  .map(
    (techItem) =>
      `${techItem.name}: ${techItem.desc}`
  )
  .join("\n")}
`,

            history: [],

            sectionContext: {
              source: "contact-page",

              categoryTitle: topic,

              categoryDescription: desc,

              technologies: parsedTech,
            },
          }),
        });

        const data = await res.json();

        setFullText(
          data.text ||
            "Failed to generate AI response."
        );

      } catch (error) {

        setFullText(
          "Failed to generate AI response."
        );

      } finally {

        setLoading(false);
      }
    }

    generateReply();

  }, [topic, desc, tech]);

  return (
    <section className="w-full bg-white py-24 md:py-32">
      <div className="w-full px-5 md:px-[15%]">

        {/* HEADER */}

        <div className="max-w-4xl mb-16 md:mb-20">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
          >
            — CONTACT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            Let's build something meaningful and scalable.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed"
          >
            Share your idea, goals, or technical scope.
          </motion.p>

        </div>

        {/* AI RESPONSE */}

        {topic && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >

            <div className="mb-6 flex flex-wrap gap-2">

              {parsedTech.map((techItem, idx) => (
                <div
                  key={idx}
                  className="text-sm text-gray-400"
                >
                  #{techItem.name}
                </div>
              ))}

            </div>

            <div className="w-full max-w-none">

              {loading ? (

                <p className="w-full text-gray-400 text-lg leading-relaxed">
                  Thinking...
                </p>

              ) : (

                <p className="w-full text-[17px] md:text-[18px] text-gray-700 font-light leading-[2] whitespace-pre-line">
                  {typedText}
                  <span className="animate-pulse">
                    |
                  </span>
                </p>

              )}

            </div>

          </motion.div>
        )}

        {/* CONTENT */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-t border-gray-200 pt-16 md:pt-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-12"
          >

            <div className="flex flex-col gap-5">

              <h3 className="text-xl md:text-2xl font-light text-black tracking-tight flex items-center gap-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                Office
              </h3>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 font-light leading-relaxed text-lg hover:text-black transition-all"
              >
                Kajipara, Sukh Sagar Road,
                <br />
                741222.
                <br />
                Chakdaha, Nadia.
              </a>

            </div>

            <hr className="border-gray-200 w-full max-w-xs" />

            <div className="flex flex-col gap-5">

              <h3 className="text-xl md:text-2xl font-light text-black tracking-tight flex items-center gap-3">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                Direct Communication
              </h3>

              <div className="flex flex-col gap-4">

                <a
                  href="mailto:info@concepteurit.com"
                  className="text-gray-500 font-light text-lg hover:text-black transition-colors"
                >
                  info@concepteurit.com
                </a>

                <a
                  href="https://wa.me/919832996894"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 font-light text-lg hover:text-black transition-colors flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  +91 9832996894
                </a>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
