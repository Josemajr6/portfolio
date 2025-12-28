"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

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

// --- 1. COMPONENTE DE TEXTO "HACKER" (SCRAMBLE EFFECT) ---
const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  
  // Efecto simple al montar: mezcla letras y luego resuelve
  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{display}</span>;
};

// --- 2. TARJETA HOLOGRÁFICA 3D (TILT EFFECT) ---
// Esta tarjeta sigue al ratón y rota en 3D
const HolographicCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]); // Rango de rotación
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {children}
      </div>
      
      {/* Brillo especular dinámico */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-xl pointer-events-none"
        style={{
          opacity: useTransform(x, [-0.5, 0.5], [0, 0.3]),
        }}
      />
    </motion.div>
  );
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  // Background Global FX
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
      
      {/* FX: CYBER GRID BACKGROUND (MOVING) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform:perspective(1000px)_rotateX(60deg)] origin-top h-[200vh]" 
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
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/>
                            <span className="text-xs md:text-sm font-mono text-emerald-500 uppercase tracking-widest">
                                System Status: <span className="text-white">ONLINE</span>
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal mode="cyber-glitch" className="mb-6 md:mb-8">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
                            <span className="block text-zinc-600">CODING</span>
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 animate-gradient-x">FUTURE</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Tarjeta Derecha "Glass" con Tilt 3D */}
                <ScrollReveal mode="pop" delay={0.2}>
                    <HolographicCard className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl group">
                         <div className="absolute top-0 right-0 p-4 opacity-50">
                             <FaTerminal className="text-4xl text-white/10 group-hover:text-emerald-500/20 transition-colors" />
                         </div>
                         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                             <span className="text-emerald-500">//</span> ABOUT_ME
                         </h3>
                         <div className="prose prose-lg prose-invert text-zinc-300 leading-relaxed">
                            <p>
                              Estudiante avanzado de <strong className="text-white">DAM</strong> con mentalidad <strong className="text-emerald-400">Full Stack</strong>. 
                              Desarrollo soluciones integrales (<span className="text-zinc-400 font-mono text-sm">Frontend & Backend</span>) y aplicaciones móviles nativas. 
                              Obsesionado con el rendimiento y el diseño UI/UX de alto impacto.
                            </p>
                         </div>
                         <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-500">
                             <span>Compiling...</span>
                             <div className="h-1 w-24 bg-zinc-800 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                    className="h-full bg-emerald-500"
                                 />
                             </div>
                             <span className="text-emerald-500">100%</span>
                         </div>
                    </HolographicCard>
                </ScrollReveal>
            </div>
        </Section>

        {/* --- ARSENAL TECNOLÓGICO --- */}
        <Section id="stack">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
              <ScrollReveal mode="cyber-glitch">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                    <span className="text-indigo-500">#</span> Arsenal Tecnológico
                  </h2>
              </ScrollReveal>
          </div>
          <ScrollReveal mode="pop" delay={0.2}>
              <div className="w-full p-1 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl">
                  <TechArsenal />
              </div>
          </ScrollReveal>
        </Section>

        {/* --- PROYECTOS --- */}
        <Section id="projects">
            <div className="flex flex-col items-center mb-16 text-center">
                <ScrollReveal mode="slide-right">
                    <span className="font-mono text-emerald-500 text-xs tracking-[0.3em] uppercase mb-4 block">
                         /// DEPLOYED_MODULES
                    </span>
                </ScrollReveal>
                
                <h2 className="text-4xl md:text-6xl font-black text-white mb-2">
                    <ScrambleText text="MISIONES DESTACADAS" />
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
            </div>

            <ScrollReveal mode="pop" delay={0.2}>
                <FeaturedProjects /> 
            </ScrollReveal>
        </Section>

        {/* --- CERTIFICACIONES --- */}
        <Section id="certifications" className="pb-20">
            <div className="flex flex-col items-center mb-12 text-center">
                <div className="flex items-center gap-3">
                    <ScrollReveal mode="cyber-glitch">
                         <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                           <span className="text-yellow-400">✦</span> Licencias & Certificaciones
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
          <div className="flex items-center gap-3 mb-12">
              <ScrollReveal mode="cyber-glitch">
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                    <span className="text-emerald-500">#</span> Log de Ejecución
                  </h2>
              </ScrollReveal>
          </div>
          <div className="relative w-full border-l border-zinc-800 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
              <CircuitTimeline />
          </div>
        </Section>

        {/* --- CONTACTO "CONTROL CENTER" --- */}
        <Section id="contact" className="pb-32 pt-20">
            {/* Título */}
            <div className="mb-16">
                <ScrollReveal mode="slide-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        OPEN_FOR_WORK
                    </div>
                </ScrollReveal>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    INICIAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">PROTOCOLO</span>
                </h2>
                <p className="text-zinc-500 mt-4 max-w-xl text-lg">
                    ¿Tienes un proyecto desafiante? Estoy listo para desplegar código.
                </p>
            </div>

            {/* Grid de Tarjetas 3D */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 1. EMAIL CARD (Grande) */}
                <div className="lg:col-span-2">
                    <HolographicCard className="h-full bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-8 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 h-full relative z-10">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center text-3xl text-zinc-600 group-hover:text-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Correo Principal</span>
                                    <a href="mailto:josemajimenezrodriguez8@gmail.com" className="block text-xl md:text-3xl font-black text-white hover:text-emerald-400 transition-colors mt-1 break-all">
                                        josemajimenezrodriguez8@gmail.com
                                    </a>
                                </div>
                            </div>
                            <FaArrowRight className="text-2xl text-zinc-700 group-hover:text-emerald-500 group-hover:-rotate-45 transition-all duration-300 transform" />
                        </div>
                    </HolographicCard>
                </div>

                {/* 2. CV CARD (Descarga) */}
                <div className="lg:col-span-1">
                    <HolographicCard className="h-full bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-1 group">
                         <div className="h-full bg-zinc-950/50 rounded-xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             
                             <FaSatelliteDish className="text-4xl text-zinc-600 group-hover:text-emerald-500 mb-4 transition-colors relative z-10" />
                             <h3 className="text-white font-bold text-lg relative z-10">Descargar CV</h3>
                             <p className="text-zinc-500 text-sm mb-6 relative z-10">Formato PDF Compilado</p>
                             
                             <a href="/cv-JoseManuel.pdf" download="CV-JoseManuel-Jimenez.pdf" className="relative z-10 px-6 py-3 bg-white text-black font-black font-mono text-sm uppercase rounded hover:bg-emerald-400 transition-colors w-full flex items-center justify-center gap-2">
                                <FaFileDownload /> GET_FILE
                             </a>
                         </div>
                    </HolographicCard>
                </div>

                {/* 3. SOCIAL & PHONE ROW */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Phone */}
                    <HolographicCard className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 group flex items-center justify-between">
                         <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-emerald-600 group-hover:text-emerald-400">
                                 <FaPhoneAlt />
                             </div>
                             <div>
                                 <div className="text-[10px] font-mono text-zinc-500 uppercase">Llamada</div>
                                 <div className="text-lg font-bold text-white">+34 722 62 52 88</div>
                             </div>
                         </div>
                    </HolographicCard>
                    
                    {/* Linkedin */}
                    <a href="https://linkedin.com" target="_blank" className="block h-full">
                        <HolographicCard className="h-full bg-zinc-900 border border-zinc-800 hover:border-[#0077b5] rounded-2xl p-6 group flex items-center justify-center gap-4 cursor-pointer hover:bg-[#0077b5]/10">
                            <FaLinkedin className="text-3xl text-zinc-600 group-hover:text-[#0077b5] transition-colors" />
                            <span className="font-bold text-zinc-400 group-hover:text-white">LINKEDIN PROFILE</span>
                        </HolographicCard>
                    </a>

                     {/* Github */}
                    <a href="https://github.com" target="_blank" className="block h-full">
                        <HolographicCard className="h-full bg-zinc-900 border border-zinc-800 hover:border-white rounded-2xl p-6 group flex items-center justify-center gap-4 cursor-pointer hover:bg-white/5">
                            <FaGithub className="text-3xl text-zinc-600 group-hover:text-white transition-colors" />
                            <span className="font-bold text-zinc-400 group-hover:text-white">GITHUB REPO</span>
                        </HolographicCard>
                    </a>
                </div>
            </div>
        </Section>
      </div>

      <footer className="py-12 text-center border-t border-white/5 bg-black relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <p className="text-zinc-500 text-sm font-mono">
              © {new Date().getFullYear()} JOSEMAJR_6 <span className="text-emerald-500 mx-2">//</span> SYSTEM_SECURE
          </p>
      </footer>

    </div>
  );
}