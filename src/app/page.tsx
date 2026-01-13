"use client";
import { useState, useEffect, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

// --- IMPORTACIONES ESTÁTICAS (críticas) ---
import CyberHeader from "@/components/layout/CyberHeader";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaHeart, FaArrowRight, FaPhoneAlt, FaTerminal } from "react-icons/fa";

// --- HERO OPTIMIZADO ---
const HeroQuantum = dynamic(() => import("@/components/sections/HeroQuantum"), {
  loading: () => <div className="h-screen bg-black" />,
  ssr: true
});

// --- LAZY LOADING ---
const TechArsenal = dynamic(() => import("@/components/sections/TechArsenal"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const CircuitTimeline = dynamic(() => import("@/components/sections/CircuitTimeline"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Certifications = dynamic(() => import("@/components/sections/Certifications"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const MobileApp = dynamic(() => import("@/components/mobile/MobileApp"), {
  loading: () => <div className="h-screen bg-black" />,
  ssr: false
});

const MobileWelcome = dynamic(() => import("@/components/mobile/MobileWelcome"), {
  loading: () => <div className="h-screen bg-black" />,
  ssr: false
});

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
    </div>
  );
}

// --- PARTÍCULAS MÍNIMAS (Solo 4 para Windows) ---
const FloatingParticles = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-500 rounded-full animate-pulse"
          style={{
            left: `${25 * i + 12.5}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '3s'
          }}
        />
      ))}
    </div>
  );
});
FloatingParticles.displayName = 'FloatingParticles';

// --- TARJETA SIMPLE SIN ANIMACIONES COMPLEJAS ---
const SimpleCard = memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 transition-colors ${className}`}>
      {children}
    </div>
  );
});
SimpleCard.displayName = 'SimpleCard';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
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

  return (
    <div className="relative bg-zinc-950 min-h-screen text-zinc-200 overflow-x-hidden selection:bg-emerald-500/30">
      
      {/* EFECTOS MÍNIMOS */}
      <FloatingParticles />
      
      {/* GRID ESTÁTICO (Sin animación) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <CyberHeader />
      <HeroQuantum />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* --- INTRODUCCIÓN --- */}
        <Section id="about" className="pt-20 md:pt-32 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 md:w-20 md:h-20 border-l-2 border-t-2 border-emerald-500/20" />
              <span className="text-xs md:text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4 block">
                // System Status: Ready
              </span>

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
              <SimpleCard>
                <div className="p-8">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <FaTerminal className="text-4xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-emerald-500">//</span> 
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
              </SimpleCard>
            </ScrollReveal>
          </div>
        </Section>

        {/* --- ARSENAL TECNOLÓGICO --- */}
        <Section id="stack">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="h-2 w-2 bg-indigo-500 rounded-full inline-block" />
            <ScrollReveal mode="cyber-glitch">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Arsenal Tecnológico
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal mode="pop" delay={0.2}>
            <TechArsenal />
          </ScrollReveal>
        </Section>

        {/* --- PROYECTOS --- */}
        <Section id="projects">
          <div className="flex flex-col items-center mb-12 md:mb-16 text-center px-2">
            <span className="font-mono text-emerald-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 block">
              // Selected Works
            </span>
            
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
            <span className="font-mono text-yellow-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 block">
              // VALIDATION_TOKENS
            </span>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-yellow-400 rounded-full inline-block" />
              
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
            <span className="h-2 w-2 bg-emerald-500 rounded-full inline-block" />
            
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
              
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative z-10 p-6 md:p-16">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-2">
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-zinc-400 mb-6 font-light text-sm md:text-lg">
                      ¿Tienes una vacante o un proyecto en mente? Despliega tu mensaje. 
                      Tiempo de respuesta estimado: <span className="text-emerald-400 font-mono">&lt;24h</span>.
                    </p>
                    
                    <SimpleCard className="w-full">
                      <a href="mailto:josemajimenezrodriguez8@gmail.com" className="block w-full p-6 group">
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                    </SimpleCard>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <SimpleCard className="sm:col-span-2">
                        <a href="tel:+34722625288" className="block w-full p-4 flex flex-row items-center justify-between gap-3 group">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                              <FaPhoneAlt size={18} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest">Llamada Directa</span>
                              <span className="font-bold text-white text-lg font-mono">+34 722 62 52 88</span>
                            </div>
                          </div>
                          <FaArrowRight className="text-emerald-700 group-hover:text-emerald-400 transition-colors" />
                        </a>
                      </SimpleCard>

                      <SimpleCard>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                          <FaLinkedin size={24} className="text-zinc-500 group-hover:text-[#0077b5] transition-colors" />
                          <span className="font-bold text-xs md:text-sm text-zinc-400 group-hover:text-white">LINKEDIN</span>
                        </a>
                      </SimpleCard>
                      
                      <SimpleCard>
                        <a href="https://github.com/Josemajr6/" target="_blank" rel="noopener noreferrer" className="block w-full h-full p-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 group">
                          <FaGithub size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                          <span className="font-bold text-xs md:text-sm text-zinc-400 group-hover:text-white">GITHUB</span>
                        </a>
                      </SimpleCard>
                    </div>
                  </div>

                  <div className="lg:col-span-1 h-full">
                    <SimpleCard className="h-full">
                      <div className="h-full flex flex-col group min-h-[250px]">
                        <div className="flex-grow p-6 flex flex-col items-center justify-center text-center">
                          <div className="text-emerald-600 text-3xl md:text-4xl mb-4">
                            <FaTerminal />
                          </div>
                          <div className="font-mono text-zinc-500 text-xs mb-1">PROFILE_STATUS</div>
                          <div className="text-white font-bold text-lg md:text-xl tracking-widest group-hover:text-emerald-400 transition-colors">
                            AVAILABLE
                          </div>
                        </div>
                        <a href="/cv-JoseManuel.pdf" download="CV-JoseManuel-Jimenez.pdf" className="bg-emerald-600 hover:bg-emerald-500 text-black p-4 md:p-6 text-center transition-colors cursor-pointer">
                          <div className="flex flex-col items-center gap-2">
                            <span className="font-black font-mono uppercase tracking-[0.2em] text-xs md:text-sm flex items-center gap-2">
                              <FaFileDownload /> DOWNLOAD CV
                            </span>
                          </div>
                        </a>
                      </div>
                    </SimpleCard>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Section>
      </div>

      <footer className="relative py-12 md:py-16 border-t border-emerald-900/30 bg-black overflow-hidden mt-10 md:mt-20">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="font-mono text-[10px] text-emerald-600 mb-4 tracking-[0.5em]">
            /// END_OF_TRANSMISSION ///
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-base md:text-xl font-bold text-zinc-300">
            <div className="flex items-center gap-2">
              <span>Desarrollado con</span>
              <FaHeart className="text-red-600" size={20} />
            </div>
            <div className="flex items-center gap-2">
              <span>por</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-black tracking-wide">
                José Manuel Jiménez
              </span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}