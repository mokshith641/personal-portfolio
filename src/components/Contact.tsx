import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 md:px-12 xl:px-24 max-w-4xl mx-auto scroll-mt-16 relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">07 / Integration</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Get in Touch
        </h3>
        <div className="h-[1.5px] w-12 bg-accent mt-3 rounded-full" />
      </div>

      {/* Center Details Panel */}
      <div className="max-w-2xl mx-auto p-8 md:p-10 rounded-3xl glass bg-black/30 border border-card-border flex flex-col gap-8 text-left relative overflow-hidden group shadow-2xl">
        {/* Visual background gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        {/* Intro */}
        <div className="flex flex-col gap-4 relative z-10">
          <h4 className="text-xl md:text-2xl font-bold text-text-primary">Let's build something exceptional.</h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            If you are looking for an AI/ML developer who also understands scalable APIs, 
            robust databases, and interactive user interfaces, let's connect. I am available 
            for internships, projects, or full-time roles.
          </p>
        </div>

        {/* Contact Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono relative z-10">
          <div className="flex items-center gap-3 p-4 rounded-2xl glass bg-white/[0.01] border-white/[0.04]">
            <FiMail className="text-accent text-base shrink-0" />
            <div>
              <div className="text-[10px] text-text-secondary">EMAIL</div>
              <a href="mailto:mokshith641@gmail.com" className="text-text-primary hover:underline truncate max-w-[150px] block">mokshith641@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl glass bg-white/[0.01] border-white/[0.04]">
            <FiPhone className="text-secondary text-base shrink-0" />
            <div>
              <div className="text-[10px] text-text-secondary">PHONE</div>
              <a href="tel:+919008116296" className="text-text-primary hover:underline">+91 9008116296</a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-2xl glass bg-white/[0.01] border-white/[0.04]">
            <FiMapPin className="text-primary text-base shrink-0" />
            <div>
              <div className="text-[10px] text-text-secondary">LOCATION</div>
              <span className="text-text-primary">Karnataka, India</span>
            </div>
          </div>
        </div>

        {/* Social Links Panel */}
        <div className="flex items-center gap-4 relative z-10 border-t border-white/[0.05] pt-6 mt-2">
          <span className="text-[10px] font-mono tracking-wider uppercase text-text-secondary">Find Me On:</span>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mokshith641"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-card-border bg-white/[0.02] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/[0.05] transition-all text-lg cursor-pointer shadow-sm"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/mokshith-h-c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-card-border bg-white/[0.02] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/[0.05] transition-all text-lg cursor-pointer shadow-sm"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}
