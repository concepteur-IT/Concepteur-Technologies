import ContactSection from "@/components/home-components/ContactSection";
import Hero from "@/components/home-components/Hero";
import AboutSection from "@/components/home-components/AboutSection";
import ProductStack from "@/components/home-components/ProductStack";
import AIAdoption from "@/components/home-components/AIAdoption";
import ServicesIntroSectionV3 from "@/components/home-components/ServicesIntroSectionV3";
import TestimonialSection from "@/components/home-components/TestimonialSection";
import VideoCollage from "@/components/home-components/VideoCollage";
import FAQAccordion from "@/components/home-components/FAQAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concepteur Technologies | Enterprise AI & Engineering Solutions",
  description:
    "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
  alternates: {
    canonical: "/",
  },
};

const page = () => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-15">
      <Hero />
      <AboutSection />
      <ServicesIntroSectionV3 />
      <AIAdoption />
      <ProductStack />
      <TestimonialSection />
      <VideoCollage />
      <FAQAccordion />
      <ContactSection />
    </div>
  );
};

export default page;
