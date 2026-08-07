"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGraduationCap, FaCode, FaCertificate, FaBrain } from "react-icons/fa";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "AI & Full Stack Engineer (Undergrad)",
    subtitle: "AI & ML Academic & Project Development",
    description: "Developing complex applications integrating Large Language Models, Vector Databases, and FastAPI/Django backends. Focusing on RAG implementations, semantic indexing, and rule-based workflow automation.",
    icon: <FaBrain />,
    tags: ["LangChain", "Qdrant", "FastAPI", "Django", "PostgreSQL"],
  },
  {
    year: "2023 - Present",
    title: "BE in Artificial Intelligence & Machine Learning",
    subtitle: "Alva's Institute of Engineering and Technology",
    description: "Undergoing specialized undergraduate curriculum covering linear algebra, statistical analysis, deep neural networks, database orchestration, and core object-oriented structures in Java and Python. Maintained a CGPA of 8.10.",
    icon: <FaGraduationCap />,
    tags: ["Algorithms & Data Structures", "Python & Java OOP", "Machine Learning Core"],
  },
  {
    year: "2023",
    title: "NPTEL & Cloud Generative AI Accreditations",
    subtitle: "Self-Paced Competency Certifications",
    description: "Completed the 'Joy of Computing Using Python' course by NPTEL, earning an Elite certification with a 90% score. Finished Google Cloud's Generative AI Leader Track, gaining proficiency in prompt design and cloud-deployed models.",
    icon: <FaCertificate />,
    tags: ["Python Elite", "Generative AI Foundations", "Google Cloud Track"],
  },
  {
    year: "2021 - 2023",
    title: "Pre-University Course (PUC)",
    subtitle: "BGS Institution, Chikkamagaluru",
    description: "Completed secondary education focusing on Science and Mathematics, establishing mathematical foundations required for applied machine learning. Graduated with an aggregate of 87.17%.",
    icon: <FaGraduationCap />,
    tags: ["Mathematics", "Physics", "Computer Science Bases"],
  },
  {
    year: "2021",
    title: "SSLC Graduation",
    subtitle: "MDRS, Sakaleshpura",
    description: "Finished high school education with an aggregate score of 92.62%, ranking in the top tier of students in secondary academics.",
    icon: <FaCode />,
    tags: ["Primary Science", "Logic Basics"],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16 overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">03 / Path</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Timeline & Milestones
        </h3>
        <div className="h-[1.5px] w-12 bg-accent mt-3 rounded-full" />
      </div>

      <div className="relative mt-12">
        {/* Central Vertical Timeline Progress Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.04] transform md:-translate-x-1/2" />
        
        {/* Animated growing progress line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent origin-top transform md:-translate-x-1/2"
          style={{ scaleY }}
        />

        {/* Timeline Entries */}
        <div className="flex flex-col gap-12 relative z-10">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:justify-start" : "md:justify-end"
                } relative w-full`}
              >
                {/* Connector Node Icon */}
                <div className="absolute left-0 md:left-1/2 top-1.5 md:top-auto w-9 h-9 rounded-full bg-[#030712] border-2 border-secondary flex items-center justify-center text-secondary text-sm transform -translate-x-0 md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  {item.icon}
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                    isEven ? "md:pr-10 text-left md:text-right" : "md:pl-10 text-left"
                  }`}
                >
                  <div className="p-6 rounded-3xl glass bg-black/20 border border-card-border hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group relative">
                    
                    {/* Glowing card dot on hover */}
                    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Year badge */}
                    <span className="inline-block text-[11px] font-mono font-bold text-accent px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 mb-3">
                      {item.year}
                    </span>

                    <h4 className="text-base md:text-lg font-bold text-text-primary mb-1">
                      {item.title}
                    </h4>

                    <h5 className="text-xs md:text-sm font-semibold text-text-secondary mb-3">
                      {item.subtitle}
                    </h5>

                    <p className="text-text-secondary text-xs leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tech Badges */}
                    <div className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-text-secondary font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
