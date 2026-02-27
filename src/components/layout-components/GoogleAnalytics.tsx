"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-JHNJ253JLL"; // Replace with your Measurement ID

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (stored === "accepted") {
      setConsent(true);
    }

    // Listen for consent changes from CookieConsent component
    const handleConsent = () => {
      const updated = localStorage.getItem("cookie_consent");
      if (updated === "accepted") setConsent(true);
    };

    window.addEventListener("cookie_consent_update", handleConsent);
    return () =>
      window.removeEventListener("cookie_consent_update", handleConsent);
  }, []);

  if (!consent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
