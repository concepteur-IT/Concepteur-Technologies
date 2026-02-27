"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Spiral Globe Loader */}
      <div className="relative w-16 h-16">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-spin"
          style={{ animationDuration: "2s" }}
        >
          {/* Outer ring */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            opacity="0.15"
          />

          {/* Spinning arc 1 — main */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 204"
          />

          {/* Inner orbit ring */}
          <ellipse
            cx="50"
            cy="50"
            rx="28"
            ry="42"
            fill="none"
            stroke="black"
            strokeWidth="1"
            opacity="0.12"
            className="animate-[spin_3s_linear_reverse_infinite]"
          />

          {/* Spiral meridian 1 */}
          <ellipse
            cx="50"
            cy="50"
            rx="14"
            ry="42"
            fill="none"
            stroke="black"
            strokeWidth="1"
            opacity="0.1"
          />

          {/* Equator line */}
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="12"
            fill="none"
            stroke="black"
            strokeWidth="1"
            opacity="0.1"
          />

          {/* Spinning arc 2 — counter orbit */}
          <ellipse
            cx="50"
            cy="50"
            rx="28"
            ry="42"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="40 180"
            className="animate-[spin_2.5s_linear_reverse_infinite]"
          />

          {/* Center dot */}
          <circle cx="50" cy="50" r="3" fill="black" />
        </svg>
      </div>
    </div>
  );
}
