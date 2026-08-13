"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { videoData } from "@/data/videoData";
import VimeoModal from "../ui-components/VimeoModal";

const VideoCollage = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-24 border-t border-gray-100">
      <div className="w-full px-5 md:px-[10%]">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-6"
        >
          — Culture
        </motion.p>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Video */}
          {videoData[0] && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full lg:w-[55%] overflow-hidden rounded-2xl group aspect-video bg-gray-100 shrink-0"
              // onClick={() => setActiveVideo(videoData[0].vimeoId)}
            >
              {/* Thumbnail */}
              <Image
                src={videoData[0].thumbnail}
                alt={videoData[0].title}
                fill
                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Play Button */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 shadow-2xl">
                  <svg
                    className="w-6 h-6 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div> */}

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">
                  {videoData[0].role}
                </span>
              </div>
            </motion.div>
          )}

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center gap-8 lg:w-[45%]">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.1] tracking-tight"
            >
              Hear from our team.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-10 h-px bg-gray-300"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-500 leading-relaxed text-base"
            >
              Discover how our engineers, designers, and architects approach
              complex problem-solving and innovation at Concepteur.
            </motion.p>

            {videoData[0] && (
              <motion.blockquote
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="border-l-2 border-gray-900 pl-5"
              >
                <p className="text-gray-900 font-medium text-lg leading-snug">
                  &ldquo;{videoData[0].title}&rdquo;
                </p>
                <cite className="text-gray-400 text-sm mt-2 block not-italic">
                  — {videoData[0].name}
                </cite>
              </motion.blockquote>
            )}

            {/* {videoData[0] && (
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                onClick={() => setActiveVideo(videoData[0].vimeoId)}
                className="self-start flex items-center gap-3 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-gray-500 transition-colors">
                  <svg
                    className="w-4 h-4 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch the video
              </motion.button>
            )} */}
          </div>
        </div>
      </div>

      {/* <VimeoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        vimeoId={activeVideo}
      /> */}
    </section>
  );
};

export default VideoCollage;
