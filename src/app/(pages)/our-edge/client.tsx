"use client";
import { ArrowRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function OurEdgeClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={containerRef}
      className="bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen"
    >
      {/* HERO SECTION - MASSIVE TYPOGRAPHY */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 border-b border-gray-200">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-gray-100 hidden lg:block pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8"
          >
            01 — The Difference We Bring
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight leading-[1.05] mb-12">
              Engineering First.
              <br />
              <span className="text-gray-400 font-light italic">
                Intelligence Enhanced.
              </span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-6 lg:col-start-7 text-lg md:text-2xl font-light text-gray-800 space-y-8 leading-relaxed">
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
              <p className="text-base md:text-lg text-gray-600">
                Every solution begins with human-led architecture: structured
                planning, scalability modeling, security design, and long-term
                maintainability considerations. Once the foundation is
                engineered correctly, we enhance execution with AI-assisted
                acceleration where it adds measurable value.
              </p>
              <div className="pl-6 border-l-2 border-black">
                <p className="text-sm font-bold uppercase tracking-widest text-black">
                  AI supports our engineers.
                  <br />
                  It does not replace them.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - STICKY SPLIT LAYOUT */}
      <section className="relative border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-5/12 p-8 md:p-16 lg:p-24 lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center lg:border-r border-gray-200 bg-gray-50/30">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                02 — Foundation
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
                Architecture <br />
                <span className="font-light text-gray-500">
                  Before Automation
                </span>
              </h2>
              <p className="text-xl font-light text-gray-800">
                We design systems from the ground up:
              </p>
            </motion.div>
          </div>
          <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-16">
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 flex flex-col justify-between aspect-square hover:bg-black hover:text-white transition-colors duration-500"
                >
                  <span className="text-xs font-mono opacity-50 mb-8">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 font-light">
                Only after the architecture is validated do we introduce
                AI-enhanced workflows to improve speed, pattern recognition,
                testing efficiency, and optimization.
              </p>
              <p className="text-2xl font-medium text-black">
                This ensures quality is never compromised for speed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - OFFSET GRID & BORDERS */}
      <section className="py-24 md:py-32 px-6 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-20 md:mb-32"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              03 — Strategy
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center max-w-4xl mx-auto">
              AI as an Engineering{" "}
              <span className="font-semibold">Multiplier</span>
            </h2>
            <p className="text-xl text-gray-600 mt-8">
              We integrate AI responsibly and strategically:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {[
              "Code analysis assistance",
              "Intelligent testing support",
              "Automation of repetitive engineering tasks",
              "Performance optimization insights",
              "Data processing enhancement",
              "AI-driven product features for end users",
            ].map((item, i) => (
              <div
                key={item}
                className="p-10 border-r border-b border-gray-200 group relative overflow-hidden bg-white"
              >
                <div className="absolute inset-0 bg-gray-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                  <span className="inline-flex mx-auto w-8 h-8 rounded-full border border-black items-center justify-center text-xs mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500 shrink-0">
                    <MoveUpRight className="w-4 h-4" />
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium">{item}</h3>
                </div>
              </div>
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

      {/* SECTION 4 - MINIMALIST TYPOGRAPHY HEAVY */}
      <section className="py-32 px-6 border-b border-gray-200 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                04 — Engineering
              </p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Built for Scale —<br />
                Not Just Delivery
              </h2>
              <div className="space-y-6 text-xl md:text-2xl font-light text-gray-600">
                <p>
                  We do not build short-term projects.
                  <br />
                  We engineer scalable digital systems.
                </p>
                <div className="p-8 border-l border-black mt-12 hidden lg:block">
                  <p className="text-sm font-bold uppercase tracking-widest text-black mb-2">
                    The Standard
                  </p>
                  <p className="text-lg">
                    AI helps accelerate workflows.
                    <br />
                    Engineering ensures long-term stability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-xl text-black mb-8 border-b border-black pb-4 inline-block w-max">
              Every product is evaluated for:
            </p>
            <ul className="space-y-0 text-2xl md:text-4xl font-light">
              {[
                "Horizontal scalability",
                "Database efficiency",
                "Infrastructure cost control",
                "Security resilience",
                "Future feature expansion",
              ].map((item, i) => (
                <li
                  key={item}
                  className="py-6 border-b border-gray-200 hover:pl-6 transition-all duration-300 flex items-center group cursor-default"
                >
                  <span className="w-0 overflow-hidden group-hover:w-8 group-hover:mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100 flex-shrink-0">
                    <ArrowRight className="w-6 h-6" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-8 border-l border-black mt-12 bg-white border border-gray-200 lg:hidden">
              <p className="text-lg font-medium text-black">
                AI helps accelerate workflows.
                <br />
                Engineering ensures long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - BRUTALIST LIST & MASSIVE HEADER */}
      <section className="py-24 md:py-32 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto space-y-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              05 — Focus
            </p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 uppercase">
              Intelligent Products,
              <br />
              <span className="text-gray-400">Not Automated Shortcuts</span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              When we develop AI-powered features for clients — such as:
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "AI agents",
              "Intelligent automation",
              "OCR systems",
              "Predictive analytics",
              "LLM integrations",
            ].map((item) => (
              <span
                key={item}
                className="px-6 md:px-10 py-4 md:py-5 border border-black text-lg md:text-2xl font-light hover:bg-black hover:text-white transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto bg-gray-50 p-12 border border-gray-200"
          >
            <p className="text-xl md:text-2xl font-light text-gray-800 mb-6">
              These are custom-designed systems integrated into structured
              architecture. They are not plug-and-play gimmicks.
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-black leading-tight">
              We build AI into products where it delivers operational or
              strategic advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - VERTICAL DIVIDERS */}
      <section className="relative flex flex-col lg:flex-row min-h-screen border-b border-gray-200">
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 bg-black text-white flex flex-col justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">
              06 — Standards
            </p>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-12 leading-[1.1]">
              Clean Code.
              <br />
              <span className="font-semibold">
                Structured <br />
                Execution.
              </span>
            </h2>
            <p className="text-xl font-light text-gray-400">
              Our engineering standards include:
            </p>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center divide-y divide-gray-200">
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
              className="py-8 md:py-10 flex gap-6 md:gap-8 hover:ml-4 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-mono text-gray-400 mt-1 shrink-0 bg-gray-50 px-2 py-1 h-min border border-gray-200">
                0{index + 1}
              </span>
              <p className="text-2xl md:text-3xl font-light">{item}</p>
            </div>
          ))}
          <div className="pt-16 pb-8">
            <p className="text-xl md:text-2xl font-medium text-black max-w-sm">
              AI may assist in analysis or acceleration, but ownership remains
              human.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - ARCHITECTURAL TWO-COLUMN LIST */}
      <section className="py-24 md:py-32 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
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
                  <span className="text-black border-b border-black w-max pb-1 mb-3 text-xs font-bold uppercase tracking-widest">
                    Component {index + 1}
                  </span>
                  <span className="text-2xl md:text-3xl font-light">
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
              className="bg-gray-100 p-8 md:p-12"
            >
              <p className="text-xl md:text-2xl font-medium text-black leading-snug">
                This balance allows us to deliver intelligent systems that are
                both innovative and reliable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL MASSIVE STATEMENT */}
      <section className="py-32 md:py-48 px-6 text-center border-b-8 border-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-12">
            08 — Conclusion
          </p>
          <p className="text-2xl md:text-3xl font-light text-gray-600 mb-16 leading-relaxed">
            Many teams either rely entirely on manual processes or depend
            excessively on automation. <br />
            <span className="text-black font-semibold">
              We operate differently.
            </span>
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter uppercase leading-[1.0] mb-24 flex flex-col gap-4">
            <span>We engineer first.</span>
            <span className="text-gray-400">We enhance intelligently.</span>
            <span className="text-gray-200">We validate rigorously.</span>
            <span>We deliver responsibly.</span>
          </h2>

          <div className="inline-block bg-black text-white p-1 md:p-2 border border-black">
            <div className="border border-white/20 p-8 md:p-12">
              <p className="text-lg md:text-2xl font-mono uppercase tracking-[0.1em]">
                That is the difference we bring.
              </p>
            </div>
          </div>

          <div className="mt-32">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-6 border border-gray-200 hover:border-black hover:bg-black hover:text-white px-12 py-8 transition-all duration-300"
            >
              <span className="text-sm font-bold uppercase tracking-widest">
                Start A Conversation
              </span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
