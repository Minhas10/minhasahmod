import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BlogSection from "@/components/sections/BlogSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
