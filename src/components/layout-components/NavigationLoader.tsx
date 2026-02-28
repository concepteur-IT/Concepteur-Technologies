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

  return (
    <div className="fixed left-0 right-0 bottom-0 top-12 sm:top-14 md:top-15 z-[45] flex items-center justify-center bg-white">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-12 h-12 rounded-full border-[2px] border-gray-200 border-t-black border-r-black animate-spin" />
        <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
      </div>
    </div>
  );
}
