"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProductStack() {
  const stack = [
    { name: "Full-Stack", icon: "/products/product-icon1.svg" },
    { name: "Frontend", icon: "/products/product-icon2a.svg" },
    { name: "Node.js", icon: "/products/product-icon3.svg" },
    { name: "Next.js", icon: "/products/nextjs.png" },
    { name: "PHP", icon: "/products/product-icon4.svg" },
    { name: "AngularJS", icon: "/products/product-icon7.svg" },
    { name: "React", icon: "/products/product-icon6.svg" },
    { name: "Drupal", icon: "/products/drupal.png" },
    { name: "Flutter", icon: "/products/product-icon8.svg" },
    { name: "WordPress", icon: "/products/product-icon9.svg" },
    { name: "MongoDB", icon: "/products/mongo.ico" },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-20 bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Intro */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 md:mb-20 text-center space-y-5 md:space-y-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Product-Focused
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            From Design to Scale —{" "}
            <span className="font-semibold">We Build What Grows.</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Your full-stack development partner across every stage of product
            evolution.
          </p>
        </motion.div>

        {/* Refined Stack Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-0 md:border-t md:border-l md:border-black/6 md:rounded-xl md:overflow-hidden"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {stack.map((item, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center justify-center p-3 sm:p-5 md:p-8 bg-white border border-black/8 rounded-xl shadow-sm md:shadow-none md:rounded-none md:border-r md:border-b md:border-black/6 md:border-l-0 md:border-t-0 transition-all duration-500 hover:z-10"
              variants={tileVariants}
            >
              {/* Soft background glow on hover */}
              <div className="absolute inset-0 bg-radial-gradient from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain grayscale opacity-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
              </div>

              {/* Label */}
              <span className="relative text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-wider text-gray-500 group-hover:text-black transition-colors duration-300 text-center">
                {item.name}
              </span>

              {/* Hover Accent Line (Bottom) */}
              <div className="hidden md:block absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}

          {/* Elegant "Filling" tile for odd-numbered grids */}
          <div className="hidden lg:flex items-center justify-center p-10 bg-gray-50/30 border-r border-b border-black/6">
            <span className="text-[10px] uppercase tracking-[0.2em] text-black-300 font-bold ">
              ANYTHING YOU WANT
            </span>
          </div>
        </motion.div>

        {/* Bottom CTA (Unchanged) */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-500 transition-colors duration-300 hover:text-black"
          >
            See All Services
            <span className="h-px w-8 bg-gray-400 transition-all duration-300 group-hover:w-14 group-hover:bg-black" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
