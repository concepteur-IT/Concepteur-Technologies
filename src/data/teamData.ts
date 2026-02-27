export type TeamMember = {
  initials: string;
  name: string;
  role: string;
  linkedin?: string;
};

export const teamData: TeamMember[] = [
  {
    initials: "MC",
    name: "Mandira Chakraborty",
    role: "Founder & CEO",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "PD",
    name: "Provat Das",
    role: "Senior lead Software Architect",
    linkedin: "https://linkedin.com",
  },
  {
    initials: "PD",
    name: "Proparna Das",
    role: "Senior Software Engineer",
  },
  { initials: "AS", name: "Ankur Saha", role: "Software Engineer" },
  { initials: "SS", name: "Spandan Saha", role: "Software Engineer" },
  {
    initials: "AD",
    name: "Arpan Das",
    role: "Software Engineer",
    linkedin: "https://linkedin.com",
  },
  { initials: "IG", name: "Ishita Guha", role: "Software Engineer" },
  { initials: "AR", name: "Antar Roy", role: "Software Engineer" },
  { initials: "RS", name: "Rohit Saha", role: "Junior Software Engineer" },
  { initials: "RG", name: "Rick Goswami", role: "Engineering Intern" },
];
