"use client";
import React from "react";
import { certificationsData } from "@/data/certifications";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10 px-2">
      {certificationsData.map((cert, index) => (
        <HolographicCard key={cert.id} cert={cert} index={index} />
      ))}
    </div>
  );
}

function HolographicCard({ cert, index }: { cert: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={cert.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col h-full bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/60"
    >
      {/* --- MOUSE FOLLOWER GRADIENT BORDER --- */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(52, 211, 153, 0.4),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Mask to keep border thin */}
      <div className="absolute inset-[1px] bg-zinc-950 rounded-[15px] z-20" />

      {/* --- CONTENIDO --- */}
      <div className="relative z-30 flex flex-col h-full">
        
        {/* Imagen Header */}
        <div className="relative h-44 w-full bg-zinc-900/30 flex items-center justify-center p-8 overflow-hidden group-hover:bg-zinc-900/50 transition-colors duration-500">
           {/* Grid Pattern Sutil */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
           
           {/* Color Glow Detrás de Imagen */}
           <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,${cert.color.includes('emerald') ? 'rgba(16,185,129,0.3)' : 'rgba(56,189,248,0.3)'},transparent_70%)]`} />

           <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-1 drop-shadow-2xl">
              <Image
                src={cert.image}
                alt={cert.issuer}
                width={140}
                height={70}
                className="object-contain"
              />
           </div>
        </div>

        {/* Info Body */}
        <div className="flex flex-col flex-grow p-6 bg-zinc-950/80 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-3">
               <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">{cert.issuer}</span>
               <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 font-mono border border-zinc-800 px-2 py-0.5 rounded bg-zinc-900">
                 <FaCalendarAlt />
                 <span>{cert.date}</span>
               </div>
            </div>

            <h3 className="text-lg font-bold text-zinc-200 mb-2 leading-tight group-hover:text-emerald-400 transition-colors">
              {cert.title}
            </h3>

            <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-500/80 group-hover:text-emerald-400 flex items-center gap-2">
                    VER CREDENCIAL
                    <span className="block h-px w-8 bg-emerald-500/50 group-hover:w-12 transition-all duration-300" />
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <FaExternalLinkAlt size={12} />
                </div>
            </div>
        </div>
      </div>
    </motion.a>
  );
}