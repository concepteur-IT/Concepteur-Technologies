"use client";

import { servicesData } from "@/data/servicesData";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

const serviceImages: Record<string, string> = {
  ai: "/home/cap-ai.png",
  web: "/home/cap-web.png",
  mobile: "/home/cap-mobile.png",
  backend: "/home/cap-backend.png",
  cloud: "/home/cap-cloud.png",
  ecommerce: "/home/cap-ecom.png",
  uiux: "/home/cap-ux.png",
};

export default function CapabilitiesClient() {
  return (
    <main className="min-h-screen bg-white pt-[60px]">
      
      {/* Redesigned Architectural Hero Section */}
      <section className="w-full bg-white pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="w-full px-5 md:px-[15%] flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
          >
            — CAPABILITIES
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <motion.div 
               className="lg:col-span-8"
               initial={{ opacity: 0, y: 16 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.05 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight">
                Engineering the <br className="hidden sm:block"/>
                <span className="text-gray-400">Digital Future.</span>
              </h1>
            </motion.div>

            <motion.div
               className="lg:col-span-4"
               initial={{ opacity: 0, y: 16 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg text-gray-500 font-light leading-relaxed h-full flex items-end">
                High-performance foundational systems engineered for scale, reliability, and precision.
              </p>
            </motion.div>
          </div>

          {/* Panoramic Notched Banner (Colorful) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-[21/9] md:aspect-[3/1] bg-gray-100 relative custom-notch-tl-br overflow-hidden"
          >
            <Image 
              src="/home/bg-frontend.png" 
              fill 
              className="object-cover" 
              alt="Engineering Frontend Architecture"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Structural Services Grid - Alternating Flow */}
      <div className="w-full">
        {servicesData.map((service, index) => {
          const img = serviceImages[service.id] || service.image;
          const isAlternateLayout = index % 2 !== 0;

          return (
            <section
              key={service.id}
              className={`w-full py-16 md:py-20 border-t ${isAlternateLayout ? "bg-[#fcfcfc] border-gray-100" : "bg-white border-transparent"}`}
            >
              <div className="w-full px-5 md:px-[15%]">
                <Link href={`/capabilities/${service.slug}`} className="group block">
                  
                  {!isAlternateLayout ? (
                    /* Layout A: Standard 3-Column Architecture */
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                      {/* Column 1: Index */}
                      <div className="hidden lg:block lg:col-span-1 pt-3">
                        <span className="text-sm font-medium text-black border-t border-black pt-3 flex">
                          ({String(index + 1).padStart(2, "0")})
                        </span>
                      </div>

                      {/* Column 2: Text Architecture */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col pt-3 lg:border-t lg:border-gray-100"
                      >
                        <div className="flex items-center gap-4 mb-4 lg:hidden">
                           <span className="text-sm font-medium text-black">
                             ({String(index + 1).padStart(2, "0")})
                           </span>
                           <span className="h-px bg-gray-200 flex-1" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight leading-tight mb-4 transition-colors duration-300">
                          {service.title}
                        </h2>
                        <p className="text-base text-gray-500 font-light leading-relaxed max-w-sm mb-12">
                          {service.shortDescription}
                        </p>

                        <div className="flex flex-col gap-4">
                          {service.features.slice(0, 4).map((feature, i) => (
                            <div key={i} className="flex items-center gap-4">
                              <span className="w-6 h-px bg-gray-200 shrink-0 group-hover:bg-black transition-colors duration-300" />
                              <span className="text-xs sm:text-sm font-semibold text-gray-500 group-hover:text-black tracking-widest uppercase transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Column 3: Image Protocol & Data */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-6 flex flex-col lg:items-end mt-10 lg:mt-0 pt-3 lg:border-t lg:border-gray-100"
                      >
                        <div className="w-full lg:max-w-md aspect-[4/3] bg-gray-100 relative custom-notch-tl-br overflow-hidden mb-8">
                          <Image
                            src={img}
                            alt={service.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[800ms] ease-[0.22,1,0.36,1]"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                          
                          <div className="absolute bottom-5 right-5 lg:bottom-6 lg:right-6 w-12 h-12 bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out custom-notch-tl-br z-10">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Data Analytics Layer */}
                        <div className="flex w-full lg:max-w-md justify-between items-start pt-6 border-t border-gray-100">
                          {service.stats.slice(0, 3).map((stat, i) => (
                            <div key={i} className="flex flex-col gap-1">
                              <p className="text-2xl font-light text-black tracking-tight">
                                <AnimatedCounter value={stat.value} />
                              </p>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold max-w-[100px] leading-tight w-full">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                  ) : (
                    /* Layout B: Full-Bleed Interruption Detail Board */
                    <div className="flex flex-col pt-3 border-t border-gray-900">
                      
                      <div className="w-full flex items-center gap-4 mb-8">
                         <span className="text-sm font-medium text-gray-400">
                           ({String(index + 1).padStart(2, "0")}) Detail View
                         </span>
                      </div>

                      {/* Panoramic Feature Break */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full aspect-[21/9] md:aspect-[3/1] bg-gray-100 relative custom-notch-tl-br overflow-hidden mb-12"
                      >
                        <Image
                          src={img}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-all duration-[1000ms] ease-[0.22,1,0.36,1]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute bottom-5 right-5 lg:bottom-8 lg:right-8 w-14 h-14 bg-white text-black flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out custom-notch-tl-br z-10">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </motion.div>

                      {/* 3-Column Split Data */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        
                        {/* Summary */}
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6 }}
                           className="flex flex-col border-t border-gray-200 pt-6"
                        >
                          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight leading-tight mb-4 group-hover:text-black transition-colors duration-300">
                            {service.title}
                          </h2>
                          <p className="text-sm text-gray-500 font-light leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </motion.div>

                        {/* Key Operations */}
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: 0.1 }}
                           className="flex flex-col border-t border-gray-200 pt-6"
                        >
                           <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-semibold mb-5">
                             Key Operations
                           </p>
                           <ul className="flex flex-col gap-3">
                             {service.features.slice(0, 4).map((feature, i) => (
                                <li key={i} className="text-sm font-medium text-gray-800 tracking-wide">
                                  — {feature}
                                </li>
                             ))}
                           </ul>
                        </motion.div>

                        {/* Outcomes */}
                        <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: 0.2 }}
                           className="flex flex-col border-t border-gray-200 pt-6"
                        >
                           <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-semibold mb-5">
                             Core Metrics
                           </p>
                           <div className="flex flex-col gap-6">
                             {service.stats.slice(0, 2).map((stat, i) => (
                                <div key={i} className="flex justify-between items-center px-4 py-3 bg-gray-100/50">
                                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</p>
                                  <p className="text-lg font-light text-black"><AnimatedCounter value={stat.value} /></p>
                                </div>
                             ))}
                           </div>
                        </motion.div>

                      </div>

                    </div>
                  )}

                </Link>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 border-t border-gray-200">
        <div className="w-full px-5 md:px-[15%]">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-5"
            >
              — NEXT STEP
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 leading-[1.05] tracking-tight mb-8"
            >
              Ready to scale your <br className="hidden md:block"/>
              <span className="text-gray-400">infrastructure?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed mb-10"
            >
              Let&apos;s discuss how our capabilities can dramatically accelerate your core business objectives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-5 md:px-10 md:py-6 text-base font-medium hover:bg-gray-800 transition-colors custom-notch-tl-br"
            >
              Initiate Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
