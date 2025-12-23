"use client";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article 
      layout 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative flex flex-col justify-between bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
            {project.category}
          </span>
          <div className="flex gap-2">
             {project.githubUrl && (
               <a href={project.githubUrl} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                 <Github size={18} />
               </a>
             )}
          </div>
        </div>
        
        <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
            </h3>
        </Link>
        
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-950">
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}