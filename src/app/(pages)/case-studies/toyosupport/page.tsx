import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { teamData } from "@/data/teamData";
import Navbar from "@/components/layout-components/Navbar";

const baseStudy =
  caseStudies.find((c) => c.slug === "toyosupport") || caseStudies[0];

const study = {
  ...baseStudy,
  title: "Toyotires.ca",
  tag: "Enterprise Platform",
  shortDesc:
    "Digital Transformation for Toyo Tires. Empowering Dealers Through a Centralized Digital Ecosystem",
};

const projectTeam = [
  teamData.find((t) => t.initials === "PD" && t.name.includes("Provat")),
  teamData.find((t) => t.initials === "AS"),
  teamData.find((t) => t.initials === "PD" && t.name.includes("Proparna")),
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

      <section className="mt-8 mb-32">
        <div className="w-full aspect-video md:aspect-[21/9] lg:aspect-[3/1] relative bg-gray-100 shadow-sm border-y border-gray-200 overflow-hidden group">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            priority
            quality={100}
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-4 space-y-16">
          <div className="sticky top-32 space-y-12">
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

            <div className="space-y-6 pb-12 border-b border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {study?.stack?.split(", ").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

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

                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl border border-gray-700 pointer-events-none flex flex-col items-center">
                      <span className="font-semibold">{member.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium tracking-wide mt-0.5">
                        {member.role}
                      </span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <article className="prose prose-lg prose-gray max-w-none">
            <div className="mb-24">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 border-b border-gray-100 pb-4">
                What We Set Out to Achieve
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {study.challenge?.map((goal, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-xs font-bold text-gray-300 mt-1">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-gray-600 leading-relaxed font-light text-lg m-0">
                      {goal.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-24 p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-indigo-500 mb-3">
                Multisite Architecture
              </h3>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6 mt-0">
                Seamless Multisite Experience
              </h2>
              <p className="text-gray-600 leading-relaxed font-light text-xl mb-8">
                We engineered a unified architectural hub that elegantly
                controls three distinct platforms under one synchronized
                authentication and data model.
              </p>
              <div className="space-y-4 font-medium text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />{" "}
                  Training Hub
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" /> Promo
                  Materials Catalog
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-300" />{" "}
                  Showroom POS Site
                </div>
              </div>
            </div>

            <div className="mb-24">
              {study.solution && (
                <div className="space-y-16">
                  {study.solution.map((sol, index) => (
                    <div
                      key={index}
                      className="grid md:grid-cols-12 gap-8 md:gap-12 items-start border-b border-gray-50 pb-16 last:border-0 last:pb-0"
                    >
                      <div className="md:col-span-5">
                        <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-400 mb-2">
                          {sol.label}
                        </h4>
                        <h3 className="text-2xl font-semibold text-gray-900 m-0 leading-tight">
                          {sol.title}
                        </h3>
                      </div>
                      <div className="md:col-span-7 pt-1 md:pt-0">
                        <ul className="list-none space-y-4 m-0 p-0">
                          {sol.points.map((point, i) => (
                            <li
                              key={i}
                              className="flex gap-4 text-gray-600 font-light text-lg"
                            >
                              <span className="text-indigo-500 mt-1.5 shrink-0 opacity-50">
                                ✦
                              </span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10 border-b border-gray-100 pb-4">
                What I Built
              </h2>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                {study.features?.map((feat, i) => (
                  <div key={i} className="group">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {feat?.title}
                    </h4>
                    <p className="text-md text-gray-500 font-light m-0 leading-relaxed">
                      {feat?.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

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
