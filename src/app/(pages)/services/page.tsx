"use client";

import LetsTalkBtn from "@/components/ui-components/buttons/LetsTalkBtn";
import { servicesData } from "@/data/servicesData";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/[\d.]+/);
  const number = numericMatch ? parseFloat(numericMatch[0]) : 0;

  const prefixMatch = value.match(/^[^\d]+/);
  const prefix = prefixMatch ? prefixMatch[0] : "";

  const suffixMatch = value.match(/[^\d.]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  useEffect(() => {
    if (isInView) {
      spring.set(number);
    }
  }, [isInView, number, spring]);

  const display = useTransform(spring, (current) => {
    if (value.includes(".")) {
      const decimals = value.split(".")[1]?.length || 0;
      return current.toFixed(decimals);
    }
    // Simple fast floor for integers
    return Math.floor(current).toString();
  });

  return (
    <span ref={ref} className="inline-flex items-center">
      {prefix}
      {numericMatch ? <motion.span>{display}</motion.span> : value}
      {suffix}
    </span>
  );
}

// Map service IDs to homepage images
const serviceImages: Record<string, string> = {
  ai: "/services/ai-automation.png",
  web: "/services/website-development.png",
  mobile: "/services/mobile-app.png",
  backend: "/services/backend-eng.png",
  cloud: "/services/cloud-eng.png",
  ecommerce: "/services/e-commerce.png",
  uiux: "/services/ux-ui.png",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white mt-15">
      {/* Hero Section - Clean & Compact */}
      <section className="relative w-full pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">
              Capabilities & Expertise
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl leading-[1.1] font-light text-black tracking-tight"
          >
            Engineering the{" "}
            <span className="font-semibold">Digital Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto pt-2"
          >
            High-performance solutions tailored for the next generation of
            enterprise scale.
          </motion.p>
        </div>
      </section>

      {/* Individual Service Sections */}
      {servicesData.map((service, index) => {
        const isReversed = index % 2 !== 0;
        const img = serviceImages[service.id] || service.image;

        return (
          <section
            key={service.id}
            className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-gray-50/50"} border-t border-gray-100`}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-6xl mx-auto px-6 md:px-8"
            >
              {/* Entire Card acts as a giant clickable area */}
              <Link href={`/services/${service.slug}`} className="group block">
                <div
                  className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-5/12">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-500 border border-gray-200">
                      <Image
                        src={img}
                        alt={service.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />

                      {/* Number tag top right */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[11px] font-bold tracking-widest text-black shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Interactive overlay that appears on hover */}
                      <div className="absolute inset-0 bg-transparent transition-colors duration-500 z-10 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-lg">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-7/12 space-y-6">
                    {/* Contextual Header specific to the service */}

                    <div>
                      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-[16px] leading-relaxed text-gray-500 font-light max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Key features */}
                    <div className="space-y-3 pt-3 border-t border-gray-100">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-3">
                        Core Capabilities
                      </p>
                      {service.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 shrink-0 border border-gray-200 group-hover:border-black group-hover:bg-black transition-colors duration-500">
                            <ArrowUpRight className="w-2.5 h-2.5 text-gray-400 group-hover:text-white transition-colors duration-500" />
                          </div>
                          <span className="text-[14px] font-medium text-gray-600 group-hover:text-black transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats sequence */}
                    <div className="flex flex-wrap gap-8 pt-4 lg:pt-6">
                      {service.stats.slice(0, 3).map((stat) => (
                        <div key={stat.label}>
                          <p className="text-2xl font-semibold text-black tracking-tighter mb-0.5">
                            <AnimatedCounter value={stat.value} />
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-light text-black tracking-tight"
          >
            Ready to scale your{" "}
            <span className="font-semibold">infrastructure?</span>
          </motion.h2>
          <p className="text-gray-500 text-lg">
            Let&apos;s discuss how our technology tailored services can
            accelerate your business objectives.
          </p>
          <div className="flex justify-center pt-2">
            <LetsTalkBtn />
          </div>
        </div>
      </section>
    </main>
  );
}
