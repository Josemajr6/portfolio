"use client";
import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto px-4 py-12">
      
      {/* LÍNEA GUÍA (Sutil y elegante) */}
      <div className="absolute left-[28px] top-4 bottom-4 w-[1px] bg-zinc-800" />

      <div className="space-y-16">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-16 group"
          >
            {/* --- NODO (Minimalista) --- */}
            {/* Círculo base */}
            <div className="absolute left-[24px] top-1.5 w-[9px] h-[9px] rounded-full bg-zinc-800 ring-4 ring-zinc-950 transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-125 group-hover:ring-zinc-900" />
            
            {/* Halo al hover (Solo aparece al pasar el ratón) */}
            <div className="absolute left-[20px] top-[2px] w-[17px] h-[17px] rounded-full border border-emerald-500/0 transition-all duration-500 group-hover:border-emerald-500/50 group-hover:scale-150" />

            {/* --- CONTENIDO --- */}
            <div className="flex flex-col gap-2">
              
              {/* Header: Rol y Fecha */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-zinc-500 tabular-nums">
                  {item.period}
                </span>
              </div>
              
              {/* Empresa */}
              <div className="text-sm font-medium text-zinc-400">
                {item.company}
              </div>

              {/* Descripción (Texto limpio y legible) */}
              <p className="text-zinc-500 text-sm leading-relaxed mt-2 group-hover:text-zinc-400 transition-colors">
                {item.description}
              </p>

              {/* Tags (Sutiles y sin bordes pesados) */}
              {item.techs && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono text-zinc-600 bg-zinc-900/50 px-2 py-1 rounded transition-colors group-hover:text-zinc-400 group-hover:bg-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}