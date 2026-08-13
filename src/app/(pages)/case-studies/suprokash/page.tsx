import { Metadata } from "next";
import SuprokashCaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: Suprokash Mobile Bookstore Billing Ecosystem",
  description:
    "A comprehensive retail bookstore billing mobile application built with React Native and CodeIgniter 4 by Concepteur Technologies.",
  keywords: [
    "Suprokash case study",
    "bookstore billing app",
    "React Native mobile application",
    "CodeIgniter 4 backend API",
    "retail POS barcode scanner",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/suprokash",
  },
  openGraph: {
    title: "Suprokash Mobile Billing Ecosystem | Concepteur Technologies Case Study",
    description:
      "Modernizing retail bookstore operations through a mobile-first billing ecosystem.",
    url: "https://concepteurit.com/case-studies/suprokash",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suprokash Mobile Billing Ecosystem | Concepteur Technologies Case Study",
    description:
      "Modernizing retail bookstore operations through a mobile-first billing ecosystem.",
  },
};

export default function Page() {
  return <SuprokashCaseStudyClient />;
}
