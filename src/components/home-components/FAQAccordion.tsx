"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question: "How do you typically work with clients?",
    answer:
      "We don’t follow rigid engagement models. Some projects require full system ownership, while others need focused engineering support. We adapt based on what moves the project forward, starting with a discovery phase and evolving as requirements become clearer.",
  },
  {
    question: "How do you handle reliability as systems grow?",
    answer:
      "We design systems with scale in mind from the start. Architecture decisions, infrastructure, and data flow are structured to handle increasing load without constant rework, so growth doesn’t introduce instability or technical debt.",
  },
  {
    question: "What happens after the system is live?",
    answer:
      "Launch is only the starting point. We continue to monitor performance, address bottlenecks, and refine the system based on real usage, ensuring it evolves alongside your business needs.",
  },
  {
    question: "What problems do you actually solve?",
    answer:
      "We work on systems that need to perform under real conditions — automation workflows, backend platforms, and infrastructure that supports day-to-day business operations, not just prototypes.",
  },
  {
    question: "How do you approach AI in your systems?",
    answer:
      "We treat AI as a functional component, not a feature to showcase. It’s applied where it improves decisions, reduces manual work, or increases efficiency — always tied to measurable outcomes.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="w-full px-5 md:px-[15%]">
        {/* Top Header - Flex Layout with CTA on right */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
            >
              — F.A.Q
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 leading-[1.1] tracking-tight"
            >
              What clients usually ask before we start.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-sm font-medium text-gray-900 border border-gray-300 px-6 py-3.5 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            >
              Ask a Question
              <svg
                className="w-[17px] h-[17px] shrink-0 transition-transform duration-300 xl:group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Bottom - Full Width Accordion List within the container */}
        <div className="w-full flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-xl sm:text-2xl font-light tracking-tight pr-4 md:pr-8 transition-colors duration-300 ${
                      isOpen
                        ? "text-black font-normal"
                        : "text-gray-700 group-hover:text-black"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`relative flex items-center justify-center transition-colors duration-300 shrink-0 ${
                      isOpen
                        ? "text-black"
                        : "text-gray-400 group-hover:text-black"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-6 h-6 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-6 h-6 stroke-[1.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeBezier }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-base sm:text-lg text-gray-500 leading-relaxed pr-8 md:pr-16 font-light max-w-4xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
