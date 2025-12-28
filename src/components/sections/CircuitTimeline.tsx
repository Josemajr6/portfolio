"use client";
import { experienceData, Experience } from "@/data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaHashtag, FaBolt } from "react-icons/fa";

export default function CircuitTimeline() {
  
  // LOGICA DE AGRUPACIÓN (Intacta)
  const groupedExperiences: Experience[][] = [];
  let i = 0;
  
  while (i < experienceData.length) {
    const current = experienceData[i];
    const next = experienceData[i + 1];

    if (current.id === "edu-2" && next && next.id === "work-2") {
      groupedExperiences.push([current, next]);
      i += 2;
    } else {
      groupedExperiences.push([current]);
      i += 1;
    }
  }

  return (
    <div className="relative max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      
      {/* --- FONDO --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.02),transparent_60%)] pointer-events-none" />

      {/* --- COLUMNA VERTEBRAL (Animada) --- */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-zinc-800 z-0">
        <div className="absolute inset-0 bg-emerald-500/10" />
        {/* Luz que recorre la línea constantemente */}
        <motion.div
          animate={{ top: ["-10%", "110%"], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.6)] z-10"
        />
      </div>

      <div className="relative z-10 space-y-16 md:space-y-32">
        {groupedExperiences.map((group, groupIndex) => {
          
          const isDoubleRow = group.length === 2;

          if (isDoubleRow) {
            const [leftItem, rightItem] = group;
            
            return (
              <div key={`group-${groupIndex}`} className="relative flex flex-col md:flex-row w-full gap-12 md:gap-0">
                {/* Item 1 */}
                <div className="w-full md:w-1/2 md:pr-0">
                    <TimelineCard item={leftItem} side="left" />
                </div>

                {/* Item 2 */}
                <div className="w-full md:w-1/2 md:pl-0">
                    <TimelineCard item={rightItem} side="right" hideAnchorDesktop={true} />
                </div>
              </div>
            );
          } else {
            const item = group[0];
            const side = groupIndex % 2 === 0 ? "left" : "right";

            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center w-full ${side === 'left' ? "md:flex-row-reverse" : ""}`}>
                 <div className="hidden md:block md:w-1/2" />
                 <div className="w-full md:w-1/2">
                    <TimelineCard item={item} side={side} />
                 </div>
              </div>
            );
          }
        })}
      </div>

      {/* --- DECORACIÓN FINAL --- */}
      <div className="absolute bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-zinc-800 to-transparent z-0" />
      
    </div>
  );
}

// --- COMPONENTE DE TARJETA ---
function TimelineCard({ item, side, hideAnchorDesktop = false }: { item: Experience, side: "left" | "right", hideAnchorDesktop?: boolean }) {
  
  const isWork = item.type === 'work';
  
  // Tema visual
  const theme = isWork ? {
     primary: "text-indigo-400",
     border_hover: "group-hover:border-indigo-500/50",
     bg_gradient: "from-indigo-500/10 to-transparent",
     glow: "group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]",
     icon_bg: "bg-indigo-500/10",
     icon_border: "border-indigo-500/20",
     connector: "from-indigo-500"
  } : {
     primary: "text-emerald-400",
     border_hover: "group-hover:border-emerald-500/50",
     bg_gradient: "from-emerald-500/10 to-transparent",
     glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]",
     icon_bg: "bg-emerald-500/10",
     icon_border: "border-emerald-500/20",
     connector: "from-emerald-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative w-full h-full flex flex-col justify-center 
        pl-12 pr-0 
        ${side === 'left' ? 'md:items-end md:pr-16 md:pl-0' : 'md:items-start md:pl-16 md:pr-0'}
      `}
    >
        {/* --- NODO DE ANCLAJE (Punto central) --- */}
        <div className={`
            absolute top-8 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center
            left-6 -translate-x-1/2
            ${side === 'left' ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}
            ${hideAnchorDesktop ? 'md:hidden' : 'md:flex'} 
        `}>
            {/* Círculo Base con Pulso */}
            <div className="relative">
                <div className={`absolute inset-0 rounded-full ${theme.bg_gradient.replace('to-transparent', '')} blur-md animate-pulse opacity-50`} />
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-950 border-2 border-zinc-600 shadow-[0_0_15px_black] relative z-20 group-hover:border-white transition-colors duration-500" />
            </div>
        </div>

        {/* --- HAZ CONECTOR (Beam) --- */}
        <div className={`absolute top-[38px] md:top-1/2 h-[1px] bg-zinc-800 -z-10 overflow-hidden
            left-6 w-6 
            ${side === 'left' ? 'md:left-auto md:right-0 md:w-16 md:origin-right' : 'md:left-0 md:w-16 md:origin-left'}
            ${hideAnchorDesktop ? 'md:hidden' : ''}
        `}>
             <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme.connector} to-transparent opacity-70`} 
             />
        </div>

        {/* --- TARJETA DE DATOS --- */}
        <div className={`group relative bg-zinc-900/60 border border-zinc-800 p-6 md:p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 w-full max-w-lg ${theme.border_hover} ${theme.glow}`}>
            
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg_gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none`} />

            {/* --- HEADER --- */}
            <div className="relative z-10 flex flex-col gap-3 mb-5">
                <div className="flex flex-wrap justify-between items-start gap-3">
                    {/* Icono */}
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl border ${theme.icon_bg} ${theme.icon_border} ${theme.primary} shadow-lg shrink-0`}>
                        {isWork ? <FaBriefcase size={14}/> : <FaGraduationCap size={16}/>}
                    </div>

                    {/* Periodo */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-[10px] md:text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-600 transition-colors">
                        <FaCalendarAlt size={10} className={theme.primary} />
                        {item.period}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                        {item.role}
                    </h3>
                    <div className={`flex items-center gap-2 text-sm font-medium ${theme.primary} mt-1 opacity-90`}>
                        <FaBolt size={12} className="animate-pulse" />
                        <span>{item.company}</span>
                    </div>
                </div>
            </div>

            {/* --- DESCRIPCIÓN --- */}
            <p className="relative z-10 text-zinc-400 text-sm leading-relaxed mb-6 font-light border-l-2 border-zinc-800 pl-4 group-hover:border-zinc-600 transition-colors">
                {item.description}
            </p>

            {/* --- TECH ARSENAL --- */}
            {item.techs && (
            <div className="relative z-10">
                <div className="h-px w-full bg-gradient-to-r from-zinc-800 to-transparent mb-4" />
                <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                    <span key={tech} className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider border transition-all duration-300
                        bg-zinc-950/40 text-zinc-500 border-zinc-800/60 
                        group-hover:text-zinc-300 group-hover:border-zinc-700 group-hover:bg-zinc-900`}>
                    <FaHashtag size={8} className="opacity-40" />
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            )}
        </div>
    </motion.div>
  );
}