"use client";

import React from "react";
import { motion } from "framer-motion";
import ExploreOurWorkBtn from "../ui-components/buttons/ExploreOurWorkBtn";
import ContactUsBtn from "../ui-components/buttons/ContactUsBtn";

const HeroAbout = () => {
  return (
    <section className="w-full bg-white pt-0 pb-24 overflow-hidden">
      <div className="w-full px-5 md:px-[15%]">
        {/* VIDEO BANNER SECTION - SEAMLESS BLEND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] mb-20"
        >
          {/* Edge Blending Overlays */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-white to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-white to-transparent" />
            <div className="absolute top-0 left-0 bottom-0 w-[25%] bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 right-0 bottom-0 w-[25%] bg-gradient-to-l from-white to-transparent" />
          </div>

          {/* Video Container */}
          <div className="relative w-full h-full bg-white">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/ojgswn0o/video/upload/v1785525231/Initial_Scene_-_2026-07-31_202608010041_dvl7jx.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </motion.div>

        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 font-medium tracking-[0.25em] uppercase mb-5"
        >
          — ABOUT
        </motion.p>

        {/* TOP SECTION - TITLE + DESCRIPTION */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1.2fr] items-start">
          <motion.div
            className="lg:max-w-[700px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-normal text-black leading-[0.92] tracking-[-0.05em]">
              Transforming Ideas Into <br />
              <span className="text-black/20">Digital Reality.</span>
            </h1>
          </motion.div>

          <motion.div
            className="lg:max-w-[380px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col gap-6 text-black/65 font-light leading-relaxed">
              <p className="text-base sm:text-lg">
                We are a forward-thinking technology company dedicated to
                crafting innovative solutions that empower businesses to thrive
                in the digital age.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <ExploreOurWorkBtn />
                <ContactUsBtn />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
