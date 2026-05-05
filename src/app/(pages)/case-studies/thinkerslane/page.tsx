"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

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
      <div className="flex flex-col pb-4">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-[#f5ad76]" />
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-gray-400">
            {subtitle || "Section"}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function ThinkerslaneCaseStudy() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-[#0b2f33] selection:text-white font-sans">
      {/* Back Button */}
      <div className="absolute top-8 left-5 md:left-[15%] z-50">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      {/* Minimalist Architectural Hero (No Images) */}
      <header className="w-full pt-32 pb-12 px-5 md:px-[15%]">
        <div className="flex flex-col lg:flex-row border border-gray-200 custom-notch-tl-br overflow-hidden shadow-sm">
          {/* Main Title Area */}
          <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-[#f5ad76]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                  Case Study
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black leading-none mb-6">
                Thinkerslane.
              </h1>
              <p className="text-xl md:text-3xl text-gray-500 font-light tracking-tight max-w-xl leading-relaxed">
                Online Book Store with Integrated Coupon & Discount System
              </p>
            </div>

            {/* Developer Avatars */}
            <div className="mt-16 flex flex-wrap items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">
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
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-xs font-medium text-black hover:bg-[#0b2f33] hover:text-white hover:border-[#0b2f33] transition-colors">
                      {member.init}
                    </div>

                    <div className="absolute top-14 left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-[#0b2f33] text-white text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none flex flex-col items-center custom-notch-tl-br">
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-[#0b2f33]" />
                      <span className="font-semibold tracking-wide">
                        {member.name}
                      </span>
                      <span className="text-[10px] text-[#f5ad76] tracking-widest uppercase mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full lg:w-[320px] bg-[#FAFAF9] flex flex-col shrink-0">
            <div className="p-8 border-b border-gray-200 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Platform
              </span>
              <span className="block text-lg text-black font-medium">
                E-commerce Web App
              </span>
            </div>

            <div className="p-8 border-b border-gray-200 flex-1 bg-white">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Domain
              </span>
              <a
                href="https://thinkerslane.com"
                className="block text-lg text-black font-medium hover:text-[#0b2f33] hover:underline underline-offset-4 transition-colors"
              >
                thinkerslane.com
              </a>
            </div>

            <div className="p-8 border-b border-gray-200 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Industry
              </span>
              <span className="block text-lg text-black font-medium">
                Online Book Retail
              </span>
            </div>

            <div className="p-8 flex-1 bg-white">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Target Users
              </span>
              <span className="block text-base text-gray-800 font-light leading-relaxed">
                Students, professionals, educators & book enthusiasts
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="w-full px-5 md:px-[15%] mb-40">
        {/* 01: Overview */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 pt-12 border-t border-gray-100 mt-12">
          <SectionHeader
            number="01"
            title="Overview"
            subtitle="Project Context"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
              <p className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#0b2f33] pl-6 mb-12 leading-snug">
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

              <div className="mt-16 bg-[#FAFAF9] border border-gray-100 p-8 md:p-12 custom-notch-tl-br shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-8 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-black"></span>
                  Core Objectives
                </h3>
                <ul className="space-y-5 font-light text-lg text-black">
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Provide an intuitive book browsing and purchasing system
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Enable secure online transactions
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Implement promotional strategies through coupons and
                    discounts
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Ensure scalable and maintainable backend architecture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 02: Key Features */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-gray-100 pt-12">
          <SectionHeader
            number="02"
            title="Features"
            subtitle="System Focus Areas"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-black">
              A scalable conversion engine.
            </h3>

            <div className="space-y-0">
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
                  className="group py-8 border-b border-gray-200 hover:pl-6 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <span className="text-xs font-mono font-medium bg-gray-100 px-3 py-1 text-gray-500 group-hover:bg-[#0b2f33] group-hover:text-white transition-colors shrink-0 mt-1">
                      {feature.id}
                    </span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-medium text-black mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature 3.4 Highlights Block */}
            <div className="mt-16 bg-[#0b2f33] p-8 md:p-16 text-white relative overflow-hidden group custom-notch-tl-br shadow-lg">
              <div className="absolute top-0 right-0 p-8 border-l border-b border-white/10">
                <span className="text-xs font-mono font-bold tracking-widest text-[#f5ad76]">
                  3.4
                </span>
              </div>

              <h4 className="text-3xl md:text-4xl font-light text-white mb-8 pr-12">
                Coupon & Discount Functionality
              </h4>
              <p className="text-gray-300 font-light leading-relaxed mb-8 max-w-3xl text-lg">
                One of the core features of the platform is its flexible Coupon
                & Discount system. The system allows administrators to create
                and manage percentage-based discounts, fixed-amount discounts,
                limited-time promotional codes, usage-restricted coupons, and
                minimum purchase requirement coupons.
              </p>
              <p className="text-white font-medium leading-relaxed mb-12 max-w-3xl border-l-2 border-[#f5ad76] pl-6 py-2">
                During checkout, users can apply valid coupon codes to receive
                instant discounts. The system validates coupon eligibility in
                real time and recalculates the total order amount automatically.
              </p>

              <div className="border-t border-white/20 pt-10">
                <h5 className="text-xs font-bold tracking-widest uppercase mb-8 text-[#f5ad76]">
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
                      className="bg-white/5 border border-white/10 p-5 text-center hover:bg-white/10 transition-colors"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide">
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
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-gray-100 pt-12">
          <SectionHeader
            number="03"
            title="Challenges"
            subtitle="Implementation Hurdles"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-6">
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
                  className="p-8 border border-gray-100 bg-[#FAFAF9] group hover:bg-white hover:border-gray-300 transition-colors custom-notch-tl-br"
                >
                  <h5 className="text-xs font-bold uppercase tracking-widest text-black mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                    <span>{cs.title}</span>
                    <span className="text-[#f5ad76] font-mono">0{cs.id}</span>
                  </h5>
                  <div className="space-y-8">
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-3">
                        Challenge
                      </span>
                      <p className="text-black font-light leading-relaxed text-base">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#0b2f33] mb-3">
                        Solution
                      </span>
                      <p className="text-gray-600 font-light leading-relaxed text-base">
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
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 border-t border-gray-100 pt-12">
          <SectionHeader
            number="04"
            title="Strategy"
            subtitle="Analysis & Conclusion"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-16 text-black">
              Strategic Approach
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {[
                {
                  title: "Customer-Centric Design",
                  desc: "Focused on intuitive UI/UX to simplify browsing and purchasing.",
                },
                {
                  title: "Conversion Optimization",
                  desc: "Integrated coupon functionality strategically in the checkout flow to encourage usage without disrupting the user experience.",
                },
                {
                  title: "Promotional Flexibility",
                  desc: "Designed a flexible coupon system that allows marketing teams to run dynamic campaigns.",
                },
                {
                  title: "Scalable Architecture",
                  desc: "Built a modular backend to support product expansion and traffic growth.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 p-8 custom-notch-tl-br hover:shadow-sm transition-shadow"
                >
                  <h4 className="text-xl font-medium mb-4 text-black">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-light text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#FAFAF9] border border-gray-100 p-8 md:p-16 mb-20 custom-notch-tl-br">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0b2f33] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0b2f33]"></span>
                Implications of the Study
              </h3>
              <ul className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-black">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />{" "}
                  Coupon and discount systems significantly influence purchasing
                  decisions.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />{" "}
                  Flexible promotional tools enhance marketing effectiveness.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />{" "}
                  Structured product categorization improves discoverability.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />{" "}
                  Secure and seamless checkout processes increase customer
                  trust.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />{" "}
                  Scalable backend architecture ensures long-term
                  sustainability.
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 font-medium">
                The integration of discount logic within the purchasing workflow
                plays a crucial role in boosting revenue and customer
                engagement.
              </div>
            </div>

            <div className="max-w-4xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-300"></span>
                Conclusion
              </h3>
              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-8">
                The Online Book Store successfully combines a user-friendly
                shopping experience with a powerful coupon and discount engine.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed border-l-2 border-[#0b2f33] pl-6 py-2">
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
      <footer className="border-t border-gray-200 bg-[#0b2f33] text-white relative overflow-hidden">
        <Link
          href="/case-studies"
          className="block relative z-10 p-12 md:p-24 lg:p-32 group"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-[#f5ad76] group-hover:text-white transition-colors">
            Return To
          </h2>
          <div className="flex items-center justify-between">
            <h3 className="text-4xl md:text-7xl lg:text-9xl font-light tracking-tight group-hover:translate-x-8 transition-transform duration-700">
              Directory
            </h3>
            <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 opacity-50 text-[#f5ad76] group-hover:text-white group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
