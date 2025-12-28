"use client";
import React, { useRef, useState } from "react";
import { experienceData, Experience } from "@/data/experience";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaHashtag, FaBolt } from "react-icons/fa";

export default function CircuitTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // LOGICA DE AGRUPACIÓN
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
    <div ref={containerRef} className="relative max-w-7xl mx-auto py-24 md:py-40 px-4 md:px-8 overflow-hidden">
      
      {/* --- FONDO ATMOSFÉRICO --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      {/* --- COLUMNA VERTEBRAL CON ENERGÍA --- */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-zinc-900/50 z-0">
        <motion.div 
            style={{ height }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-indigo-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
        />
      </div>

      <div className="relative z-10 space-y-24 md:space-y-40">
        {groupedExperiences.map((group, groupIndex) => {
          const isDoubleRow = group.length === 2;
          if (isDoubleRow) {
            return (
              <div key={`group-${groupIndex}`} className="relative flex flex-col md:flex-row w-full gap-16 md:gap-0 perspective-1000">
                <div className="w-full md:w-1/2 md:pr-0"><TimelineCard3D item={group[0]} side="left" /></div>
                <div className="w-full md:w-1/2 md:pl-0"><TimelineCard3D item={group[1]} side="right" hideAnchorDesktop={true} /></div>
              </div>
            );
          } else {
            const side = groupIndex % 2 === 0 ? "left" : "right";
            return (
              <div key={group[0].id} className={`relative flex flex-col md:flex-row items-center w-full ${side === 'left' ? "md:flex-row-reverse" : ""}`}>
                 <div className="hidden md:block md:w-1/2" />
                 <div className="w-full md:w-1/2"><TimelineCard3D item={group[0]} side={side} /></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

// --- COMPONENTE 3D CON FÍSICA Y SPOTLIGHT ---
function TimelineCard3D({ item, side, hideAnchorDesktop = false }: { item: Experience, side: "left" | "right", hideAnchorDesktop?: boolean }) {
  const isWork = item.type === 'work';
  const ref = useRef<HTMLDivElement>(null);

  // Motion Values para el seguimiento del ratón (Spotlight)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Motion Values para el Tilt 3D
  const xPct = useMotionValue(0); // -1 a 1
  const yPct = useMotionValue(0); // -1 a 1
  
  const rotateX = useTransform(yPct, [-0.5, 0.5], [7, -7]); // Invertido para efecto natural
  const rotateY = useTransform(xPct, [-0.5, 0.5], [-7, 7]);
  
  // Spring physics para suavizar el movimiento
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Coordenadas relativas para el Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // Porcentajes relativos al centro para el Tilt
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    
    xPct.set(mouseXFromCenter / width);
    yPct.set(mouseYFromCenter / height);
  }

  function handleMouseLeave() {
    mouseX.set(0); 
    mouseY.set(0);
    xPct.set(0);
    yPct.set(0);
  }

  const theme = isWork ? {
     accent: "indigo",
     gradient: "from-indigo-500/20 via-purple-500/5 to-transparent",
     spotlight: "rgba(99, 102, 241, 0.15)"
  } : {
     accent: "emerald",
     gradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
     spotlight: "rgba(16, 185, 129, 0.15)"
  };

  return (
    <div className={`relative w-full flex flex-col justify-center pl-12 pr-0 ${side === 'left' ? 'md:items-end md:pr-16 md:pl-0' : 'md:items-start md:pl-16 md:pr-0'}`}>
        
        {/* --- ANCLA Y LÍNEA --- */}
        <div className={`absolute top-10 md:top-1/2 md:-translate-y-1/2 z-0 h-px bg-zinc-800
            left-6 w-8 
            ${side === 'left' ? 'md:left-auto md:right-0 md:w-16 md:origin-right' : 'md:left-0 md:w-16 md:origin-left'}
            ${hideAnchorDesktop ? 'md:hidden' : ''}
        `}>
            {/* Punto de conexión */}
            <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-950 border border-zinc-600 ${side === 'left' ? '-left-1.5 md:left-auto md:-right-1.5' : '-left-1.5 md:-left-1.5'}`} />
        </div>

        {/* --- TARJETA 3D INTERACTIVA --- */}
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
            className="group relative w-full max-w-lg rounded-xl bg-zinc-950 border border-zinc-800/50 backdrop-blur-sm transition-colors duration-500 hover:border-zinc-700/80"
        >
            {/* SPOTLIGHT EFFECT: Sigue al ratón */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    ${theme.spotlight},
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Inner Glow Gradient */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none`} />

            <div className="relative p-6 md:p-8 z-20 h-full flex flex-col" style={{ transform: "translateZ(20px)" }}>
                
                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-${theme.accent}-400 shadow-inner`}>
                        {isWork ? <FaBriefcase size={18}/> : <FaGraduationCap size={20}/>}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800/50">
                        <FaCalendarAlt />
                        {item.period}
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {item.role}
                    </h3>
                    <div className={`flex items-center gap-2 text-sm font-medium text-${theme.accent}-400`}>
                        <FaBolt size={12} />
                        {item.company}
                    </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                </p>

                {/* Techs */}
                {item.techs && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                        {item.techs.map((tech) => (
                            <span key={tech} className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 px-2 py-1 bg-zinc-900 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    </div>
  );
}