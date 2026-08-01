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

  return {
    title: `${service.title} | Concepteur Technologies`,
    description: service.shortDescription,
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

  const homeImages = [
    "/home/bg-frontend.png",
    "/home/cap-uiux.png",
    "/home/cap-cloud.png",
    "/home/cap-ecom.png",
    "/home/cap-backend.png",
    "/home/cap-web.png",
  ];

  const heroImage = "/home/bg-frontend.png";

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

      {/* Massive Hero Block */}
      <div className="w-full px-0 md:px-[5%] lg:px-[15%] mb-20 lg:mb-32">
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-[32px] border border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 select-none">
          {/* Background Blurs */}
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-neutral-200 blur-[120px] opacity-60 animate-pulse [animation-duration:8s]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-neutral-300 blur-[120px] opacity-40 animate-pulse [animation-duration:10s]" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200 blur-[90px] opacity-40 animate-pulse [animation-duration:6s]" />

          {/* Left Card */}
          <div className="absolute left-[4%] top-[12%] z-10 w-40 sm:w-44 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 sm:p-5 shadow-xl hover:-translate-y-2 transition-all duration-500 hidden sm:block">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              PERFORMANCE
            </p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-bold text-neutral-900">
              98%
            </h2>
            <div className="mt-4 sm:mt-5 h-2 rounded-full bg-neutral-200 overflow-hidden">
              <div className="h-full w-[98%] rounded-full bg-black" />
            </div>
          </div>

          {/* Right Card */}
          <div className="absolute right-[4%] top-[12%] z-10 w-40 sm:w-44 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 sm:p-5 shadow-xl hover:-translate-y-2 transition-all duration-500 hidden sm:block">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              LATENCY
            </p>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-bold text-neutral-900">
              12ms
            </h2>
            <div className="mt-4 sm:mt-5 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-black" />
              <span className="h-2 w-2 rounded-full bg-neutral-400" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute left-[4%] bottom-[12%] z-10 w-44 sm:w-48 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 sm:p-5 shadow-xl hover:-translate-y-2 transition-all duration-500 hidden sm:block">
            <div className="flex justify-between items-center">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400">
                STATUS
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="mt-4 sm:mt-5 flex items-end gap-2 justify-between">
              {[40, 65, 35, 80, 55].map((h, i) => (
                <div
                  key={i}
                  className="w-2.5 sm:w-3 rounded-full bg-black transition-all duration-300"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Right */}
          <div className="absolute right-[4%] bottom-[12%] z-10 w-48 sm:w-52 rounded-3xl border border-white/70 bg-white/80 backdrop-blur-xl p-4 sm:p-5 shadow-xl hover:-translate-y-2 transition-all duration-500 hidden sm:block">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-neutral-400">
              MODULES
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {["AI", "DATA", "API", "CLOUD"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-300 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-neutral-700 bg-white/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Center Orb System */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            {/* Glow */}
            <div className="absolute inset-0 scale-150 rounded-full bg-neutral-300 blur-3xl opacity-30 animate-pulse [animation-duration:4s]" />
            {/* Outer Rotating Ring */}
            <div
              className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full border border-neutral-300 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.06)] flex items-center justify-center"
              style={{ animation: "spin 25s linear infinite" }}
            >
              <div className="absolute h-[84%] w-[84%] rounded-full border border-neutral-200/80" />
              <div className="absolute h-[65%] w-[65%] rounded-full border border-neutral-300/60" />
              <div className="absolute h-[45%] w-[45%] rounded-full border border-neutral-400/40" />
              {/* Orbiting Nodes */}
              <div className="absolute w-2.5 h-2.5 rounded-full bg-black top-3 left-1/2 -translate-x-1/2" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-black bottom-3 left-1/2 -translate-x-1/2" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-black left-3 top-1/2 -translate-y-1/2" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-black right-3 top-1/2 -translate-y-1/2" />
              {/* Counter-Rotating Center Core Text to keep it perfectly level */}
              <div
                className="text-center select-none z-10"
                style={{ animation: "spin 25s linear infinite reverse" }}
              >
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.45em] text-neutral-400 font-medium">
                  AI CORE
                </p>
                <h2 className="mt-1 sm:mt-2 text-4xl sm:text-5xl font-light text-neutral-900 leading-none">
                  ∞
                </h2>
              </div>
            </div>
          </div>

          {/* Floating Decorative Pills */}
          <div className="absolute left-[20%] md:left-[26%] top-[14%] rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200 px-4 py-1.5 shadow-md hover:scale-105 transition duration-300 z-10">
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">
              Analysis
            </span>
          </div>
          <div className="absolute right-[20%] md:right-[24%] top-[16%] rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200 px-4 py-1.5 shadow-md hover:scale-105 transition duration-300 z-10">
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">
              Vision
            </span>
          </div>
          <div className="absolute left-[22%] md:left-[28%] bottom-[16%] rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200 px-4 py-1.5 shadow-md hover:scale-105 transition duration-300 z-10">
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">
              Security
            </span>
          </div>
          <div className="absolute right-[22%] md:right-[26%] bottom-[14%] rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200 px-4 py-1.5 shadow-md hover:scale-105 transition duration-300 z-10">
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">
              Automation
            </span>
          </div>
          <div className="absolute left-1/2 top-[8%] -translate-x-1/2 rounded-full bg-white/80 backdrop-blur-xl border border-neutral-200 px-4 py-1.5 shadow-md hover:scale-105 transition duration-300 z-10">
            <span className="text-[11px] sm:text-xs font-medium text-neutral-600">
              Realtime
            </span>
          </div>

          {/* Secondary Ambient Accent Dots */}
          <div className="absolute left-[16%] top-[48%] w-1.5 h-1.5 rounded-full bg-black/20 animate-pulse [animation-duration:3s]" />
          <div className="absolute right-[16%] top-[42%] w-2 h-2 rounded-full bg-black/10 animate-pulse [animation-duration:4s]" />
          <div className="absolute right-[25%] top-[72%] w-1.5 h-1.5 rounded-full bg-black/20 animate-pulse [animation-duration:2.5s]" />
          <div className="absolute left-[34%] top-[74%] w-1.5 h-1.5 rounded-full bg-black/10 animate-pulse [animation-duration:3.5s]" />

          {/* Bottom Footer Text */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-full text-center px-4 pointer-events-none z-10">
            <p className="font-mono text-[9px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.45em] text-neutral-400 font-medium">
              Intelligence &bull; Experience &bull; Innovation
            </p>
          </div>
        </div>
      </div>

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
              <div className="flex flex-col border-b border-gray-900 pb-6 mb-8">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">
                  Proven Track Record
                </p>
                <h2 className="text-3xl font-light tracking-tight text-gray-900">
                  Engineering Context
                </h2>
              </div>

              <div className="flex flex-col gap-0 border border-gray-200 rounded-xl overflow-hidden bg-white">
                {service.projects.map((project, idx) => {
                  const projectImage =
                    homeImages[(idx + 2) % homeImages.length];
                  return (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row group border-b border-gray-200 last:border-b-0 hover:bg-[#fcfcfc] transition-colors relative"
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                      <div className="md:w-1/3 relative aspect-video md:aspect-square m-4 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={projectImage}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1000ms]"
                          alt={project.title}
                        />
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-3">
                          {project.client}
                        </span>
                        <h3 className="text-2xl font-normal text-gray-900 mb-3 group-hover:translate-x-2 transition-transform duration-500">
                          {project.title}
                        </h3>
                        <p className="text-sm font-light text-gray-500 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
