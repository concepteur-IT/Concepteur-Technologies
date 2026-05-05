"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/logo-component/Logo";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [readyPath, setReadyPath] = useState("");
  const [hasBootstrapped, setHasBootstrapped] = useState(false);
  const isPopState = useRef(false);

  // Detect browser back/forward navigation to avoid freezing the loader
  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Block content (show loader) on initial load OR if the path changed normally (not via back button)
  const shouldBlockContent =
    !hasBootstrapped || (pathname !== readyPath && !isPopState.current);

  useEffect(() => {
    // If the path changed due to a back button click, just sync the path and skip the loader
    if (isPopState.current && pathname !== readyPath) {
      setReadyPath(pathname);
      // We reset isPopState slightly later to allow Next.js to fully commit the route
      setTimeout(() => {
        isPopState.current = false;
      }, 50);
      return;
    }

    if (!shouldBlockContent) return;

    const timer = setTimeout(() => {
      setReadyPath(pathname);
      setHasBootstrapped(true);
    }, 450);

    return () => clearTimeout(timer);
  }, [shouldBlockContent, pathname, readyPath]);

  return (
    <AnimatePresence mode="wait">
      {shouldBlockContent && (
        <motion.div
          key="loader"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* Centered Logo with continuous zoom */}
          <motion.div
            className="relative z-10 pointer-events-none"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Logo theme="dark" scale={1.1} mobileCenter={true} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
