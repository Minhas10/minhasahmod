"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Safe fallback extractions from data/profile.js
  const name = profile.name || "Minhas Ahmod";
  const role = profile.role || profile.title || "Full-Stack Web Developer";
  const focus = profile.subline || profile.focus || "End-to-End Solutions";
  const stack = profile.stack || ["Node.js", "React", "Next.js", "Tailwind CSS", "MongoDB"];
  const oneLineIntro = profile.headline || profile.oneLineIntro || profile.shortBio || "I build full-stack web apps with Next.js, from clean interfaces to the APIs behind them.";
  const statusCommand = profile.statusCommand || "status --availability";
  const status = profile.status || "online";
  const avatar = profile.avatar || "/images/profile.jpeg";
  const heroButtons = profile.heroButtons || {
    primary: { text: "View Projects", href: "#projects" },
    secondary: { text: "Download Resume", href: "/resume.pdf", isDownload: true },
  };

  const githubSocial = profile.github
    ? { name: "GitHub", url: profile.github }
    : (profile.socials || []).find((s) => s.name.toLowerCase() === "github");
  const linkedinSocial = profile.linkedin
    ? { name: "LinkedIn", url: profile.linkedin }
    : (profile.socials || []).find((s) => s.name.toLowerCase() === "linkedin");

  return (
    <section
      id="home"
      className="relative w-full min-w-full min-h-[90vh] flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#07090e] text-slate-100"
    >
      {/* Background Developer Aesthetic & Ambient Glows (Strictly contained to prevent any right-side overflow) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden max-w-full">
        {/* Repeating Subtle Watermark Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Gradient Glows (Safely bounded inside container) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] h-[240px] sm:h-[350px] bg-sky-500/10 blur-[90px] sm:blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[260px] sm:w-[380px] h-[240px] sm:h-[350px] bg-orange-500/10 blur-[90px] sm:blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center w-full max-w-full"
        >
          {/* Left Column: Code Declaration, Intro & CTAs (min-w-0 prevents grid blowout) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6 w-full min-w-0 max-w-full">
            {/* Terminal Status Pill */}
            <motion.div variants={itemVariants} className="max-w-full">
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#0d1624] border border-cyan-500/30 text-[11px] sm:text-xs font-mono shadow-md backdrop-blur-md max-w-full">
                <span className="text-cyan-400 font-bold">$</span>
                <span className="text-slate-300 truncate">{statusCommand}</span>
                <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-700/60 shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 font-medium">{status}</span>
                </div>
              </div>
            </motion.div>

            {/* Title: const MinhasAhmod = (Controlled font sizing and responsive wrap) */}
            <motion.div variants={itemVariants} className="space-y-1 w-full min-w-0">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 w-full min-w-0">
                <span className="font-mono text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-400 select-none shrink-0">
                  const
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm font-sans">
                  {name}
                </h1>
                <span className="font-mono text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-400 select-none shrink-0">
                  =
                </span>
              </div>
            </motion.div>

            {/* Left-Border Code Block */}
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-orange-500/90 pl-3.5 sm:pl-5 py-1 space-y-1.5 sm:space-y-2 font-mono text-xs sm:text-sm md:text-base leading-relaxed bg-gradient-to-r from-orange-500/[0.04] to-transparent rounded-r-xl w-full max-w-xl min-w-0"
            >
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-orange-400 font-semibold shrink-0">role:</span>
                <span className="text-slate-100 font-medium break-words">&quot;{role}&quot;</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-orange-400 font-semibold shrink-0">focus:</span>
                <span className="text-slate-100 font-medium break-words">&quot;{focus}&quot;</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                <span className="text-orange-400 font-semibold shrink-0">stack:</span>
                <span className="text-slate-300 break-words">
                  [{stack.map((item, i) => (
                    <span key={item}>
                      <span className="text-sky-300">&apos;{item}&apos;</span>
                      {i < stack.length - 1 && <span className="text-slate-400 mr-1 sm:mr-1.5">,</span>}
                    </span>
                  ))}]
                </span>
              </div>
            </motion.div>

            {/* One-Line Intro */}
            <motion.div variants={itemVariants} className="max-w-xl w-full">
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
                {oneLineIntro}
              </p>
            </motion.div>

            {/* Action Buttons & Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2 w-full"
            >
              {/* Primary View Projects Button */}
              <a
                href={heroButtons.primary?.href || "#projects"}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Code2 className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
                <span>{heroButtons.primary?.text || "View Projects"}</span>
              </a>

              {/* Secondary Download Resume Button */}
              <a
                href={heroButtons.secondary?.href || "/resume.pdf"}
                download="Minhas-Ahmod-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#0d1624] hover:bg-[#132034] text-slate-100 border border-slate-700/80 hover:border-slate-500 font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-sky-400 transition-transform group-hover:-translate-y-0.5 duration-300" />
                <span>{heroButtons.secondary?.text || "Download Resume"}</span>
              </a>

              {/* Social Icons: GitHub & LinkedIn */}
              <div className="flex items-center justify-center gap-2 pt-1 sm:pt-0">
                {githubSocial && (
                  <a
                    href={githubSocial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-3 sm:p-3.5 rounded-xl bg-[#0d1624] hover:bg-[#132034] text-slate-300 hover:text-white border border-slate-700/80 hover:border-sky-500/60 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {linkedinSocial && (
                  <a
                    href={linkedinSocial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-3 sm:p-3.5 rounded-xl bg-[#0d1624] hover:bg-[#132034] text-slate-300 hover:text-sky-400 border border-slate-700/80 hover:border-sky-500/60 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo Card with <dev> & </dev> Tags (min-w-0 prevents blowout) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 w-full min-w-0 max-w-full">
            <motion.div
              variants={photoVariants}
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md"
            >
              {/* Corner Tag: <dev> */}
              <div className="absolute -top-5 left-2 font-mono text-xs text-sky-400/80 select-none font-semibold">
                &lt;dev&gt;
              </div>

              {/* Glowing Outer Card Frame */}
              <div className="relative rounded-3xl border border-sky-500/25 bg-gradient-to-b from-[#0e1726]/80 to-[#070b14]/90 p-2.5 sm:p-3.5 shadow-2xl shadow-sky-950/40 backdrop-blur-xl group transition-all duration-500 hover:border-sky-400/40 hover:shadow-sky-500/10">
                {/* Background Ambient Aura */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/15 via-indigo-500/10 to-orange-500/15 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

                {/* Profile Photo Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50">
                  <Image
                    src={avatar}
                    alt={name}
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Inner Vignette & Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Corner Tag: </dev> */}
              <div className="absolute -bottom-5 right-2 font-mono text-xs text-sky-400/80 select-none font-semibold">
                &lt;/dev&gt;
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
