import { motion } from "framer-motion";
import { FaChessKing } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  const handleNavigateHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState(null, "", "/");
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <main className="min-h-screen bg-[#030712] flex flex-col items-center justify-center p-6 text-center select-none font-sans relative overflow-hidden">
      
      {/* Mesh glows */}
      <div className="absolute w-[250px] h-[250px] bg-red-500/10 rounded-full blur-[100px] top-[-50px] left-[-50px]" />
      <div className="absolute w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[120px] bottom-[-80px] right-[-80px]" />

      <div className="flex flex-col items-center gap-6 max-w-md relative z-10">
        
        {/* Visual Chess Graphic (Checkmated King) */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-32 h-32 flex items-center justify-center border border-card-border rounded-full bg-black/60 backdrop-blur-md shadow-2xl p-4"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-full opacity-60 blur-md" />
          
          <FaChessKing className="text-5xl text-red-500 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.7)] animate-pulse" />
          
          {/* Warning badge */}
          <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-red-500 border border-white/20 flex items-center justify-center text-xs text-white">
            !
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-mono font-extrabold tracking-tight text-white">
            404
          </h1>
          <h2 className="text-lg font-bold text-text-primary uppercase tracking-wider font-mono">
            Checkmate! Page Not Found.
          </h2>
          <p className="text-text-secondary text-xs leading-relaxed max-w-sm">
            The piece you tried to move has slipped off the board. The coordinate doesn't exist, or the route was captured by an opponent's pawn.
          </p>
        </div>

        {/* Action Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <a
            href="/"
            onClick={handleNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all cursor-pointer"
          >
            <FiArrowLeft /> Return to Workspace
          </a>
        </motion.div>

      </div>
    </main>
  );
}
