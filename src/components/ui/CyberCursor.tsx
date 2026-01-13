"use client";
import { useEffect, useState } from "react";

export default function CyberCursor() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detectar móvil/touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsVisible(true);

    // Crear cursor directamente en DOM (más rápido que React)
    const cursor = document.createElement('div');
    cursor.id = 'cyber-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: exclusion;
      transform: translate(-50%, -50%);
      transition: width 0.15s ease, height 0.15s ease, background-color 0.15s ease, border 0.15s ease;
      will-change: transform;
    `;
    document.body.appendChild(cursor);

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Actualizar posición del mouse (muy ligero)
    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animación con RAF (suave pero eficiente)
    let rafId: number;
    const animate = () => {
      // Interpolación simple y rápida
      posX += (mouseX - posX) * 0.3;
      posY += (mouseY - posY) * 0.3;
      
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
      
      rafId = requestAnimationFrame(animate);
    };

    // Detección de elementos clickeables (optimizada)
    const updateCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Buscar si el elemento o su padre es clickeable
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a, button, [role="button"]');
      
      if (isClickable) {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = '1px solid white';
      } else {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursor.style.backgroundColor = 'white';
        cursor.style.border = 'none';
      }
    };

    window.addEventListener('mousemove', updateMouse, { passive: true });
    window.addEventListener('mouseover', updateCursorStyle, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mouseover', updateCursorStyle);
      cancelAnimationFrame(rafId);
      document.body.removeChild(cursor);
    };
  }, []);

  if (!isVisible) return null;
  
  // No renderizamos nada, todo se hace con DOM nativo
  return null;
}