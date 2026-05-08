"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamData as team } from "@/data/teamData";
import GalleryModal, { TooltipData } from "../team-components/GalleryModal";

const galleryConfigList = [
  {
    id: "T1",
    src: "/team/T1.PNG",
    tooltips: [
      { x: 18, y: 65, name: "Developer 1", slug: "mandira-chakraborty" },
      { x: 38, y: 65, name: "Developer 2", slug: "provat-das" },
      { x: 65, y: 65, name: "Developer 3", slug: "proparna-das" },
      { x: 85, y: 65, name: "Developer 4", slug: "ankur-saha" },
    ]
  },
  {
    id: "T2",
    src: "/team/T2.PNG",
    tooltips: [
      { x: 30, y: 65, name: "Developer 5", slug: "spandan-saha" },
      { x: 70, y: 65, name: "Developer 6", slug: "arpan-das" },
    ]
  },
  {
    id: "T3",
    src: "/team/T3.PNG",
    tooltips: [
      { x: 30, y: 65, name: "Developer 7", slug: "souvik-roy" },
      { x: 70, y: 65, name: "Developer 8", slug: "subhankar-acharjee" },
    ]
  },
  {
    id: "T4",
    src: "/team/T4.PNG",
    tooltips: [
      { x: 30, y: 65, name: "Developer 9", slug: "antar-roy" },
      { x: 70, y: 65, name: "Developer 10", slug: "rohit-saha" },
    ]
  }
];

const TeamAbout = () => {
  const [selectedGallery, setSelectedGallery] = useState<{src: string, tooltips: TooltipData[]} | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-24 md:py-32 border-t border-gray-200 overflow-hidden">
      <div className="w-full px-5 md:px-[10%] xl:px-[15%]">
        {/* Intro */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.25em] text-gray-400 font-bold mb-5"
          >
            — Meet the Team
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 tracking-tight"
            >
              The minds behind the architecture.
            </motion.h2>
            
            {/* Carousel Navigation Desktop */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center gap-4"
            >
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width Swipeable Carousel */}
      <div className="w-full mb-16 md:mb-32 relative">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Spacer for left padding equivalent to container */}
          <div className="w-[5vw] md:w-[10%] xl:w-[15%] shrink-0" />

          {galleryConfigList.map((item, idx) => (
            <div 
              key={item.id} 
              className="w-[85vw] sm:w-[60vw] md:w-[45%] lg:w-[35%] shrink-0 snap-center pr-4 md:pr-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative w-full group cursor-pointer"
                onClick={() => setSelectedGallery(item)}
              >
                {/* Architectural Offset Border */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 border border-gray-300 custom-notch-tl-br transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-gray-400" />
                
                <div className="relative aspect-video w-full custom-notch-tl-br overflow-hidden bg-white z-10 border border-gray-100 shadow-sm">
                  <Image
                    src={item.src}
                    alt="Team gallery"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top origin-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Bottom Fade - Reduced Intensity */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent z-20 pointer-events-none" />

                  {/* Preview Overlay */}
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm text-white px-5 py-3 rounded-full text-sm font-bold uppercase tracking-widest translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 z-30">
                    Preview 
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
          {/* Spacer for right padding */}
          <div className="w-[5vw] md:w-[10%] xl:w-[15%] shrink-0" />
        </div>
      </div>

      <div className="w-full px-5 md:px-[10%] xl:px-[15%]">
        {/* Dense Architecture Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 border-t border-gray-200 pt-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group"
            >
              <Link
                href={`/who-we-are/${member.slug}`}
                className="flex items-center p-3 sm:p-4 bg-white border border-gray-100 hover:border-gray-300 hover:shadow-sm transition-all duration-300 rounded-lg cursor-pointer h-full"
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
                  <h4 className="text-sm md:text-base font-semibold text-gray-900 truncate group-hover:text-black transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 mt-1 truncate">
                    {member.role}
                  </p>
                  {member.role !== "Director" && member.experienceYears && (
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {member.experienceYears} Experience
                    </p>
                  )}
                </div>

                {/* Navigation Arrow */}
                <div className="ml-3 shrink-0 text-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-black transition-all duration-300">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <GalleryModal 
        isOpen={!!selectedGallery} 
        onClose={() => setSelectedGallery(null)}
        imageSrc={selectedGallery?.src || null}
        tooltips={selectedGallery?.tooltips || []}
      />
    </section>
  );
};

export default TeamAbout;
