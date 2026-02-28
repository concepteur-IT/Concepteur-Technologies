import Link from "next/link";
import React from "react";

const LearnMoreBtn = () => {
  return (
    <Link
      href="/about"
      className="inline-flex items-center justify-center whitespace-nowrap border border-gray-400 text-gray-800 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition duration-300"
    >
      Learn More
    </Link>
  );
};

export default LearnMoreBtn;
