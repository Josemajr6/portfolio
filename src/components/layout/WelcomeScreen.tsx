"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";

const bootText = [
  "INITIALIZING CORE...",
  "LOADING ASSETS...",
  "ESTABLISHING SECURE CONNECTION...",
  "DECRYPTING DATA...",
  "ACCESS GRANTED."
] as const;

export default function WelcomeScreen() {
  const [isLoadingCheck, setIsLoadingCheck] = useState(true);
  const [show, setShow] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Verificación inicial
    const hasEntered = sessionStorage.getItem("hasEntered");
    const isMobile = window.innerWidth < 768;

    if (hasEntered || isMobile) {
      // Ya visitado o es móvil: no mostrar welcome
      if (isMobile && !hasEntered) {
        sessionStorage.setItem("hasEntered", "true");
      }
      document.body.style.overflow = "auto";
      setIsLoadingCheck(false);
      return;
    }

    // Primera visita en desktop: mostrar welcome
    setShow(true);
    document.body.style.overflow = "hidden";
    setIsLoadingCheck(false);

    // Animación de boot secuencial
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= bootText.length) {
        clearInterval(interval);
        setIsReady(true);
        setBootIndex(bootText.length - 1);
      } else {
        setBootIndex(currentIndex);
      }
    }, 400);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    sessionStorage.setItem("hasEntered", "true");
    
    setTimeout(() => {
      document.body.style.overflow = "auto";
      setShow(false);
    }, 1500);
  };

  // No renderizar nada durante el chequeo o si no debe mostrarse
  if (isLoadingCheck || !show) return null;

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Fondo Animado */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Contenedor Central */}
          <div className="relative z-10 w-full max-w-md px-6">
            
            {/* Líneas Decorativas Superiores */}
            <div className="flex justify-between items-end mb-8 opacity-50">
              <div className="h-px w-12 bg-emerald-500" />
              <div className="font-mono text-[10px] text-emerald-500 tracking-[0.3em]">SYSTEM_BOOT_V2.0</div>
              <div className="h-px w-12 bg-emerald-500" />
            </div>

            {/* Textos de Carga */}
            <div className="h-24 font-mono text-sm space-y-2 mb-8 text-center md:text-left">
              {bootText.slice(0, bootIndex + 1).map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: i === bootIndex ? 1 : 0.4, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`${i === bootIndex ? "text-emerald-400 font-bold" : "text-emerald-800"}`}
                >
                  {">"} {text}
                </motion.div>
              ))}
            </div>

            {/* Barra de Progreso */}
            <div className="relative w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-12">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: isReady ? "100%" : `${(bootIndex / (bootText.length - 1)) * 100}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
              />
            </div>

            {/* Botón de Acceso */}
            <div className="h-16 flex justify-center items-center">
              <AnimatePresence>
                {isReady && (
                  <motion.button
                    onClick={handleEnter}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-sm"
                  >
                    {/* Bordes animados */}
                    <div className="absolute inset-0 border border-emerald-500/50 group-hover:border-emerald-400" />
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Esquinas Tech */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />

                    <div className="flex items-center gap-3 relative z-10 text-emerald-400 font-mono text-sm tracking-widest font-bold">
                      <FaFingerprint className="animate-pulse" />
                      INITIALIZE SYSTEM
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ) : (
        <ExitAnimation />
      )}
    </AnimatePresence>
  );
}

// Subcomponente de Animación de Salida
function ExitAnimation() {
  return (
    <motion.div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
      {/* Cortina Superior */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="relative flex-1 bg-zinc-950 w-full border-b border-emerald-500/30"
      >
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-500/20 to-transparent" />
      </motion.div>

      {/* Línea de Luz Central */}
      <motion.div
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-50 shadow-[0_0_100px_white]"
      />

      {/* Cortina Inferior */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="relative flex-1 bg-zinc-950 w-full border-t border-emerald-500/30"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-emerald-500/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
}