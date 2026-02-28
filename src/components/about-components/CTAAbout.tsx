import Link from "next/link";
import React from "react";

const CTAAbout = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center space-y-5 md:space-y-6">
        <h3 className="text-xl sm:text-2xl font-light text-black">
          Ready to Build What’s Next?
        </h3>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-600 hover:text-black transition-colors"
        >
          Start a Conversation
          <span className="h-px w-8 bg-gray-400 transition-all duration-300 group-hover:w-14 group-hover:bg-black" />
        </Link>
      </div>
    </section>
  );
};

export default CTAAbout;
