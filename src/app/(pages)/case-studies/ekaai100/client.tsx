"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Ekaai100CaseStudyClient({
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
          <div className="pt-32 w-full px-5 md:px-[15%]">
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
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 w-full px-5 md:px-[15%]">
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
              allowing decorators to showcase their portfolios effectively.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-200 mt-16 text-slate-900 font-sans">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Client
            </p>
            <p className="text-xl font-medium tracking-tight">Ekaai100</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Role
            </p>
            <p className="text-xl font-medium tracking-tight">
              Full Development
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Timeline
            </p>
            <p className="text-xl font-medium tracking-tight">2 Months</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Platform
            </p>
            <p className="text-xl font-medium tracking-tight">
              WordPress / PHP
            </p>
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE / OVERVIEW ================= */}
      <section className="py-24 w-full px-5 md:px-[15%] border-t border-slate-200">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            System Overview
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-8">
            Designing a scalable platform for event booking and portfolio
            showcasing.
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
            The platform simplifies the connection between event organizers and
            decorators. Users can browse decorator portfolios, view past
            projects, compare pricing packages, and submit direct booking
            inquiries with ease.
          </p>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-24 w-full px-5 md:px-[15%] bg-slate-50 border-y border-slate-200">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-12">
          Core Capabilities
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Decorator Profiles & Portfolios",
              desc: "Dedicated profiles allowing decorators to display high-resolution imagery, past work, service categories, and client reviews.",
            },
            {
              num: "02",
              title: "Event-Based Categorization",
              desc: "Intuitive filtering by occasion (Weddings, Birthdays, Corporate, Anniversaries) to help users find tailored decor specialists.",
            },
            {
              num: "03",
              title: "Inquiry & Booking System",
              desc: "Custom lead capture forms enabling direct inquiry submissions with automated notification alerts to decorators.",
            },
            {
              num: "04",
              title: "Responsive Interface",
              desc: "Optimized for mobile and desktop screens, ensuring smooth navigation for users browsing event ideas on the go.",
            },
            {
              num: "05",
              title: "WordPress Admin Control",
              desc: "Easily manageable CMS panel for administrators to approve decorator profiles, manage listings, and monitor inquiries.",
            },
            {
              num: "06",
              title: "SEO & Speed Optimized",
              desc: "Configured image compression, caching, and clean URL structures to ensure rapid page load times and search ranking.",
            },
          ].map((feat) => (
            <div
              key={feat.num}
              className="p-8 bg-white border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-6">
                  {feat.num}
                </span>
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-24 w-full px-5 md:px-[15%]">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-12">
          Technology Stack
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "WordPress",
            "PHP",
            "MySQL",
            "JavaScript",
            "CSS3 / HTML5",
            "Elementor",
            "Contact Form 7",
            "Yoast SEO",
          ].map((tech) => (
            <div
              key={tech}
              className="p-6 border border-slate-200 bg-slate-50 text-center font-medium text-slate-800"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {!isEmbedded && (
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
              <ArrowRight className="w-16 h-16 md:w-32 md:h-32 opacity-20 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
            </div>
          </Link>
        </footer>
      )}
    </div>
  );
}
