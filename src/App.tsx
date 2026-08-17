import { useState, useEffect } from "react";
import BackgroundGrid from "./components/BackgroundGrid";
import MouseGlow from "./components/MouseGlow";
import FloatingNav from "./components/FloatingNav";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#/" || hash === "#") {
        setCurrentPage("home");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        const page = hash.replace("#/", "");
        const validPages = ["home", "about", "skills", "projects", "achievements", "contact"];
        if (validPages.includes(page)) {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: "instant" });
        } else {
          setCurrentPage("not-found");
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Execute on initial render
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "achievements":
        return <Achievements />;
      case "contact":
        return <Contact />;
      case "not-found":
        return <NotFound />;
      default:
        return <Hero />;
    }
  };

  if (currentPage === "not-found") {
    return <NotFound />;
  }

  return (
    <>
      {/* Premium compiler/system loading indicator */}
      <LoadingScreen />

      {/* Dynamic particles mesh and ambient light background */}
      <BackgroundGrid />

      {/* Radial follower cursor halo with settings toggle */}
      <MouseGlow />

      {/* Sliding Vercel-like menu header bar */}
      <FloatingNav activePage={currentPage} />

      {/* Main content wrapper */}
      <main className="relative z-20 flex flex-col w-full min-h-[calc(100vh-210px)] pt-28 pb-16">
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          {renderPage()}
        </div>
      </main>

      {/* Minimal premium Footer */}
      <footer className="relative z-30 border-t border-card-border bg-[#f8fafc] py-12 px-6">
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
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/mokshith-h-c" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:mokshith641@gmail.com" 
              className="hover:text-text-primary transition-colors flex items-center gap-1.5"
            >
              Mail
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
