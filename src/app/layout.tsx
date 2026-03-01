import "./globals.css";
import Footer from "@/components/layout-components/Footer";
import Navbar from "@/components/layout-components/Navbar";
import NavigationLoader from "@/components/layout-components/NavigationLoader";
import GoogleAnalytics from "@/components/layout-components/GoogleAnalytics";
import CookieConsent from "@/components/layout-components/CookieConsent";
import ChatBot from "@/components/ui-components/ChatBot";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://concepteurit.com"),
  title: {
    default: "Concepteur Technologies",
    template: "%s | Concepteur Technologies",
  },
  description:
    "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://concepteurit.com",
    title: "Concepteur Technologies",
    description:
      "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
    siteName: "Concepteur Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concepteur Technologies",
    description:
      "Engineering-led AI technology company delivering scalable systems, intelligent automation, and enterprise-grade digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Concepteur Technologies",
    url: "https://concepteurit.com",
    logo: "https://concepteurit.com/logo.png",
    sameAs: [],
  };
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        <NavigationLoader />
        <Navbar />
        <div className="pt-0">{children}</div>
        <Footer />
        <CookieConsent />
        <ChatBot />
      </body>
    </html>
  );
}
