import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, ArrowLeft, BookOpen, Tag } from "lucide-react";

export const metadata = {
  title: "Blog & Articles | Minhas Ahmod",
  description: "Read thoughts and guides on web development, JavaScript, React, Next.js, and balancing scientific studies with coding by Minhas Ahmod.",
  openGraph: {
    title: "Blog & Articles | Minhas Ahmod",
    description: "Insights on modern web development, problem-solving, and building software by Minhas Ahmod.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
      {/* Top Hero Banner */}
      <div className="relative border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/60 backdrop-blur-md pt-12 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-400 mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-600 dark:text-sky-400 text-xs font-mono font-medium tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Articles & Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Writings & Explorations
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Documenting my journey through computer science, modern frontend frameworks, and the scientific mindset shaped by chemistry.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No articles found</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              New articles are being written. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative bg-white dark:bg-[#0c121e] rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 hover:border-blue-500/40 dark:hover:border-sky-500/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-4">
                  {/* Meta: Date, Read Time, Tags */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      {post.readTime}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span>•</span>
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-sky-400 group-hover:gap-3 transition-all"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
