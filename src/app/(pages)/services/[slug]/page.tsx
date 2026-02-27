import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import LetsTalkBtn from "@/components/ui-components/buttons/LetsTalkBtn";

// Generate static params for all known services at build time
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Concepteur Technologies",
    };
  }

  return {
    title: `${service.title} | Concepteur Technologies`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
          <div className="w-[800px] h-[800px] bg-gray-200 rounded-full blur-[100px] translate-y-[-20%] translate-x-[20%]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium animate-fade-in">
              Service Details
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-semibold text-gray-900 tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-black group">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-80 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Metrics / Stats Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
            {service.stats?.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0">
                <h4 className="text-4xl md:text-5xl font-light tracking-tight mb-2">{stat.value}</h4>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section (Features & Benefits) */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Features Col */}
            <div className="space-y-8">
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium pb-4 border-b border-gray-200">
                    Core Capabilities
                </h3>
                <ul className="space-y-6">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                            <span className="text-lg text-gray-800 leading-relaxed">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Benefits Col */}
            <div className="space-y-8">
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium pb-4 border-b border-gray-200">
                    Business Impact
                </h3>
                <ul className="space-y-6">
                    {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 shrink-0" />
                            <span className="text-lg text-gray-800 leading-relaxed">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </section>

      {/* Icon-Driven Case Studies / Impact Section */}
      {service.projects && service.projects.length > 0 && (
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium mb-4">
                Proven Impact
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                Engineering <span className="font-semibold">Excellence</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
              {service.projects.map((project, idx) => (
                <div key={idx} className="group flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-gray-50/50 border border-gray-100 transition-colors hover:bg-gray-50">
                  {/* Clean SVG Icon replacement for Images */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-black text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                     </svg>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">{project.client}</p>
                    <h3 className="text-xl font-medium text-black">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
            Ready to integrate <span className="font-semibold">{service.title}</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            Let's discuss how we can engineer this solution tailored precisely to your operational needs.
          </p>
          <div className="flex justify-center pt-4">
             <LetsTalkBtn />
          </div>
        </div>
      </section>

    </main>
  );
}
