import { Metadata } from "next";
import SolutionsClient from "./client";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Digital Transformation & AI Adoption",
  description:
    "Transform complexity into scalable advantage with Concepteur Technologies. Enterprise digital transformation, AI adoption, process automation, and legacy modernization.",
  keywords: [
    "enterprise software solutions",
    "digital transformation company",
    "AI adoption framework",
    "process automation services",
    "legacy system modernization",
    "cloud migration solutions",
    "Concepteur Technologies solutions"
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Enterprise Digital Solutions | Concepteur Technologies",
    description:
      "Transform complexity into scalable advantage. Enterprise digital transformation, AI adoption, process automation, and legacy modernization.",
    url: "https://concepteurit.com/solutions",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Digital Solutions | Concepteur Technologies",
    description:
      "Transform complexity into scalable advantage. Enterprise digital transformation, AI adoption, process automation, and legacy modernization.",
  },
};

export default function SolutionsPage() {
  return <SolutionsClient />;
}
