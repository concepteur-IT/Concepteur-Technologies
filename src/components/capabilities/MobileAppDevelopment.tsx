"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function MobileAppDevelopment({
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
            {/* Background Grid */}

            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={70 + i * 58}
                y1="40"
                x2={70 + i * 58}
                y2="410"
                stroke="#f3f4f6"
              />
            ))}

            {Array.from({ length: 7 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="50"
                y1={60 + i * 50}
                x2="550"
                y2={60 + i * 50}
                stroke="#f3f4f6"
              />
            ))}

            {/* IOS Badge */}

            <rect
              x="85"
              y="185"
              width="90"
              height="42"
              rx="10"
              fill="white"
              stroke="#111827"
            />

            <text
              x="130"
              y="211"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#111827"
              letterSpacing="1"
            >
              IOS
            </text>

            {/* Android Badge */}

            <rect
              x="425"
              y="185"
              width="90"
              height="42"
              rx="10"
              fill="white"
              stroke="#111827"
            />

            <text
              x="470"
              y="211"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#111827"
              letterSpacing="1"
            >
              ANDROID
            </text>

            {/* Phone Shadow */}

            <rect
              x="215"
              y="45"
              width="170"
              height="340"
              rx="32"
              fill="#111827"
              opacity="0.05"
            />

            {/* Phone */}

            <rect
              x="225"
              y="55"
              width="150"
              height="320"
              rx="28"
              fill="white"
              stroke="#111827"
              strokeWidth="1.5"
            />

            {/* Notch */}

            <rect
              x="275"
              y="70"
              width="50"
              height="8"
              rx="4"
              fill="#111827"
            />

            {/* Connections from Platforms */}

            <line
              x1="175"
              y1="205"
              x2="225"
              y2="205"
              stroke="#d1d5db"
              strokeWidth="1.5"
            />

            <line
              x1="375"
              y1="205"
              x2="425"
              y2="205"
              stroke="#d1d5db"
              strokeWidth="1.5"
            />

            {/* Development Pipeline */}

            <rect
              x="245"
              y="105"
              width="110"
              height="38"
              rx="10"
              fill="white"
              stroke="#111827"
            />

            <text
              x="300"
              y="129"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#111827"
            >
              DESIGN
            </text>

            <rect
              x="245"
              y="175"
              width="110"
              height="38"
              rx="10"
              fill="#111827"
            />

            <text
              x="300"
              y="199"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="white"
            >
              DEVELOP
            </text>

            <rect
              x="245"
              y="245"
              width="110"
              height="38"
              rx="10"
              fill="white"
              stroke="#111827"
            />

            <text
              x="300"
              y="269"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#111827"
            >
              TEST
            </text>

            <rect
              x="245"
              y="315"
              width="110"
              height="38"
              rx="10"
              fill="white"
              stroke="#111827"
            />

            <text
              x="300"
              y="339"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#111827"
            >
              LAUNCH
            </text>

            {/* Flow Lines */}

            <line
              x1="300"
              y1="143"
              x2="300"
              y2="175"
              stroke="#d1d5db"
              strokeWidth="1.5"
            />

            <line
              x1="300"
              y1="213"
              x2="300"
              y2="245"
              stroke="#d1d5db"
              strokeWidth="1.5"
            />

            <line
              x1="300"
              y1="283"
              x2="300"
              y2="315"
              stroke="#d1d5db"
              strokeWidth="1.5"
            />

            {/* Animated Progress Dot */}

            <motion.circle
              cx="300"
              cy="124"
              r="4"
              fill="#111827"
              animate={{
                cy: [124, 334, 124],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Home Indicator */}

            <circle
              cx="300"
              cy="362"
              r="6"
              fill="#111827"
            />

            {/* Pulse Around Phone */}

            <motion.rect
              x="225"
              y="55"
              width="150"
              height="320"
              rx="28"
              fill="none"
              stroke="#111827"
              strokeWidth="1"
              animate={{
                opacity: [0.4, 0],
                scale: [1, 1.03],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />

            {/* Footer */}

            <text
              x="300"
              y="420"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              letterSpacing="2"
            >
              IDEA • DESIGN • BUILD • DEPLOY
            </text>
          </svg>
        </div>
      }
    />
  );
}