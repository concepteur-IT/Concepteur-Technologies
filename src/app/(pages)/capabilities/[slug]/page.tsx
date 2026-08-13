import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";
import LetsTalkBtn from "@/components/ui-components/buttons/LetsTalkBtn";
import CapabilityVideoSection from "@/components/capabilities-components/CapabilityVideoSection";

// Generate static params for all known services at build time
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Concepteur Technologies",
    };
  }

  const title = `${service.title} | Concepteur Technologies`;
  const description = service.shortDescription;
  const url = `https://concepteurit.com/capabilities/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      service.title,
      "Concepteur Technologies capabilities",
      "Enterprise software solutions",
      "Custom engineering"
    ],
    alternates: {
      canonical: `/capabilities/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Concepteur Technologies",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#fcfcfc] pb-32 pt-32 md:pt-40">
      {/* Colossal Typography Header */}
      <div className="w-full px-5 md:px-[10%] lg:px-[15%] pb-12 lg:pb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-8">
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-6 flex items-center justify-center lg:justify-start gap-3">
            <span className="w-8 h-[1px] bg-gray-300" />
            capability detail
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light text-gray-900 leading-[1.0] tracking-tighter">
            {service.title}.
          </h1>
        </div>
        <div className="lg:max-w-sm xl:max-w-md pb-2">
          <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* About-Us Styled Video Banner Section */}
      <CapabilityVideoSection
        videoUrl={service.videoUrl}
        vimeoId={service.vimeoId}
        title={service.title}
        image={service.image}
      />

      {/* Sticky Editorial Split Section */}
      {/* "items-start" is crucial here to prevent the left column from stretching */}
      <div className="w-full px-5 md:px-[10%] lg:px-[15%] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative items-start">
        {/* Left Col: Sticky Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-32 lg:self-start">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">
              — System Architecture Context
            </h3>
            <p className="text-xl text-gray-800 font-light leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Architectural Stats Grid */}
          {service.stats && service.stats.length > 0 && (
            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {service.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfcfc] p-6 lg:p-8 flex flex-col justify-end group hover:bg-black transition-colors duration-500"
                >
                  <h4 className="text-4xl lg:text-5xl font-light tracking-tighter text-gray-900 group-hover:text-white transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
              {service.stats.length % 2 !== 0 && (
                <div className="bg-[#fcfcfc] p-6 lg:p-8 flex items-center justify-center">
                  <span className="w-8 h-[1px] bg-gray-300" />
                </div>
              )}
            </div>
          )}

          <div className="pt-8 border-t border-gray-200 pb-12 lg:pb-0">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                Ready to execute?
              </h4>
              <LetsTalkBtn />
            </div>
          </div>
        </div>

        {/* Right Col: Deep Dive Data & Case Studies */}
        <div className="lg:col-span-7 flex flex-col gap-24 lg:gap-32">
          {/* Capabilities List */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-900 pb-6 mb-8">
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                Core Capabilities
              </h2>
              <span className="text-xs font-mono text-gray-400">
                {String(service.features.length).padStart(2, "0")}
              </span>
            </div>

            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex gap-6 py-6 border-b border-gray-200 group hover:border-gray-900 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center font-mono text-[10px] text-gray-400 shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className="text-lg text-gray-600 font-light mt-1.5 leading-relaxed group-hover:text-black transition-colors duration-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Impact List */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-900 pb-6 mb-8">
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                Business Impact
              </h2>
              <span className="text-xs font-mono text-gray-400">
                {String(service.benefits.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pt-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="w-16 h-[1px] bg-gray-300 group-hover:bg-gray-900 group-hover:w-full transition-all duration-700 ease-in-out" />
                  <p className="text-base text-gray-600 font-light leading-relaxed pt-2">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies Gallery */}
          {service.projects && service.projects.length > 0 && (
            <div className="flex flex-col">
              <div className="flex items-center justify-between border-b border-gray-900 pb-6 mb-8">
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">
                    Proven Track Record
                  </p>
                  <h2 className="text-3xl font-light tracking-tight text-gray-900">
                    Engineering Context
                  </h2>
                </div>
                <span className="text-xs font-mono text-gray-400">
                  {String(service.projects.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col divide-y divide-gray-200">
                {service.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group py-8 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-colors duration-300 hover:bg-gray-50/50 px-3 -mx-3 rounded-lg"
                  >
                    <div className="flex items-baseline gap-4 md:w-5/12 shrink-0">
                      <span className="text-xs font-mono text-gray-400 font-medium">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                          {project.client}
                        </span>
                        <h3 className="text-xl font-normal text-gray-900 group-hover:translate-x-1 transition-transform duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="md:w-7/12">
                      <p className="text-sm font-light text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
