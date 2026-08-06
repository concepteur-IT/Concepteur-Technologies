import { Metadata } from "next";
import KeysaleProCaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: Keysale Pro Retail Platform",
  description:
    "Discover how Concepteur Technologies engineered Keysale Pro - a scalable retail platform with custom inventory, payments, and API architecture.",
  keywords: [
    "Keysale Pro case study",
    "retail software platform",
    "inventory API architecture",
    "React Angular Yii development",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/keysale-pro",
  },
  openGraph: {
    title: "Keysale Pro Case Study | Concepteur Technologies",
    description:
      "A scalable retail platform with custom inventory, payments, and API architecture.",
    url: "https://concepteurit.com/case-studies/keysale-pro",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keysale Pro Case Study | Concepteur Technologies",
    description:
      "A scalable retail platform with custom inventory, payments, and API architecture.",
  },
};

export default function Page() {
  return <KeysaleProCaseStudyClient />;
}
