"use client";

import { motion } from "framer-motion";
import {
  Telescope,
  Microscope,
  PencilRuler,
  TerminalSquare,
  TestTubeDiagonal,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "DISCOVER",
    desc: "We understand your business, goals, and challenges.",
    icon: Telescope,
  },
  {
    id: "02",
    title: "ANALYZE",
    desc: "We study requirements and analyze the best approach.",
    icon: Microscope,
  },
  {
    id: "03",
    title: "PLAN & DESIGN",
    desc: "We plan the solution architecture and create intuitive designs.",
    icon: PencilRuler,
  },
  {
    id: "04",
    title: "DEVELOP",
    desc: "Our experts build clean, secure, and scalable solutions.",
    icon: TerminalSquare,
  },
  {
    id: "05",
    title: "TEST & QA",
    desc: "We ensure quality, performance, and security through rigorous testing.",
    icon: TestTubeDiagonal,
  },
  {
    id: "06",
    title: "DEPLOY",
    desc: "We deploy the solution seamlessly to your environment.",
    icon: Rocket,
  },
  {
    id: "07",
    title: "SUPPORT & GROW",
    desc: "We provide ongoing support and help your business grow.",
    icon: HeartHandshake,
  },
];

export default function ProcessFlow() {
  // Generate synced animation for each step circle
  const getCircleAnimation = (index: number) => {
    const peak = index / 6; // 0 to 1
    const width = 0.08; // width of the pulse effect
    
    const map = new Map<number, { s: number; b: string }>();
    
    // Base state
    map.set(0, { s: 1, b: "#0f172a" });
    
    if (peak - width > 0) {
      map.set(peak - width, { s: 1, b: "#0f172a" });
    }
    
    // Peak active state - Black background, no glow
    map.set(peak, { s: 1.15, b: "#000000" });
    
    if (peak + width < 1) {
      map.set(peak + width, { s: 1, b: "#0f172a" });
    }
    
    // End base state
    map.set(1, { s: 1, b: "#0f172a" });

    const sortedTimes = Array.from(map.keys()).sort((a, b) => a - b);
    
    return {
      scale: sortedTimes.map((t) => map.get(t)!.s),
      backgroundColor: sortedTimes.map((t) => map.get(t)!.b),
      transition: {
        duration: 6, // Slower flow
        repeat: Infinity,
        times: sortedTimes,
        ease: "easeInOut" as const,
        delay: 2.5, // Sync with wire animation start
      },
    };
  };

  return (
    <div className="w-full px-5 md:px-[10%] lg:px-[15%] pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
        {/* Fixed min-width container ensures exact alignment */}
        <div className="min-w-[1000px] w-full flex justify-between items-start relative pt-12">
          
          {/* Base and Electric wire container */}
          <div className="absolute top-[140px] left-[60px] right-[60px] h-[60px] z-0 pointer-events-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 880 60"
              preserveAspectRatio="none"
            >
              {/* Base background dotted wire */}
              <motion.path
                d="M 0 30 Q 73.33 0 146.67 30 T 293.33 30 T 440.00 30 T 586.67 30 T 733.33 30 T 880.00 30"
                fill="none"
                stroke="#cbd5e1" /* slate-300 */
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1 8"
                vectorEffect="nonScalingStroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Simple solid electric current wire */}
              <motion.path
                d="M 0 30 Q 73.33 0 146.67 30 T 293.33 30 T 440.00 30 T 586.67 30 T 733.33 30 T 880.00 30"
                fill="none"
                stroke="#000000" /* Black electric flow */
                strokeWidth="2.5"
                pathLength="100"
                strokeDasharray="15 100" // 15% pulse length, 100% gap
                vectorEffect="nonScalingStroke"
                initial={{ opacity: 0 }}
                animate={{ 
                  strokeDashoffset: [7.5, -92.5],
                  opacity: 1
                }}
                transition={{ 
                  strokeDashoffset: {
                    duration: 6, // Slower flow
                    repeat: Infinity, 
                    ease: "linear",
                    delay: 2.5
                  },
                  opacity: {
                    delay: 2.5,
                    duration: 0.3
                  }
                }}
              />
            </svg>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const anim = getCircleAnimation(index);
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center relative z-10 w-[120px]"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 mb-2 flex items-center justify-center text-gray-900 transition-transform duration-300 hover:-translate-y-1">
                  <Icon strokeWidth={1.2} className="w-11 h-11" />
                </div>
                
                {/* Small vertical dotted line connecting to the circle */}
                <div className="w-[2px] h-6 border-l-[2px] border-dotted border-gray-300 mb-2"></div>

                {/* Step Circle with layered entrance + infinite pulse */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                  className="relative z-10 mb-5"
                >
                  <motion.div
                    animate={{
                      scale: anim.scale,
                      backgroundColor: anim.backgroundColor,
                    }}
                    transition={anim.transition}
                    className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold ring-4 ring-white"
                  >
                    {step.id}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="text-[11px] sm:text-xs font-bold tracking-wider text-gray-900 mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed max-w-[140px]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
