import CTAAbout from "@/components/about-components/CTAAbout";
import HeroAbout from "@/components/about-components/HeroAbout";
import MissionAbout from "@/components/about-components/MissionAbout";
import StatsAbout from "@/components/about-components/StatsAbout";
import OurJourney from "@/components/about-components/OurJourney";
import TeamAbout from "@/components/about-components/TeamAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Concepteur Technologies, our mission, journey, and the expert engineering team driving enterprise digital transformation.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white mt-12 sm:mt-14 md:mt-15">
      <HeroAbout />
      <StatsAbout />
      <MissionAbout />
      {/* <TeamAbout /> removed as requested */}
      <OurJourney />
      <CTAAbout />
    </main>
  );
}
