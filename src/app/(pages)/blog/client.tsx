"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blogData";
import { teamData } from "@/data/teamData";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

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
   <div className="relative w-full h-auto md:h-[450px] overflow-hidden bg-white rounded-3xl border border-neutral-100 shadow-xl flex flex-col justify-between p-6 md:p-8 select-none">
  
  {/* Modern Ambient Fluid Background (Smooth light blobs) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(240,240,240,0.6),transparent_50%)]" />
  <motion.div 
    animate={{ 
      scale: [1, 1.15, 1], 
      x: [0, 15, 0], 
      y: [0, -15, 0] 
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-10 left-1/4 w-80 h-80 bg-neutral-50 rounded-full filter blur-3xl opacity-70" 
  />
  <motion.div 
    animate={{ 
      scale: [1, 1.1, 1], 
      x: [0, -20, 0], 
      y: [0, 10, 0] 
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    className="absolute -bottom-20 right-1/3 w-96 h-96 bg-neutral-100/60 rounded-full filter blur-3xl opacity-60" 
  />

  {/* Top Status & Header Row */}
  <div className="z-10 flex justify-between items-start w-full mb-6 md:mb-0">
    <div className="flex items-center gap-3">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-800"></span>
      </div>
      <div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase block">System Analysis</span>
        <h3 className="text-sm font-semibold text-neutral-800 tracking-tight">ENGINE_CORE_V2</h3>
      </div>
    </div>
    
    <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 backdrop-blur-sm rounded-full border border-neutral-100 text-[9px] font-mono tracking-wider text-neutral-500">
      <span>REV 02</span>
      <span className="text-neutral-300">•</span>
      <span className="text-neutral-700 font-bold animate-pulse">VALIDATED</span>
    </div>
  </div>

  {/* Center Content: Organic Morphing Shapes & Redesigned Terminal Text Cards */}
  <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-8 my-auto w-full px-2">
    
    {/* Abstract Fluid Geometry */}
    <div className="relative flex items-center justify-center w-40 h-40">
      <motion.div
        animate={{ rotate: 360, borderRadius: ["42% 58% 70% 30% / 45% 45% 55% 55%", "70% 30% 52% 48% / 60% 40% 60% 40%", "42% 58% 70% 30% / 45% 45% 55% 55%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-36 h-36 border border-neutral-200/70 bg-neutral-50/30 backdrop-blur-sm"
      />
      <motion.div
        animate={{ rotate: -360, borderRadius: ["50% 50% 30% 70% / 50% 60% 40% 50%", "30% 70% 70% 30% / 50% 30% 70% 50%", "50% 50% 30% 70% / 50% 60% 40% 50%"] }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        className="absolute w-28 h-28 border border-neutral-100 bg-neutral-50/50"
      />
      <motion.div
        animate={{ scale: [0.96, 1.04, 0.96] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-16 h-16 bg-white shadow-lg shadow-neutral-200/50 rounded-full border border-neutral-100 flex items-center justify-center z-10"
      >
        <svg className="w-5 h-5 text-neutral-600 animate-[spin_12s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0px" />
        </svg>
      </motion.div>
    </div>

    {/* ================= REDESIGNED PREMIUM TEXT STACK ================= */}
    <div className="flex flex-col gap-2.5 justify-center items-stretch w-full md:w-[320px]">
      {[
        { id: "01", tag: "STG", text: "Initializing Engineering Workflow..." },
        { id: "02", tag: "SYS", text: "Building Tomorrow's Technology..." },
        { id: "03", tag: "REQ", text: "Analyzing Project Requirements..." }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ x: 6, backgroundColor: "rgba(250,250,250,0.8)", borderColor: "rgba(220,220,220,0.8)" }}
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl border border-neutral-100/70 bg-white/40 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 group cursor-pointer"
        >
          {/* Hex / Step Identifier */}
          <span className="text-[9px] font-mono font-bold tracking-tight text-neutral-400 bg-neutral-100/80 px-1.5 py-0.5 rounded-md group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
            {item.id}
          </span>
          
          <span className="text-neutral-300 font-mono text-[10px] group-hover:text-neutral-400 transition-colors">//</span>
          
          {/* Main Text String Wrapper */}
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[11px] text-neutral-500 tracking-wide truncate group-hover:text-neutral-800 transition-colors duration-200">
              {item.text}
              <span className="inline-block w-1 h-3 ml-1 bg-neutral-600 opacity-0 group-hover:opacity-100 animate-pulse align-middle" />
            </p>
          </div>

          {/* Activity State Micro-Indicator */}
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover:bg-neutral-900 relative flex items-center justify-center transition-colors">
            {idx === 0 && (
              <span className="absolute w-full h-full rounded-full bg-neutral-800 animate-ping opacity-25" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
    {/* ================================================================= */}

  </div>

  {/* Bottom Controls & Compact Progress Card */}
  <div className="z-10 flex flex-col sm:flex-row justify-between items-center sm:items-end w-full gap-4 pt-4 border-t border-neutral-50 mt-6 md:mt-0">
    
    {/* Minimal Tag Navigation */}
    <div className="flex gap-4 text-[9px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
      <span className="hover:text-neutral-700 cursor-pointer transition-colors">SPECIFICATION</span>
      <span>/</span>
      <span className="hover:text-neutral-700 cursor-pointer transition-colors">ARCHITECTURE</span>
      <span>/</span>
      <span className="hover:text-neutral-700 cursor-pointer transition-colors">WORKFLOW</span>
    </div>

    {/* Sleek Progress Module */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="bg-white/60 backdrop-blur-md rounded-2xl border border-neutral-100 p-3.5 w-full sm:w-56 shadow-sm flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-semibold text-neutral-800">Engineering Progress</span>
        <span className="text-[8px] font-mono bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-500 tracking-wider animate-pulse">SYNC</span>
      </div>

      <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: ["10%", "85%", "10%"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="h-full bg-neutral-800 rounded-full"
        />
      </div>

      <div className="flex justify-between items-center text-[9px] text-neutral-400 font-mono">
        <span>Validating Components...</span>
        <span className="font-bold text-neutral-600">BUILD</span>
      </div>
    </motion.div>
  </div>
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
