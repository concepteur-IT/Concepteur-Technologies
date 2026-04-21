"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { statsData } from "@/data/statsData";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="w-full px-5 md:px-[15%]">
        {/* Top two-column: left = label + heading, right = description + link */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-24 mb-16 md:mb-24">
          {/* Left */}
          <div className="md:max-w-[44%] flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-400 font-medium"
            >
              — ABOUT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 leading-[1.1] tracking-tight"
            >
              Engineering that stands for clarity and purpose.
            </motion.h2>
          </div>

          {/* Right */}
          <div className="md:max-w-[46%] flex flex-col gap-6 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-500 leading-relaxed">
                Concepteur is a technology company defined by a minimal yet
                human-centered philosophy. Guided by disciplined engineering,
                our team approaches every project with rigour, precision, and
                creativity. We believe technology should not chase trends but
                instead embody clarity, restraint, and long-lasting value.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our practice spans across scales and disciplines — from AI
                automation and enterprise systems to digital products and cloud
                infrastructure. By blending technical expertise with thoughtful
                product thinking, we build solutions that respect context,
                enhance functionality, and inspire those who use them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Link
                href="/company"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200"
              >
                About <span>↗</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-gray-200 mb-12 md:mb-16"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4"
            >
              <span className="text-5xl sm:text-6xl font-light text-gray-900 tracking-tight leading-none">
                {stat.value}
                {stat.suffix}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-xl text-black">{stat.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
