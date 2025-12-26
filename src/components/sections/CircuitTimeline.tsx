"use client";
import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMicrochip, FaHashtag, FaBolt } from "react-icons/fa";

export default function CircuitTimeline() {
  return (
    <div className="relative max-w-7xl mx-auto py-32 px-4 md:px-8 overflow-hidden">
      
      {/* --- AMBIENTE DE FONDO --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.02),transparent_60%)] pointer-events-none" />

      {/* --- COLUMNA VERTEBRAL (QUANTUM SPINE) --- */}
      {/* Usamos mask-image para que se desvanezca elegantemente en los extremos */}
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-zinc-800 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] z-0">
        {/* Energía latente */}
        <div className="absolute inset-0 bg-emerald-500/20" />
        
        {/* Pulso de datos viajando (Más rápido y fino) */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.5)] z-10"
        />
      </div>

      <div className="relative z-10 space-y-24">
        {experienceData.map((item, index) => {
          const isLeft = index % 2 === 0; 
          const isWork = item.type === 'work';
          
          // Paleta de Colores "Industrial Neon"
          // Work: Violeta Eléctrico | Education: Cian Cibernético
          const theme = isWork ? {
             primary: "text-indigo-400",
             border: "group-hover:border-indigo-500/40",
             bg_gradient: "from-indigo-500/5 to-transparent",
             glow: "group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.15)]",
             icon_bg: "bg-indigo-500/10",
             icon_border: "border-indigo-500/20",
             connector: "from-indigo-500/40"
          } : {
             primary: "text-emerald-400",
             border: "group-hover:border-emerald-500/40",
             bg_gradient: "from-emerald-500/5 to-transparent",
             glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.15)]",
             icon_bg: "bg-emerald-500/10",
             icon_border: "border-emerald-500/20",
             connector: "from-emerald-500/40"
          };

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              
              {/* --- ESPACIADOR PARA GRID --- */}
              <div className="hidden md:block md:w-1/2" />

              {/* --- NODO DE ANCLAJE (El "Lock" en la línea) --- */}
              <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                 {/* Círculo Base */}
                 <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 shadow-[0_0_10px_black] relative z-20 group-hover:border-zinc-500 transition-colors duration-500">
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 ${theme.bg_gradient} transition-opacity duration-500`} />
                 </div>
                 
                 {/* Anillo de Energía al Hover */}
                 <div className={`absolute w-10 h-10 rounded-full border border-dashed opacity-0 group-hover:opacity-40 animate-spin-slow transition-opacity duration-500 ${theme.primary.replace('text-', 'border-')}`} />
              </div>

              {/* --- HAZ CONECTOR (Beam) --- */}
              <div className={`hidden md:block absolute top-1/2 h-[1px] w-[calc(50%-40px)] -z-10 bg-zinc-800 
                  ${isLeft ? "right-1/2 mr-0 origin-right" : "left-1/2 ml-0 origin-left"}
                  group-hover:scale-x-100 transition-transform duration-500`} 
              >
                  {/* Luz líquida viajando */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${theme.connector} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isLeft ? 'bg-gradient-to-l' : ''}`} />
              </div>

              {/* --- TARJETA DE DATOS --- */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-16 ${isLeft ? "md:pr-16 md:pl-0" : ""}`}>
                
                <div className={`group relative bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${theme.border} ${theme.glow}`}>
                  
                  {/* Trama de fondo "Digital Noise" (Sutil) */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none rounded-xl" />
                  
                  {/* Gradiente de fondo activo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg_gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl pointer-events-none`} />

                  {/* --- HEADER --- */}
                  <div className="relative z-10 flex flex-col gap-1 mb-6">
                      <div className="flex justify-between items-start mb-2">
                          {/* Icono Flotante */}
                          <div className={`w-10 h-10 flex items-center justify-center rounded-lg border backdrop-blur-sm ${theme.icon_bg} ${theme.icon_border} ${theme.primary} shadow-sm`}>
                              {isWork ? <FaBriefcase size={14}/> : <FaGraduationCap size={16}/>}
                          </div>

                          {/* Periodo Code-Style */}
                          <div className="flex items-center gap-2 px-3 py-1 rounded bg-zinc-950/50 border border-zinc-800/50 text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-700 transition-colors">
                             <FaCalendarAlt size={10} className={theme.primary} />
                             {item.period}
                          </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                          {item.role}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-sm font-medium ${theme.primary} opacity-90`}>
                          <FaBolt size={10} className="animate-pulse" />
                          <span>{item.company}</span>
                      </div>
                  </div>

                  {/* --- DESCRIPCIÓN --- */}
                  <p className="relative z-10 text-zinc-400 text-sm leading-relaxed mb-6 font-light border-l-2 border-zinc-800 pl-4 group-hover:border-zinc-600 transition-colors">
                      {item.description}
                  </p>

                  {/* --- TECH ARSENAL --- */}
                  {item.techs && (
                    <div className="relative z-10">
                      <div className="h-[1px] w-full bg-zinc-800/50 mb-4" />
                      <div className="flex flex-wrap gap-2">
                        {item.techs.map((tech) => (
                          <span key={tech} className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider border transition-all duration-300
                              bg-zinc-950/30 text-zinc-500 border-zinc-800 
                              group-hover:text-zinc-300 group-hover:border-zinc-700 group-hover:bg-zinc-900/80`}>
                            <FaHashtag size={8} className="opacity-50" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* --- DECORACIONES HUD (Esquinas) --- */}
                  <div className={`absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.primary}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 0V11H12" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                  </div>
                  <div className={`absolute bottom-0 left-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.primary} rotate-180`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 0V11H12" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                  </div>

                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* --- DECORACIÓN FINAL DEL FLUJO --- */}
      <div className="absolute bottom-0 left-[28px] md:left-1/2 md:-translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-zinc-800 to-transparent z-0" />
      
    </div>
  );
}