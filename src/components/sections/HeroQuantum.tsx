"use client";
import { motion, useMotionTemplate, useMotionValue, animate, Variants } from "framer-motion"; // <--- Importamos 'Variants'
import { useEffect, useState } from "react";
import { FaFingerprint, FaTerminal, FaUnlock } from "react-icons/fa";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// Añadimos ': Variants' para que TypeScript entienda los tipos
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0, filter: "blur(10px)", scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)", 
    scale: 1,
    transition: { 
      type: "spring" as const, // <--- AÑADIR "as const" AQUÍ
      stiffness: 100, 
      damping: 15 
    }
  },
};

const titleVariants: Variants = {
    hidden: { rotateX: 90, y: 100, opacity: 0 },
    visible: { 
      rotateX: 0, 
      y: 0, 
      opacity: 1,
      transition: { 
          type: "spring" as const, // <--- AÑADIR "as const" AQUÍ TAMBIÉN
          damping: 20, 
          stiffness: 100 
      }
    },
};


export default function HeroQuantum() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const color = useMotionValue(COLORS[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    animate(color, COLORS, { ease: "easeInOut", duration: 10, repeat: Infinity, repeatType: "mirror" });
  }, [color]);

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    animate(mouseX, (clientX - left) / width - 0.5, { duration: 1, ease: "backOut" });
    animate(mouseY, (clientY - top) / height - 0.5, { duration: 1, ease: "backOut" });
  }

  const backgroundImage = useMotionTemplate`radial-gradient(80% 80% at calc(50% + ${mouseX} * 300px) calc(30% + ${mouseY} * 200px), ${color} 0%, transparent 50%), 
                                            radial-gradient(60% 60% at calc(80% - ${mouseX} * 300px) calc(70% - ${mouseY} * 200px), #4f46e5 0%, transparent 50%)`;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center border-b border-white/5"
    >
      {/* Aurora y Fondo */}
      <motion.div
        style={{ backgroundImage }}
        className="absolute inset-0 opacity-50 mix-blend-hard-light blur-[120px] filter pointer-events-none will-change-[background-image]"
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Contenido Principal con Orquestación */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-start"
      >
        
        {/* 1. Badge Terminal */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-mono text-indigo-300 mb-8">
            <FaTerminal size={12} />
            <span className="animate-pulse">System Online. Initializing core...</span>
        </motion.div>

        {/* 2. Título Monumental */}
        <div style={{ perspective: "1000px" }}>
            <motion.h1 
                variants={titleVariants}
                className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.9] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 select-none drop-shadow-2xl"
            >
            JOSÉ <br /> MANUEL
            </motion.h1>
        </div>

        {/* 3. Subtítulo */}
        <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-zinc-400 max-w-3xl font-light leading-relaxed text-balance mb-12 relative overflow-hidden"
        >
             <motion.span
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.5, ease: "circOut", delay: 1 }}
                className="block"
             >
                <span className="text-white font-medium">Desarrollador Web Full Stack.</span> Arquitecto de <span className="text-indigo-400 font-medium">Sistemas Backend</span> y creador de <span className="text-emerald-400 font-medium">Experiencias Móviles</span>.
             </motion.span>
        </motion.p>

        {/* 4. Botón Biométrico */}
        <motion.div variants={itemVariants}>
            <button
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden rounded-full bg-zinc-950 px-10 py-5 transition-all active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]"
            >
            <span className="absolute inset-0 z-0 h-full w-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 p-[2px] opacity-50 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-spin-slow">
                <span className="absolute inset-0 rounded-full bg-zinc-950" />
            </span>

            <div className="relative z-10 flex items-center gap-4 text-white">
                <div className="relative flex items-center justify-center">
                <FaFingerprint size={24} className={`transition-all duration-500 ${isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100 text-zinc-400'}`} />
                <FaUnlock size={24} className={`absolute top-0 left-0 text-emerald-400 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                </div>
                
                <div className="flex flex-col items-start leading-none">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1 group-hover:text-emerald-500 transition-colors">
                    {isHovered ? 'ACCESS_GRANTED' : 'SECURE_ACCESS'}
                </span>
                <span className="text-lg font-bold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">
                    {isHovered ? 'VER PROYECTOS' : 'INICIAR SESIÓN'}
                </span>
                </div>
            </div>
            </button>
        </motion.div>

      </motion.div>
    </section>
  );
}