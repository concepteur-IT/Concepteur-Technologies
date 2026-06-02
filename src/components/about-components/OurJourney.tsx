"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/timelineData";

export default function OurJourney() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="w-full px-5 md:px-[15%]">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
          >
            — Our Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight mb-8"
          >
            The road to{" "}
            <span className="text-gray-400">engineering scale.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed"
          >
            A relentless pursuit of technical excellence, evolving from a small
            functional unit into an international hybrid powerhouse.
          </motion.p>
        </div>

        {/* Strict Architected Table Grid */}
        <div className="w-full flex flex-col border-t border-gray-900">
          {[...timelineData]
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((item, index) => {
              const isGoal = "isGoal" in item && item.isGoal;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative border-b border-gray-200"
                >
                  {/* Desktop Data Row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-8 lg:py-12 items-start transition-colors duration-500 group-hover:bg-[#fcfcfc]">
                    {/* Year Segment */}
                    <div className="md:col-span-2 flex flex-col md:pl-4">
                      <span
                        className={`text-4xl md:text-5xl font-light tracking-tighter ${isGoal ? "text-gray-400" : "text-black"}`}
                      >
                        {item.year}
                      </span>
                      {isGoal && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mt-2">
                          ( In Progress )
                        </span>
                      )}
                    </div>

                    {/* Title Segment */}
                    <div className="md:col-span-4">
                      <h3 className="text-xl md:text-2xl font-normal text-gray-900 tracking-tight leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description Segment */}
                    <div className="md:col-span-6 relative">
                      <p className="text-base text-gray-500 font-light leading-relaxed pr-8">
                        {item.description}
                      </p>

                      {/* Interactive Marker line */}
                      <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-200 hidden md:block">
                        <div className="w-full h-0 bg-black group-hover:h-full transition-all duration-700 ease-[0.22,1,0.36,1]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
