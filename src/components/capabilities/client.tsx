"use client";

import { servicesData } from "@/data/servicesData";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/[\d.]+/);
  const number = numericMatch ? parseFloat(numericMatch[0]) : 0;

  const prefixMatch = value.match(/^[^\d]+/);
  const prefix = prefixMatch ? prefixMatch[0] : "";

  const suffixMatch = value.match(/[^\d.]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(number);
    }
  }, [isInView, number, spring]);

  const display = useTransform(spring, (current) => {
    if (value.includes(".")) {
      const decimals = value.split(".")[1]?.length || 0;
      return current.toFixed(decimals);
    }
    return Math.floor(current).toString();
  });

  return (
    <span ref={ref} className="inline-flex items-center">
      {prefix}
      {numericMatch ? <motion.span>{display}</motion.span> : value}
      {suffix}
    </span>
  );
}

/* =====================================================
   LIVE WIREFRAME SYSTEM
===================================================== */

function WireframeAnimation({
  index,
  large = false,
}: {
  index: number;
  large?: boolean;
}) {
  const smallVariants = [
    <LiveNetwork key="1" />,
    <EnergyCore key="2" />,
    <DataFlow key="3" />,
    <PulseGrid key="4" />,
    <SignalStreams key="5" />,
    <NeuralLines key="6" />,
  ];

  const largeVariants = [
    <MegaNetwork key="7" />,
    <DigitalRain key="8" />,
    <CinematicScanner key="9" />,
  ];

  return large
    ? largeVariants[index % largeVariants.length]
    : smallVariants[index % smallVariants.length];
}

/* =====================================================
   SMALL WIREFRAMES
===================================================== */

function LiveNetwork() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 120 - 60],
            y: [0, Math.random() * 120 - 60],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-black/70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
          }}
          className="absolute h-px bg-black"
          style={{
            width: `${40 + Math.random() * 100}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
        />
      ))}
    </div>
  );
}

function EnergyCore() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden flex items-center justify-center">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-black/10"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
          }}
        >
          <div className="absolute left-1/2 -top-1 w-2 h-2 bg-black rounded-full" />
        </motion.div>
      ))}

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="w-5 h-5 bg-black rounded-full"
      />
    </div>
  );
}

function DataFlow() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: ["-10%", "110%"],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-px bg-black/30"
          style={{
            top: `${i * 6}%`,
            width: "40%",
          }}
        >
          <div className="absolute right-0 -top-[3px] w-2 h-2 rounded-full bg-black" />
        </motion.div>
      ))}
    </div>
  );
}

function PulseGrid() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(9)].map((_, y) =>
        [...Array(9)].map((_, x) => (
          <motion.div
            key={`${x}-${y}`}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2,
              delay: (x + y) * 0.12,
              repeat: Infinity,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-black"
            style={{
              left: `${10 + x * 10}%`,
              top: `${10 + y * 10}%`,
            }}
          />
        )),
      )}
    </div>
  );
}

function SignalStreams() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["-20%", "120%"],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-px bg-black/20"
          style={{
            left: `${i * 5}%`,
            height: "120px",
          }}
        />
      ))}
    </div>
  );
}

function NeuralLines() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
          }}
          className="absolute border-t border-black/20"
          style={{
            width: `${60 + i * 10}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
        />
      ))}
    </div>
  );
}

/* =====================================================
   LARGE WIREFRAMES
===================================================== */

