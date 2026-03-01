"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <main className="bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO - Compact Typography */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-5/12">
            <h1 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Solutions
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
              Transforming Complexity <br />
              <span className="text-gray-500 font-light">
                Into Scalable Advantage
              </span>
            </h2>
          </div>
          <div className="md:w-7/12 flex flex-col justify-end text-base md:text-lg font-light text-gray-700 space-y-6">
            <p>
              At Concepteur Technologies, solutions are not predefined packages.
              <span className="font-medium text-black ml-1">
                They are engineered responses to real business challenges.
              </span>
            </p>
            <p className="leading-relaxed">
              We combine system architecture, disciplined engineering, and
              AI-enhanced execution to design solutions that improve
              performance, reduce operational overhead, and prepare
              organizations for long-term scale.
            </p>
            <div className="inline-block border-l-2 border-black pl-4">
              <p className="text-[12px] font-semibold uppercase tracking-widest text-black">
                Each solution area represents a strategic capability — built
                around measurable impact, not trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DIGITAL TRANSFORMATION - Dense List */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-200 bg-gray-50/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Digital Transformation
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Modern systems require more than visual redesign. They require
              structural reinvention.
            </p>
          </div>
          <div className="md:w-2/3">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-200 pb-3">
              Our solutions focus on:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base font-medium">
              {[
                "Re-architecting legacy infrastructure",
                "Migrating to scalable cloud environments",
                "Redesigning data pipelines",
                "Improving system interoperability",
                "Enhancing performance and reliability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0 rounded-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-5 bg-white border border-gray-200">
              <p className="text-sm font-medium text-black">
                We replace fragmented systems with cohesive, scalable
                architectures that support growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AI ADOPTION - Compact Inverted Box */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto bg-black text-white p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              AI Adoption
            </h2>
            <p className="text-sm md:text-base font-light text-gray-300 leading-relaxed mb-8">
              Artificial Intelligence must be implemented responsibly and
              strategically.
            </p>
            <p className="text-[11px] uppercase tracking-widest text-gray-500">
              Our AI Adoption solutions help organizations:
            </p>
          </div>

          <div className="lg:w-7/12 border-l border-white/20 pl-0 lg:pl-12">
            <ul className="space-y-6 text-sm md:text-base font-medium text-gray-200">
              {[
                "Identify high-impact automation opportunities",
                "Integrate AI into existing workflows",
                "Deploy intelligent agents and recommendation systems",
                "Implement OCR and data intelligence pipelines",
                "Build AI-driven decision support systems",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-xs font-mono text-gray-500 mt-0.5">
                    0{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-[13px] font-bold tracking-widest uppercase text-white">
                AI is integrated where it creates measurable value — not where
                it creates noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS AUTOMATION - Clean Outline Cards */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">
              Process Automation
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Operational inefficiency limits scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Reduce repetitive manual tasks",
              "Improve data accuracy",
              "Accelerate processing cycles",
              "Integrate cross-platform workflows",
              "Enable real-time system coordination",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 p-6 flex flex-col justify-between hover:border-black transition-colors duration-200 aspect-square"
              >
                <div className="w-6 h-6 border border-black flex items-center justify-center font-mono text-[10px]">
                  {i + 1}
                </div>
                <h3 className="text-[13px] font-semibold leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm md:text-base font-medium text-black">
              Automation is engineered to increase operational velocity without
              compromising system control.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEGACY MODERNIZATION - Compact Dual Column */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-200 bg-gray-50/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 border-t border-b border-gray-200 py-12 md:py-20">
          <div className="md:w-1/2 md:pr-12 md:border-r border-gray-200">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Legacy Modernization
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              Outdated systems create risk, cost, and performance bottlenecks.
            </p>
            <p className="text-base md:text-lg font-medium text-black">
              We modernize without disrupting continuity — ensuring systems
              remain stable while evolving.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-6">
              Our modernization approach includes:
            </p>
            <div className="space-y-4 text-sm md:text-base font-medium">
              {[
                "Codebase restructuring",
                "Database optimization",
                "Infrastructure migration",
                "API-first re-architecture",
                "Security reinforcement",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: STRUCTURED EXECUTION - Tight Numbered List */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Structured Execution. Measurable Impact.
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Each solution engagement follows a disciplined framework:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            {[
              "Business analysis",
              "System architecture design",
              "Implementation planning",
              "Controlled deployment",
              "Performance validation",
              "Iterative optimization",
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-gray-400 border-b border-gray-200 pb-1 w-max">
                  STEP 0{i + 1}
                </span>
                <span className="text-[14px] font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-black">
            <p className="text-sm font-medium text-black">
              This ensures that every solution is engineered for durability,
              scalability, and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: LONG-TERM PERFORMANCE - Minimal Columns */}
      <section className="py-20 md:py-28 px-6 border-b border-gray-200 bg-gray-50/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Built for Long-Term Performance
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              Technology decisions should serve long-term strategy.
            </p>
            <div className="bg-black text-white p-6 inline-block">
              <p className="text-[11px] font-medium uppercase tracking-widest mb-2 opacity-70">
                We do not deliver isolated features.
              </p>
              <p className="text-lg font-medium">
                We engineer operational advantage.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-[11px] uppercase tracking-widest font-bold text-gray-400 mb-6 border-b border-gray-200 pb-2">
              Our solutions are designed to:
            </p>
            <ul className="text-sm md:text-base font-medium space-y-4">
              {[
                "Scale with growth",
                "Minimize technical debt",
                "Strengthen security posture",
                "Reduce infrastructure cost",
                "Enable continuous innovation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-none shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA - Compact Brutalist Box */}
      <section className="py-24 md:py-32 px-6 text-center border-b-8 border-black">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
            Ready to Move Forward?
          </h3>
          <p className="text-sm md:text-base font-medium text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
            If your organization is facing structural complexity, scaling
            challenges, or modernization pressure, we can help design the right
            path forward.
          </p>

          <h2 className="text-2xl md:text-4xl font-semibold mb-12">
            Let’s build systems that perform —{" "}
            <span className="italic font-light text-gray-500">
              today and at scale.
            </span>
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap bg-black text-white text-[13px] font-medium h-[44px] px-8 border border-transparent rounded-none transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:border-black active:opacity-90 tracking-widest uppercase"
          >
            Start A Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
