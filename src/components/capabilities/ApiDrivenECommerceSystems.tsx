"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function ApiDrivenECommerceSystems({
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

            {/* Storefront */}

            <rect
              x="70"
              y="105"
              width="180"
              height="180"
              rx="18"
              fill="white"
              stroke="#111827"
            />

            <rect
              x="95"
              y="130"
              width="130"
              height="22"
              rx="6"
              fill="#111827"
            />

            <rect
              x="95"
              y="175"
              width="50"
              height="50"
              rx="8"
              fill="#f3f4f6"
            />

            <rect
              x="170"
              y="175"
              width="50"
              height="50"
              rx="8"
              fill="#f3f4f6"
            />

            <text
              x="160"
              y="315"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              fill="#111827"
              letterSpacing="2"
            >
              STOREFRONT
            </text>

            {/* API Core */}

            <motion.rect
              x="270"
              y="170"
              width="70"
              height="70"
              rx="16"
              fill="#111827"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />

            <text
              x="305"
              y="198"
              textAnchor="middle"
              fontSize="10"
              fill="white"
              fontWeight="700"
            >
              API
            </text>

            <text
              x="305"
              y="215"
              textAnchor="middle"
              fontSize="10"
              fill="white"
              fontWeight="700"
            >
              CORE
            </text>

            {/* Data Sync */}

            <line
              x1="250"
              y1="205"
              x2="270"
              y2="205"
              stroke="#111827"
              strokeWidth="1.5"
            />

            <line
              x1="340"
              y1="205"
              x2="390"
              y2="205"
              stroke="#111827"
              strokeWidth="1.5"
            />

            <motion.rect
              x="252"
              y="201"
              width="8"
              height="8"
              rx="4"
              fill="#111827"
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <motion.rect
              x="360"
              y="201"
              width="8"
              height="8"
              rx="4"
              fill="#111827"
              animate={{
                x: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            {/* Commerce Services */}

            {[
              { y: 110, label: "PRODUCTS" },
              { y: 170, label: "PAYMENTS" },
              { y: 230, label: "ORDERS" },
              { y: 290, label: "INVENTORY" },
            ].map((item, i) => (
              <g key={i}>
                <motion.rect
                  x="390"
                  y={item.y}
                  width="130"
                  height="42"
                  rx="10"
                  fill="white"
                  stroke="#111827"
                  animate={{
                    x: [390, 394, 390],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.25,
                    repeat: Infinity,
                  }}
                />

                <text
                  x="455"
                  y={item.y + 26}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#111827"
                >
                  {item.label}
                </text>
              </g>
            ))}

            {/* Footer */}

            <text
              x="300"
              y="375"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              letterSpacing="2"
            >
              HEADLESS • API-FIRST • COMMERCE
            </text>
          </svg>
        </div>
      }
    />
  );
}