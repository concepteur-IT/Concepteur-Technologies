import Link from "next/link";
import React from "react";

const LearnMoreBtn = () => {
  return (
    <Link
      href="/about-us"
      className="group inline-flex items-center gap-2 justify-center whitespace-nowrap bg-white text-black text-sm font-medium h-[44px] px-6 border border-black rounded-none transition-all duration-200 ease-in-out hover:bg-black hover:text-white active:opacity-90"
    >
      Learn More
      <svg
        className="w-[14px] h-[14px] shrink-0 transition-transform duration-300 group-hover:rotate-45"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          d="M9 15L15 9M15 9H10M15 9V14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default LearnMoreBtn;
