export type VideoItem = {
  id: string;
  vimeoId: string;
  thumbnail: string;
  title: string;
  role: string;
  name: string;
};

export const videoData: VideoItem[] = [
  {
    id: "v1",
    vimeoId: "76979871", // Standard Vimeo showcase/demo ID. Replace with actual IDs.
    thumbnail: "/team/T1.PNG",
    title: "Engineering at Concepteur",
    role: "Senior Software Engineer",
    name: "Developer Insights",
  },
  {
    id: "v2",
    vimeoId: "76979871",
    thumbnail: "/team/T2.PNG",
    title: "Our Remote Culture",
    role: "Project Manager",
    name: "Culture & Workflow",
  },
  {
    id: "v3",
    vimeoId: "76979871",
    thumbnail: "/team/T3.PNG",
    title: "Building Enterprise AI",
    role: "AI Architect",
    name: "Tech Showcase",
  },
  {
    id: "v4",
    vimeoId: "76979871",
    thumbnail: "/team/T4.PNG",
    title: "The Future of Web App",
    role: "Lead Designer",
    name: "Design Philosophy",
  },
];
