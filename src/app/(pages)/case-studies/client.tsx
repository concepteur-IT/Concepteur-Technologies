"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import Image from "next/image";

export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter]: any = useState("All");
  const [activeIndex, setActiveIndex] = useState(3);
  const [previewContentHeight, setPreviewContentHeight] = useState(2400);
  const [previewViewportHeight, setPreviewViewportHeight] = useState(2400);
  const previewViewportRef = useRef<HTMLDivElement>(null);
  const previewFrameRef = useRef<HTMLIFrameElement>(null);
  const featuredCaseStudy =
    caseStudies.find(
      (study) => study.slug === "nomadquest-mcp-travel-architecture",
    ) ?? caseStudies[0];
  const featuredCaseStudyHref = `/case-studies/${featuredCaseStudy.slug}`;
  const previewTravel = Math.max(0, previewContentHeight - previewViewportHeight);
  const previewDuration = Math.max(18, previewTravel / 45);

  const handleFeaturedPreviewLoad = () => {
    const viewportHeight = previewViewportRef.current?.clientHeight ?? 0;
    setPreviewViewportHeight(viewportHeight);

    const frameDoc = previewFrameRef.current?.contentDocument;
    const measuredHeight =
      frameDoc?.documentElement?.scrollHeight ?? frameDoc?.body?.scrollHeight;

    if (measuredHeight) {
      setPreviewContentHeight(Math.max(measuredHeight, viewportHeight + 1));
      return;
    }

    setPreviewContentHeight(Math.max(2400, viewportHeight + 1));
  };

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
              <div className="inline-block mb-8 px-4 py-2 bg-gray-50 border border-gray-200 rounded-none">
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
                  <div
                    ref={previewViewportRef}
                    className="relative flex-1 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
                  >
                    <motion.iframe
                      ref={previewFrameRef}
                      src={featuredCaseStudyHref}
                      title={`${featuredCaseStudy.client} full route preview`}
                      onLoad={handleFeaturedPreviewLoad}
                      loading="lazy"
                      className="w-full border-0 pointer-events-none select-none"
                      style={{ height: previewContentHeight }}
                      animate={previewTravel > 0 ? { y: [0, -previewTravel] } : { y: 0 }}
                      transition={
                        previewTravel > 0
                          ? {
                              duration: previewDuration,
                              ease: "linear",
                              repeat: Infinity,
                              repeatType: "reverse",
                            }
                          : { duration: 0.2 }
                      }
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/95 via-white/60 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/95 via-white/60 to-transparent" />
                  </div>

                  {/* Floating Action Button */}
                  <Link href={featuredCaseStudyHref}>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                      className="absolute bottom-8 right-8 w-14 h-14 bg-slate-900 hover:bg-[#4247f3] rounded-none text-white flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-all duration-300 z-50 cursor-pointer border border-white/20"
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
                  className={`px-5 py-2.5 rounded-none text-xs font-medium transition-all duration-300 ${
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

          {/* 2D Minimal Grid Layout */}
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
                <div className="w-full flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                  <div className="max-w-md">
                    <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-4">
                      Drive into <br /> creativity with our <br />
                      <span className="italic font-light text-gray-500">
                        digital portfolio
                      </span>
                    </h2>
                  </div>
                  <div className="max-w-md md:text-right mt-6 md:mt-0">
                    <p className="text-sm font-light text-gray-600 leading-relaxed max-w-xs ml-auto">
                      Explore our curated case studies across various
                      industries, and immerse yourself in architectures that
                      elevate digital expression.
                    </p>
                  </div>
                </div>

                {/* Grid Layout */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                  {filteredStudies.map((item, index) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group border border-black bg-white flex flex-col h-[450px] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {/* Top Tag */}
                      <div className="p-6 border-b border-black flex justify-between items-center bg-gray-50">
                        <span className="text-xs font-mono font-bold text-black uppercase tracking-widest">
                          {item.tag || "Case Study"}
                        </span>
                        <span className="text-xs font-mono text-gray-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">
                            {item.client}
                          </span>
                          <h3 className="text-2xl font-serif text-black leading-snug mb-4">
                            {item.title}
                          </h3>
                          {item.shortDesc && (
                            <p className="text-sm text-gray-600 font-light line-clamp-3 leading-relaxed">
                              {item.shortDesc}
                            </p>
                          )}
                        </div>

                        {/* Button Layer */}
                        <div className="mt-8 pt-6 border-t border-black/10">
                          {item.slug !== "coming-soon" ? (
                            <Link
                              href={`/case-studies/${item.slug}`}
                              className="inline-flex items-center justify-between w-full px-6 py-4 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                            >
                              View Case Study
                              <ArrowUpRight className="w-4 h-4 ml-4" />
                            </Link>
                          ) : (
                            <div className="inline-flex items-center justify-between w-full px-6 py-4 bg-gray-100 text-gray-400 text-xs font-mono font-bold uppercase tracking-widest border border-gray-200 cursor-not-allowed">
                              In Progress
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors shadow-none border border-black"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
