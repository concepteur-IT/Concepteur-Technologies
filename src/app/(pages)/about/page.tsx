import CTAAbout from "@/components/about-components/CTAAbout"
import HeroAbout from "@/components/about-components/HeroAbout"
import MissionAbout from "@/components/about-components/MissionAbout"
import StatsAbout from "@/components/about-components/StatsAbout"
import TeamAbout from "@/components/about-components/TeamAbout"

export default function AboutPage() {
  return (
    <main className="bg-white mt-15">
      <HeroAbout />
      <StatsAbout />
      <MissionAbout />
      <TeamAbout />
      <CTAAbout />
    </main>
  )
}