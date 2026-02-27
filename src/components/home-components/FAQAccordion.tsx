"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Side: Sticky Title */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium mb-6">
                F.A.Q
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black leading-tight">
                Answers to <br className="hidden lg:block" />
                <span className="font-semibold">Common Questions.</span>
              </h2>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-sm">
                Clarity before execution. Discover how our engineering standards
                align with your operational goals.
              </p>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:w-2/3 flex flex-col pt-4">
            <div className="border-t border-black">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="group border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between py-8 text-left focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <h3
                        className={`text-xl md:text-2xl font-medium tracking-tight pr-8 transition-colors duration-300 ${isOpen ? "text-black" : "text-gray-600 group-hover:text-black"}`}
                      >
                        {faq.question}
                      </h3>

                      <div
                        className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 flex-shrink-0 ${isOpen ? "border-black bg-black text-white" : "border-gray-300 text-black group-hover:border-black"}`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-lg text-gray-500 leading-relaxed pr-8 md:pr-12">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
