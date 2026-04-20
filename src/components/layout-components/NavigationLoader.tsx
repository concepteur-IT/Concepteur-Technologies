"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [readyPath, setReadyPath] = useState("");
  const [hasBootstrapped, setHasBootstrapped] = useState(false);

  const shouldBlockContent = !hasBootstrapped || pathname !== readyPath;

  useEffect(() => {
    if (!shouldBlockContent) return;

    const timer = setTimeout(() => {
      setReadyPath(pathname);
      setHasBootstrapped(true);
    }, 650);

    return () => clearTimeout(timer);
  }, [shouldBlockContent, pathname]);

  if (!shouldBlockContent) return null;

  const STAR_PATH =
    "M50 28 C54 40, 60 46, 72 50 C60 54, 54 60, 50 72 C46 60, 40 54, 28 50 C40 46, 46 40, 50 28 Z";

  return (
    <div className="fixed left-0 right-0 bottom-0 top-12 sm:top-14 md:top-15 z-[45] flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-12 h-12 sm:w-16 sm:h-16 animate-spin"
        >
          <circle cx="50" cy="50" r="48" fill="#0f1115" />
          <path
            d={STAR_PATH}
            fill="white"
            transform="translate(50 50) scale(0.95) translate(-50 -50)"
          />
        </svg>
      </div>
    </div>
  );
}
