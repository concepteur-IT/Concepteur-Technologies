import { servicesData } from "@/data/servicesData";
import { statsData } from "@/data/statsData";
import { teamData } from "@/data/teamData";
import { testimonialsData } from "@/data/testimonialsData";

export const companyKnowledge = {
  company: {
    name: "Concepteur Technologies",
    email: "info@concepteurit.com",
  },

  services: servicesData.map((service: any) => ({
    title: service.title,
    description: service.description,
  })),

  stats: statsData.map((stat: any) => ({
    label: stat.label,
    value: `${stat.value}${stat.suffix ?? ""}`,
  })),

  team: teamData.map((member: any) => ({
    name: member.name,
    role: member.role,
  })),

  testimonials: testimonialsData.map((testimonial: any) => ({
    name: testimonial.name,
    company: testimonial.company,
    message: testimonial.message,
  })),
};
