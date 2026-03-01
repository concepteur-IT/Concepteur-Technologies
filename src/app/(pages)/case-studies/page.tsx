import { Metadata } from "next";
import CaseStudiesClient from "./client";

export const metadata: Metadata = {
  title: "Case Studies | Client Success Stories",
  description:
    "Explore our portfolio of successful digital transformations, custom software, and AI implementations engineered for enterprise scale.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function Page() {
  return <CaseStudiesClient />;
}
