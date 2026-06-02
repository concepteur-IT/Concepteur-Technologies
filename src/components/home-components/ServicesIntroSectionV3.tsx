"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  MonitorSmartphone,
  Database,
  CloudCog,
  ShoppingCart,
  PenTool,
  Activity,
  Code2
} from "lucide-react";

const services = [
  {
    id: "ai",
    title: "AI & Automation",
    desc: "We design AI-powered systems that automate workflows, extract insights, and enhance decision-making.",
    icon: BrainCircuit,
    features: ["Machine Learning", "NLP", "Predictive Analytics"],
    href: "/capabilities/ai-intelligent-automation",
  },
  {
    id: "web",
    title: "Web Platforms",
    desc: "High-performance applications built for speed, accessibility, and beautifully crafted digital experiences.",
    icon: MonitorSmartphone,
    features: ["React & Next.js", "Performance", "Headless CMS"],
    href: "/capabilities/next-gen-web-platforms",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android that are intuitive and highly performant.",
    icon: Code2,
    features: ["React Native", "Cross-Platform", "Native APIs"],
    href: "/capabilities/cross-platform-mobile-apps",
  },
  {
    id: "backend",
    title: "Backend Systems",
    desc: "Robust APIs, scalable databases, and data pipelines to architect systems that power products at scale.",
    icon: Database,
    features: ["API Development", "Microservices", "Data Pipelines"],
    href: "/capabilities/api-first-backend-architecture",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "Cloud-native deployments and DevOps pipelines for resilient, secure, and cost-optimised infrastructure.",
    icon: CloudCog,
    features: ["AWS / GCP / Azure", "CI/CD", "Kubernetes"],
    href: "/capabilities/cloud-infrastructure",
  },
  {
    id: "ecom",
    title: "E-Commerce",
    desc: "Conversion-focused digital storefronts with seamless checkout flows and deep third-party integrations.",
    icon: ShoppingCart,
    features: ["Shopify Plus", "Custom Checkout", "Inventory"],
    href: "/capabilities/api-driven-ecommerce-systems",
  },
  {
    id: "ux",
    title: "UI/UX Design",
    desc: "Thoughtful interface design balancing aesthetics with usability to create meaningful user experiences.",
    icon: PenTool,
    features: ["User Research", "Wireframing", "Design Systems"],
    href: "/capabilities/product-ui-ux-design",
  },
  {
    id: "support",
    title: "Optimization",
    desc: "Ongoing performance monitoring, iterative improvements, and technical support to stay ahead.",
    icon: Activity,
    features: ["Performance", "24/7 Support", "A/B Testing"],
    href: "/contact",
  },
];

// Stagger variants for the grid cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesIntroSectionV3() {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32" id="services">
      <div className="w-full px-5 md:px-[8%] lg:px-[12%]">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm text-slate-500 font-semibold tracking-wider uppercase mb-4"
          >
            — Core Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-normal text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Engineering capabilities built with precision and intelligence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We deploy multi-disciplinary teams to architect, design, and engineer systems that scale. From AI automation to cloud infrastructure, here is what we do best.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Section: Icon & Content */}
                <div className="flex-1 flex flex-col">
                  {/* Animated Icon */}
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-colors duration-300">
                    <Icon strokeWidth={1.5} className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: CTA */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-slate-900 group/link"
                  >
                    Explore Capability
                    <motion.span
                      className="ml-2 inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
