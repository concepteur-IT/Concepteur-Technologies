import { Metadata } from "next";
import CapabilitiesClient from "@/components/capabilities/client";
import { servicesData } from "@/data/servicesData";
import AIIntelligentAutomation from "@/components/capabilities/AIIntelligentAutomation";
import NextGenWebPlatforms from "@/components/capabilities/NextGenWebPlatforms";
import MobileAppDevelopment from "@/components/capabilities/MobileAppDevelopment";
import ApiFirstBackendEngineering from "@/components/capabilities/ApiFirstBackendEngineering";
import CloudInfrastructure from "@/components/capabilities/CloudInfrastructure";
import ApiDrivenECommerceSystems from "@/components/capabilities/ApiDrivenECommerceSystems";
import ProductUIUXDesign from "@/components/capabilities/ProductUIUXDesign";
import Reveal from "./Reveal";

export const metadata: Metadata = {
  title: "Engineering Capabilities",
  description:
    "Explore our specialized engineering capabilities across AI Automation, Next-Gen Web, API-first Backends, and Cloud Infrastructure.",
  alternates: {
    canonical: "/capabilities",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Engineering Capabilities",
    provider: {
      "@type": "Organization",
      name: "Concepteur Technologies",
    },
    description:
      "Our core engineering capabilities including AI automation, Next-Gen Web Platforms, API-first Backend architectures, and Cloud infrastructure.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CapabilitiesClient />

      <div className="w-full">
        {servicesData.map((service, index) => {
          let Component = null;

          if (service.id === "ai") {
            Component = AIIntelligentAutomation;
          } else if (service.id === "web") {
            Component = NextGenWebPlatforms;
          } else if (service.id === "mobile") {
            Component = MobileAppDevelopment;
          } else if (service.id === "backend") {
            Component = ApiFirstBackendEngineering;
          } else if (service.id === "cloud") {
            Component = CloudInfrastructure;
          } else if (service.id === "ecommerce") {
            Component = ApiDrivenECommerceSystems;
          } else if (service.id === "uiux") {
            Component = ProductUIUXDesign;
          }

          if (!Component) return null;

          return (
            <Reveal key={service.id}>
              <Component
                service={service}
                index={index}
              />
            </Reveal>
          );
        })}
      </div>
    </>
  );
}