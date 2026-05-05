import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Concepteur",
  description:
    "Learn how Concepteur collects, uses, and protects your information.",
};

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "information", label: "Information We Collect" },
  { id: "usage", label: "How We Use Your Information" },
  { id: "sharing", label: "Data Sharing & Disclosure" },
  { id: "retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "rights", label: "Your Rights" },
  { id: "grievance", label: "Grievance Officer" },
  { id: "law", label: "Applicable Law" },
  { id: "changes", label: "Policy Changes" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full bg-white mt-12 sm:mt-14 md:mt-15">
      {/* Hero */}
      <section className="w-full px-5 md:px-[15%] pt-20 md:pt-28 pb-10 md:pb-16 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 tracking-tight leading-[1.1]">
              Privacy Policy
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 font-light max-w-xl leading-relaxed">
              We are committed to handling your information with transparency,
              care, and full accountability.
            </p>
          </div>
          <div className="shrink-0 text-sm text-gray-400 space-y-1 md:text-right">
            <p>
              <span className="text-gray-600 font-medium">Effective:</span>{" "}
              April 28, 2026
            </p>
            <p>
              <span className="text-gray-600 font-medium">Last updated:</span>{" "}
              April 28, 2026
            </p>
            <p>
              <span className="text-gray-600 font-medium">Version:</span> 1.0
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="w-full px-5 md:px-[15%] py-12 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Sticky TOC */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
              On this page
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-gray-500 hover:text-black transition-colors py-1 border-l-2 border-transparent hover:border-black pl-3"
              >
                {s.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-16">
          {/* 1. Introduction */}
          <section id="introduction" className="scroll-mt-24">
            <SectionLabel index="01" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Introduction</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                Concepteur Technologies (formerly Ampit) is a software
                development company headquartered in Siliguri, West Bengal,
                India. We provide services across AI &amp; intelligent
                automation, web platforms, mobile application development,
                backend engineering, cloud infrastructure, e-commerce systems,
                and UI/UX design.
              </p>
              <p className="mt-4">
                This Privacy Policy governs the collection, use, and protection
                of personal information when you visit{" "}
                <a
                  href="https://concepteurit.com"
                  className="text-black underline underline-offset-2 font-medium"
                >
                  concepteurit.com
                </a>{" "}
                or engage our services. By accessing our website or entering a
                service agreement with us, you acknowledge and agree to the
                practices described in this policy.
              </p>
            </div>
          </section>

          <Divider />

          {/* 2. Information We Collect */}
          <section id="information" className="scroll-mt-24">
            <SectionLabel index="02" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Information We Collect</h2>
            <div className="prose-block space-y-6">
              <InfoBlock title="Information You Provide Directly">
                When you contact us, request a consultation, or enter a service
                agreement, we may collect your full name, job title, email
                address, phone number, company name, project requirements, and
                billing details for contracted clients.
              </InfoBlock>
              <InfoBlock title="Information Collected Automatically">
                When you visit our website, we may automatically collect IP
                address, approximate geographic location, browser and device
                type, operating system, pages visited, session duration, and
                referring URLs via cookies and standard web analytics.
              </InfoBlock>
              <InfoBlock title="Information from Project Engagements">
                During the delivery of development projects, we may process
                business data, system credentials, or API keys provided for
                scoping or integration purposes. All such credentials are
                handled under strict confidentiality and deleted promptly upon
                project completion.
              </InfoBlock>
            </div>
          </section>

          <Divider />

          {/* 3. How We Use Your Information */}
          <section id="usage" className="scroll-mt-24">
            <SectionLabel index="03" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">How We Use Your Information</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                Collected information is used strictly for the following
                purposes:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "To respond to inquiries and provide project consultations",
                  "To deliver contracted services including software development, AI automation, cloud infrastructure, and API integrations",
                  "To manage client relationships, communications, and project progress",
                  "To send relevant service updates or announcements, only with your consent",
                  "To analyze website usage and improve our digital presence",
                  "To comply with applicable legal obligations",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-gray-500 border-l-2 border-gray-300 pl-4 italic">
                We do not sell, rent, or trade your personal data. We do not use
                your data for automated decision-making or profiling.
              </p>
            </div>
          </section>

          <Divider />

          {/* 4. Data Sharing */}
          <section id="sharing" className="scroll-mt-24">
            <SectionLabel index="04" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Data Sharing &amp; Disclosure</h2>
            <div className="prose-block space-y-4">
              <p>
                We share personal information only in the following limited
                circumstances:
              </p>
              <div className="grid gap-3 mt-2">
                {[
                  {
                    title: "Service Providers",
                    desc: "Trusted third-party tools used for communication, project management, or analytics — all contractually bound to protect your data.",
                  },
                  {
                    title: "Internal Team & Contractors",
                    desc: "Project-specific data may be accessed by our internal developers or vetted contractors operating under confidentiality agreements.",
                  },
                  {
                    title: "Legal Obligations",
                    desc: "When required by applicable law, court order, or governmental authority in India or any jurisdiction relevant to your engagement.",
                  },
                  {
                    title: "Business Transfers",
                    desc: "In the event of a merger, acquisition, or restructuring — with appropriate prior notice provided to you.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-4"
                  >
                    <p className="text-sm font-semibold text-black mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          {/* 5. Data Retention */}
          <section id="retention" className="scroll-mt-24">
            <SectionLabel index="05" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Data Retention</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>We retain personal data only as long as necessary:</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
                {[
                  {
                    type: "Inquiry & contact data",
                    period: "Up to 24 months after last communication",
                  },
                  {
                    type: "Client project data",
                    period: "Duration of project + up to 3 years",
                  },
                  { type: "Website analytics data", period: "Up to 12 months" },
                  {
                    type: "Credentials & API keys",
                    period: "Deleted immediately upon project completion",
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.type}
                    className={`flex justify-between gap-4 px-5 py-3.5 text-sm ${i < arr.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    <span className="text-gray-700 font-medium">
                      {row.type}
                    </span>
                    <span className="text-gray-500 text-right">
                      {row.period}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Upon expiry, all data is securely and permanently deleted or
                anonymized.
              </p>
            </div>
          </section>

          <Divider />

          {/* 6. Security */}
          <section id="security" className="scroll-mt-24">
            <SectionLabel index="06" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Security</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                We implement industry-standard technical and organizational
                security measures, including encrypted communications
                (HTTPS/TLS), role-based access restrictions, and secure
                credential handling practices. All staff and contractors with
                access to client data operate under strict confidentiality
                obligations.
              </p>
              <p className="mt-4">
                While we apply all reasonable safeguards, no method of
                transmission over the internet is entirely secure. If you
                suspect unauthorized access to your data, please notify us
                immediately at{" "}
                <a
                  href="mailto:info@concepteurit.com"
                  className="text-black font-medium underline underline-offset-2"
                >
                  info@concepteurit.com
                </a>
                .
              </p>
            </div>
          </section>

          <Divider />

          {/* 7. Cookies */}
          <section id="cookies" className="scroll-mt-24">
            <SectionLabel index="07" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Cookies &amp; Tracking</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                Our website uses cookies and similar technologies to enhance
                your experience:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  {
                    name: "Essential Cookies",
                    desc: "Required for core site functionality. Cannot be disabled.",
                  },
                  {
                    name: "Analytics Cookies",
                    desc: "Used to analyze traffic and improve site performance (e.g. Google Analytics). Aggregated and non-personal.",
                  },
                ].map((c) => (
                  <li key={c.name} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                    <span>
                      <span className="font-medium text-black">{c.name}: </span>
                      <span className="text-gray-500">{c.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                You may manage or disable cookies through your browser settings.
                Disabling certain cookies may impact website functionality.
              </p>
            </div>
          </section>

          <Divider />

          {/* 8. Third-Party Services */}
          <section id="third-party" className="scroll-mt-24">
            <SectionLabel index="08" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">
              Third-Party Services &amp; Integrations
            </h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                As part of our development services, we build and integrate with
                a range of third-party platforms on behalf of clients,
                including:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "OpenAI",
                  "Google Gemini",
                  "OpenRouter",
                  "Ollama",
                  "AWS",
                  "Google Cloud",
                  "Microsoft Azure",
                  "Stripe",
                  "Kubernetes",
                  "GitHub",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-gray-500">
                When working with these services on client projects, Concepteur
                acts as a{" "}
                <span className="font-medium text-black">data processor</span>.
                The client remains responsible for ensuring appropriate
                disclosures to their own end users.
              </p>
            </div>
          </section>

          <Divider />

          {/* 9. Your Rights */}
          <section id="rights" className="scroll-mt-24">
            <SectionLabel index="09" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Your Rights</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                Depending on your location and applicable law, you may have the
                right to:
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {[
                  {
                    right: "Access",
                    desc: "Request a copy of the personal data we hold about you.",
                  },
                  {
                    right: "Correction",
                    desc: "Request correction of inaccurate or incomplete data.",
                  },
                  {
                    right: "Deletion",
                    desc: "Request erasure of your data, subject to legal obligations.",
                  },
                  {
                    right: "Portability",
                    desc: "Receive your data in a structured, machine-readable format.",
                  },
                  {
                    right: "Withdraw Consent",
                    desc: "Opt out of marketing communications at any time.",
                  },
                  {
                    right: "Objection",
                    desc: "Object to certain processing activities based on our legitimate interests.",
                  },
                ].map((r) => (
                  <div
                    key={r.right}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-4"
                  >
                    <p className="text-sm font-semibold text-black mb-1">
                      {r.right}
                    </p>
                    <p className="text-xs text-gray-500">{r.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-gray-500">
                To exercise any of these rights, email{" "}
                <a
                  href="mailto:info@concepteurit.com"
                  className="text-black font-medium underline underline-offset-2"
                >
                  info@concepteurit.com
                </a>
                . We will respond within{" "}
                <span className="font-medium text-black">30 days</span>.
              </p>
            </div>
          </section>

          <Divider />

          {/* 10. Grievance Officer */}
          <section id="grievance" className="scroll-mt-24">
            <SectionLabel index="10" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Grievance Officer</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                In accordance with the{" "}
                <span className="font-medium text-black">
                  Information Technology Act, 2000
                </span>{" "}
                and rules made thereunder, we have appointed a Grievance Officer
                to address any complaints or concerns regarding the collection,
                storage, or use of your personal data. All grievances will be
                acknowledged and resolved within{" "}
                <span className="font-medium text-black">30 days</span> of
                receipt.
              </p>
              <div className="mt-5 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    Grievance Officer
                  </p>
                  <p className="text-base font-semibold text-black">
                    Provat Das
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Co-Founder, Concepteur Technologies
                  </p>
                </div>
                <div className="divide-y divide-gray-100">
                  <ContactRow
                    label="Email"
                    value="info@concepteurit.com"
                    href="mailto:info@concepteurit.com"
                  />
                  <ContactRow
                    label="Website"
                    value="concepteurit.com"
                    href="https://concepteurit.com"
                  />
                </div>
                <div className="px-6 py-4 bg-gray-50 text-xs text-gray-400">
                  Complaints will be resolved within{" "}
                  <span className="font-medium text-gray-600">30 days</span> as
                  required by the IT Act, 2000.
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* 11. Applicable Law */}
          <section id="law" className="scroll-mt-24">
            <SectionLabel index="11" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Applicable Law</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                Concepteur Technologies operates in compliance with the{" "}
                <span className="font-semibold text-black">
                  Information Technology Act, 2000
                </span>{" "}
                and the{" "}
                <span className="font-semibold text-black">
                  Digital Personal Data Protection (DPDP) Act, 2023
                </span>{" "}
                of India. For clients or users located in the European Union or
                other jurisdictions with specific data protection regulations,
                we make reasonable efforts to comply with applicable
                requirements.
              </p>
            </div>
          </section>

          <Divider />

          {/* 12. Policy Changes */}
          <section id="changes" className="scroll-mt-24">
            <SectionLabel index="12" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Policy Changes</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our services, technologies, or legal obligations. Any
                revisions will be published on this page with an updated
                effective date. Continued use of our website or services after
                updates constitutes acceptance of the revised policy.
              </p>
            </div>
          </section>

          <Divider />

          {/* 13. Contact */}
          <section id="contact" className="scroll-mt-24">
            <SectionLabel index="13" />
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900 tracking-tight mb-5">Contact Us</h2>
            <div className="text-base md:text-[17px] text-gray-600 font-light leading-relaxed">
              <p>
                For any questions, concerns, or data-related requests regarding
                this Privacy Policy, please contact our team directly.
              </p>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    Company
                  </p>
                  <p className="text-base font-semibold text-black">
                    Concepteur Technologies
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Siliguri, West Bengal, India
                  </p>
                </div>
                <div className="divide-y divide-gray-100">
                  <ContactRow
                    label="Email"
                    value="info@concepteurit.com"
                    href="mailto:info@concepteurit.com"
                  />
                  <ContactRow
                    label="Website"
                    value="concepteurit.com"
                    href="https://concepteurit.com"
                  />
                </div>
                <div className="px-6 py-4 bg-gray-50 text-xs text-gray-400">
                  We aim to respond to all privacy-related inquiries within{" "}
                  <span className="font-medium text-gray-600">
                    2 business days
                  </span>
                  .
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ index }: { index: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
      Section {index}
    </p>
  );
}

function Divider() {
  return <hr className="border-gray-200" />;
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-black mb-1">{title}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
        {label}
      </span>
      <a
        href={href}
        className="text-sm font-medium text-black hover:underline underline-offset-2 transition-colors"
      >
        {value}
      </a>
    </div>
  );
}
