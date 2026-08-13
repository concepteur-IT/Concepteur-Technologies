"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enterprise Digital Solutions",
  provider: {
    "@type": "Organization",
    name: "Concepteur Technologies",
  },
  description:
    "Digital transformation, AI adoption, process automation, and legacy modernization solutions engineered for scalable performance.",
};

export default function SolutionsClient() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* REDESIGNED INTERLOCKING HERO */}
      <section className="w-full pt-[110px] pb-24 md:pt-[140px] px-5 md:px-[10%] xl:px-[15%] bg-white">
        {/* Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gray-300" />
            Solutions Framework
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight">
            Transforming Complexity
            <br />
            <span className="text-gray-300">Into Scalable Advantage.</span>
          </h1>

          <p className="mt-5 max-w-xl text-gray-500 leading-relaxed text-sm md:text-base">
            At Concepteur Technologies, solutions are not predefined packages.
            <span className="font-medium text-black">
              {" "}
              They are engineered responses to real business challenges.
            </span>
          </p>
        </motion.div>

        {/* WIREFRAME */}
        <div className="relative mt-10 h-[440px] md:h-[470px] rounded-[38px] overflow-hidden bg-[#fafafa]">
          {/* Flow Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
          >
            <path
              d="M90 300 C320 90 600 500 1110 230"
              stroke="#d7d7d7"
              strokeWidth="2"
            />
            <path
              d="M140 380 C420 170 720 480 1060 310"
              stroke="#e5e5e5"
              strokeWidth="1.5"
            />
          </svg>

          {/* Complexity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute left-8 md:left-14 top-20"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">
              Complexity
            </p>

            <div className="space-y-3">
              {[
                "Disconnected Systems",
                "Manual Processes",
                "Growing Data",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs md:text-sm text-gray-600"
                >
                  <span className="w-2 h-2 rounded-full bg-gray-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-black flex flex-col items-center justify-center shadow-xl text-white">
              <p className="text-[9px] tracking-[0.3em] uppercase text-gray-400">
                Core
              </p>
              <h3 className="text-base md:text-lg font-light mt-2">
                Engineering
              </h3>
            </div>
          </motion.div>

          {/* Advantage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute right-8 md:right-14 top-20"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">
              Advantage
            </p>

            <div className="space-y-3">
              {[
                "Scalable Systems",
                "Optimized Operations",
                "Future Ready",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs md:text-sm font-medium text-gray-900"
                >
                  <span className="w-6 h-[1px] bg-black" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Detail */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[560px] text-center"
          >
            <p className="text-xs md:text-sm leading-relaxed text-gray-500">
              We combine system architecture, disciplined engineering and
              AI-enhanced execution to design solutions that improve performance,
              reduce operational overhead and prepare organizations for
              long-term scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STICKY SCROLL CONTENT ARCHITECTURE */}
      <section className="w-full px-5 md:px-[10%] xl:px-[15%]">
        {/* CHAPTER 01: DIGITAL TRANSFORMATION */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-20 border-t border-gray-200 relative">
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-[120px] lg:text-[160px] font-light leading-none text-gray-100 tracking-tighter block mb-4 -ml-2">
                01
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
                Digital
                <br />
                Transformation
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                Modern systems require more than visual redesign. They require
                structural reinvention.
              </p>
            </div>
          </div>

          <div className="lg:w-full flex flex-col md:flex-row gap-8 items-stretch max-w-5xl">
            {/* Left Side: Feature Section */}
            <div className="w-full md:w-1/2 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">
                Our solutions focus on:
              </p>

              <div className="flex flex-col gap-4 flex-grow">
                {[
                  "Re-architecting legacy infrastructure",
                  "Migrating to scalable cloud environments",
                  "Enhancing performance and reliability",
                  "Redesigning data pipelines",
                  "Improving system interoperability",
                ].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="group relative flex items-center justify-between px-4 py-4 rounded-lg border border-gray-200 bg-white transition-all duration-400 ease-[0.22,1,0.36,1] hover:border-black hover:shadow-md hover:-translate-y-[2px]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[11px] font-mono text-gray-400 group-hover:text-black transition-colors duration-300">
                          0{index + 1}
                        </span>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors duration-300 leading-snug tracking-tight">
                          {item}
                        </span>
                      </div>

                      <ArrowRight className="w-4 h-4 text-gray-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent pointer-events-none"></div>
                    </li>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-1 custom-notch-tl-br overflow-hidden group min-h-[300px]"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/2 left-[15%] right-[15%] h-px bg-black origin-left"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute left-[12%] top-1/2 -translate-y-1/2"
              >
                <div className="w-20 h-20 border border-gray-300 bg-white flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-300" />
                    ))}
                  </div>
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-3 text-center">
                  Legacy
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative w-28 h-28 rounded-full border border-black bg-white flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-3 border border-dashed border-gray-300 rounded-full"
                  />

                  <div className="text-center">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-gray-400">
                      Process
                    </p>
                    <p className="text-sm font-medium mt-1">Transform</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute right-[12%] top-1/2 -translate-y-1/2"
              >
                <div className="w-20 h-20 border border-gray-300 bg-white flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-6 border border-black rounded-full" />
                    <div className="w-8 h-5 border border-black rounded-full absolute -top-2 left-3 bg-white" />
                  </div>
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-3 text-center">
                  Cloud
                </p>
              </motion.div>

              {[
                { title: "DATA", top: "18%", left: "34%" },
                { title: "AI", top: "22%", right: "26%" },
                { title: "API", bottom: "20%", left: "38%" },
                { title: "AUTO", bottom: "24%", right: "22%" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="absolute border border-black bg-white px-3 py-2 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                  }}
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] text-black">
                    {item.title}
                  </span>
                </motion.div>
              ))}

              <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] text-gray-400 uppercase tracking-[0.25em]">
                <span>Infrastructure</span>
                <span>Modernization</span>
                <span>Scalability</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CHAPTER 02: AI ADOPTION */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-20 border-t border-gray-200 relative">
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-[120px] lg:text-[160px] font-light leading-none text-gray-100 tracking-tighter block mb-4 -ml-2">
                02
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
                AI Adoption
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                Artificial Intelligence must be implemented responsibly and
                strategically.
              </p>
            </div>
          </div>

          <div className="lg:w-full flex flex-col md:flex-row gap-8 items-stretch max-w-5xl">
            <div className="w-full md:w-1/2 flex flex-col pt-[38px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 bg-white custom-notch-tl-br overflow-hidden group min-h-[300px] "
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 500"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M400 250 L180 120"
                    stroke="#d4d4d4"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M400 250 L620 120"
                    stroke="#d4d4d4"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M400 250 L180 380"
                    stroke="#d4d4d4"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M400 250 L620 380"
                    stroke="#d4d4d4"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M180 120 L180 380"
                    stroke="#ececec"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M620 120 L620 380"
                    stroke="#ececec"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M180 120 L620 120"
                    stroke="#ececec"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M180 380 L620 380"
                    stroke="#ececec"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-28 h-28 border-2 border-black rounded-full bg-white flex flex-col items-center justify-center shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-black mb-2" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
                      AI Core
                    </span>
                  </div>
                </motion.div>

                {[
                  {
                    pos: "left-[12%] top-[14%]",
                    title: "People",
                    subtitle: "Enablement",
                  },
                  {
                    pos: "right-[12%] top-[14%]",
                    title: "Process",
                    subtitle: "Automation",
                  },
                  {
                    pos: "left-[12%] bottom-[14%]",
                    title: "Data",
                    subtitle: "Insights",
                  },
                  {
                    pos: "right-[12%] bottom-[14%]",
                    title: "Growth",
                    subtitle: "Scale",
                  },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${node.pos} z-10`}
                  >
                    <div className="w-24 h-24 border border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm">
                      <div className="w-6 h-6 rounded-full border border-black mb-2" />
                      <span className="text-[11px] font-medium tracking-tight">
                        {node.title}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-gray-400 mt-1">
                        {node.subtitle}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {[
                  { left: "32%", top: "22%" },
                  { left: "38%", top: "34%" },
                  { left: "67%", top: "28%" },
                  { left: "58%", top: "18%" },
                  { left: "29%", top: "62%" },
                  { left: "40%", top: "72%" },
                  { left: "63%", top: "68%" },
                  { left: "55%", top: "80%" },
                  { left: "50%", top: "32%" },
                  { left: "46%", top: "65%" },
                  { left: "60%", top: "50%" },
                  { left: "35%", top: "50%" },
                ].map((particle, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 2 + (i % 3),
                      repeat: Infinity,
                    }}
                    className="absolute w-1.5 h-1.5 bg-black rounded-full"
                    style={{
                      left: particle.left,
                      top: particle.top,
                    }}
                  />
                ))}

                <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white">
                    <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                      AI Adoption Framework
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-8">
                Our AI Adoption solutions help organizations:
              </p>

              <div className="relative flex flex-col gap-6 pl-6">
                <span className="absolute left-2 top-0 w-[1px] h-full bg-gray-200"></span>

                {[
                  "Identify high-impact automation opportunities",
                  "Integrate AI into existing workflows",
                  "Deploy intelligent agents and recommendation systems",
                  "Implement OCR and data intelligence pipelines",
                  "Build AI-driven decision support systems",
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group relative flex items-start gap-4"
                    >
                      <span className="absolute left-[-10px] top-1 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-black transition-colors duration-300"></span>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-start gap-4">
                          <span className="text-[11px] font-mono text-gray-400 group-hover:text-black transition-colors">
                            0{index + 1}
                          </span>
                          <span className="text-sm text-gray-600 group-hover:text-black transition-colors leading-snug">
                            {item}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.15em] text-black leading-tight">
                AI is integrated where it creates measurable value — <br />
                not where it creates noise.
              </p>
            </div>
          </div>
        </div>

        {/* CHAPTER 03: PROCESS AUTOMATION */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-20 border-t border-gray-200 relative">
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-[120px] lg:text-[160px] font-light leading-none text-gray-100 tracking-tighter block mb-4 -ml-2">
                03
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
                Process
                <br />
                Automation
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                Operational inefficiency limits scalability.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black">
                Process Automation
              </h2>

              <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
                {[
                  "Reduce repetitive manual tasks",
                  "Improve data accuracy",
                  "Accelerate processing cycles",
                  "Integrate cross-platform workflows",
                  "Enable real-time system coordination",
                ].map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group py-5 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-gray-400">
                          0{index + 1}
                        </span>
                        <p className="text-sm md:text-base text-black font-medium tracking-tight">
                          {item}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-all duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col pt-[38px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 overflow-hidden min-h-[300px]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] max-w-[500px]">
                    <div className="flex items-center justify-between">
                      <div className="w-24 h-24 border border-gray-300 bg-white flex flex-col items-center justify-center">
                        <div className="w-8 h-8 rounded-full border border-black mb-2" />
                        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500">
                          Input
                        </span>
                      </div>

                      <div className="flex-1 h-px bg-gray-300 mx-4 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-black rotate-45" />
                      </div>

                      <div className="w-28 h-28 border border-black bg-white flex flex-col items-center justify-center relative">
                        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-black animate-pulse" />
                        </div>
                        <span className="absolute bottom-3 text-[9px] uppercase tracking-[0.25em] text-gray-500">
                          Process
                        </span>
                      </div>

                      <div className="flex-1 h-px bg-gray-300 mx-4 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-black rotate-45" />
                      </div>

                      <div className="w-24 h-24 border border-gray-300 bg-white flex flex-col items-center justify-center">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-3 h-3 bg-black" />
                          <div className="w-3 h-3 border border-black" />
                          <div className="w-3 h-3 border border-black" />
                          <div className="w-3 h-3 bg-black" />
                        </div>
                        <span className="mt-2 text-[9px] uppercase tracking-[0.25em] text-gray-500">
                          Output
                        </span>
                      </div>
                    </div>

                    <div className="mt-10 border border-gray-200 bg-white p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400">
                          Automation Status
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                          <span className="text-[9px] text-gray-500">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[92, 78, 95].map((v, i) => (
                          <div key={i}>
                            <div className="h-[3px] bg-gray-100 overflow-hidden">
                              <div
                                className="h-full bg-black"
                                style={{ width: `${v}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CHAPTER 04: LEGACY MODERNIZATION */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 py-20 border-t border-gray-200 relative">
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <span className="text-[120px] lg:text-[160px] font-light leading-none text-gray-100 tracking-tighter block mb-4 -ml-2">
                04
              </span>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
                Legacy
                <br />
                Modernization
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                Outdated systems create risk, cost, and performance bottlenecks.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col md:flex-row gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-1 bg-[#fafafa] custom-notch-tl-br overflow-hidden group min-h-[300px]"
            >
              <div className="absolute inset-0 bg-white" />
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <div className="w-full max-w-md">
                  <div className="relative border border-gray-300 bg-white p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                        Legacy System
                      </span>
                      <span className="text-[10px] text-gray-300">01</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 w-full" />
                      <div className="h-2 bg-gray-200 w-4/5" />
                      <div className="h-2 bg-gray-200 w-3/4" />
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center mb-6">
                    <div className="w-full border-t border-dashed border-gray-300" />
                    <div className="absolute px-3 bg-[#fafafa] text-[9px] uppercase tracking-[0.3em] text-gray-400">
                      Modernize
                    </div>
                  </div>

                  <div className="border border-black bg-white p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-black">
                        Modern Architecture
                      </span>
                      <span className="text-[10px] text-gray-400">02</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-12 border border-gray-300 flex items-center justify-center text-[8px] uppercase tracking-wider text-gray-500">
                        API
                      </div>
                      <div className="h-12 border border-gray-300 flex items-center justify-center text-[8px] uppercase tracking-wider text-gray-500">
                        Cloud
                      </div>
                      <div className="h-12 border border-gray-300 flex items-center justify-center text-[8px] uppercase tracking-wider text-gray-500">
                        Data
                      </div>
                    </div>

                    <div className="mt-3 h-px bg-black" />
                    <div className="mt-3 flex justify-between text-[8px] uppercase tracking-[0.2em] text-gray-400">
                      <span>Scalable</span>
                      <span>Secure</span>
                      <span>Flexible</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-6 top-2/2 -translate-y-1/2">
                <div className="flex items-center gap-2 -rotate-90 origin-left">
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
                  <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-gray-500">
                    Legacy Modernization
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-400 border-b border-gray-200 pb-4 mb-2">
                Our modernization approach includes:
              </p>

              {[
                "Codebase restructuring",
                "Database optimization",
                "Infrastructure migration",
                "API-first re-architecture",
                "Security reinforcement",
              ].map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <span className="w-6 h-px bg-gray-300 group-hover:bg-black transition-colors" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINED EXECUTION LOGIC */}
      <section className="py-16 md:py-20 px-5 md:px-8 lg:px-10 border-b border-gray-300 bg-white">
        <div className="max-w-[1350px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight max-w-3xl">
              Built for Long-Term Performance
            </h2>

            <p className="text-sm md:text-base text-gray-700 max-w-lg">
              Technology decisions should serve long-term strategy.
            </p>
          </div>

          <div className="border-y border-gray-300 py-5 mb-14">
            <div className="flex items-center gap-8 bg-black text-white px-10 py-6">
              <span className="w-12 h-[1px] bg-white" />

              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/70 mb-1">
                  We do not deliver isolated features.
                </p>
                <p className="text-base md:text-lg font-semibold">
                  We engineer operational advantage.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 mb-8">
              Our solutions are designed to:
            </p>

            <div className="flex flex-col divide-y divide-gray-300">
              {[
                {
                  title: "Scale with growth",
                  desc: "Infrastructure that adapts as demand increases",
                },
                {
                  title: "Minimize technical debt",
                  desc: "Clean architecture that reduces future rework",
                },
                {
                  title: "Strengthen security posture",
                  desc: "Built-in protection across systems and workflows",
                },
                {
                  title: "Reduce infrastructure cost",
                  desc: "Optimized usage without sacrificing performance",
                },
                {
                  title: "Enable continuous innovation",
                  desc: "Flexible systems that support rapid iteration",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center justify-between gap-14 py-6 transition-all duration-300 hover:pl-4"
                >
                  <div className="flex items-center gap-6 min-w-[320px]">
                    <span className="text-sm font-mono text-gray-400 group-hover:text-black transition">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>

                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>

                  <div className="flex-1 flex items-center justify-end gap-10">
                    <p className="text-sm md:text-base text-gray-600 text-right max-w-xl leading-relaxed">
                      {item.desc}
                    </p>

                    <span className="w-12 h-[2px] bg-gray-400 group-hover:w-20 group-hover:bg-black transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full pt-32 pb-10 px-5 md:px-[10%] xl:px-[15%] flex flex-col items-center text-center">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
          Ready to Move Forward?
        </h3>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-black leading-[1.05] tracking-tight mb-12">
          Let’s build systems <br className="hidden md:block" />
          <span className="text-gray-400">that perform at scale.</span>
        </h2>
        <div className="shrink-0 w-full md:w-auto">
          <Link
            href="/contact"
            className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-5 md:px-10 md:py-6 text-base font-medium hover:bg-gray-800 transition-colors custom-notch-tl-br"
          >
            Start Conversation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
