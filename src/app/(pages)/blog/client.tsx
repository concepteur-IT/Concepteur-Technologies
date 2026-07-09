"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blogData";
import { teamData } from "@/data/teamData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function BlogCard({
  post,
  large = false,
  stretch = false,
}: {
  post: BlogPost;
  large?: boolean;
  stretch?: boolean;
}) {
  const authorProfile = teamData.find((t) => t.slug === post.authorSlug);
  const bio =
    authorProfile?.bio ||
    "Passionate about building scalable systems and modern web technologies.";

  return (
    <motion.div
      variants={itemVariants}
      className={`group flex flex-col relative ${stretch ? "h-full" : ""}`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`flex flex-col ${stretch ? "flex-1" : ""}`}
      >
        <div
          className={`relative w-full mb-4 overflow-hidden bg-white custom-notch-tl-br border border-neutral-200 ${
            stretch ? "flex-1 min-h-[200px]" : "aspect-[16/9]"
          }`}
        >
          {/* Blueprint Grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-neutral-100/70" />
          {/* Technical Labels */}
          <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.35em] text-neutral-500 font-mono">
            SYSTEM DESIGN
          </div>

          <div className="absolute top-5 right-5 text-[10px] text-neutral-400 font-mono">
            REVISION 02
          </div>

          <div className="absolute bottom-5 left-5 text-[10px] text-neutral-400 font-mono">
            SPECIFICATION
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-700 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
              VALIDATED
            </span>
          </div>

          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[10px] text-neutral-300 font-mono rotate-[-90deg] tracking-[0.3em]">
            ARCHITECTURE
          </div>

          <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[10px] text-neutral-300 font-mono rotate-90 tracking-[0.3em]">
            WORKFLOW
          </div>
          {/* Animated Status */}
          <div className="absolute top-14 left-5 flex items-center gap-2 text-[9px] text-neutral-400 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-700 animate-pulse" />
            BUILD
          </div>

          <div className="absolute bottom-14 right-5 text-[9px] text-neutral-400 font-mono animate-pulse">
            SYNC
          </div>

          <div className="absolute top-1/2 right-20 h-px w-16 bg-neutral-300 overflow-hidden">
            <div className="h-full w-4 bg-neutral-700 animate-[scanX_2.5s_linear_infinite]" />
          </div>
          {/* Scan */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-0 w-full h-px bg-neutral-400 animate-blueprintScan" />
          </div>

          <svg viewBox="0 0 800 450" className="absolute inset-0 w-full h-full">
            {/* construction guides */}
            <path
              d="M120 100 H680"
              className="stroke-neutral-300"
              strokeWidth="1"
              strokeDasharray="6 6"
            />

            <path
              d="M120 350 H680"
              className="stroke-neutral-300"
              strokeWidth="1"
              strokeDasharray="6 6"
            />

            {/* document */}
            <rect
              x="250"
              y="90"
              width="300"
              height="250"
              rx="8"
              fill="none"
              className="stroke-neutral-700 animate-draw"
              strokeWidth="2"
            />

            {/* document sections */}
            <line
              x1="285"
              y1="145"
              x2="515"
              y2="145"
              className="stroke-neutral-500"
              strokeWidth="2"
            />

            <line
              x1="285"
              y1="185"
              x2="490"
              y2="185"
              className="stroke-neutral-400"
              strokeWidth="2"
            />

            <line
              x1="285"
              y1="225"
              x2="525"
              y2="225"
              className="stroke-neutral-400"
              strokeWidth="2"
            />

            {/* Architecture cube */}
            <g className="animate-float">
              <polygon
                points="110,170 150,145 190,170 150,195"
                fill="none"
                className="stroke-neutral-700"
                strokeWidth="2"
              />
              <polygon
                points="110,170 110,220 150,245 150,195"
                fill="none"
                className="stroke-neutral-700"
                strokeWidth="2"
              />
              <polygon
                points="190,170 190,220 150,245 150,195"
                fill="none"
                className="stroke-neutral-700"
                strokeWidth="2"
              />
            </g>

            {/* Flow connections */}
            <line
              x1="190"
              y1="195"
              x2="250"
              y2="195"
              className="stroke-neutral-500"
              strokeWidth="2"
            />

            <line
              x1="550"
              y1="215"
              x2="650"
              y2="215"
              className="stroke-neutral-500"
              strokeWidth="2"
            />

            {/* Nodes */}
            <circle
              cx="250"
              cy="195"
              r="5"
              className="fill-neutral-700 animate-pingOrigin"
            />
            <circle
              cx="650"
              cy="215"
              r="5"
              className="fill-neutral-700 animate-pingOrigin"
            />
          </svg>

          {/* subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-100/60" />
        </div>

        <div className="flex items-center gap-3 text-[11px] font-medium text-gray-500 uppercase tracking-widest mb-2">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{post.readTime}</span>
        </div>

        <h2
          className={`font-medium tracking-tight text-black mb-2 group-hover:text-gray-600 transition-colors duration-300 ${
            stretch ? "text-xl md:text-2xl" : "text-base md:text-lg"
          }`}
        >
          {post.title}
        </h2>

        <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>
      </Link>

      <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between w-full border-t border-gray-100 pt-4 gap-4 sm:gap-0 relative z-20">
        {/* Author with Popup */}
        <div className="flex items-center gap-3 relative group/author">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 cursor-default">
            <Image
              src={post.authorImage}
              alt={post.authorName}
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
          <div className="cursor-default">
            <p className="text-sm font-medium text-black leading-tight">
              {post.authorName}
            </p>
            <p className="text-[11px] text-gray-500">{post.authorRole}</p>
          </div>

          {/* Popup Card */}
          <div className="absolute bottom-full left-0 pb-4 w-[280px] opacity-0 invisible translate-y-2 group-hover/author:opacity-100 group-hover/author:visible group-hover/author:translate-y-0 transition-all duration-300 pointer-events-none group-hover/author:pointer-events-auto z-50">
            <div className="bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-5 custom-notch-tl-br cursor-default">
              <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={post.authorImage}
                    alt={post.authorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black leading-tight">
                    {post.authorName}
                  </p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                    {post.authorRole}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 line-clamp-3 mb-5 leading-relaxed font-light">
                {bio}
              </p>
              <Link
                href={`/who-we-are/${post.authorSlug}`}
                className="flex justify-center items-center w-full bg-black text-white text-[11px] font-semibold tracking-widest uppercase py-3 hover:bg-gray-800 transition-colors duration-300"
              >
                See Profile
              </Link>
            </div>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest uppercase text-black group-hover:text-gray-500 transition-colors duration-300"
        >
          Read Article
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const rows: BlogPost[][] = [];
  for (let i = 0; i < posts.length; i += 3) {
    rows.push(posts.slice(i, i + 3));
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-12"
    >
      {rows.map((row, rowIndex) => {
        const isEven = rowIndex % 2 === 0;

        if (row.length === 1) {
          return (
            <div key={rowIndex}>
              <BlogCard post={row[0]} large />
            </div>
          );
        }

        if (row.length === 2) {
          return (
            <div
              key={rowIndex}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10"
            >
              <BlogCard post={row[0]} />
              <BlogCard post={row[1]} />
            </div>
          );
        }

        // 3-post asymmetric row
        // Even rows: large (2/3) left, small (1/3) right
        // Odd rows: small (1/3) left, large (2/3) right
        const [a, b, c] = row;
        return (
          <div
            key={rowIndex}
            className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 items-stretch"
          >
            {isEven ? (
              <>
                <div className="lg:col-span-2 flex flex-col">
                  <BlogCard post={a} stretch />
                </div>
                <div className="lg:col-span-1 flex flex-col gap-8">
                  <BlogCard post={b} />
                  {c && <BlogCard post={c} />}
                </div>
              </>
            ) : (
              <>
                <div className="lg:col-span-1 flex flex-col gap-8">
                  <BlogCard post={a} />
                  {b && <BlogCard post={b} />}
                </div>
                <div className="lg:col-span-2 flex flex-col">
                  <BlogCard post={c ?? b} stretch />
                </div>
              </>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
