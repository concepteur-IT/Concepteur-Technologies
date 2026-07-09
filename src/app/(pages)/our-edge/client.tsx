"use client";
import { ArrowRight, MoveUpRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const easeBezier: any = [0.22, 1, 0.36, 1];

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeBezier },
  },
};

export default function OurEdgeClient() {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      className="bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen pt-[80px]"
    >
      <motion.section
        className="relative py-10 md:py-18 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: easeBezier }}
      >
        <div className="w-full px-5 md:px-[15%]">
          <div className="relative flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-black"></span>
                01 — The Difference We Bring
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-black leading-[1.05] mb-8">
                Engineering First.
                <br />
                <span className="font-light">Intelligence Enhanced.</span>
              </h1>

              <div className="text-gray-800 text-base md:text-lg font-light leading-relaxed space-y-6">
                <p>
                  At Concepteur Technologies, systems are{" "}
                  <span className="font-medium text-black">
                    architected by experienced engineers
                  </span>{" "}
                  — not generated blindly.
                </p>

                <p>
                  We believe AI is powerful.
                  <br />
                  But expertise is decisive.
                </p>

                <p className="text-gray-600">
                  Every solution begins with human-led architecture: structured
                  planning, scalability modeling, security design, and long-term
                  maintainability considerations. Once the foundation is
                  engineered correctly, we enhance execution with AI-assisted
                  acceleration where it adds measurable value.
                </p>

                <div className="pl-6 border-l-2 border-black py-2">
                  <p className="text-sm font-bold uppercase tracking-widest text-black">
                    AI supports our engineers.
                    <br />
                    It does not replace them.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Wireframe */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[560px] aspect-square"
              >
                {/* Outer Circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-10 rounded-full border border-gray-300"
                />

                {/* Second Circle */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-20 rounded-full border border-gray-400 border-dashed"
                />

                {/* Center */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2  z-[10] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-[#0b2f33] bg-white flex items-center justify-center shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0b2f33]" />
                </motion.div>

                {/* Top */}
                {/* Top */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-2 z-[10] -translate-x-1/2 w-20 h-20 rounded-xl border border-gray-400 bg-white flex flex-col items-center justify-center text-center p-2 shadow-md"
                >
                  <span className="text-[14px] font-semibold text-[#0b2f33]">
                    AI
                  </span>
                  <span className="text-[14px] text-gray-500 leading-tight">
                    Automation
                  </span>
                </motion.div>

                {/* Bottom */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 bottom-2 z-[10] -translate-x-1/2 w-20 h-20 rounded-xl border border-gray-400 bg-white flex items-center justify-center"
                >
                  <span className="text-[14px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Scalability
                  </span>
                </motion.div>

                {/* Left */}
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute left-2 top-1/2 z-[10] -translate-y-1/2 w-20 h-20 rounded-xl border border-gray-400 bg-white flex items-center justify-center"
                >
                  <span className="text-[14px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Engineering
                  </span>
                </motion.div>

                {/* Right */}
                <motion.div
                  animate={{ x: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute right-2 top-1/2 z-[10] -translate-y-1/2 w-20 h-20 rounded-xl border border-gray-400 bg-white flex items-center justify-center"
                >
                  <span className="text-[14px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Innovation
                  </span>
                </motion.div>

                {/* Top Left */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.2,
                  }}
                  className="absolute left-14 top-14 z-[10] w-16 h-16 rounded-lg border border-gray-300 bg-white flex items-center justify-center"
                >
                  <span className="text-[11px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Strategy
                  </span>
                </motion.div>

                {/* Top Right */}
                <motion.div
                  animate={{
                    scale: [1.05, 1, 1.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                  className="absolute right-14 top-14 z-[10] w-16 h-16 rounded-lg border border-gray-300 bg-white flex items-center justify-center"
                >
                  <span className="text-[11px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Security
                  </span>
                </motion.div>

                {/* Bottom Left */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute left-14 bottom-14 z-[10] w-16 h-16 rounded-lg border border-gray-300 bg-white flex items-center justify-center"
                >
                  <span className="text-[11px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Reliability
                  </span>
                </motion.div>

                {/* Bottom Right */}
                <motion.div
                  animate={{
                    scale: [1.05, 1, 1.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.4,
                  }}
                  className="absolute right-14 bottom-14 z-[10] w-16 h-16 rounded-lg border border-gray-300 bg-white flex items-center justify-center"
                >
                  <span className="text-[11px] font-semibold text-[#0b2f33] text-center leading-tight">
                    Automation
                  </span>
                </motion.div>
                {/* Connection Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 600 600"
                  fill="none"
                >
                  <motion.path
                    d="M300 70 L300 260"
                    stroke="#BDBDBD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  <motion.path
                    d="M300 340 L300 530"
                    stroke="#BDBDBD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  <motion.path
                    d="M70 300 L260 300"
                    stroke="#BDBDBD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  <motion.path
                    d="M340 300 L530 300"
                    stroke="#BDBDBD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                  />

                  <motion.path
                    d="M300 300 L120 120"
                    stroke="#D6D6D6"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                  />

                  <motion.path
                    d="M300 300 L480 120"
                    stroke="#D6D6D6"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                  />

                  <motion.path
                    d="M300 300 L120 480"
                    stroke="#D6D6D6"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                  />

                  <motion.path
                    d="M300 300 L480 480"
                    stroke="#D6D6D6"
                    strokeWidth="1"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                </svg>

                {/* Animated Signal */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-1/2 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#0b2f33]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 02. "ARCHITECTURE BEFORE AUTOMATION" - Bento Box Grid */}
      <section className="py-24 md:py-32 bg-[#FAFAF9] border-t border-gray-100">
        <div className="w-full px-5 md:px-[15%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mb-16 md:mb-24"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300"></span>
              02 — Foundation
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-black mb-8">
              Architecture <br />
              <span className="font-light text-gray-500">
                Before Automation
              </span>
            </h2>
            <p className="text-xl font-light text-gray-800">
              We design systems from the ground up:
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 custom-notch-tl-br overflow-hidden bg-white">
            {[
              "Clear technical specifications",
              "Scalable backend architecture",
              "Structured database design",
              "Defined API contracts",
              "Infrastructure planning",
              "Security modeling",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-8 border-b border-r border-gray-100 hover:bg-black transition-colors duration-500 flex flex-col justify-between min-h-[220px]"
              >
                <span className="text-xs font-mono text-[#f5ad76] mb-6 opacity-80">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-black group-hover:text-white transition-colors duration-500 mb-2">
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mt-16 max-w-3xl space-y-6"
          >
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Only after the architecture is validated do we introduce
              AI-enhanced workflows to improve speed, pattern recognition,
              testing efficiency, and optimization.
            </p>
            <p className="text-2xl font-medium text-black">
              This ensures quality is never compromised for speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03. "AI AS AN ENGINEERING MULTIPLIER" - Clean Floating Cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="w-full px-5 md:px-[15%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16 md:mb-24"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-300"></span>
              03 — Strategy
              <span className="w-8 h-[1px] bg-gray-300"></span>
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-center max-w-4xl mx-auto mb-8">
              AI as an Engineering{" "}
              <span className="font-semibold text-[#0b2f33]">Multiplier</span>
            </h2>
            <p className="text-xl text-gray-600">
              We integrate AI responsibly and strategically:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Code analysis assistance",
              "Intelligent testing support",
              "Automation of repetitive engineering tasks",
              "Performance optimization insights",
              "Data processing enhancement",
              "AI-driven product features for end users",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-[#FAFAF9] p-8 custom-notch-tl-br border border-transparent hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-all duration-500 group flex flex-col items-center text-center h-full justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-black group-hover:border-black group-hover:text-white transition-colors duration-500">
                  <MoveUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-black group-hover:text-black transition-colors">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="mt-24 md:mt-32 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-12 h-px bg-black mt-3 shrink-0" />
            <div className="space-y-6 flex-1 text-lg md:text-2xl font-light leading-relaxed">
              <p>
                Our internal processes may be enhanced by AI, but final system
                decisions are always reviewed, refined, and validated by senior
                engineers.
              </p>
              <p className="font-medium text-black">
                The result is faster execution without sacrificing precision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. "BUILT FOR SCALE" - Interlocking Blocks */}
      <section className="bg-black text-white overflow-hidden py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="p-12 md:p-24 flex flex-col justify-center min-h-[500px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300 font-bold flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gray-300"></span>
                04 — Engineering
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                Built for Scale —<br />
                Not Just Delivery
              </h2>
              <div className="space-y-6 text-xl md:text-2xl font-light text-gray-300">
                <p>
                  We do not build short-term projects.
                  <br />
                  We engineer scalable digital systems.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-xl text-white mb-6">
                  Every product is evaluated for:
                </p>
                <ul className="space-y-4 text-lg font-light text-gray-300">
                  {[
                    "Horizontal scalability",
                    "Database efficiency",
                    "Infrastructure cost control",
                    "Security resilience",
                    "Future feature expansion",
                  ].map((item, i) => (
                    <li key={item} className="flex items-center gap-4">
                      <ArrowRight className="w-5 h-5 text-gray-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          {/* Right Image/Graphic Block */}
          <div className="relative min-h-[400px] lg:min-h-full bg-gray-900 overflow-hidden">
            <Image
              src="/home/bg-backend.png"
              fill
              alt="Scale and Reliability"
              className="object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 max-w-sm custom-notch-tl-br">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-2">
                  The Standard
                </p>
                <p className="text-lg font-light">
                  AI helps accelerate workflows.
                  <br />
                  Engineering ensures long-term stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. "FOCUS" & 06. "STANDARDS" - Minimalist Typography */}
      <section className="py-24 md:py-32 bg-[#FAFAF9] border-b border-gray-200">
        <div className="w-full px-5 md:px-[15%]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Intelligent Products */}
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-gray-400"></span>
                  05 — Focus
                </p>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 uppercase">
                  Intelligent Products, <br />
                  <span className="text-gray-400">Not Automated Shortcuts</span>
                </h2>
                <p className="text-xl text-gray-600 font-light mb-8">
                  When we develop AI-powered features for clients — such as:
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {[
                    "AI agents",
                    "Intelligent automation",
                    "OCR systems",
                    "Predictive analytics",
                    "LLM integrations",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2.5 bg-white border border-gray-200 text-sm md:text-base font-light rounded-full text-black shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm custom-notch-tl-br">
                  <p className="text-lg md:text-xl font-light text-gray-800 mb-6">
                    These are custom-designed systems integrated into structured
                    architecture. They are not plug-and-play gimmicks.
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-black leading-tight">
                    We build AI into products where it delivers operational or
                    strategic advantage.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Standards Timeline */}
            <div className="lg:w-1/2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariant}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-gray-400"></span>
                  06 — Standards
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-12 leading-[1.1]">
                  Clean Code. <br />
                  <span className="font-semibold text-black">
                    Structured <br className="hidden md:block" /> Execution.
                  </span>
                </h2>

                <p className="text-xl font-light text-gray-600 mb-8">
                  Our engineering standards include:
                </p>

                <div className="space-y-0 mb-12">
                  {[
                    "Modular architecture",
                    "Version-controlled workflows",
                    "Environment separation (Development / Staging / Production)",
                    "Technical documentation",
                    "Code review processes",
                    "Security best practices",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-6 py-5 border-b border-gray-200 group"
                    >
                      <span className="text-xs font-mono text-gray-400 px-2 py-1 bg-white border border-gray-100">
                        0{index + 1}
                      </span>
                      <p className="text-xl md:text-2xl font-light text-black group-hover:text-black transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium text-black max-w-md">
                  AI may assist in analysis or acceleration, but ownership
                  remains human.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. "EVOLUTION" */}
      <section className="py-24 md:py-32 bg-white">
        <div className="w-full px-5 md:px-[15%] flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-gray-400"></span>
              07 — Evolution
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Responsible Innovation
            </h2>
            <div className="text-xl text-gray-600 font-light space-y-6">
              <p>Technology is evolving rapidly.</p>
              <p className="text-black font-medium border-l-2 border-black pl-5">
                We adapt — without compromising engineering discipline.
              </p>
              <p className="pt-8">We combine:</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-8 mb-12">
              {[
                "Human system design expertise",
                "AI-enhanced productivity",
                "Modern development frameworks",
                "Scalable infrastructure strategy",
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-black border-b border-gray-200 w-max pb-1 mb-3 text-xs font-bold uppercase tracking-widest">
                    Component {index + 1}
                  </span>
                  <span className="text-2xl md:text-3xl font-light text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-[#FAFAF9] p-8 md:p-12 custom-notch-tl-br border border-gray-100"
            >
              <p className="text-xl md:text-2xl font-medium text-black leading-snug">
                This balance allows us to deliver intelligent systems that are
                both innovative and reliable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 08. IMMERSIVE CONCLUSION CTA */}
      <section className="py-32 px-5 md:px-[15%] text-center bg-black text-white relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-300 font-bold flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gray-300"></span>
            08 — Conclusion
            <span className="w-8 h-[1px] bg-gray-300"></span>
          </p>

          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-16 leading-relaxed">
            Many teams either rely entirely on manual processes or depend
            excessively on automation. <br />
            <span className="font-semibold text-white">
              We operate differently.
            </span>
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter uppercase leading-[1.0] mb-24 flex flex-col gap-4">
            <span className="text-white">We engineer first.</span>
            <span className="text-gray-400">We enhance intelligently.</span>
            <span className="text-gray-500">We validate rigorously.</span>
            <span className="text-gray-600">We deliver responsibly.</span>
          </h2>

          <div className="inline-block p-1 bg-white/5 border border-white/10 mb-20 custom-notch-tl-br">
            <div className="p-8 md:p-12">
              <p className="text-lg md:text-2xl font-mono uppercase tracking-[0.1em] text-[#f5ad76]">
                That is the difference we bring.
              </p>
            </div>
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 font-semibold text-sm uppercase tracking-widest hover:bg-gray-100 hover:text-black transition-all duration-300 group custom-notch-tl-br shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
            >
              Start A Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
