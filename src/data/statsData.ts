export type Stat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
};

export const statsData: Stat[] = [
  {
    value: 46,
    suffix: "+",
    label: "Projects Completed",
    description:
      "Delivered across web, mobile, AI, and enterprise platforms globally.",
  },
  {
    value: 23,
    suffix: "+",
    label: "End-to-End Projects",
    description:
      "Trusted by startups and established businesses across multiple industries.",
  },
];
