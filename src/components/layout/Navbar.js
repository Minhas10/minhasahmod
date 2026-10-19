"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download, FileText, ChevronRight, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for blur-on-scroll and active section spy
  useEffect(() => {
    const handleScroll = () => {
      // Blur on scroll trigger
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sectionIds = ["home", "about", "skills", "projects", "blog", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href, isDownload) => {
    if (isDownload) {
      setMobileMenuOpen(false);
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      setActiveSection(targetId);
      setMobileMenuOpen(false);

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/${href}`;
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#07090e]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-2.5 sm:py-3"
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home", false);
            }}
            className="group flex items-center tracking-tight"
          >
            <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
              {profile.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            {profile.navLinks.map((item) => {
              const isTargetActive =
                !item.isDownload &&
                item.href.startsWith("#") &&
                activeSection === item.href.replace("#", "");

              if (item.isDownload) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    download="Minhas-Ahmod-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full text-blue-600 dark:text-sky-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/50 transition-all duration-200 hover:scale-[1.02]"
                    title="Download Resume (PDF)"
                  >
                    <Download className="w-3.5 h-3.5 animate-bounce" />
                    <span>{item.name}</span>
                  </a>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, false);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isTargetActive
                      ? "text-white bg-blue-600 dark:bg-sky-500 shadow-sm shadow-blue-500/25 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/60 transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900 dark:text-white" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] sm:top-[72px] z-40 bg-slate-950/50 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full bg-white dark:bg-[#07090e] border-b border-slate-200/80 dark:border-slate-800/80 p-5 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1.5">
              {profile.navLinks.map((item) => {
                const isTargetActive =
                  !item.isDownload &&
                  item.href.startsWith("#") &&
                  activeSection === item.href.replace("#", "");

                if (item.isDownload) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      download="Minhas-Ahmod-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-blue-600/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 font-semibold text-sm transition-colors hover:bg-blue-600/20"
                    >
                      <div className="flex items-center gap-2.5">
                        <Download className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                        <span>Download {item.name}</span>
                      </div>
                      <span className="text-xs font-mono uppercase bg-blue-600 dark:bg-sky-500 text-white px-2 py-0.5 rounded-md">
                        PDF
                      </span>
                    </a>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, false);
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isTargetActive
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-sky-400 font-semibold border-l-4 border-blue-600 dark:border-sky-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Status */}
            <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for hire
              </span>
              <span className="font-mono">{profile.location.split("(")[0]}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
