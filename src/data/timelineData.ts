export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  isGoal?: boolean;
};

export const timelineData: TimelineItem[] = [
  {
    year: "2019",
    title: "The Genesis",
    description:
      "Ampit is founded, establishing a foundation for innovative software solutions and starting our journey in the tech industry.",
  },
  {
    year: "2020",
    title: "Remote Resilience",
    description:
      "Successfully delivered our initial projects with a highly dedicated core team of three remote developers.",
  },
  {
    year: "2021",
    title: "Cultivating Talent",
    description:
      "Expanded our impact by training and mentoring interns, shaping them into elite developers while consistently delivering projects.",
  },
  {
    year: "2022",
    title: "Global Partnerships",
    description:
      "Forged a key strategic partnership with London Sotechnology, delivering high-quality, complex projects via a specialized remote team.",
  },
  {
    year: "2023",
    title: "Enterprise Milestone",
    description:
      "Successfully shipped our first major two-year enterprise CRM project, proving our capability for massive, long-term development.",
  },
  {
    year: "2024",
    title: "Scaling Impact",
    description:
      "Reached a major milestone of 31 successfully delivered projects, solidifying our reputation for consistent and flawless execution.",
  },
  {
    year: "2025",
    title: "Evolution to Concepteur",
    description:
      "Ampit officially evolves and rebrands to Concepteur. We open our first physical headquarters and launch our in-office presence.",
  },
  {
    year: "2026",
    title: "Unbroken Record",
    description:
      "Achieved 41+ completed projects with a 100% success rate. Currently driving 8+ ongoing initiatives with a unified team of 11+ developers.",
  },
  {
    year: "2027",
    title: "The Vision Ahead",
    description:
      "Growing to a 20+ member team, opening our new office in a major city, and building our first Agentic AI system for intelligent optimization.",
    isGoal: true,
  },
];
