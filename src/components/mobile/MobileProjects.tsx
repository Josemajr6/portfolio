"use client";
import { useState } from "react";
// CORRECCIÓN: Importamos 'projectsData' que es el nombre correcto del export
import { projectsData, Project } from "@/data/project"; 
import { FaGithub, FaExternalLinkAlt, FaFilter, FaFolderOpen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const filters = [
  { id: "all", label: "Todo" },
  { id: "mobile", label: "Mobile / iOS" },
  { id: "web", label: "Full Stack" },
  { id: "backend", label: "Backend / API" },
];

export default function MobileProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "mobile") return p.category.includes("Android") || p.category.includes("Flutter") || p.category.includes("Swift") || p.category.includes("iOS");
    if (activeFilter === "web") return p.category.includes("Full Stack") || p.category.includes("Angular") || p.category.includes("React");
    if (activeFilter === "backend") return p.category.includes("Backend") || p.category.includes("Spring");
    return true;
  });

  return (
    <div className="w-full">
      {/* --- BARRA DE FILTROS --- */}
      <div className="sticky top-14 z-30 bg-black/90 backdrop-blur-md pb-4 pt-2 -mx-5 px-5 border-b border-zinc-800/50 mb-6 flex items-center gap-3 overflow-x-auto scrollbar-hide">
        <FaFilter className="text-emerald-500 shrink-0" size={12} />
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
              activeFilter === f.id
                ? "bg-emerald-500 text-black border-emerald-500"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* --- LISTA DE PROYECTOS --- */}
      <div className="space-y-6 min-h-[50vh]">
        <AnimatePresence mode="wait">
           <motion.div 
             key={activeFilter}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.2 }}
             className="space-y-6"
           >
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCardMobile key={project.slug} project={project} />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
                    <FaFolderOpen size={40} className="mb-4 opacity-50"/>
                    <p>No hay proyectos en esta categoría.</p>
                </div>
            )}
           </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProjectCardMobile({ project }: { project: Project }) {
    // Detectamos si es Aura Notch por su slug
    const isAuranotch = project.slug === "aura-notch";

    return (
        <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group">
            {/* Imagen Header */}
            <div className="relative h-44 w-full bg-zinc-950 overflow-hidden">
                <img 
                    src={project.mainImage} 
                    alt={project.title} 
                    className={`w-full h-full transition-all duration-500 ${
                        isAuranotch 
                        ? "object-contain p-6 bg-black/40" // ARREGLO AQUÍ: Se ajusta al cuadro con padding y fondo oscuro
                        : "object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    }`}
                />
                
                {/* Overlay gradiente (menos intenso para Auranotch para que se vea el logo) */}
                <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent ${isAuranotch ? 'opacity-40' : 'opacity-90'}`} />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                     <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border backdrop-blur-md ${
                        project.status === 'Completed' 
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                     }`}>
                        {project.status === 'In Progress' ? 'In Progress' : 'Completed'}
                     </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-5 relative -mt-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-emerald-500 font-mono text-[10px] tracking-widest uppercase mb-1 block">
                        //{project.category}
                    </span>
                    <div className="flex gap-3">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                                <FaGithub size={18}/>
                            </a>
                        )}
                        {project.demoUrl && (
                             <a href={project.demoUrl} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                                <FaExternalLinkAlt size={16}/>
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-black rounded text-[9px] text-zinc-500 font-mono border border-zinc-800">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}