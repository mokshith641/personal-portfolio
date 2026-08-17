export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Overlay with Linear gradient in light slate tone */}
      <div 
        className="absolute inset-0 opacity-[0.6]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 80%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 80%, transparent 100%)"
        }}
      />

      {/* Subtle, soft, static light background gradients (no animations, low opacity) */}
      <div className="absolute top-[-10vw] right-[-10vw] w-[50vw] h-[50vw] rounded-full bg-blue-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15vw] left-[-10vw] w-[55vw] h-[55vw] rounded-full bg-purple-200/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[30%] w-[40vw] h-[40vw] rounded-full bg-cyan-100/10 blur-[120px] pointer-events-none" />
    </div>
  );
}
