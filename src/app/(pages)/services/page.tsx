import ServiceFeatureCard from "@/components/ui-components/cards/ServiceFeatureCard";
import LetsTalkBtn from "@/components/ui-components/buttons/LetsTalkBtn";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Services | Concepteur Technologies",
  description: "Explore our comprehensive suite of technology services including AI, Web Development, Mobile Apps, Cloud Infrastructure, and UI/UX Design.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Refined Typography */}
      <section className="relative w-full pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-block px-4 py-1.5 mb-4 border border-gray-200 rounded-full bg-gray-50/50 backdrop-blur-sm">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">
              Capabilities & Expertise
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl leading-[1.1] font-bold text-gray-900 tracking-tighter">
            Engineering the <br />
            <span className=" bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">Digital Future</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
            High-performance solutions tailored for the next generation of enterprise scale.
          </p>
        </div>
      </section>

      {/* Services Grid Section - Asymmetric Bento Layout */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            
            {/* 1. Primary Highlight (AI & Automation) - Large Top Left */}
            <div className="md:col-span-8 group">
              <ServiceFeatureCard
                variant="wide"
                image={servicesData[0].image}
                title={servicesData[0].title}
                description={servicesData[0].shortDescription}
                href={`/services/${servicesData[0].slug}`}
                className="h-full min-h-[450px]"
              />
            </div>

            {/* 2. Side Accent (Web Dev) - Tall Top Right */}
            <div className="md:col-span-4">
              <ServiceFeatureCard
                image={servicesData[1].image}
                title={servicesData[1].title}
                description={servicesData[1].shortDescription}
                href={`/services/${servicesData[1].slug}`}
                className="h-full"
              />
            </div>

            {/* 3. Mid Feature (Mobile Apps) - Square */}
            <div className="md:col-span-4">
              <ServiceFeatureCard
                image={servicesData[2].image}
                title={servicesData[2].title}
                description={servicesData[2].shortDescription}
                href={`/services/${servicesData[2].slug}`}
                className="h-full"
              />
            </div>

            {/* 4. Wide Feature (Infrastructure) - Centered Horizontal */}
            <div className="md:col-span-8">
              <ServiceFeatureCard
                variant="wide"
                image={servicesData[3].image}
                title={servicesData[3].title}
                description={servicesData[3].shortDescription}
                href={`/services/${servicesData[3].slug}`}
                className="h-full"
              />
            </div>

            {/* 5. Bottom Left Duo */}
            <div className="md:col-span-4">
              <ServiceFeatureCard
                image={servicesData[4].image}
                title={servicesData[4].title}
                description={servicesData[4].shortDescription}
                href={`/services/${servicesData[4].slug}`}
                className="h-full"
              />
            </div>

             {/* 6. Bottom Right Duo */}
             <div className="md:col-span-4">
              <ServiceFeatureCard
                image={servicesData[5].image}
                title={servicesData[5].title}
                description={servicesData[5].shortDescription}
                href={`/services/${servicesData[5].slug}`}
                className="h-full"
              />
            </div>

            {/* 7. Design/UX - The "Cap" at the end */}
            <div className="md:col-span-4">
               <ServiceFeatureCard
                image={servicesData[6].image}
                title={servicesData[6].title}
                description={servicesData[6].shortDescription}
                href={`/services/${servicesData[6].slug}`}
                className="h-full border-t-4 border-black" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Right side glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 -z-10 opacity-40">
           <div className="w-96 h-96 bg-gray-200 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-light text-black tracking-tight">
            Ready to scale your <span className="font-semibold">infrastructure?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Let's discuss how our technology tailored services can accelerate your business objectives.
          </p>
          <div className="flex justify-center pt-4">
             <LetsTalkBtn />
          </div>
        </div>
      </section>
    </main>
  );
}