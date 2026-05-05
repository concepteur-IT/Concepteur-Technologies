"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";
const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SHOW_FEATURED_CASE_STUDY = false;
const SECTION_Y_SPACING = "py-20 md:py-24";
const HEADING_BLOCK_SPACING = "space-y-5 md:space-y-6";
const HEADING_BLOCK_MARGIN = "mb-10 md:mb-16";

function CountStat({
  value,
  suffix,
  label,
  show,
  withBorder,
}: {
  value: number;
  suffix: string;
  label: string;
  show: boolean;
  withBorder: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!show) return;

    let startTime: number | null = null;
    const duration = 1700;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      const eased = percent === 1 ? 1 : 1 - Math.pow(2, -10 * percent);
      const current = Math.round(eased * value);
      setCount(current);

      if (percent < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [show, value]);

  return (
    <div
      className={`group space-y-3 transition-all duration-500 hover:-translate-y-2 p-6 md:p-8 ${
        withBorder ? "md:border-l border-gray-200" : ""
      }`}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black transition-transform duration-500 group-hover:scale-105 origin-left">
        {count}
        {suffix}
      </h3>
      <p className="text-sm uppercase tracking-wider text-gray-500 group-hover:text-black transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

function FeaturedCaseStudyDisabled() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="w-full px-5 md:px-[15%]">
        <div className="border border-gray-200 bg-gray-50/70 p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500 font-medium mb-3">
              Featured Case Study
            </p>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-black">
              Section Temporarily Disabled
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Featured preview is intentionally kept in code and disabled for now.
            Portfolio entries below remain active.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesClient() {
  const realStudies = useMemo(
    () => caseStudies.filter((study) => study.slug !== "coming-soon"),
    [],
  );

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeSlug, setActiveSlug] = useState<string>(
    realStudies[0]?.slug ?? "",
  );
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const filters = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          realStudies
            .map((item) => item.tag)
            .filter((tag): tag is string => Boolean(tag)),
        ),
      ),
    ],
    [realStudies],
  );

  const filteredStudies = useMemo(
    () =>
      activeFilter === "All"
        ? realStudies
        : realStudies.filter((study) => study.tag === activeFilter),
    [activeFilter, realStudies],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const activeStudy =
    filteredStudies.find((item) => item.slug === activeSlug) ??
    filteredStudies[0];

  const statsData = useMemo(
    () => [
      { value: realStudies.length, suffix: "+", label: "Case Studies" },
      { value: 100, suffix: "%", label: "Delivery Quality" },
      {
        value: new Set(realStudies.map((s) => s.tag).filter(Boolean)).size,
        suffix: "+",
        label: "Industry Domains",
      },
      {
        value: realStudies.filter((s) => Boolean(s.platform)).length,
        suffix: "+",
        label: "Platform Builds",
      },
    ],
    [realStudies],
  );

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-black selection:text-white pt-[80px]">
      {/* REDESIGNED HERO: Split Grid with Hover Image */}
      <motion.section
        className="relative py-10 md:py-18 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: easeBezier }}
      >
        <div className="w-full px-5 md:px-[15%]">
          <div className="w-full relative">
            {/* Background Image Block WITH NOTCH */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 w-full lg:w-[70%] h-[300px] md:h-[420px] lg:h-full bg-gray-100 overflow-hidden custom-notch-tl-br"
            >
              <Image
                src="/home/bg-frontend.png"
                fill
                alt="Case Studies Architecture"
                className="object-cover transition-transform duration-[1500ms] ease-[0.22,1,0.36,1] hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/5 " />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center min-h-[400px] lg:min-h-[500px] ">
              <div
                className={`${HEADING_BLOCK_SPACING} max-w-xl bg-white backdrop-blur-sm p-6 md:p-10 custom-notch-tl-br shadow-lg `}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-gray-300"></span>
                  Case Studies
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                  Real Systems. <br />
                  <span className="font-semibold">Measurable Outcomes.</span>
                </h1>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Explore product builds, platform transformations, and
                  engineering rollouts designed for reliability, scale, and
                  long-term business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {SHOW_FEATURED_CASE_STUDY && <FeaturedCaseStudyDisabled />}

      {/* REDESIGNED STATS: Full Bleed Border Grid */}
      <section className="border-y border-gray-200 bg-[#fcfcfc]">
        <div className="w-full px-5 md:px-[15%]">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4">
            {statsData.map((stat, index) => (
              <CountStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                show={statsVisible}
                withBorder={index !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* REDESIGNED SHOWCASE: Image Cards with Hover Logic */}
      <motion.section
        className={`${SECTION_Y_SPACING} bg-white`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: easeBezier }}
      >
        <div className="w-full px-5 md:px-[15%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-16">
            <div className={`${HEADING_BLOCK_SPACING} max-w-2xl`}>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                Filtered Showcase
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                Explore Case Studies by{" "}
                <span className="font-semibold">Domain</span>
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md md:text-right border-l md:border-l-0 md:border-r border-gray-300 pl-4 md:pl-0 md:pr-6 py-2">
              Navigate by industry focus and review practical implementation
              outcomes across our portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-12 mb-12 md:mb-16 border-b border-gray-200 w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative pb-4 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
                  activeFilter === filter
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-800"
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilterIndicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-black"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {filteredStudies.length === 0 ? (
            <div className="text-center py-20 border border-gray-200 bg-gray-50">
              <p className="text-gray-500 text-lg font-light">
                No case studies found for this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {filteredStudies.map((item, index) => {
                const isActive = item.slug === activeStudy?.slug;

                // Alternate placeholder images for structural variety
                const placeholderImages = [
                  "/home/cap-web.png",
                  "/home/cap-mobile.png",
                  "/home/cap-backend.png",
                ];
                const imgPlaceholder =
                  placeholderImages[index % placeholderImages.length];

                const cardStyles = [
                  // 0: Top Left (Dark Teal)
                  { 
                    bg: "bg-[#0b2f33] text-white", 
                    imageOrder: "order-1", 
                    contentOrder: "order-2", 
                    pillClass: "bg-[#3356e8]/20 text-[#6082f8] border border-[#3356e8]/30",
                    linkClass: "text-[#5edc8b]"
                  },
                  // 1: Top Right (White)
                  { 
                    bg: "bg-white text-black", 
                    imageOrder: "order-1 md:order-2", 
                    contentOrder: "order-2 md:order-1", 
                    pillClass: "bg-[#d8f2e2] text-[#34a863]",
                    linkClass: "text-[#34a863]"
                  },
                  // 2: Bottom Left (White)
                  { 
                    bg: "bg-white text-black", 
                    imageOrder: "order-1", 
                    contentOrder: "order-2", 
                    pillClass: "bg-[#d8f2e2] text-[#34a863]",
                    linkClass: "text-[#34a863]"
                  },
                  // 3: Bottom Right (Orange)
                  { 
                    bg: "bg-[#f5ad76] text-black", 
                    imageOrder: "order-1 md:order-2", 
                    contentOrder: "order-2 md:order-1", 
                    pillClass: "bg-[#2546eb] text-white",
                    linkClass: "text-[#2546eb]"
                  }
                ];
                
                const style = cardStyles[index % 4];

                return (
                  <motion.article
                    key={item.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: easeBezier }}
                    className="group flex flex-col w-full h-full"
                    onClick={() => setActiveSlug(item.slug)}
                  >
                    <div className="flex flex-col h-full cursor-pointer">
                      {/* Image Block */}
                      <div className={`relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden ${style.imageOrder}`}>
                        <Image 
                          src={imgPlaceholder} 
                          fill 
                          alt={item.title} 
                          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content Block */}
                      <div className={`flex flex-col flex-1 p-8 md:p-12 lg:p-14 ${style.bg} ${style.contentOrder}`}>
                        <div className="mb-6">
                          <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${style.pillClass}`}>
                            {item.tag || "Product Design"}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-medium tracking-tight leading-tight mb-4">
                          {item.title}
                        </h3>
                        
                        {item.shortDesc && (
                          <p className={`text-sm md:text-base leading-relaxed mb-8 opacity-90 line-clamp-4`}>
                            {item.shortDesc}
                          </p>
                        )}
                        
                        <div className="mt-auto pt-4 flex justify-end">
                          <Link
                            href={`/case-studies/${item.slug}`}
                            className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity ${style.linkClass}`}
                          >
                            READ MORE &gt;&gt;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </motion.section>

      {/* REDESIGNED PROJECT LENS: Split Layout with Architectural Shadow */}
      {activeStudy && (
        <motion.section
          className={`${SECTION_Y_SPACING} bg-white relative overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeBezier }}
        >
          {/* BACKGROUND ACCENT */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-[40%] h-full bg-gray-50" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gray-100 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="w-full px-5 md:px-[15%]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
              {/* LEFT SIDE */}
              <div className="lg:col-span-5 space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                  Project Lens
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                  Why This Case Study{" "}
                  <span className="font-semibold">Matters</span>
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Architecture depth, execution quality, and business outcomes
                  from{" "}
                  <span className="font-medium text-black">
                    {activeStudy.client}
                  </span>
                  .
                </p>

                {/* subtle divider */}
                <div className="w-16 h-px bg-gray-300 mt-4" />
              </div>

              {/* RIGHT SIDE (FLOATING PANEL) */}
              <div className="lg:col-span-7 relative">
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/60 p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  {/* QUOTE STYLE */}
                  <div className="absolute -top-6 left-6 text-[80px] text-gray-100 font-serif leading-none select-none">
                    “
                  </div>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed relative z-10">
                    {activeStudy.shortDesc ||
                      "This project demonstrates practical engineering decisions with clear business alignment, from architecture planning through production delivery."}
                  </p>

                  {/* PLATFORM */}
                  {activeStudy.platform && (
                    <div className="mt-10 flex items-center gap-3">
                      <span className="w-8 h-px bg-gray-300" />
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                        Platform:{" "}
                        <span className="normal-case font-medium text-black">
                          {activeStudy.platform}
                        </span>
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-10 mt-10 border-t border-gray-100">
                    <Link
                      href={`/case-studies/${activeStudy.slug}`}
                      className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-black hover:text-gray-500 transition-colors group"
                    >
                      Open Full Case Study
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* REDESIGNED CTA: High-Contrast Dark Mode Block */}
      <motion.section
        className="w-full py-24 md:py-32 bg-white text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: easeBezier }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col items-center">
          <div className={`${HEADING_BLOCK_SPACING}`}>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-medium">
              Next Build
            </p>
            {/* Keeping the font style identical, just mapping the text color appropriately for a dark bg */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
              Ready to Architect Your{" "}
              <span className="font-semibold text-black">Next System?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Let us design and deliver a scalable product that fits your
              business priorities.
            </p>
          </div>

          {/* Added mt-12 md:mt-16 to create the gap between text and button */}
          <div className="shrink-0 w-full md:w-auto mt-12 md:mt-16">
            <Link
              href="/contact"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-5 md:px-10 md:py-6 text-base font-medium hover:bg-gray-800 transition-colors custom-notch-tl-br  tracking-widest"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
