"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function AIIntelligentAutomation({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
  const modules = [
    { x: 300, y: 85, label: "DATA" },
    { x: 470, y: 165, label: "CRM" },
    { x: 470, y: 285, label: "API" },
    { x: 300, y: 365, label: "ANALYTICS" },
    { x: 130, y: 285, label: "DOCS" },
    { x: 130, y: 165, label: "WORKFLOW" },
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
            {/* CONNECTION LINES */}

            {modules.map((module, i) => (
              <line
                key={`line-${i}`}
                x1="300"
                y1="225"
                x2={module.x}
                y2={module.y}
                stroke="#d1d5db"
                strokeWidth="1.5"
              />
            ))}

            {/* ANIMATED DATA SIGNALS */}

            {modules.map((module, i) => (
              <motion.circle
                key={`signal-${i}`}
                cx={module.x}
                cy={module.y}
                r="4"
                fill="#111827"
                animate={{
                  cx: [module.x, 300],
                  cy: [module.y, 225],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* OUTER MODULES */}

            {modules.map((module, i) => (
              <g key={i}>
                <rect
                  x={module.x - 42}
                  y={module.y - 22}
                  width="84"
                  height="44"
                  rx="8"
                  fill="white"
                  stroke="#111827"
                  strokeWidth="1"
                />

                <text
                  x={module.x}
                  y={module.y + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#111827"
                  letterSpacing="1"
                >
                  {module.label}
                </text>

                <motion.circle
                  cx={module.x + 55}
                  cy={module.y}
                  r="3"
                  fill="#111827"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              </g>
            ))}

            {/* AI HUB */}

            <circle
              cx="300"
              cy="225"
              r="78"
              fill="white"
              stroke="#111827"
              strokeWidth="1.5"
            />

            <circle
              cx="300"
              cy="225"
              r="32"
              fill="#111827"
            />

            <text
              x="300"
              y="234"
              textAnchor="middle"
              fontSize="35"
              fontWeight="700"
              fill="white"
            >
              AI
            </text>

            {/* AI NETWORK */}

            <circle cx="275" cy="200" r="4" fill="#111827" />
            <circle cx="325" cy="200" r="4" fill="#111827" />
            <circle cx="275" cy="250" r="4" fill="#111827" />
            <circle cx="325" cy="250" r="4" fill="#111827" />



 

            {/* CENTRAL PULSE */}

            <motion.circle
              cx="300"
              cy="225"
              r="78"
              fill="none"
              stroke="#111827"
              strokeWidth="1"
              animate={{
                opacity: [0.6, 0],
                scale: [1, 1.12],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </svg>
        </div>
      }
    />
  );
}