import ContactSection from "@/components/home-components/ContactSection";
import Hero from "@/components/home-components/Hero";
import AboutSection from "@/components/home-components/AboutSection";
import ProductStack from "@/components/home-components/ProductStack";
import AIAdoption from "@/components/home-components/AIAdoption";
import ServicesIntroSectionV3 from "@/components/home-components/ServicesIntroSectionV3";
import TestimonialSection from "@/components/home-components/TestimonialSection";
import FAQAccordion from "@/components/home-components/FAQAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concepteur Technologies | Enterprise AI & Software Engineering Company",
  description:
    "Engineering-led AI technology company delivering scalable systems, intelligent automation, custom software, and enterprise-grade digital solutions.",
  keywords: [
    "Concepteur Technologies",
    "Enterprise AI engineering",
    "Software Development Company",
    "Digital Transformation Solutions",
    "Custom Software India",
    "AI Adoption Framework",
    "Full Stack Web Development",
    "Cloud Architecture Services"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Concepteur Technologies | Enterprise AI & Software Engineering",
    description:
      "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
    url: "https://concepteurit.com",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concepteur Technologies | Enterprise AI & Software Engineering",
    description:
      "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Concepteur Technologies",
  url: "https://concepteurit.com",
  description:
    "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
  publisher: {
    "@type": "Organization",
    name: "Concepteur Technologies",
    url: "https://concepteurit.com",
  },
};

const page = () => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <ServicesIntroSectionV3 />
      <AIAdoption />
      <ProductStack />
      <TestimonialSection />

      <FAQAccordion />
      <ContactSection />
    </div>
  );
};

export default page;
