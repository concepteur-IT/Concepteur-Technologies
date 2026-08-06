import ContactSection from "@/components/home-components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start a Software Project & Enterprise Inquiry",
  description:
    "Get in touch with Concepteur Technologies to discuss enterprise digital transformation, AI adoption, cloud architecture, and custom software engineering.",
  keywords: [
    "Contact Concepteur Technologies",
    "Hire software engineers India",
    "Software consultancy inquiry",
    "AI software consultation",
    "Concepteur contact number email"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Concepteur Technologies | Start a Project",
    description:
      "Get in touch with Concepteur Technologies to discuss enterprise digital transformation, AI adoption, and scalable software solutions.",
    url: "https://concepteurit.com/contact",
    siteName: "Concepteur Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Concepteur Technologies | Start a Project",
    description:
      "Get in touch with Concepteur Technologies to discuss enterprise digital transformation, AI adoption, and scalable software solutions.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Concepteur Technologies",
  url: "https://concepteurit.com/contact",
  description:
    "Get in touch with Concepteur Technologies to discuss enterprise digital transformation, AI adoption, and scalable software solutions.",
  mainEntity: {
    "@type": "Organization",
    name: "Concepteur Technologies",
    email: "contact@concepteurit.com",
    telephone: "+91 9775949574",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalyani",
      addressLocality: "Nadia",
      addressRegion: "West Bengal",
      postalCode: "741235",
      addressCountry: "IN",
    },
  },
};

const page = () => {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactSection />
    </main>
  );
};

export default page;
