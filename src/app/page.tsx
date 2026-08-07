import BackgroundGrid from "@/components/BackgroundGrid";
import MouseGlow from "@/components/MouseGlow";
import FloatingNav from "@/components/FloatingNav";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Achievements from "@/components/Achievements";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <>
      {/* Premium compiler/system loading indicator */}
      <LoadingScreen />

      {/* Dynamic particles mesh and ambient light background */}
      <BackgroundGrid />

      {/* Radial follower cursor halo with settings toggle */}
      <MouseGlow />

      {/* Sliding Vercel-like menu header bar */}
      <FloatingNav />

      {/* Scrolling Sections wrapper */}
      <main className="relative z-20 flex flex-col w-full min-h-screen">
        <Hero />
        
        {/* Decorative separator lines */}
        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <About />
        
        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Skills />
        
        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Experience />
        
        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Projects />

        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <GithubStats />

        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Achievements />

        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Resume />

        <div className="w-full max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <Contact />
      </main>

      {/* Minimal premium Footer */}
      <footer className="relative z-30 border-t border-card-border bg-[#030712] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-secondary select-none">
          <div className="flex flex-col items-center md:items-start gap-1 font-mono">
            <span className="text-text-primary font-bold">Mokshith H C</span>
            <span>AI & Machine Learning Engineer Portfolio</span>
          </div>

          <div className="flex items-center gap-6 font-mono">
            <a 
              href="https://github.com/mokshith641" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <FiGithub /> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/mokshith-h-c" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a 
              href="mailto:mokshith641@gmail.com" 
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              <FiMail /> Mail
            </a>
          </div>

          <div className="font-mono text-[10px] text-text-secondary/50">
            &copy; {new Date().getFullYear()} Mokshith H C. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
