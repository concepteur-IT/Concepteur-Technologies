import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout-components/Footer";
import Navbar from "@/components/layout-components/Navbar";
import NavigationLoader from "@/components/layout-components/NavigationLoader";
import GoogleAnalytics from "@/components/layout-components/GoogleAnalytics";
import CookieConsent from "@/components/layout-components/CookieConsent";
import ChatBot from "@/components/ui-components/ChatBot";
import localFont from "next/font/local";
import SmoothScroll from "@/components/smoothScroll";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const siteUrl = "https://concepteurit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Concepteur Technologies | AI, Web, Mobile & Software Development Company",
    template: "%s | Concepteur Technologies",
  },

  description:
    "Concepteur Technologies is a software development company delivering AI solutions, intelligent automation, scalable web platforms, mobile applications, API-first backend systems, cloud infrastructure, e-commerce solutions, and UI/UX design.",

  keywords: [
    "Concepteur Technologies",
    "software development company",
    "AI development company",
    "AI automation services",
    "custom AI agent development",
    "generative AI development",
    "RAG development",
    "MCP development",
    "web development company",
    "Next.js development",
    "React development",
    "custom web application development",
    "mobile app development",
    "React Native development",
    "Flutter app development",
    "backend development",
    "API development",
    "Node.js development",
    "cloud infrastructure services",
    "AWS development",
    "DevOps services",
    "e-commerce development",
    "custom software development",
    "UI UX design services",
    "enterprise software development",
    "software company in India",
    "technology company in West Bengal",
    "software company in Chakdaha",
  ],

  authors: [
    {
      name: "Concepteur Technologies",
      url: siteUrl,
    },
  ],

  creator: "Concepteur Technologies",

  publisher: "Concepteur Technologies",

  category: "Technology",

  applicationName: "Concepteur Technologies",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Concepteur Technologies",

    title:
      "Concepteur Technologies | Transforming Ideas Into Digital Reality",

    description:
      "Innovative software solutions for AI, intelligent automation, enterprise web platforms, mobile applications, API-first backend systems, cloud infrastructure, e-commerce, and UI/UX design.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Concepteur Technologies - Software, AI, Web and Mobile Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Concepteur Technologies | AI, Web, Mobile & Software Development",

    description:
      "Building innovative AI systems, scalable web platforms, mobile applications, enterprise software, cloud infrastructure, and API-driven solutions.",

    images: ["/og-image.jpg"],

    creator: "@concepteurit",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    // Add your verification codes after connecting the website
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },

  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Chakdaha, Nadia, West Bengal",
    "geo.position": "23.08;88.52",
    ICBM: "23.08, 88.52",
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
      <body className={`${satoshi.className} bg-white`}>
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
        <SmoothScroll />
      </body>
    </html>
  );
}
