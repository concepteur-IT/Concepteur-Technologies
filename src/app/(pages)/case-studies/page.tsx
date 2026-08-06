import { Metadata } from "next";
import CaseStudiesClient from "./client";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise Client Success Stories & Engineering Portfolio",
  description:
    "Explore our portfolio of successful digital transformations, AI implementations, mobile apps, and custom enterprise software engineered by Concepteur Technologies.",
  keywords: [
    "Case Studies",
    "Client Success Stories",
    "Software Portfolio",
    "AI Case Studies",
    "Enterprise Software Projects",
    "Concepteur Technologies portfolio"
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies & Client Success Stories | Concepteur Technologies",
    description:
      "Explore our portfolio of successful digital transformations, custom software, and AI implementations engineered for enterprise scale.",
    url: "https://concepteurit.com/case-studies",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Client Success Stories | Concepteur Technologies",
    description:
      "Explore our portfolio of successful digital transformations, custom software, and AI implementations engineered for enterprise scale.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies & Client Success Stories",
  url: "https://concepteurit.com/case-studies",
  description:
    "Explore our portfolio of successful digital transformations, custom software, and AI implementations engineered for enterprise scale.",
  publisher: {
    "@type": "Organization",
    name: "Concepteur Technologies",
  },
};

export default function Page() {
  return (
    <main className="bg-white mt-12 sm:mt-14 md:mt-15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudiesClient />
    </main>
  );
}
