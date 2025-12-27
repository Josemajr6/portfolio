"use client";
import { experienceData } from "@/data/experience";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileTimeline() {
  return (
    <div className="w-full px-2 pb-10">
       {/* Línea conectora central */}
       <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {experienceData.map((item, index) => {
             const isWork = item.type === 'work';
             // Colores dinámicos
             const accentColor = isWork ? 'text-indigo-400' : 'text-emerald-400';
             const iconBorder = isWork ? 'border-indigo-500/50' : 'border-emerald-500/50';
             const iconBg = isWork ? 'bg-indigo-500/10' : 'bg-emerald-500/10';
             const iconColor = isWork ? 'text-indigo-400' : 'text-emerald-400';

             return (
              <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative flex items-start gap-4 group"
              >
                  {/* ICONO DEL NODO (Izquierda) */}
                  <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md shrink-0 transition-colors duration-500 ${iconBg} ${iconBorder} ${iconColor}`}>
                      {isWork ? <FaBriefcase size={14}/> : <FaGraduationCap size={16}/>}
                      {/* Brillo interno sutil */}
                      <div className={`absolute inset-0 rounded-full opacity-20 ${isWork ? 'bg-indigo-500' : 'bg-emerald-500'} blur-md`} />
                  </div>
                  
                  {/* TARJETA DE CONTENIDO */}
                  <div className="flex-1 min-w-0 pt-1"> 
                      {/* Header con Fecha mejorada */}
                      <div className="flex flex-col mb-2">
                          <div className="flex justify-between items-baseline mb-1">
                              <h3 className="font-bold text-white text-base leading-tight pr-2">
                                {item.role}
                              </h3>
                              {/* FECHA: Ahora es texto limpio monoespaciado */}
                              <span className={`shrink-0 font-mono text-[10px] font-bold tracking-wider ${accentColor}`}>
                                  {item.period}
                              </span>
                          </div>
                          
                          <div className="text-xs font-medium text-zinc-500 flex items-center gap-1">
                              <span>@</span>
                              <span className="text-zinc-300">{item.company}</span>
                          </div>
                      </div>

                      {/* Descripción */}
                      <div className="p-3 bg-zinc-900/40 border border-zinc-800/60 rounded-xl">
                          <p className="text-zinc-400 text-xs leading-relaxed">
                              {item.description}
                          </p>
                      </div>
                  </div>
              </motion.div>
             )
          })}
       </div>
    </div>
  );
}