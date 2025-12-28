"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";

const bootText = [
  "INITIALIZING CORE...",
  "LOADING ASSETS...",
  "ESTABLISHING SECURE CONNECTION...",
  "DECRYPTING DATA...",
  "ACCESS GRANTED."
];

export default function WelcomeScreen() {
  // --- FIX DEL PARPADEO ---
  // 1. 'isLoadingCheck': Empieza en true. No renderizaremos NADA mientras esto sea true.
  const [isLoadingCheck, setIsLoadingCheck] = useState(true);
  // 2. 'show': Empieza en false. Solo se pondrá true si el chequeo lo determina.
  const [show, setShow] = useState(false);
  
  const [bootIndex, setBootIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  // Usamos useRef para el intervalo para poder limpiarlo correctamente dentro del useEffect condicional
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Este código solo se ejecuta en el cliente (navegador).
    const hasEntered = sessionStorage.getItem("hasEntered");

    if (hasEntered) {
      // CASO 1: YA HA ENTRADO.
      // No hacemos nada, 'show' se mantiene en false.
      // Aseguramos que el scroll esté permitido por si acaso.
      document.body.style.overflow = "auto";
    } else {
      // CASO 2: PRIMERA VEZ EN LA SESIÓN.
      // Mostramos la pantalla y bloqueamos el scroll.
      setShow(true);
      document.body.style.overflow = "hidden";

      // INICIAMOS LA SECUENCIA DE BOOT SOLO AHORA
      intervalRef.current = setInterval(() => {
        setBootIndex((prev) => {
          if (prev < bootText.length - 1) return prev + 1;
          // Fin de la secuencia
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsReady(true); // Listo para el botón de interacción
          return prev;
        });
      }, 400);
    }

    // FINALMENTE: Marcamos que el chequeo inicial ha terminado.
    // Esto permitirá que el componente decida si renderizarse o no.
    setIsLoadingCheck(false);

    // Cleanup function
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      // Asegurar que el scroll se desbloquea si el componente se desmonta abruptamente
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    // GUARDAR EN SESSION STORAGE
    sessionStorage.setItem("hasEntered", "true");
    
    // DESBLOQUEAR SCROLL DESPUÉS DE LA ANIMACIÓN
    setTimeout(() => {
      document.body.style.overflow = "auto";
      setShow(false);
    }, 1500); // Duración de la animación de salida
  };

  // --- LÓGICA DE RENDERIZADO CONDICIONAL (EL FIX) ---
  // Si todavía estamos comprobando (isLoadingCheck es true) O si el resultado fue que no hay que mostrarlo (show es false)...
  // ... NO RENDERIZAMOS NADA. Esto evita el flash del contenido inicial incorrecto.
  if (isLoadingCheck || !show) return null;

  // Si pasamos aquí, es seguro renderizar la pantalla de bienvenida.
  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="welcome-overlay"
          // Añadimos un initial opacity 0 para que la aparición sea suave si tarda un milisegundo en cargar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden cursor-wait"
        >
          {/* --- FONDO ANIMADO --- */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* --- CONTENEDOR CENTRAL --- */}
          <div className="relative z-10 w-full max-w-md px-6">
            
            {/* LÍNEAS DECORATIVAS SUPERIORES */}
            <div className="flex justify-between items-end mb-8 opacity-50">
                <div className="h-px w-12 bg-emerald-500" />
                <div className="font-mono text-[10px] text-emerald-500 tracking-[0.3em]">SYSTEM_BOOT_V2.0</div>
                <div className="h-px w-12 bg-emerald-500" />
            </div>

            {/* TEXTOS DE CARGA */}
            <div className="h-24 font-mono text-sm space-y-2 mb-8 text-center md:text-left">
                {bootText.slice(0, bootIndex + 1).map((text, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: i === bootIndex ? 1 : 0.4, x: 0 }}
                        className={`${i === bootIndex ? "text-emerald-400 font-bold" : "text-emerald-800"}`}
                    >
                        {">"} {text}
                    </motion.div>
                ))}
            </div>

            {/* BARRA DE PROGRESO */}
            <div className="relative w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-12">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: isReady ? "100%" : `${(bootIndex / (bootText.length - 1)) * 100}%` }}
                    className="absolute inset-y-0 left-0 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                />
            </div>

            {/* BOTÓN DE ACCESO (SOLO APARECE CUANDO ESTÁ READY) */}
            <div className="h-16 flex justify-center items-center">
                {isReady && (
                    <motion.button
                        onClick={handleEnter}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-sm cursor-pointer"
                    >
                        {/* Bordes animados del botón */}
                        <div className="absolute inset-0 border border-emerald-500/50" />
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
            </div>
          </div>
        </motion.div>
      ) : (
        /* --- ANIMACIÓN DE SALIDA (THE SHUTTER / WARP) --- */
        <ExitAnimation />
      )}
    </AnimatePresence>
  );
}

// Subcomponente de Salida Espectacular (Sin cambios)
function ExitAnimation() {
    return (
        <motion.div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="relative flex-1 bg-zinc-950 w-full border-b border-emerald-500/30"
            >
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-500/20 to-transparent" />
            </motion.div>

            <motion.div
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-1/2 left-0 w-full h-[2px] bg-white z-50 shadow-[0_0_100px_white]"
            />

            <motion.div
                initial={{ y: 0 }}
                animate={{ y: "100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="relative flex-1 bg-zinc-950 w-full border-t border-emerald-500/30"
            >
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-emerald-500/20 to-transparent" />
            </motion.div>
        </motion.div>
    )
}