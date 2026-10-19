import React from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 2); // Show top 2 posts on homepage

  return (
    <section
      id="blog"
      className="relative w-full min-w-full py-16 sm:py-20 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-[#090d16] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-600 dark:text-sky-400 text-xs font-mono font-medium tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            From the Blog
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Thoughts, technical discoveries, and reflections on combining scientific discipline with modern software engineering.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between bg-white dark:bg-[#0c121e] rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 hover:border-blue-500/40 dark:hover:border-sky-500/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {post.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-sky-400 group-hover:gap-3 transition-all"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Action */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore All Blog Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
