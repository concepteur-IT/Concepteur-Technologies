import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { teamData } from "@/data/teamData";
import Navbar from "@/components/layout-components/Navbar";

// Fetch the specific data for Toyotires
const study = caseStudies.find((c) => c.slug === "toyotires") || caseStudies[1];

// Selecting a subset of team members for this specific project
const projectTeam = [
  teamData.find((t) => t.initials === "PD" && t.name.includes("Provat")), // Provat Das
  teamData.find((t) => t.initials === "MC"), // Mandira Chakraborty
  teamData.find((t) => t.initials === "AD"), // Arpan Das
  teamData.find((t) => t.initials === "AS"), // Ankur Saha
].filter(Boolean) as typeof teamData;

export default function ToyotiresCaseStudy() {
  return (
    <main className="bg-white min-h-screen text-gray-900 pb-32">
      <Navbar />

      {/* Back Navigation */}
      <div className="pt-22 pb-4  border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40 lg:relative lg:top-auto lg:z-auto">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <div className="text-sm font-semibold tracking-widest uppercase text-gray-300">
            {study.client}
          </div>
        </div>
      </div>

      {/* Hero Section Designed specifically for Typrography */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">
              {study.tag}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-gray-900 leading-[1.05]">
            {study.title.replace(".ca", "")} <br />
            <span className="text-gray-400 font-light tracking-tighter">
              Digital Evolution.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light mt-8">
            {study.shortDesc}
          </p>

          <div className="flex items-center gap-4 pt-8">
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-400">
              Role:
            </span>
            <span className="text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
              {study.role}
            </span>
          </div>
        </div>
      </section>

      {/* Massive Edge-to-Edge Hero Image */}
      <section className="mt-8 mb-32">
        <div className="w-full aspect-video md:aspect-[21/9] lg:aspect-[3/1] relative bg-gray-100 shadow-sm border-y border-gray-200">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </section>

      {/* Editorial Content Layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Sticky Meta Data & Project Info */}
        <div className="lg:col-span-4 space-y-16">
          <div className="sticky top-32 space-y-12">
            {/* Stats */}
            <div className="space-y-8 pb-12 border-b border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Impact & Results
              </h3>
              <div>
                <div className="text-4xl font-semibold text-gray-900 mb-1">
                  {study.results?.growth}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-medium">
                  Growth Target
                </div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-gray-900 mb-1">
                  {study.results?.users}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-medium">
                  Deployment
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6 pb-12 border-b border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.stack.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team Attribution */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Engineering Team
              </h3>
              <div className="flex items-center -space-x-3">
                {projectTeam.map((member, i) => (
                  <div key={i} className="relative group z-10 hover:z-30">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold tracking-wider rounded-full border-2 border-white shadow-sm ring-1 ring-gray-100 hover:-translate-y-1 transition-all cursor-default">
                      {member.initials}
                    </div>

                    {/* Custom Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none flex flex-col items-center">
                      <span className="font-semibold">{member.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium tracking-wide mt-0.5">
                        {member.role}
                      </span>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                ))}
                {/* Plus more indicator if needed */}
                {teamData.length > projectTeam.length && (
                  <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold border-2 border-white ring-1 ring-gray-100 z-0">
                    +{teamData.length - projectTeam.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Reading Material */}
        <div className="lg:col-span-8">
          <article className="prose prose-lg prose-gray max-w-none">
            {/* The Challenge Section */}
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-xl mb-12">
              Enterprise modernization at scale is a complex undertaking. The
              existing architecture was tightly coupled with legacy PHP
              monoliths (CodeIgniter and Magento), resulting in sluggish
              performance, fragmented user data, and zero real-time
              capabilities. The primary hurdle was orchestrating a massive,
              zero-downtime migration of hundreds of thousands of user records,
              products, and historic order data into a unified, headless
              architecture.
            </p>

            {/* Architectural Details Section */}
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mt-20 mb-6">
              Architectural Overhaul
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-xl mb-12">
              We completely re-platformed the system. By strangling the
              monolith, we transitioned the core logic to a highly scalable
              Node.js microservices architecture. The frontend was entirely
              decoupled and rebuilt using React and Next.js for server-side
              rendering, plummeting Initial First Byte (IFB) times by over 80%.
            </p>

            {study.solution && (
              <div className="my-16 space-y-10 pl-8 border-l-2 border-gray-100">
                {study.solution.map((sol, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {sol.title}
                    </h4>
                    <ul className="list-disc text-gray-600 font-light space-y-2 ml-4 marker:text-gray-300">
                      {sol.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Final Resolution */}
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mt-20 mb-6">
              The Deployment
            </h2>
            <p className="text-gray-600 leading-relaxed font-light text-xl mb-16">
              Deployed across highly available AWS Kubernetes clusters, the
              application now supports multi-regional scaling instantly. A
              unified reward system was synchronized securely across bilingual
              (English/French) interfaces, allowing instant training redemptions
              natively through WooCommerce endpoints, without touching the
              legacy codebase.
            </p>
          </article>

          {/* Call to Action Footer mapped inline */}
          <div className="mt-32 pt-16 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Build a robust architecture.
              </h3>
              <p className="text-gray-500 font-light">
                Speak with the engineering team behind this project.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shrink-0"
            >
              Contact Engineering <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
