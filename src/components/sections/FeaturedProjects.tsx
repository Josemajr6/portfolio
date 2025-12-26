"use client";
import { projectsData } from "@/data/project"; // O "@/data/projects" revisa tu nombre de archivo
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import { FaArrowRight, FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  // Solo mostramos los primeros 4 proyectos destacados
  const featured = projectsData.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      
      {/* Grid Limitado */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {featured.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Botón "Load All" Estilo Terminal */}
      <div className="flex justify-center">
        <Link 
          href="/projects" 
          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          <span className="flex items-center gap-2 font-mono text-sm text-emerald-500 group-hover:text-emerald-400 uppercase tracking-widest">
            <FaTerminal size={12} className="animate-pulse" /> 
            cd /all-projects
          </span>
          <FaArrowRight className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}