import type { Metadata } from "next";
import { TermsClient } from "./client";

export const metadata: Metadata = {
  title: "Terms of Service | Concepteur Technologies",
  description:
    "Review the terms and conditions governing the use of Concepteur Technologies services and website.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Concepteur Technologies",
    description:
      "Review the terms and conditions governing the use of Concepteur Technologies services and website.",
    url: "https://concepteurit.com/terms-of-service",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Concepteur Technologies",
    description:
      "Review the terms and conditions governing the use of Concepteur Technologies services and website.",
  },
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}

