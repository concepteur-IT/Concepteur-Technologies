export type TeamMember = {
  slug: string;
  initials: string;
  name: string;
  role: string;
  linkedin?: string;
  // Extended profile fields
  image?: string;
  bio?: string;
  experienceYears?: string;
  skills?: string[];
  experience?: {
    role: string;
    company: string;
    duration: string;
    description?: string;
  }[];
  blogs?: {
    title: string;
    date: string;
    link: string;
  }[];
};

export const teamData: TeamMember[] = [
  {
    slug: "mandira-chakraborty",
    initials: "MC",
    name: "Mandira Chakraborty",
    role: "Director",
    linkedin: "https://linkedin.com",
  },
  {
    slug: "provat-das",
    initials: "PD",
    name: "Provat Das",
    role: "CEO & Head of Operations",
    linkedin: "https://linkedin.com",
    image: "/home/Provat.PNG",
    bio: "Passionate about enterprise architecture and building scalable systems. Leading operations and driving digital transformation for global clients with a focus on modern web technologies and cloud infrastructure.",
    experienceYears: "20+",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "AWS",
      "TypeScript",
      "System Architecture",
      "Team Leadership",
    ],
    experience: [
      {
        role: "Director of Operations",
        company: "Concepteur Technologies",
        duration: "2022 - Present",
        description:
          "Leading the engineering teams and overseeing the delivery of enterprise-grade solutions.",
      },
    ],
    blogs: [
      {
        title: "The Future of Enterprise Architecture in the Cloud",
        date: "March 15, 2026",
        link: "/blog/future-of-enterprise-architecture",
      },
    ],
  },
  {
    slug: "proparna-das",
    initials: "PD",
    name: "Proparna Das",
    role: "CTO & Tech lead",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/Pro.PNG",
    bio: "Experienced full-stack developer with a passion for clean code and performant user interfaces. Specializing in highly interactive applications, component-driven design systems, and frontend architecture that scales for enterprise needs.",
    experienceYears: "8+",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
    ],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Concepteur Technologies",
        duration: "2023 - Present",
        description:
          "Leading frontend development for enterprise clients. Architecting performant Next.js applications and establishing scalable UI component libraries.",
      },
      {
        role: "Software Engineer",
        company: "Creative Web Solutions",
        duration: "2020 - 2023",
        description:
          "Developed and maintained full-stack e-commerce platforms. Improved site load speeds by 40% through extensive frontend optimization.",
      },
      {
        role: "Frontend Developer",
        company: "Startup Hub",
        duration: "2018 - 2020",
        description:
          "Built responsive landing pages and interactive dashboards using React and Redux.",
      },
    ],
    blogs: [],
  },
  {
    slug: "ankur-saha",
    initials: "AS",
    name: "Ankur Saha",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/ankursaha.PNG",
  },
  {
    slug: "spandan-saha",
    initials: "SS",
    name: "Spandan Saha",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/Spandan.PNG",
  },
  {
    slug: "arpan-das",
    initials: "AD",
    name: "Arpan Das",
    role: "Software Engineer",
    linkedin: "https://linkedin.com",
    image: "/home/Arpan.PNG",
  },
  {
    slug: "souvik-roy",
    initials: "SR",
    name: "Souvik Roy",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    slug: "subhankar-acharjee",
    initials: "SA",
    name: "Subhankar Acharjee",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/s.PNG",
  },
  {
    slug: "antar-roy",
    initials: "AR",
    name: "Antar Roy",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/Antar.PNG",
  },
  {
    slug: "rohit-saha",
    initials: "RS",
    name: "Rohit Saha",
    role: "Junior Software Engineer",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/Rohit.PNG",
  },
  {
    slug: "sandip-basu",
    initials: "SB",
    name: "Sandip Basu",
    role: "Junior UI/UX Designer",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/Sandip.PNG",
  },
  {
    slug: "rick-goswami",
    initials: "RG",
    name: "Rick Goswami",
    role: "Intern",
    linkedin: "https://www.linkedin.com/feed/",
    image: "/home/Rick.PNG",
  },
  {
    slug: "aritra-roy",
    initials: "IGcd",
    name: "Ishita Guha",
    role: "Junior UI/UX Designer",
    linkedin: "https://www.linkedin.com/feed/",
  },
];
