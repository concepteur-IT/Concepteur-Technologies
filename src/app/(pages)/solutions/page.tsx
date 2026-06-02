"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* REDESIGNED INTERLOCKING HERO */}
      <section className="w-full pt-[120px] pb-16 md:pt-[160px] md:pb-32 px-5 md:px-[10%] xl:px-[15%]">
        {/* Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl z-10 relative"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gray-300"></span>
            Solutions Framework
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight">
            Transforming Complexity
            <br className="hidden sm:block" />
            <span className="text-gray-400">Into Scalable Advantage.</span>
          </h1>
        </motion.div>
        <p className="mt-6">
          At Concepteur Technologies, solutions are not predefined packages.
          <span className="font-medium text-black ml-1">
            They are engineered
            <br /> responses to real business challenges.
          </span>
        </p>
        {/* Image & Overlapping Glass Card */}
        <div className="relative mt-8 md:mt-12 w-full flex flex-col lg:block">
          {/* Panoramic Interactive Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-10/12 aspect-[12/8] md:aspect-[24/8] bg-gray-100 relative custom-notch-tl-br overflow-hidden group"
          >
            <Image
              src="/home/sel-hero.png" // Replace with your preferred hero image
              fill
              className="object-cover transition-transform duration-[1500ms] ease-[0.22,1,0.36,1] group-hover:scale-105"
              alt="Solutions Architecture Integration"
              priority
            />
            {/* Darken slightly on hover to pop the glass card */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
          </motion.div>

          {/* Overlapping Frosted Glass Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:absolute lg:right-0 lg:bottom-[-40px] lg:w-5/12 bg-white backdrop-blur-xl border border-gray-100 p-6 md:p-10 shadow-2xl custom-notch-tl-br z-20 mt-6 lg:mt-0  transition-colors duration-500"
          >
            <p className="text-lg md:text-xl font-light text-gray-500 leading-snug mb-6 border-b border-gray-200 pb-6">
              We combine system architecture, disciplined engineering, and
              AI-enhanced execution to design solutions that improve
              performance, reduce operational overhead, and prepare
              organizations for long-term scale.
            </p>

            <p className="text-sm font-medium text-black leading-relaxed">
              Each solution area represents a strategic capability — built
              around measurable impact, not trends.
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
            {/* Left Side: Feature Section (Determines the height) */}
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
                      {/* Left Content */}
                      <div className="flex items-center gap-4">
                        {/* Number */}
                        <span className="text-[11px] font-mono text-gray-400 group-hover:text-black transition-colors duration-300">
                          0{index + 1}
                        </span>

                        {/* Text */}
                        <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors duration-300 leading-snug tracking-tight">
                          {item}
                        </span>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="w-4 h-4 text-gray-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-black/[0.03] to-transparent pointer-events-none"></div>
                    </li>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Image Section (Matches height and width of AI section) */}
            <div className="w-full md:w-1/2 flex flex-col pt-[38px]">
              {/* pt-[38px] ensures the top of image aligns with the first box below the header */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 bg-gray-100 custom-notch-tl-br overflow-hidden group min-h-[300px]"
              >
                <Image
                  src="/home/sel-index1.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-[1000ms] ease-[0.22,1,0.36,1]"
                  alt="Transformation"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </motion.div>
            </div>
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
              {/* pt-[38px] aligns image top with the first list item (01) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-1 bg-gray-100 custom-notch-tl-br overflow-hidden group min-h-[300px]"
              >
                <Image
                  src="/home/ChatGPT Image May 7, 2026, 04_45_20 PM.png"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-[1000ms] ease-[0.22,1,0.36,1]"
                  alt="AI Adoption"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </motion.div>
            </div>
            {/* Left Side: AI List (Determines the height) */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Heading */}
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mb-8">
                Our AI Adoption solutions help organizations:
              </p>

              {/* Timeline */}
              <div className="relative flex flex-col gap-6 pl-6">
                {/* Vertical Line */}
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
                      {/* Dot */}
                      <span className="absolute left-[-2px] top-2 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-black transition-colors duration-300"></span>

                      {/* Content */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-start gap-4">
                          {/* Number */}
                          <span className="text-[11px] font-mono text-gray-400 group-hover:text-black transition-colors">
                            0{index + 1}
                          </span>

                          {/* Text */}
                          <span className="text-sm text-gray-600 group-hover:text-black transition-colors leading-snug">
                            {item}
                          </span>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="w-4 h-4 text-gray-300 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quote */}
              <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.15em] text-black leading-tight">
                AI is integrated where it creates measurable value — <br />
                not where it creates noise.
              </p>
            </div>

            {/* Right Side: Image Section (Matches width/height of previous section) */}
          </div>
        </div>

        {/* CHAPTER 03: PROCESS AUTOMATION (Glassmorphism Re-design) */}
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
            {/* LEFT — TEXT CONTENT */}
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
                      {/* Left Text */}
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-gray-400">
                          0{index + 1}
                        </span>
                        <p className="text-sm md:text-base text-black font-medium tracking-tight">
                          {item}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-all duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — IMAGE (MATCHES TEXT HEIGHT) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-full min-h-[320px] bg-gray-100 overflow-hidden custom-notch-tl-br group">
                <Image
                  src="/home/sel-index3.png"
                  fill
                  className="object-cover transition-transform duration-[1400ms] ease-[0.22,1,0.36,1] group-hover:scale-105"
                  alt="Process Automation Infrastructure"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </motion.div>
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
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative bg-gray-100 custom-notch-tl-br overflow-hidden group min-h-[300px]"
            >
              <Image
                src="/home/sel-index4.png"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1000ms]"
                alt="Legacy"
              />
            </motion.div>

            {/* TEXT */}
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

      {/* DISCIPLINED EXECUTION LOGIC - Image Cards with Pop-up Shadow */}
      <section className="py-16 md:py-20 px-5 md:px-8 lg:px-10 border-b border-gray-300 bg-white">
        <div className="max-w-[1350px] mx-auto w-full">
          {/* Top */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight max-w-3xl">
              Built for Long-Term Performance
            </h2>

            <p className="text-sm md:text-base text-gray-700 max-w-lg">
              Technology decisions should serve long-term strategy.
            </p>
          </div>

          {/* Middle Statement Strip */}
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

          {/* List */}
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
                  {/* Left */}
                  <div className="flex items-center gap-6 min-w-[320px]">
                    <span className="text-sm font-mono text-gray-400 group-hover:text-black transition">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>

                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>

                  {/* Right */}
                  <div className="flex-1 flex items-center justify-end gap-10">
                    <p className="text-sm md:text-base text-gray-600 text-right max-w-xl leading-relaxed">
                      {item.desc}
                    </p>

                    {/* hover line */}
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
