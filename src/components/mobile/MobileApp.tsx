"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaLayerGroup, FaUserAstronaut, FaPaperPlane, FaPhoneAlt, FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";
import MobileTechStack from "./MobileTechStack";
import MobileTimeline from "./MobileTimeline";
import MobileProjects from "./MobileProjects"; // <--- Importamos el nuevo
import Image from "next/image"; // Necesario para el Favicon

// TopBar Minimalista
const MobileTopBar = ({ title }: { title: string }) => (
  <div className="fixed top-0 left-0 w-full h-14 bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-5 z-40">
    <span className="text-sm font-bold text-white tracking-wider font-mono">{title}</span>
    <div className="flex items-center gap-2">
        <span className="text-[10px] text-emerald-500 animate-pulse">● ONLINE</span>
    </div>
  </div>
);

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const renderContent = () => {
    switch (activeTab) {
      
      // --- HOME ---
      case "home":
        return (
          <div className="pt-20 pb-32 px-5 space-y-10">
            {/* HERO PROFILE */}
            <div className="relative mt-4 bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-black text-white leading-none mb-2">
                            Jose<br/>Manuel.
                        </h1>
                        <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                            Full Stack Developer
                        </p>
                    </div>
                    {/* AQUI ESTÁ EL CAMBIO: FAVICON COMO AVATAR */}
                    <div className="relative w-16 h-16 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-500/10">
                        <Image 
                            src="/favicon.ico" 
                            alt="Logo" 
                            width={40} 
                            height={40} 
                            className="object-contain"
                        />
                    </div>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Transformo ideas en código de alto rendimiento. Especializado en ecosistemas móviles y arquitecturas backend robustas.
                </p>
                
                <div className="flex gap-3">
                    <button onClick={() => setActiveTab('projects')} className="flex-1 bg-white text-black font-bold py-3 rounded-xl text-xs uppercase tracking-wide shadow-lg active:scale-95 transition-transform">
                        Ver Proyectos
                    </button>
                    <a href="/cv-JoseManuel.pdf" className="flex-1 bg-zinc-950 text-emerald-400 border border-emerald-500/30 font-bold py-3 rounded-xl text-xs uppercase tracking-wide flex items-center justify-center gap-2 active:scale-95 transition-transform">
                        <FaFileDownload /> CV
                    </a>
                </div>
            </div>

            {/* TECH STACK COMPLETO */}
            <div>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-emerald-500 rounded-full"/> Arsenal Tecnológico
                </h2>
                <MobileTechStack />
            </div>
          </div>
        );

      // --- PROJECTS (NUEVO COMPONENTE) ---
      case "projects":
        return (
            <div className="pt-20 pb-32 px-5">
                 <h2 className="text-2xl font-black text-white mb-1">Archivo</h2>
                 <p className="text-zinc-500 text-xs mb-4">Todos los proyectos desplegados.</p>
                 <MobileProjects />
            </div>
        );

      // --- TRAYECTORIA ---
      case "about":
        return (
            <div className="pt-20 pb-32 px-5">
                <h2 className="text-2xl font-black text-white mb-6">Trayectoria</h2>
                <MobileTimeline />
            </div>
        );

      // --- CONTACTO ---
      case "contact":
        return (
            <div className="pt-0 min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
                 {/* Fondo Dinámico */}
                 <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black z-0" />
                 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="w-full max-w-sm bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-[2rem] shadow-2xl relative z-10">
                    <div className="flex flex-col items-center text-center">
                        
                        {/* FAVICON EN CONTACTO TAMBIÉN */}
                        <div className="w-24 h-24 bg-black rounded-3xl mb-6 border border-zinc-700 flex items-center justify-center shadow-2xl shadow-emerald-500/20 relative">
                             <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
                             <Image 
                                src="/favicon.ico" 
                                alt="Logo" 
                                width={50} 
                                height={50} 
                                className="object-contain relative z-10"
                            />
                        </div>

                        <h2 className="text-3xl font-black text-white mb-1">Jose Manuel</h2>
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                            <span className="text-zinc-400 text-xs font-mono tracking-widest uppercase">Available for Hire</span>
                        </div>

                        <div className="w-full space-y-3">
                            <a href="tel:+34722625288" className="flex items-center justify-between p-4 bg-emerald-500 text-black rounded-xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform">
                                <span className="font-bold text-sm pl-2">Llamar Ahora</span>
                                <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                                    <FaPhoneAlt size={14} />
                                </div>
                            </a>

                            <a href="mailto:josemajimenezrodriguez8@gmail.com" className="flex items-center justify-between p-4 bg-zinc-800 text-white border border-zinc-700 rounded-xl active:scale-95 transition-transform">
                                <span className="font-bold text-sm pl-2">Enviar Email</span>
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                    <FaEnvelope size={14} />
                                </div>
                            </a>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <a href="https://linkedin.com" className="p-4 bg-[#0077b5]/10 border border-[#0077b5]/30 rounded-xl flex flex-col items-center gap-2 text-[#0077b5] active:scale-95 transition-transform">
                                    <FaLinkedin size={20} />
                                    <span className="text-[10px] font-bold uppercase">LinkedIn</span>
                                </a>
                                <a href="https://github.com" className="p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center gap-2 text-white active:scale-95 transition-transform">
                                    <FaGithub size={20} />
                                    <span className="text-[10px] font-bold uppercase">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
      if (activeTab === 'home') return 'Dashboard';
      if (activeTab === 'projects') return 'Proyectos';
      if (activeTab === 'about') return 'Experiencia';
      return 'Contacto';
  }

  return (
    <div className="min-h-screen bg-black text-zinc-200 pb-safe font-sans relative">
      {activeTab !== 'contact' && <MobileTopBar title={getTitle()} />}
      
      <main className="min-h-screen" ref={scrollRef}>
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {renderContent()}
            </motion.div>
        </AnimatePresence>
      </main>

      {/* DOCK INFERIOR (ESTILO iOS GLASSSMORPHISM) */}
      <nav className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-2xl border-t border-white/5 pb-safe z-50">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
            <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={FaHome} label="Inicio" />
            <NavButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} icon={FaLayerGroup} label="Proyectos" />
            <NavButton active={activeTab === 'about'} onClick={() => setActiveTab('about')} icon={FaUserAstronaut} label="Bio" />
            <NavButton active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} icon={FaPaperPlane} label="Contacto" />
        </div>
      </nav>
    </div>
  );
}

const NavButton = ({ active, onClick, icon: Icon, label }: any) => (
    <button 
        onClick={onClick} 
        className={`flex flex-col items-center justify-center w-14 h-full gap-1 transition-all duration-300 ${active ? 'text-emerald-400' : 'text-zinc-600 hover:text-zinc-400'}`}
    >
        <motion.div whileTap={{ scale: 0.8 }}>
            <Icon size={22} className={active ? "drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" : ""} />
        </motion.div>
        <span className="text-[9px] font-medium">{label}</span>
    </button>
);