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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`group relative flex flex-col h-full bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${cert.color}`}
        >
          {/* Fondo Gradiente Sutil al Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Cabecera con Imagen (Fondo Blanco Tenue para resaltar logos oscuros) */}
          <div className="h-40 w-full bg-white/5 flex items-center justify-center p-8 relative overflow-hidden group-hover:bg-white/10 transition-colors duration-500">
             {/* Brillo de fondo tras la imagen */}
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-50" />
             
             <Image
               src={cert.image}
               alt={cert.issuer}
               width={160}
               height={80}
               className="object-contain w-full h-full drop-shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-110"
             />
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-grow p-6 relative z-10 border-t border-white/5">
            
            {/* Emisor y Fecha */}
            <div className="flex justify-between items-start mb-4">
               <span className="inline-block px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-wider group-hover:border-white/20 transition-colors">
                 {cert.issuer}
               </span>
               <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                 <FaCalendarAlt className="text-emerald-500/70" />
                 <span>{cert.date}</span>
               </div>
            </div>

            {/* Título */}
            <h3 className="text-lg font-bold text-zinc-100 mb-6 leading-snug group-hover:text-emerald-400 transition-colors duration-300">
              {cert.title}
            </h3>

            {/* Link Footer */}
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-mono text-zinc-500 group-hover:text-white transition-colors border-t border-dashed border-zinc-800">
              <span className="uppercase tracking-widest text-xs font-bold">{cert.linkText}</span>
              <FaExternalLinkAlt size={10} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}