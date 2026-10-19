"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark or light theme"
      className={`relative inline-flex items-center justify-center p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/60 transition-all duration-300 shadow-sm active:scale-95 ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {mounted && theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400 animate-in fade-in zoom-in-75 duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200 animate-in fade-in zoom-in-75 duration-300" />
        )}
      </div>
    </button>
  );
}
