"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/timelineData";

export default function OurJourney() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">
            Our Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-black">
            The Road to Concepteur.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed pt-2">
            A relentless pursuit of engineering excellence, from a small remote
            team to an international hybrid powerhouse.
          </p>
        </div>

        {/* Timeline Grid - Alternating Left/Right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-0 items-stretch">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isGoal = "isGoal" in item && item.isGoal;

            return (
              <div key={item.year} className="contents">
                {/* Left Column */}
                <div className={`flex ${isLeft ? "justify-end" : ""} py-6`}>
                  {isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: "easeOut",
                      }}
                      className="max-w-sm w-full text-right pr-8 md:pr-12"
                    >
                      <div className="flex items-center justify-end gap-3 mb-2">
                        {isGoal && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-gray-100 px-3 py-1 rounded-full">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                            </span>
                            In Progress
                          </span>
                        )}
                        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold">
                          {item.title}
                        </p>
                      </div>
                      <p className="text-[14px] leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Center Spine */}
                <div className="hidden md:flex flex-col items-center relative">
                  {/* Continuous Line */}
                  <div
                    className={`w-px flex-1 ${isGoal ? "border-l border-dashed border-gray-300" : "bg-gray-200"}`}
                  />
                  {/* Year Badge */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                    className={`w-16 h-16 rounded-md flex items-center justify-center z-10 my-2 shrink-0 relative ${
                      isGoal ? "bg-white border-2 border-black" : "bg-black"
                    }`}
                  >
                    {isGoal && (
                      <span className="absolute inset-0 rounded-md border-2 border-black animate-ping opacity-20" />
                    )}
                    <span
                      className={`text-[13px] font-bold tracking-wider ${isGoal ? "text-black" : "text-white"}`}
                    >
                      {item.year}
                    </span>
                  </motion.div>
                  <div
                    className={`w-px flex-1 ${isGoal ? "border-l border-dashed border-gray-300" : "bg-gray-200"}`}
                  />
                </div>

                {/* Right Column */}
                <div className={`flex ${!isLeft ? "justify-start" : ""} py-6`}>
                  {!isLeft ? (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1,
                        ease: "easeOut",
                      }}
                      className="max-w-sm w-full text-left pl-8 md:pl-12"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold">
                          {item.title}
                        </p>
                        {isGoal && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-gray-100 px-3 py-1 rounded-full">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                            </span>
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-[14px] leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Mobile Only: stacked layout */}
                <div className="md:hidden flex items-start gap-5 py-4">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-md flex items-center justify-center shrink-0 relative ${isGoal ? "bg-white border-2 border-black" : "bg-black"}`}
                  >
                    {isGoal && (
                      <span className="absolute inset-0 rounded-md border-2 border-black animate-ping opacity-20" />
                    )}
                    <span
                      className={`text-xs font-bold tracking-wider ${isGoal ? "text-black" : "text-white"}`}
                    >
                      {item.year}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-bold">
                        {item.title}
                      </p>
                      {isGoal && (
                        <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] font-bold text-black bg-gray-100 px-2 py-0.5 rounded-full">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black" />
                          </span>
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-[14px] leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
