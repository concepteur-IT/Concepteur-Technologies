"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "ai",
    title: "AI & Intelligent Automation",
    desc: "We design and deploy AI-powered systems that automate complex workflows, extract insights from data, and enhance decision-making — enabling your business to scale with intelligence.",
    image: "/service/ai.jpg",
    href: "/capabilities/ai-intelligent-automation",
  },
  {
    id: "web",
    title: "Website Development",
    desc: "From high-performance marketing sites to full-scale web applications, we build fast, accessible, and beautifully crafted digital experiences using modern frameworks.",
    image: "/service/website.jpg",
    href: "/capabilities/next-gen-web-platforms",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    desc: "We build cross-platform mobile applications for iOS and Android that are intuitive, performant, and aligned with your product vision.",
    image: "/service/mobile.jpg",
    href: "/capabilities/cross-platform-mobile-apps",
  },
  {
    id: "backend",
    title: "Backend & Data Engineering",
    desc: "Robust APIs, scalable databases, and data pipelines — we architect backend systems that power your product at any scale.",
    image: "/service/backend.jpg",
    href: "/capabilities/api-first-backend-architecture",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    desc: "From cloud-native deployments to DevOps pipelines, we build resilient, secure, and cost-optimised infrastructure on AWS, GCP, and Azure.",
    image: "/services/cloud.png",
    href: "/capabilities/cloud-infrastructure",
  },
  {
    id: "ecom",
    title: "E-Commerce",
    desc: "We build conversion-focused digital storefronts and commerce platforms with seamless checkout flows, integrations, and performance at their core.",
    image: "/services/ecommerce.png",
    href: "/capabilities/api-driven-ecommerce-systems",
  },
  {
    id: "ux",
    title: "UI / UX Design",
    desc: "Thoughtful interface design and design systems that balance aesthetics with usability — crafted to create meaningful experiences for your users.",
    image: "/services/uiux.png",
    href: "/capabilities/product-ui-ux-design",
  },
  {
    id: "support",
    title: "Continuous Optimization",
    desc: "Ongoing performance monitoring, iterative improvements, and technical support to keep your product reliable, fast, and ahead of the curve.",
    image: "/services/support.jpg",
    href: "/contact",
  },
];

export default function ServicesIntroSectionV3() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId)!;

  return (
    <section className="w-full bg-white py-20 md:py-28" id="services">
      <div className="w-full px-5 md:px-[15%]">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* LEFT: label + heading + description + service list */}
          <div className="md:w-[40%] flex flex-col gap-8 shrink-0">
            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-sm text-gray-400 font-medium"
              >
                (CT 02) — CAPABILITIES
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="text-3xl sm:text-4xl font-normal text-gray-900 leading-[1.1] tracking-tight"
              >
                Technology services built with precision &amp; intelligence.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm text-gray-500 leading-relaxed"
              >
                Our capabilities span across disciplines — from AI automation
                and web platforms to mobile apps and cloud infrastructure.
              </motion.p>
            </div>

            {/* Service list */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col"
            >
              {services.map((service) => (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`text-left py-3.5 border-b border-gray-200 text-normal transition-colors duration-150 ${
                    activeId === service.id
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-700 font-normal"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: active service panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm bg-gray-100">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title + description + CTA */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-normal text-gray-900 tracking-tight">
                    {active.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                    {active.desc}
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <Link
                      href={active.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 px-5 py-2.5 hover:bg-gray-700 transition-colors duration-200"
                    >
                      Explore Service <span>↗</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-300 px-5 py-2.5 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
