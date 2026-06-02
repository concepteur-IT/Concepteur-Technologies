"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="md:col-span-4 lg:col-span-3 sticky top-32 h-fit mb-12 md:mb-0">
      <div className="flex flex-col pb-4">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-[#f5ad76]" />
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-gray-400">
            {number} - {subtitle || "Section"}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-black">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function SocialMediaInfrastructureCaseStudy() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-[#0b2f33] selection:text-white font-sans">
      <div className="absolute top-8 left-5 md:left-[15%] z-50">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
      </div>

      <header className="w-full pt-32 pb-12 px-5 md:px-[15%]">
        <div className="flex flex-col lg:flex-row border border-gray-200 custom-notch-tl-br overflow-hidden shadow-sm">
          <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-[#f5ad76]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                  Case Study
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-black leading-none mb-6">
                Social Media Infrastructure.
              </h1>
              <p className="text-xl md:text-3xl text-gray-500 font-light tracking-tight max-w-xl leading-relaxed">
                Building a fast video upload system for large media files with
                AWS presigned URLs and FFmpeg compression.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap items-center gap-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">
                Core Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {["React", "CodeIgniter", "AWS S3", "FFmpeg"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 bg-white border border-gray-200 text-[13px] text-black font-medium whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[320px] bg-[#FAFAF9] flex flex-col shrink-0">
            <div className="p-8 border-b border-gray-200 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Platform
              </span>
              <span className="block text-lg text-black font-medium">
                Web Application
              </span>
            </div>

            <div className="p-8 border-b border-gray-200 flex-1 bg-white">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Frontend
              </span>
              <span className="block text-lg text-black font-medium">
                React
              </span>
            </div>

            <div className="p-8 border-b border-gray-200 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Backend
              </span>
              <span className="block text-lg text-black font-medium">
                CodeIgniter
              </span>
            </div>

            <div className="p-8 flex-1 bg-white">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                Speciality
              </span>
              <span className="block text-base text-gray-800 font-light leading-relaxed font-medium">
                Large file upload optimization
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full px-5 md:px-[15%] mb-40">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 pt-12 border-t border-gray-100 mt-12">
          <SectionHeader
            number="01"
            title="Overview"
            subtitle="Project Context"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-8">
              <p className="text-2xl md:text-3xl font-light text-black border-l-2 border-[#0b2f33] pl-6 mb-12 leading-snug">
                This project focused on building a fast and stable upload
                infrastructure for a social media platform where users can send
                large video and media files. The core challenge was keeping the
                experience smooth even when file sizes reached 2GB or more.
              </p>
              <p>
                The frontend was developed in React, while the backend used
                CodeIgniter. The initial goal was to support upload,
                compression, and storage in a way that would not overload the
                backend server or interrupt the user experience.
              </p>
              <p>
                After testing multiple approaches, the final architecture
                shifted heavy upload work away from the backend by using AWS
                Presigned URLs for direct upload, with FFmpeg compression
                handled asynchronously through a separate cron process.
              </p>

              <div className="mt-16 bg-[#FAFAF9] border border-gray-100 p-8 md:p-12 custom-notch-tl-br shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-8 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-black"></span>
                  Core Objectives
                </h3>
                <ul className="space-y-5 font-light text-lg text-black">
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Handle large media uploads with minimal backend pressure
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Improve upload stability for long-running file transfers
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Compress videos without blocking the main upload flow
                  </li>
                  <li className="flex gap-4 items-center group">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-[#0b2f33] group-hover:border-[#0b2f33] transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    Keep the architecture scalable for social media traffic
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-gray-100 pt-12">
          <SectionHeader
            number="02"
            title="Features"
            subtitle="System Focus Areas"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-black">
              A resilient media pipeline.
            </h3>

            <div className="space-y-0">
              {[
                {
                  title: "Direct AWS Presigned Uploads",
                  desc: "The frontend requests a presigned URL from the backend and uploads the file directly to AWS. This removes the need for the backend to act as a file relay and immediately improves speed and scalability.",
                },
                {
                  title: "Chunk-Based Upload Experimentation",
                  desc: "A second approach split large videos into smaller chunks for safer transfer. This improved reliability compared with backend-only upload, but still introduced complexity for merge and processing logic.",
                },
                {
                  title: "FFmpeg Compression Workflow",
                  desc: "Video optimization is handled using FFmpeg so that uploaded media can be compressed efficiently without slowing down the interactive upload flow.",
                },
                {
                  title: "Cron-Driven Processing",
                  desc: "A separate cron job checks for newly uploaded uncompressed videos, downloads them, compresses them, and pushes the optimized version back to AWS.",
                },
                {
                  title: "Stable Media Storage Layer",
                  desc: "The system stores file metadata after upload completion so the application can reliably track media assets across the platform lifecycle.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group py-8 border-b border-gray-200 hover:pl-6 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <span className="text-xs font-mono font-medium bg-gray-100 px-3 py-1 text-gray-500 group-hover:bg-[#0b2f33] group-hover:text-white transition-colors shrink-0 mt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-medium text-black mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32 border-t border-gray-100 pt-12">
          <SectionHeader
            number="03"
            title="Challenges"
            subtitle="Implementation Hurdles"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Slow Large File Uploads",
                  challenge:
                    "Uploading very large videos through the backend made the process slow and fragile.",
                  solution:
                    "Moved upload delivery directly to AWS using presigned URLs so the backend no longer became the bottleneck.",
                },
                {
                  title: "Backend Load Spikes",
                  challenge:
                    "Handling uploads, compression, and file storage together placed too much stress on the application server.",
                  solution:
                    "Separated storage and compression responsibilities so the backend only orchestrates the workflow.",
                },
                {
                  title: "Connection Interruptions",
                  challenge:
                    "A failed connection, page refresh, or browser close could interrupt the full upload flow.",
                  solution:
                    "Improved transfer stability by using direct-to-storage uploads and chunked upload experimentation.",
                },
                {
                  title: "Complex Compression Flow",
                  challenge:
                    "Trying to upload, compress, and persist files in one step created long processing times.",
                  solution:
                    "Moved compression into a separate cron-based FFmpeg workflow after upload completion.",
                },
              ].map((cs, i) => (
                <div
                  key={i}
                  className="p-8 border border-gray-100 bg-[#FAFAF9] group hover:bg-white hover:border-gray-300 transition-colors custom-notch-tl-br flex flex-col justify-between"
                >
                  <h5 className="text-xs font-bold uppercase tracking-widest text-black mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
                    <span>{cs.title}</span>
                    <span className="text-[#f5ad76] font-mono">0{i + 1}</span>
                  </h5>
                  <div className="space-y-8">
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-3">
                        Challenge
                      </span>
                      <p className="text-black font-light leading-relaxed text-base">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-[#0b2f33] mb-3">
                        Solution
                      </span>
                      <p className="text-gray-600 font-light leading-relaxed text-base">
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 border-t border-gray-100 pt-12">
          <SectionHeader
            number="04"
            title="Strategy"
            subtitle="Analysis & Outcome"
          />
          <div className="md:col-span-8 lg:col-span-9">
            <h3 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-black">
              Presigned URLs, async compression, and cleaner scaling
            </h3>
            <p className="text-xl text-gray-600 font-light mb-16 leading-relaxed">
              The final architecture prioritized direct file delivery to AWS,
              deferred video optimization, and a lighter backend footprint. That
              balance made the upload flow faster for users and easier to scale
              for the platform.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-24">
              {[
                {
                  title: "Backend De-bottlenecking",
                  desc: "By moving the actual file transfer to AWS, the backend no longer had to receive and stream massive media payloads.",
                },
                {
                  title: "User Experience Protection",
                  desc: "Uploads became less fragile because the direct-storage approach reduced the number of failure points during transfer.",
                },
                {
                  title: "Operational Simplicity",
                  desc: "The backend stayed focused on orchestration, metadata, and workflow control instead of heavy media handling.",
                },
                {
                  title: "Scalable Media Architecture",
                  desc: "The final solution supports growth in file volume and size while leaving room for future optimization layers.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 p-8 custom-notch-tl-br hover:shadow-sm transition-shadow flex flex-col justify-between"
                >
                  <h4 className="text-xl font-medium mb-4 text-black">
                    {item.title}
                  </h4>
                  <p className="text-base leading-relaxed text-gray-600 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#FAFAF9] border border-gray-100 p-8 md:p-16 mb-20 custom-notch-tl-br">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0b2f33] mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#0b2f33]"></span>
                What I Learned
              </h3>
              <ul className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-black">
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />A
                  solution that works is not always the most efficient one.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />
                  Presigned URLs are a strong pattern for direct, scalable
                  uploads.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />
                  Compression is often best handled asynchronously after upload
                  completion.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 bg-[#f5ad76] shrink-0 mt-3" />
                  Performance optimization matters a lot in media-heavy social
                  platforms.
                </li>
              </ul>
              <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 font-medium">
                The project reinforced how architecture choices directly affect
                reliability, cost, and user trust in real-world production
                systems.
              </div>
            </div>

            <div className="max-w-4xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-300"></span>
                Conclusion
              </h3>
              <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-8">
                The final social media upload system delivers a faster and more
                stable way to handle large video files.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed border-l-2 border-[#0b2f33] pl-6 py-2">
                By combining AWS Presigned URLs, FFmpeg compression, and
                cron-driven processing, the platform now supports large media
                uploads with less backend strain and a better user experience.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-[#0b2f33] text-white relative overflow-hidden">
        <Link
          href="/case-studies"
          className="block relative z-10 p-12 md:p-24 lg:p-32 group"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-[#f5ad76] group-hover:text-white transition-colors">
            Return To
          </h2>
          <div className="flex items-center justify-between">
            <h3 className="text-4xl md:text-7xl lg:text-9xl font-light tracking-tight group-hover:translate-x-8 transition-transform duration-700">
              Directory
            </h3>
            <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 opacity-50 text-[#f5ad76] group-hover:text-white group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700" />
          </div>
        </Link>
      </footer>
    </div>
  );
}
