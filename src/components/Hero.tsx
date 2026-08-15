import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

const TYPING_PHRASES = [
  "AI & Machine Learning Undergraduate",
  "Backend & API Engineer",
  "Full Stack Web Developer",
  "RAG & Applied AI builder",
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullPhrase = TYPING_PHRASES[phraseIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentPhrase(fullPhrase.substring(0, currentPhrase.length + 1));
        setTypingSpeed(60);

        if (currentPhrase === fullPhrase) {
          // Pause at complete phrase
          timer = setTimeout(() => setIsDeleting(true), 1200);
          return;
        }
      } else {
        // Deleting
        setCurrentPhrase(fullPhrase.substring(0, currentPhrase.length - 1));
        setTypingSpeed(30);

        if (currentPhrase === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-250px)] relative flex items-center justify-center py-8 px-6 overflow-hidden md:px-12 xl:px-24"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="flex flex-col gap-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-white to-text-secondary select-none leading-tight">
              Mokshith H C
            </h1>
            
            {/* Animated Typing Subtitle */}
            <div className="h-8 md:h-10 flex items-center">
              <span className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent font-mono">
                {currentPhrase}
              </span>
              <span className="w-[2px] h-6 bg-accent ml-1 animate-pulse" />
            </div>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-text-secondary text-sm md:text-base max-w-xl leading-relaxed font-sans"
          >
            AI & Machine Learning undergraduate with hands-on experience building full-stack applications. 
            Passionate about scalable backend design, API orchestration, and applying vector search and 
            language model workflows (RAG) to solve practical problems.
          </motion.p>
        </div>

        {/* Right: Premium Interactive Neural Network Visualizer */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] flex items-center justify-center"
          >
            {/* Pulsing glows behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-[60px] opacity-10" />
            
            {/* SVG Interactive Neural Network Nodes */}
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full text-white/10 select-none pointer-events-none filter drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              {/* Connection Lines */}
              <motion.line x1="20" y1="50" x2="45" y2="25" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.5" />
              <motion.line x1="20" y1="50" x2="45" y2="50" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="0.5" />
              <motion.line x1="20" y1="50" x2="45" y2="75" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.5" />
              
              <motion.line x1="45" y1="25" x2="75" y2="35" stroke="rgba(34, 211, 238, 0.25)" strokeWidth="0.5" />
              <motion.line x1="45" y1="50" x2="75" y2="35" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="0.5" />
              <motion.line x1="45" y1="50" x2="75" y2="65" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.5" />
              <motion.line x1="45" y1="75" x2="75" y2="65" stroke="rgba(34, 211, 238, 0.25)" strokeWidth="0.5" />

              <motion.line x1="75" y1="35" x2="90" y2="50" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" />
              <motion.line x1="75" y1="65" x2="90" y2="50" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="0.5" />

              {/* Pulsing signal dots */}
              <motion.circle
                cx="20" cy="50" r="1.5" fill="#3B82F6"
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              />
              <motion.circle
                cx="45" cy="25" r="1.5" fill="#8B5CF6"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              />
              <motion.circle
                cx="45" cy="50" r="1.5" fill="#22D3EE"
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ repeat: Infinity, duration: 2.8, delay: 0.2 }}
              />
              <motion.circle
                cx="45" cy="75" r="1.5" fill="#8B5CF6"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
              />
              <motion.circle
                cx="75" cy="35" r="1.5" fill="#22D3EE"
                animate={{ scale: [1, 1.7, 1] }}
                transition={{ repeat: Infinity, duration: 2.6, delay: 0.4 }}
              />
              <motion.circle
                cx="75" cy="65" r="1.5" fill="#10B981"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 3.2, delay: 0.6 }}
              />
              <motion.circle
                cx="90" cy="50" r="2" fill="#10B981"
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, delay: 1 }}
              />

              {/* Orbital ring path */}
              <motion.circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="url(#glowGradient)" 
                strokeWidth="0.2"
                strokeDasharray="5, 15"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              />

              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Core Avatar Frame with image support and fallback */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110px] h-[110px] md:w-[150px] md:h-[150px] rounded-full border border-card-border p-1.5 bg-black/80 backdrop-blur-md shadow-[0_0_50px_rgba(59,130,246,0.25)] flex items-center justify-center overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Mokshith H C" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('avatar-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  className="w-full h-full rounded-full object-cover"
                />
                <div 
                  id="avatar-fallback"
                  className="hidden w-full h-full rounded-full bg-gradient-to-tr from-primary/10 via-secondary/20 to-accent/10 border border-white/10 flex flex-col items-center justify-center gap-1 select-none"
                >
                  <FiCode className="text-2xl md:text-3xl text-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-text-secondary tracking-widest uppercase">M_H_C</span>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