function MegaNetwork() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.02, 0.12, 0.02],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-px bg-black"
          style={{
            top: `${i * 2}%`,
            width: "120%",
            left: "-10%",
          }}
        />
      ))}

      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.2,
            repeat: Infinity,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-black"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function DigitalRain() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["-20%", "120%"],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-px bg-black/20"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${40 + Math.random() * 120}px`,
          }}
        />
      ))}
    </div>
  );
}

function CinematicScanner() {
  return (
    <div className="absolute inset-0 bg-[#f7f7f5] overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.04, 0.2, 0.04],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
          }}
          className="absolute h-px bg-black"
          style={{
            top: `${i * 5}%`,
            width: "100%",
          }}
        />
      ))}

      <motion.div
        animate={{
          x: ["-20%", "120%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 bottom-0 w-40 bg-gradient-to-r from-transparent via-black/10 to-transparent"
      />
    </div>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function CapabilitiesClient() {
  return (
    <main className="min-h-screen bg-white pt-[60px]">
      <section className="w-full bg-white pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="w-full px-5 md:px-[15%] flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
          >
            — CAPABILITIES
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight">
                Engineering the <br className="hidden sm:block" />
                <span className="text-gray-400">Digital Future.</span>
              </h1>
            </motion.div>

            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-gray-500 font-light leading-relaxed h-full flex items-end">
                High-performance foundational systems engineered for scale,
                reliability, and precision.
              </p>
            </motion.div>
          </div>

<motion.div
  className="w-full aspect-[21/9] md:aspect-[3/1] relative overflow-hidden custom-notch-tl-br bg-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Ambient Glow */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="absolute w-[760px] h-[760px] rounded-full bg-[radial-gradient(circle,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.03)_30%,transparent_68%)] blur-[40px]" />
    <div className="absolute w-[980px] h-[980px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgb(255, 255, 255)_35%,transparent_72%)] blur-[120px]" />
    <div className="absolute left-[10%] top-[16%] w-36 h-36 rounded-full bg-black/5 blur-3xl" />
    <div className="absolute right-[14%] bottom-[18%] w-44 h-44 rounded-full bg-black/5 blur-3xl" />
  </div>

  {/* Vignette */}
<div className="absolute inset-0 pointer-events-none bg-white" />
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1400 500"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="signal" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9CA3AF" />
        <stop offset="42%" stopColor="#111827" />
        <stop offset="100%" stopColor="#D1D5DB" />
      </linearGradient>

      <linearGradient id="signalSoft" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E5E7EB" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>

      <filter id="softGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter
        id="cardShadow"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="10"
          floodOpacity="0.08"
        />
      </filter>
    </defs>





    {/* Decorative Orbits */}
    <circle
      cx="690"
      cy="250"
      r="165"
      fill="none"
      stroke="#E5E7EB"
      strokeWidth="1"
      strokeDasharray="8 10"
      opacity="0.8"
    />
    <motion.circle
      cx="690"
      cy="250"
      r="205"
      fill="none"
      stroke="url(#signalSoft)"
      strokeWidth="1.2"
      strokeDasharray="2 14"
      opacity="0.6"
      animate={{ rotate: 360 }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "690px 250px" }}
    />

    {/* Main Path */}
    <path
      d="M120 365 C220 365 270 365 340 325 S500 255 590 255 S760 255 840 205 S1000 125 1120 125 S1270 125 1340 150"
      fill="none"
      stroke="#E5E7EB"
      strokeWidth="10"
      strokeLinecap="round"
      opacity="0.7"
    />
    <motion.path
      d="M120 365 C220 365 270 365 340 325 S500 255 590 255 S760 255 840 205 S1000 125 1120 125 S1270 125 1340 150"
      fill="none"
      stroke="url(#signal)"
      strokeWidth="3.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Moving Signal */}
    <motion.circle
      r="8"
      fill="#111827"
      filter="url(#softGlow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        offsetPath:
          'path("M120 365 C220 365 270 365 340 325 S500 255 590 255 S760 255 840 205 S1000 125 1120 125 S1270 125 1340 150")',
      }}
    />

    {/* Nodes */}
    {[
      [100, 365],
      [470, 272],
      [850, 200],
      
      [1160, 126],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="18" fill="#111827" opacity="0.05" />
        <circle cx={x} cy={y} r="7" fill="#111827" />
        <motion.circle
          cx={x}
          cy={y}
          r="22"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="1"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.12, 0.7],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      </g>
    ))}

    {/* Data Streams */}
    {[
      [365, 220],
      [560, 165],
      [795, 235],
      [985, 155],
    ].map(([x, y], i) => (
      <motion.g
        key={`stream-${i}`}
        animate={{ opacity: [0.25, 0.9, 0.25], y: [0, -6, 0] }}
        transition={{
          duration: 3.5 + i * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <line
          x1={x - 34}
          y1={y}
          x2={x + 34}
          y2={y}
          stroke="#D1D5DB"
          strokeDasharray="6 8"
          strokeWidth="1"
        />
        <circle cx={x} cy={y} r="4.5" fill="#111827" />
      </motion.g>
    ))}
  </svg>

  {/* Floating Cards */}

  <motion.div
    className="absolute left-[13%] bottom-[22%]"
    animate={{ y: [0, -6, 0], rotate: [-0.5, 0.5, -0.5] }}
    transition={{
      duration: 4.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="bg-white/95 backdrop-blur-md border border-white/70 rounded-2xl px-5 py-3 shadow-[0_18px_40px_rgba(17,24,39,0.10)]">
      <p className="text-[11px] tracking-[0.2em] text-gray-700">
        FOUNDATION
      </p>
    </div>
  </motion.div>

  <motion.div
    className="absolute left-[38%] top-[47%]"
    animate={{ y: [0, -6, 0], rotate: [0.5, -0.5, 0.5] }}
    transition={{
      duration: 5,
      delay: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="bg-white/95 backdrop-blur-md border border-white/70 rounded-2xl px-5 py-3 shadow-[0_18px_40px_rgba(17,24,39,0.10)]">
      <p className="text-[11px] tracking-[0.2em] text-gray-700">
        ARCHITECTURE
      </p>
    </div>
  </motion.div>

  <motion.div
    className="absolute left-[62%] top-[30%]"
    animate={{ y: [0, -6, 0], rotate: [-0.5, 0.5, -0.5] }}
    transition={{
      duration: 4.6,
      delay: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="bg-white/95 backdrop-blur-md border border-white/70 rounded-2xl px-5 py-3 shadow-[0_18px_40px_rgba(17,24,39,0.10)]">
      <p className="text-[11px] tracking-[0.2em] text-gray-700">
        INTELLIGENCE
      </p>
    </div>
  </motion.div>

  <motion.div
    className="absolute right-[5%] top-[23%]"
    animate={{ y: [0, -6, 0], rotate: [0.5, -0.5, 0.5] }}
    transition={{
      duration: 5.2,
      delay: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="bg-gray-950 border border-gray-950 rounded-2xl px-5 py-3 shadow-[0_22px_48px_rgba(17,24,39,0.22)]">
      <p className="text-[11px] tracking-[0.15em] text-white">
        DIGITAL FUTURE
      </p>
    </div>
  </motion.div>

  <div className="absolute bottom-5 left-[10%] text-[11px] tracking-[0.25em] text-gray-500 uppercase">
    Engineering progress from systems to intelligence
  </div>
</motion.div>
        </div>
      </section>

    </main>
  );
}

