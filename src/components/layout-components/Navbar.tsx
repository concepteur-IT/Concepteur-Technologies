"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo-component/Logo";
import LetsTalkBtn from "../ui-components/buttons/LetsTalkBtn";
import { servicesData } from "@/data/servicesData";

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
    // { name: "Blog", href: "/blog" }
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f3f3f3] border-b border-gray-200">
      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 md:px-8 h-12 sm:h-14 md:h-15 flex items-center justify-between gap-2 sm:gap-3">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center flex-1 min-w-0 max-w-[calc(100%-84px)] sm:max-w-none overflow-hidden md:flex-none md:overflow-visible z-10"
          onClick={handleLogoClick}
        >
          <div className="sm:hidden">
            <Logo scale={0.34} />
          </div>
          <div className="hidden sm:block">
            <Logo scale={0.4} />
          </div>
        </Link>

        {/* Centered Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center h-full gap-10 text-[14px] font-medium">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            if (item.name === "Capabilities") {
              return (
                <div
                  key={item.href}
                  className="group relative h-full flex items-center cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className={`
                      relative transition-colors duration-200 py-4
                      ${isActive ? "text-black" : "text-gray-600 hover:text-black"}
                      
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[1.5px] after:bg-black
                      after:transition-all after:duration-300
                      
                      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-1/2 group-hover:after:w-1/2"}
                    `}
                  >
                    {item.name}
                  </Link>

                  {/* Square Minimalist Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white border border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 shadow-sm pointer-events-none group-hover:pointer-events-auto">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        href={`/capabilities/${service.slug}`}
                        className="px-4 py-3 text-[13px] text-gray-500 hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                      >
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
                className={`
                  relative transition-colors duration-200 flex items-center h-full
                  ${isActive ? "text-black" : "text-gray-600 hover:text-black"}
                  
                  after:absolute after:left-0 after:bottom-[calc(50%-12px)]
                  after:h-[1.5px] after:bg-black
                  after:transition-all after:duration-300
                  
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-1/2"}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center z-10">
          <LetsTalkBtn />
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
        className={`md:hidden border-t border-gray-200 bg-[#f3f3f3] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium rounded-lg px-3 py-2 transition-colors ${isActive ? "text-black bg-white" : "text-gray-600 hover:text-black hover:bg-white/80"}`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <LetsTalkBtn onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
}
