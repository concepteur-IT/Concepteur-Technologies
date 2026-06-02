"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ExploreOurWorkBtn from "../ui-components/buttons/ExploreOurWorkBtn";
import ContactUsBtn from "../ui-components/buttons/ContactUsBtn";

const HeroAbout = () => {
  return (
    <section className="w-full bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="w-full px-5 md:px-[15%] flex flex-col">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
        >
          — COMPANY
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight">
              Transforming Ideas Into <br className="hidden sm:block" />
              <span className="text-gray-400">Digital Reality.</span>
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-full flex flex-col justify-end gap-6 text-gray-500 font-light leading-relaxed">
              <p className="text-lg">
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

        {/* Unique Asymmetric Grid Banner for Company Page */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8"
        >
          {/* Main Large Graphic */}
          <div className="md:col-span-8 aspect-[16/9] md:aspect-auto md:h-[500px] bg-gray-100 relative custom-notch-tl-br overflow-hidden group">
            <Image
              src="/home/bg-frontend.png"
              fill
              className="object-cover transition-all duration-[1000ms] ease-[0.22,1,0.36,1] group-hover:scale-105"
              alt="Engineering Frontend Architecture"
              priority
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="w-2 h-2 bg-white rounded-none" />
              <span className="w-2 h-2 bg-white/50 rounded-none" />
            </div>
          </div>

          {/* Secondary Stacked Graphics */}
          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-8">
            <div className="w-full h-[240px] md:flex-1 bg-gray-100 relative custom-notch-tl-br overflow-hidden group flex flex-col justify-between p-6">
              <Image
                src="/home/cap-ai.png"
                fill
                className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-110"
                alt="AI Architecture"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500" />

              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">
                  Analysis
                </span>
              </div>
              <div className="relative z-10 w-full mt-auto">
                <h4 className="text-xl font-normal text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  System Intelligence
                </h4>
                <p className="text-sm font-light text-white/80 leading-relaxed max-w-[90%]">
                  Deep architectural planning before a single line of code is
                  written.
                </p>
              </div>
            </div>

            <div className="w-full h-[240px] md:flex-1 relative custom-notch-tl-br overflow-hidden flex flex-col justify-end p-8 group">
              <Image
                src="/home/cap-cloud.png"
                fill
                className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-110 z-0"
                alt="Cloud Infrastructure"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-0" />

              <div className="relative z-10 w-12 h-[1px] bg-white/60 mb-6 group-hover:w-full transition-all duration-700 ease-in-out" />
              <p className="relative z-10 text-white text-lg font-light leading-relaxed">
                Precision.
                <br />
                Performance.
                <br />
                <span className="font-semibold tracking-wide">Scale.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;
