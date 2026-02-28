"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout-components/Navbar";

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
          <Navbar />

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
              AIDO - AI-powered prescription creator
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4">
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              We partnered with AIDO to engineer a robust AI-driven healthcare
              platform, streamlining patient intake and maximizing clinical
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HERO IMAGE ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden group">
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
            <span className="text-slate-900 font-medium">AIDO Medical</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Role
            </span>
            <span className="text-slate-900 font-medium">
              Platform Architecture
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Industry
            </span>
            <span className="text-slate-900 font-medium">Healthcare IT</span>
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
              Clinical intake workflows were notoriously bogged down by
              redundant paperwork and fragmented data silos. AIDO needed a
              foundational architecture to bridge the gap between archaic
              databases and modern AI automation.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <div className="h-px w-12 bg-[#4247f3] mb-6" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">
                  Data Silos
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Legacy EHR systems lacked interoperability, forcing clinical
                  staff into manual data entry across multiple disconnected
                  interfaces.
                </p>
              </div>
              <div>
                <div className="h-px w-12 bg-[#4247f3] mb-6" />
                <h3 className="text-lg font-medium text-slate-900 mb-3">
                  Triage Latency
                </h3>
                <p className="text-slate-500 font-light leading-relaxed">
                  Without automated prioritization, critical patient queues were
                  managed chronologically rather than by medical severity.
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
                  Unified Provider Dashboard
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  We engineered a unified React-based interface that aggregates
                  patient data, medical history, and clinical notes into a
                  single optimized view, drastically reducing administrative
                  overlay.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-[#4247f3]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">
                  AI-Driven Diagnostics Assistance
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  By constructing an API layer capable of interfacing with
                  advanced ML models, the platform flags high-risk anomalies,
                  ensuring critical cases are prioritized systematically.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-[#4247f3]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">
                  Smart Queue Integration
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  We developed a scheduling matrix that dynamically adjusts
                  clinic queues based on live severity scores, eliminating
                  wait-room flooding and preventing resource exhaustion.
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
            <div className="text-5xl font-bold text-slate-900 mb-4">100%</div>
            <div className="text-sm uppercase tracking-widest text-[#4247f3] font-semibold mb-2">
              Paperless
            </div>
            <p className="text-slate-500 font-light text-sm">
              Forms fully digitized
            </p>
          </div>
          <div className="text-center md:border-l md:border-r border-slate-200">
            <div className="text-5xl font-bold text-slate-900 mb-4">&lt;2%</div>
            <div className="text-sm uppercase tracking-widest text-[#4247f3] font-semibold mb-2">
              Rejection Rate
            </div>
            <p className="text-slate-500 font-light text-sm">
              On automated insurance claims
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-slate-900 mb-4">3x</div>
            <div className="text-sm uppercase tracking-widest text-[#4247f3] font-semibold mb-2">
              Faster Triage
            </div>
            <p className="text-slate-500 font-light text-sm">
              Through intelligent queuing
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
              To support the rapid synchronization requirements of a clinical
              environment, we built a highly decoupled, serverless microservices
              architecture. This structure allowed patient data streams to be
              processed in parallel.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
                  01
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  Data Ingestion
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Secure API gateways handle HL7 FHIR streams from legacy
                  Electronic Health Records, encrypting them in transit.
                </p>
              </div>
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-[#4247f3] font-semibold block mb-2">
                  02
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  AI Processing
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Real-time ML models perform anomaly detection on the incoming
                  data, flagging high-risk records instantly.
                </p>
              </div>
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
                  03
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  State Management
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Optimized Redis caching ensures that the active triage queue
                  is updated globally across all provider dashboards without
                  database locking.
                </p>
              </div>
              <div className="bg-slate-50 p-8 border border-slate-200">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
                  04
                </span>
                <h3 className="text-lg font-medium text-slate-900 mb-3 block">
                  Archival
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed">
                  Patient sessions are systematically appended to a compliant,
                  cold-storage database for long-term historical analysis.
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
              The introduction of the AIDO platform completely transformed daily
              clinical operations, yielding measurable improvements in both
              workflow velocity and data accuracy.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4247f3] mt-2.5 shrink-0" />
                <p className="text-slate-600 font-light">
                  <strong className="font-medium text-slate-900">
                    Zero Downtime Deployments:
                  </strong>{" "}
                  Migrated pilot clinics to the new system concurrently without
                  interrupting emergency workflows.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4247f3] mt-2.5 shrink-0" />
                <p className="text-slate-600 font-light">
                  <strong className="font-medium text-slate-900">
                    Reduced Physician Burnout:
                  </strong>{" "}
                  Provider dashboard optimization reduced average screen time
                  per patient significantly, freeing up clinical hours.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4247f3] mt-2.5 shrink-0" />
                <p className="text-slate-600 font-light">
                  <strong className="font-medium text-slate-900">
                    Scalable Infrastructure:
                  </strong>{" "}
                  The cloud-native architecture natively supports scaling to
                  hundreds of additional clinic locations.
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
                Explore Directory
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
