"use client";

import { motion } from "framer-motion";

export default function AIAdoption() {
  const steps = [
    { num: "01", text: "Identify high-impact automation opportunities" },
    { num: "02", text: "Integrate AI into existing workflows" },
    { num: "03", text: "Deploy intelligent agents and recommendation systems" },
    { num: "04", text: "Implement OCR and data intelligence pipelines" },
    { num: "05", text: "Build AI-driven decision support systems" },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden border-t border-gray-100">
      <div className="w-full px-5 md:px-[10%] flex flex-col items-center text-center">
        {/* Enormous Centered Header -> Replaced with Vibe-Matching Sizes */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
          >
            — AI Adoption
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            Artificial Intelligence must be implemented{" "}
            <br className="hidden md:block" />
            <span className="text-gray-400">
              responsibly and strategically.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl"
          >
            Our AI Adoption solutions help organizations:
          </motion.p>
        </div>

        {/* 5-Column Typography Grid (Breaking from the left-right motif) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 mt-20 lg:mt-32"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-7xl font-extralight text-gray-200 mb-6 group-hover:text-gray-900 transition-colors duration-500">
                {step.num}
              </div>
              <div className="w-12 h-px bg-gray-200 mb-6 group-hover:bg-gray-900 group-hover:scale-x-150 transition-all duration-500" />
              <p className="text-lg md:text-[19px] font-normal text-gray-700 leading-snug tracking-tight max-w-[250px] group-hover:text-black transition-colors duration-300">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Centered Emphatic Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 md:mt-32 max-w-4xl mx-auto border-t border-gray-200 pt-16 md:pt-20 w-full"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-snug">
            <span className="font-semibold text-black">AI</span> is integrated
            where it creates{" "}
            <span className="font-normal italic">measurable value</span>
            <br className="hidden sm:block" /> — not where it creates noise.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
