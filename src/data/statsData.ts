export type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export const statsData: Stat[] = [
  { value: 45, suffix: "+", label: "Projects Completed", description: "Delivered across web, mobile, AI, and enterprise platforms globally." },
  { value: 38, suffix: "+", label: "Happy Clients", description: "Trusted by startups and established businesses across multiple industries." },
  { value: 11, suffix: "+", label: "Team Members", description: "A focused team of engineers, designers, and product thinkers." },
  { value: 9, suffix: "+", label: "Active Projects", description: "Currently building and scaling solutions for clients worldwide." },
];
