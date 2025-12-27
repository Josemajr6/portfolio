"use client";
import { experienceData } from "@/data/experience";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileTimeline() {
  return (
    <div className="w-full px-2 space-y-2">
       {experienceData.map((item, index) => {
         const isLast = index === experienceData.length - 1;
         const isWork = item.type === 'work';

         return (
           <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex gap-4"
           >
              {/* --- COLUMNA IZQUIERDA: LÍNEA Y NODO --- */}
              <div className="flex flex-col items-center">
                  {/* Nodo/Punto */}
                  <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 bg-zinc-950 shrink-0
                      ${isWork 
                        ? 'border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                        : 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                      }`}
                  >
                      <div className={`w-2 h-2 rounded-full ${isWork ? 'bg-indigo-400' : 'bg-emerald-400'} animate-pulse`} />
                  </div>
                  
                  {/* Línea Conectora (Si no es el último) */}
                  {!isLast && (
                    <div className="w-[2px] h-full bg-zinc-800 relative overflow-hidden my-1">
                        {/* Efecto de luz bajando por la línea */}
                        <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent ${isWork ? 'via-indigo-500' : 'via-emerald-500'} to-transparent animate-[shimmer_2s_infinite]`} />
                    </div>
                  )}
              </div>

              {/* --- COLUMNA DERECHA: TARJETA DE CONTENIDO --- */}
              <div className="flex-1 pb-8">
                  <div className="relative bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl backdrop-blur-sm hover:border-zinc-700 transition-colors">
                      
                      {/* Triángulo conector (Flecha CSS) */}
                      <div className="absolute top-4 -left-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-zinc-800 border-b-[8px] border-b-transparent" />
                      
                      {/* Header Tarjeta */}
                      <div className="flex flex-col gap-1 mb-3">
                          <div className="flex justify-between items-start">
                              <span className={`inline-flex items-center gap-2 px-2 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider border
                                  ${isWork 
                                    ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' 
                                    : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                                  }`}
                              >
                                  <FaCalendarAlt size={10} />
                                  {item.period}
                              </span>
                              <span className="text-zinc-600">
                                  {isWork ? <FaBriefcase size={12}/> : <FaGraduationCap size={14}/>}
                              </span>
                          </div>
                          
                          <h3 className="text-white font-bold text-lg leading-tight mt-1">
                              {item.role}
                          </h3>
                          <div className="text-zinc-400 text-xs font-mono">
                              @{item.company}
                          </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-zinc-400 text-xs leading-relaxed mb-4 border-l-2 border-zinc-800 pl-3">
                          {item.description}
                      </p>

                      {/* Tags Tecnologías (Si existen) */}
                      {item.techs && (
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/50">
                              {item.techs.map((tech) => (
                                  <span key={tech} className="px-2 py-0.5 rounded text-[9px] bg-black border border-zinc-800 text-zinc-500 font-mono">
                                      #{tech}
                                  </span>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
           </motion.div>
         )
       })}
    </div>
  );
}