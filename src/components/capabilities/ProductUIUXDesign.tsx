"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function ProductUIUXDesign({
  service,
  index,
}: {
  service: ServiceData;
  index: number;
}) {
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
            {/* Background */}

            <rect
              x="40"
              y="50"
              width="520"
              height="350"
              rx="24"
              fill="#fafafa"
              stroke="#e5e7eb"
            />

            {/* Alignment Grid */}

            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={i}
                x1={90 + i * 52}
                y1="80"
                x2={90 + i * 52}
                y2="370"
                stroke="#f3f4f6"
              />
            ))}

            {/* Research Card */}

            <g>
              <rect
                x="70"
                y="125"
                width="120"
                height="160"
                rx="16"
                fill="white"
                stroke="#111827"
              />

              <text
                x="130"
                y="150"
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill="#111827"
                letterSpacing="2"
              >
                RESEARCH
              </text>

              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={i}
                  x="90"
                  y={175 + i * 22}
                  width="80"
                  height="8"
                  rx="4"
                  fill="#e5e7eb"
                />
              ))}

              <motion.circle
                cx="130"
                cy="255"
                r="18"
                fill="#111827"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />
            </g>

            {/* Prototype Connection */}

            <motion.path
              d="M190 205 C225 205 235 205 260 205"
              fill="none"
              stroke="#111827"
              strokeDasharray="6 6"
              strokeWidth="1.5"
              animate={{
                pathLength: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            {/* Design System Panel */}

            <g>
              <rect
                x="240"
                y="105"
                width="120"
                height="200"
                rx="16"
                fill="white"
                stroke="#111827"
              />

              <text
                x="300"
                y="130"
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill="#111827"
                letterSpacing="2"
              >
                DESIGN SYSTEM
              </text>

              <rect
                x="265"
                y="155"
                width="70"
                height="16"
                rx="8"
                fill="#111827"
              />

              {[0, 1, 2].map((i) => (
                <motion.rect
                  key={i}
                  x="265"
                  y={190 + i * 28}
                  width={i === 0 ? 60 : i === 1 ? 45 : 75}
                  height="12"
                  rx="6"
                  fill="#d1d5db"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Selection State */}

              <motion.rect
                x="255"
                y="145"
                width="90"
                height="36"
                fill="none"
                stroke="#111827"
                strokeDasharray="4 4"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </g>

            {/* Prototype Connection */}

            <motion.path
              d="M360 205 C395 205 410 205 430 205"
              fill="none"
              stroke="#111827"
              strokeDasharray="6 6"
              strokeWidth="1.5"
              animate={{
                pathLength: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
              }}
            />

            {/* Final Product UI */}

            <g>
              <rect
                x="410"
                y="95"
                width="120"
                height="220"
                rx="18"
                fill="white"
                stroke="#111827"
              />

              <motion.rect
                x="430"
                y="120"
                width="80"
                height="20"
                rx="10"
                fill="#111827"
                animate={{
                  width: [80, 95, 80],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <rect
                x="430"
                y="165"
                width="80"
                height="70"
                rx="12"
                fill="#f3f4f6"
              />

              <rect
                x="430"
                y="255"
                width="60"
                height="10"
                rx="5"
                fill="#d1d5db"
              />

              <motion.rect
                x="430"
                y="285"
                width="70"
                height="24"
                rx="12"
                fill="#111827"
                animate={{
                  opacity: [1, 0.65, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <text
                x="470"
                y="340"
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill="#111827"
                letterSpacing="2"
              >
                FINAL UI
              </text>
            </g>

            {/* Floating Cursor */}

            <motion.g
              animate={{
                x: [0, 8, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <path
                d="M500 180 L518 220 L508 216 L502 230 Z"
                fill="#111827"
              />
            </motion.g>

            {/* Footer */}

            <text
              x="300"
              y="380"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              letterSpacing="2"
            >
              RESEARCH • WIREFRAMES • PROTOTYPES • UI/UX
            </text>
          </svg>
        </div>
      }
    />
  );
}