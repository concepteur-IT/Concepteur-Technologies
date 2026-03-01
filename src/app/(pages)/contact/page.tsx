import React from "react";
import ContactHero from "@/components/contact-components/ContactHero";
import ContactContact from "@/components/contact-components/ContactContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project",
  description:
    "Get in touch with Concepteur Technologies to discuss enterprise digital transformation, AI adoption, and scalable software solutions.",
  alternates: {
    canonical: "/contact",
  },
};
const page = () => {
  return (
    <main className="bg-white mt-12 sm:mt-14 md:mt-15">
      <ContactHero />
      <ContactContact />
    </main>
  );
};

export default page;
