import { notFound } from "next/navigation";
import { Metadata } from "next";
import { teamData } from "@/data/teamData";
import ProfileHero from "@/components/team-components/ProfileHero";
import ProfileDetails from "@/components/team-components/ProfileDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = teamData.find((m) => m.slug === slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role}`,
    description: member.bio || `Learn more about ${member.name}, ${member.role} at Concepteur Technologies.`,
    alternates: {
      canonical: `/who-we-are/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return teamData.map((member) => ({
    slug: member.slug,
  }));
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = teamData.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="bg-[#fcfcfc] mt-12 sm:mt-14 md:mt-15 min-h-screen">
      <ProfileHero member={member} />
      <ProfileDetails member={member} />
    </main>
  );
}
