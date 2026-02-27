import ServiceFeatureCardV2 from "../ui-components/cards/ServiceFeatureCardV2";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesIntroSectionV2() {
  return (
    <section className="relative py-24 bg-[#FAFAF9]" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-[#00E5FF] bg-[#00E5FF]/10 rounded-full">
            Our Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-6">
            Intelligent Solutions for a <br className="hidden md:block" />
            <span className="text-gray-400">Connected Future</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            We architect scalable systems, intelligent automation, and refined
            digital platforms that power long-term business transformation
            completely clearly and cleanly.
          </p>
        </div>

        {/* Clean Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {/* Top Wide Card - Row 1 */}
          <div className="md:col-span-2">
            <ServiceFeatureCardV2
              variant="wide"
              image="/services/ai-automation.png"
              title="AI & Intelligent Automation"
              description="Machine learning models, generative AI systems, and intelligent frameworks directly designed to unlock competitive and measurable performance advantages."
            />
          </div>

          <div className="md:col-span-1">
            <ServiceFeatureCardV2
              image="/services/website-development.png"
              title="Website Development"
              description="High-performance, beautifully optimized web platforms engineered for user engagement."
            />
          </div>

          {/* Row 2 */}
          <div className="md:col-span-1">
            <ServiceFeatureCardV2
              image="/services/mobile-app.png"
              title="Mobile Applications"
              description="Robust native and cross-platform mobile experiences built for reliability and massive growth."
            />
          </div>

          <div className="md:col-span-1">
            <ServiceFeatureCardV2
              image="/services/backend-eng.png"
              title="Backend Engineering"
              description="Secure APIs, scalable server architecture, and high-performance databases underlying complex applications."
            />
          </div>

          <div className="md:col-span-1">
            <ServiceFeatureCardV2
              image="/services/cloud-eng.png"
              title="Cloud & Infrastructure"
              description="Deploy applications globally with comprehensive cloud-native solutions and automated DevOps pipelines."
            />
          </div>

          {/* Row 3 */}
          <div className="md:col-span-1">
            <ServiceFeatureCardV2
              image="/services/e-commerce.png"
              title="E-Commerce Platforms"
              description="Conversion-focused online shops built for the speed and demands of modern digital commerce."
            />
          </div>

          <div className="md:col-span-2">
            <ServiceFeatureCardV2
              variant="wide"
              image="/services/ux-ui.png"
              title="UI / UX Strategy & Design"
              description="Strategic interface design systems that radically elevate product aesthetics and daily usability for all your clients and users."
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex items-center justify-center">
          <Link
            href="/services"
            className="group flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-black/20"
          >
            Explore All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
