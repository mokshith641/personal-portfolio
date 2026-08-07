"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiEye, FiFileText, FiX, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const downloadResume = () => {
    // Standard resume download logic (accessing /resume.pdf in public folder)
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Mokshith_H_C_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-secondary uppercase mb-2">06 / Documentation</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Curriculum Vitae
        </h3>
        <div className="h-[1.5px] w-12 bg-secondary mt-3 rounded-full" />
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text and Actions */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/20 flex items-center justify-center text-secondary text-lg">
              <FiFileText />
            </div>
            <h4 className="text-xl font-bold text-text-primary">Recruiter Ready</h4>
          </div>

          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Need a printer-friendly version of my background? I have formatted my professional experience, 
            applied AI projects, education indices, and analytical toolsets into a single-page PDF document.
          </p>

          <div className="flex flex-col gap-3.5 mt-2">
            <button
              onClick={downloadResume}
              className="w-full md:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-sm font-semibold flex items-center justify-center gap-2 group transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:scale-[1.02]"
            >
              <FiDownload className="text-text-primary" /> Download PDF Resume
            </button>
            
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="w-full md:w-auto px-6 py-3.5 rounded-full glass hover:bg-white/[0.08] hover:border-white/20 text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02]"
            >
              <FiEye className="text-text-secondary" /> Read Full Resume On-Page
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Visual CV Card Preview */}
        <div className="lg:col-span-7 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-md h-[460px] p-6 rounded-3xl glass bg-black/40 border border-card-border shadow-2xl relative overflow-hidden flex flex-col justify-between group cursor-pointer"
            onClick={() => setIsPreviewOpen(true)}
          >
            {/* Visual glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 pointer-events-none" />

            {/* Simulated CV Header */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-lg font-bold text-text-primary tracking-tight">Mokshith H C</h5>
                  <p className="text-[10px] font-mono text-accent">AI & Machine Learning Engineer</p>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              </div>
              
              {/* Contact dots */}
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[9px] text-text-secondary/70 font-mono">
                <span className="flex items-center gap-1"><FiMail /> mokshith641@gmail.com</span>
                <span className="flex items-center gap-1"><FiPhone /> +91 9008116296</span>
              </div>
            </div>

            {/* Simulating CV Body Blocks */}
            <div className="flex flex-col gap-5 my-6 flex-grow relative z-10 text-[10px]">
              
              {/* Summary Block */}
              <div className="flex flex-col gap-1 border-l border-white/10 pl-3">
                <span className="font-bold text-[9px] uppercase tracking-wider text-text-primary">Professional Summary</span>
                <p className="text-text-secondary leading-normal text-[9px] line-clamp-2">
                  AI & Machine Learning undergraduate with hands-on experience building full-stack applications using Java, React, FastAPI, Django, PostgreSQL, and REST APIs. Developed AI-powered recommendation systems...
                </p>
              </div>

              {/* Projects Block */}
              <div className="flex flex-col gap-1.5 border-l border-white/10 pl-3">
                <span className="font-bold text-[9px] uppercase tracking-wider text-text-primary">Key Projects</span>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[9px] font-bold text-text-primary">
                    <span>Research Paper Assistant</span>
                    <span className="font-mono text-accent">React | FastAPI | Qdrant</span>
                  </div>
                  <div className="flex justify-between text-[9px] font-bold text-text-primary">
                    <span>CareerCompass Recommendation</span>
                    <span className="font-mono text-secondary">Python | Django | Cosine</span>
                  </div>
                </div>
              </div>

              {/* Education Block */}
              <div className="flex flex-col gap-1 border-l border-white/10 pl-3">
                <span className="font-bold text-[9px] uppercase tracking-wider text-text-primary">Education</span>
                <div className="flex justify-between text-[9px] font-medium text-text-primary">
                  <span>Alva's Institute of Engineering & Technology</span>
                  <span className="font-mono text-text-secondary">CGPA: 8.10</span>
                </div>
              </div>

            </div>

            {/* CV Footer Hover Hint */}
            <div className="flex justify-between items-center border-t border-white/[0.05] pt-4 text-[9px] font-mono text-text-secondary/50 relative z-10 group-hover:text-text-primary/70 transition-colors">
              <span>* Click to launch full screen viewer</span>
              <span>1 page layout</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Full screen Interactive Lightbox / Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Viewer Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass bg-slate-950 border border-card-border p-6 md:p-10 flex flex-col gap-8 shadow-2xl no-scrollbar select-text"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary p-1 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all rounded-full cursor-pointer"
                aria-label="Close resume viewer"
              >
                <FiX className="text-lg" />
              </button>

              {/* Title Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/[0.05] pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">Mokshith H C</h3>
                  <p className="text-xs font-mono text-accent">Artificial Intelligence & Machine Learning Undergraduate</p>
                </div>
                <button
                  onClick={downloadResume}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white flex items-center gap-1.5 hover:scale-102 transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                >
                  <FiDownload /> Download PDF
                </button>
              </div>

              {/* Content body imitating resume structure */}
              <div className="flex flex-col gap-6 text-xs text-text-secondary leading-relaxed">
                
                {/* Contacts Block */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[11px] font-mono border-b border-white/[0.04] pb-4">
                  <span className="flex items-center gap-1.5"><FiMail className="text-accent" /> mokshith641@gmail.com</span>
                  <span className="flex items-center gap-1.5"><FiPhone className="text-accent" /> +91 9008116296</span>
                  <span className="flex items-center gap-1.5"><FiMapPin className="text-accent" /> Karnataka, India</span>
                  <span className="flex items-center gap-1.5">github.com/mokshith641</span>
                </div>

                {/* Section: Summary */}
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider border-l-2 border-primary pl-2">Professional Summary</h4>
                  <p className="pl-3">
                    AI & Machine Learning undergraduate with hands-on experience building full-stack applications using Java, React, FastAPI, Django, PostgreSQL, and REST APIs. Developed AI-powered recommendation systems, intelligent automation tools, and data-driven applications using Python and Machine Learning techniques. Passionate about backend engineering, scalable APIs, and applied AI solutions, with strong problem-solving skills.
                  </p>
                </div>

                {/* Section: Education */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider border-l-2 border-secondary pl-2">Education</h4>
                  
                  <div className="flex flex-col gap-2.5 pl-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="text-text-primary text-[13px]">Alva's Institute of Engineering and Technology</strong>
                        <p className="text-[11px]">Bachelor of Engineering, Artificial Intelligence & Machine Learning</p>
                      </div>
                      <span className="font-mono text-accent text-right">2023 – Present<br /><span className="text-[10px] text-text-secondary">CGPA: 8.10</span></span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="text-text-primary text-[13px]">BGS Institution, Chikkamagaluru</strong>
                        <p className="text-[11px]">Pre-University Course (PUC)</p>
                      </div>
                      <span className="font-mono text-text-secondary text-right">2021 – 2023<br /><span className="text-[10px]">Aggregate: 87.17%</span></span>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="text-text-primary text-[13px]">MDRS, Sakaleshpura</strong>
                        <p className="text-[11px]">Secondary School Leaving Certificate (SSLC)</p>
                      </div>
                      <span className="font-mono text-text-secondary text-right">2021<br /><span className="text-[10px]">Aggregate: 92.62%</span></span>
                    </div>
                  </div>
                </div>

                {/* Section: Projects */}
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider border-l-2 border-accent pl-2">Projects</h4>
                  
                  <div className="flex flex-col gap-3 pl-3">
                    <div>
                      <div className="flex justify-between text-text-primary font-bold">
                        <span>CareerCompass – Intelligent Career Path Recommendation System</span>
                        <span className="font-mono text-accent font-normal">Python | Django | TF-IDF | Cosine Similarity</span>
                      </div>
                      <ul className="list-disc pl-4 mt-1 flex flex-col gap-0.5 text-[11px]">
                        <li>Developed an AI-powered recommendation system using Python, Django, TF-IDF, and Cosine Similarity to match user profiles with optimal career paths.</li>
                        <li>Processed and analyzed over 16,000 GitHub repositories using Pandas and NumPy to perform large-scale skill extraction.</li>
                        <li>Engineered scalable backend modules in Django to support profile matching and automated skill-gap analysis.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between text-text-primary font-bold">
                        <span>Smart Notification System</span>
                        <span className="font-mono text-accent font-normal">Python | FastAPI | REST APIs</span>
                      </div>
                      <ul className="list-disc pl-4 mt-1 flex flex-col gap-0.5 text-[11px]">
                        <li>Designed and implemented a rule-based notification system in Python to automate alert generation based on defined triggers.</li>
                        <li>Built robust backend services using FastAPI and integrated custom REST APIs for seamless data exchange.</li>
                        <li>Maintained version control and collaborative development workflows using Git and GitHub.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between text-text-primary font-bold">
                        <span>Research Paper Assistant</span>
                        <span className="font-mono text-accent font-normal">React | TypeScript | FastAPI | Supabase | LangChain | Qdrant</span>
                      </div>
                      <ul className="list-disc pl-4 mt-1 flex flex-col gap-0.5 text-[11px]">
                        <li>Built an AI-powered research paper assistant using FastAPI, TypeScript, React, Supabase (PostgreSQL), LangChain, and Groq API.</li>
                        <li>Developed a responsive React frontend for uploading papers, viewing analysis results, and interacting with the assistant.</li>
                        <li>Implemented RAG-based semantic search with Qdrant, PDF parsing, and LLM-powered summarization for efficient research paper analysis.</li>
                        <li>Developed scalable REST APIs and integrated vector embeddings to retrieve accurate, context-aware information from research documents.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Achievements */}
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-wider border-l-2 border-success pl-2">Achievements & Certifications</h4>
                  <ul className="list-disc pl-7 flex flex-col gap-1 text-[11px]">
                    <li>Successfully solved over <strong className="text-text-primary">70 data structures and algorithms problems</strong> across LeetCode and HackerRank.</li>
                    <li>Certified in <strong className="text-text-primary">The Joy of Computing Using Python</strong> by NPTEL, achieving Elite distinction with a score of <strong className="text-text-primary">90%</strong>.</li>
                    <li>Completed the <strong className="text-text-primary">Google Cloud Generative AI Leader Track</strong>, gaining proficiency in applied generative AI concepts.</li>
                  </ul>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
