"use client";

import { projectsData } from "@/data/project";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BackButton from "@/components/ui/BackButton";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCloudSun, FaDesktop, FaGlobeAmericas, FaTerminal, FaDatabase, FaLayerGroup, FaServer } from "react-icons/fa";
import { 
  SiSpring, SiAngular, SiPostgresql, SiFlutter, SiDart, 
  SiAndroid, SiTypescript, SiDocker, SiMysql, SiSwagger,
  SiSwift, SiApple, SiThemoviedatabase
} from "react-icons/si";
import { use } from "react"; 

// --- HELPER DE ICONOS ---
const getTechIcon = (techName: string) => {
  const normalize = techName.toLowerCase();
  if (normalize.includes("spring")) return <SiSpring className="text-emerald-500" />;
  if (normalize.includes("angular")) return <SiAngular className="text-red-600" />;
  if (normalize.includes("postgres")) return <SiPostgresql className="text-blue-400" />;
  if (normalize.includes("mysql")) return <SiMysql className="text-blue-500" />;
  if (normalize.includes("react")) return <SiTypescript className="text-blue-400" />;
  if (normalize.includes("type")) return <SiTypescript className="text-blue-600" />;
  if (normalize.includes("java")) return <FaCode className="text-orange-500" />;
  if (normalize.includes("swagger")) return <SiSwagger className="text-green-600" />;
  if (normalize.includes("docker")) return <SiDocker className="text-blue-500" />;
  if (normalize.includes("flutter")) return <SiFlutter className="text-cyan-400" />;
  if (normalize.includes("dart")) return <SiDart className="text-blue-500" />;
  if (normalize.includes("android")) return <SiAndroid className="text-green-500" />;
  if (normalize.includes("swift")) return <SiSwift className="text-orange-500" />;
  if (normalize.includes("ios")) return <SiApple className="text-gray-100" />;
  if (normalize.includes("macos")) return <FaDesktop className="text-gray-300" />;
  if (normalize.includes("tmdb")) return <SiThemoviedatabase className="text-blue-400" />;
  if (normalize.includes("weather")) return <FaCloudSun className="text-yellow-400" />;
  if (normalize.includes("rest countries")) return <FaGlobeAmericas className="text-green-400" />;
  return <FaCode className="text-zinc-500" />; 
};

