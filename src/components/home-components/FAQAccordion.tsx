"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, Variants } from "framer-motion";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question: "What is your typical engagement model?",
    answer:
      "We offer flexible engagement models tailored to the scale of your project. This ranges from dedicated full-stack engineering teams for long-term product development, to specific project-based architectures with clearly defined deliverables.",
  },
  {
    question: "How do you ensure the security of scalable platforms?",
    answer:
      "Security is built into our architecture from day one. We implement enterprise-grade encryption, rigorous access controls, continuous vulnerability scanning, and follow strict DevOps pipelines to ensure resilient and secure deployments.",
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer:
      "Yes. Engineering a product is only the beginning. We provide continuous optimization, SLA-backed maintenance, and infrastructure scaling to ensure your digital systems perform flawlessly as your user base grows.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep expertise architecting solutions bridging FinTech, E-Commerce, Healthcare, and Enterprise SaaS. Our systems are industry-agnostic but designed specifically for high-load, data-intensive environments.",
  },
];

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeBezier,
    },
  },
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: easeBezier }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto mb-10 md:mb-14 text-center space-y-5 md:space-y-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: easeBezier }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            F.A.Q
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            Answers to <span className="font-semibold">Common Questions</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Clarity before execution. Discover how our engineering standards
            align with your operational goals.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="w-16 sm:w-20 h-px bg-black mx-auto mb-4 sm:mb-6"
            initial={{ opacity: 0, scaleX: 0.7 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.55, ease: easeBezier }}
          />
          <motion.div
            className="space-y-3 sm:space-y-0"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  className="group border border-gray-200 rounded-xl px-4 sm:px-0 sm:rounded-none sm:border-0 sm:border-b sm:border-gray-200"
                  variants={itemVariants}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-4 sm:py-6 md:py-8 text-left focus:outline-none transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3
                      className={`text-base sm:text-xl md:text-2xl font-medium tracking-tight pr-4 md:pr-8 transition-colors duration-300 text-center sm:text-left ${
                        isOpen
                          ? "text-black"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 flex-shrink-0 ${
                        isOpen
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-black group-hover:border-black"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mb-5 sm:mb-8"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15px] sm:text-base md:text-lg text-gray-500 leading-relaxed text-center sm:text-left px-2 sm:pr-8 md:pr-12 sm:pl-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
