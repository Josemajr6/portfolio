import HeroQuantum from "@/components/sections/HeroQuantum";
import TechArsenal from "@/components/sections/TechArsenal";
import CircuitTimeline from "@/components/sections/CircuitTimeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CyberHeader from "@/components/layout/CyberHeader";
import Section from "@/components/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaSatelliteDish, FaHeart, FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-200 overflow-hidden selection:bg-emerald-500/30 flex flex-col">
      
      <CyberHeader />
      {/* La portada ahora tiene su propia animación de carga interna */}
      <HeroQuantum />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex-grow">
        
        {/* --- INTRODUCCIÓN --- */}
        <Section id="about" className="pt-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <ScrollReveal mode="slide-right">
                        <div className="absolute -left-4 -top-4 w-20 h-20 border-l-2 border-t-2 border-emerald-500/20" />
                        <span className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-4 block animate-pulse">
                            // System Status: Ready
                        </span>
                    </ScrollReveal>

                    {/* NUEVO EFECTO CYBER-GLITCH */}
                    <ScrollReveal mode="cyber-glitch" className="mb-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
                            Desarrollo <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Inteligente.</span>
                        </h2>
                    </ScrollReveal>
                </div>

                <ScrollReveal mode="pop" delay={0.2}>
                    <div className="prose prose-lg prose-invert text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-8 bg-zinc-900/20 py-4 pr-4 rounded-r-xl">
                        <p className="text-lg font-light">
                        Estudiante avanzado de <strong>DAM</strong> con experiencia real en sistemas. 
                        Combino la lógica del <strong className="text-white">Backend</strong> con la agilidad del desarrollo <strong className="text-white">Móvil</strong>.
                        Busco un entorno donde pueda aportar código de calidad desde el primer día.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </Section>

        {/* --- ARSENAL TECNOLÓGICO --- */}
        <Section id="stack">
          <div className="flex items-center gap-3 mb-12">
              <ScrollReveal mode="pop">
                 <span className="h-2 w-2 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] inline-block"></span>
              </ScrollReveal>
              
              {/* NUEVO EFECTO CYBER-GLITCH */}
              <ScrollReveal mode="cyber-glitch">
                  <h2 className="text-3xl font-bold text-white">
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
            <div className="flex flex-col items-center mb-16 text-center">
                <ScrollReveal mode="slide-right">
                    <span className="font-mono text-emerald-500 text-xs tracking-[0.2em] uppercase mb-4 animate-pulse block">
                    // Selected Works
                    </span>
                </ScrollReveal>
                
                {/* NUEVO EFECTO CYBER-GLITCH */}
                <ScrollReveal mode="cyber-glitch">
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                    Misiones <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Destacadas</span>
                    </h2>
                </ScrollReveal>
            </div>

            <ScrollReveal mode="pop" delay={0.2}>
                <FeaturedProjects /> 
            </ScrollReveal>
        </Section>

        {/* --- TRAYECTORIA --- */}
        <Section id="experience">
          <div className="flex items-center gap-3 mb-12">
              <ScrollReveal mode="pop">
                 <span className="h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] inline-block"></span>
              </ScrollReveal>
              
              
              {/* NUEVO EFECTO CYBER-GLITCH */}
              <ScrollReveal mode="cyber-glitch">
                  <h2 className="text-3xl font-bold text-white">
                    Log de Ejecución
                  </h2>
              </ScrollReveal>
          </div>
          
          <div className="relative">
              <CircuitTimeline />
          </div>
        </Section>

        {/* --- CONTACTO --- */}
        <Section id="contact" className="pb-20 pt-20">
          <ScrollReveal mode="pop" delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 shadow-[0_0_10px_#10b981]" />

                <div className="relative z-10 p-8 md:p-16">
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs mb-2 animate-pulse">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                            SECURE_CHANNEL_OPEN
                        </div>
                        
                        {/* NUEVO EFECTO CYBER-GLITCH */}
                        <ScrollReveal mode="cyber-glitch">
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                INICIAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">UPLINK</span>
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-zinc-500 font-mono text-xs">LATENCY: 12ms</div>
                        <div className="text-zinc-500 font-mono text-xs">ENCRYPTION: AES-256</div>
                    </div>
                </div>

                {/* ... (El resto del contenido de contacto sigue igual, dentro del ScrollReveal "pop") ... */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        <p className="text-zinc-400 mb-6 font-light text-lg">
                            ¿Tienes una vacante o una idea millonaria? Despliega tu mensaje. 
                            Tiempo de respuesta estimado: <span className="text-emerald-400 font-mono">&lt;24h</span>.
                        </p>
                        <a href="mailto:josemajimenezrodriguez8@gmail.com" className="group relative block w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center justify-between p-6 bg-zinc-900 border border-zinc-700 hover:border-emerald-500 rounded-xl transition-all group-hover:-translate-y-1">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 group-hover:border-emerald-500/50 transition-colors">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Destinatario</span>
                                        <span className="text-lg md:text-xl font-bold text-white font-mono tracking-tight group-hover:text-emerald-400 transition-colors">josemajimenezrodriguez8@gmail.com</span>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-zinc-500 text-xs font-mono group-hover:text-emerald-500 transition-colors">
                                    <span>SEND_MAIL</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </a>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="https://linkedin.com" target="_blank" className="group relative p-4 bg-zinc-900 border border-zinc-800 hover:border-[#0077b5] rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-[#0077b5]/10">
                                <FaLinkedin size={24} className="text-zinc-500 group-hover:text-[#0077b5] transition-colors" />
                                <span className="font-bold text-zinc-400 group-hover:text-white">LINKEDIN</span>
                            </a>
                            <a href="https://github.com" target="_blank" className="group relative p-4 bg-zinc-900 border border-zinc-800 hover:border-white rounded-xl flex items-center justify-center gap-3 transition-all hover:bg-white/5">
                                <FaGithub size={24} className="text-zinc-500 group-hover:text-white transition-colors" />
                                <span className="font-bold text-zinc-400 group-hover:text-white">GITHUB</span>
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="h-full relative rounded-2xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-1 flex flex-col group hover:border-emerald-500/50 transition-colors">
                            <div className="bg-zinc-950 rounded-t-xl p-6 border-b border-zinc-800 flex flex-col items-center justify-center flex-grow relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
                                <FaSatelliteDish className="text-emerald-600 text-4xl mb-4 group-hover:animate-bounce" />
                                <div className="font-mono text-zinc-500 text-xs mb-1">PROFILE_STATUS</div>
                                <div className="text-white font-bold text-xl tracking-widest">AVAILABLE</div>
                            </div>
                            <a href="/cv-JoseManuel.pdf" download="CV-JoseManuel-Jimenez.pdf" className="relative bg-emerald-600 hover:bg-emerald-500 text-black p-6 text-center transition-colors cursor-pointer overflow-hidden rounded-b-xl">
                                <div className="flex flex-col items-center gap-2 relative z-10">
                                    <FaFileDownload size={24} />
                                    <span className="font-black font-mono uppercase tracking-[0.2em] text-sm">EXTRACT_DATA.PDF</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          </ScrollReveal>
        </Section>
      </div>

      {/* FOOTER (Sin cambios, ya estaba bien) */}
      <footer className="relative py-16 border-t border-emerald-900/30 bg-black overflow-hidden mt-20">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] bg-emerald-500/10 blur-[80px] pointer-events-none" />
         <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="font-mono text-[10px] text-emerald-600 mb-4 tracking-[0.5em] animate-pulse">
               /// END_OF_TRANSMISSION ///
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-lg md:text-xl font-bold text-zinc-300">
               <span>Desarrollado con</span>
               <div className="relative">
                  <FaHeart className="text-red-600 animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" size={24} />
               </div>
               <span>por</span>
               <span className="relative group cursor-default">
                  <span className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded blur opacity-20 group-hover:opacity-50 transition duration-500" />
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-black tracking-wide drop-shadow-sm">
                     JOSEMAJR_6
                  </span>
                    
               </span>
            </div>
         </div>
      </footer>

    </main>
  );
}