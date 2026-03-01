"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

export default function NomadQuestCaseStudy() {
  const study = caseStudies.find(
    (c) => c.slug === "nomadquest-mcp-travel-architecture",
  );

  if (!study) return null;

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white font-sans">
      {/* Back Button */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-gray-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      {/* Hero Header */}
      <header className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-b border-black pb-12">
          {/* Left Column: Title & Teams */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {study.tag && (
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-gray-500 mb-6 border border-black/10 px-3 py-1">
                  {study.tag}
                </span>
              )}
              {study.title && (
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tighter leading-tight mb-8">
                  {study.title}
                </h1>
              )}
            </div>

            {/* Teams Section */}
            <div className="flex flex-wrap items-center gap-4 mt-8 lg:mt-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 shrink-0">
                Main Developer
              </span>
              <div className="flex">
                <div className="relative group cursor-pointer z-10 w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center text-xs font-mono font-semibold text-black hover:bg-black hover:text-white transition-colors shadow-sm">
                  PD
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-3 px-3 py-2 bg-black text-white text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none flex flex-col items-center">
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black" />
                    <span className="font-semibold font-sans tracking-wide">
                      Proparna Das
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-0.5">
                      Main Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Metadata */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {study.shortDesc && (
              <p className="text-xl text-gray-600 font-light tracking-tight leading-relaxed">
                {study.shortDesc}
              </p>
            )}

            {/* Metadata Box */}
            <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-gray-500 border border-black/10 p-8 bg-gray-50">
              {study.platform && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-12 border-b border-black/10 pb-4">
                  <span className="shrink-0">Platform</span>
                  <span className="text-black sm:text-right leading-relaxed normal-case w-full sm:max-w-[200px]">
                    {study.platform}
                  </span>
                </div>
              )}
              {study.client && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-12 border-b border-black/10 pb-4 pt-2">
                  <span className="shrink-0">Client</span>
                  <span className="text-black sm:text-right">
                    {study.client}
                  </span>
                </div>
              )}
              {/* @ts-ignore - country exists in data but might not be in the type yet */}
              {study.country && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-12 border-b border-black/10 pb-4 pt-2">
                  <span className="shrink-0">Country</span>
                  <span className="text-black sm:text-right">
                    {/* @ts-ignore */}
                    {study.country}
                  </span>
                </div>
              )}
              {study.domain && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-12 border-b border-black/10 pb-4 pt-2">
                  <span className="shrink-0">Domain</span>
                  <span className="text-black sm:text-right lowercase selection:bg-black selection:text-white">
                    {study.domain}
                  </span>
                </div>
              )}
              {study.role && (
                <div className="flex flex-col gap-2 pt-2">
                  <span className="shrink-0">Role</span>
                  <span className="text-black leading-relaxed font-sans text-sm normal-case">
                    {study.role}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 max-w-7xl mx-auto pb-40">
        {/* Metrics Row */}
        {study.results && (
          <section className="mb-24 md:mb-32 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(study.results).map(([key, value]) => (
                <div
                  key={key}
                  className="border border-black/10 p-8 flex flex-col justify-center items-center text-center bg-gray-50 hover:border-black transition-colors"
                >
                  <span className="text-3xl lg:text-4xl font-light text-black tracking-tighter mb-4">
                    {value as string}
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-gray-500">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Overview section */}
        {study.overview && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              Overview
            </h2>
            <p className="text-2xl md:text-3xl font-light text-black leading-snug max-w-5xl">
              {study.overview}
            </p>
          </section>
        )}

        {/* Phase Comparison */}
        {study.phaseComparison && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              Phase Comparison
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="border border-black/10 p-10 bg-gray-50 hover:bg-white transition-colors">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-black mb-6">
                  Phase 1
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {study.phaseComparison.phase1}
                </p>
              </div>
              <div className="border border-black p-10 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-black">
                    Phase 2
                  </h3>
                  <span className="text-[10px] bg-black text-white px-2 py-0.5 tracking-widest uppercase">
                    Current
                  </span>
                </div>
                <p className="text-black font-light leading-relaxed">
                  {study.phaseComparison.phase2}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Challenges */}
        {study.challenge && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              Key Challenges
            </h2>
            <div className="flex flex-col gap-6 max-w-4xl">
              {(study.challenge as string[]).map((chal, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 border-b border-black/10 pb-6 group hover:border-black transition-colors"
                >
                  <span className="text-sm font-mono text-gray-400 shrink-0 pt-0.5">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-lg text-gray-800 font-light leading-relaxed">
                    {chal}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solutions */}
        {study.solution && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {(
                study.solution as Array<{ title: string; points: string[] }>
              ).map((sol, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-semibold tracking-tight text-black mb-6 flex items-center gap-4">
                    <span className="w-8 h-px bg-black/20 shrink-0"></span>
                    {sol.title}
                  </h3>
                  <ul className="space-y-4 text-justify">
                    {sol.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-gray-600 text-sm md:text-base font-light px-0 md:px-12"
                      >
                        <span className="w-1.5 h-1.5 bg-black/20 rounded-full shrink-0 mt-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI Validation */}
        {study.aiValidation && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              AI Validation
            </h2>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5">
                <p className="text-xl text-black font-light leading-relaxed">
                  {study.aiValidation.description}
                </p>
              </div>
              <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
                {study.aiValidation.modelsIntegrated.map((model, idx) => (
                  <div
                    key={idx}
                    className="border border-black/10 py-6 px-4 text-center text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {model}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Architectural Impact */}
        {study.architecturalImpact && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              Architectural Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-12 border border-black p-8 md:p-12 bg-white">
              <div>
                <h3 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8">
                  Objective Impact
                </h3>
                <ul className="space-y-6 text-black font-light">
                  {study.architecturalImpact.objective.map((obj, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ArrowUpRight className="w-5 h-5 shrink-0 text-black/50" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8">
                  Strategic Impact
                </h3>
                <ul className="space-y-6 text-black font-light">
                  {study.architecturalImpact.strategic.map((strat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ArrowUpRight className="w-5 h-5 shrink-0 text-black/50" />
                      {strat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        {study.stack && Array.isArray(study.stack) && (
          <section className="mb-24 md:mb-32">
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 border border-black/20 text-sm font-mono text-gray-800 bg-gray-50 hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer Return */}
      <footer className="border-t border-black bg-white text-black relative overflow-hidden">
        <Link
          href="/case-studies"
          className="block relative z-10 p-8 md:p-16 lg:p-32 group hover:bg-black hover:text-white transition-colors duration-500"
        >
          <h2 className="text-sm font-mono tracking-widest uppercase mb-4 text-gray-500 group-hover:text-gray-400 transition-colors">
            Return To
          </h2>
          <div className="flex items-center justify-between">
            <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter group-hover:translate-x-8 transition-transform duration-700">
              Directory
            </h3>
            <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32 opacity-20 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
