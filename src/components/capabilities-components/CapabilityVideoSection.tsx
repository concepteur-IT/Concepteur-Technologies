"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CapabilityVideoSectionProps {
  videoUrl?: string;
  vimeoId?: string;
  title: string;
  image?: string;
}

const CustomVideoPlayer: React.FC<{ src: string; title: string }> = ({
  src,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const newProgress = parseFloat(e.target.value);
    const newTime = (newProgress / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(newProgress);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-black flex flex-col justify-end overflow-hidden group select-none">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        playsInline
        className="w-full h-full object-contain cursor-pointer"
        onClick={togglePlay}
        title={title}
      />

      {/* ONLY THE TIME ADJUSTMENT BAR AT THE BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center z-10">
        <input
          type="range"
          min="0"
          max="100"
          step="0.05"
          value={progress}
          onChange={handleSeek}
          className="w-full h-1.5 bg-white/30 hover:h-2.5 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none transition-all duration-200"
          aria-label="Time adjustment bar"
        />
      </div>
    </div>
  );
};

const CapabilityVideoSection: React.FC<CapabilityVideoSectionProps> = ({
  videoUrl,
  vimeoId,
  title,
  image,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const displayImage = image || "/services/ai-automation.png";

  return (
    <>
      {/* BANNER SECTION - SEAMLESS BLEND WITH UNIQUE IMAGE AND NO CARD/DIV BOUNDARY */}
      <div className="w-full px-5 md:px-[10%] lg:px-[15%] mb-20 lg:mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] group select-none"
          // onClick={() => setIsModalOpen(true)}
        >
          {/* Edge Blending Overlays - Seamless gradient into #fcfcfc background */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-[#fcfcfc] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[#fcfcfc] to-transparent" />
            <div className="absolute top-0 left-0 bottom-0 w-[25%] bg-gradient-to-r from-[#fcfcfc] to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 w-[25%] bg-gradient-to-l from-[#fcfcfc] to-transparent" />
          </div>

          {/* Banner Image Container - UNIQUE CAPABILITY IMAGE VISIBLE ON PAGE LOAD */}
          <div className="relative w-full h-full bg-[#fcfcfc]">
            <Image
              src={displayImage}
              alt={title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Play Icon Overlay visible on the image */}
          {/* <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-black/70 group-hover:border-white pointer-events-auto">
              <svg
                className="w-7 h-7 sm:w-9 sm:h-9 translate-x-[2px] fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M8 6v12l10-6z" />
              </svg>
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* VIDEO PLAYER MODAL POPUP */}
      {/* <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 z-[101] cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                duration: 0.4,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-6xl aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {videoUrl ? (
                <CustomVideoPlayer src={videoUrl} title={title} />
              ) : vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={`${title} Video Player`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Video preview unavailable
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default CapabilityVideoSection;
