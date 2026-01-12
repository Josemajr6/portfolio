"use client";
import { useEffect, useState, useRef } from "react";

export default function CyberCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detectar móvil/touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        !!target.closest("a, button, [role='button']") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(isClickable);
    };

    let animationFrameId: number;

    const animate = () => {
      if (!cursorRef.current) return;

      // Interpolación suave (lerp)
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.2;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.2;

      // Aplicar transformación
      cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion transition-[width,height,background-color,border] duration-200 ease-out"
      style={{
        width: isHovered ? '40px' : '10px',
        height: isHovered ? '40px' : '10px',
        backgroundColor: isHovered ? 'transparent' : 'white',
        border: isHovered ? '1px solid white' : 'none',
        borderRadius: '50%',
        willChange: 'transform'
      }}
    />
  );
}