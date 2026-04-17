"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      {/* Top content area */}
      <div className="w-full px-5 md:px-[15%] pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        {/* Two-column: heading left, description right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
          {/* Left: Heading + CTA */}
          <motion.div
            className="md:max-w-[52%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.1] mb-8">
              Shaping tomorrow&apos;s breakthroughs, today with{" "}
              <span className="relative inline-block font-bold">
                AI
                {/* Brush stroke underline */}
                {/* <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 80 12"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-1 w-full overflow-visible pointer-events-none"
                  style={{ height: "0.35em" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.1 }}
                >
                  <motion.path
                    d="M2 8 C10 4, 22 10, 35 7 C48 4, 58 10, 68 7 C72 5.5, 76 8, 78 7"
                    fill="none"
                    stroke="#eaada0"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </motion.svg> */}
              </span>
              .
            </h1>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-300 px-5 py-2.5 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
            >
              Get in touch
              <svg
                className="w-[17px] h-[17px] shrink-0 transition-transform duration-300 group-hover:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M9 15L15 9M15 9H10M15 9V14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="md:max-w-[40%] md:pt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              At Concepteur, technology is guided by precision and purpose. Our
              work blends engineering rigour with human-centered design,
              creating systems that endure. From AI automation to
              enterprise-grade digital infrastructure, we focus on delivering
              outcomes that integrate seamlessly with your business and stand
              the test of time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-width image */}
      <motion.div
        className="w-full px-5 md:px-[15%] pb-16 sm:pb-20 md:pb-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full overflow-hidden">
          <Image
            src="/hero/lower.jpg"
            alt="Concepteur Technologies — engineering-led AI solutions"
            width={1400}
            height={700}
            className="w-full h-[320px] sm:h-[440px] md:h-[560px] object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
