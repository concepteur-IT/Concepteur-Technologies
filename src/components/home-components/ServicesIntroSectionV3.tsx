"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "ai",
    title: "AI & Intelligent Automation",
    description:
      "Machine learning models, generative AI systems, and automation frameworks designed for measurable advantage.",
    image: "/services/ai-automation.png",
    href: "/services/ai-intelligent-automation",
  },
  {
    id: "web",
    title: "Website Development",
    description:
      "Performance-optimized web platforms engineered for user engagement and global scale.",
    image: "/services/website-development.png",
    href: "/services/next-gen-web-platforms",
  },
  {
    id: "mobile",
    title: "Mobile App",
    description:
      "Native and cross-platform mobile experiences built for reliability and continuous growth.",
    image: "/services/mobile-app.png",
    href: "/services/cross-platform-mobile-apps",
  },
  {
    id: "backend",
    title: "Backend & Data Engineering",
    description:
      "Secure APIs, scalable server architecture, and high-performance database systems.",
    image: "/services/backend-eng.png",
    href: "/services/api-first-backend-architecture",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description:
      "Cloud-native deployment, DevOps automation, and resilient global infrastructure.",
    image: "/services/cloud-eng.png",
    href: "/services/cloud-infrastructure",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Conversion-focused online platforms built for the demands of modern digital commerce.",
    image: "/services/e-commerce.png",
    href: "/services/api-driven-ecommerce-systems",
  },
  {
    id: "ux",
    title: "UI / UX Design",
    description:
      "Strategic interface design systems that radically elevate product aesthetics and usability.",
    image: "/services/ux-ui.png",
    href: "/services/product-ui-ux-design",
  },
  {
    id: "support",
    title: "Continuous Optimization",
    description:
      "Ongoing optimization and support to keep your systems performing at their absolute peak.",
    image: "/services/contact.png",
    href: "/contact",
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesIntroSectionV3() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      id="services"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Minimalist, Black & White Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 md:mb-20 text-center space-y-5 md:space-y-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Our Capabilities
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            Technology Services Built with{" "}
            <span className="font-semibold">Precision & Intelligence</span>
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We architect scalable systems, intelligent automation, and refined
            digital platforms that power long-term business transformation.
          </p>
        </motion.div>

        {/* Compact, Clean Grid (4x2 on Desktop) - not just a standard card */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-6 sm:gap-y-10 md:gap-y-12"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={cardVariants}>
              <Link
                href={service.href}
                aria-label={`Explore ${service.title}`}
                className="group relative flex flex-col cursor-pointer max-w-md mx-auto sm:max-w-none border border-gray-200 rounded-xl p-3 shadow-sm sm:border-0 sm:rounded-none sm:p-0 sm:shadow-none"
              >
                {/* Image box: strictly grayscale normally, full color strictly on hover */}
                <div className="w-full h-28 sm:h-auto sm:aspect-[4/3] overflow-hidden mb-3 sm:mb-5 bg-gray-50 relative rounded-lg sm:rounded-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                {/* Text Layout (clean separation) */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4">
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-300 mt-0 sm:mt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-black leading-tight mb-1.5 sm:mb-2 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed sm:pr-2 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          className="mt-12 flex justify-center md:hidden"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-black pb-1 border-b border-black w-max"
          >
            All Services{" "}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
