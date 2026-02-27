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
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9997] bg-black/20 backdrop-blur-[2px]"
            onClick={handleDecline}
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 120, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 120, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[9998] px-4 pb-6 md:px-8 md:pb-8"
          >
            <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.12)] overflow-hidden">
              {/* Top Accent Strip */}
              <div className="h-1 bg-gradient-to-r from-black via-gray-400 to-black" />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black tracking-tight">
                      Your Privacy Matters
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      We believe in transparency about how we collect and use
                      your data.
                    </p>
                  </div>
                </div>

                {/* Policy Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <Shield className="w-5 h-5 text-black mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Essential Cookies
                      </p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Required for core site functionality such as navigation,
                        security, and accessibility. These cannot be disabled.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <BarChart3 className="w-5 h-5 text-black mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Analytics & Performance
                      </p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Google Analytics helps us understand how visitors
                        interact with our site so we can improve your
                        experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
                  By clicking &ldquo;Accept All&rdquo;, you consent to the use
                  of cookies for analytics and site improvement. We never sell
                  your personal data. You can change your preferences at any
                  time. Read our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
                  >
                    Privacy Policy
                  </a>{" "}
                  for more details.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none bg-black text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-neutral-800 transition-colors duration-200 text-center"
                  >
                    Accept All Cookies
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 sm:flex-none text-sm font-semibold text-gray-500 px-8 py-3 rounded-xl border border-gray-200 hover:border-black hover:text-black transition-all duration-200 text-center"
                  >
                    Essential Only
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
