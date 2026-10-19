"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Briefcase,
  FolderGit2,
  Sparkles,
  FlaskConical,
  Compass,
} from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  const defaultHighlights = [
    {
      icon: "GraduationCap",
      title: "BSc in Chemistry",
      detail: "1st Year at Patiya Govt. College (National University, BD)",
      badge: "Academic",
    },
    {
      icon: "Code2",
      title: "Web Development",
      detail: "HTML, CSS, Tailwind CSS, JavaScript, React & Next.js",
      badge: "Technical",
    },
    {
      icon: "Briefcase",
      title: "Campus Ambassador",
      detail: "Bondi Pathshala (December 2024 to June 2025)",
      badge: "Leadership",
    },
    {
      icon: "FolderGit2",
      title: "Featured Real Builds",
      detail: "Weekly Planner, Fare Finder & Land-Record Search Site",
      badge: "Projects",
    },
  ];

  const about = Array.isArray(profile.about)
    ? {
        title: "About Me",
        badge: "Background & Journey",
        paragraphs: profile.about,
        highlights: profile.highlights || defaultHighlights,
      }
    : {
        title: profile.about?.title || "About Me",
        badge: profile.about?.badge || "Background & Journey",
        paragraphs: profile.about?.paragraphs || [],
        highlights: profile.about?.highlights || defaultHighlights,
      };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      case "FolderGit2":
        return <FolderGit2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative w-full min-w-full py-16 sm:py-20 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#07090e] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-600 dark:text-sky-400 text-xs font-mono font-medium tracking-wide uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>{about.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {about.title}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto" />
          </motion.div>

          {/* Main Grid: Narrative + Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Narrative Story (7 cols) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
            >
              {about.paragraphs.map((paragraph, idx) => (
                <div
                  key={idx}
                  className={`relative p-4 sm:p-5 rounded-2xl transition-all duration-200 ${
                    idx === 0
                      ? "bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80"
                      : "bg-transparent"
                  }`}
                >
                  <p>{paragraph}</p>
                </div>
              ))}

              {/* Curiosity & Science Mindset Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-500/[0.08] via-indigo-500/[0.05] to-transparent border-l-4 border-blue-500 text-slate-800 dark:text-slate-200 flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold font-mono text-slate-900 dark:text-white">
                    The Scientific Mindset
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                    Experimenting with chemical reactions and writing code both demand patience, precision, and curiosity. Each bug is like an unexpected reaction: an opportunity to hypothesize, test, and understand.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Key Highlights Cards (5 cols) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {about.highlights.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0c121e] border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      {getHighlightIcon(item.icon)}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
