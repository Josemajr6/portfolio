"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CyberCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Posición cruda del ratón
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // FÍSICA DE ALTA VELOCIDAD (Low Latency)
  // stiffness alto (1500) + mass bajo (0.1) = Movimiento casi instantáneo
  // Esto elimina la sensación de "peso" o lag.
  const springConfig = { damping: 50, stiffness: 1500, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Comprobamos si es un elemento interactivo
      // Usamos '!!' para convertir el resultado (que puede ser null o Element) a boolean puro
      const isLink = !!target.closest("a");
      const isButton = !!target.closest("button");
      const isClickableTag = target.tagName === "A" || target.tagName === "BUTTON";
      const hasPointer = window.getComputedStyle(target).cursor === "pointer";

      // Si cumple alguna condición, activamos el hover
      setIsHovered(isLink || isButton || isClickableTag || hasPointer);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion">
      <motion.div
        style={{ 
            x: cursorX, 
            y: cursorY,
            translateX: "-50%", // Centramos el cursor exacto en la punta del ratón
            translateY: "-50%"
        }}
        animate={{
            // Lógica de tamaño:
            // Normal: 10px (pequeño y preciso)
            // Hover: 40px (aro grande)
            // Click: 30px (se encoge un poco al pulsar)
            width: isHovered ? 40 : 10,
            height: isHovered ? 40 : 10,
            
            // Lógica de estilo:
            // Normal: Blanco sólido
            // Hover: Transparente con borde blanco (efecto mira)
            backgroundColor: isHovered ? "transparent" : "#ffffff",
            borderWidth: isHovered ? "1px" : "0px",
            borderColor: "#ffffff",
            
            scale: isClicked ? 0.8 : 1,
        }}
        // Transición visual rápida (snappy)
        transition={{ 
            type: "spring", 
            stiffness: 500, // Muy rápido al cambiar de forma
            damping: 25 
        }}
        className="rounded-full flex items-center justify-center backdrop-blur-[1px]"
      />
    </div>
  );
}