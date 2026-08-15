import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

interface FloatingNavProps {
  activePage: string;
}

export default function FloatingNav({ activePage }: FloatingNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateToPage = (id: string) => {
    window.location.hash = id === "home" ? "#/" : `#/${id}`;
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex flex-col items-center justify-center p-4 md:p-6 select-none pointer-events-none">
        {/* Floating Navbar */}
        <nav className="pointer-events-auto flex items-center justify-between w-full max-w-4xl h-12 md:h-14 px-4 md:px-6 rounded-full glass bg-black/40 backdrop-blur-md border border-card-border relative shadow-2xl transition-all duration-300">
          
          {/* Logo / Branding */}
          <button 
            onClick={() => navigateToPage("home")}
            className="text-text-primary font-bold tracking-tight text-sm md:text-base cursor-pointer hover:opacity-80 flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Mokshith
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 h-full relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className={`relative text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-white/[0.06] border border-white/[0.08] rounded-full -z-10"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Socials / External links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/mokshith641"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-lg"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/mokshith-h-c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-lg"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors text-xl cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] mx-4 p-5 rounded-3xl glass bg-black/90 backdrop-blur-lg border border-card-border z-40 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateToPage(item.id)}
                  className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                    activePage === item.id 
                      ? "bg-white/[0.06] text-text-primary" 
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.02]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr className="border-white/[0.08]" />

            <div className="flex items-center justify-around py-1">
              <a
                href="https://github.com/mokshith641"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/mokshith-h-c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:mokshith641@gmail.com"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <FiMail /> Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
