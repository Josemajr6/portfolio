"use client";
import { certificationsData } from "@/data/certifications";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileCertifications() {
  return (
    <div className="w-full px-2 pb-10 space-y-4">
      {certificationsData.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative group"
        >
            <div className={`relative overflow-hidden bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl backdrop-blur-sm transition-all active:scale-[0.98] ${cert.color.replace('group-hover:', '')}`}>
                
                <div className={`absolute inset-0 opacity-5 ${cert.color.includes('purple') ? 'bg-purple-500' : cert.color.includes('red') ? 'bg-red-500' : 'bg-cyan-500'}`} />

                <div className="flex items-start gap-4 relative z-10">
                    {/* Logo */}
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-black p-1 flex items-center justify-center shadow-lg mt-1">
                        <img 
                            src={cert.image} 
                            alt={cert.issuer} 
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block pt-1">
                                {cert.issuer}
                            </span>
                            {/* FECHA ARREGLADA: Ancho mínimo y no-wrap */}
                            <span className="text-[10px] font-mono font-bold text-zinc-400 bg-zinc-950/50 px-3 py-1 rounded-md border border-zinc-800/50 whitespace-nowrap min-w-[70px] text-center">
                                {cert.date}
                            </span>
                        </div>

                        <h3 className="text-white font-bold text-sm leading-snug mb-3 pr-2">
                            {cert.title}
                        </h3>

                        <a 
                            href={cert.pdfUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors border border-white/10"
                        >
                            <FaAward className={cert.color.includes('purple') ? 'text-purple-400' : cert.color.includes('red') ? 'text-red-400' : 'text-cyan-400'} />
                            <span>Ver Credencial</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
      ))}
    </div>
  );
}