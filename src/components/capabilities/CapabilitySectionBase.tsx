"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type MotionProps } from "framer-motion";
import type { ServiceData } from "@/data/servicesData";

type CapabilitySectionBaseProps = {
  service: ServiceData;
  index: number;
  reverse?: boolean;
  image: React.ReactNode;
  statsCount?: number;
  topTitle?: string;
  layoutClassName?: string;
};

export default function CapabilitySectionBase({
  service,
  index,
  reverse = false,
  image,
  statsCount = 3,
  topTitle,
  layoutClassName = "",
}: CapabilitySectionBaseProps) {
  return (
    <section
      className={`w-full py-16 md:py-20 border-t bg-white border-transparent ${layoutClassName}`}
    >
      <div className="w-full px-5 md:px-[15%]">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {!reverse && (
            <div className="hidden lg:block lg:col-span-1 pt-3">
              <span className="text-sm font-medium text-black border-t border-black pt-3 flex">
                ({String(index + 1).padStart(2, "0")})
              </span>
            </div>
          )}

          <motion.div className={`lg:col-span-5 flex flex-col pt-3 lg:border-t lg:border-gray-100 ${reverse ? "lg:order-2" : ""}`}>
            {topTitle && (
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-4">
                {topTitle}
              </p>
            )}

            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight leading-tight mb-4">
              <Link href={`/capabilities/${service.slug}`}>{service.title}</Link>
            </h2>

            <p className="text-base text-gray-500 font-light leading-relaxed max-w-sm mb-12">
              {service.shortDescription}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {service.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-6 h-px bg-gray-200 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest uppercase">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium custom-notch-tl-br"
              >
                Get this service
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div className={`lg:col-span-6 flex flex-col lg:items-end mt-10 lg:mt-0 pt-3 lg:border-t lg:border-gray-100 ${reverse ? "lg:order-1" : ""}`}>
            {image}

            <div className="flex w-full lg:max-w-md justify-between items-start pt-6 border-t border-gray-100">
              {service.stats.slice(0, statsCount).map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <p className="text-2xl font-light text-black tracking-tight">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold max-w-[100px] leading-tight w-full">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
