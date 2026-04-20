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
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-gray-900 leading-[1.05] mb-8">
              Systems that think, built to scale for real-world complexity.
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
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              We design and engineer scalable systems — from intelligent
              automation to robust backend and cloud infrastructure — built for
              real-world performance, not just prototypes.
            </p>

            <div className="space-y-2 text-sm text-gray-500">
              {[
                "Production-ready systems",
                "Scalable architecture",
                "End-to-end delivery",
              ].map((item, i) => (
                <p
                  key={i}
                  className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <span className="text-gray-400">—</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-width image */}
      <motion.div
        className="w-full px-5 md:px-[15%] pb-16 sm:pb-20 md:pb-24 group cursor-pointer"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-full overflow-hidden rounded-sm">
          <Image
            src="/hero/lower.png"
            alt="Concepteur Technologies — engineering-led AI solutions"
            width={1400}
            height={700}
            className="w-full h-[320px] sm:h-[440px] md:h-[560px] object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
            priority
          />

          {/* Top-Left Notch Overlay */}
          <svg
            className="absolute top-0 left-0 w-[50px] h-[50px] pointer-events-none text-white fill-current transition-all duration-[600ms] origin-top-left scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 ease-[0.22,1,0.36,1]"
            viewBox="0 0 50 50"
          >
            <path d="M 0 0 L 38.73 0 A 10 10 0 0 0 29.05 7.5 A 30 30 0 0 1 7.5 29.05 A 10 10 0 0 0 0 38.73 Z" />
          </svg>

          {/* Bottom-Right Notch Overlay */}
          <svg
            className="absolute bottom-0 right-0 w-[50px] h-[50px] pointer-events-none text-white fill-current transition-all duration-[600ms] origin-bottom-right scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 ease-[0.22,1,0.36,1]"
            viewBox="0 0 50 50"
          >
            <path d="M 50 50 L 11.27 50 A 10 10 0 0 0 20.95 42.5 A 30 30 0 0 1 42.5 20.95 A 10 10 0 0 0 50 11.27 Z" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
