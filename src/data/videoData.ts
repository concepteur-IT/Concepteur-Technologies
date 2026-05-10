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
    vimeoId: "76979871", // Replace with actual Vimeo ID.
    thumbnail: "/team/T1.PNG",
    title: "Engineering at Concepteur",
    role: "Senior Software Engineer",
    name: "Developer Insights",
  },
];
