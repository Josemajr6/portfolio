"use client";
import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMicrochip } from "react-icons/fa";

export default function CircuitTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto py-12 px-4">
      
      {/* --- LÍNEA CENTRAL (BACKBONE) --- */}
      {/* Fondo oscuro de la línea */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-zinc-800">
        {/* Luz interior que crece */}
        <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-indigo-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
      </div>

      <div className="space-y-12 md:space-y-24">
        {experienceData.map((item, index) => {
          const isLeft = index % 2 === 0; 
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* --- ESPACIADOR (Para mantener la estructura centrada en escritorio) --- */}
              <div className="hidden md:block md:w-1/2" />

              {/* --- NODO CENTRAL (El conector en la línea) --- */}
              <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full z-20 bg-zinc-950 border-2 border-zinc-700 shadow-[0_0_10px_black] group-hover:border-emerald-500 transition-colors">
                 <div className={`w-3 h-3 rounded-full ${item.type === 'work' ? 'bg-indigo-500 shadow-[0_0_10px_#6366f1]' : 'bg-emerald-500 shadow-[0_0_10px_#10b981]'} animate-pulse`} />
              </div>

              {/* --- CABLE CONECTOR DECORATIVO --- */}
              <div className={`hidden md:block absolute top-1/2 h-[2px] w-12 bg-zinc-800 -z-10 ${isLeft ? "right-1/2 mr-4" : "left-1/2 ml-4"}`} />

              {/* --- TARJETA DE CONTENIDO --- */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                
                {/* Caja estilo Cyberpunk: Fondo oscuro, borde sutil, brillo al hover */}
                <div className="group relative bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 p-6 rounded-2xl backdrop-blur-sm transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-1">
                  
                  {/* Decoración Esquina Tech (Triángulo) */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none">
                    <div className={`absolute top-0 right-0 w-[200%] h-[200%] -translate-y-1/2 translate-x-1/2 rotate-45 ${item.type === 'work' ? 'bg-indigo-500/10' : 'bg-emerald-500/10'}`} />
                  </div>

                  {/* HEADER */}
                  <div className="flex flex-col mb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        {/* Icono Tipo (Trabajo/Estudio) */}
                        <span className={`p-2 rounded-lg border ${item.type === 'work' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                            {item.type === 'work' ? <FaBriefcase size={14} /> : <FaGraduationCap size={16} />}
                        </span>
                        
                        {/* Fecha */}
                        <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                            <FaCalendarAlt size={10} /> {item.period}
                        </span>
                    </div>
                    
                    {/* Título Rol */}
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h3>
                    
                    {/* Empresa */}
                    <div className="text-sm font-medium text-zinc-400 mt-1">
                      @{item.company}
                    </div>
                  </div>

                  {/* DESCRIPCIÓN */}
                  <p className="text-sm leading-relaxed mb-6 text-zinc-400 border-l-2 border-zinc-800 pl-3 group-hover:border-emerald-500/30 transition-colors">
                    {item.description}
                  </p>

                  {/* TECH TAGS */}
                  {item.techs && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                      {item.techs.map((tech) => (
                        <span key={tech} className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono border transition-colors bg-zinc-950 text-zinc-500 border-zinc-800 group-hover:text-zinc-300 group-hover:border-zinc-700">
                          <FaMicrochip size={10} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Número de fondo (01, 02...) decorativo */}
                  <div className="absolute bottom-2 right-4 text-6xl font-black select-none pointer-events-none z-0 font-mono text-zinc-800/20 group-hover:text-emerald-500/5 transition-colors">
                    0{index + 1}
                  </div>
                  
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
      
      {/* Mensaje Final del Log */}
      <div className="flex justify-center mt-16 relative z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest animate-pulse bg-zinc-900 border border-emerald-500/30 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
          System_Log: Execution Complete
        </div>
      </div>

    </div>
  );
}