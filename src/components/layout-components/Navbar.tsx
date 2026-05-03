"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo-component/Logo";
import LetsTalkBtn from "../ui-components/buttons/LetsTalkBtn";
import { servicesData } from "@/data/servicesData";
import AnnouncementBanner from "./AnnouncementBanner";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const navItems = [
    { name: "Company", href: "/company" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Our Edge", href: "/our-edge" },
    { name: "Blog", href: "/blog" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex flex-col">
      <AnnouncementBanner />
      <div className="w-full px-5 md:px-[15%] h-[60px] flex items-center justify-between shrink-0">
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
        <nav className="hidden md:flex items-center ml-[28%] gap-[24px] text-[17px] font-medium antialiased">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (item.name === "Capabilities") {
              return (
                <div
                  key={item.href}
                  className="group relative flex items-center cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className={`relative h-[20px] overflow-hidden inline-block ${isActive ? "text-black" : "text-[#666]"}`}
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

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="w-[240px] bg-white rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2">
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          href={`/capabilities/${service.slug}`}
                          className="flex items-center gap-2.5 px-5 py-2.5 text-[14px] text-[#888] hover:text-black hover:pl-6 transition-all duration-200 group/item"
                        >
                          <svg className="w-[14px] h-[14px] shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9 15L15 9M15 9H10M15 9V14" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {service.title}
                        </Link>
                      ))}
                    </div>
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
            className="group inline-flex items-center gap-2 text-black"
          >
            <svg className="w-[18px] h-[18px] shrink-0 transition-transform duration-200 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 15L15 9M15 9H10M15 9V14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="relative h-[20px] overflow-hidden">
              <div className="flex flex-col transition-transform duration-[180ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                <span className="h-[20px] flex items-center whitespace-nowrap">Contact</span>
                <span className="h-[20px] flex items-center whitespace-nowrap">Contact</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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
                        className="flex items-center gap-2.5 py-2 text-[14px] text-[#888] hover:text-black transition-colors"
                      >
                        <svg className="w-[13px] h-[13px] shrink-0 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9 15L15 9M15 9H10M15 9V14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
            <svg className="w-[16px] h-[16px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 15L15 9M15 9H10M15 9V14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
