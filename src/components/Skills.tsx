"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiTypescript, SiPostgresql, SiMongodb, 
  SiReact, SiHtml5, SiCss, SiGit, SiGithub, SiFastapi, 
  SiDjango, SiJupyter, SiPandas, SiNumpy 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FiDatabase, FiLayout, FiSliders, FiTerminal, FiBarChart } from "react-icons/fi";

const SKILL_CATEGORIES = [
  {
    title: "Programming & Core",
    icon: <FiTerminal />,
    color: "from-primary/20 to-primary/5 border-primary/20 text-primary",
    accentColor: "#3B82F6",
    skills: [
      { name: "Python", icon: <SiPython />, level: 90 },
      { name: "Java", icon: <FaJava />, level: 80 },
      { name: "TypeScript", icon: <SiTypescript />, level: 75 },
      { name: "SQL", icon: <FiDatabase />, level: 85 },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <FiDatabase />,
    color: "from-secondary/20 to-secondary/5 border-secondary/20 text-secondary",
    accentColor: "#8B5CF6",
    skills: [
      { name: "Django", icon: <SiDjango />, level: 85 },
      { name: "FastAPI", icon: <SiFastapi />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
    ],
  },
  {
    title: "AI, ML & Analytics",
    icon: <FiSliders />,
    color: "from-accent/20 to-accent/5 border-accent/20 text-accent",
    accentColor: "#22D3EE",
    skills: [
      { name: "Pandas", icon: <SiPandas />, level: 85 },
      { name: "NumPy", icon: <SiNumpy />, level: 80 },
      { name: "Tableau", icon: <FiBarChart />, level: 70 },
      { name: "Jupyter Notebook", icon: <SiJupyter />, level: 85 },
    ],
  },
  {
    title: "Frontend & Dev Tools",
    icon: <FiLayout />,
    color: "from-success/20 to-success/5 border-success/20 text-success",
    accentColor: "#10B981",
    skills: [
      { name: "React", icon: <SiReact />, level: 80 },
      { name: "HTML & CSS", icon: <div className="flex gap-0.5"><SiHtml5 /><SiCss /></div>, level: 90 },
      { name: "Git & Versioning", icon: <SiGit />, level: 85 },
      { name: "GitHub Workflows", icon: <SiGithub />, level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-secondary uppercase mb-2">02 / Competencies</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Skill Matrix
        </h3>
        <div className="h-[1.5px] w-12 bg-secondary mt-3 rounded-full" />
      </div>

      {/* Grid Categories */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="p-6 rounded-3xl glass bg-black/20 border border-card-border flex flex-col gap-6 relative group/cat"
          >
            {/* Ambient category top glow */}
            <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/cat:via-white/30 transition-all duration-500" />
            
            {/* Category Header */}
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                {cat.icon}
              </div>
              <h4 className="text-base md:text-lg font-bold text-text-primary">
                {cat.title}
              </h4>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-4 rounded-2xl border border-white/[0.04] bg-white/[0.02] flex flex-col gap-2 relative overflow-hidden group hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  {/* Skill Inner Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${cat.accentColor}10 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Skill icon & Name */}
                  <div className="flex items-center justify-between text-text-primary text-sm md:text-base relative z-10">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-text-secondary text-base group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                  </div>

                  {/* Micro Progress Indicator */}
                  <div className="flex items-center justify-between text-[10px] text-text-secondary font-mono mt-1 relative z-10">
                    <span>Familiarity</span>
                    <span>{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden relative mt-0.5 z-10">
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ 
                        backgroundColor: cat.accentColor,
                        boxShadow: `0 0 8px ${cat.accentColor}`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
