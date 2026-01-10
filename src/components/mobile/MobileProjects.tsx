"use client";
import { useState } from "react";
import { projectsData, Project } from "@/data/project"; 
import { FaGithub, FaExternalLinkAlt, FaFilter, FaFolderOpen, FaArrowLeft, FaStar, FaCheckCircle } from "react-icons/fa";
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "mobile") return p.category.includes("Android") || p.category.includes("Flutter") || p.category.includes("Swift") || p.category.includes("iOS");
    if (activeFilter === "web") return p.category.includes("Full Stack") || p.category.includes("Angular") || p.category.includes("React");
    if (activeFilter === "backend") return p.category.includes("Backend") || p.category.includes("Spring");
    return true;
  });

  return (
    <div className="w-full">
      {/* VISTA DE DETALLE */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-50 overflow-y-auto pb-safe"
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-zinc-800 p-5 flex items-center gap-4 z-10">
              <button onClick={() => setSelectedProject(null)} className="text-emerald-500 active:scale-95 transition-transform">
                <FaArrowLeft size={20} />
              </button>
              <h2 className="text-lg font-bold text-white">{selectedProject.title}</h2>
            </div>

            {/* Content */}
            <div className="p-5 space-y-6">
              {/* Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <Image 
                  src={selectedProject.mainImage}
                  alt={selectedProject.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold">
                  {selectedProject.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selectedProject.status === 'Completed' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {selectedProject.status}
                </span>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Descripción</h3>
                <p className="text-zinc-300 leading-relaxed">
                  {selectedProject.overview?.description || selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              {selectedProject.overview?.highlights && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Características Principales</h3>
                  <div className="space-y-2">
                    {selectedProject.overview.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" size={14}/>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-zinc-900 rounded-lg text-xs text-zinc-400 font-mono border border-zinc-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 text-white border border-zinc-800 rounded-xl font-bold text-sm active:scale-95 transition-transform"
                  >
                    <FaGithub size={18}/>
                    GitHub
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 text-black rounded-xl font-bold text-sm active:scale-95 transition-transform"
                  >
                    <FaExternalLinkAlt size={16}/>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FILTROS */}
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

      {/* LISTA DE PROYECTOS */}
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
                    <ProjectCardMobile 
                      key={project.slug} 
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
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

function ProjectCardMobile({ project, onClick }: { project: Project, onClick: () => void }) {
    const isAuranotch = project.slug === "aura-notch";

    return (
        <div 
          onClick={onClick}
          className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl group active:scale-[0.98] transition-transform cursor-pointer"
        >
            {/* Imagen Header */}
            <div className="relative h-44 w-full bg-zinc-950 overflow-hidden">
                <img 
                    src={project.mainImage} 
                    alt={project.title} 
                    className={`w-full h-full transition-all duration-500 ${
                        isAuranotch 
                        ? "object-contain p-6 bg-black/40" 
                        : "object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105"
                    }`}
                />
                
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
                            <FaGithub size={16} className="text-zinc-500"/>
                        )}
                        {project.demoUrl && (
                            <FaExternalLinkAlt size={14} className="text-zinc-500"/>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="px-2 py-1 bg-black rounded text-[9px] text-zinc-500 font-mono border border-zinc-800">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-[9px] text-zinc-600 font-mono">
                        +{project.tech.length - 4}
                      </span>
                    )}
                </div>
            </div>
        </div>
    );
}