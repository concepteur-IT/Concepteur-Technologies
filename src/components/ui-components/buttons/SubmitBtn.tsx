"use client";

import { ArrowRight } from "lucide-react";

interface SubmitBtnProps {
  label?: string;
  loading?: boolean;
  className?: string;
}

export default function SubmitBtn({
  label = "Initiate Project",
  loading = false,
}: SubmitBtnProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group w-full md:w-auto inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-5 md:px-10 md:py-6 text-base font-medium hover:bg-gray-800 transition-colors custom-notch-tl-br disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "SENDING..." : label}
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
