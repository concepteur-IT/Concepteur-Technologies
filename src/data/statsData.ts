export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const statsData: Stat[] = [
  { value: 45, suffix: "+", label: "Projects Completed" },
  { value: 38, suffix: "+", label: "Happy Clients" },
  { value: 11, suffix: "+", label: "Team Members" },
  { value: 9, suffix: "+", label: "Active Projects" },
];
