import React from "react";
import { teamData as team } from "@/data/teamData";

const TeamAbout = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 space-y-5 md:space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            The Minds Behind <span className="font-semibold">the Mission.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A cohesive group of architects, engineers, and designers dedicated
            to building robust, elegant, and highly scalable solutions for
            modern businesses.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex items-center gap-5 border-t border-gray-100 pt-6"
            >
              {/* Black Square Initials */}
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-semibold text-[13px] tracking-widest shrink-0 rounded-none">
                {member.initials}
              </div>

              <div className="flex-1">
                <h4 className="text-black font-semibold text-[17px] tracking-tight transition-colors">
                  {member.name}
                </h4>
                <p className="text-[13px] text-gray-500 mt-0.5 font-medium">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAbout;
