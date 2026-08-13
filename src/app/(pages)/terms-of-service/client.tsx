"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p className="mb-4">
          By accessing or using our website and services, you agree to be bound
          by these Terms of Service and all applicable laws and regulations. If
          you do not agree with any part of these terms, you may not use our
          services.
        </p>
        <p>
          We reserve the right to update and change these Terms of Service from
          time to time without notice. Any new features that augment or enhance
          the current service shall be subject to the Terms of Service.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Services Provided",
    content: (
      <>
        <p className="mb-4">
          Concepteur provides digital services including but not limited to web
          development, application development, AI solutions, consulting, and
          related technical architecture services.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of
          our services at our sole discretion, without prior notice or liability
          to you or any third party.
        </p>
      </>
    ),
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    content: (
      <>
        <p className="mb-4">
          You agree to use our services only for lawful purposes. You are
          strictly prohibited from:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light mb-4">
          <li>
            Attempting to gain unauthorized access to our systems, servers, or
            networks.
          </li>
          <li>
            Transmitting any malicious code, viruses, or destructive data.
          </li>
          <li>
            Using the service for any illegal, fraudulent, or abusive activity.
          </li>
          <li>
            Reproducing, duplicating, or copying any portion of the service
            without explicit permission.
          </li>
        </ul>
        <p>
          Any violation of these responsibilities may result in immediate
          termination of service and potential legal action.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All code, content, branding, designs, algorithms, and materials
          provided by Concepteur remain the exclusive intellectual property of
          Concepteur Technologies unless explicitly transferred or licensed in a
          written agreement. You may not claim ownership of any underlying
          infrastructure or proprietary methodologies used during service
          delivery.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, Concepteur shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including without limitation, loss of profits, data,
          use, goodwill, or other intangible losses.
        </p>
        <p>
          Our services are provided on an "AS IS" and "AS AVAILABLE" basis
          without warranties of any kind, whether express or implied.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        <p>
          We reserve the right to suspend or terminate your access to all or any
          part of our services at any time, with or without cause, with or
          without notice, effective immediately. Upon termination, your right to
          use the services will cease immediately.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <>
        <p>
          These terms shall be governed by and interpreted in accordance with
          the laws applicable in your operating jurisdiction, without regard to
          its conflict of law provisions. Our failure to enforce any right or
          provision of these Terms will not be considered a waiver of those
          rights.
        </p>
      </>
    ),
  },
];

export function TermsClient() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  // Intersection Observer for sticky sidebar highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" },
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-black selection:text-white font-sans overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-radial from-gray-100/50 to-transparent blur-[100px] opacity-70" />
      </div>

      {/* Hero Header */}
      <header className="relative w-full pt-32 md:pt-48 pb-20 px-5 md:px-[15%] border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-black" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
              Legal Foundation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-10">
            Terms of <br className="hidden md:block" />
            <span className="font-semibold">Service</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
            These terms govern your access to and use of Concepteur’s digital
            architecture, services, and proprietary infrastructure.
          </p>

          <div className="mt-10 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400">
            <span className="w-2 h-2 rounded-full bg-black" />
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </motion.div>
      </header>

      {/* Main Content Layout */}
      <main className="relative w-full px-5 md:px-[15%] py-20 flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-8 pb-4 border-b border-gray-200">
              Directory
            </h3>
            <ul className="space-y-4">
              {SECTIONS.map((section, idx) => {
                const isActive = activeSection === section.id;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(section.id);
                        if (el) {
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY -
                            100;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }}
                      className={
                        "group flex items-center gap-4 text-left w-full transition-all duration-300 " +
                        (isActive
                          ? "text-black"
                          : "text-gray-400 hover:text-gray-800")
                      }
                    >
                      <span className="text-[10px] font-mono w-4">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                      <span
                        className={
                          "text-sm font-medium tracking-wide " +
                          (isActive
                            ? "translate-x-2"
                            : "group-hover:translate-x-1 transition-transform")
                        }
                      >
                        {section.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Content Sections */}
        <div className="flex-1 max-w-4xl">
          <div className="space-y-24 md:space-y-32">
            {SECTIONS.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-32 relative"
              >
                {/* Decorative node */}
                <div className="absolute -left-[51px] lg:-left-[65px] top-2 hidden md:block">
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
                  <span className="text-sm font-mono tracking-widest text-gray-400 pt-1">
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                    {section.title}
                  </h2>
                </div>

                <div className="md:pl-[52px] prose prose-gray max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg">
                  {section.content}
                </div>
              </motion.section>
            ))}

            {/* Contact Block */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-32 md:pl-[52px]"
            >
              <div className="group relative border border-black/10 bg-gray-50/50 p-10 md:p-16 hover:bg-white hover:border-black transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-6">
                  Inquiries & Clarifications
                </h3>
                <p className="text-xl md:text-2xl font-light text-black leading-snug mb-8">
                  For any questions regarding our legal structure or Terms of
                  Service, reach out to our team.
                </p>
                <a
                  href="mailto:info@concepteurit.com"
                  className="inline-flex items-center gap-3 text-lg font-medium tracking-wide text-black border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  info@concepteurit.com
                  <span className="font-mono text-xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
