"use client";

import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "twitter":
        return <TwitterIcon className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="w-full mt-auto border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#06080d] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12 md:py-14">
        {/* Responsive Grid: Collapses 3 columns (lg) -> 2 columns (md) -> 1 column (sm/mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 text-white font-mono flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/20">
                M
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {profile.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {profile.shortBio}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase font-mono text-slate-900 dark:text-slate-200">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              {profile.navLinks.map((item) => (
                <li key={item.name}>
                  {item.isDownload ? (
                    <a
                      href={item.href}
                      download="Minhas-Ahmod-Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      {item.name}
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-sky-400 rounded">
                        PDF
                      </span>
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-semibold tracking-wider uppercase font-mono text-slate-900 dark:text-slate-200">
              Connect
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Have a project or opportunity in mind? Feel free to connect or drop an email.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.socials.map((social) => {
                const isMailto = (social.url || "").startsWith("mailto:");

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    {...(!isMailto && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    aria-label={social.name}
                    className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    {getSocialIcon(social.name)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1 text-center sm:text-left">
            {profile.footer.copyright} • Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
          </p>

          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-sky-500/50 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-400 transition-all duration-200 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
