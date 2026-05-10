"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/teamData";

interface ProfileHeroProps {
  member: TeamMember;
}

export default function ProfileHero({ member }: ProfileHeroProps) {
  return (
    <section className="w-full bg-[#fcfcfc] pt-32 pb-20 md:pt-40 md:pb-32 border-b border-gray-200">
      <div className="w-full px-5 md:px-[10%] xl:px-[15%]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          {/* Left: Image with Architectural Offset Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md lg:w-1/2 shrink-0 group"
          >
            {/* Architectural Offset Border */}
            <div className="absolute inset-0 translate-x-3 md:translate-x-5 translate-y-3 md:translate-y-5 border border-gray-300 custom-notch-tl-br transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:border-gray-400" />

            {/* Image Container */}
            <div className="relative aspect-[4/5] w-full custom-notch-tl-br overflow-hidden bg-white z-10 border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top origin-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                  <span className="text-4xl md:text-6xl font-mono font-bold text-gray-300">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: Bio and Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center lg:pt-10 w-full"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">
              {member.experienceYears
                ? `${member.experienceYears} Years Experience`
                : "Team Member"}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-4">
              {member.name}
            </h1>

            <div className="h-[1px] w-16 bg-gray-300 mb-6" />

            <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-8">
              {member.role}
            </h2>

            {member.bio && (
              <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-10 max-w-2xl">
                {member.bio}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
