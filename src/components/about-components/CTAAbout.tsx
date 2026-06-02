"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const standards = [
  {
    number: "01",
    title: "Zero Compromise",
    desc: "We do not tolerate technical debt. Every line of code is written with intent and designed for long-term scalability.",
  },
  {
    number: "02",
    title: "Architectural Rigor",
    desc: "Aesthetics must be supported by foundational engineering. Good design is invisible and failure-resistant.",
  },
  {
    number: "03",
    title: "Absolute Precision",
    desc: "From the pixel grids to server load balancing, precision drives our digital outcomes.",
  },
];

const PhilosophyAbout = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-24 md:py-32">
      <div className="w-full px-5 md:px-[15%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500 mb-8 border-l border-gray-200 pl-4">
                Engineering Standards
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-8">
                We don't build websites.
                <br />
                <span className="font-semibold text-gray-400">
                  We build systems.
                </span>
              </h2>
            </div>

            <div className="mt-12 lg:mt-0 pt-12 border-t border-gray-200">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black hover:text-gray-500 transition-colors"
              >
                Initiate a Project
                <div className="w-8 h-8 rounded-none bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300 custom-notch-tl-br">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right: Grid */}
          <div className="flex flex-col gap-0 border-t border-gray-200">
            {standards.map((std, i) => (
              <motion.div
                key={std.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-8 py-8 md:py-10 border-b border-gray-200 hover:bg-[#fcfcfc] transition-colors duration-500 px-4 -mx-4"
              >
                <span className="text-xl font-light text-gray-400 transition-colors duration-300 group-hover:text-black">
                  {std.number}
                </span>
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-normal tracking-tight text-gray-900">
                    {std.title}
                  </h4>
                  <p className="text-sm font-light text-gray-500 leading-relaxed max-w-sm">
                    {std.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyAbout;
