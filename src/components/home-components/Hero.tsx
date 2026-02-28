"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LetsTalkBtn from "../ui-components/buttons/LetsTalkBtn";
import LearnMoreBtn from "../ui-components/buttons/LearnMoreBtn";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full overflow-hidden flex items-center py-12 sm:py-16 md:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background gradient (valid Tailwind syntax) */}
      {/* <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#f3f3f3] to-[#e9e9e9]" /> */}

      {/* Soft glow without arbitrary values */}
      <div className="absolute inset-0 -z-10 flex items-center justify-end opacity-40">
        <div className="w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <motion.div
          className="max-w-xl space-y-7 md:space-y-10 text-center md:text-left"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl leading-tight font-semibold text-gray-900">
            Shaping tomorrow&apos;s breakthroughs, today with{" "}
            <em className="not-italic font-black tracking-tight">AI</em>.
          </h1>

          <p className="text-[15px] sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Concepteur transforms AI into real-world business breakthroughs,
            converting emerging intelligence into structured systems. We don’t
            just build AI — we engineer outcomes.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2 md:pt-4">
            <LetsTalkBtn />

            <LearnMoreBtn />
          </div>
        </motion.div>{" "}
        <motion.div
          className="relative w-full max-w-sm sm:max-w-md md:max-w-xl"
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
            <div className="w-90 h-90 bg-gray-200 rounded-full blur-3xl" />
          </div>

          <Image
            src="/AI-BALL.png"
            alt="AI Network Sphere"
            width={800}
            height={800}
            className="w-full h-auto object-contain drop-shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
