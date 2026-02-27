"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
  variant?: "wide" | "default";
  href?: string;
  className?: string;
  index?: number;
}

export default function ServiceFeatureCard({
  image,
  title,
  description,
  variant = "default",
  href,
  className = "",
  index = 0,
}: Props) {
  const isWide = variant === "wide";

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-[0_16px_60px_rgba(0,0,0,0.06)] ${
        isWide ? "min-h-[320px]" : "min-h-[360px]"
      } ${className}`}
    >
      {/* Image Container */}
      <div
        className={`relative overflow-hidden ${isWide ? "h-[55%]" : "h-[50%]"}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]" />
      </div>

      {/* Content */}
      <div className="relative px-6 pb-6 pt-2 flex flex-col justify-between h-[50%]">
        <div>
          <h3 className="text-lg font-semibold text-black tracking-tight mb-2 group-hover:text-gray-700 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed text-gray-500 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            View Details
          </span>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300"
          >
            <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
