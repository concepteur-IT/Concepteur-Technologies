"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Square } from "lucide-react";
import Navbar from "@/components/layout-components/Navbar";

export default function SuprokashCaseStudy() {
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
      <header className="px-6 py-8 md:py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-black pb-12">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none mb-6">
              Suprokash.
            </h1>
            <p className="text-2xl md:text-4xl text-gray-500 font-light tracking-tight max-w-2xl leading-tight mb-12">
              Modernizing retail bookstore operations through a mobile-first
              billing ecosystem.
            </p>

            {/* Developer Avatars */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
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
                    <div className="w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center text-xs font-mono font-semibold text-black hover:bg-black hover:text-white transition-colors shadow-sm">
                      {member.init}
                    </div>

                    {/* Custom Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-black text-white text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl pointer-events-none flex flex-col items-center">
                      <span className="font-semibold font-sans tracking-wide">
                        {member.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-0.5">
                        {member.role}
                      </span>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Tech Stack Metadata Box */}
          <div className="shrink-0 flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-gray-500 border border-black/10 p-6">
            <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
              <span>Platform</span>
              <span className="text-black text-right">Mobile App</span>
            </div>
            <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
              <span>Frontend</span>
              <span className="text-black text-right">React Native</span>
            </div>
            <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
              <span>Backend</span>
              <span className="text-black text-right">Codeigniter 4</span>
            </div>
            <div className="flex justify-between gap-12">
              <span>Database</span>
              <span className="text-black text-right">MySQL</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner (Black & White to Color on Hover) */}
      <section className="px-6 max-w-screen-2xl mx-auto mb-16">
        <div className="relative w-full h-[30vh] lg:h-[45vh] overflow-hidden bg-gray-100 group cursor-crosshair">
          <motion.div style={{ scale }} className="w-full h-full origin-bottom">
            <Image
              src="/case-studies/suprokash.png"
              alt="Suprokash App Banner"
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
      <main className="px-6 max-w-7xl mx-auto mb-20">
        {/* 01: Overview */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 border-t border-black pt-8">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest font-mono sticky top-32 flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full" /> 01 Overview
            </h2>
          </div>
          <div className="md:col-span-8 text-xl md:text-2xl font-serif leading-relaxed text-gray-800 space-y-8">
            <p>
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
            <div className="p-8 border border-black/10 bg-gray-50 text-lg mt-12 font-sans font-light">
              <h3 className="font-semibold text-black uppercase tracking-widest text-xs mb-4">
                Architecture Approach
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <ArrowUpRight className="w-5 h-5 shrink-0" /> The frontend is
                  developed using React Native, providing a responsive and
                  cross-platform mobile interface tailored for ease of use in a
                  fast-paced retail environment.
                </li>
                <li className="flex gap-4">
                  <ArrowUpRight className="w-5 h-5 shrink-0" /> The backend is
                  built with CodeIgniter 4, implementing RESTful APIs to handle
                  authentication, billing logic, inventory management, and
                  transaction persistence.
                </li>
                <li className="flex gap-4">
                  <ArrowUpRight className="w-5 h-5 shrink-0" /> A centralized
                  database maintains books, pricing, stock quantities, and
                  invoice history, ensuring data integrity and traceability.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 02: Key Features */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 border-t border-black pt-8">
          <div className="md:col-span-4 hidden md:block">
            <h2 className="text-sm font-semibold uppercase tracking-widest font-mono sticky top-32 flex items-center gap-3">
              <span className="w-2 h-2 border border-black" /> 02 Features
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-4xl md:text-6xl font-serif tracking-tight mb-16 leading-none">
              A frictionless retail environment.
            </h3>

            <div className="space-y-12">
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
                  className="group border-b border-black/10 pb-8 hover:border-black transition-colors duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                    <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors shrink-0 pt-1">
                      0{i + 1}
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
          </div>
        </div>

        {/* 03: Challenges & Solutions */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 border-t border-black pt-8">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest font-mono sticky top-32 flex items-center gap-3">
              <span className="w-2 h-2 border border-black rotate-45" /> 03
              Challenges
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-8">
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
                <div key={i} className="p-8 border border-black/10 bg-white">
                  <h5 className="text-xs font-semibold uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                    <Square className="w-3 h-3" /> Issue Matrix
                  </h5>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <span className="text-xs font-mono text-gray-400 w-12 shrink-0 pt-1">
                        ERR
                      </span>
                      <p className="text-black font-medium">{cs.challenge}</p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs font-mono text-gray-400 w-12 shrink-0 pt-1">
                        FIX
                      </span>
                      <p className="text-gray-600 font-light">{cs.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 04: Strategy & Outcome */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 border-t border-black pt-8">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest font-mono sticky top-32 flex items-center gap-3">
              <span className="w-2 h-2 bg-black rotate-45" /> 04 Strategy
            </h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">
              API-Driven, Decoupled Architecture
            </h3>
            <p className="text-xl text-gray-600 font-light mb-16 leading-loose">
              To ensure scalability and maintainability, the system was designed
              using a decoupled architecture. This separation allowed
              independent development, simplified debugging, and future
              extensibility (e.g., adding reporting dashboards, multi-branch
              sync, or ERP integrations).
            </p>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Mobile-First Operational Design
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Instead of adapting a desktop-based system to mobile, the
                  application was architected around real-world retail
                  workflows—fast scanning, minimal input, and quick checkout
                  execution. The entire billing cycle occurs frictionlessly from
                  a handheld device.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Performance Optimization
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  Retail environments demand speed. The strategy minimized
                  interaction steps via multi-parameter search, ISBN scanning,
                  and auto-calculated billing logic. Reducing taps to ensure
                  rapid checkout during peak hours.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Centralized Integrity
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  A centralized database maintains strict consistency between
                  inventory records, transaction lifecycles, and staff login
                  logs. Sensitive operations process server-side to prevent
                  manipulation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-black pb-4">
                  Strategic Outcome
                </h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed text-black font-medium">
                  The application successfully transforms traditional bookstore
                  billing into a streamlined digital process while laying a
                  strong technical foundation for future growth and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Next Case Study Footer */}
      <footer className="border-t border-black bg-black text-white relative overflow-hidden">
        <Link
          href="/case-studies"
          className="block relative z-10 p-8 md:p-16 group"
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
