"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaTerminal } from "react-icons/fa";

export default function MobileWelcome({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    // Comprobamos si ya ha visto la intro en esta sesión
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (hasSeen) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Secuencia de carga estilo Terminal
    const bootSequence = [
      "INITIALIZING KERNEL...",
      "LOADING MODULES: [###########] 100%",
      "CONNECTING TO NEURAL NET...",
      "USER: JOSE_MANUEL DETECTED",
      "ACCESS GRANTED."
    ];

    let delay = 0;
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootSequence.length - 1) {
             // Finalizar intro
             setTimeout(() => {
                 sessionStorage.setItem("hasSeenWelcome", "true");
                 onComplete();
             }, 1000);
        }
      }, delay);
      delay += 800; // Tiempo entre líneas
    });

  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-black font-mono text-emerald-500 p-8 flex flex-col justify-end pb-32"
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
    >
        <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] opacity-5 pointer-events-none bg-cover" /> 
        
        <FaTerminal className="text-4xl mb-6 text-emerald-400 animate-pulse" />
        
        <div className="space-y-2">
            {lines.map((line, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs md:text-sm tracking-wider"
                >
                    {">"} {line}
                </motion.div>
            ))}
        </div>
        
        <div className="mt-4 h-6 w-3 bg-emerald-500 animate-pulse" />
    </motion.div>
  );
}