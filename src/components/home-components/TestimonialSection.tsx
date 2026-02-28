"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { testimonialsData as testimonials } from "@/data/testimonialsData";

export default function TestimonialSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span className="text-xs font-semibold text-gray-900 uppercase tracking-widest">
              Client Recognition
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-6"
          >
            Trusted by the best.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 font-light leading-relaxed"
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
                  "{item.quote}"
                </p>
              </div>

              <div className="relative flex items-center gap-4 pt-6 border-t border-gray-100">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
