"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error";
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: "", type: "success" });

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Invalid email format";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required";
    if (!form.message.trim()) nextErrors.message = "Message cannot be empty";
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        showToast("Message sent successfully! I will get back to you shortly.", "success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err: any) {
      // Fallback grace for offline/mock environments
      showToast(err.message || "Unable to reach server. Please try again later.", "error");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 xl:px-24 max-w-6xl mx-auto scroll-mt-16 relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-start text-left mb-16">
        <h2 className="text-xs font-mono tracking-widest text-accent uppercase mb-2">07 / Integration</h2>
        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary select-none">
          Get in Touch
        </h3>
        <div className="h-[1.5px] w-12 bg-accent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Contact Information & Links */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-text-primary">Let's build something exceptional.</h4>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              If you are looking for an AI/ML developer who also understands scalable APIs, 
              robust databases, and interactive user interfaces, let's connect. I am available 
              for internships, projects, or full-time roles.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="flex flex-col gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl glass bg-white/[0.01] border-white/[0.04]">
              <FiMail className="text-accent text-base shrink-0" />
              <div>
                <div className="text-[10px] text-text-secondary">EMAIL</div>
                <a href="mailto:mokshith641@gmail.com" className="text-text-primary hover:underline">mokshith641@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl glass bg-white/[0.01] border-white/[0.04]">
              <FiPhone className="text-secondary text-base shrink-0" />
              <div>
                <div className="text-[10px] text-text-secondary">PHONE</div>
                <a href="tel:+919008116296" className="text-text-primary hover:underline">+91 9008116296</a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl glass bg-white/[0.01] border-white/[0.04]">
              <FiMapPin className="text-primary text-base shrink-0" />
              <div>
                <div className="text-[10px] text-text-secondary">LOCATION</div>
                <span className="text-text-primary">Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://github.com/mokshith641"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-card-border bg-white/[0.02] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/[0.05] transition-all text-lg cursor-pointer"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/mokshith-h-c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-card-border bg-white/[0.02] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/20 hover:bg-white/[0.05] transition-all text-lg cursor-pointer"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side: Glassmorphic Contact Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-3xl glass bg-black/30 border border-card-border flex flex-col gap-5 relative text-left"
          >
            {/* Form Fields: Grid Name/Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-xs text-text-primary placeholder-text-secondary/40 focus:outline-none transition-all ${
                    errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-accent"
                  }`}
                />
                {errors.name && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FiAlertCircle /> {errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-xs text-text-primary placeholder-text-secondary/40 focus:outline-none transition-all ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-accent"
                  }`}
                />
                {errors.email && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FiAlertCircle /> {errors.email}</span>}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Collaboration Opportunity"
                className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-xs text-text-primary placeholder-text-secondary/40 focus:outline-none transition-all ${
                  errors.subject ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-accent"
                }`}
              />
              {errors.subject && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FiAlertCircle /> {errors.subject}</span>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-text-secondary">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Mokshith, let's collaborate on an AI project..."
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-xs text-text-primary placeholder-text-secondary/40 focus:outline-none resize-none transition-all ${
                  errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/[0.08] focus:border-accent"
                }`}
              />
              {errors.message && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FiAlertCircle /> {errors.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="mt-2 w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 disabled:from-slate-800 disabled:to-slate-800 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] select-none"
            >
              {isSending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Floating Toast Notification Container */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl border backdrop-blur-md shadow-2xl text-xs font-medium font-sans ${
              toast.type === "success"
                ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-300"
                : "bg-red-950/80 border-red-500/30 text-red-300"
            }`}
          >
            {toast.type === "success" ? <FiCheckCircle className="text-base shrink-0" /> : <FiAlertCircle className="text-base shrink-0" />}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
