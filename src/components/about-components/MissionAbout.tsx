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

        {/* Architectural Connected Pipeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="w-full mt-16 lg:mt-24"
        >
          <div className="relative w-full min-h-[300px] md:aspect-[4/1] overflow-hidden bg-[#fafafa] border border-gray-100 rounded-3xl p-6 md:p-8 flex items-center shadow-[0_8px_40px_rgba(0,0,0,0.01)]">
            {/* Ambient Background Gradient Fields */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-12 left-10 w-80 h-80 bg-gradient-to-tr from-gray-200/30 to-neutral-100/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-gradient-to-br from-neutral-200/20 to-zinc-100/10 rounded-full blur-3xl" />
            </div>

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* ================= DYNAMIC GLOWING LINE SYSTEM ================= */}

            {/* Desktop Glow Line (Horizontal) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
              <defs>
                {/* Glow Filter */}
                <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                {/* Laser Gradient */}
                <linearGradient id="laser-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e5e5e5" stopOpacity="0" />
                  <stop offset="15%" stopColor="#171717" stopOpacity="1" />
                  <stop offset="50%" stopColor="#a3a3a3" stopOpacity="1" />
                  <stop offset="85%" stopColor="#171717" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e5e5e5" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Dim structural base rail */}
              <line x1="12%" y1="50%" x2="88%" y2="50%" stroke="#e5e5e5" strokeWidth="1" />

              {/* Primary glowing pulse rail */}
              <motion.line
                x1="12%"
                y1="50%"
                x2="88%"
                y2="50%"
                stroke="url(#laser-grad)"
                strokeWidth="2"
                strokeDasharray="40 120"
                animate={{ strokeDashoffset: [0, -320] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
                filter="url(#line-glow)"
              />
            </svg>

            {/* Mobile Glow Line (Vertical) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden z-0">
              <line x1="50%" y1="8%" x2="50%" y2="92%" stroke="#e5e5e5" strokeWidth="1" />
              <motion.line
                x1="50%"
                y1="8%"
                x2="50%"
                y2="92%"
                stroke="#171717"
                strokeWidth="2"
                strokeDasharray="30 80"
                animate={{ strokeDashoffset: [0, -220] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" as const }}
              />
            </svg>

            {/* Modern Connected Cards */}
            <div className="relative z-10 w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-stretch my-auto">
              {[
                {
                  phase: "01",
                  title: "Foundation",
                  desc: "Core architecture setup",
                  active: false,
                },
                {
                  phase: "02",
                  title: "Infrastructure",
                  desc: "Distributed framework modules",
                  active: false,
                },
                {
                  phase: "03",
                  title: "Scalability",
                  desc: "High-throughput optimization",
                  active: false,
                },
                {
                  phase: "04",
                  title: "Sustainable Growth",
                  desc: "Continuous ecosystem expansion",
                  active: true,
                },
              ].map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.12,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25, ease: "easeOut" as const },
                  }}
                  className={`relative flex-1 flex flex-col justify-between p-5 md:p-6 rounded-2xl border transition-all ${
                    node.active
                      ? "bg-black text-white border-transparent shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                      : "bg-white/80 backdrop-blur-md border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.01)]"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center w-full">
                    <span
                      className={`text-[10px] font-mono tracking-widest ${
                        node.active ? "text-neutral-400" : "text-gray-400"
                      }`}
                    >
                      {node.phase}
                    </span>

                    {/* Status Indicator */}
                    <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                      <motion.span
                        animate={{
                          scale: [1, 2.2, 1],
                          opacity: node.active
                            ? [0.3, 0.6, 0.3]
                            : [0.15, 0.4, 0.15],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                          delay: idx * 0.3,
                        }}
                        className={`absolute w-full h-full rounded-full ${
                          node.active ? "bg-white" : "bg-black"
                        }`}
                      />
                      <span
                        className={`relative w-2 h-2 rounded-full border ${
                          node.active
                            ? "bg-white border-white"
                            : "bg-white border-black"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="mt-8 md:mt-12">
                    <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase leading-none">
                      {node.title}
                    </h3>
                    <p
                      className={`text-[11px] mt-2 tracking-normal font-normal leading-relaxed ${
                        node.active ? "text-neutral-400" : "text-gray-500"
                      }`}
                    >
                      {node.desc}
                    </p>
                  </div>

                  {/* Inner glass accent for active node */}
                  {node.active && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
};

export default MissionAbout;
