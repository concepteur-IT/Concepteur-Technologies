import ContactSection from "@/components/home-components/ContactSection";
import Hero from "@/components/home-components/Hero";
import ProductStack from "@/components/home-components/ProductStack";
import ServicesIntroSectionV3 from "@/components/home-components/ServicesIntroSectionV3";
import ServicesIntroSectionV2 from "@/components/home-components/ServicesIntroSectionV2";
import ServicesIntroSection from "@/components/home-components/ServicesIntroSection";
import TestimonialSection from "@/components/home-components/TestimonialSection";
import FAQAccordion from "@/components/home-components/FAQAccordion";
import React from "react";

const page = () => {
  return (
    <div className="pt-15">
      <Hero />
      <ServicesIntroSectionV3 />
      <ProductStack />
      <TestimonialSection />
      <FAQAccordion />
      <ContactSection />
    </div>
  );
};

export default page;
