import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://minhasahmod.vercel.app"),
  title: {
    default: `${profile.name} | Web Developer & Chemistry Student`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} - Web Developer & 1st year BSc Chemistry student at Patiya Govt. College, National University, Bangladesh. Building responsive, fast web applications with HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js.`,
  keywords: [
    "Minhas Ahmod",
    "Minhas",
    "Web Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Patiya Govt College",
    "National University Bangladesh",
    "Bondi Pathshala Campus Ambassador",
    "Portfolio",
    "Chattogram Web Developer",
  ],
  authors: [{ name: profile.name, url: "https://github.com/Minhas10" }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Web Developer & Chemistry Student`,
    description: `Explore projects, technical skills, and articles by ${profile.name} - Web developer building with HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js.`,
    url: "https://minhasahmod.vercel.app",
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: `${profile.name} - Web Developer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Web Developer & Chemistry Student`,
    description: `Building responsive web applications with JavaScript, React, and Next.js. 1st year BSc Chemistry student at Patiya Govt. College.`,
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.shortBio,
    url: "https://minhasahmod.vercel.app",
    image: "https://minhasahmod.vercel.app/images/profile.jpeg",
    sameAs: [
      "https://github.com/Minhas10",
      "https://www.linkedin.com/in/minhas-ahmod/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chattogram",
      addressCountry: "Bangladesh",
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent Developer",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Patiya Govt. College, National University Bangladesh",
      },
      {
        "@type": "Organization",
        name: "Bondi Pathshala",
      },
    ],
    knowsAbout: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Git",
      "GitHub",
      "Chemistry",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('minhas-portfolio-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] dark:bg-[#07090e] text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
