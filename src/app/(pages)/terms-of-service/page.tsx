import type { Metadata } from "next";
import { TermsClient } from "./client";

export const metadata: Metadata = {
  title: "Terms of Service | Concepteur",
  description:
    "Review the terms and conditions governing the use of Concepteur services and website.",
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}

