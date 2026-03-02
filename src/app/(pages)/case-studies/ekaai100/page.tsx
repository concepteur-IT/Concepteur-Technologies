"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Ekaai100CaseStudy({
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
      className="bg-white text-slate-900 font-sans selection:bg-black selection:text-white"
    >
      {!isEmbedded && (
        <>
          {/* Back Button */}
          <div className="pt-32 px-6 max-w-7xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-slate-900 hover:text-black hover:opacity-70 transition-colors"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-200 bg-slate-50 text-slate-500 text-xs font-semibold tracking-wide uppercase mb-8 rounded-none">
              <span className="w-1.5 h-1.5 bg-black rounded-none" />
              Case Study
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-black leading-[1.1] mb-6">
              Ekaai100 – Decorator Booking Web Application
            </h1>
          </div>

          <div className="lg:col-span-4 pb-4">
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Ekaai100 is a WordPress-based web application built to connect
              users with professional decorators for various occasions such as
              weddings, birthdays, corporate events, and anniversaries. The goal
              was to create a seamless booking and inquiry experience while
              allowing decorators to showcase their services effectively.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HEADER / TECH STACK ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 border-t border-b border-slate-200 mb-12">
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Client
            </span>
            <span className="text-black font-medium">Ekaai100 / Beeline</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Role
            </span>
            <span className="text-black font-medium">
              Web Application Development
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Industry
            </span>
            <span className="text-black font-medium">Event Management</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Platform
            </span>
            <span className="text-black font-medium">WordPress</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
              Visit
            </span>
            <Link
              href="https://ekaai100.com/#"
              target="_blank"
              className="text-black font-medium hover:opacity-70 transition-opacity inline-flex items-center gap-1"
            >
              ekaai100.com
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </div>
        </div>

        {/* Developer Meta / Tech Stack */}
        <div className="p-8 border border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between pointer-events-none">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
              Technologies & Contributions
            </h3>
            <div className="flex flex-wrap gap-2 md:justify-start justify-center">
              {[
                "WordPress",
                "Custom Post Types",
                "Dynamic Event Fields",
                "Server Optimization",
                "Security & Validation",
                "Email Notification System",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-white border border-slate-200 text-[13px] text-black font-medium whitespace-nowrap"
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
            <h2 className="text-3xl font-medium text-black">
              Problem Statement
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12">
              Event decoration is highly service-oriented and time-sensitive.
              Both users and decorators face distinct challenges in managing
              inquiries and showcasing services.
              <br />
              <br />
              There was a clear need for a centralized, easy-to-use platform
              that connects customers and decorators in a structured and
              scalable way.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <div className="h-px w-12 bg-black mb-6" />
                <h3 className="text-lg font-medium text-black mb-3">
                  User Challenges
                </h3>
                <ul className="text-slate-500 font-light leading-relaxed list-none space-y-3">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" />{" "}
                    Difficulty finding reliable decorators in one place
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" /> No
                    structured way to compare services
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" />{" "}
                    Manual, slow inquiry processes
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" /> Lack
                    of transparent communication
                  </li>
                </ul>
              </div>
              <div>
                <div className="h-px w-12 bg-black mb-6" />
                <h3 className="text-lg font-medium text-black mb-3">
                  Decorator Challenges
                </h3>
                <ul className="text-slate-500 font-light leading-relaxed list-none space-y-3">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" />{" "}
                    Generating consistent leads
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" />{" "}
                    Managing inquiries efficiently
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" />{" "}
                    Showcasing portfolios professionally
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-black shrink-0 mt-2" />{" "}
                    Handling seasonal traffic spikes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE SOLUTION ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-200 bg-slate-50">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-black">Our Solution</h2>
            <p className="text-slate-500 mt-6 leading-relaxed font-light">
              We built Ekaai100 as a dynamic WordPress application with
              structured workflows and optimized performance architecture.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div className="flex gap-6">
              <div className="shrink-0 mt-1 flex items-center justify-center w-6 h-6 border border-black text-black font-semibold text-xs">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-4">
                  Dynamic Service Listing System
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Implemented Custom Post Types for decorator profiles,
                  categorized by occasions like Wedding, Birthday, etc. Each
                  profile includes portfolio galleries and occasion-based
                  filtering, acting as a conversion-optimized landing page with
                  SEO-friendly URLs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1 flex items-center justify-center w-6 h-6 border border-black text-black font-semibold text-xs">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-4">
                  Advanced Contact & Inquiry System
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Developed a fully dynamic contact system with occasion-based
                  inquiry selection and custom fields based on event type.
                  Included dynamic form validation, server-side sanitization,
                  email notifications to decorators, and an admin dashboard for
                  tracking.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1 flex items-center justify-center w-6 h-6 border border-black text-black font-semibold text-xs">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-4">
                  WordPress Dynamic Architecture
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Instead of static pages, built reusable template structures
                  using custom fields and flexible service modules. This allows
                  administrators to update content and decorators without
                  technical dependency.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1 flex items-center justify-center w-6 h-6 border border-black text-black font-semibold text-xs">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-4">
                  Performance Optimization
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Configured server-level caching, optimized database queries,
                  compressed images, and implemented lazy loading. Optimized
                  theme structure reduced unused assets to improve TTFB and
                  handle seasonal traffic spikes.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1 flex items-center justify-center w-6 h-6 border border-black text-black font-semibold text-xs">
                5
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-4">
                  UX & Design Implementation
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  Translated Beeline’s design into pixel-perfect templates with
                  a mobile-first responsive layout. Optimized call-to-action
                  placements and smooth interaction behaviors focus on reducing
                  friction in booking inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-200">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-medium text-black">Key Challenges</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-slate-200 bg-white p-8 hover:border-black transition-colors group">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 group-hover:text-black transition-colors">
                  01. Dynamic Form Logic
                </h3>
                <p className="text-slate-900 font-medium mb-2">
                  Different occasions require different input fields.
                </p>
                <p className="text-slate-500 font-light text-sm">
                  Solution: Built conditional logic within the form system for
                  adaptive field rendering.
                </p>
              </div>
              <div className="border border-slate-200 bg-white p-8 hover:border-black transition-colors group">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 group-hover:text-black transition-colors">
                  02. High Media Usage
                </h3>
                <p className="text-slate-900 font-medium mb-2">
                  Decorators rely heavily on image portfolios.
                </p>
                <p className="text-slate-500 font-light text-sm">
                  Solution: Implemented image optimization, lazy loading, and
                  compressed uploads to maintain speed.
                </p>
              </div>
              <div className="border border-slate-200 bg-white p-8 hover:border-black transition-colors group">
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 group-hover:text-black transition-colors">
                  03. Scalability
                </h3>
                <p className="text-slate-900 font-medium mb-2">
                  Platform needed to support growing decorator listings.
                </p>
                <p className="text-slate-500 font-light text-sm">
                  Solution: Structured modular architecture using reusable
                  Custom Post Type templates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS / IMPACT ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-200 bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-white">Project Impact</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            The platform established a strong digital presence for the event
            decoration ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
          <div className="text-center border border-white/20 p-8 hover:border-white transition-colors">
            <div className="text-sm uppercase tracking-widest text-white font-semibold mb-3">
              Centralized Discovery
            </div>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              Provided a single robust platform for finding and comparing
              decorators in one place.
            </p>
          </div>
          <div className="text-center border border-white/20 p-8 hover:border-white transition-colors">
            <div className="text-sm uppercase tracking-widest text-white font-semibold mb-3">
              Lead Generation
            </div>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              Improved lead gen for decorators and tangibly reduced manual
              communication gaps.
            </p>
          </div>
          <div className="text-center border border-white/20 p-8 hover:border-white transition-colors">
            <div className="text-sm uppercase tracking-widest text-white font-semibold mb-3">
              Performance & Speed
            </div>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              Enhanced reliability and noticeably faster inquiry processing
              across devices.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NEXT CASE STUDY ================= */}
      <section className="bg-slate-50 border-t border-slate-200">
        <Link
          href="/case-studies"
          className="block max-w-7xl mx-auto px-6 py-32 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4 block group-hover:text-black transition-colors">
                Next Project
              </span>
              <h2 className="text-4xl md:text-6xl font-medium text-black group-hover:opacity-70 transition-colors">
                Explore More Case Studies
              </h2>
            </div>
            <div className="w-16 h-16 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
