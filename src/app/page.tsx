"use client";
import { useState, useEffect, useRef, memo, useMemo } from "react";
import { AnimatePresence, motion, useMotionValue, useMotionTemplate, useTransform, useInView } from "framer-motion";

// --- COMPONENTES CORE (Sin Dynamic Import para evitar problemas) ---
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
// --- PARTÍCULAS FLOTANTES OPTIMIZADAS ---
const FloatingParticles = memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20
    }))
  , []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
});
FloatingParticles.displayName = 'FloatingParticles';



// --- TARJETA HOLOGRÁFICA ---
const HolographicCard = memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group/holo rounded-2xl ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover/holo:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.5),
              rgba(6, 182, 212, 0.3),
              transparent 80%
            )
          `,
        }}
      />
      
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="relative z-10 h-full rounded-2xl overflow-hidden bg-zinc-900/90 backdrop-blur-xl border border-white/5"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover/holo:opacity-20 transition-opacity duration-500 mix-blend-overlay z-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        <div className="relative z-30 h-full">
          {children}
        </div>
      </div>
      
      <motion.div
        className="absolute inset-0 z-40 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 rounded-2xl pointer-events-none"
        style={{
          opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.3]),
          transform: "translateZ(30px)"
        }}
      />
    </motion.div>
  );
});
HolographicCard.displayName = 'HolographicCard';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1024);
    };
    
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
    <div className="relative bg-zinc-950 min-h-screen text-zinc-200 overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* EFECTOS DE FONDO */}
      <FloatingParticles />
  
      
      {/* GRID ESTÁTICO */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <CyberHeader />
      <HeroQuantum />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- INTRODUCCIÓN --- */}
        <Section id="about" className="pt-20 md:pt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -left-4 -top-4 w-12 h-12 md:w-20 md:h-20 border-l-2 border-t-2 border-emerald-500/20" />
                <span className="text-xs md:text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4 block">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    // System Status: Ready
                  </motion.span>
                </span>
              </motion.div>

              <ScrollReveal mode="cyber-glitch" className="mb-6 md:mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight md:leading-none">
                  Desarrollo <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    Inteligente.
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal mode="pop" delay={0.2}>
              <HolographicCard>
                <div className="p-8">
                  <motion.div 
                    className="absolute top-0 right-0 p-4 opacity-50"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaTerminal className="text-4xl text-white/10" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <motion.span 
                      className="text-emerald-500"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      //
                    </motion.span> 
                    ABOUT_ME
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
            <motion.span 
              className="h-2 w-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
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
            <motion.span 
              className="font-mono text-emerald-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 block"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              // Selected Works
            </motion.span>
            
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
            <motion.span 
              className="font-mono text-yellow-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 block"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              // VALIDATION_TOKENS
            </motion.span>
            <div className="flex items-center gap-3">
              <motion.span 
                className="h-2 w-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
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
            <motion.span 
              className="h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
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

        {/* --- CONTACTO --- */}
        <Section id="contact" className="pb-20 pt-10 md:pt-20">
          <ScrollReveal mode="pop" delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 shadow-[0_0_10px_#10b981]"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 p-6 md:p-16">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-2">
                      <motion.span 
                        className="w-2 h-2 bg-emerald-500 rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-zinc-400 mb-6 font-light text-sm md:text-lg">
                      ¿Tienes una vacante o un proyecto en mente? Despliega tu mensaje. 
                      Tiempo de respuesta estimado: <span className="text-emerald-400 font-mono">&lt;24h</span>.
                    </p>
                    
                    <HolographicCard className="w-full">
                      <a href="mailto:josemajimenezrodriguez8@gmail.com" className="block w-full p-6 group">
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-30">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className="w-12 h-12 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 transition-colors border border-zinc-800 group-hover:border-emerald-500/50"
                              whileHover={{ rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <FaEnvelope size={24} />
                            </motion.div>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <HolographicCard className="sm:col-span-2">
                        <a href="tel:+34722625288" className="block w-full p-4 flex flex-row items-center justify-between gap-3 group">
                          <div className="flex items-center gap-3 z-30 relative">
                            <motion.div 
                              className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500"
                              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaPhoneAlt size={18} />
                            </motion.div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest">Llamada Directa</span>
                              <span className="font-bold text-white text-lg font-mono">+34 722 62 52 88</span>
                            </div>
                          </div>
                          <FaArrowRight className="text-emerald-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform z-30 relative" />
                        </a>
                      </HolographicCard>

                      <HolographicCard>
                        <a href="https://linkedin.com" target="_blank" className="block w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                          <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                            <FaLinkedin size={24} className="text-zinc-500 group-hover:text-[#0077b5] transition-colors z-30 relative" />
                          </motion.div>
                          <span className="font-bold text-xs md:text-sm text-zinc-400 group-hover:text-white z-30 relative">LINKEDIN</span>
                        </a>
                      </HolographicCard>
                      
                      <HolographicCard>
                        <a href="https://github.com/Josemajr6/" target="_blank" className="block w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                          <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                            <FaGithub size={24} className="text-zinc-500 group-hover:text-white transition-colors z-30 relative" />
                          </motion.div>
                          <span className="font-bold text-xs md:text-sm text-zinc-400 group-hover:text-white z-30 relative">GITHUB</span>
                        </a>
                      </HolographicCard>
                    </div>
                  </div>

                  <div className="lg:col-span-1 h-full">
                    <HolographicCard className="h-full">
                      <div className="h-full flex flex-col group min-h-[250px]">
                        <div className="flex-grow p-6 flex flex-col items-center justify-center text-center relative z-30">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <FaSatelliteDish className="text-emerald-600 text-3xl md:text-4xl mb-4" />
                          </motion.div>
                          <div className="font-mono text-zinc-500 text-xs mb-1">PROFILE_STATUS</div>
                          <motion.div 
                            className="text-white font-bold text-lg md:text-xl tracking-widest group-hover:text-emerald-400 transition-colors"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            AVAILABLE
                          </motion.div>
                        </div>
                        <a href="/cv-JoseManuel.pdf" download="CV-JoseManuel-Jimenez.pdf" className="relative z-30 bg-emerald-600 hover:bg-emerald-500 text-black p-4 md:p-6 text-center transition-colors cursor-pointer overflow-hidden group">
                          <motion.div 
                            className="absolute inset-0 bg-emerald-400"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
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
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] bg-emerald-500/10 blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div 
            className="font-mono text-[10px] text-emerald-600 mb-4 tracking-[0.5em]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            /// END_OF_TRANSMISSION ///
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-base md:text-xl font-bold text-zinc-300">
            <div className="flex items-center gap-2">
              <span>Desarrollado con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" size={20} />
              </motion.div>
            </div>
            <div className="flex items-center gap-2">
              <span>por</span>
              <span className="relative group cursor-default">
                <motion.span 
                  className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded blur opacity-20 group-hover:opacity-50 transition duration-500"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
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