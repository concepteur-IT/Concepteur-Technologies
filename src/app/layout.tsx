import "./globals.css";
import Footer from "@/components/layout-components/Footer";
import Navbar from "@/components/layout-components/Navbar";
import NavigationLoader from "@/components/layout-components/NavigationLoader";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concepteur IT",
  description: "Enterprise AI & ML Solutions",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationLoader />
        <Navbar />
        <div className="pt-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
