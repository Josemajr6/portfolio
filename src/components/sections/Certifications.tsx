"use client";
import { certificationsData } from "@/data/certifications";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10 px-2">
      {certificationsData.map((cert, index) => (
        <motion.a
          key={cert.id}
          href={cert.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          className={`group relative flex flex-col h-full bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`}
        >
          {/* --- EFECTO DE BRILLO EN MOVIMIENTO (SHEEN) --- */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-20 pointer-events-none">
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine" />
          </div>

          {/* Borde sutil coloreado al hover */}
          <div className={`absolute inset-0 border-2 border-transparent rounded-2xl ${cert.color.replace('border-', 'group-hover:border-')} transition-colors duration-500 z-20 pointer-events-none opacity-20`} />
          
          {/* Cabecera con Imagen */}
          <div className="relative h-44 w-full bg-zinc-950 flex items-center justify-center p-8 overflow-hidden">
             {/* Grid de fondo decorativo */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
             
             {/* Glow detrás de la imagen */}
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 z-10" />
             
             <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                <Image
                src={cert.image}
                alt={cert.issuer}
                width={160}
                height={80}
                className="object-contain drop-shadow-xl"
                />
             </div>
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-grow p-6 relative z-10 border-t border-zinc-800 bg-zinc-900/50">
            
            {/* Emisor y Fecha */}
            <div className="flex justify-between items-start mb-4">
               <span className="inline-block px-3 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-white group-hover:border-zinc-600 transition-colors">
                 {cert.issuer}
               </span>
               <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                 <FaCalendarAlt size={10} className="text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                 <span>{cert.date}</span>
               </div>
            </div>

            {/* Título */}
            <h3 className="text-lg font-bold text-zinc-100 mb-6 leading-snug group-hover:text-emerald-400 transition-colors duration-300">
              {cert.title}
            </h3>

            {/* Link Footer */}
            <div className="mt-auto pt-4 flex items-center justify-between text-sm font-mono text-zinc-500 border-t border-zinc-800/50 group-hover:border-emerald-500/20 transition-colors">
              <span className="uppercase tracking-widest text-[10px] font-bold group-hover:text-zinc-300 transition-colors">
                  {cert.linkText}
              </span>
              <FaExternalLinkAlt size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-emerald-500 opacity-50 group-hover:opacity-100" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}