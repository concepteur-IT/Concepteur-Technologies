"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { teamData } from "@/data/teamData";

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white font-sans pt-32">
      {/* Architectural Hero Section */}
      <section className="w-full px-5 md:px-[15%] pb-20 md:pb-32 border-b border-gray-100">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-black" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
              Our People
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black leading-none mb-8">
            The minds behind the edge.
          </h1>
          <p className="text-xl md:text-3xl text-gray-500 font-light tracking-tight max-w-2xl leading-relaxed">
            A collective of engineers, designers, and strategists committed to
            building resilient digital infrastructure and premium user
            experiences.
          </p>
        </div>
      </section>

      {/* Team Directory (Bento Grid) */}
      <section className="w-full px-5 md:px-[15%] py-24 md:py-32 bg-white">
        <div className="flex items-end justify-between mb-16 border-b border-black pb-6">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-none">
            Meet the Team.
          </h2>
          <span className="text-xs font-mono font-bold text-black border border-black px-4 py-2 uppercase tracking-widest shrink-0">
            {teamData.length} Members
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {teamData.map((member) => (
            <Link
              key={member.slug}
              href={`/who-we-are/${member.slug}`}
              className="group flex flex-col relative"
            >
              {/* Image / Avatar Container */}
              <div className="aspect-[3/4] w-full bg-gray-50 relative overflow-hidden border border-gray-200 flex items-center justify-center mb-6">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale transition-transform duration-1000 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#FAFAF9] group-hover:bg-gray-100 transition-colors duration-500">
                    <span className="text-5xl font-light text-gray-300 group-hover:text-black transition-colors duration-500">
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Hover Overlay Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg z-10">
                  <ArrowUpRight className="w-5 h-5 text-black group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>

              {/* Info Container */}
              <div className="flex flex-col border-l-2 border-black pl-4">
                <h3 className="text-xl md:text-2xl font-medium text-black mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest line-clamp-2">
                  {member.role}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Life at Concepteur (Culture Section) */}
      <section className="w-full px-5 md:px-[15%] py-24 md:py-40 border-y border-white/10 bg-black text-white">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-white" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                  Culture
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
                Life at Concepteur
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                We believe that great software is built by healthy, focused, and
                collaborative teams. Our environment is designed to foster
                innovation without the burnout.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Engineering Excellence",
                desc: "We don't just write code; we architect solutions. Regular knowledge sharing and code reviews are part of our DNA.",
              },
              {
                title: "Radical Candor",
                desc: "Open, honest feedback over office politics. We challenge ideas, not people, to find the best technical path forward.",
              },
              {
                title: "Deep Work",
                desc: "We respect focus time. Fewer meetings, more building. We optimize our days for long stretches of uninterrupted flow.",
              },
              {
                title: "Continuous Growth",
                desc: "Technology moves fast. We provide resources, time, and mentorship to ensure our team is always at the bleeding edge.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white transition-colors duration-300 custom-notch-tl-br"
              >
                <h3 className="text-xl font-medium text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-gray-400 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full px-5 md:px-[15%] py-24 md:py-32 bg-white text-black">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-6">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Moments from our office, offsites, and team celebrations. The
              people making the logic work.
            </p>
          </div>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-4 h-[600px]">
          {/* Placeholder blocks for gallery. The user can replace the bg colors with next/image later */}
          <div className="col-span-2 row-span-2 bg-gray-50 border border-gray-200 custom-notch-tl-br relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light tracking-widest uppercase text-sm">
              Gallery Image 1 (Large)
            </div>
            {/* Example of how an image would be placed: */}
            {/* <Image src="/gallery/1.jpg" alt="Gallery 1" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" /> */}
          </div>
          <div className="col-span-1 row-span-1 bg-gray-50 border border-gray-200 custom-notch-tl-br relative overflow-hidden flex items-center justify-center text-gray-400 font-light tracking-widest uppercase text-[10px]">
            Image 2
          </div>
          <div className="col-span-1 row-span-1 bg-gray-50 border border-gray-200 custom-notch-tl-br relative overflow-hidden flex items-center justify-center text-gray-400 font-light tracking-widest uppercase text-[10px]">
            Image 3
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 bg-gray-50 border border-gray-200 custom-notch-tl-br relative overflow-hidden flex items-center justify-center text-gray-400 font-light tracking-widest uppercase text-[10px]">
            Image 4
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 bg-gray-50 border border-gray-200 custom-notch-tl-br relative overflow-hidden flex items-center justify-center text-gray-400 font-light tracking-widest uppercase text-[10px]">
            Image 5
          </div>
        </div>
      </section>

      {/* Immersive Footer CTA */}
    </div>
  );
}
