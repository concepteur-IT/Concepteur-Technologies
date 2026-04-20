"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "../logo-component/Logo";

const SlideLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group relative h-[20px] overflow-hidden inline-block text-gray-400"
  >
    <div className="flex flex-col transition-transform duration-[250ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
      <span className="h-[20px] flex items-center whitespace-nowrap">
        {children}
      </span>
      <span className="h-[20px] flex items-center whitespace-nowrap text-white">
        {children}
      </span>
    </div>
  </Link>
);

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black text-white mt-auto pt-20 md:pt-32 pb-8 overflow-hidden">
      <div className="w-full px-5 md:px-[15%]">
        {/* Top Huge CTA Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-white/10 pb-16 md:pb-20 mb-16 md:mb-20">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-medium mb-6">
              — INITIATE
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white">
              Ready to engineer <br className="hidden sm:block" /> the future?
            </h2>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/contact"
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-5 md:px-10 md:py-6 text-base font-medium hover:bg-gray-200 transition-colors custom-notch-tl-br"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4-Column Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16 md:pb-20 mb-10">
          <div className="flex flex-col pr-0 lg:pr-8">
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              We build architectural-grade digital solutions — from scalable web
              platforms to enterprise AI systems engineered for performance and
              precision.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-4 text-sm font-light">
              <li>
                <SlideLink href="/">Home</SlideLink>
              </li>
              <li>
                <SlideLink href="/company">Company</SlideLink>
              </li>
              <li>
                <SlideLink href="/capabilities">Capabilities</SlideLink>
              </li>
              <li>
                <SlideLink href="/case-studies">Work</SlideLink>
              </li>
              <li>
                <SlideLink href="/contact">Contact</SlideLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-6">
              Capabilities
            </h3>
            <ul className="flex flex-col space-y-4 text-sm font-light">
              <li>
                <SlideLink href="/capabilities/ai-intelligent-automation">
                  AI & Automation
                </SlideLink>
              </li>
              <li>
                <SlideLink href="/capabilities/next-gen-web-platforms">
                  Web Engineering
                </SlideLink>
              </li>
              <li>
                <SlideLink href="/capabilities/cross-platform-mobile-apps">
                  Mobile Ecosystems
                </SlideLink>
              </li>
              <li>
                <SlideLink href="/capabilities/api-driven-ecommerce-systems">
                  E-Commerce Layouts
                </SlideLink>
              </li>
              <li>
                <SlideLink href="/capabilities/cloud-infrastructure">
                  Cloud / DevOps
                </SlideLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-6">
              Connect
            </h3>
            <ul className="flex flex-col space-y-4 text-sm font-light">
              <li>
                <SlideLink href="mailto:info@concepteur.com">
                  info@concepteur.com
                </SlideLink>
              </li>
              <li>
                <SlideLink href="https://wa.me/919832996894">
                  +91 9832996894
                </SlideLink>
              </li>
              <li className="text-gray-400 leading-relaxed mt-2">
                Kajipara, Sukh Sagar Road,
                <br />
                Chakdaha, Nadia. 741222.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line & Massive Branding */}
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-gray-500 font-medium mb-16 md:mb-24">
            <p>© 2026 Concepteur Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Architectural Watermark / Logo */}
          <div className="w-full text-center flex justify-center items-center opacity-40 pointer-events-none select-none pt-10 pb-4">
            <div className="hidden md:block">
              <Logo scale={2.5} theme="dark" mobileCenter />
            </div>
            <div className="hidden sm:block md:hidden">
              <Logo scale={1.8} theme="dark" mobileCenter />
            </div>
            <div className="block sm:hidden">
              <Logo scale={1.2} theme="dark" mobileCenter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
