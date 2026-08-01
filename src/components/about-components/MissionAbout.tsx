"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge solutions that transform industries.",
  },
  {
    title: "Integrity",
    description:
      "Building trust through transparency, reliability, and ethical practices.",
  },
  {
    title: "Excellence",
    description:
      "Delivering exceptional quality in every project we undertake.",
  },
  {
    title: "Collaboration",
    description:
      "Working together with clients to achieve extraordinary results.",
  },
];

const MissionAbout = () => {
  return (
    <section className="w-full bg-white pt-24 pb-20 md:pt-32 md:pb-32 border-b border-gray-100">
      <div className="w-full px-5 md:px-[15%]">
        {/* Core Mission Layout */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-bold mb-6">
              — Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight mb-8">
              Building systems for{" "}
              <span className="font-semibold">sustainable growth.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 font-light leading-relaxed">
              <p>
                At Concepteur Technology, we believe innovation is about
                building the right systems — not just new ones. Our mission is
                to deliver technological solutions that address today’s
                challenges while preparing organizations for sustainable growth.
              </p>
              <p>
                We approach every project with architectural clarity and
                disciplined execution. From system design to deployment, each
                decision is guided by scalability, performance, and long-term
                impact.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What Drives Us - Architectural Grid */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 font-bold mb-8">
              — What Drives Us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-20 border-t border-gray-200 pt-12">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-gray-50 flex items-center justify-center text-xs font-bold font-mono text-gray-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-normal text-gray-900 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {value.title}
                  </h4>
                </div>
                <p className="text-gray-500 font-light leading-relaxed pl-14">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAbout;
