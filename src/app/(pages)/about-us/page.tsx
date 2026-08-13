import CTAAbout from "@/components/about-components/CTAAbout";
import HeroAbout from "@/components/about-components/HeroAbout";
import MissionAbout from "@/components/about-components/MissionAbout";
import StatsAbout from "@/components/about-components/StatsAbout";
import OurJourney from "@/components/about-components/OurJourney";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mission, Engineering Philosophy & Growth Story",
  description:
    "Learn about Concepteur Technologies - our mission, timeline journey, engineering philosophy, and expert software team driving enterprise digital transformation.",
  keywords: [
    "About Concepteur Technologies",
    "IT company history",
    "software engineering philosophy",
    "custom software development company",
    "enterprise IT transformation"
  ],
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Concepteur Technologies | Enterprise Engineering Leader",
    description:
      "Learn about Concepteur Technologies, our mission, journey, and the expert engineering team driving enterprise digital transformation.",
    url: "https://concepteurit.com/about-us",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Concepteur Technologies | Enterprise Engineering Leader",
    description:
      "Learn about Concepteur Technologies, our mission, journey, and the expert engineering team driving enterprise digital transformation.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Concepteur Technologies",
  url: "https://concepteurit.com/about-us",
  description:
    "Learn about Concepteur Technologies, our mission, journey, and the expert engineering team driving enterprise digital transformation.",
  publisher: {
    "@type": "Organization",
    name: "Concepteur Technologies",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white mt-12 sm:mt-14 md:mt-15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroAbout />
      <StatsAbout />
      <MissionAbout />
      <OurJourney />
      <CTAAbout />
    </main>
  );
}
