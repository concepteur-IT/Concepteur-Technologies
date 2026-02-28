"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import Image from "next/image";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    ...Array.from(new Set(caseStudies.map((item) => item.tag))),
  ];

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.tag === activeFilter);

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-gray-200 mt-12 sm:mt-14 md:mt-15">
      {/* ================= HERO ================= */}
      <section className="relative px-4 sm:px-6 pt-24 md:pt-36 lg:pt-48 pb-14 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[40rem] h-[40rem] bg-gray-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
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
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.92] mb-6 md:mb-8">
                Work that <br /> defines the <br />{" "}
                <span className="text-gray-400">standard.</span>
              </h1>
              <p className="text-base md:text-xl text-gray-500 max-w-xl leading-relaxed font-light">
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
                  <div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    <div className="mx-auto flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-100 rounded-md shadow-sm">
                      <div className="w-2 h-2 rounded-sm bg-gray-800" />
                      <span className="text-[10px] font-mono text-gray-400">
                        Featured Study
                      </span>
                    </div>
                  </div>

                  {/* Image Area */}
                  <div className="relative h-48 w-full bg-gray-100 shrink-0 overflow-hidden">
                    <Image
                      src={caseStudies[0].heroImage}
                      alt="Featured"
                      fill
                      className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 text-[10px] font-semibold tracking-wider uppercase shadow-sm">
                      {caseStudies[0].client}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-1 bg-white relative">
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-1">
                      {caseStudies[0].title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-light">
                      {caseStudies[0].shortDesc}
                    </p>

                    <div className="mt-auto grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-lg font-semibold text-gray-900">
                          {caseStudies[0].results?.growth}
                        </div>
                        <div className="text-[10px] uppercase font-medium tracking-widest text-gray-400">
                          Growth
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-900">
                          {caseStudies[0].results?.users}
                        </div>
                        <div className="text-[10px] uppercase font-medium tracking-widest text-gray-400">
                          Scale
                        </div>
                      </div>
                    </div>

                    {/* Floating Action Button */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                      className="absolute -top-6 right-6 w-12 h-12 bg-gray-900 rounded-full text-white flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform duration-300"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SUMMARY ================= */}
      <section className="py-10 md:py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-semibold">
                {caseStudies.length}
              </span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Projects
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-semibold">100%</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Success Rate
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-semibold">12+</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Industries
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-semibold">Global</span>
              <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                Reach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FILTER & STUDIES ================= */}
      <section className="py-14 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-12 md:mb-20 pb-8 border-b border-gray-100">
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

          {/* Grid */}
          <div className="space-y-16 md:space-y-24">
            <AnimatePresence mode="wait">
              {filteredStudies.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Link href={`/case-studies/${item.slug}`} className="block">
                    <div
                      className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
                        index % 2 !== 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Image Side - Reduced Size to fix "picture is too big" */}
                      <div
                        className={`col-span-12 md:col-span-5 ${index % 2 !== 0 ? "md:order-last" : ""}`}
                      >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                          <Image
                            src={item.heroImage}
                            alt={item.title}
                            fill
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                          />
                        </div>
                      </div>

                      {/* Content Side - Larger portion to emphasize content */}
                      <div className="col-span-12 md:col-span-7 px-0 md:px-0">
                        <div className="flex flex-col h-full justify-center">
                          <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                              {item.client}
                            </span>
                            <span className="w-8 h-px bg-gray-200" />
                            <span className="text-xs font-medium px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-full">
                              {item.tag}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 md:mb-6 group-hover:text-gray-600 transition-colors duration-300 tracking-tight">
                            {item.title}
                          </h3>

                          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-light max-w-2xl">
                            {item.shortDesc}
                          </p>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-gray-100 pt-6 md:pt-8 mb-8 md:mb-10 max-w-xl">
                            {Object.entries(item.results || {}).map(
                              ([key, value]) => (
                                <div key={key}>
                                  <div className="text-2xl font-semibold text-gray-900 mb-1">
                                    {value}
                                  </div>
                                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {key}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>

                          <div className="inline-flex items-center gap-3 text-sm font-semibold text-gray-900 group-hover:gap-5 transition-all duration-300">
                            Read Case Study
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredStudies.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No case studies found for this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8">
            Ready to build your next big thing?
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto font-light">
            Let&apos;s discuss how our engineering team can architect a scalable,
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
