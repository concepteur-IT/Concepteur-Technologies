"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveUpRight, Square } from "lucide-react";

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
            {number} — {subtitle || "Section"}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function SuprokashCaseStudy() {
  const { scrollYProgress } = useScroll();

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
                Suprokash.
              </h1>
              <p className="text-xl md:text-3xl text-gray-500 font-light tracking-tight max-w-xl leading-relaxed">
                Modernizing retail bookstore operations through a mobile-first billing ecosystem.
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
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Platform</span>
              <span className="block text-lg text-black font-medium">Mobile App</span>
            </div>
            
            <div className="p-8 border-b border-gray-200 flex-1 bg-white">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Frontend</span>
              <span className="block text-lg text-black font-medium">React Native</span>
            </div>

            <div className="p-8 border-b border-gray-200 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Backend</span>
              <span className="block text-lg text-black font-medium">Codeigniter 4</span>
            </div>

            <div className="p-8 flex-1 bg-white">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Database</span>
              <span className="block text-base text-gray-800 font-light leading-relaxed font-medium">
                MySQL
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
                This project involves the development of a dedicated mobile
                billing application designed exclusively for bookstore staff to
                modernize and optimize in-store sales operations. The system was
                built to eliminate inefficiencies associated with manual billing
                methods, reduce human error, and provide a structured,
                technology-driven workflow for handling book sales.
              </p>
              <p>
                Traditionally, billing processes in retail bookstores often rely
                on manual entries, desktop-based systems, or fragmented tools that
                slow down checkout and increase the likelihood of pricing
                discrepancies. This mobile solution transforms that process by
                equipping staff members with a handheld, real-time billing
                platform that allows them to generate invoices instantly from
                anywhere within the store environment.
              </p>
              <p>
                The application enables staff to search and select books from the
                inventory, automatically calculate totals based on pricing logic,
                apply applicable discounts or taxes, and generate structured
                invoices within seconds. Every transaction is securely transmitted
                to the backend system, ensuring centralized data storage and
                synchronized record management.
              </p>

              <div className="mt-16 bg-[#FAFAF9] border border-gray-100 p-8 md:p-12 custom-notch-tl-br shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-8 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-black"></span>
                  Architecture Approach
                </h3>
                <ul className="space-y-5 font-light text-lg text-black">
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <span>
                      The frontend is developed using React Native, providing a responsive and cross-platform mobile interface tailored for ease of use in a fast-paced retail environment.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <span>
                      The backend is built with CodeIgniter 4, implementing RESTful APIs to handle authentication, billing logic, inventory management, and transaction persistence.
                    </span>
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <span>
                      A centralized database maintains books, pricing, stock quantities, and invoice history, ensuring data integrity and traceability.
                    </span>
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
              A frictionless retail environment.
            </h3>

            <div className="space-y-0">
              {[
                {
                  title: "Authentication & Geo-Tracking",
                  desc: "Secure authentication mechanism for staff access. Automatically captures the staff member’s geographic location and login timestamp, securely transmitting it to the admin dashboard for monitoring.",
                },
                {
                  title: "Streamlined Billing Cart",
                  desc: "A cart-based billing system that instantly calculates subtotals. Staff can apply custom discount percentages per transaction with rigorous backend validation.",
                },
                {
                  title: "Advanced Product Search",
                  desc: "Robust search with filtering options allows staff to locate books using book name, ISBN number, or publisher-based filtering.",
                },
                {
                  title: "ISBN Barcode Scanning",
                  desc: "Integrates device camera scanning for ISBN barcodes. Instantly retrieves corresponding book details, reducing manual entry time and accelerating the checkout process.",
                },
                {
                  title: "Automated QR Coupon Generation",
                  desc: "Dynamic coupon generation tied to purchase amounts. When a customer’s purchase meets criteria, generating a unique QR coupon for future use.",
                },
                {
                  title: "QR Code Redemption",
                  desc: "Staff can scan customer coupon QR codes directly within the app. The system automatically validates eligibility and applies the calculated discount to the current bill.",
                },
                {
                  title: "Invoice Retrieval & Printing",
                  desc: "The system maintains complete transaction history, allowing staff to retrieve and print invoices at any time to ensure transparency and simplify reconciliation.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group py-8 border-b border-gray-200 hover:pl-6 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <span className="text-xs font-mono font-medium bg-gray-100 px-3 py-1 text-gray-500 group-hover:bg-[#0b2f33] group-hover:text-white transition-colors shrink-0 mt-1">
                      0{i + 1}
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
          </div>
        </div>

        {/* 03: Challenges & Solutions */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-gray-100 pt-12">
          <SectionHeader
            number="03"
            title="Challenges"
            subtitle="Issue Matrix"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  challenge:
                    "Manual attendance tracking lacks precision and offers limited transparency for administrators.",
                  solution:
                    "A secure authentication module implemented with automatic geo-location and timestamp capture.",
                },
                {
                  challenge:
                    "Manual billing or semi-digital systems often result in pricing errors and inconsistent discounts.",
                  solution:
                    "A structured cart-based billing system developed to automate price calculations, tax handling, and backend validation.",
                },
                {
                  challenge:
                    "Locating a specific book quickly slows down the billing process without digital aid.",
                  solution:
                    "An advanced multi-parameter product search system implemented (Title, ISBN, Publisher).",
                },
                {
                  challenge:
                    "Typing ISBN numbers manually increases the likelihood of input errors.",
                  solution:
                    "ISBN barcode scanning functionality integrated into the mobile application via native camera access.",
                },
                {
                  challenge:
                    "Encouraging repeat purchases requires an organized promotional mechanism.",
                  solution:
                    "An automated purchase-threshold coupon generation system introduced.",
                },
                {
                  challenge:
                    "Manual coupon validation can lead to fraud or duplication.",
                  solution:
                    "A QR-based scanning feature created that validates authenticity, eligibility, and usage status via API.",
                },
                {
                  challenge:
                    "Retrieving post-sale invoices days after purchase is difficult without an organized history.",
                  solution:
                    "All transactions are stored centrally in the database allowing rapid search and re-printing.",
                },
              ].map((cs, i) => (
                <div
                  key={i}
                  className="p-8 border border-gray-100 bg-[#FAFAF9] group hover:bg-white hover:border-gray-300 transition-colors custom-notch-tl-br flex flex-col justify-between"
                >
                  <h5 className="text-xs font-bold uppercase tracking-widest text-black mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                    <span>
                      Issue {i + 1}
                    </span>
                    <span className="text-[#f5ad76] font-mono">0{i + 1}</span>
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
            subtitle="Analysis & Outcome"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-black">
              API-Driven, Decoupled Architecture
            </h3>
            <p className="text-xl text-gray-600 font-light mb-16 leading-relaxed">
              To ensure scalability and maintainability, the system was designed
              using a decoupled architecture. This separation allowed
              independent development, simplified debugging, and future
              extensibility (e.g., adding reporting dashboards, multi-branch
              sync, or ERP integrations).
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {[
                {
                  title: "Mobile-First Operational Design",
                  desc: "Instead of adapting a desktop-based system to mobile, the application was architected around real-world retail workflows—fast scanning, minimal input, and quick checkout execution. The entire billing cycle occurs frictionlessly from a handheld device.",
                },
                {
                  title: "Performance Optimization",
                  desc: "Retail environments demand speed. The strategy minimized interaction steps via multi-parameter search, ISBN scanning, and auto-calculated billing logic. Reducing taps to ensure rapid checkout during peak hours.",
                },
                {
                  title: "Centralized Integrity",
                  desc: "A centralized database maintains strict consistency between inventory records, transaction lifecycles, and staff login logs. Sensitive operations process server-side to prevent manipulation.",
                },
                {
                  title: "Strategic Outcome",
                  desc: "The application successfully transforms traditional bookstore billing into a streamlined digital process while laying a strong technical foundation for future growth and scale.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 custom-notch-tl-br hover:shadow-sm transition-shadow flex flex-col justify-between">
                  <h4 className="text-xl font-medium mb-4 text-black">
                    {item.title}
                  </h4>
                  <p className={`text-base leading-relaxed ${item.title === "Strategic Outcome" ? "text-black font-medium" : "text-gray-600 font-light"}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
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
