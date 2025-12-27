"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaDownload, FaCodeBranch, FaHistory, FaCommentDots, FaCertificate } from "react-icons/fa"; // <--- Importamos FaCertificate

const navItems = [
  { name: "~/proyectos", id: "projects", icon: FaCodeBranch },
  { name: "~/certificados", id: "certifications", icon: FaCertificate }, // <--- NUEVO ITEM
  { name: "~/trayectoria", id: "experience", icon: FaHistory },
];

export default function CyberHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-emerald-500/20 py-3"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded flex items-center justify-center transition-colors bg-zinc-900 border border-zinc-700 group-hover:border-emerald-500">
            <FaTerminal className="text-emerald-500 text-sm" />
          </div>
          <span className="font-mono text-sm hidden sm:inline-block transition-colors text-zinc-300 group-hover:text-white">
            <span className="text-emerald-500">root</span>@portfolio:~
          </span>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-2 md:gap-4">
          
          <div className="hidden md:flex items-center gap-1 p-1 rounded-lg border bg-zinc-900/50 border-white/5">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded text-xs font-mono transition-all flex items-center gap-2 text-zinc-400 hover:text-emerald-400 hover:bg-white/5"
              >
                <item.icon size={10} />
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/50 hover:bg-indigo-500 hover:text-white"
          >
            <FaCommentDots className="animate-pulse" />
            <span className="hidden sm:inline">~/hablemos</span>
          </button>

          <a
            href="/cv-JoseManuel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-5 py-2 overflow-hidden rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload size={10} />
              CV_V1.0
            </span>
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
          </a>
        </nav>
      </div>
    </motion.header>
  );
}