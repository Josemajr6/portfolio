"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  // Reemplazamos "wipe" por "cyber-glitch"
  mode?: "cyber-glitch" | "pop" | "slide-right"; 
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  mode = "pop",
  delay = 0,
}: ScrollRevealProps) {

  // --- EFECTO 1: CYBER GLITCH REVEAL (Para Títulos) ---
  // Crea un efecto de distorsión cromática y enfoque
  if (mode === "cyber-glitch") {
    return (
      <motion.div
        initial={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: "blur(20px) hue-rotate(90deg)", // Empieza muy borroso y con color cambiado
            x: -10 
        }}
        whileInView={{ 
            opacity: 1, 
            scale: 1, 
            filter: "blur(0px) hue-rotate(0deg)", // Se estabiliza
            x: 0
        }}
        // Transición con "rebote" elástico al final para estabilizar
        transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 10, 
            mass: 1.5,
            delay: delay 
        }}
        viewport={{ once: true, margin: "-10%" }}
        className={`${className} relative`}
        style={{ willChange: "transform, filter, opacity" }}
      >
        {/* Truco CSS para el efecto RGB Split (sombra de color cian/rojo) */}
        <motion.span 
            className="absolute inset-0 pointer-events-none mix-blend-screen text-cyan-500 opacity-70"
            initial={{ x: 5, opacity: 0 }}
            whileInView={{ x: 0, opacity: [0, 0.8, 0] }} // Parpadeo rápido
            transition={{ duration: 0.4, delay: delay + 0.1 }}
            aria-hidden="true"
        >
            {children}
        </motion.span>
        <motion.span 
            className="absolute inset-0 pointer-events-none mix-blend-screen text-red-500 opacity-70"
            initial={{ x: -5, opacity: 0 }}
            whileInView={{ x: 0, opacity: [0, 0.8, 0] }} // Parpadeo rápido inverso
            transition={{ duration: 0.4, delay: delay + 0.15 }}
            aria-hidden="true"
        >
            {children}
        </motion.span>
        
        <div className="relative z-10">
            {children}
        </div>
      </motion.div>
    );
  }

  // --- EFECTO 2: 3D HOLO-POP (Para bloques grandes) ---
  if (mode === "pop") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, delay: delay }}
        viewport={{ once: true, margin: "-10%" }}
        className={className}
        style={{ perspective: "1000px", willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.div>
    );
  }

  // --- EFECTO 3: SLIDE LATERAL (Subtítulos) ---
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}