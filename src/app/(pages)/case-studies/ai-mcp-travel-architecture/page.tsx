import { Metadata } from "next";
import NomadQuestCaseStudyClient from "./client";

export const metadata: Metadata = {
  title: "Case Study: AI Travel Infrastructure with MCP | NomadQuest",
  description:
    "How Concepteur Technologies transformed a legacy travel platform into an AI-native MCP architecture with Azure APIM and secure Stripe payment isolation.",
  keywords: [
    "AI travel architecture",
    "Model Context Protocol MCP",
    "Azure APIM AI integration",
    "Stripe AI payment workflow",
    "NomadQuest case study",
    "Concepteur Technologies case study"
  ],
  alternates: {
    canonical: "/case-studies/ai-mcp-travel-architecture",
  },
  openGraph: {
    title: "AI Travel Infrastructure with MCP | Concepteur Technologies Case Study",
    description:
      "A complete architectural transformation from REST APIs to a modular, AI-native MCP powered travel platform.",
    url: "https://concepteurit.com/case-studies/ai-mcp-travel-architecture",
    siteName: "Concepteur Technologies",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Travel Infrastructure with MCP | Concepteur Technologies Case Study",
    description:
      "A complete architectural transformation from REST APIs to a modular, AI-native MCP powered travel platform.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "AI – Redefining Travel Infrastructure with MCP",
    description:
      "Architectural transformation from legacy REST-based services to a modular, AI-native MCP-powered travel platform.",
    author: {
      "@type": "Organization",
      name: "Concepteur Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Concepteur Technologies",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NomadQuestCaseStudyClient />
    </>
  );
}
