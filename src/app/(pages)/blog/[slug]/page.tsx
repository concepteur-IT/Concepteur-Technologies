import { blogData } from "@/data/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Concepteur Technologies Blog`,
    description: post.content.substring(0, 150).replace(/<[^>]+>/g, '') + "...",
  };
}

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white pt-24 sm:pt-32 pb-24">
      <article className="w-full">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-5 md:px-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/company" 
              className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors font-mono"
            >
              Company
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-xs uppercase tracking-widest text-gray-900 font-mono">
              Blog
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-b border-gray-100 py-6">
            <Link href={`/team/${post.authorSlug}`} className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={post.authorImage}
                  alt={post.authorName}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 group-hover:text-black transition-colors">
                  {post.authorName}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">
                  {post.authorRole}
                </span>
              </div>
            </Link>

            <div className="flex flex-col items-end text-right">
              <span className="text-sm text-gray-900">{post.date}</span>
              <span className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </div>
        </header>



        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div 
            className="prose prose-lg md:prose-xl prose-gray max-w-none prose-headings:font-light prose-headings:tracking-tight prose-a:text-black prose-a:underline-offset-4 hover:prose-a:text-gray-600 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Footer / Author Block */}
        <footer className="max-w-3xl mx-auto px-5 md:px-8 mt-24">
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-6">Written By</h3>
            <Link 
              href={`/team/${post.authorSlug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 transition-all duration-300 custom-notch-tl-br"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-gray-200 border border-gray-300">
                <Image
                  src={post.authorImage}
                  alt={post.authorName}
                  fill
                  className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-900 group-hover:text-black transition-colors mb-1">
                  {post.authorName}
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">
                  {post.authorRole}
                </p>
                <div className="flex items-center text-sm font-medium text-black gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  View full profile
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
