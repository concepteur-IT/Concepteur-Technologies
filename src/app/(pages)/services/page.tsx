"use client";

import LetsTalkBtn from "@/components/ui-components/buttons/LetsTalkBtn";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"} border-t border-gray-100`}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-6xl mx-auto px-6 md:px-8"
            >
              <div
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="w-full md:w-1/2 space-y-6"
                >
                  {/* Number tag */}
                  <span className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-bold">
                    0{index + 1} — Service
                  </span>

                  <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
                    {service.title}
                  </h2>

                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {service.shortDescription}
                  </p>

                  {/* Key features */}
                  <div className="space-y-3 pt-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-8 pt-4 border-t border-gray-100">
                    {service.stats.slice(0, 3).map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-semibold text-black tracking-tight">
                          {stat.value}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-medium mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-60 transition-opacity pt-2"
                  >
                    Explore {service.title.split(" ")[0]}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
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
