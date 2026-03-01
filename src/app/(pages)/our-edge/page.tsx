import { Metadata } from "next";
import OurEdgeClient from "./client";

export const metadata: Metadata = {
  title: "Our Edge | Enterprise Advantage",
  description:
    "Discover the architectural discipline, structured execution, and specialized engineering that sets Concepteur Technologies apart.",
  alternates: {
    canonical: "/our-edge",
  },
};

export default function Page() {
  return <OurEdgeClient />;
}