// --- COMPONENTE PRINCIPAL ---
export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isCompleted = project.status === "Completed";
  const isMacOS = project.tech.some(t => t.toLowerCase().includes("macos"));
  const displayCategory = isMacOS ? "macOS" : project.category;

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* --- BOTÓN ATRÁS --- */}
      <BackButton />

      {/* --- FONDO CIBERNÉTICO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* --- HEADER TERMINAL --- */}
          <motion.div variants={itemVariants} className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="space-y-2 font-mono">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
                      <span className="text-emerald-500 font-bold">root</span>
                      <span>/</span>
                      <span>projects</span>
                      <span>/</span>
                      <span className="text-zinc-300 font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">{slug}</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-emerald-500 animate-pulse text-xs uppercase tracking-widest">
                          <FaDatabase />
                          <span>Accessing_Secure_File...</span>
                      </div>
                  </div>
              </div>
          </motion.div>


          {/* --- HERO SECTION --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Columna Izquierda: Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-3">
                      <span className={`px-4 py-1.5 rounded-sm border text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.5)]
                          ${isMacOS 
                              ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300' 
                              : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                          }`}>
                          {isMacOS ? <FaDesktop size={12}/> : <FaTerminal size={12}/>}
                          {displayCategory}
                      </span>

                      <span className={`px-4 py-1.5 rounded-sm border text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.5)]
                          ${isCompleted 
                              ? 'border-green-500/40 bg-green-500/10 text-green-300' 
                              : 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                          }`}>
                          <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
                          {project.status}
                      </span>
                  </div>

                  {/* Título */}
                  <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {project.title}
                      <span className="text-emerald-500">.</span>
                  </h1>

                  {/* Descripción */}
                  <div className="relative bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-xl backdrop-blur-sm group hover:border-emerald-500/30 transition-colors duration-500">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent opacity-50" />
                      <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                          {project.longDescription || project.description}
                      </p>
                  </div>

                  {/* Botones */}
                  <div className="flex flex-wrap gap-4 pt-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" className="relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-zinc-950 border border-zinc-700 text-white rounded transition-all group hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                           <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                           <FaGithub size={22} className="relative z-10" />
                           <div className="flex flex-col text-left leading-none relative z-10">
                              <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-emerald-400">Repository</span>
                              <span className="font-bold">View Source</span>
                           </div>
                        </a>
                      )}
                      {project.demoUrl && (
                         <a href={project.demoUrl} target="_blank" className="relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-emerald-600 text-black rounded transition-all hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] group">
                           <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                           <FaExternalLinkAlt size={20} className="relative z-10" />
                           <div className="flex flex-col text-left leading-none relative z-10">
                              <span className="text-[10px] font-mono text-emerald-900 uppercase font-bold">Deploy</span>
                              <span className="font-bold">Live Demo</span>
                           </div>
                         </a>
                      )}
                  </div>
              </motion.div>

              {/* Columna Derecha: Imagen HUD (FULL COVER) */}
              <motion.div variants={itemVariants} className="relative group w-full">
                 <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
                     
                     {/* IMAGEN A PANTALLA COMPLETA */}
                     <Image 
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        /* object-cover: llena todo el hueco
                           object-top: si se corta, prioriza la parte de arriba (bueno para webs/apps) */
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                     />

                     {/* Efectos de Pantalla */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-20 mix-blend-overlay opacity-50" />
                     
                     {/* Esquinas HUD */}
                     <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-500 z-30" />
                     <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-500 z-30" />
                 </div>
              </motion.div>
          </div>

          {/* --- TECH STACK --- */}
          <motion.div variants={itemVariants}>
             <div className="flex items-center gap-4 mb-8">
                 <FaLayerGroup className="text-emerald-500 text-xl" />
                 <h2 className="text-2xl font-bold text-white uppercase tracking-wider">System Architecture</h2>
                 <div className="h-[1px] flex-grow bg-zinc-800" />
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {project.tech.map((t) => (
                   <div key={t} className="group relative bg-zinc-900/40 border border-zinc-800 p-4 rounded hover:bg-zinc-900 hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-3">
                      <div className="text-3xl text-zinc-500 group-hover:text-white transition-colors">
                        {getTechIcon(t)}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-emerald-400">
                        {t}
                      </span>
                   </div>
                ))}
             </div>
          </motion.div>

          {/* --- GALERÍA FULL COVER --- */}
          {project.galleryImages && project.galleryImages.length > 0 && (
             <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-8">
                    <FaServer className="text-emerald-500 text-xl" />
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Evidence Log</h2>
                    <div className="h-[1px] flex-grow bg-zinc-800" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   {project.galleryImages.map((img, idx) => (
                      <div key={idx} className="group relative rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video">
                         
                         {/* Header de ventana falso */}
                         <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between px-3 z-30">
                            <span className="text-[10px] font-mono text-zinc-500">IMG_00{idx + 1}.PNG</span>
                            <div className="flex gap-1.5">
                               <div className="w-2 h-2 rounded-full bg-red-500/50" />
                               <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                               <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                         </div>
                         
                         {/* IMAGEN GALERÍA (COVER) */}
                         <div className="relative w-full h-full pt-8">
                            <Image 
                                src={img}
                                alt={`Screenshot ${idx + 1}`}
                                fill
                                /* Forzamos que llene todo el cuadro */
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                         </div>

                         {/* Overlay de brillo */}
                         <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 mix-blend-overlay" />
                      </div>
                   ))}
                </div>
             </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}