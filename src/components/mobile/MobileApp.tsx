"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, 
  FaLayerGroup, 
  FaUserAstronaut, 
  FaCommentDots, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaFileDownload,
  FaChevronRight,
  FaBriefcase,
  FaCertificate
} from "react-icons/fa";
import MobileTechStack from "./MobileTechStack";
import MobileTimeline from "./MobileTimeline";
import MobileProjects from "./MobileProjects"; 
import MobileCertifications from "./MobileCertifications";
import Image from "next/image"; 

const MobileTopBar = ({ title }: { title: string }) => (
  <div className="fixed top-0 left-0 w-full h-14 bg-black/90 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-5 z-40">
    <span className="text-sm font-bold text-white tracking-wider font-mono uppercase">// {title}</span>
    <div className="flex items-center gap-2">
        <span className="text-[10px] text-emerald-500 animate-pulse">● ONLINE</span>
    </div>
  </div>
);

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("home");
  
  // Nuevo estado para la sub-navegación de BIO
  const [bioTab, setBioTab] = useState<'experience' | 'certs'>('experience');

  const scrollRef = useRef<HTMLDivElement>(null);

  const renderContent = () => {
    switch (activeTab) {
      
      // --- HOME ---
      case "home":
        return (
          <div className="pt-20 pb-32 px-5 space-y-10">
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

            <div>
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-emerald-500 rounded-full"/> Arsenal Tecnológico
                </h2>
                <MobileTechStack />
            </div>
          </div>
        );

      // --- PROJECTS ---
      case "projects":
        return (
            <div className="pt-20 pb-32 px-5">
                 <h2 className="text-2xl font-black text-white mb-1">Archivo</h2>
                 <p className="text-zinc-500 text-xs mb-4">Todos los proyectos desplegados.</p>
                 <MobileProjects />
            </div>
        );

      // --- BIO (CON TOGGLE NUEVO) ---
      case "about":
        return (
            <div className="pt-20 pb-32 px-5">
                
                {/* --- TOGGLE BUTTONS (ENCIMA DEL TÍTULO) --- */}
                <div className="flex p-1 bg-zinc-900/80 rounded-xl border border-zinc-800 mb-6 relative">
                    {/* Fondo animado del toggle (opcional, simplificado aquí con condicionales de clase) */}
                    <button 
                        onClick={() => setBioTab('experience')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                            bioTab === 'experience' 
                            ? 'bg-zinc-800 text-white shadow-lg' 
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                        <FaBriefcase /> Experiencia
                    </button>
                    <button 
                        onClick={() => setBioTab('certs')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                            bioTab === 'certs' 
                            ? 'bg-zinc-800 text-white shadow-lg' 
                            : 'text-zinc-500 hover:text-zinc-300'
                        }`}
                    >
                        <FaCertificate /> Certificados
                    </button>
                </div>

                {/* TÍTULO Y CONTENIDO DINÁMICO */}
                <AnimatePresence mode="wait">
                    {bioTab === 'experience' ? (
                        <motion.div 
                            key="timeline"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                             <h2 className="text-2xl font-black text-white mb-6">Trayectoria</h2>
                             <MobileTimeline />
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="certs"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                             <h2 className="text-2xl font-black text-white mb-6">Certificaciones</h2>
                             <MobileCertifications />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );

      // --- CONTACTO ---
      case "contact":
        return (
            <div className="pt-20 pb-32 px-5 min-h-[80vh] flex flex-col">
                <div className="mb-8 text-center">
                    <div className="inline-block p-4 rounded-full bg-zinc-900 border border-zinc-800 mb-4 shadow-lg shadow-emerald-500/10">
                        <Image 
                            src="/favicon.ico" 
                            alt="Logo" 
                            width={40} 
                            height={40} 
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-3xl font-black text-white">Hablemos</h2>
                    <p className="text-zinc-500 text-sm mt-2">¿Tienes un proyecto en mente?</p>
                </div>

                <div className="space-y-4">
                    <a href="tel:+34722625288" className="group w-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 transition-all p-4 rounded-2xl flex items-center justify-between shadow-xl shadow-emerald-500/20">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center text-black">
                                <FaPhoneAlt size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-[10px] font-bold uppercase text-emerald-900 tracking-wider">Teléfono</span>
                                <span className="block text-xl font-black text-black leading-none mt-0.5">+34 722 62 52 88</span>
                            </div>
                        </div>
                        <FaChevronRight className="text-black/50 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a href="mailto:josemajimenezrodriguez8@gmail.com" className="group w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 active:scale-95 transition-all p-4 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-white">
                                <FaEnvelope size={20} />
                            </div>
                            <div className="text-left overflow-hidden">
                                <span className="block text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Email</span>
                                <span className="block text-sm font-bold text-white mt-1 truncate w-48 sm:w-auto">josemajimenezrodriguez8@gmail.com</span>
                            </div>
                        </div>
                    </a>

                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://linkedin.com" target="_blank" className="bg-[#0077b5] hover:bg-[#006fa3] active:scale-95 transition-all p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-white h-28 shadow-lg shadow-blue-500/20">
                            <FaLinkedin size={28} />
                            <span className="font-bold text-sm">LinkedIn</span>
                        </a>

                        <a href="https://github.com/Josemajr6/" target="_blank" className="bg-zinc-950 border border-zinc-800 hover:border-zinc-600 active:scale-95 transition-all p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-white h-28">
                            <FaGithub size={28} />
                            <span className="font-bold text-sm">GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
      if (activeTab === 'home') return 'Inicio';
      if (activeTab === 'projects') return 'Proyectos';
      if (activeTab === 'about') return 'Trayectoria';
      return 'Contacto';
  }

  return (
    <div className="min-h-screen bg-black text-zinc-200 pb-safe font-sans relative selection:bg-emerald-500/30">
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

      <nav className="fixed bottom-0 left-0 w-full bg-black/85 backdrop-blur-xl border-t border-white/5 pb-safe z-50">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
            <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={FaHome} label="Inicio" />
            <NavButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} icon={FaLayerGroup} label="Proyectos" />
            <NavButton active={activeTab === 'about'} onClick={() => setActiveTab('about')} icon={FaUserAstronaut} label="Bio" />
            <NavButton active={activeTab === 'contact'} onClick={() => setActiveTab('contact')} icon={FaCommentDots} label="Hablemos" />
        </div>
      </nav>
    </div>
  );
}

const NavButton = ({ active, onClick, icon: Icon, label }: any) => (
    <button 
        onClick={onClick} 
        className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-all duration-300 active:scale-90 ${active ? 'text-emerald-400' : 'text-zinc-600 hover:text-zinc-400'}`}
    >
        <div className={`relative ${active ? 'drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]' : ''}`}>
             <Icon size={20} />
             {active && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />}
        </div>
        <span className={`text-[9px] font-medium mt-1 ${active ? 'text-white' : ''}`}>{label}</span>
    </button>
);