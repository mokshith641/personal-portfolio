"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 25000), 60);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
          targetAlpha: Math.random() * 0.4 + 0.1,
        });
      }
    };

    initParticles();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid pattern (subtle CSS handles the base, but we draw micro-stars here)
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Interaction with mouse
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          p.alpha = Math.min(p.targetAlpha + force * 0.5, 0.8);
          // Gently push particles away
          p.x -= (dx / dist) * force * 0.5;
          p.y -= (dy / dist) * force * 0.5;
        } else {
          // Smoothly return alpha to base state
          p.alpha += (p.targetAlpha - p.alpha) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`; // Purple particles
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Canvas for floating micro-particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Grid Overlay with Linear gradient */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)"
        }}
      />

      {/* Ambient Mesh Orbs */}
      <div 
        className="orb-glow bg-primary w-[40vw] h-[40vw] top-[-10vw] left-[-10vw] animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div 
        className="orb-glow bg-secondary w-[45vw] h-[45vw] bottom-[-15vw] right-[-10vw] animate-pulse"
        style={{ animationDuration: "16s", animationDelay: "2s" }}
      />
      <div 
        className="orb-glow bg-accent w-[35vw] h-[35vw] top-[30%] left-[60%] animate-pulse"
        style={{ animationDuration: "20s", animationDelay: "4s" }}
      />
    </div>
  );
}
