"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const emailAddress = (profile.email || "minhasahamod@gmail.com").replace(
    /^mailto:/i,
    ""
  );

  const handleCopyEmail = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMailtoClick = (e) => {
    e.preventDefault();
    // Try opening mailto via window.location (works better in some environments)
    const mailtoUrl = `mailto:${emailAddress}`;
    
    // Use a hidden iframe approach as primary method (most reliable cross-browser)
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = mailtoUrl;
    document.body.appendChild(iframe);
    
    // Also try window.open as backup
    setTimeout(() => {
      try {
        const win = window.open(mailtoUrl, "_self");
        // If window.open returns null, it was blocked
        if (!win) {
          // Fallback: copy email and show helpful message
          handleCopyEmail();
        }
      } catch {
        // If all methods fail, copy email
        handleCopyEmail();
      }
      // Clean up iframe
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error upon typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setStatus("loading");
    setStatusMessage("");

    // Client-side quick check
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please provide your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message of at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setFieldErrors(newErrors);
      setStatus("error");
      setStatusMessage("Please fix the errors highlighted below.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setStatusMessage(
          data.error || "Failed to send message. Please try again."
        );
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      } else {
        setStatus("success");
        setStatusMessage(
          data.message || "Thank you! Your message has been sent successfully."
        );
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setStatusMessage(
        "Network error. Please check your internet connection or email directly."
      );
    }
  };

  const githubSocial = (profile.socials || []).find(
    (s) => s.name.toLowerCase() === "github"
  );
  const linkedinSocial = (profile.socials || []).find(
    (s) => s.name.toLowerCase() === "linkedin"
  );

  return (
    <section
      id="contact"
      className="relative w-full min-w-full py-16 sm:py-20 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#07090e] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/60 text-blue-600 dark:text-sky-400 text-xs font-mono font-medium tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a project in mind, want to discuss an internship or developer role, or just want to say hi? Send me a message below!
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto" />
        </div>

        {/* 2-Column Grid: Contact Info (5 cols) + Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-[#0c121e] border border-slate-200/80 dark:border-slate-800/80 space-y-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  I am actively seeking opportunities to contribute to real-world software, learn alongside great engineers, and create impactful user experiences.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-sky-500/50 transition-all duration-200">
                  <a
                    href={`mailto:${emailAddress}`}
                    onClick={handleMailtoClick}
                    className="flex items-center gap-3.5 min-w-0 flex-1 group"
                    title="Click to open default mail client"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-sky-400 group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                        Email
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        {emailAddress}
                      </span>
                    </div>
                  </a>

                  {/* Quick Copy & Gmail buttons */}
                  <div className="flex items-center gap-2 pl-12 sm:pl-0 shrink-0">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      title="Copy email to clipboard"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 active:scale-95 ${
                        copied
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40"
                          : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                        emailAddress
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Compose in Gmail (Browser)"
                      aria-label="Compose in Gmail"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-sky-400 border border-slate-200/80 dark:border-slate-700 text-xs font-mono transition-colors active:scale-95"
                    >
                      <span>Gmail</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Available for frontend &amp; full-stack projects</span>
                </div>
              </div>

              {/* Social Connect */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Social profiles:
                </span>
                <div className="flex items-center gap-2">
                  {githubSocial && (
                    <a
                      href={githubSocial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 border border-slate-200/80 dark:border-slate-800 transition-all hover:scale-105"
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
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 border border-slate-200/80 dark:border-slate-800 transition-all hover:scale-105"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0c121e] border border-slate-200/80 dark:border-slate-800/80 shadow-sm relative">
              {/* Success Notification Alert */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold">Message Delivered!</p>
                    <p className="text-xs leading-relaxed">{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Error Notification Alert */}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 flex items-start gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-bold">Submission Error</p>
                    <p className="text-xs leading-relaxed">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    placeholder="Minhas Ahmod"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                      fieldErrors.name
                        ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-sky-500/20"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300"
                  >
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none transition-all duration-200 ${
                      fieldErrors.email
                        ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-sky-500/20"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider font-mono text-slate-700 dark:text-slate-300"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    placeholder="Hello Minhas, I'd like to talk about..."
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none transition-all duration-200 resize-y min-h-[120px] ${
                      fieldErrors.message
                        ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                        : "border-slate-200 dark:border-slate-800 focus:border-blue-500 dark:focus:border-sky-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-sky-500/20"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="message-error" className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
