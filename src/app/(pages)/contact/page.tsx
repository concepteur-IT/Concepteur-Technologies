import ContactSection from "@/components/home-components/ContactSection";
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
    <main className="bg-white">
      <ContactSection />
    </main>
  );
};

export default page;
