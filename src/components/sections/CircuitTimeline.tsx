"use client";
import { experienceData, Experience } from "@/data/experience";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaHashtag, FaBolt } from "react-icons/fa";

export default function CircuitTimeline() {
  
  // LOGICA DE AGRUPACIÓN (Mantenemos tu lógica de pares)
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

      {/* --- COLUMNA VERTEBRAL --- */}
      {/* MÓVIL: left-6 (24px) | ESCRITORIO: left-1/2 */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-zinc-800 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] z-0">
        <div className="absolute inset-0 bg-emerald-500/20" />
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.5)] z-10"
        />
      </div>

      <div className="relative z-10 space-y-12 md:space-y-24">
        {groupedExperiences.map((group, groupIndex) => {
          
          const isDoubleRow = group.length === 2;

          if (isDoubleRow) {
            // --- FILA DOBLE (Edu-2 y Work-2) ---
            const [leftItem, rightItem] = group;
            
            return (
              <div key={`group-${groupIndex}`} className="relative flex flex-col md:flex-row w-full gap-8 md:gap-0">
                {/* En móvil se apilan, en desktop se ponen lado a lado */}
                
                {/* Item 1 (Izquierda en desktop, Arriba en móvil) */}
                <div className="w-full md:w-1/2 md:pr-0">
                    <TimelineCard item={leftItem} side="left" />
                </div>

                {/* Item 2 (Derecha en desktop, Abajo en móvil) */}
                <div className="w-full md:w-1/2 md:pl-0">
                    {/* Ocultamos el anchor SOLO en desktop para que no duplique el punto central */}
                    <TimelineCard item={rightItem} side="right" hideAnchorDesktop={true} />
                </div>
              </div>
            );
          } else {
            // --- FILA ÚNICA (Zig-Zag) ---
            const item = group[0];
            // En móvil SIEMPRE es "right" visualmente (conectado a la izquierda), 
            // pero mantenemos la lógica de side para desktop.
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

// --- COMPONENTE DE TARJETA OPTIMIZADO PARA MÓVIL ---
function TimelineCard({ item, side, hideAnchorDesktop = false }: { item: Experience, side: "left" | "right", hideAnchorDesktop?: boolean }) {
  
  const isWork = item.type === 'work';
  
  // Tema visual (sin cambios)
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      // CLASES CLAVE AQUÍ:
      // pl-12: Padding izquierdo reducido en móvil (antes 20 o 16).
      // md:items-end / md:items-start: Alineación zig-zag solo en desktop.
      className={`relative w-full h-full flex flex-col justify-center 
        pl-12 pr-0 
        ${side === 'left' ? 'md:items-end md:pr-16 md:pl-0' : 'md:items-start md:pl-16 md:pr-0'}
      `}
    >
        {/* --- NODO DE ANCLAJE (El "Lock") --- */}
        {/* MÓVIL: Siempre en left-6 (24px). ESCRITORIO: Calculado dinámicamente o oculto si es hideAnchorDesktop */}
        <div className={`
            absolute top-8 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center
            left-6 -translate-x-1/2
            ${side === 'left' ? 'md:left-auto md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'}
            ${hideAnchorDesktop ? 'md:hidden' : 'md:flex'} 
        `}>
            {/* Círculo Base */}
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 shadow-[0_0_10px_black] relative z-20 group-hover:border-zinc-500 transition-colors duration-500">
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 ${theme.bg_gradient} transition-opacity duration-500`} />
            </div>
            
            {/* Anillo de Energía */}
            <div className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full border border-dashed opacity-0 group-hover:opacity-40 animate-spin-slow transition-opacity duration-500 ${theme.primary.replace('text-', 'border-')}`} />
        </div>

        {/* --- HAZ CONECTOR (Beam) --- */}
        {/* MÓVIL: Una línea pequeña horizontal desde el punto a la tarjeta */}
        <div className={`absolute top-[38px] md:top-1/2 h-[1px] bg-zinc-800 -z-10 transition-all duration-500
            left-6 w-6 
            ${side === 'left' ? 'md:left-auto md:right-0 md:w-16 md:origin-right' : 'md:left-0 md:w-16 md:origin-left'}
            ${hideAnchorDesktop ? 'md:hidden' : ''}
        `}>
             <div className={`absolute inset-0 bg-gradient-to-r ${theme.connector} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>

        {/* --- TARJETA DE DATOS --- */}
        <div className={`group relative bg-zinc-900/40 border border-zinc-800 p-5 md:p-8 rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 w-full max-w-lg ${theme.border} ${theme.glow}`}>
            
            {/* Trama de fondo */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none rounded-xl" />
            
            {/* Gradiente activo */}
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg_gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl pointer-events-none`} />

            {/* --- HEADER --- */}
            <div className="relative z-10 flex flex-col gap-2 mb-4 md:mb-6">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-1">
                    {/* Icono */}
                    <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border backdrop-blur-sm ${theme.icon_bg} ${theme.icon_border} ${theme.primary} shadow-sm shrink-0`}>
                        {isWork ? <FaBriefcase size={12} className="md:w-[14px] md:h-[14px]"/> : <FaGraduationCap size={14} className="md:w-[16px] md:h-[16px]"/>}
                    </div>

                    {/* Periodo */}
                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-950/50 border border-zinc-800/50 text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-700 transition-colors">
                        <FaCalendarAlt size={10} className={theme.primary} />
                        {item.period}
                    </div>
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-zinc-100 tracking-tight group-hover:text-white transition-colors leading-tight">
                    {item.role}
                </h3>
                
                <div className={`flex items-center gap-2 text-xs md:text-sm font-medium ${theme.primary} opacity-90`}>
                    <FaBolt size={10} className="animate-pulse" />
                    <span>{item.company}</span>
                </div>
            </div>

            {/* --- DESCRIPCIÓN --- */}
            <p className="relative z-10 text-zinc-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 font-light border-l-2 border-zinc-800 pl-3 md:pl-4 group-hover:border-zinc-600 transition-colors">
                {item.description}
            </p>

            {/* --- TECH ARSENAL --- */}
            {item.techs && (
            <div className="relative z-10">
                <div className="h-[1px] w-full bg-zinc-800/50 mb-3 md:mb-4" />
                <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                    <span key={tech} className={`flex items-center gap-1 px-2 py-1 rounded text-[9px] md:text-[10px] font-mono uppercase tracking-wider border transition-all duration-300
                        bg-zinc-950/30 text-zinc-500 border-zinc-800 
                        group-hover:text-zinc-300 group-hover:border-zinc-700 group-hover:bg-zinc-900/80`}>
                    <FaHashtag size={8} className="opacity-50" />
                    {tech}
                    </span>
                ))}
                </div>
            </div>
            )}

            {/* Decoraciones HUD (Esquinas) */}
            <div className={`absolute top-0 right-0 p-2 md:p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.primary}`}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="md:w-3 md:h-3">
                    <path d="M1 0V11H12" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
            </div>
            <div className={`absolute bottom-0 left-0 p-2 md:p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 ${theme.primary} rotate-180`}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="md:w-3 md:h-3">
                    <path d="M1 0V11H12" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
            </div>

        </div>
    </motion.div>
  );
}