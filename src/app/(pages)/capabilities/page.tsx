import { Metadata } from "next";
import CapabilitiesClient from "./client";

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
    </>
  );
}
