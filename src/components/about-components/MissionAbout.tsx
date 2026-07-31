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

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mt-16 lg:mt-24"
          >
   <motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="w-full mt-16 lg:mt-24"
>
  <div className="relative w-full aspect-[21/9] md:aspect-[4/1] overflow-hidden bg-[#fafafa] border border-gray-200 custom-notch-tl-br">

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

    {/* Connection Lines */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
    >
      {[
        ["150,150", "350,100"],
        ["350,100", "550,150"],
        ["550,150", "750,80"],
        ["750,80", "950,150"],
        ["350,100", "350,220"],
        ["550,150", "550,250"],
        ["750,80", "750,220"],
      ].map(([a, b], i) => (
        <motion.line
          key={i}
          x1={a.split(",")[0]}
          y1={a.split(",")[1]}
          x2={b.split(",")[0]}
          y2={b.split(",")[1]}
          stroke="#111"
          strokeWidth="1"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}
    </svg>

    {/* Growth Nodes */}
    {[
      { x: "12%", y: "50%" },
      { x: "30%", y: "33%" },
      { x: "46%", y: "50%" },
      { x: "63%", y: "27%" },
      { x: "80%", y: "50%" },
      { x: "30%", y: "73%" },
      { x: "46%", y: "83%" },
      { x: "63%", y: "73%" },
    ].map((node, i) => (
      <div
        key={i}
        className="absolute"
        style={{
          left: node.x,
          top: node.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Pulse */}
        <motion.div
          className="absolute inset-0 rounded-full border border-black/20"
          animate={{
            scale: [1, 2.5],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />

        {/* Core */}
        <motion.div
          className="w-3 h-3 rounded-full bg-black"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      </div>
    ))}

    {/* Data Flow */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-black"
        initial={{
          left: "12%",
          top: "50%",
        }}
        animate={{
          left: ["12%", "30%", "46%", "63%", "80%"],
          top: ["50%", "33%", "50%", "27%", "50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: i * 2,
        }}
      />
    ))}

    {/* Sustainable Growth Rings */}
    <div className="absolute right-16 top-1/2 -translate-y-1/2">
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border border-black/15 rounded-full"
          style={{
            width: 80 + ring * 60,
            height: 80 + ring * 60,
            left: -(40 + ring * 30),
            top: -(40 + ring * 30),
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 20 + ring * 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>

    {/* Labels */}
    <div className="absolute bottom-6 left-6 flex gap-10 text-[10px] uppercase tracking-[0.25em] text-gray-400 font-medium">
      <span>Foundation</span>
      <span>Infrastructure</span>
      <span>Scalability</span>
      <span>Sustainable Growth</span>
    </div>
  </div>
</motion.div>
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
