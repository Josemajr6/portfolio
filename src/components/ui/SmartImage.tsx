"use client";
import { div } from "framer-motion/client";

// Mapeo de colores según la tecnología para generar identidad visual
const gradients: Record<string, string> = {
  "Spring Boot": "from-green-500/20 to-emerald-900/50",
  "Android": "from-emerald-400/20 to-teal-900/50",
  "Flutter": "from-blue-400/20 to-indigo-900/50",
  "Swift": "from-orange-400/20 to-red-900/50",
  "Backend": "from-zinc-500/20 to-zinc-900/50",
  "Full Stack": "from-violet-500/20 to-fuchsia-900/50",
};

export default function SmartImage({ category, title }: { category: string, title: string }) {
  const gradient = gradients[category] || "from-zinc-700/20 to-black";

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500`}>
      {/* Patrón de ruido sutil para textura */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Círculo decorativo brillante */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
      
      <span className="relative z-10 font-mono text-4xl font-bold text-white/10 tracking-tighter uppercase select-none group-hover:text-white/30 transition-colors">
        {title.substring(0, 2)}
      </span>
    </div>
  );
}