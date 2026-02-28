import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import Image from "next/image";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const study = caseStudies.find((s) => s.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-32 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">
              {study.tag}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
            {study.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {study.shortDesc}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-lg border border-gray-100 bg-gray-50">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="w-full h-full object-cover grayscale-[30%]"
          />
        </div>

        {/* Overview Grid */}
        <div className="grid md:grid-cols-4 gap-8 py-10 border-y border-gray-100 mb-20">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Client</h4>
            <p className="font-medium text-gray-900">{study.client}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Role</h4>
            <p className="font-medium text-gray-900">{study.role}</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              Tech Stack
            </h4>
            <p className="font-medium text-gray-900 leading-relaxed">
              {study.stack}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid md:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-20">
            {/* The Challenge */}
            <section>
              <h2 className="text-3xl font-semibold mb-8">The Challenge</h2>
              <ul className="space-y-6">
                {study.challenge.map((c, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-semibold text-sm mt-1">
                      0{i + 1}
                    </span>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {c.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-3xl font-semibold mb-8">The Solution</h2>
              <div className="space-y-12">
                {study.solution?.map((sol, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                  >
                    <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-3">
                      {sol.label}
                    </div>
                    <h3 className="text-xl font-semibold mb-6">{sol.title}</h3>
                    <ul className="space-y-3">
                      {sol.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Results */}
          <div className="md:col-span-4">
            <div className="sticky top-32 p-8 bg-gray-900 text-white rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold mb-8 border-b border-gray-800 pb-4">
                Key Results
              </h3>
              <div className="space-y-8">
                {Object.entries(study.results || {}).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-4xl font-semibold mb-1">{value}</div>
                    <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-6 text-gray-900 border-b border-gray-100 pb-2">
                Key Features
              </h3>
              <div className="space-y-6">
                {study?.features?.map((f, i) => (
                  <div key={i}>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      {f?.title}
                    </h5>
                    <p className="text-sm text-gray-600">{f?.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
