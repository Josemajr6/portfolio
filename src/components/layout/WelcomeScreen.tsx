"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint, FaChevronRight } from "react-icons/fa";

const bootText = [
  "INITIALIZING CORE...",
  "LOADING ASSETS...",
  "ESTABLISHING CONNECTION...",
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
    }, 500);

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
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Fondo con Gradiente Animado */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1), transparent 70%)",
                "radial-gradient(circle at 40% 60%, rgba(6,182,212,0.1), transparent 70%)",
                "radial-gradient(circle at 60% 40%, rgba(16,185,129,0.1), transparent 70%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />

          {/* Grid de Fondo */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Contenedor Principal */}
          <div className="relative z-10 w-full max-w-2xl px-6">
            
            {/* Logo Central */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              className="flex justify-center mb-12"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(16,185,129,0.4)",
                      "0 0 60px rgba(16,185,129,0.8)",
                      "0 0 30px rgba(16,185,129,0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center"
                >
                  <FaFingerprint className="text-5xl text-black" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-emerald-500/30 rounded-full"
                  style={{ width: "110px", height: "110px", top: "-7px", left: "-7px" }}
                />
              </div>
            </motion.div>

            {/* Nombre */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-8"
            >
              <motion.h1
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(16,185,129,0.5)",
                    "0 0 40px rgba(16,185,129,0.8)",
                    "0 0 20px rgba(16,185,129,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4"
              >
                JOSÉ MANUEL
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent max-w-md mx-auto mb-3"
              />
              <p className="text-emerald-400 font-mono text-xs tracking-[0.4em]">
                PORTFOLIO SYSTEM
              </p>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-black/60 backdrop-blur-md border border-emerald-500/20 rounded-xl p-6 mb-8"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-emerald-500/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-emerald-500 font-mono ml-2">system.boot</span>
              </div>
              
              <div className="space-y-2 font-mono text-sm min-h-[140px]">
                {bootText.slice(0, bootIndex + 1).map((text, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: i === bootIndex ? 1 : 0.5, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-2 ${i === bootIndex ? "text-emerald-400" : "text-emerald-700"}`}
                  >
                    <span>{">"}</span>
                    <span>{text}</span>
                    {i === bootIndex && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-emerald-400 ml-1"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Barra de Progreso */}
            <div className="relative w-full h-2 bg-black/50 rounded-full overflow-hidden mb-10 border border-emerald-500/20">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ 
                  width: isReady ? "100%" : `${(bootIndex / (bootText.length - 1)) * 100}%`
                }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
              />
            </div>

            {/* Botón Estilo Terminal */}
            <div className="flex justify-center">
              <AnimatePresence>
                {isReady && (
                  <motion.button
                    onClick={handleEnter}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500" />
                    </div>

                    <div className="relative bg-black border border-emerald-500/50 px-12 py-4 overflow-hidden group-hover:border-emerald-400 transition-colors">
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
                      />
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="flex flex-col items-start">
                          <span className="text-[9px] text-emerald-600 font-mono uppercase tracking-[0.3em] mb-1">
                            PRESS TO CONTINUE
                          </span>
                          <span className="text-xl font-black text-emerald-400 tracking-wider font-mono">
                            ENTER SYSTEM
                          </span>
                        </div>
                        
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FaChevronRight className="text-emerald-400 text-2xl" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-16 h-px bg-gradient-to-r from-transparent to-emerald-500/50 group-hover:to-emerald-500 transition-colors" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-16 h-px bg-gradient-to-l from-transparent to-emerald-500/50 group-hover:to-emerald-500 transition-colors" />
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

// Tu animación original que funcionaba
function ExitAnimation() {
  return (
    <motion.div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
      {/* Cortina Superior */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="relative flex-1 bg-black w-full border-b border-emerald-500/30"
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
        className="relative flex-1 bg-black w-full border-t border-emerald-500/30"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-emerald-500/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
}