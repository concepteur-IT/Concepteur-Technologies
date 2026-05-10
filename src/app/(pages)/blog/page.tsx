import { Metadata } from "next";
import { blogData } from "@/data/blogData";
import BlogClient from "./client";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Explore our latest thoughts, insights, and perspectives on engineering, AI, and digital transformation.",
};

export default function BlogPage() {
  const posts = Object.values(blogData);

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="w-full px-5 md:px-[15%]">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-medium mb-6">
            — INSIGHTS & PERSPECTIVES
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-black mb-8">
            Engineering the <br className="hidden md:block" /> future,
            documented.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Dive into our thoughts on enterprise architecture, AI integration,
            team performance, and the technologies shaping tomorrow's digital
            landscape.
          </p>
        </div>

        {/* Blog Grid */}
        <BlogClient posts={posts} />
      </div>
    </main>
  );
}
