"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, type MouseEvent } from "react";
import {
  Menu,
  X,
  BrainCircuit,
  AppWindow,
  Smartphone,
  Server,
  Cloud,
  ShoppingCart,
  PenTool,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/logo-component/Logo";
import { servicesData } from "@/data/servicesData";
import AnnouncementBanner from "./AnnouncementBanner";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(servicesData[0]);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const capabilityRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const handleCapabilityMouseLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget as Node | null;
    if (megaMenuRef.current && related && megaMenuRef.current.contains(related))
      return;
    setIsMegaMenuOpen(false);
  };

  const handleMegaMenuMouseLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget as Node | null;
    if (
      capabilityRef.current &&
      related &&
      capabilityRef.current.contains(related)
    )
      return;
    setIsMegaMenuOpen(false);
  };

  const navItems = [
    { name: "Company", href: "/company" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Our Edge", href: "/our-edge" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Blogs", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex flex-col">
      <AnnouncementBanner />

      {/* Main nav row */}
      <div className="w-full px-5 md:px-[15%] h-[60px] flex items-center justify-between shrink-0 border-b border-gray-100">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="inline-flex items-center shrink-0"
          onClick={handleLogoClick}
        >
          <div className="sm:hidden">
            <Logo scale={0.34} />
          </div>
          <div className="hidden sm:block">
            <Logo scale={0.4} />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-[24px] text-[17px] font-medium antialiased">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (item.name === "Capabilities") {
              return (
                <div
                  key={item.href}
                  ref={capabilityRef}
                  className="relative flex items-center cursor-pointer"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={handleCapabilityMouseLeave}
                >
                  <div
                    className={`flex items-center gap-1 ${isMegaMenuOpen || isActive ? "text-black" : "text-[#666]"}`}
                  >
                    <Link
                      href={item.href}
                      className="group relative h-[20px] overflow-hidden inline-block"
                    >
                      <div className="flex flex-col transition-transform duration-[180ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                        <span className="h-[20px] flex items-center whitespace-nowrap">
                          {item.name}
                        </span>
                        <span className="h-[20px] flex items-center whitespace-nowrap text-black">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180 text-black" : "text-[#666]"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative h-[20px] overflow-hidden inline-block ${isActive ? "text-black" : "text-[#666]"}`}
              >
                <div className="flex flex-col transition-transform duration-[180ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="h-[20px] flex items-center whitespace-nowrap text-black">
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center text-[17px] font-medium antialiased">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 text-black"
          >
            <div className="relative h-[20px] overflow-hidden">
              <div className="flex flex-col transition-transform duration-[180ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                <span className="h-[20px] flex items-center whitespace-nowrap">
                  Contact
                </span>
                <span className="h-[20px] flex items-center whitespace-nowrap">
                  Contact
                </span>
              </div>
            </div>
            <svg
              className="w-[18px] h-[18px] shrink-0 transition-transform duration-300 group-hover:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                d="M9 15L15 9M15 9H10M15 9V14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex flex-none shrink-0 items-center justify-center w-[76px] h-10 rounded-none border border-black text-black hover:bg-black hover:text-white transition-colors"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* ── Mega Menu — rendered as direct child of header, always below nav row ── */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            ref={megaMenuRef}
            key="mega-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block w-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-b border-gray-200"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <div className="w-full px-5 md:px-[15%] py-8 flex gap-10">
              {/* Left Section — Capabilities Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-3">
                  <h3 className="text-[12px] font-semibold tracking-widest uppercase text-black">
                    Capabilities
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      href={`/capabilities/${service.slug}`}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="group flex items-start gap-4 p-2.5 border border-transparent hover:border-gray-100 hover:bg-[#fafafa] transition-all duration-200"
                    >
                      <div className="relative w-[46px] h-[46px] shrink-0 bg-white border border-gray-200 flex items-center justify-center group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors duration-300 custom-notch-tl-br">
                        {service.id === "ai" && (
                          <BrainCircuit className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                        {service.id === "web" && (
                          <AppWindow className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                        {service.id === "mobile" && (
                          <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                        {service.id === "backend" && (
                          <Server className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                        {service.id === "cloud" && (
                          <Cloud className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                        {service.id === "ecommerce" && (
                          <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                        {service.id === "uiux" && (
                          <PenTool className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <div className="flex flex-col justify-center min-h-[46px]">
                        <h4 className="text-[14px] font-semibold text-gray-800 group-hover:text-black transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-[12px] text-gray-500 line-clamp-1 mt-0.5">
                          {service.shortDescription.split(".")[0]}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* 8th Slot: Explore All */}
                  <Link
                    href="/capabilities"
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="group flex items-center justify-between p-2.5 border border-transparent hover:border-black hover:bg-black transition-all duration-300 h-full"
                  >
                    <span className="text-[13px] font-semibold uppercase tracking-widest text-black group-hover:text-white transition-colors pl-2">
                      Explore All Capabilities
                    </span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-white/30 transition-colors shrink-0">
                      <svg
                        className="w-3.5 h-3.5 text-black group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Section — Featured Highlight */}
              <div className="w-[320px] shrink-0 bg-[#111] p-7 text-white flex flex-col justify-between relative overflow-hidden group/featured">
                <svg
                  className="absolute top-0 left-0 w-[35px] h-[35px] text-white fill-current pointer-events-none"
                  viewBox="0 0 50 50"
                >
                  <path d="M 0 0 L 38.73 0 A 10 10 0 0 0 29.05 7.5 A 30 30 0 0 1 7.5 29.05 A 10 10 0 0 0 0 38.73 Z" />
                </svg>

                {/* Subtle background glow effect */}
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover/featured:bg-white/10 transition-colors duration-700 pointer-events-none" />

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    Our Engineering Edge
                  </h4>
                  <h3 className="text-[22px] font-light leading-snug mb-3 text-white">
                    Building resilient systems for the modern web.
                  </h3>
                  <p className="text-[13px] text-gray-400 leading-relaxed font-light">
                    We specialize in scalable architecture, intelligent
                    automation, and premium UI/UX design.
                  </p>
                </div>

                <Link
                  href="/our-edge"
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="group/btn inline-flex items-center gap-2 text-[12px] font-semibold text-white uppercase tracking-widest mt-8 pb-1 border-b border-white/20 hover:border-white transition-colors w-fit"
                >
                  Discover the edge
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      <div
        id="mobile-nav"
        className={`md:hidden bg-white transition-all duration-300 ease-out overflow-hidden ${isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="px-5 py-6 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            if (item.name === "Capabilities") {
              return (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-[17px] font-medium py-2.5 transition-colors ${isActive ? "text-black" : "text-[#666]"}`}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 flex flex-col gap-0.5 mb-1">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        href={`/capabilities/${service.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 py-2 text-[13px] text-[#888] hover:text-black transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[17px] font-medium py-2.5 transition-colors ${isActive ? "text-black" : "text-[#666]"}`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Mobile Contact */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 text-[17px] font-medium text-black py-2.5 mt-2 border-t border-[#eee] pt-4"
          >
            <svg
              className="w-[16px] h-[16px] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                d="M9 15L15 9M15 9H10M15 9V14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
