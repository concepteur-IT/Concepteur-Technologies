"use client";

import { motion } from "framer-motion";
import CapabilitySectionBase from "./CapabilitySectionBase";
import type { ServiceData } from "@/data/servicesData";

export default function ApiFirstBackendEngineering({
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
            {/* Blueprint Grid */}

            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={40 + i * 45}
                y1="40"
                x2={40 + i * 45}
                y2="410"
                stroke="#f3f4f6"
              />
            ))}

            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="40"
                y1={50 + i * 45}
                x2="560"
                y2={50 + i * 45}
                stroke="#f3f4f6"
              />
            ))}

            {/* Main Architecture Frame */}

            <rect
              x="90"
              y="70"
              width="420"
              height="270"
              rx="20"
              fill="none"
              stroke="#111827"
              strokeWidth="1.5"
            />

            {/* API Gateway */}

            <rect
              x="220"
              y="95"
              width="160"
              height="50"
              rx="12"
              fill="#111827"
            />

            <text
              x="300"
              y="125"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="white"
              letterSpacing="2"
            >
              API GATEWAY
            </text>

            {/* Service Nodes */}

            {[
              { x: 160, y: 210, label: "AUTH" },
              { x: 300, y: 210, label: "REST" },
              { x: 440, y: 210, label: "GRAPHQL" },
            ].map((item, i) => (
              <g key={i}>
                <rect
                  x={item.x - 45}
                  y={item.y - 22}
                  width="90"
                  height="44"
                  rx="10"
                  fill="white"
                  stroke="#111827"
                />
                <text
                  x={item.x}
                  y={item.y + 5}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#111827"
                >
                  {item.label}
                </text>
              </g>
            ))}

            {/* Connections */}

            <line
              x1="300"
              y1="145"
              x2="160"
              y2="188"
              stroke="#111827"
              strokeDasharray="4 4"
            />

            <line
              x1="300"
              y1="145"
              x2="300"
              y2="188"
              stroke="#111827"
              strokeDasharray="4 4"
            />

            <line
              x1="300"
              y1="145"
              x2="440"
              y2="188"
              stroke="#111827"
              strokeDasharray="4 4"
            />

            {/* Service Layer */}

            <rect
              x="145"
              y="270"
              width="310"
              height="48"
              rx="12"
              fill="white"
              stroke="#111827"
            />

            <text
              x="300"
              y="300"
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#111827"
              letterSpacing="2"
            >
              MICROSERVICES LAYER
            </text>

            {/* Decorative Technical Corners */}

            <path
              d="M90 90 L90 70 L110 70"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
            />

            <path
              d="M490 70 L510 70 L510 90"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
            />

            <path
              d="M90 320 L90 340 L110 340"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
            />

            <path
              d="M490 340 L510 340 L510 320"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
            />

            {/* Database Cluster */}

            <ellipse
              cx="220"
              cy="370"
              rx="40"
              ry="12"
              fill="white"
              stroke="#111827"
            />
            <path
              d="M180 370 V390"
              stroke="#111827"
            />
            <path
              d="M260 370 V390"
              stroke="#111827"
            />
            <ellipse
              cx="220"
              cy="390"
              rx="40"
              ry="12"
              fill="white"
              stroke="#111827"
            />

            <text
              x="220"
              y="375"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#111827"
            >
              DATABASE
            </text>

            {/* Cache */}

            <rect
              x="275"
              y="355"
              width="70"
              height="35"
              rx="8"
              fill="white"
              stroke="#111827"
            />

            <text
              x="310"
              y="377"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#111827"
            >
              CACHE
            </text>

            {/* Webhooks */}

            <rect
              x="390"
              y="355"
              width="90"
              height="35"
              rx="8"
              fill="white"
              stroke="#111827"
            />

            <text
              x="435"
              y="377"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#111827"
            >
              WEBHOOKS
            </text>

            {/* Footer */}

            <text
              x="300"
              y="425"
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
              letterSpacing="2"
            >
              API-FIRST • SCALABLE • MODULAR • SECURE
            </text>
          </svg>
        </div>
      }
    />
  );
}