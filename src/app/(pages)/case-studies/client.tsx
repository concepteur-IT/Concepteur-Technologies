"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SHOW_FEATURED_CASE_STUDY = false;

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
      className={`group space-y-3 transition-all duration-300 hover:-translate-y-1 ${
        withBorder ? "md:border-l md:border-black/10 md:pl-12" : ""
      }`}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black">
        {count}
        {suffix}
      </h3>
      <p className="text-sm uppercase tracking-wider text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

function FeaturedCaseStudyDisabled() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500 font-medium mb-3">
            Featured Case Study
          </p>
          <h3 className="text-2xl md:text-3xl font-light tracking-tight text-black">
            Section Temporarily Disabled
          </h3>
          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl">
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
  const [activeSlug, setActiveSlug] = useState<string>(realStudies[0]?.slug ?? "");
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
    filteredStudies.find((item) => item.slug === activeSlug) ?? filteredStudies[0];

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
    <div className="bg-white min-h-screen text-gray-900 selection:bg-gray-200">
      <motion.section
        className="relative py-12 md:py-16 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: easeBezier }}
      >
        <div className="absolute top-0 right-0 -z-10 w-[34rem] h-[34rem] bg-gray-50 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                Case Studies
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                Real Systems.{" "}
                <span className="font-semibold">Measurable Outcomes.</span>
              </h1>
              <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-xl mx-auto lg:mx-0">
                Explore product builds, platform transformations, and
                engineering rollouts designed for reliability, scale, and
                long-term business growth.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="cube-scene" aria-hidden="true">
                <div className="cube-shadow" />
                <div className="cube">
                  <div className="face front">AI</div>
                  <div className="face back">API</div>
                  <div className="face right">WEB</div>
                  <div className="face left">MCP</div>
                  <div className="face top">CLOUD</div>
                  <div className="face bottom">DATA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {SHOW_FEATURED_CASE_STUDY && <FeaturedCaseStudyDisabled />}

      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            ref={statsRef}
            className="bg-[#f3f3f3]/80 backdrop-blur-md rounded-none py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
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
        </div>
      </section>

      <motion.section
        className="py-12 md:py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: easeBezier }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto mb-8 md:mb-12 text-center space-y-4 md:space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
              Filtered Showcase
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
              Explore Case Studies by{" "}
              <span className="font-semibold">Domain</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Navigate by industry focus and review practical implementation
              outcomes across our portfolio.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-none text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white shadow-md shadow-gray-200"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg font-light">
                No case studies found for this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filteredStudies.map((item, index) => {
                const isActive = item.slug === activeStudy?.slug;

                return (
                  <motion.article
                    key={item.slug}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: easeBezier }}
                    className={`group border rounded-xl p-5 md:p-6 bg-white transition-all duration-300 ${
                      isActive
                        ? "border-black/35 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveSlug(item.slug)}
                      className="w-full text-left"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                        {item.tag || "Case Study"}
                      </span>
                      <h3 className="mt-3 text-2xl font-light tracking-tight text-black leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">
                        {item.client}
                      </p>
                      {item.shortDesc && (
                        <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-4">
                          {item.shortDesc}
                        </p>
                      )}
                    </button>

                    <div className="pt-5 mt-5 border-t border-gray-200">
                      <Link
                        href={`/case-studies/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                      >
                        View Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </motion.section>

      {activeStudy && (
        <motion.section
          className="py-12 md:py-16 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeBezier }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-5 mb-8 md:mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                Project Lens
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                Why This Case Study{" "}
                <span className="font-semibold">Matters</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Architecture depth, execution quality, and business outcomes from{" "}
                {activeStudy.client}.
              </p>
            </div>

            <div className="max-w-5xl mx-auto border border-gray-200 bg-[#f8f8f8] p-6 sm:p-8 md:p-10">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {activeStudy.shortDesc ||
                  "This project demonstrates practical engineering decisions with clear business alignment, from architecture planning through production delivery."}
              </p>
              {activeStudy.platform && (
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-gray-500">
                  Platform: <span className="normal-case">{activeStudy.platform}</span>
                </p>
              )}
              <div className="pt-6 mt-6 border-t border-gray-300/70">
                <Link
                  href={`/case-studies/${activeStudy.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-black hover:text-gray-600 transition-colors"
                >
                  Open Full Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      <motion.section
        className="py-12 md:py-16 bg-white"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: easeBezier }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
              Next Build
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
              Ready to Architect Your{" "}
              <span className="font-semibold">Next System?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Let us design and deliver a scalable product that fits your
              business priorities.
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm uppercase tracking-wider font-medium hover:bg-gray-800 transition-colors"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      <style jsx>{`
        .cube-scene {
          position: relative;
          width: 190px;
          height: 190px;
          perspective: 1000px;
        }

        .cube {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          animation: spinCube 16s linear infinite;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #111827;
          border: 1px solid rgba(17, 24, 39, 0.18);
          background: linear-gradient(
            140deg,
            rgba(255, 255, 255, 0.93),
            rgba(243, 244, 246, 0.72)
          );
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(2px);
        }

        .front {
          transform: translateZ(95px);
        }
        .back {
          transform: rotateY(180deg) translateZ(95px);
        }
        .right {
          transform: rotateY(90deg) translateZ(95px);
        }
        .left {
          transform: rotateY(-90deg) translateZ(95px);
        }
        .top {
          transform: rotateX(90deg) translateZ(95px);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(95px);
        }

        .cube-shadow {
          position: absolute;
          left: 50%;
          bottom: -30px;
          width: 130px;
          height: 28px;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.22),
            rgba(0, 0, 0, 0.02)
          );
          filter: blur(7px);
          animation: pulseShadow 4.2s ease-in-out infinite;
        }

        @keyframes spinCube {
          0% {
            transform: rotateX(-18deg) rotateY(0deg);
          }
          50% {
            transform: rotateX(-18deg) rotateY(180deg);
          }
          100% {
            transform: rotateX(-18deg) rotateY(360deg);
          }
        }

        @keyframes pulseShadow {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.82;
          }
          50% {
            transform: translateX(-50%) scale(0.9);
            opacity: 0.45;
          }
        }

        @media (max-width: 767px) {
          .cube-scene {
            width: 150px;
            height: 150px;
          }
          .front {
            transform: translateZ(75px);
          }
          .back {
            transform: rotateY(180deg) translateZ(75px);
          }
          .right {
            transform: rotateY(90deg) translateZ(75px);
          }
          .left {
            transform: rotateY(-90deg) translateZ(75px);
          }
          .top {
            transform: rotateX(90deg) translateZ(75px);
          }
          .bottom {
            transform: rotateX(-90deg) translateZ(75px);
          }
        }
      `}</style>
    </div>
  );
}
