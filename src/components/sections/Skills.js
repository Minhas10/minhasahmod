"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Sparkles,
  Wrench,
  GraduationCap,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { SkillIcon } from "@/components/ui/TechIcons";
import { skillCategories } from "@/data/skills";

export default function Skills() {
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

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case "backend":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "learning":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full min-w-full py-16 sm:py-20 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-[#07090e] transition-colors duration-300"
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
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Skills & Technologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Tech Stack & Tools
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Technologies I use to build modern, performant web applications, alongside tools I use daily and frameworks I am actively learning.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto" />
          </motion.div>

          {/* Responsive Grid (Collapses 4 -> 2 -> 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skillCategories.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0b101b] border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background Ambient Card Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-sky-500/[0.03] dark:from-sky-500/[0.03] dark:to-indigo-500/[0.04] rounded-3xl pointer-events-none" />

                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform duration-200">
                        {getCategoryIcon(group.category)}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-semibold">
                      {group.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills / Items */}
                  <div className="space-y-2.5 pt-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 hover:bg-slate-100/80 dark:hover:bg-slate-800/60 hover:border-blue-400/30 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 shadow-xs flex items-center justify-center shrink-0">
                            <SkillIcon name={skill.icon || skill.name} className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {group.category === "Learning" && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                            </span>
                          )}
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Note */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span>{group.skills.length} Technologies</span>
                  <span className="text-blue-600 dark:text-sky-400 font-medium">Ready in projects</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
