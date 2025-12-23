"use client";
import { useState } from "react";

import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/project";

const categories = ["Todos", "Spring Boot", "Android", "Flutter", "Backend"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects = projectsData.filter(
    (p) => filter === "Todos" || p.category === filter
  );

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-zinc-100 text-zinc-900"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}