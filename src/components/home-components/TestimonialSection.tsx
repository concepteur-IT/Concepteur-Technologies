"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

import { testimonialsData as testimonials } from "@/data/testimonialsData";

export default function TestimonialSection() {
  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 space-y-4 md:space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium"
          >
            Client Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight"
          >
            Trusted by teams that value{" "}
            <span className="font-semibold">precision and impact.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Our partners rely on disciplined engineering and strategic thinking
            to drive measurable, lasting growth. Here is what they have to say.
          </motion.p>
        </div>

        {/* Grid - Replaced Swiper with a premium static grid which fits 3 items perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group relative flex flex-col p-10 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Large Watermark Quote Icon */}
              <div className="absolute top-8 right-8 text-black opacity-[0.02] transform transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.04]">
                <Quote size={100} className="rotate-180" strokeWidth={1.5} />
              </div>

              <div className="relative flex-1">
                <Quote className="w-6 h-6 text-black mb-8 opacity-20" />
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-10 group-hover:text-black transition-colors duration-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="relative pt-6 border-t border-gray-100 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center shrink-0">
                    <span className="text-base font-semibold text-white">
                      {item.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black tracking-tight">
                      {item.author}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mt-0.5">
                      {item.company}
                    </p>
                  </div>
                </div>

                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-black hover:text-gray-600 transition-colors"
                  aria-label={`Open ${item.company} website`}
                >
                  {item.liveUrl}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
