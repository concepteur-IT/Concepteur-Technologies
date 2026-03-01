import Link from "next/link";
import { ArrowLeft, ArrowUpRight, AlertCircle, ArrowRight } from "lucide-react";
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
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white font-sans">
      {/* Back Navigation */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase hover:text-gray-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Origin
        </Link>
      </div>

      {/* Header Section */}
      <header className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-b border-black pb-12">
          {/* Left Block */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-black mb-6 border border-black/10 px-3 py-1">
                HTTP: 404
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none mb-8">
                Target Missing.
              </h1>
            </div>
          </div>

          {/* Right Block (Metadata-style box) */}
          <div className="lg:col-span-5 flex flex-col justify-end gap-10">
            <p className="text-xl text-gray-500 font-light tracking-tight leading-relaxed max-w-md">
              The requested directory or route could not be evaluated by the
              server mapping.
            </p>

            <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-gray-500 border border-black/10 p-6 bg-gray-50">
              <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
                <span>Status</span>
                <span className="text-black text-right font-bold">
                  Not Found
                </span>
              </div>
              <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
                <span>Severity</span>
                <span className="text-black text-right font-bold">
                  Client Fault
                </span>
              </div>
              <div className="flex justify-between gap-12 border-b border-black/10 pb-2">
                <span>Domain</span>
                <span className="text-black text-right lowercase selection:bg-black selection:text-white">
                  concepteurit.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 max-w-7xl mx-auto pb-40">
        {/* Action Grid */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-black/10 flex items-center gap-3">
            <span className="w-2 h-2 border border-black" /> 01 Primary
            Redirects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Home", href: "/", num: "01" },
              { title: "Capabilities", href: "/capabilities", num: "02" },
              { title: "Case Studies", href: "/case-studies", num: "03" },
              { title: "Contact", href: "/contact", num: "04" },
            ].map((route) => (
              <Link
                key={route.num}
                href={route.href}
                className="group border border-black/10 p-8 flex flex-col justify-between h-48 bg-gray-50 hover:bg-black hover:border-black transition-colors duration-300 relative overflow-hidden"
              >
                <div className="text-xs font-mono text-gray-400 group-hover:text-white/50 tracking-widest uppercase transition-colors">
                  Path {route.num}
                </div>
                <div className="space-y-4 relative z-10 w-full">
                  <span className="block text-2xl font-light text-black group-hover:text-white tracking-tight transition-colors">
                    {route.title}
                  </span>
                  <div className="w-6 h-px bg-black group-hover:bg-white/30 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
                <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-transparent group-hover:text-white transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </section>

        {/* Diagnosis Block */}
        <section className="mb-24 md:mb-32 border-t border-black pt-8">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 hidden md:block">
              <h2 className="text-sm font-semibold uppercase tracking-widest font-mono sticky top-32 flex items-center gap-3">
                <span className="w-2 h-2 bg-black rounded-full" /> 02 Diagnosis
              </h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-4xl md:text-5xl font-serif tracking-tight mb-8">
                Routing issue detected.
              </h3>

              <div className="p-8 md:p-12 border border-black/10 bg-white shadow-xs hover:border-black transition-colors">
                <h5 className="text-xs font-semibold uppercase tracking-widest text-black mb-8 flex items-center gap-2 pb-4 border-b border-black/10">
                  <AlertCircle className="w-4 h-4" /> System Trace
                </h5>
                <div className="space-y-6 text-lg md:text-xl font-light text-gray-600 mb-12">
                  <p className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0 flex mt-2" />
                    The client successfully reached the domain architecture, but
                    the assigned URI could not be mapped to any valid
                    components.
                  </p>
                  <p className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0 flex mt-2" />
                    This is usually the result of a deprecated pathway, an
                    inaccurate URL request, or a backend deletion of the
                    requested resource.
                  </p>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-between border border-black bg-white hover:bg-black hover:text-white px-8 py-5 transition-colors duration-300 w-full sm:w-auto min-w-[250px]"
                  >
                    <span className="text-sm font-semibold uppercase tracking-widest">
                      Submit Support Ticket
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
