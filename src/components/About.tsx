"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaChessKnight, FaTv, FaRunning, FaTrophy, FaLightbulb } from "react-icons/fa";
import { FiCode, FiCpu, FiTrendingUp } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-10">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-12">
        <h2 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">01 / Profile</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          About Me
        </h3>
        <div className="h-[1.5px] w-12 bg-accent mt-3 rounded-full" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bio Card (Large - Spans 2 Cols on md+) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 p-6 md:p-8 rounded-3xl glass bg-black/30 flex flex-col justify-between gap-6 border border-card-border relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl">
              <FiCpu />
            </div>
            
            <h4 className="text-xl font-bold text-text-primary">
              Bridging the gap between AI Models & Scalable Systems
            </h4>
            
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              I am an AI & Machine Learning undergraduate with a deep passion for software engineering. Rather than just training models, I focus on engineering end-to-end applications that put intelligence into production.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              My engineering stack spans backend development using <strong>FastAPI</strong> and <strong>Django</strong>, database design with <strong>PostgreSQL</strong>, and modern frontend structures using <strong>React</strong>. I enjoy crafting custom API layouts, optimizing vector DB queries, and architecting RAG-based systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-2 text-xs font-mono relative z-10">
            <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-secondary">#applied-ai</span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-secondary">#backend-architecture</span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-text-secondary">#vector-embeddings</span>
          </div>
        </motion.div>

        {/* Quick Stats / Certification Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="p-6 rounded-3xl glass bg-black/30 flex flex-col justify-between gap-6 border border-card-border relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary text-xl">
              <FaTrophy />
            </div>
            
            <h4 className="text-lg font-bold text-text-primary">Credentials & Accomplishments</h4>
            
            <ul className="flex flex-col gap-3.5 text-xs text-text-secondary">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <div>
                  <strong className="text-text-primary">70+ DSA Problems</strong>
                  <p className="text-[11px] text-text-secondary">Solved on LeetCode & HackerRank</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <div>
                  <strong className="text-text-primary">NPTEL Elite Certification</strong>
                  <p className="text-[11px] text-text-secondary">Joy of Computing Using Python (90%)</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <div>
                  <strong className="text-text-primary">Google Cloud GenAI Leader</strong>
                  <p className="text-[11px] text-text-secondary">Completed applied GenAI Track</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="text-[10px] font-mono text-accent uppercase tracking-wider relative z-10 flex items-center gap-1">
            <FiTrendingUp className="text-sm" /> Continual growth path
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="p-6 rounded-3xl glass bg-black/30 flex flex-col justify-between gap-6 border border-card-border relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl">
              <FaGraduationCap />
            </div>
            
            <h4 className="text-lg font-bold text-text-primary">Education Journey</h4>
            
            <div className="flex flex-col gap-4 text-xs">
              <div className="border-l-2 border-accent/20 pl-3">
                <div className="font-semibold text-text-primary text-[13px]">BE in AI & Machine Learning</div>
                <div className="text-text-secondary text-[11px]">Alva's Institute of Eng & Tech</div>
                <div className="text-accent/80 text-[10px] font-mono mt-0.5">CGPA: 8.10 | 2023 - Present</div>
              </div>
              
              <div className="border-l-2 border-white/10 pl-3">
                <div className="font-semibold text-text-primary text-[13px]">Pre-University Course (PUC)</div>
                <div className="text-text-secondary text-[11px]">BGS Institution, Chikkamagaluru</div>
                <div className="text-text-secondary/70 text-[10px] font-mono mt-0.5">Aggregate: 87.17% | 2021 - 2023</div>
              </div>

              <div className="border-l-2 border-white/10 pl-3">
                <div className="font-semibold text-text-primary text-[13px]">SSLC Secondary School</div>
                <div className="text-text-secondary text-[11px]">MDRS, Sakaleshpura</div>
                <div className="text-text-secondary/70 text-[10px] font-mono mt-0.5">Aggregate: 92.62% | Completed 2021</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests Card (Spans 2 columns on md+) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="md:col-span-2 p-6 rounded-3xl glass bg-black/30 flex flex-col md:flex-row justify-between gap-6 border border-card-border relative overflow-hidden group"
        >
          <div className="flex flex-col justify-between gap-4 md:w-3/5">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center text-success text-lg">
                <FaLightbulb />
              </div>
              
              <h4 className="text-lg font-bold text-text-primary">Beyond Programming</h4>
              
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                When I'm not writing code or analyzing GitHub repositories, I enjoy stimulating my mind in other ways. 
                I am an avid chess player, love diving into engaging anime story arcs, and closely follow competitive sports.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-text-secondary hover:text-text-primary transition-colors">
                <FaChessKnight className="text-amber-500" /> Chess Tactician
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-text-secondary hover:text-text-primary transition-colors">
                <FaTv className="text-purple-400" /> Anime Enthusiast
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-text-secondary hover:text-text-primary transition-colors">
                <FaRunning className="text-success" /> Sports Fan
              </span>
            </div>
          </div>

          {/* Graphical Chessboard Grid Decorator */}
          <div className="flex items-center justify-center p-2 border border-card-border rounded-2xl bg-black/40 backdrop-blur-sm self-center">
            <div className="grid grid-cols-5 grid-rows-5 gap-[2px] w-[140px] h-[140px] md:w-[150px] md:h-[150px] overflow-hidden rounded">
              {Array.from({ length: 25 }).map((_, idx) => {
                const row = Math.floor(idx / 5);
                const col = idx % 5;
                const isBlack = (row + col) % 2 === 1;
                // Place a chess piece in the center
                const hasPiece = idx === 12;
                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-center rounded-[1px] transition-colors duration-300 ${
                      isBlack ? "bg-slate-800" : "bg-slate-900/50"
                    }`}
                  >
                    {hasPiece && (
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      >
                        <FaChessKnight className="text-lg text-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
