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
          className={`relative w-full mb-4 overflow-hidden bg-gray-100 custom-notch-tl-br ${
            stretch ? "flex-1 min-h-[200px]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] grayscale group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
          />
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
  // Chunk posts into groups of 3 for alternating asymmetric rows
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
