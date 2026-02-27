import ServiceFeatureCard from "../ui-components/cards/ServiceFeatureCard";
import Link from "next/link"

export default function ServicesIntroSection() {
    return (
        <section className="relative py-20 bg-white">
            <div className="max-w-5xl mx-auto px-8">

                {/* Section Intro - Centered */}
                <div className="max-w-4xl mx-auto mb-20 text-center space-y-6">

                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
                        Our Capabilities
                    </p>

                    <h2 className="text-4xl md:text-6xl font-light tracking-tight text-black leading-tight">
                        Technology Services Built with{" "}
                        <span className="font-semibold">Precision & Intelligence</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        We architect scalable systems, intelligent automation, and refined digital
                        platforms that power long-term business transformation.
                    </p>

                </div>

                {/* Compact Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[220px]">

                    {/* Featured Wide Card */}
                    <div className="md:col-span-2">
                        <ServiceFeatureCard
                            variant="wide"
                            image="/services/ai.jpg"
                            title="AI & Intelligent Automation"
                            description="Machine learning models, generative AI systems, and automation frameworks designed to unlock measurable performance advantage."
                        />
                    </div>

                    <ServiceFeatureCard
                        image="/services/web.jpg"
                        title="Website Development"
                        description="Performance-optimized web platforms engineered for engagement and scale."
                    />

                    <ServiceFeatureCard
                        image="/services/mobile.jpg"
                        title="Mobile App"
                        description="Native and cross-platform mobile experiences built for reliability and growth."
                    />

                    <ServiceFeatureCard
                        image="/services/backend.jpg"
                        title="Backend & Data Engineering"
                        description="Secure APIs, scalable server architecture, and high-performance database systems."
                    />

                    <ServiceFeatureCard
                        image="/services/cloud.jpg"
                        title="Cloud & Infrastructure"
                        description="Cloud-native deployment, DevOps automation, and resilient infrastructure."
                    />

                    <ServiceFeatureCard
                        image="/services/ecommerce.jpg"
                        title="E-Commerce"
                        description="Conversion-focused online platforms built for modern digital commerce."
                    />

                    <ServiceFeatureCard
                        image="/services/uiux.jpg"
                        title="UI / UX Design"
                        description="Strategic interface design systems that elevate product usability."
                    />

                    <ServiceFeatureCard
                        image="/services/support.jpg"
                        title="Maintenance & Support"
                        description="Ongoing optimization and support to keep your systems performing at their peak."
                    />

                </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 flex justify-center">
                <Link
                    href="/services"
                    className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-600 transition-colors duration-300 hover:text-black"
                >
                    Know More About Our Services

                    <span className="h-px w-8 bg-gray-400 transition-all duration-300 group-hover:w-14 group-hover:bg-black" />
                </Link>
            </div>
        </section>
    )
}