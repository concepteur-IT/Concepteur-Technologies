"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    setVisible(true);

    const timer = setTimeout(() => {
      setLoading(false);
      // Keep visible briefly for fade-out
      setTimeout(() => setVisible(false), 500);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          {/* Minimalist Spinner */}
          <div className="relative flex items-center justify-center">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="absolute w-12 h-12 rounded-full border-[2px] border-gray-200 border-t-black border-r-black"
            />
            {/* Inner pulsing dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-black rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
