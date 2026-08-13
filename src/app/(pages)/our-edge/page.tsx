import { Metadata } from "next";
import OurEdgeClient from "./client";

export const metadata: Metadata = {
  title: "Our Edge | Enterprise Advantage & Engineering Discipline",
  description:
    "Discover the architectural discipline, structured execution, and specialized software engineering that sets Concepteur Technologies apart.",
  keywords: [
    "Our Edge",
    "Enterprise Advantage",
    "Architectural Discipline",
    "Engineering Excellence",
    "Concepteur Technologies competitive edge"
  ],
  alternates: {
    canonical: "/our-edge",
  },
  openGraph: {
    title: "Our Edge | Enterprise Advantage | Concepteur Technologies",
    description:
      "Discover the architectural discipline, structured execution, and specialized engineering that sets Concepteur Technologies apart.",
    url: "https://concepteurit.com/our-edge",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Edge | Enterprise Advantage | Concepteur Technologies",
    description:
      "Discover the architectural discipline, structured execution, and specialized engineering that sets Concepteur Technologies apart.",
  },
};

export default function Page() {
  return <OurEdgeClient />;
}
