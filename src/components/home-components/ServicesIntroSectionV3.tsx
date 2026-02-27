import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "ai",
    title: "AI & Intelligent Automation",
    description:
      "Machine learning models, generative AI systems, and automation frameworks designed for measurable advantage.",
    image: "/services/ai-automation.png",
  },
  {
    id: "web",
    title: "Website Development",
    description:
      "Performance-optimized web platforms engineered for user engagement and global scale.",
    image: "/services/website-development.png",
  },
  {
    id: "mobile",
    title: "Mobile App",
    description:
      "Native and cross-platform mobile experiences built for reliability and continuous growth.",
    image: "/services/mobile-app.png",
  },
  {
    id: "backend",
    title: "Backend & Data Engineering",
    description:
      "Secure APIs, scalable server architecture, and high-performance database systems.",
    image: "/services/backend-eng.png",
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description:
      "Cloud-native deployment, DevOps automation, and resilient global infrastructure.",
    image: "/services/cloud-eng.png",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Conversion-focused online platforms built for the demands of modern digital commerce.",
    image: "/services/e-commerce.png",
  },
  {
    id: "ux",
    title: "UI / UX Design",
    description:
      "Strategic interface design systems that radically elevate product aesthetics and usability.",
    image: "/services/ux-ui.png",
  },
  {
    id: "support",
    title: "Continuous Optimization",
    description:
      "Ongoing optimization and support to keep your systems performing at their absolute peak.",
    image: "/services/contact.png",
  },
];

export default function ServicesIntroSectionV3() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Minimalist, Black & White Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Our Capabilities
          </p>

          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
            Technology Services Built with{" "}
            <span className="font-semibold">Precision & Intelligence</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We architect scalable systems, intelligent automation, and refined
            digital platforms that power long-term business transformation.
          </p>
        </div>

        {/* Compact, Clean Grid (4x2 on Desktop) - not just a standard card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col cursor-pointer"
            >
              {/* Image box: strictly grayscale normally, full color strictly on hover */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-5 bg-gray-50 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              {/* Text Layout (clean separation) */}
              <div className="flex gap-4">
                <span className="text-xs font-semibold text-gray-300 mt-1">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-black leading-tight mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed pr-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-black pb-1 border-b border-black w-max"
          >
            All Services{" "}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
