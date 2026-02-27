"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo-component/Logo";
import LetsTalkBtn from "../ui-components/buttons/LetsTalkBtn";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    // { name: "Blog", href: "/blog" }
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f3f3f3]/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 h-15 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center"
        >
          <Logo />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-[14px] font-medium">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative transition-colors duration-200
                  ${isActive ? "text-black" : "text-gray-600 hover:text-black"}
                  
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[1.5px] after:bg-black
                  after:transition-all after:duration-300
                  
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-1/2"}
                `}
              >
                {item.name}
              </Link>
            );
          })}

          <LetsTalkBtn />
        </nav>
      </div>
    </header>
  );
}
