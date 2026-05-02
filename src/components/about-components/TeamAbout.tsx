"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamData as team } from "@/data/teamData";

const TeamAbout = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-24 md:py-32 border-t border-gray-200">
      <div className="w-full px-5 md:px-[10%] xl:px-[15%]">
        
        {/* Intro */}
        <div className="max-w-4xl mb-12 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.25em] text-gray-400 font-bold mb-5"
          >
            — Meet the Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight"
          >
            The minds behind the architecture.
          </motion.h2>
        </div>

        {/* Team Photo Collage Gallery */}
        <div className="w-full mb-16 md:mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-[350px] md:h-[500px]">
             {/* Big image */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="col-span-2 row-span-2 relative custom-notch-tl-br overflow-hidden bg-gray-100 group"
             >
                <Image src="/home/bg-frontend.png" alt="Team at work" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
             </motion.div>
             {/* Top right */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="col-span-1 row-span-1 relative custom-notch-tl-br overflow-hidden bg-gray-100 group"
             >
                <Image src="/home/cap-mobile.png" alt="Office collaboration" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
             </motion.div>
             {/* Top far right */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="col-span-1 row-span-1 relative custom-notch-tl-br overflow-hidden bg-gray-100 group"
             >
                <Image src="/home/cap-ux.png" alt="Design planning" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
             </motion.div>
             {/* Bottom right horizontal */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="col-span-2 row-span-1 relative custom-notch-tl-br overflow-hidden bg-gray-100 group"
             >
                <Image src="/home/cap-ai.png" alt="Engineering team" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
             </motion.div>
          </div>
        </div>

        {/* Dense Architecture Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 border-t border-gray-200 pt-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group flex items-center p-3 sm:p-4 bg-white border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-300 rounded-lg cursor-default"
            >
              {/* Small Fixed Square Graphic */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 mr-4 group-hover:bg-black group-hover:border-black transition-colors duration-500 rounded-md overflow-hidden">
                <span className="text-xs md:text-sm font-mono font-bold text-gray-400 group-hover:text-white transition-colors duration-500">
                  {member.initials}
                </span>
                <div className="absolute w-full h-[1px] bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>

              {/* Stacked Text */}
              <div className="flex flex-col flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-semibold text-gray-900 truncate">
                  {member.name}
                </h4>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 mt-1 truncate">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamAbout;
