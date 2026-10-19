import React from "react";

export function HtmlIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 3L6 19.5L12 21L18 19.5L19.5 3H4.5Z" fill="#E34F26" />
      <path d="M12 4.5V19.4L16.7 18.1L17.9 4.5H12Z" fill="#EF652A" />
      <path d="M8.2 7.5H15.8L15.6 9.5H10.4L10.7 12H15.3L14.9 16.2L12 17L9.1 16.2L8.9 14.1H7.1L7.5 17.8L12 19L16.5 17.8L17.2 9.5H8.4L8.2 7.5Z" fill="white" />
    </svg>
  );
}

export function CssIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 3L6 19.5L12 21L18 19.5L19.5 3H4.5Z" fill="#1572B6" />
      <path d="M12 4.5V19.4L16.7 18.1L17.9 4.5H12Z" fill="#33A9DC" />
      <path d="M8.2 7.5H15.8L15.6 9.5H10.4L10.7 12H15.3L14.9 16.2L12 17L9.1 16.2L8.9 14.1H7.1L7.5 17.8L12 19L16.5 17.8L17.2 9.5H8.4L8.2 7.5Z" fill="white" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fill="#06B6D4"
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
      />
    </svg>
  );
}

export function JavascriptIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 18.5C8.3 18.5 8.9 18.1 9.2 17.3L9.2 12H7.2V16.3C7.2 16.9 6.8 17.1 6.3 17.1C5.7 17.1 5.3 16.8 5 16.2L3.5 17.1C4.3 18.1 5.8 18.5 7.5 18.5ZM14.4 18.6C16.6 18.6 18 17.4 18 15.6C18 13.9 16.8 13.2 15.3 12.6L14.7 12.3C13.8 12 13.4 11.6 13.4 11C13.4 10.3 14 9.8 14.9 9.8C15.7 9.8 16.2 10.2 16.7 10.9L18.1 9.9C17.3 8.7 16.2 8.2 14.9 8.2C13.1 8.2 11.7 9.3 11.7 11.1C11.7 12.7 12.8 13.5 14.3 14.1L14.9 14.4C15.9 14.8 16.3 15.3 16.3 15.9C16.3 16.7 15.6 17.1 14.4 17.1C13.4 17.1 12.7 16.6 12.2 15.7L10.7 16.7C11.5 17.9 12.8 18.6 14.4 18.6Z"
        fill="#000000"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="3.6" ry="9" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.6" ry="9" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="3.6" ry="9" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" className="text-slate-900 dark:text-white" />
      <path
        d="M15.5 7.5V16.5M8.5 7.5V16.5L16.2 16.5"
        stroke="none"
      />
      <path
        d="M15.5 8.2V15.8M8.5 8.2V15.8L15.6 16"
        stroke="none"
      />
      <path
        d="M16 8H14.5V16H16V8Z"
        fill="currentColor"
        className="text-white dark:text-slate-950"
      />
      <path
        d="M8 8H9.5L15.8 16.5H14.2L8 8Z"
        fill="currentColor"
        className="text-white dark:text-slate-950"
      />
      <path
        d="M8 8H9.5V16H8V8Z"
        fill="currentColor"
        className="text-white dark:text-slate-950"
      />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L9.1 4.2L11.3 6.4C11.9 6.2 12.6 6.3 13.1 6.8C13.6 7.3 13.7 8 13.5 8.6L15.6 10.7C16.2 10.5 16.9 10.6 17.4 11.1C18.2 11.9 18.2 13.1 17.4 13.9C16.6 14.7 15.4 14.7 14.6 13.9C14.1 13.4 14 12.7 14.2 12.1L12.3 10.2V15.2C12.5 15.4 12.6 15.7 12.6 16C12.6 17.1 11.7 18 10.6 18C9.5 18 8.6 17.1 8.6 16C8.6 15.2 9.1 14.5 9.8 14.2V9.6C9.1 9.3 8.6 8.6 8.6 7.8C8.6 7.2 8.9 6.7 9.3 6.3L7.5 4.5L2.4 9.6C1.8 10.2 1.8 11.2 2.4 11.8L10.9 20.3C11.5 20.9 12.5 20.9 13.1 20.3L21.6 11.8C22.2 11.2 22.2 10.2 21.6 10.9Z"
        fill="#F05032"
      />
    </svg>
  );
}

export function GithubSkillIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function VscodeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.5 2.2L6.8 9.8L3.2 7L1.8 7.9L5.4 12L1.8 16.1L3.2 17L6.8 14.2L17.5 21.8C18.2 22.3 19.2 21.9 19.2 21V3C19.2 2.1 18.2 1.7 17.5 2.2Z"
        fill="#007ACC"
      />
      <path
        d="M17.5 2.2L8.2 10.8L11.5 13.5L18.4 8.7C19 8.3 19.2 7.7 19.2 7V3C19.2 2.1 18.2 1.7 17.5 2.2Z"
        fill="#0065A9"
        opacity="0.7"
      />
      <path
        d="M17.5 21.8L8.2 13.2L11.5 10.5L18.4 15.3C19 15.7 19.2 16.3 19.2 17V21C19.2 21.9 18.2 22.3 17.5 21.8Z"
        fill="#0065A9"
        opacity="0.7"
      />
    </svg>
  );
}

export function MongodbIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C11.6 2.3 8.3 6.6 8.3 12.3C8.3 17 10.7 20.3 11.7 21.6C11.8 21.7 11.9 21.8 12 21.9C12.1 21.8 12.2 21.7 12.3 21.6C13.3 20.3 15.7 17 15.7 12.3C15.7 6.6 12.4 2.3 12 2Z"
        fill="#13AA52"
      />
      <path
        d="M12 21.9V2C12.4 2.3 15.7 6.6 15.7 12.3C15.7 17 13.3 20.3 12.3 21.6C12.2 21.7 12.1 21.8 12 21.9Z"
        fill="#119246"
      />
      <path
        d="M11.9 21.9C11.7 21.6 11.5 21.1 11.5 20.5C11.5 19.8 11.9 19.3 11.9 19.3C11.9 19.3 12 20.4 12.2 20.7C12.4 21 12.4 21.7 12 21.9C11.97 21.9 11.93 21.9 11.9 21.9Z"
        fill="#A6A6A6"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" className="text-slate-900 dark:text-white" />
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        className="text-white dark:text-slate-950 font-bold font-mono text-[11px]"
      >
        ex
      </text>
    </svg>
  );
}

/**
 * Helper to render the appropriate skill icon by key
 */
export function SkillIcon({ name, className = "w-5 h-5" }) {
  const normalized = (name || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "html":
    case "html5":
      return <HtmlIcon className={className} />;
    case "css":
    case "css3":
      return <CssIcon className={className} />;
    case "tailwind":
    case "tailwindcss":
      return <TailwindIcon className={className} />;
    case "javascript":
    case "js":
      return <JavascriptIcon className={className} />;
    case "mongodb":
    case "mongo":
      return <MongodbIcon className={className} />;
    case "express":
    case "expressjs":
      return <ExpressIcon className={className} />;
    case "react":
    case "reactjs":
      return <ReactIcon className={className} />;
    case "nextjs":
    case "next":
      return <NextjsIcon className={className} />;
    case "git":
      return <GitIcon className={className} />;
    case "github":
      return <GithubSkillIcon className={className} />;
    case "vscode":
    case "visualstudiocode":
      return <VscodeIcon className={className} />;
    default:
      return (
        <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center text-xs font-bold font-mono">
          {name.charAt(0)}
        </span>
      );
  }
}
