"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function NextGenWebPlatforms({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
  const modules = [
    { x: 140, y: 250, label: "API" },
    { x: 240, y: 250, label: "CMS" },
    { x: 360, y: 250, label: "SECURITY" },
    { x: 460, y: 250, label: "PERFORMANCE" },
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

            {[...Array(10)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={60 + i * 48}
                y1="60"
                x2={60 + i * 48}
                y2="390"
                stroke="#f3f4f6"
              />
            ))}

            {[...Array(7)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="60"
                y1={70 + i * 45}
                x2="540"
                y2={70 + i * 45}
                stroke="#f3f4f6"
              />
            ))}

            {/* USER EXPERIENCE */}

            <rect
              x="190"
              y="50"
              width="220"
              height="50"
              rx="12"
              fill="white"
              stroke="#111827"
            />

            <text
              x="300"
              y="81"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="#111827"
              letterSpacing="2"
            >
              USER EXPERIENCE
            </text>

            {/* Connection */}

            <line
              x1="300"
              y1="100"
              x2="300"
              y2="145"
              stroke="#d1d5db"
              strokeWidth="2"
            />

            {/* Platform Core */}

            <rect
              x="180"
              y="145"
              width="240"
              height="70"
              rx="16"
              fill="#111827"
            />

            <text
              x="300"
              y="188"
              textAnchor="middle"
              fontSize="18"
              fontWeight="700"
              fill="white"
              letterSpacing="1"
            >
              WEB PLATFORM
            </text>

            {/* Connections to Modules */}

            {modules.map((module, i) => (
              <line
                key={`line-${i}`}
                x1="300"
                y1="215"
                x2={module.x}
                y2={module.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            ))}

            {/* Animated Signals */}

            {modules.map((module, i) => (
              <motion.circle
                key={`signal-${i}`}
                cx="300"
                cy="215"
                r="4"
                fill="#111827"
                animate={{
                  cx: [300, module.x],
                  cy: [215, module.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Platform Modules */}

            {modules.map((module, i) => (
              <g key={i}>
                <rect
                  x={module.x - 45}
                  y={module.y - 20}
                  width="90"
                  height="40"
                  rx="10"
                  fill="white"
                  stroke="#111827"
                />

                <text
                  x={module.x}
                  y={module.y + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#111827"
                >
                  {module.label}
                </text>
              </g>
            ))}

            {/* Scalability Layer */}

            <line
              x1="300"
              y1="290"
              x2="300"
              y2="335"
              stroke="#d1d5db"
              strokeWidth="2"
            />

            <rect
              x="200"
              y="335"
              width="200"
              height="46"
              rx="12"
              fill="white"
              stroke="#111827"
            />

            <text
              x="300"
              y="364"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#111827"
              letterSpacing="2"
            >
              SCALABILITY
            </text>

            {/* Pulse Ring */}

            <motion.rect
              x="180"
              y="145"
              width="240"
              height="70"
              rx="16"
              fill="none"
              stroke="#111827"
              animate={{
                opacity: [0.5, 0],
                scale: [1, 1.03],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Caption */}

            <text
              x="300"
              y="415"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              letterSpacing="2"
            >
              MODERN • SECURE • SCALABLE • HIGH PERFORMANCE
            </text>
          </svg>
        </div>
      }
    />
  );
}