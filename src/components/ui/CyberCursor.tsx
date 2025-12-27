"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CyberCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Nuevo estado
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 1500, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // DETECCIÓN DE MÓVIL/TOUCH
    // Si el dispositivo tiene capacidad táctil 'coarse' (gruesa), ocultamos el cursor custom
    if (window.matchMedia("(pointer: coarse)").matches) {
        setIsVisible(false);
        return; 
    }
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = !!target.closest("a");
      const isButton = !!target.closest("button");
      const isClickableTag = target.tagName === "A" || target.tagName === "BUTTON";
      const hasPointer = window.getComputedStyle(target).cursor === "pointer";
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

  if (!isVisible) return null; // No renderiza nada en móvil

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-exclusion">
      <motion.div
        style={{ 
            x: cursorX, 
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%"
        }}
        animate={{
            width: isHovered ? 40 : 10,
            height: isHovered ? 40 : 10,
            backgroundColor: isHovered ? "transparent" : "#ffffff",
            borderWidth: isHovered ? "1px" : "0px",
            borderColor: "#ffffff",
            scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 25 }}
        className="rounded-full flex items-center justify-center backdrop-blur-[1px]"
      />
    </div>
  );
}