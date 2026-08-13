import { Metadata } from "next";
import FlipkartCaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: Flipkart Academy SCOA Enterprise LMS",
  description:
    "Delivered a mission-critical learning management system (LMS) for Flipkart SCOA. Node.js backend and high-performance Next.js frontend by Concepteur Technologies.",
  keywords: [
    "Flipkart Academy SCOA LMS",
    "Enterprise EdTech solution",
    "Node.js backend learning management",
    "Next.js enterprise LMS",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/flipkart-academy-scoa",
  },
  openGraph: {
    title: "Flipkart Academy SCOA LMS | Concepteur Technologies Case Study",
    description:
      "Enterprise LMS backend & frontend architecture for Flipkart Academy SCOA.",
    url: "https://concepteurit.com/case-studies/flipkart-academy-scoa",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flipkart Academy SCOA LMS | Concepteur Technologies Case Study",
    description:
      "Enterprise LMS backend & frontend architecture for Flipkart Academy SCOA.",
  },
};

export default function Page() {
  return <FlipkartCaseStudyClient />;
}
