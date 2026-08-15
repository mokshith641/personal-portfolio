import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiX, FiInfo, FiCheck, FiAlertCircle, FiMic } from "react-icons/fi";
import { SiPython, SiDjango, SiFastapi, SiReact, SiSupabase, SiLangchain } from "react-icons/si";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  icon: React.ReactNode;
  tags: string[];
  techIcons: React.ReactNode[];
  github: string;
  live: string;
  visual: React.ReactNode; // SVG mockup/visualization
  caseStudy: {
    problem: string;
    solution: string;
    features: string[];
    challenges: string;
    learnings: string;
  };
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "research-assistant",
      title: "Research Paper Assistant",
      shortDesc: "RAG-driven research paper analyzer enabling vector semantic searches, summarization, and interactive PDF conversations.",
      tagline: "Applied GenAI & Vector Search System",
      icon: <SiLangchain />,
      tags: ["FastAPI", "React", "Supabase", "LangChain", "Qdrant", "RAG"],
      techIcons: [<SiReact key="1" />, <SiFastapi key="2" />, <SiLangchain key="3" />, <SiSupabase key="4" />],
      github: "https://github.com/mokshith641", // Will update with direct link later
      live: "https://research-assistant.mokshith.dev",
      visual: (
        <div className="w-full h-full bg-slate-950 flex flex-col justify-between p-4 font-mono text-[10px] text-accent/80 border-b border-card-border relative overflow-hidden select-none">
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-cyan-500/10 blur-xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 text-text-secondary text-[8px]">
            <span>rag_pipeline_agent.py</span>
            <span className="text-emerald-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> ACTIVE</span>
          </div>

          <div className="flex flex-col gap-1.5 py-2">
            <div className="text-text-primary flex items-center gap-1.5">
              <span className="text-secondary">📥</span> Uploading paper: <span className="text-cyan-400">attention_is_all_you_need.pdf</span>
            </div>
            <div className="text-text-secondary pl-3 border-l border-white/10">
              [1] Chunking document: 24 chunks generated
            </div>
            <div className="text-text-secondary pl-3 border-l border-white/10">
              [2] Generating embeddings: OpenAI text-embedding-ada-002
            </div>
            <div className="text-emerald-400 pl-3 border-l border-white/10 flex items-center gap-1.5">
              [3] Vector index synchronized: Qdrant cloud <span className="text-[8px] bg-emerald-500/15 text-emerald-400 px-1 py-0.2 rounded">SUCCESS</span>
            </div>
          </div>

          <div className="border-t border-white/[0.05] pt-2 text-[9px] text-text-primary flex items-center gap-1.5">
            <span className="text-secondary">💡</span> Ask AI: <span className="text-white">Explain Multi-Head Attention...</span>
          </div>
        </div>
      ),
      caseStudy: {
        problem: "Academic research papers are dense and time-consuming to parse. Conventional search lacks context-awareness, making it difficult to locate specific formulaic references or semantic meanings across documents quickly.",
        solution: "Engineered a responsive Retrieval-Augmented Generation (RAG) assistant. The backend is built using FastAPI and LangChain, creating text chunks and converting them into vector embeddings stored in Qdrant. The Supabase (PostgreSQL) database manages document metadata, and the React frontend provides a smooth workspace where users can upload PDFs and ask natural-language questions to receive citation-backed summaries.",
        features: [
          "Multi-document PDF parser and hierarchical chunking strategy.",
          "Embedding generation and upsertion pipeline directly into Qdrant Vector DB.",
          "Semantic query retrieval using Cosine Similarity on vector indices.",
          "Context-aware LLM query responses with page-specific citations.",
          "Secure user workspace and document storage powered by Supabase."
        ],
        challenges: "Handling tables and math symbols in PDFs during chunk parsing occasionally generated fragmented contexts, which corrupted LLM completions.",
        learnings: "Optimized semantic search by introducing sliding-window chunk overlap and meta-filtering, improving retrieval relevance by 25%."
      }
    },
    {
      id: "career-compass",
      title: "CareerCompass Recommendation System",
      shortDesc: "Intelligent career path recommendations using TF-IDF matching and repository skill analysis across 16,000+ developer profiles.",
      tagline: "NLP Profile Recommendation Engine",
      icon: <SiDjango />,
      tags: ["Python", "Django", "TF-IDF", "NumPy", "Pandas", "Scikit-Learn"],
      techIcons: [<SiPython key="1" />, <SiDjango key="2" />],
      github: "https://github.com/mokshith641/career-compass",
      live: "https://career-compass.mokshith.dev",
      visual: (
        <div className="w-full h-full bg-slate-950 flex flex-col justify-between p-4 font-mono text-[10px] text-primary/80 border-b border-card-border relative overflow-hidden select-none">
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 text-text-secondary text-[8px]">
            <span>nlp_recommendation_engine.py</span>
            <span className="text-blue-400">TF-IDF MATCH</span>
          </div>

          <div className="flex flex-col gap-1 py-1 text-[9px]">
            <div className="flex justify-between text-text-secondary">
              <span>Parsed Repos:</span>
              <span className="text-text-primary font-bold">16,423 profiles</span>
            </div>
            <div className="flex justify-between text-text-secondary">
              <span>Extracted Skills:</span>
              <span className="text-text-primary">Python, Docker, Django</span>
            </div>
            
            {/* Mock Vector Match Chart */}
            <div className="mt-1.5 flex flex-col gap-1 border-t border-white/[0.05] pt-1">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary text-[8px]">Software Eng:</span>
                <span className="text-blue-400">92% similarity</span>
              </div>
              <div className="w-full bg-white/[0.04] h-1 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[92%]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary text-[8px]">Data Engineer:</span>
                <span className="text-purple-400">76% similarity</span>
              </div>
              <div className="w-full bg-white/[0.04] h-1 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[76%]" />
              </div>
            </div>
          </div>
        </div>
      ),
      caseStudy: {
        problem: "Recruiters and students struggle to align engineering skills with optimal job descriptions. Generic job recommendation systems miss technical details hidden inside developer portfolios and code repositories.",
        solution: "Created an automated profile matching platform in Django. The engine analyzes developer GitHub portfolios (parsing over 16,000 repositories using Pandas) to extract tech-stack features. By applying TF-IDF vectorization and Cosine Similarity, the engine contrasts the extracted skills against standard industry roles to identify skill gaps and recommend tailored career paths.",
        features: [
          "GitHub API scraper for repository-level technical skill extraction.",
          "Feature engineering pipeline implementing Pandas and NumPy datasets.",
          "NLP profile matching utilizing TF-IDF Vectorizer to format skills lists.",
          "Similarity scoring using Cosine Metrics to recommend targeted careers.",
          "Automated skill-gap analyzer highlighting missing libraries or tools."
        ],
        challenges: "Scraping large amounts of GitHub repository data regularly hit API rate limiters.",
        learnings: "Designed a local redis caching tier and batch scraper that indexes developer repositories asynchronously, preventing API limits and boosting performance."
      }
    },
    {
      id: "voice-bank",
      title: "Voice Bank Assistant",
      shortDesc: "Intelligent voice-driven banking assistant implementing acoustic voice commands, secure speaker authentication, and mock account transaction handlers.",
      tagline: "Speech Processing & Audio Verification",
      icon: <FiMic />,
      tags: ["Python", "SpeechRecognition", "Pyttsx3", "Flask", "Signal Processing"],
      techIcons: [<SiPython key="1" />, <SiFastapi key="2" />],
      github: "https://github.com/mokshith641/voice-bank-assistant",
      live: "https://voicebank.mokshith.dev",
      visual: (
        <div className="w-full h-full bg-slate-950 flex flex-col justify-between p-4 font-mono text-[10px] text-accent/80 border-b border-card-border relative overflow-hidden select-none">
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 text-text-secondary text-[8px]">
            <span>voice_bank_agent.py</span>
            <span className="text-accent flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> LISTENING
            </span>
          </div>

          <div className="flex flex-col gap-1 py-1.5">
            <div className="text-text-primary flex items-center gap-1.5 text-[9px]">
              <span className="text-secondary">🎤</span> Input: <span className="text-white italic">"Transfer $500 to savings"</span>
            </div>
            
            {/* Voice Waveform mock bars */}
            <div className="flex items-center gap-1 h-6 my-1 pl-2">
              <div className="w-[3px] bg-accent/80 h-3 rounded animate-pulse" style={{ animationDelay: "0.1s" }} />
              <div className="w-[3px] bg-accent h-5 rounded animate-pulse" style={{ animationDelay: "0.3s" }} />
              <div className="w-[3px] bg-accent/80 h-2 rounded animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="w-[3px] bg-accent h-6 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-[3px] bg-accent/80 h-4 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
              <div className="w-[3px] bg-accent/40 h-1.5 rounded animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>

            <div className="text-emerald-400 pl-3 border-l border-white/10 text-[9px] flex items-center gap-1">
              &gt; Voice profile verified: Mokshith H C
            </div>
          </div>

          <div className="border-t border-white/[0.05] pt-1.5 text-[8px] text-emerald-400 flex items-center gap-1">
            <span>✔</span> Verbal transaction authorized.
          </div>
        </div>
      ),
      caseStudy: {
        problem: "Traditional mobile banking interfaces are complex for visually impaired users. Additionally, password-based validation on mobile is prone to shoulder-surfing and credentials harvesting.",
        solution: "Engineered an intelligent voice-driven banking broker in Python. The system processes verbal banking requests (such as check balances, transfers, and updates) using SpeechRecognition APIs, provides acoustic guidance with text-to-speech feedback (Pyttsx3), and performs biometric verification using speaker voiceprints to authenticate transactions securely.",
        features: [
          "Acoustic Speech-to-Text and Text-to-Speech conversational wrapper.",
          "Dynamic intent matching engine mapping commands to banking endpoints.",
          "Voice biometrics matching for secure passwordless transaction approval.",
          "Interactive command dashboard displaying verbal signals in real-time.",
          "Decoupled banking transactions backend mock layer."
        ],
        challenges: "Background ambient noises occasionally corrupted phonetic transcription, triggering authentication failures.",
        learnings: "Implemented dual-tier digital filtering and noise reduction filters on the input microphone signals, improving speech parsing accuracy by 30%."
      }
    }
  ];

  return (
    <section id="projects" className="py-12 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-primary uppercase mb-2">04 / Projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Selected Projects
        </h3>
        <div className="h-[1.5px] w-12 bg-primary mt-3 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="flex flex-col rounded-3xl glass bg-black/20 border border-card-border overflow-hidden group hover:border-white/15 transition-all duration-300 relative"
          >
            {/* Visual Showcase (custom SVG layouts) */}
            <div className="h-44 w-full relative border-b border-card-border bg-slate-950/60 overflow-hidden">
              {project.visual}
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-1 gap-6 relative z-10">
              <div className="flex flex-col gap-3">
                
                {/* Tech icons header */}
                <div className="flex items-center justify-between text-text-secondary">
                  <div className="text-lg flex items-center gap-1.5">
                    {project.icon}
                    <span className="text-[10px] font-mono tracking-wider uppercase text-text-secondary/70">
                      {project.tagline}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                    {project.techIcons}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-text-secondary text-xs leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-white/[0.05] pt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-mono text-accent hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <FiX className="rotate-45" /> View Case Study
                </button>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors flex items-center gap-1.5 font-mono text-xs"
                  title="View GitHub Repository"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Dialog Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass bg-slate-900 border border-card-border p-6 md:p-8 flex flex-col gap-6 shadow-2xl no-scrollbar select-text"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary p-1 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all rounded-full cursor-pointer"
                aria-label="Close case study"
              >
                <FiX className="text-lg" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col gap-2 border-b border-white/[0.05] pb-4">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase flex items-center gap-1.5">
                  {activeProject.icon} {activeProject.tagline}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                  {activeProject.title}
                </h3>
              </div>

              {/* Case Study Content details */}
              <div className="flex flex-col gap-5 text-sm text-text-secondary">
                
                {/* Section: Problem */}
                <div className="flex flex-col gap-1.5">
                  <h5 className="font-bold text-text-primary text-[13px] flex items-center gap-1.5">
                    <FiAlertCircle className="text-red-500" /> The Challenge / Problem
                  </h5>
                  <p className="text-xs leading-relaxed pl-5 border-l border-white/5 bg-white/[0.01] p-2 rounded">
                    {activeProject.caseStudy.problem}
                  </p>
                </div>

                {/* Section: Solution */}
                <div className="flex flex-col gap-1.5">
                  <h5 className="font-bold text-text-primary text-[13px] flex items-center gap-1.5">
                    <FiCheck className="text-emerald-500" /> Proposed Architecture / Solution
                  </h5>
                  <p className="text-xs leading-relaxed pl-5 border-l border-white/5 bg-white/[0.01] p-2 rounded">
                    {activeProject.caseStudy.solution}
                  </p>
                </div>

                {/* Section: Key Features */}
                <div className="flex flex-col gap-2">
                  <h5 className="font-bold text-text-primary text-[13px]">Key Features Implemented</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    {activeProject.caseStudy.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 bg-white/[0.02] border border-white/[0.04] p-2 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grid Splitter for Challenges & Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <h6 className="font-bold text-[11px] text-text-primary uppercase tracking-wider">Technical Hurdle</h6>
                    <p className="text-[11px] leading-relaxed text-text-secondary">
                      {activeProject.caseStudy.challenges}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                    <h6 className="font-bold text-[11px] text-accent uppercase tracking-wider">Core Takeaways</h6>
                    <p className="text-[11px] leading-relaxed text-text-secondary">
                      {activeProject.caseStudy.learnings}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer (Cta links) */}
              <div className="flex items-center justify-between border-t border-white/[0.05] pt-4 mt-2">
                <div className="flex gap-1.5 font-mono text-[10px]">
                  {activeProject.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:scale-[1.02] transition-all font-mono"
                >
                  <FiGithub /> GitHub Repository
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
