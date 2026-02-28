"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import Image from "next/image";
import AidoCaseStudy from "./aido/page";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter]: any = useState("All");
  const [activeIndex, setActiveIndex] = useState(3);

  const filters = [
    "All",
    ...Array.from(new Set(caseStudies.map((item) => item.tag).filter(Boolean))),
  ];

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.tag === activeFilter);

  // Safe Index tracking to prevent out of bounds when filtering
  const safeIndex = Math.min(
    activeIndex,
    Math.max(0, filteredStudies.length - 1),
  );
  const activeItem = filteredStudies[safeIndex];

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-gray-200">
      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] bg-gray-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-block mb-8 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
                <span className="text-sm font-medium text-gray-600">
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8">
                Work that <br /> defines the <br />{" "}
                <span className="text-gray-400">standard.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-light">
                We engineer digital experiences that drive measurable growth.
                Explore our portfolio of transformative platforms, AI
                integrations, and resilient architectures.
              </p>
            </motion.div>

            {/* Right Side UI Graphic - Featured Case Study Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block relative h-full min-h-[450px]"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gray-50 overflow-hidden flex items-center justify-center p-6 border border-gray-100/80 shadow-[inset_0_0_100px_rgba(0,0,0,0.02)]">
                {/* The Fake "Browser" or "App" Window */}
                <div className="w-full h-full relative rounded-2xl bg-white shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100 flex flex-col group cursor-pointer">
                  {/* Fake Header */}
                  <div className="h-7 border-b border-gray-100 flex items-center px-3 gap-1.5 bg-gray-50/50 shrink-0 relative z-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white border border-gray-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <div className="ml-auto flex items-center">
                      <span className="text-[9px] font-bold text-gray-700 uppercase tracking-widest">
                        Featured Case Study
                      </span>
                    </div>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="flex-1 overflow-y-auto overflow-x-hidden w-full h-full relative bg-white scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="scale-[0.35] origin-top-left w-[285%] h-[285%]">
                      <AidoCaseStudy isEmbedded={true} />
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <Link href="/case-studies/aido">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                      className="absolute bottom-8 right-8 w-14 h-14 bg-slate-900 hover:bg-[#4247f3] rounded-full text-white flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-all duration-300 z-50 cursor-pointer border border-white/20"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SUMMARY ================= */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold">
                {caseStudies.length}
              </span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Projects
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold">100%</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Success Rate
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold">12+</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Industries
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold">Global</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Reach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FILTER & STUDIES ================= */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20 pb-8 border-b border-gray-100">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Selected Case Studies
            </h2>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-gray-900 text-white shadow-md shadow-gray-200"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Cover Flow Carousel */}
          <div className="w-full pt-16">
            {filteredStudies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg font-light">
                  No case studies found for this category.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {/* Active Info Headers (Simulating the Artfy text placement) */}
                <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-end mb-12 px-4 drop-shadow-sm">
                  <div className="max-w-md">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
                      Drive into <br /> creativity with our <br />
                      <span className="italic font-light text-gray-400">
                        digital portfolio
                      </span>
                    </h2>
                  </div>
                  <div className="max-w-md md:text-right mt-6 md:mt-0">
                    <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xs ml-auto">
                      Explore our curated case studies across various
                      industries, and immerse yourself in architectures that
                      elevate digital expression.
                    </p>
                  </div>
                </div>

                {/* Sub title for active center item */}
                <div className="text-center mb-6 h-16">
                  <h3 className="text-2xl font-serif text-gray-900 tracking-tight">
                    {activeItem?.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                    {activeItem?.client}
                  </p>
                </div>

                {/* Carousel Track */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden [perspective:1200px] mb-12">
                  {filteredStudies.map((item, index) => {
                    const distance = index - safeIndex;
                    const absDistance = Math.abs(distance);
                    const isActive = distance === 0;

                    // Calculate transforms based on distance from center
                    const xOffset = distance * 65; // percentage of self width
                    const rotateY = distance * -20; // 20deg tilt
                    const scale = Math.max(0.65, 1 - absDistance * 0.15); // Scale down items on the side
                    const zIndex = 50 - absDistance;

                    // Limit visibility to save performance
                    const opacity =
                      absDistance > 2
                        ? 0
                        : isActive
                          ? 1
                          : 1 - absDistance * 0.25;

                    return (
                      <motion.div
                        key={item.slug}
                        onClick={() => setActiveIndex(index)}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                          const swipeThreshold = 50;
                          if (offset.x < -swipeThreshold) {
                            setActiveIndex((prev) =>
                              Math.min(filteredStudies.length - 1, prev + 1),
                            );
                          } else if (offset.x > swipeThreshold) {
                            setActiveIndex((prev) => Math.max(0, prev - 1));
                          }
                        }}
                        initial={false}
                        animate={{
                          x: `${xOffset}%`,
                          scale: scale,
                          rotateY: rotateY,
                          zIndex: zIndex,
                          opacity: opacity,
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute w-64 md:w-80 lg:w-96 aspect-[3/4] rounded-3xl p-3 cursor-grab active:cursor-grabbing transition-all duration-700 ${isActive ? "bg-white/40 backdrop-blur-2xl border border-white/50" : "bg-white/10 backdrop-blur-md border border-white/10"}`}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Inner Image Container (creating the blurry glass border effect) */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                          <Image
                            src={item.heroImage}
                            alt={item.title}
                            fill
                            className={`object-cover transition-all duration-700 pointer-events-none ${isActive ? "grayscale-0 scale-100" : "grayscale blur-[2px] opacity-60 scale-[1.02]"}`}
                            priority={isActive}
                          />

                          {/* Integrated Bottom Gradient & Details */}
                          <div className="absolute inset-x-0 bottom-0 h-2/3 flex flex-col justify-end p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500">
                            <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest mb-1.5 drop-shadow-sm">
                              {item.client}
                            </span>
                            <h4 className="text-xl md:text-2xl font-serif text-white tracking-tight mb-4 drop-shadow-md">
                              {item.title}
                            </h4>

                            {/* Link Button */}
                            <div className="pointer-events-auto mt-auto">
                              {isActive ? (
                                <Link
                                  href={`/case-studies/${item.slug}`}
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white hover:bg-white hover:text-black transition-all cursor-pointer shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                                  onClick={(e) => setActiveIndex(index)}
                                >
                                  View Case Study
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                              ) : (
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/5 rounded-full text-xs font-medium text-white/50 transition-all">
                                  View Case Study
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-6 mb-24">
                  <button
                    onClick={() => setActiveIndex(Math.max(0, safeIndex - 1))}
                    disabled={safeIndex === 0}
                    className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-200 shadow-sm"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveIndex(
                        Math.min(filteredStudies.length - 1, safeIndex + 1),
                      )
                    }
                    disabled={safeIndex === filteredStudies.length - 1}
                    className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 hover:scale-105 transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:scale-100 disabled:hover:bg-gray-200 shadow-xl"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Active Item Details & About the Gallery */}

                <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start pb-16 px-6">
                  <div className="shrink-0 w-full md:w-1/3">
                    <h2 className="text-3xl font-serif text-gray-900 leading-tight">
                      About Our
                      <br />{" "}
                      <span className="italic font-light text-gray-400">
                        Case Studies
                      </span>
                    </h2>
                  </div>
                  <div className="flex-1 space-y-6">
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                      A detailed showcase of our delivered solutions,
                      highlighting architecture decisions, technology stacks,
                      and measurable business outcomes across industries.
                    </p>
                    <p className="text-gray-500 font-light text-base leading-relaxed">
                      This section presents a curated collection of our
                      delivered projects across AI systems, scalable web
                      platforms, mobile applications, backend architectures, and
                      cloud infrastructure. Each case study provides a
                      structured overview of the business objective, technical
                      strategy, architecture design, and measurable outcomes. We
                      outline the challenges addressed, the technologies
                      implemented, and the performance improvements achieved.
                      Rather than surface-level summaries, these case studies
                      highlight real-world execution — scalable systems,
                      production-ready deployments, and long-term maintainable
                      architectures built to support business growth.
                    </p>
                    <div className="pt-4">
                      <Link
                        href={`/case-studies/${activeItem.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-900 hover:text-gray-500 transition-colors uppercase"
                      >
                        Read Component Dive
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            Ready to build your next big thing?
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto font-light">
            Let's discuss how our engineering team can architect a scalable,
            robust solution tailored exactly to your specific business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
