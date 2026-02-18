"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRocket, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

// Variantes optimizadas (GPU accelerated)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const avatarVariants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -10 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 100, 
      damping: 20,
      delay: 0.5
    }
  },
};

export default function HeroQuantum() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 flex flex-col justify-center border-b border-white/5 pt-20 md:pt-0">
      
      {/* --- FONDO OPTIMIZADO (Sin Mouse Events pesados) --- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Blob animado 1 - Acelerado por GPU */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0], 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"
        />
        {/* Blob animado 2 */}
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0], 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]"
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >
           

            {/* Nombre (Más controlado) */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 leading-tight">
              José <span className="text-zinc-500">Manuel</span>
            </motion.h1>

            {/* Título Principal (Destacado) */}
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 mb-6 tracking-tight">
              Full Stack Developer
            </motion.h2>

            {/* Descripción */}
            <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              Transformo ideas complejas en experiencias digitales fluidas. Especializado en <span className="text-zinc-200 font-medium">arquitectura escalable</span> e <span className="text-zinc-200 font-medium">interfaces inmersivas</span> para web y móvil.
            </motion.p>

            {/* Botones y Social */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden hover:bg-zinc-200 transition-all flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className={`transition-transform duration-300 ${isHovered ? 'rotate-45' : 'rotate-0'}`} />
                  <span>Ver Proyectos</span>
                </span>
                {/* Brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
              </button>

              <div className="flex items-center gap-3 px-4">
                <a href="https://github.com/Josemajr6/" target="_blank" className="text-zinc-400 hover:text-white transition-colors p-2"><FaGithub size={24}/></a>
                <a href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-[#0a66c2] transition-colors p-2"><FaLinkedin size={24}/></a>
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: AVATAR CYBER */}
          <motion.div 
            variants={avatarVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              
              {/* Efectos de fondo del avatar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Anillos rotatorios decorativos (Puro CSS, ligero) */}
              <div className="absolute inset-[-20px] border border-zinc-800 rounded-full opacity-50" />
              <div className="absolute inset-[-10px] border border-emerald-500/20 rounded-full border-dashed animate-spin-slow duration-[20s]" />
              
              {/* Contenedor de la Imagen con Clip */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 ring-1 ring-white/20 shadow-2xl bg-zinc-900/50 backdrop-blur-sm group">
                 {/* Overlay degradado sutil sobre la foto para integrarla */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/50 z-10 opacity-60" />
                 
                 <Image 
                  src="/avatar.webp" // Asegúrate de que esta imagen exista en /public
                  alt="José Manuel Avatar"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                 />

                 {/* Brillo en el borde inferior */}
                 <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-500/20 to-transparent z-20 pointer-events-none" />
              </div>

    

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}