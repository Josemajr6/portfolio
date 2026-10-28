"use client";
import { useState } from "react";

import ProjectCard from "./ProjectCard";
import { projectsDataES, Project } from "@/data/project";
import { projectsDataEN } from "@/data/project_en";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Categorías del filtro
const categories = ["all", "Full Stack", "Backend", "Mobile", "Android", "Swift"] as const;
type Filter = (typeof categories)[number];

const matchesFilter = (p: Project, filter: Filter) => {
  if (filter === "all") return true;

  // Mobile: Android, Flutter y Swift/iOS, excluyendo apps solo de macOS
  if (filter === "Mobile") {
    const isMobileTech = ["Android", "Flutter", "Swift/iOS"].includes(p.category);
    return isMobileTech && !p.tech.includes("macOS");
  }

  // Android: nativo y también Flutter
  if (filter === "Android") return p.category === "Android" || p.category === "Flutter";

  // Swift: todo lo de Apple (iOS y macOS)
  if (filter === "Swift") return p.category === "Swift/iOS" || p.tech.includes("Swift");

  return p.category === filter;
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const { language, t } = useLanguage();
  const projectsData = language === "es" ? projectsDataES : projectsDataEN;
  const filteredProjects = projectsData.filter((p) => matchesFilter(p, filter));

  return (
    <div className="w-full">
      <div role="group" aria-label={t.filterLabel} className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => {
          const isActive = filter === cat;
          const count = projectsData.filter((p) => matchesFilter(p, cat)).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={isActive}
              className={`h-10 px-4 rounded-full text-[15px] font-semibold transition-colors ${
                isActive
                  ? "bg-albero border border-albero text-ink"
                  : "glass text-cream hover:text-albero"
              }`}
            >
              {cat === "all" ? t.filterAll : cat} <span className="opacity-60 tabular-nums">{count}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mb-8 text-muted">
        {filteredProjects.length} {t.projectsCount}
      </p>

      {filteredProjects.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-20 text-center text-muted border-2 border-dashed border-line rounded-[2rem]">
          {t.noProjectsFound}
        </p>
      )}
    </div>
  );
}
