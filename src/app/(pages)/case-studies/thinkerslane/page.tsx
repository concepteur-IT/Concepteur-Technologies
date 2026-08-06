import { Metadata } from "next";
import ThinkerslaneCaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: Thinkerslane E-Commerce Book Store",
  description:
    "Discover how Concepteur Technologies engineered Thinkerslane - an online book store with an integrated coupon engine and conversion-focused checkout.",
  keywords: [
    "Thinkerslane case study",
    "online book store platform",
    "e-commerce coupon discount engine",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/thinkerslane",
  },
  openGraph: {
    title: "Thinkerslane E-Commerce Case Study | Concepteur Technologies",
    description:
      "Online Book Store with Integrated Coupon & Discount System.",
    url: "https://concepteurit.com/case-studies/thinkerslane",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinkerslane E-Commerce Case Study | Concepteur Technologies",
    description:
      "Online Book Store with Integrated Coupon & Discount System.",
  },
};

export default function Page() {
  return <ThinkerslaneCaseStudyClient />;
}
