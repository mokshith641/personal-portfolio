"use client";

import { motion } from "framer-motion";
import { FiAward, FiCode, FiZap } from "react-icons/fi";
import confetti from "canvas-confetti";

interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      subtitle: "LeetCode & HackerRank",
      metric: "70+",
      description: "Successfully designed and optimized code for 70+ algorithmic problems across arrays, dynamic programming, and data structures, building strong foundation in logic.",
      icon: <FiCode />,
      color: "from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/20 text-blue-400",
      badge: "Problem Solving"
    },
    {
      id: "nptel",
      title: "Elite: Joy of Computing Using Python",
      subtitle: "NPTEL National Certification",
      metric: "90%",
      description: "Achieved the prestigious Elite distinction score, ranking in the top percentiles in competitive programming, scripting, and computing foundations in Python.",
      icon: <FiAward />,
      color: "from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/20 text-purple-400",
      badge: "Elite Gold"
    },
    {
      id: "google-cloud",
      title: "Generative AI Leader Track",
      subtitle: "Google Cloud Skills Boost",
      metric: "GenAI",
      description: "Gained core proficiency in applied generative artificial intelligence concepts, focusing on LLM prompts, transformers, and model integrations on cloud infrastructures.",
      icon: <FiZap />,
      color: "from-cyan-500/20 via-cyan-500/5 to-transparent border-cyan-500/20 text-cyan-400",
      badge: "Google Cloud"
    }
  ];

  const triggerCelebration = (e: React.MouseEvent, id: string) => {
    // Determine color scheme based on card id
    const colors = 
      id === "dsa" ? ["#3B82F6", "#60A5FA"] :
      id === "nptel" ? ["#8B5CF6", "#A78BFA"] :
      ["#22D3EE", "#67E8F9"];

    // Confetti burst from mouse click coordinates
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors,
      disableForReducedMotion: true
    });
  };

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">05 / Accreditations</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Achievements
        </h3>
        <div className="h-[1.5px] w-12 bg-accent mt-3 rounded-full" />
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={(e) => triggerCelebration(e, item.id)}
            className={`cursor-pointer group relative flex flex-col justify-between p-6 rounded-3xl glass bg-black/20 border border-card-border overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-gradient-to-b ${item.color.split(" ")[0]} ${item.color.split(" ")[1]} ${item.color.split(" ")[2]}`}
          >
            {/* Header containing Icon & Badge */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-lg ${item.color.split(" ")[4]}`}>
                {item.icon}
              </div>
              <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06] text-text-secondary">
                {item.badge}
              </span>
            </div>

            {/* Metric Display */}
            <div className="mb-4 relative z-10">
              <h4 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-white to-text-secondary mb-1">
                {item.metric}
              </h4>
              <h5 className="text-sm font-bold text-text-primary group-hover:text-white transition-colors">
                {item.title}
              </h5>
              <span className="text-[10px] font-mono text-text-secondary/70">
                {item.subtitle}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed text-text-secondary mb-4 relative z-10">
              {item.description}
            </p>

            {/* Decorative hint at bottom */}
            <div className="text-[9px] font-mono text-text-secondary/40 select-none group-hover:text-text-primary/60 transition-colors">
              * Tap card to celebrate
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
