"use client";

import React from "react";
import { motion } from "framer-motion";
import ExploreOurWorkBtn from "../ui-components/buttons/ExploreOurWorkBtn";
import ContactUsBtn from "../ui-components/buttons/ContactUsBtn";

const HeroAbout = () => {
  return (
    <section className="w-full bg-white pt-[110px] pb-24 sm:pt-[132px] md:pt-[140px] overflow-hidden">
      <div className="w-full px-5 md:px-[15%] xl:px-[15%]">
        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-400 font-medium tracking-[0.25em] uppercase mb-5"
        >
          — COMPANY
        </motion.p>

        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] items-start mb-24">
          <motion.div
            className="lg:max-w-[760px]"
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
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="relative overflow-hidden rounded-[44px] border border-black/10 bg-[#fafafa] px-6 py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-black/5 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -left-8 top-10 h-28 w-28 rounded-full bg-black/5 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 bottom-12 h-28 w-28 rounded-full bg-black/5 blur-2xl" />

          {/* SVG Connection Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            {/* Left to Center connection */}
            <motion.path
              d="M 100 150 Q 250 80 400 150"
              stroke="url(#gradientLeft)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Right to Center connection */}
            <motion.path
              d="M 900 150 Q 750 80 600 150"
              stroke="url(#gradientRight)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Animated dots on connections */}
            <motion.circle
              cx="250"
              cy="115"
              r="3"
              fill="rgba(0,0,0,0.3)"
              animate={{ 
                cx: [100, 400],
                cy: [150, 150]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx="750"
              cy="115"
              r="3"
              fill="rgba(0,0,0,0.3)"
              animate={{ 
                cx: [900, 600],
                cy: [150, 150]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <defs>
              <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
              </linearGradient>
              <linearGradient id="gradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] items-center relative z-10">
            {/* LEFT CARD - FLOATING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[320px]"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-8 shadow-[0_28px_80px_rgba(0,0,0,0.06)]"
              >
                <div className="absolute -inset-4 rounded-[34px] border border-black/5" />
                <div className="relative z-10 flex items-center justify-between mb-10">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-black/35">
                    Analysis
                  </p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
                  >
                    <div className="h-2 w-2 rounded-full bg-black" />
                  </motion.div>
                </div>
                <h3 className="text-[44px] leading-[1.02] tracking-[-0.06em] text-black mb-5">
                  System
                  <br />
                  Intelligence
                </h3>
                <p className="text-sm leading-relaxed text-black/55">
                  Deep architectural planning before a single line of code is
                  written.
                </p>
              </motion.div>
            </motion.div>

            {/* CENTER CIRCLE - ENHANCED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex h-[260px] w-[260px] items-center justify-center"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-black/10"
              />

              {/* Middle pulsing ring */}
              <motion.div
                animate={{ scale: [0.85, 0.95, 0.85], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-6 rounded-full border border-black/20"
              />

              {/* Inner core */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-24 w-24 items-center justify-center rounded-full bg-black"
              >
                <div className="h-2 w-2 rounded-full bg-white" />
              </motion.div>

              {/* Expanding ripple 1 */}
              <motion.div
                animate={{ scale: [1, 1.24], opacity: [0.16, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-black/10"
              />

              {/* Expanding ripple 2 */}
              <motion.div
                animate={{ scale: [1, 1.4], opacity: [0.1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                className="absolute inset-0 rounded-full border border-black/10"
              />

              {/* Connection pulse indicator left */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 h-4 w-4 rounded-full bg-black/20"
              />

              {/* Connection pulse indicator right */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-8 h-4 w-4 rounded-full bg-black/20"
              />
            </motion.div>

            {/* RIGHT CARD - FLOATING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[320px]"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="relative overflow-hidden rounded-[32px] bg-black p-8 shadow-[0_28px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
                <div className="relative z-10 flex items-center justify-between mb-10 text-white/70">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-white/35">
                    COMPANY
                  </p>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
                  >
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </motion.div>
                </div>
                <h3 className="relative z-10 text-[44px] leading-[1.02] tracking-[-0.06em] text-white">
                  Precision.
                  <br />
                  Performance.
                  <br />
                  <span className="text-white/40">Scale.</span>
                </h3>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;