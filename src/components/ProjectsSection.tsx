"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal } from "react-icons/fa";
import { projectsData } from "@/data/project";

// Categorías del filtro
const categories = ["Todos", "Full Stack", "Backend", "Mobile", "Android", "Swift"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Todos");

  // Lógica de filtrado PRECISA
  const filteredProjects = projectsData.filter((p) => {
    if (filter === "Todos") return true;

    // Filtro MOBILE:
    // Incluye: Android, Flutter, Swift/iOS
    // EXCLUYE: Proyectos de macOS (Aura Notes, Aura Notch)
    if (filter === "Mobile") {
      const isMobileTech = ["Android", "Flutter", "Swift/iOS"].includes(p.category);
      const isMacOS = p.tech.includes("macOS");
      return isMobileTech && !isMacOS;
    }
    
    // Filtro ANDROID:
    // Incluye nativo Android Y también Flutter (MoneyFlow)
    if (filter === "Android") {
      return p.category === "Android" || p.category === "Flutter";
    }

    // Filtro SWIFT:
    // Muestra TODO lo de Apple (iOS y macOS)
    if (filter === "Swift") {
      return p.category === "Swift/iOS" || p.tech.includes("Swift");
    }

    // Resto de categorías (Backend, Full Stack...)
    return p.category === filter;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      
      {/* --- BARRA DE COMANDOS (Filtros) --- */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg backdrop-blur-sm">
        <div className="flex items-center gap-3 text-emerald-500 font-mono text-sm">
          <FaTerminal />
          <span className="animate-pulse">root@portfolio:~/projects $ filter --type={filter.toLowerCase()}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all ${
                filter === cat
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                  : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>
      </div>

      {/* --- GRID DE PROYECTOS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Mensaje si no hay proyectos */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-lg">
          <p className="font-mono text-zinc-500">
            &gt; No projects found in this directory...
          </p>
        </div>
      )}
    </div>
  );
}