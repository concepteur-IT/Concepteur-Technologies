"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, BarChart3 } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("cookie_consent_update"));
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 w-full z-[9998] bg-white border-t border-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 md:py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-10">
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Cookie className="w-5 h-5 text-gray-900" />
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight">
                    Cookie Preferences
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-600 font-light leading-relaxed max-w-4xl">
                  We use cookies to improve your experience, analyze site
                  traffic, and support our marketing efforts. By clicking
                  &ldquo;Accept Cookies&rdquo;, you consent to our use of
                  cookies. Read our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-gray-900 font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    Privacy Policy
                  </a>{" "}
                  to learn more about how we protect your data.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex shrink-0 flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none text-sm font-medium text-gray-900 px-6 py-2.5 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 text-center"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none bg-gray-900 text-white text-sm font-medium px-6 py-2.5 border border-gray-900 hover:bg-black hover:border-black transition-all duration-200 text-center"
                >
                  Accept Cookies
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
