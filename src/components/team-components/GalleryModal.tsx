"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type TooltipData = {
  x: number; // percentage
  y: number; // percentage
  name: string;
  slug: string;
};

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  tooltips: TooltipData[];
}

export default function GalleryModal({
  isOpen,
  onClose,
  imageSrc,
  tooltips,
}: GalleryModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors p-2"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-[95vw] h-[85vh] max-w-6xl z-10 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt="Team Preview"
                fill
                className="object-contain"
                priority
              />

              {/* Tooltips */}
              {tooltips.map((tooltip, idx) => (
                <div
                  key={idx}
                  className="absolute z-20 group"
                  style={{
                    left: `${tooltip.x}%`,
                    top: `${tooltip.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulsing Dot */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-8 h-8 bg-white/30 rounded-full animate-ping" />
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border border-gray-200" />

                    {/* Hover Card */}
                    <Link
                      href={`/who-we-are/${tooltip.slug}`}
                      className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    >
                      <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-gray-200 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">
                          {tooltip.name}
                        </span>
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
