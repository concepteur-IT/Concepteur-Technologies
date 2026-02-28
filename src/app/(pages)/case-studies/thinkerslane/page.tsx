"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Square } from "lucide-react";
import Navbar from "@/components/layout-components/Navbar";

export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="md:col-span-4 lg:col-span-3 sticky top-32 h-fit mb-12 md:mb-0">
      <div className="flex flex-col border-b border-black/10 pb-4">
        <div className="flex items-center gap-4 mb-2">
          <span className="w-2 h-2 bg-black rounded-full shrink-0" />
          <span className="text-3xl font-serif tracking-widest text-black">
            {number}
          </span>
        </div>
        <h2 className="text-xl md:text-2xl font-serif tracking-widest text-black uppercase">
          {title}
        </h2>
        {subtitle && (
          <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mt-2">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ThinkerslaneCaseStudy() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white font-sans">
      <Navbar />

      {/* Back Button */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-gray-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      {/* Modern Typographic Header */}
      <header className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 border-b border-black pb-12">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none mb-6">
              Thinkerslane.
            </h1>
            <p className="text-2xl md:text-4xl text-gray-500 font-light tracking-tight max-w-2xl leading-tight mb-12">
              Online Book Store with Integrated Coupon & Discount System
            </p>

            {/* Developer Avatars */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 shrink-0">
                Core Team
              </span>
              <div className="flex -space-x-3">
                {[
                  { name: "Proparna Das", init: "PD", role: "Developer" },
                  { name: "Ankur Saha", init: "AS", role: "Developer" },
                  { name: "Spandan Saha", init: "SS", role: "Developer" },
                  { name: "Antar", init: "A", role: "Developer" },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="relative group cursor-pointer z-10 hover:z-20"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center text-xs font-mono font-semibold text-black hover:bg-black hover:text-white transition-colors shadow-sm">
                      {member.init}
                    </div>

                    {/* Custom Tooltip */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 mt-3 px-3 py-2 bg-black text-white text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none flex flex-col items-center">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-black" />
                      <span className="font-semibold font-sans tracking-wide">
                        {member.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Metadata Box */}
          <div className="shrink-0 flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-gray-500 border border-black/10 p-6 min-w-[300px] bg-gray-50">
            <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
              <span>Platform</span>
              <span className="text-black text-right">E-commerce Web App</span>
            </div>
            <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
              <span>Domain</span>
              <a
                href="https://thinkerslane.com"
                className="text-black text-right border-b border-black/20 hover:border-black transition-colors"
              >
                thinkerslane.com
              </a>
            </div>
            <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
              <span>Industry</span>
              <span className="text-black text-right">Online Book Retail</span>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <span>Target Users</span>
              <span className="text-black leading-relaxed font-sans text-sm normal-case">
                Students, professionals, educators & book enthusiasts
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner (Black & White to Color on Hover) */}
      <section className="px-6 max-w-screen-2xl mx-auto mb-20 md:mb-32">
        <div className="relative w-full h-[30vh] lg:h-[45vh] overflow-hidden bg-gray-100 group cursor-crosshair">
          <motion.div style={{ scale }} className="w-full h-full origin-bottom">
            <Image
              src="/case-studies/thinkerslane.png"
              alt="Thinkerslane Hero Banner"
              fill
              className="object-cover grayscale transition-all duration-[1500ms] group-hover:grayscale-0"
              quality={100}
              priority
            />
          </motion.div>
          {/* subtle framing line */}
          <div className="absolute inset-0 border border-black/10 pointer-events-none" />
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="px-6 max-w-7xl mx-auto mb-40">
        {/* 01: Overview */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-black pt-12">
          <SectionHeader
            number="01"
            title="Overview"
            subtitle="Project Context"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="prose prose-lg max-w-none text-gray-800 font-serif leading-relaxed space-y-8">
              <p className="text-2xl md:text-3xl font-light text-black border-l-2 border-black pl-6 mb-12 leading-snug">
                The Online Book Store is a full-featured e-commerce platform
                developed to provide a seamless and user-friendly experience for
                browsing, purchasing, and managing books online.
              </p>
              <p>
                The primary objective of the platform was to create a scalable,
                secure, and conversion-focused system that supports both
                customers and administrators efficiently.
              </p>
              <p>
                A key highlight of the platform is its integrated{" "}
                <strong className="font-semibold text-black">
                  Coupon & Discount functionality
                </strong>
                , designed to improve customer retention, increase sales, and
                support promotional campaigns.
              </p>

              <div className="mt-16 bg-gray-50 border border-black/10 p-8 md:p-12">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-8 border-b border-black/10 pb-4">
                  Core Objectives
                </h3>
                <ul className="space-y-4 font-sans text-base">
                  <li className="flex gap-4">
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-400" />{" "}
                    Provide an intuitive book browsing and purchasing system
                  </li>
                  <li className="flex gap-4">
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-400" />{" "}
                    Enable secure online transactions
                  </li>
                  <li className="flex gap-4">
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-400" />{" "}
                    Implement promotional strategies through coupons and
                    discounts
                  </li>
                  <li className="flex gap-4">
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-400" />{" "}
                    Ensure scalable and maintainable backend architecture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 02: Key Features */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-black pt-12">
          <SectionHeader
            number="02"
            title="Features"
            subtitle="System Focus Areas"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-16">
              A scalable conversion engine.
            </h3>

            <div className="space-y-12">
              {[
                {
                  id: "3.1",
                  title: "Book Catalog & Browsing",
                  desc: "The platform provides a structured catalog system where users can browse books by categories, genres, authors, or price range. Each book has a dedicated product page containing detailed descriptions, pricing, availability status, and cover images. Search and filtering functionalities enhance discoverability and improve user experience.",
                },
                {
                  id: "3.2",
                  title: "User Account Management",
                  desc: "Users can register and log in securely, manage personal details, view order history, track order status, and save favorite books. This improves personalization and encourages repeat purchases.",
                },
                {
                  id: "3.3",
                  title: "Shopping Cart & Checkout System",
                  desc: "Customers can add books to their cart, update quantities, and proceed to a secure checkout process. The checkout includes address management, order summary, coupon code application, and secure payment processing.",
                },
                {
                  id: "3.5",
                  title: "Admin Panel",
                  desc: "The platform includes a comprehensive admin dashboard where administrators can add, edit, or delete books, manage inventory, track sales and revenue, create and manage coupons, and monitor user activity. This ensures full control over operations and promotions.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group border-b border-black/10 pb-8 hover:border-black transition-colors duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                    <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors shrink-0 pt-1">
                      {feature.id}
                    </span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-serif text-black mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature 3.4 Highlights Block */}
            <div className="mt-16 border border-black p-8 md:p-12 bg-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 border-l border-b border-black/10">
                <span className="text-xs font-mono tracking-widest">3.4</span>
              </div>

              <h4 className="text-2xl md:text-3xl font-serif text-black mb-6 pr-12">
                Coupon & Discount Functionality
              </h4>
              <p className="text-gray-600 font-light font-serif leading-relaxed mb-8 max-w-3xl text-lg">
                One of the core features of the platform is its flexible Coupon
                & Discount system. The system allows administrators to create
                and manage percentage-based discounts, fixed-amount discounts,
                limited-time promotional codes, usage-restricted coupons, and
                minimum purchase requirement coupons.
              </p>
              <p className="text-gray-800 font-medium font-serif leading-relaxed mb-12 max-w-3xl border-l-4 border-black pl-6 py-2">
                During checkout, users can apply valid coupon codes to receive
                instant discounts. The system validates coupon eligibility in
                real time and recalculates the total order amount automatically.
              </p>

              <div className="border-t border-black/10 pt-8">
                <h5 className="text-xs font-bold tracking-widest uppercase mb-6 text-gray-400">
                  Business Impact
                </h5>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Increases conversion rates",
                    "Encourages bulk purchases",
                    "Supports marketing campaigns",
                    "Improves customer retention",
                  ].map((impact, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 border border-black/10 p-4 text-center"
                    >
                      <span className="text-xs font-semibold uppercase">
                        {impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 03: Challenges & Solutions */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-black pt-12">
          <SectionHeader
            number="03"
            title="Challenges"
            subtitle="Implementation Hurdles"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  id: "1",
                  title: "Discount Logic Complexity",
                  challenge:
                    "Implementing multiple discount types with various conditions (expiry, usage limits, minimum cart value) required precise validation logic.",
                  solution:
                    "Developed a structured coupon validation engine that checks eligibility rules before applying discounts, ensuring accurate calculations and preventing misuse.",
                },
                {
                  id: "2",
                  title: "Cart & Payment Integration",
                  challenge:
                    "Ensuring coupon discounts are correctly reflected during payment processing.",
                  solution:
                    "Integrated discount calculations directly into the order summary before payment gateway processing, maintaining consistency between frontend and backend totals.",
                },
                {
                  id: "3",
                  title: "Scalability",
                  challenge:
                    "As the product catalog and users grow, performance optimization becomes critical.",
                  solution:
                    "Optimized database queries, implemented indexing, and structured modular backend logic to support future growth.",
                },
                {
                  id: "4",
                  title: "Security",
                  challenge:
                    "E-commerce platforms require secure authentication and payment handling.",
                  solution:
                    "Implemented secure authentication systems, input validation, and encrypted communication during checkout.",
                },
              ].map((cs) => (
                <div
                  key={cs.id}
                  className="p-8 border border-black/10 bg-gray-50 group hover:border-black transition-colors"
                >
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-black mb-6 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Square className="w-3 h-3" /> {cs.title}
                    </span>
                    <span className="text-gray-400 font-mono">0{cs.id}</span>
                  </h5>
                  <div className="space-y-6">
                    <div>
                      <span className="inline-block text-[10px] font-mono tracking-widest uppercase border border-red-200 bg-red-50 text-red-600 px-2 py-1 mb-3">
                        Challenge
                      </span>
                      <p className="text-black font-serif leading-relaxed text-sm md:text-base">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-mono tracking-widest uppercase border border-green-200 bg-green-50 text-green-700 px-2 py-1 mb-3">
                        Solution
                      </span>
                      <p className="text-gray-600 font-light font-serif leading-relaxed text-sm md:text-base">
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 04: Strategy & Outcome */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 border-t border-black pt-12">
          <SectionHeader
            number="04"
            title="Strategy"
            subtitle="Analysis & Conclusion"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-3xl md:text-4xl font-serif tracking-tight mb-12">
              Strategic Approach
            </h3>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 mb-24">
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Customer-Centric Design
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Focused on intuitive UI/UX to simplify browsing and
                  purchasing.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Conversion Optimization
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Integrated coupon functionality strategically in the checkout
                  flow to encourage usage without disrupting the user
                  experience.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Promotional Flexibility
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Designed a flexible coupon system that allows marketing teams
                  to run dynamic campaigns.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Scalable Architecture
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Built a modular backend to support product expansion and
                  traffic growth.
                </p>
              </div>
            </div>

            <div className="bg-black text-white p-8 md:p-16 mb-16">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 border-b border-white/20 pb-4">
                Implications of the Study
              </h3>
              <ul className="space-y-6 font-serif text-lg md:text-xl font-light leading-relaxed">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-white shrink-0 mt-3" /> Coupon
                  and discount systems significantly influence purchasing
                  decisions.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-white shrink-0 mt-3" />{" "}
                  Flexible promotional tools enhance marketing effectiveness.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-white shrink-0 mt-3" />{" "}
                  Structured product categorization improves discoverability.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-white shrink-0 mt-3" /> Secure
                  and seamless checkout processes increase customer trust.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-white shrink-0 mt-3" />{" "}
                  Scalable backend architecture ensures long-term
                  sustainability.
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-white/20 text-gray-300 italic font-serif">
                The integration of discount logic within the purchasing workflow
                plays a crucial role in boosting revenue and customer
                engagement.
              </div>
            </div>

            <div className="max-w-4xl">
              <h3 className="text-3xl font-serif text-black mb-6">
                Conclusion
              </h3>
              <p className="text-xl text-gray-600 font-light font-serif leading-loose mb-6">
                The Online Book Store successfully combines a user-friendly
                shopping experience with a powerful coupon and discount engine.
              </p>
              <p className="text-lg text-gray-600 font-light font-serif leading-loose border-l-4 border-black pl-6">
                By integrating promotional flexibility, secure transactions, and
                scalable architecture, the platform supports both business
                growth and customer satisfaction. The project highlights how
                strategic implementation of discount systems can directly impact
                sales performance, customer loyalty, and overall platform
                success.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Next Case Study Footer */}
      <footer className="border-t border-black bg-black text-white relative overflow-hidden">
        <Link
          href="/case-studies"
          className="block relative z-10 p-8 md:p-16 lg:p-32 group"
        >
          <h2 className="text-sm font-mono tracking-widest uppercase mb-4 text-gray-400 group-hover:text-white transition-colors">
            Return To
          </h2>
          <div className="flex items-center justify-between">
            <h3 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tight group-hover:translate-x-8 transition-transform duration-700">
              Directory
            </h3>
            <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32 opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
