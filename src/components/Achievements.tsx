import { useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiCode, FiZap } from "react-icons/fi";
import confetti from "canvas-confetti";

interface AchievementHighlight {
  id: string;
  title: string;
  subtitle: string;
  metric: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
}

interface Certification {
  title: string;
  issuer: string;
  category: "AI & ML" | "Software & Cloud" | "Academic & CS Core" | "Design";
  file: string;
}

const HIGHLIGHTS: AchievementHighlight[] = [
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

const CERTIFICATIONS: Certification[] = [
  {
    title: "The Joy of Computing using Python (Elite Gold)",
    issuer: "NPTEL",
    category: "Academic & CS Core",
    file: "The Joy of Computing using Python.pdf"
  },
  {
    title: "Design & Analysis of Algorithms",
    issuer: "Academic Certification",
    category: "Academic & CS Core",
    file: "Analysis_Design_Algorithm.pdf"
  },
  {
    title: "Machine Learning (Accredited Core)",
    issuer: "Accreditation Bureau",
    category: "AI & ML",
    file: "ML.pdf"
  },
  {
    title: "Deep Learning Specialization Foundations",
    issuer: "Accreditation Bureau",
    category: "AI & ML",
    file: "DeepLearning.pdf"
  },
  {
    title: "Natural Language Processing (NLP)",
    issuer: "Accreditation Bureau",
    category: "AI & ML",
    file: "NLP.pdf"
  },
  {
    title: "Artificial Intelligence Core",
    issuer: "Accreditation Bureau",
    category: "AI & ML",
    file: "AI.pdf"
  },
  {
    title: "AI Foundations & Applied Concepts",
    issuer: "Accreditation Bureau",
    category: "AI & ML",
    file: "AI_foundations.pdf"
  },
  {
    title: "Django Backend Web Framework",
    issuer: "Accreditation Bureau",
    category: "Software & Cloud",
    file: "Django.pdf"
  },
  {
    title: "Computer Vision Certification",
    issuer: "Coursera",
    category: "AI & ML",
    file: "CourseraCV.pdf"
  },
  {
    title: "Natural Language Processing Foundations",
    issuer: "Coursera",
    category: "AI & ML",
    file: "CourseraNLP.pdf"
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera",
    category: "Academic & CS Core",
    file: "CourseraSQL.pdf"
  },
  {
    title: "Software Engineering Principles",
    issuer: "Coursera",
    category: "Software & Cloud",
    file: "CourseraSoftwareEngineering.pdf"
  },
  {
    title: "Cloud Computing Architectures",
    issuer: "Coursera",
    category: "Software & Cloud",
    file: "CourseraCloudComputing.pdf"
  },
  {
    title: "Computer Networks (CN)",
    issuer: "Coursera",
    category: "Academic & CS Core",
    file: "courseraCN.pdf"
  },
  {
    title: "Generative AI Leader",
    issuer: "Google Cloud Skills Boost",
    category: "AI & ML",
    file: "genAI1.pdf"
  },
  {
    title: "Applied Generative AI (GenAI)",
    issuer: "Google Cloud Skills Boost",
    category: "AI & ML",
    file: "genAi2.pdf"
  },
  {
    title: "Introduction to Graphic Design",
    issuer: "Design Academy",
    category: "Design",
    file: "Introduction to Graphic Design.pdf"
  }
];

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const triggerCelebration = (e: React.MouseEvent, id: string) => {
    const colors = 
      id === "dsa" ? ["#3B82F6", "#60A5FA"] :
      id === "nptel" ? ["#8B5CF6", "#A78BFA"] :
      ["#22D3EE", "#67E8F9"];

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

  const filteredCertifications = CERTIFICATIONS.filter(cert => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="achievements" className="py-12 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">05 / Accreditations & Certifications</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Achievements & Certifications
        </h3>
        <div className="h-[1.5px] w-12 bg-accent mt-3 rounded-full" />
      </div>

      {/* Highlights Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {HIGHLIGHTS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
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

      {/* Certifications Subtitle */}
      <div className="flex flex-col items-start text-left mb-8 border-t border-white/[0.05] pt-12">
        <h4 className="text-xl font-bold text-text-primary mb-1">Certifications Catalog</h4>
        <p className="text-text-secondary text-xs">Verify academic coursework, Cloud engineering tracks, and subject specialization files.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full mb-8 relative z-10">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {["All", "AI & ML", "Software & Cloud", "Academic & CS Core", "Design"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent text-[#030712] font-bold"
                  : "bg-white/[0.02] border border-white/[0.08] text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-full border border-white/[0.08] bg-black/40 text-xs text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent transition-all font-mono"
          />
        </div>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {filteredCertifications.map((cert, idx) => (
          <a
            key={idx}
            href={`/certificates/${cert.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] transition-all flex flex-col justify-between gap-4 group cursor-pointer text-left relative overflow-hidden"
          >
            <div className="flex flex-col gap-2 relative z-10">
              <span className="text-[9px] font-mono font-bold tracking-wider uppercase bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06] text-text-secondary w-fit">
                {cert.issuer}
              </span>
              <h4 className="text-text-primary text-xs font-bold leading-normal truncate group-hover:text-accent transition-colors">
                {cert.title}
              </h4>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-text-secondary/70 pt-2 border-t border-white/[0.03] relative z-10">
              <span>{cert.category}</span>
              <span className="text-accent underline opacity-0 group-hover:opacity-100 transition-opacity">View PDF</span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
