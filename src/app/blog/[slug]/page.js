import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, Sparkles } from "lucide-react";

export const instant = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Minhas Ahmod",
    };
  }

  return {
    title: `${post.title} | Minhas Ahmod`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] transition-colors duration-300 py-10 sm:py-16">
      <article className="max-w-3xl mx-auto px-4">
        {/* Navigation & Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors group px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Articles</span>
          </Link>

          <Link
            href="/"
            className="text-xs font-mono text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
          >
            Portfolio Home
          </Link>
        </div>

        {/* Article Header Card */}
        <header className="space-y-6 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-600 dark:text-sky-400 text-xs font-mono font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          {/* Meta Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold font-sans">
                M
              </div>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <div className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <span>•</span>
            <div className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content Rendered Markdown */}
        <div
          className="prose prose-slate dark:prose-invert max-w-none pt-8 pb-12 
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-base sm:prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-700 dark:prose-p:text-slate-300
            prose-a:text-blue-600 dark:prose-a:text-sky-400 prose-a:underline hover:prose-a:text-blue-700
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-ul:list-disc prose-ul:pl-6 prose-li:my-1 prose-li:text-slate-700 dark:prose-li:text-slate-300
            prose-hr:border-slate-200 dark:prose-hr:border-slate-800 prose-hr:my-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Post Footer Author Bio */}
        <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0c121e] rounded-3xl p-6 sm:p-8 border shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0">
              MA
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Written by {post.author}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                First-year BSc Chemistry student at Patiya Govt. College, National University, Bangladesh. Web developer passionate about JavaScript, React, Next.js, and building real-world tools that help people.
              </p>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline"
                >
                  <span>Connect or get in touch</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
