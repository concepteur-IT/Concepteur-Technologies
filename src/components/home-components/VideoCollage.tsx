"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { videoData } from "@/data/videoData";
import VimeoModal from "../ui-components/VimeoModal";

const VideoCollage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="w-full px-5 md:px-[15%]">
        {/* Top: label + heading + description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-16 mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase shrink-0 md:w-[220px] md:pt-1"
          >
            — Culture
          </motion.p>

          <div className="flex-1 space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.1] tracking-tight"
            >
              Hear from our team.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm text-gray-500 leading-relaxed max-w-2xl"
            >
              Discover how our engineers, designers, and architects approach complex problem-solving and innovation at Concepteur.
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-gray-200 mb-12 md:mb-16"
        />

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {videoData.map((video, index) => {
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-full overflow-hidden bg-gray-100 rounded-xl group cursor-pointer aspect-video"
                onClick={() => setActiveVideo(video.vimeoId)}
              >
                {/* Thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-white/30 transition-all duration-500 shadow-xl">
                    <svg className="w-5 h-5 md:w-6 md:h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase truncate">
                      {video.role}
                    </span>
                    <span className="w-6 h-[1px] bg-white/30 shrink-0"></span>
                  </div>
                  <h3 className="font-medium text-white leading-tight text-base md:text-lg">
                    "{video.title}"
                  </h3>
                  <p className="text-white/80 text-xs mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 truncate">
                    — {video.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <VimeoModal 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        vimeoId={activeVideo} 
      />
    </section>
  );
};

export default VideoCollage;
