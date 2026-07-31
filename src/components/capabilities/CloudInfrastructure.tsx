"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function CloudInfrastructure({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
  const nodes = [
    { x: 300, y: 85, label: "CDN" },
    { x: 450, y: 155, label: "SECURITY" },
    { x: 450, y: 295, label: "DEVOPS" },
    { x: 300, y: 365, label: "DATABASE" },
    { x: 150, y: 295, label: "MONITORING" },
    { x: 150, y: 155, label: "COMPUTE" },
  ];

  return (
    <CapabilitySectionBase
      service={service}
      index={index}
      image={
        <div className="block w-full lg:max-w-md aspect-[4/3] relative overflow-hidden custom-notch-tl-br mb-8 border border-gray-200 bg-white">
       <svg
  className="absolute inset-0 w-full h-full"
  viewBox="0 0 600 450"
  preserveAspectRatio="xMidYMid meet"
>
  {/* Background Grid */}

  {Array.from({ length: 10 }).map((_, i) => (
    <line
      key={`v-${i}`}
      x1={60 + i * 50}
      y1="40"
      x2={60 + i * 50}
      y2="410"
      stroke="#f8fafc"
    />
  ))}

  {Array.from({ length: 8 }).map((_, i) => (
    <line
      key={`h-${i}`}
      x1="40"
      y1={50 + i * 50}
      x2="560"
      y2={50 + i * 50}
      stroke="#f8fafc"
    />
  ))}

  {/* Outer Orbit */}

  <motion.circle
    cx="300"
    cy="225"
    r="145"
    fill="none"
    stroke="#d1d5db"
    strokeDasharray="10 10"
    animate={{ rotate: 360 }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      transformOrigin: "300px 225px",
    }}
  />

  {/* Inner Orbit */}

  <motion.circle
    cx="300"
    cy="225"
    r="105"
    fill="none"
    stroke="#e5e7eb"
    strokeDasharray="6 6"
    animate={{ rotate: -360 }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      transformOrigin: "300px 225px",
    }}
  />

  {/* Cloud Glow */}

  <motion.circle
    cx="300"
    cy="225"
    r="80"
    fill="#111827"
    opacity="0.05"
    animate={{
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
  />

  {/* Connectors */}

  {nodes.map((node, i) => {
    const dx = node.x - 300;
    const dy = node.y - 225;
    const length = Math.sqrt(dx * dx + dy * dy);

    const endX = node.x - (dx / length) * 32;
    const endY = node.y - (dy / length) * 32;

    return (
      <line
        key={`line-${i}`}
        x1="300"
        y1="225"
        x2={endX}
        y2={endY}
        stroke="#e5e7eb"
        strokeWidth="1"
      />
    );
  })}

  {/* Cloud */}

<g transform="translate(-30 15)">
  <path
    d="
      M245 215
      C245 180 275 170 295 185
      C310 155 355 155 375 190
      C410 180 435 205 430 235
      H245
      C225 235 220 220 245 215
    "
    fill="#111827"
  />

  <text
    x="330"
    y="215"
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize="12"
    fontWeight="700"
    fill="white"
    letterSpacing="2"
  >
    CLOUD
  </text>
</g>
  {/* Infrastructure Nodes */}

  {nodes.map((node, i) => (
    <g key={i}>
      <motion.circle
        cx={node.x}
        cy={node.y}
        r="32"
        fill="white"
        stroke="#111827"
        strokeWidth="1.5"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2 + i * 0.2,
          repeat: Infinity,
        }}
      />

      <text
        x={node.x}
        y={node.y + 4}
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill="#111827"
      >
        {node.label}
      </text>
    </g>
  ))}

  {/* Floating Particles */}

  {[1, 2, 3, 4, 5, 6].map((_, i) => (
    <motion.circle
      key={i}
      cx={300}
      cy={120 + i * 30}
      r="3"
      fill="#111827"
      animate={{
        x: [-120, 120, -120],
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 6 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* Footer */}

  <text
    x="300"
    y="420"
    textAnchor="middle"
    fontSize="11"
    fill="#6b7280"
    letterSpacing="2"
  >
    SCALABLE • RESILIENT • DISTRIBUTED
  </text>
</svg>
        </div>
      }
    />
  );
}