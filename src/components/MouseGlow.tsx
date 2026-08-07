"use client";

import { useEffect, useState, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function MouseGlow() {
  const [isEnabled, setIsEnabled] = useState(true);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check local storage for preference
    const stored = localStorage.getItem("mouse-glow-enabled");
    if (stored !== null) {
      setIsEnabled(stored === "true");
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled || !glowRef.current) return;
      
      // Update glow position
      const glow = glowRef.current;
      glow.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isEnabled]);

  const toggleGlow = () => {
    const nextState = !isEnabled;
    setIsEnabled(nextState);
    localStorage.setItem("mouse-glow-enabled", String(nextState));
  };

  return (
    <>
      {/* Radial cursor glow */}
      {isEnabled && (
        <div
          ref={glowRef}
          className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-10 transition-transform duration-75 ease-out opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)",
            willChange: "transform",
          }}
        />
      )}

      {/* Floating Preference Toggle Control */}
      <button
        onClick={toggleGlow}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-card-border bg-black/60 backdrop-blur-md text-text-secondary hover:text-text-primary hover:border-white/20 transition-all duration-300 shadow-lg cursor-pointer"
        title={isEnabled ? "Disable Cursor Glow" : "Enable Cursor Glow"}
        aria-label="Toggle cursor glow effect"
      >
        {isEnabled ? <FiEye className="w-4 h-4" /> : <FiEyeOff className="w-4 h-4" />}
      </button>
    </>
  );
}
