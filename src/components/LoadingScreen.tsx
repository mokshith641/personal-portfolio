"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
  "Initializing AI Agent Kernel...",
  "Spinning up vector databases...",
  "Fetching GitHub profiles (github.com/mokshith641)...",
  "Resolving neural network weights...",
  "Ready.",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scroll while loading
    document.body.style.overflow = "hidden";

    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = "unset";
          }, 150);
          return 100;
        }
        // Snappy progress steps
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 20);

    return () => {
      clearInterval(progressInterval);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    // Sync stepping index with progress
    if (progress < 25) setStepIndex(0);
    else if (progress < 50) setStepIndex(1);
    else if (progress < 75) setStepIndex(2);
    else if (progress < 95) setStepIndex(3);
    else setStepIndex(4);
  }, [progress]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 bg-[#f8fafc] z-50 flex flex-col items-center justify-center p-6 text-left select-none font-mono"
        >
          {/* Subtle glow background */}
          <div className="absolute w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="w-full max-w-md flex flex-col gap-4 relative">
            
            {/* Terminal Header */}
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-text-secondary text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono">kernel_init.sh</span>
            </div>

            {/* Typewriter details */}
            <div className="min-h-[64px] flex flex-col gap-1 text-xs md:text-sm text-text-secondary">
              <div className="text-primary font-semibold flex items-center gap-2">
                <span>$</span>
                <span>sh setup_portfolio_weights.sh</span>
              </div>
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-text-primary mt-1"
              >
                &gt; {LOADING_STEPS[stepIndex]}
              </motion.div>
            </div>

            {/* Progress Container */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>System Compilation</span>
                <span className="text-accent font-bold">{progress}%</span>
              </div>

              {/* Glowing bar */}
              <div className="w-full h-[3px] bg-slate-200 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
