"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent } from "react";
import Logo from "@/components/logo-component/Logo";

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-linear-to-b from-[#f5f5f5]/90 to-[#eaeaea]/90 backdrop-blur-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16 text-center md:text-left">
          <div className="space-y-6 max-w-sm mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex w-full items-center justify-center md:w-auto md:justify-start"
              onClick={handleLogoClick}
            >
              <Logo scale={0.56} mobileCenter />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              We build modern, scalable digital solutions from web applications
              to enterprise-grade AI systems designed for performance and growth.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg font-bold text-black">Company</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:block md:space-y-4 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-black">Home</Link></li>
                <li><Link href="/about" className="hover:text-black">About Us</Link></li>
                <li><Link href="/services" className="hover:text-black">Services</Link></li>
                <li><Link href="/case-studies" className="hover:text-black">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg font-bold text-black">Services</h3>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 md:block md:space-y-4 text-sm text-gray-600">
                <li><Link href="/services/ai-intelligent-automation" className="hover:text-black">AI and Automation</Link></li>
                <li><Link href="/services/next-gen-web-platforms" className="hover:text-black">Website Development</Link></li>
                <li><Link href="/services/cross-platform-mobile-apps" className="hover:text-black">Mobile App Development</Link></li>
                <li><Link href="/services/api-driven-ecommerce-systems" className="hover:text-black">E-Commerce</Link></li>
                <li><Link href="/services/api-first-backend-architecture" className="hover:text-black">Server-side and Database</Link></li>
                <li><Link href="/services/product-ui-ux-design" className="hover:text-black">UI and UX Design</Link></li>
                <li><Link href="/services/cloud-infrastructure" className="hover:text-black">Cloud and Infrastructure</Link></li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6 sm:col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold text-black">Get In Touch</h3>
              <ul className="space-y-3 md:space-y-4 text-sm text-gray-600">
                <li>info@concepteurit.com</li>
                <li>Kolkata, India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 gap-4">
          <p className="text-center md:text-left">Copyright 2025 Concepture. All rights reserved.</p>

          <div className="grid grid-cols-1 gap-y-2 w-full max-w-xs md:flex md:w-auto md:max-w-none md:items-center md:justify-end md:gap-6">
            <Link href="/privacy-policy" className="hover:text-black transition-colors text-center md:text-left">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-black transition-colors text-center md:text-left">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
