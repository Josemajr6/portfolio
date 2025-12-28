"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

// --- COMPONENTES ORIGINALES ---
import HeroQuantum from "@/components/sections/HeroQuantum";
import TechArsenal from "@/components/sections/TechArsenal";
import CircuitTimeline from "@/components/sections/CircuitTimeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Certifications from "@/components/sections/Certifications";
import CyberHeader from "@/components/layout/CyberHeader";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaSatelliteDish, FaHeart, FaArrowRight, FaPhoneAlt, FaTerminal } from "react-icons/fa";

// --- COMPONENTES MOBILE ---
import MobileApp from "@/components/mobile/MobileApp";
import MobileWelcome from "@/components/mobile/MobileWelcome";

// --- NUEVA TARJETA HOLOGRÁFICA "ESPECTACULAR" V2 ---
const HolographicCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotación 3D suave
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]); 
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      
      const xPct = clientX / width - 0.5;
      const yPct = clientY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
      mouseX.set(clientX);
      mouseY.set(clientY);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group/holo rounded-2xl transition-all duration-200 ease-out ${className}`}
    >
      {/* 1. BORDE REACTIVO "ESPECTACULAR" (Sigue al ratón) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover/holo:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.5), /* Emerald central */
              rgba(6, 182, 212, 0.3),  /* Cyan intermedio */
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. CONTENEDOR PRINCIPAL DEL CONTENIDO (Con fondo propio para tapar el borde interno) */}
      <div 
        style={{ transform: "translateZ(20px)" }} 
        // IMPORTANTE: bg-zinc-900 aquí para que sea sólido y el borde solo se vea por fuera
        className="relative z-10 h-full rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-xl border border-white/5"
      >
         {/* 3. EFECTO DE REJILLA CIBERNÉTICA SOBRE EL CONTENIDO */}
         <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover/holo:opacity-20 transition-opacity duration-500 mix-blend-overlay z-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`
            }}
         />
        
        {/* EL CONTENIDO REAL DE LA TARJETA */}
        <div className="relative z-30 h-full">
            {children}
        </div>
      </div>
      
      {/* 4. BRILLO ESPECULAR SUPERIOR (Reflejo) */}
      <motion.div
        className="absolute inset-0 z-40 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-2xl pointer-events-none"
        style={{
          opacity: useTransform(x, [-0.5, 0.5], [0, 0.3]),
          transform: "translateZ(30px)"
        }}
      />
    </motion.div>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  // Fondo Paralaje Suave
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  if (isMobile) {
      return (
        <>
            <AnimatePresence mode="wait">
                {showWelcome && <MobileWelcome onComplete={() => setShowWelcome(false)} />}
            </AnimatePresence>
            {!showWelcome && <MobileApp />}
        </>
      );
  }

  // --- MODO ESCRITORIO ---
  return (
    <div className="relative bg-zinc-950 min-h-screen text-zinc-200 overflow-x-hidden selection:bg-emerald-500/30 flex flex-col perspective-[2000px]">
      
      {/* FX: CYBER GRID BACKGROUND (Sutil y elegante) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]">
         <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] h-[150vh]" 
         />
      </div>

      <CyberHeader />
      <HeroQuantum />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex-grow">
        
        {/* --- INTRODUCCIÓN CON TARJETA 3D --- */}
        <Section id="about" className="pt-20 md:pt-32 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                
                {/* Texto Izquierdo */}
                <div className="relative">
                    <ScrollReveal mode="slide-right">
                        <div className="absolute -left-4 -top-4 w-12 h-12 md:w-20 md:h-20 border-l-2 border-t-2 border-emerald-500/20" />
                        <span className="text-xs md:text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4 block animate-pulse">
                            // System Status: Ready
                        </span>
                    </ScrollReveal>

                    <ScrollReveal mode="cyber-glitch" className="mb-6 md:mb-8">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight md:leading-none">
                            Desarrollo <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Inteligente.</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Tarjeta Derecha "Holográfica" V2 */}
                <ScrollReveal mode="pop" delay={0.2}>
                    <HolographicCard>
                         <div className="p-8">
                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                <FaTerminal className="text-4xl text-white/10" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">//</span> ABOUT_ME
                            </h3>
                            <div className="prose prose-lg prose-invert text-zinc-300 leading-relaxed text-sm md:text-lg">
                                <p className="font-light">
                                Estudiante avanzado de <strong className="font-bold text-white">DAM</strong> con mentalidad <strong className="font-bold text-white">Full Stack</strong>. 
                                Desarrollo soluciones web integrales (<strong className="font-bold text-white">Frontend & Backend</strong>) y aplicaciones móviles ágiles. 
                                Enfocado en escribir código limpio y escalable, listo para aportar valor en entornos de producción desde el primer día.
                                </p>
                            </div>
                        </div>
                    </HolographicCard>
                </ScrollReveal>
            </div>
        </Section>

        {/* --- ARSENAL TECNOLÓGICO --- */}
        <Section id="stack">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
              <ScrollReveal mode="pop">
                 <span className="h-2 w-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] inline-block"></span>
              </ScrollReveal>
              <ScrollReveal mode="cyber-glitch">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Arsenal Tecnológico
                  </h2>
              </ScrollReveal>
          </div>
          <ScrollReveal mode="pop" delay={0.2}>
              <div className="w-full">
                  <TechArsenal />
              </div>
          </ScrollReveal>
        </Section>

        {/* --- PROYECTOS --- */}
        <Section id="projects">
            <div className="flex flex-col items-center mb-12 md:mb-16 text-center px-2">
                <ScrollReveal mode="slide-right">
                    <span className="font-mono text-emerald-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 animate-pulse block">
                    // Selected Works
                    </span>
                </ScrollReveal>
                
                <ScrollReveal mode="cyber-glitch">
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                    Misiones <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Destacadas</span>
                    </h2>
                </ScrollReveal>
            </div>

            <ScrollReveal mode="pop" delay={0.2}>
                <FeaturedProjects /> 
            </ScrollReveal>
        </Section>

        {/* --- CERTIFICACIONES --- */}
        <Section id="certifications" className="pb-20">
            <div className="flex flex-col items-center mb-12 text-center">
                 <ScrollReveal mode="slide-right">
                    <span className="font-mono text-yellow-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 animate-pulse block">
                    // VALIDATION_TOKENS
                    </span>
                </ScrollReveal>
                <div className="flex items-center gap-3">
                    <ScrollReveal mode="pop">
                       <span className="h-2 w-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] inline-block"></span>
                    </ScrollReveal>
                    
                    <ScrollReveal mode="cyber-glitch">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          Licencias & Certificaciones
                        </h2>
                    </ScrollReveal>
                </div>
            </div>
            
            <ScrollReveal mode="pop" delay={0.2}>
                <Certifications />
            </ScrollReveal>
        </Section>

        {/* --- TRAYECTORIA --- */}
        <Section id="experience">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
              <ScrollReveal mode="pop">
                 <span className="h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] inline-block"></span>
              </ScrollReveal>
              
              <ScrollReveal mode="cyber-glitch">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Log de Ejecución
                  </h2>
              </ScrollReveal>
          </div>
          
          <div className="relative w-full">
              <CircuitTimeline />
          </div>
        </Section>

        {/* --- CONTACTO (MEJORADO CON EFECTOS ESPECTACULARES) --- */}
        <Section id="contact" className="pb-20 pt-10 md:pt-20">
          <ScrollReveal mode="pop" delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                
                {/* Fondo animado sutil interno */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 shadow-[0_0_10px_#10b981]" />

                <div className="relative z-10 p-6 md:p-16">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-2 animate-pulse">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                            SECURE_CHANNEL_OPEN
                        </div>
                        
                        <ScrollReveal mode="cyber-glitch">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                INICIAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">UPLINK</span>
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="text-left md:text-right flex flex-row md:flex-col gap-4 md:gap-0">
                        <div className="text-zinc-500 font-mono text-[10px] md:text-xs">LATENCY: 12ms</div>
                        <div className="text-zinc-500 font-mono text-[10px] md:text-xs">ENCRYPTION: AES-256</div>
                    </div>
                </div>

                {/* --- GRID DE CONTACTO CON NUEVAS TARJETAS HOLOGRÁFICAS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* COLUMNA IZQUIERDA (Texto + Email + Grid Social) */}
                    <div className="lg:col-span-2 space-y-6">
                        <p className="text-zinc-400 mb-6 font-light text-sm md:text-lg">
                            ¿Tienes una vacante o un proyecto en mente? Despliega tu mensaje. 
                            Tiempo de respuesta estimado: <span className="text-emerald-400 font-mono">&lt;24h</span>.
                        </p>
                        
                        {/* 1. EMAIL CARD (Aplicando nueva HolographicCard V2) */}
                        <HolographicCard className="w-full">
                            <a href="mailto:josemajimenezrodriguez8@gmail.com" className="block w-full p-6 group">
                                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-30">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors border border-zinc-800 group-hover:border-emerald-500/50">
                                            <FaEnvelope size={24} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Destinatario</span>
                                            <div className="text-sm md:text-xl font-bold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors break-all">
                                                josemajimenezrodriguez8@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2 text-zinc-500 text-xs font-mono group-hover:text-emerald-500 transition-colors">
                                        <span>SEND_MAIL</span>
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </a>
                        </HolographicCard>

                        {/* 2. GRID SECUNDARIO (TELÉFONO + SOCIALS) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* BOTÓN TELÉFONO */}
                            <HolographicCard className="sm:col-span-2">
                                <a href="tel:+34722625288" className="block w-full p-4 flex flex-row items-center justify-between gap-3 group">
                                    <div className="flex items-center gap-3 z-30 relative">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                                           <FaPhoneAlt size={18} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest">Llamada Directa</span>
                                            <span className="font-bold text-white text-lg font-mono">+34 722 62 52 88</span>
                                        </div>
                                    </div>
                                    <FaArrowRight className="text-emerald-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform z-30 relative" />
                                </a>
                            </HolographicCard>

                            {/* SOCIAL BUTTONS */}
                            <HolographicCard>
                                <a href="https://linkedin.com" target="_blank" className="block w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                                    <FaLinkedin size={24} className="text-zinc-500 group-hover:text-[#0077b5] transition-colors z-30 relative" />
                                    <span className="font-bold text-xs md:text-sm text-zinc-400 group-hover:text-white z-30 relative">LINKEDIN</span>
                                </a>
                            </HolographicCard>
                            
                            <HolographicCard>
                                <a href="https://github.com" target="_blank" className="block w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                                    <FaGithub size={24} className="text-zinc-500 group-hover:text-white transition-colors z-30 relative" />
                                    <span className="font-bold text-xs md:text-sm text-zinc-400 group-hover:text-white z-30 relative">GITHUB</span>
                                </a>
                            </HolographicCard>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA (CV DOWNLOAD) */}
                    <div className="lg:col-span-1 h-full">
                        <HolographicCard className="h-full">
                            <div className="h-full flex flex-col group min-h-[250px]">
                                <div className="flex-grow p-6 flex flex-col items-center justify-center text-center relative z-30">
                                    <FaSatelliteDish className="text-emerald-600 text-3xl md:text-4xl mb-4 group-hover:animate-bounce transition-transform" />
                                    <div className="font-mono text-zinc-500 text-xs mb-1">PROFILE_STATUS</div>
                                    <div className="text-white font-bold text-lg md:text-xl tracking-widest group-hover:text-emerald-400 transition-colors">AVAILABLE</div>
                                </div>
                                <a href="/cv-JoseManuel.pdf" download="CV-JoseManuel-Jimenez.pdf" className="relative z-30 bg-emerald-600 hover:bg-emerald-500 text-black p-4 md:p-6 text-center transition-colors cursor-pointer overflow-hidden">
                                    <div className="flex flex-col items-center gap-2 relative z-10">
                                        <span className="font-black font-mono uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                                            <FaFileDownload /> DOWNLOAD CV
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </HolographicCard>
                    </div>
                </div>
                </div>
            </div>
          </ScrollReveal>
        </Section>
      </div>

      <footer className="relative py-12 md:py-16 border-t border-emerald-900/30 bg-black overflow-hidden mt-10 md:mt-20">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] bg-emerald-500/10 blur-[80px] pointer-events-none" />
         <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="font-mono text-[10px] text-emerald-600 mb-4 tracking-[0.5em] animate-pulse">
               /// END_OF_TRANSMISSION ///
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-base md:text-xl font-bold text-zinc-300">
               <div className="flex items-center gap-2">
                 <span>Desarrollado con</span>
                 <FaHeart className="text-red-600 animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" size={20} />
               </div>
               <div className="flex items-center gap-2">
                 <span>por</span>
                 <span className="relative group cursor-default">
                    <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded blur opacity-20 group-hover:opacity-50 transition duration-500" />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-black tracking-wide drop-shadow-sm">
                       José Manuel Jiménez
                    </span>
                 </span>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
}