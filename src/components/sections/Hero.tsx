"use client";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex flex-col justify-center items-start overflow-hidden">
      
      {/* Fondo sutil */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8 max-w-3xl"
      >
        {/* BADGE DE ESTADO ACTUALIZADO */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Buscando prácticas para 2025
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1]">
          {personalData.name.split(" ")[0]} <br />
          <span className="text-zinc-500">{personalData.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Estudiante de 2º DAM especializado en <span className="text-zinc-200">Backend</span> y desarrollo <span className="text-zinc-200">Móvil</span>. 
          Preparado para aportar valor en entornos de producción reales.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
            Ver mis Proyectos
          </button>
          <a href="mailto:tu-email@ejemplo.com" className="px-8 py-3.5 bg-zinc-900 text-white font-medium border border-zinc-800 rounded-full hover:bg-zinc-800 transition-colors">
            Contactar ahora
          </a>
        </div>
      </motion.div>
    </section>
  );
}