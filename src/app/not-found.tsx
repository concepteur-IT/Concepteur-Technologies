import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen text-black font-sans flex flex-col justify-center pb-20">
      {/* Main Container */}
      <main className="px-6 md:px-[15%] w-full pt-32 md:pt-40 flex flex-col items-center text-center">
        <h1 className="text-[120px] md:text-[200px] leading-none font-medium tracking-tighter text-gray-100 select-none">
          404
        </h1>
        
        <div className="-mt-8 md:-mt-16 z-10 flex flex-col items-center">
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-medium mb-6">
            — PAGE NOT FOUND
          </p>
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-black mb-6">
            We couldn't find that page.
          </h2>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-12 font-light">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 md:px-10 md:py-5 text-base font-medium hover:bg-gray-800 transition-colors custom-notch-tl-br"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Homepage
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black border border-gray-200 px-8 py-4 md:px-10 md:py-5 text-base font-medium hover:bg-gray-50 transition-colors custom-notch-tl-br"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
