"use client";

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
            15+ Teams
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {teamData.map((member) => (
            <div key={member.slug} className="group flex flex-col relative">
              {/* Info Container */}
              <div className="flex flex-col border-l-2 border-black pl-4">
                <h3 className="text-xl md:text-2xl font-medium text-black mb-1 group-hover:translate-x-1 transition-transform duration-300">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest line-clamp-2">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
          {/* "More Members" Card */}
          <div className="group flex flex-col relative justify-center">
            <div className="flex flex-col border-l-2 border-dashed border-gray-300 pl-4 py-1">
              <h3 className="text-xl md:text-2xl font-medium text-gray-400 mb-1">
                + Many More
              </h3>
              <p className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
                Our growing team
              </p>
            </div>
          </div>
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
    </div>
  );
}
