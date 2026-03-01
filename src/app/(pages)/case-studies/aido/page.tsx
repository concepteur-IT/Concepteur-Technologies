"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function AidoCaseStudy({
  isEmbedded = false,
}: {
  isEmbedded?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={containerRef}
      className="bg-white text-slate-900 font-sans selection:bg-[#4247f3] selection:text-white"
    >
      {!isEmbedded && (
        <>
          {/* Back Button */}
          <div className="pt-32 px-6 max-w-7xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-slate-900 hover:text-[#4247f3] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Case Studies
            </Link>
          </div>
        </>
      )}

      {/* ================= HERO SECTION ================= */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-200 bg-slate-50 rounded-full text-slate-500 text-xs font-semibold tracking-wide uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4247f3]" />
              Case Study
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-slate-900 leading-[1.1] mb-6">
              AIDO – AI-Powered Medical Prescription Creator
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4">
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              AIDO is a clinical-grade AI prescription creation platform
              designed to help doctors generate structured, compliant, and
              digitally shareable prescriptions in seconds. Our mandate was to
              architect and engineer a production-ready system optimized for
              speed, accuracy, and scalability in real-world medical
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HERO IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full bg-slate-100 overflow-hidden group">
          <Image
            src="/case-studies/aido-1.png"
            alt="AIDO Platform Dashboard"
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
            priority
          />
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-slate-200">
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Client
            </span>
            <span className="text-slate-900 font-medium">
              AIDO Healthcare Technologies
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Role
            </span>
            <span className="text-slate-900 font-medium">
              Product Architecture, AI Engineering, Full-Stack Development
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Industry
            </span>
            <span className="text-slate-900 font-medium">
              Digital Health / HealthTech
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Visit
            </span>
            <Link
              href="https://aido.ind.in/"
              target="_blank"
              className="text-[#4247f3] font-medium hover:underline inline-flex items-center gap-1"
            >
              aido.ind.in <ArrowRight className="w-3 h-3 -rotate-45" />
            </Link>
          </div>
        </div>

        {/* Developer Meta */}
        <div className="mt-12 p-8 border border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-2">
              Lead Developer
            </h3>
            <Link
              href="https://www.linkedin.com/in/proparna-das/"
              target="_blank"
              className="text-xl font-medium text-slate-900 hover:text-[#4247f3] transition-colors inline-flex items-center gap-2"
            >
              Proparna Das <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 md:max-w-2xl">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-3">
              Technologies & Contributions
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Flutter",
                "Node.js",
                "AI",
                "LangChain",
                "LangGraph",
                "AI Agent",
                "Ollama",
                "Nest JS",
                "Server",
                "AI Optimization",
                "Prompt Engineering",
                "Admin System",
                "Workflow",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border border-slate-200 text-xs text-slate-600 font-medium rounded-full whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE CHALLENGE ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-slate-900">
              The Challenge
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12">
              In high-volume clinical environments, prescription writing remains
              one of the most repetitive and time-consuming physician tasks.
              Manual workflows increase the risk of dosage inconsistencies,
              abbreviation ambiguity, and formatting variability across
              providers.
              <br />
              <br />
              AIDO required a system capable of generating standardized,
              compliant, and clinically structured prescriptions while
              maintaining physician control and workflow speed.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <div className="h-px w-12 bg-[#4247f3] mb-6" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">
                  Inconsistent Prescription Formatting
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Doctors follow personal shorthand styles, resulting in
                  non-standardized outputs that complicate pharmacy processing
                  and patient understanding.
                </p>
              </div>
              <div>
                <div className="h-px w-12 bg-[#4247f3] mb-6" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">
                  Time & Cognitive Load
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Repeated medication entry, dosage structuring, and instruction
                  formatting increase consultation time and reduce overall
                  clinic throughput.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND IMAGE ================= */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden group">
          <Image
            src="/case-studies/aido-2.png"
            alt="AIDO Platform Mobile"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* ================= THE SOLUTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-200">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-slate-900">
              Our Approach
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-[#4247f3]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">
                  Intelligent Prescription Engine
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  We engineered a structured prescription generation engine that
                  converts clinical inputs into standardized medical
                  prescriptions. The system enforces consistent drug naming
                  conventions, dosage logic, frequency structuring, and
                  instruction formatting.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-[#4247f3]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">
                  Clinical Rule Layer
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  A configurable rule-based validation layer ensures dosage
                  coherence, prevents incomplete entries, and flags potential
                  logical inconsistencies before final prescription generation.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-[#4247f3]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">
                  Doctor-Centric UX Architecture
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  The interface was designed for minimal friction. Physicians
                  can create, edit, duplicate, and finalize prescriptions within
                  seconds using an optimized workflow tailored for real clinic
                  speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS / IMPACT ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-slate-900">Impact</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-slate-900 mb-4">3x</div>
            <div className="text-sm uppercase tracking-widest text-[#4247f3] font-semibold mb-2">
              Faster Prescription Creation
            </div>
            <p className="text-slate-500 font-light text-sm">
              Compared to traditional manual workflows
            </p>
          </div>
          <div className="text-center md:border-l md:border-r border-slate-200">
            <div className="text-5xl font-bold text-slate-900 mb-4">100%</div>
            <div className="text-sm uppercase tracking-widest text-[#4247f3] font-semibold mb-2">
              Structured Output
            </div>
            <p className="text-slate-500 font-light text-sm">
              Standardized and digitally shareable prescriptions
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-slate-900 mb-4">0</div>
            <div className="text-sm uppercase tracking-widest text-[#4247f3] font-semibold mb-2">
              Formatting Variability
            </div>
            <p className="text-slate-500 font-light text-sm">
              Uniform structure across all providers
            </p>
          </div>
        </div>
      </section>

      {/* ================= BACKEND PROCESS ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-200">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-slate-900">
              Backend Process
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
              The AIDO platform was engineered with a modular backend
              architecture to support real-time prescription generation,
              structured storage, and secure medical record management.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
                  01
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  Data Input Layer
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Clinical inputs are captured via optimized UI components and
                  transmitted through secure API gateways to the processing
                  layer.
                </p>
              </div>
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-[#4247f3] font-semibold block mb-2">
                  02
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  AI Structuring Engine
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  The AI engine interprets clinical entries and generates
                  structured prescription objects using deterministic medical
                  formatting logic.
                </p>
              </div>
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
                  03
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  Validation & State Control
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Server-side validation ensures compliance with required
                  prescription fields before finalization. Session state
                  management enables rapid edits without data loss.
                </p>
              </div>
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
                  04
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  Secure Archival
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  All finalized prescriptions are securely stored in encrypted
                  databases with patient-linked indexing for future retrieval
                  and audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE ACHIEVED ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-200">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-slate-900">
              What We Achieved
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              AIDO transitioned from concept to a production-ready AI
              prescription platform capable of supporting real clinical
              deployment.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4247f3] mt-2.5 shrink-0" />
                <p className="text-slate-600 font-light">
                  <strong className="font-medium text-slate-900">
                    Production-Grade Architecture:
                  </strong>{" "}
                  Built a scalable infrastructure capable of supporting
                  multi-clinic deployment without performance degradation.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4247f3] mt-2.5 shrink-0" />
                <p className="text-slate-600 font-light">
                  <strong className="font-medium text-slate-900">
                    Clinical Efficiency Gains:
                  </strong>{" "}
                  Reduced average prescription writing time significantly,
                  allowing physicians to focus more on patient interaction.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4247f3] mt-2.5 shrink-0" />
                <p className="text-slate-600 font-light">
                  <strong className="font-medium text-slate-900">
                    Structured Medical Records:
                  </strong>{" "}
                  Enabled consistent digital prescription history for long-term
                  patient management and analytics.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= NEXT CASE STUDY ================= */}
      <section className="bg-slate-50 border-t border-slate-200 mt-20">
        <Link
          href="/case-studies"
          className="block max-w-7xl mx-auto px-6 py-32 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4 block">
                Next Project
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-slate-900 group-hover:text-[#4247f3] transition-colors">
                Explore More Case Studies
              </h2>
            </div>
            <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#4247f3] group-hover:border-[#4247f3] group-hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
