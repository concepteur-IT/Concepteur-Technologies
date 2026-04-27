"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData as testimonials } from "@/data/testimonialsData";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = Math.ceil(testimonials.length / 2);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go(current === 0 ? total - 1 : current - 1);
  const next = () => go(current === total - 1 ? 0 : current + 1);

  const pair = testimonials.slice(current * 2, current * 2 + 2);

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="w-full px-5 md:px-[15%]">
        {/* Top: label + heading + description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-16 mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium shrink-0 md:w-[220px] md:pt-1"
          >
            — CLIENTS
          </motion.p>

          <div className="flex-1 space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.1] tracking-tight"
            >
              We build trust through partnerships as lasting as our solutions.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm text-gray-400 leading-relaxed max-w-2xl"
            >
              Our clients range from startups to enterprise teams. Each
              partnership is grounded in clear communication, professional
              rigour, and a shared belief in technology that stands the test of
              time.
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-gray-200 mb-12 md:mb-16"
        />

        {/* Main Content Area: Aligned with the heading above */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* Spacer to match the "— CLIENTS" width */}
          <div className="hidden md:block md:w-[220px] shrink-0" />

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
              >
                {pair.map((item, i) => (
                  <div key={i} className="flex flex-col gap-8">
                    <p className="text-lg sm:text-xl text-gray-900 leading-relaxed font-light">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="w-6 h-px bg-gray-900 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {item.company}
                          {item.liveUrl && (
                            <>
                              {" · "}
                              <a
                                href={item.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-700 transition-colors"
                              >
                                {item.liveUrl
                                  .replace(/^https?:\/\/(www\.)?/, "")
                                  .replace(/\/$/, "")}
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Controls: Also aligned with the testimonials/heading */}
            <div className="flex items-center justify-between mt-12 md:mt-16">
              <div className="flex items-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 h-2 bg-gray-900"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}