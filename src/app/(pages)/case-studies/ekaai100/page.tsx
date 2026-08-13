import { Metadata } from "next";
import Ekaai100CaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: Ekaai100 | Decorator Booking Web Platform",
  description:
    "Explore how Concepteur Technologies developed Ekaai100, a scalable decorator booking web application connecting users with event decor specialists.",
  keywords: [
    "Ekaai100 case study",
    "decorator booking application",
    "event management software",
    "WordPress development",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/ekaai100",
  },
  openGraph: {
    title: "Ekaai100 Case Study | Concepteur Technologies",
    description:
      "A decorator booking web application connecting users with event specialists.",
    url: "https://concepteurit.com/case-studies/ekaai100",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekaai100 Case Study | Concepteur Technologies",
    description:
      "A decorator booking web application connecting users with event specialists.",
  },
};

export default function Page() {
  return <Ekaai100CaseStudyClient />;
}
