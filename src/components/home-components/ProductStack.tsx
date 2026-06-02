"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ProductStack() {
  const [activeIdx, setActiveIdx] = useState(0);

  const categories = [
    {
      title: "Agentic AI & Engineering",
      description:
        "Engineering autonomous agents, predictive workflows, and deeply integrated LLM architectures natively built for scale.",
      tech: [
        {
          name: "Agentic AI",
          icon: "ai-icon",
          desc: "Custom LLM integrations and multi-agent autonomous frameworks managing dynamic workflows.",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          desc: "The core backbone for our advanced machine learning and AI orchestration applications.",
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
          desc: "Building and training robust predictive, classification, and generative models.",
        },
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
          desc: "High-performance tensor computing and deep neural networks for state-of-the-art AI.",
        },
      ],
    },
    {
      title: "Data & Core Infrastructure",
      description:
        "Building scalable, resilient, and high-performance backend pipelines capable of massive parallel data processing.",
      tech: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          desc: "Highly extensible, enterprise-class open-source relational database architecture.",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          desc: "Event-driven asynchronous backend environment for exceptionally fast network apps.",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          desc: "Flexible, document-based NoSQL database enabling rapid iterations at massive scale.",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          desc: "Robust microservices and massively parallel data processing engineering pipelines.",
        },
      ],
    },
    {
      title: "Frontend Interfaces",
      description:
        "Crafting fluid, high-conversion web UX and cross-platform native apps that respond instantaneously.",
      tech: [
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          desc: "Production-ready React framework offering unparalleled performance and optimized SEO.",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          desc: "Declarative, component-based library for building dynamic and interactive user interfaces.",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
          desc: "Cross-platform native mobile applications running flawlessly from a single dart codebase.",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
          desc: "Progressive, incrementally-adoptable JavaScript framework favored for interactive web UIs.",
        },
      ],
    },
    {
      title: "Platforms & CMS Hubs",
      description:
        "Deploying robust, headless, and fully customizable enterprise data hubs to centralize your operations.",
      tech: [
        {
          name: "Drupal",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg",
          desc: "Enterprise-grade, highly secure, and deeply customizable digital content management.",
        },
        {
          name: "WordPress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
          desc: "The world's most versatile CMS, optimized and deployed in a high-speed headless architecture.",
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
          desc: "Efficient, strongly-typed data querying technology powering modern API structures.",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
          desc: "Ultra-fast in-memory data structure store utilized as a hyper-efficient caching layer.",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="w-full px-5 md:px-[15%]">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-20 items-start">
          {/* Left Column */}

          <div className="w-full xl:w-[40%] flex flex-col pt-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-4"
            >
              — Technology Stack
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl font-normal text-gray-900 leading-[1.2] tracking-tight mb-10"
            >
              Expertise that <br className="hidden sm:block" /> powers scale.
            </motion.h2>

            <div className="flex flex-col w-full border-t border-gray-200">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group flex items-start flex-col py-5 border-b border-gray-200 transition-all duration-500 text-left ${
                    activeIdx === idx
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 tracking-tight transition-transform duration-500 origin-left">
                      {cat.title}
                    </h3>

                    <div className="overflow-hidden w-6 h-6 flex items-center justify-center relative">
                      <span
                        className={`absolute transition-transform duration-500 text-xl font-light ${
                          activeIdx === idx
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-0"
                        }`}
                      >
                        ↗
                      </span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -5 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -5 }}
                        transition={{ duration: 0.25, ease: easeBezier }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-500 text-[15px] leading-relaxed max-w-sm">
                          {cat.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 mb-8 xl:mb-0"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-sm font-medium text-gray-900 border border-gray-300 px-6 py-3 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                Expand Expertise
                <svg
                  className="w-[17px] h-[17px] shrink-0 transition-transform duration-300 xl:group-hover:translate-x-1 xl:group-hover:-translate-y-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}

          <div className="w-full xl:w-[60%] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
              >
                {categories[activeIdx].tech.map((techItem, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-6 lg:p-8 bg-gray-50 custom-notch-tl-br transition-all duration-500 hover:bg-white group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
                        {techItem.icon === "ai-icon" ? (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full text-black opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                          >
                            <path
                              d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                              fill="currentColor"
                            />

                            <path
                              d="M5 4L6 6L8 7L6 8L5 10L4 8L2 7L4 6L5 4Z"
                              fill="currentColor"
                            />
                          </svg>
                        ) : (
                          <Image
                            src={techItem.icon}
                            alt={techItem.name}
                            width={28}
                            height={28}
                            className="object-contain grayscale brightness-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        )}
                      </div>

                      <h4 className="text-[17px] font-medium text-gray-900 group-hover:text-black transition-colors duration-500">
                        {techItem.name}
                      </h4>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed font-light mt-auto">
                      {techItem.desc}
                    </p>

                    <div className="overflow-hidden h-0 opacity-0 group-hover:h-6 group-hover:mt-4 group-hover:opacity-100 transition-all duration-500 ease-[0.22,1,0.36,1]">
                      <Link
                        href={`/contact?topic=${encodeURIComponent(
                          techItem.name,
                        )}&desc=${encodeURIComponent(techItem.desc)}`}
                        className="inline-flex items-center gap-2 text-[11px] font-semibold text-black uppercase tracking-widest hover:opacity-70 transition-opacity"
                      >
                        Start Yours
                        <svg
                          className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA */}

            <Link
              href="/contact"
              className="relative overflow-hidden mt-4 lg:mt-6 w-full flex items-center justify-between p-6 lg:p-8 bg-gray-50 custom-notch-tl-br hover:bg-gray-100 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src="/home/bg-frontend.png"
                  alt="Background texture"
                  fill
                  sizes="100vw"
                  className="object-cover opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
                />
              </div>

              <div className="flex flex-col relative z-10">
                <h4 className="text-[17px] font-medium text-gray-900 mb-1 transition-colors duration-300">
                  Found your stack?
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed font-light max-w-lg">
                  Ready to turn your vision into reality? Contact us today and
                  let our expert engineers start building your dream project.
                </p>
              </div>

              <div className="relative z-10 hidden sm:flex shrink-0 ml-6 w-12 h-12 rounded-full border border-gray-200 bg-white items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>

            {/* Contact */}

            <Link
              href="/contact"
              className="mt-4 w-full flex items-center justify-between p-6 lg:p-8 bg-gray-900 custom-notch-tl-br hover:bg-black transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] group"
            >
              <div className="flex flex-col">
                <h4 className="text-[17px] font-medium text-white mb-1 transition-colors duration-300">
                  Looking for other technologies?
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed font-light max-w-lg">
                  Our engineering teams master a diverse and continuously
                  evolving stack. Tell us about your specific technical
                  requirements.
                </p>
              </div>

              <div className="hidden sm:flex shrink-0 ml-6 w-12 h-12 rounded-full border border-gray-700 bg-white/5 items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
