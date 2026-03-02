"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import Logo from "@/components/logo-component/Logo";
import WhatsAppIcon from "../ui-components/icons/WhatsAppIcon";

export default function Footer() {
  const pathname = usePathname();
  const mapsUrl = "https://maps.app.goo.gl/KnKUJXcJ6CHmmFHn7";

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#f3f3f3] border-t border-gray-200 mt-auto">
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
              to enterprise-grade AI systems designed for performance and
              growth.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-sm font-semibold text-black uppercase tracking-widest">
                Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:block md:space-y-3 text-sm text-gray-500 font-medium">
                <li>
                  <Link href="/" className="hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="hover:text-black transition-colors"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities"
                    className="hover:text-black transition-colors"
                  >
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="hover:text-black transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-black transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-edge"
                    className="hover:text-black transition-colors"
                  >
                    Our Edge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-black transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-sm font-semibold text-black uppercase tracking-widest">
                Capabilities
              </h3>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-3 md:block md:space-y-3 text-sm text-gray-500 font-medium">
                <li>
                  <Link
                    href="/capabilities/intelligent-automation-ai"
                    className="hover:text-black transition-colors"
                  >
                    AI and Automation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/next-gen-web-platforms"
                    className="hover:text-black transition-colors"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/cross-platform-mobile-apps"
                    className="hover:text-black transition-colors"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/api-driven-ecommerce-systems"
                    className="hover:text-black transition-colors"
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/api-first-backend-architecture"
                    className="hover:text-black transition-colors"
                  >
                    Server-side and Database
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/product-ui-ux-design"
                    className="hover:text-black transition-colors"
                  >
                    UI and UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/capabilities/cloud-infrastructure"
                    className="hover:text-black transition-colors"
                  >
                    Cloud and Infrastructure
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-sm font-semibold text-black uppercase tracking-widest">
                Get In Touch
              </h3>
              <ul className="space-y-3 md:space-y-3 text-sm text-gray-500 font-medium">
                <li>
                  <a
                    href="mailto:info@concepteur.com"
                    className="hover:text-black transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>info@concepteur.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919832996894"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors inline-flex items-center gap-2"
                    aria-label="Chat on WhatsApp at +91 9832996894"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>+91 9832996894</span>
                  </a>
                </li>
                <li>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:text-black transition-colors inline-flex items-start gap-2"
                    aria-label="Open headquarters location in Google Maps"
                  >
                    <MapPin className="w-4 h-4 mt-1 shrink-0" />
                    <span>
                      Bara Kajipara, Sukh Sagar Road,
                      <br />
                      741222. Chakdaha, Nadia.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 font-medium gap-4">
          <p className="text-center md:text-left">
            © 2025 Concepteur Technologies. All rights reserved.
          </p>

          <div className="grid grid-cols-1 gap-y-2 w-full max-w-xs md:flex md:w-auto md:max-w-none md:items-center md:justify-end md:gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-black transition-colors text-center md:text-left"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-black transition-colors text-center md:text-left"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
