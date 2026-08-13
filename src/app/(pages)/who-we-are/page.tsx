import { Metadata } from "next";
import WhoWeAreClient from "./client";

export const metadata: Metadata = {
  title: "Who We Are | Our Team & Engineering Culture",
  description:
    "Meet the minds behind Concepteur Technologies. A collective of engineers, designers, and strategists building resilient digital infrastructure and premium software.",
  keywords: [
    "Concepteur Technologies team",
    "software engineering team",
    "tech leaders India",
    "software developers West Bengal",
    "engineering culture"
  ],
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are | Concepteur Technologies",
    description:
      "A collective of engineers, designers, and strategists committed to building resilient digital infrastructure and premium user experiences.",
    url: "https://concepteurit.com/who-we-are",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Are | Concepteur Technologies",
    description:
      "A collective of engineers, designers, and strategists committed to building resilient digital infrastructure and premium user experiences.",
  },
};

export default function Page() {
  return <WhoWeAreClient />;
}
