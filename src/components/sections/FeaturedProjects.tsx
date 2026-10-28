"use client";
import Link from "next/link";
import { projectsDataES } from "@/data/project";
import { projectsDataEN } from "@/data/project_en";
import { projectColor } from "@/data/projectColors";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ProjectCard from "../ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

// Mismo orden que en el CV: primero los proyectos más completos
const FEATURED_ORDER = ["nexus-app", "mr-rebujito", "aura-movies", "gran-zona-marciana"];

// Anchos alternos para que la rejilla no sea monótona
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function FeaturedProjects() {
  const { language, t } = useLanguage();
  const projectsData = language === "es" ? projectsDataES : projectsDataEN;

  const rank = (slug: string) => {
    const i = FEATURED_ORDER.indexOf(slug);
    return i === -1 ? FEATURED_ORDER.length : i;
  };
  const featured = projectsData
    .filter((p) => p.isFeatured)
    .sort((a, b) => rank(a.slug) - rank(b.slug))
    .slice(0, 4);
  const rest = projectsData.filter((p) => !featured.includes(p));

  return (
    <>
      <section id="work" aria-labelledby="work-title" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeading id="work-title" title={t.workTitle} intro={t.workIntro} />

          <ul className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            {featured.map((project, index) => (
              <li key={project.slug} className={SPANS[index % SPANS.length]}>
                <Reveal delay={(index % 2) * 0.08}>
                  <ProjectCard project={project} index={index} size="large" />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="more-title" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionHeading id="more-title" title={t.moreTitle} intro={t.moreIntro} />

          <ul className="border-t border-line">
            {rest.map((project, i) => (
              <li key={project.slug} className="border-b border-line">
                <Link
                  href={`/projects/${project.slug}`}
                  onClick={() => {
                    try {
                      sessionStorage.setItem("portfolioScrollPos", window.scrollY.toString());
                    } catch {}
                  }}
                  className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[4rem_1.2fr_1fr_auto] items-center gap-x-4 sm:gap-x-6 py-5 sm:py-6"
                >
                  <span aria-hidden="true" className="flex items-center gap-2 text-sm font-medium tabular-nums text-muted">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: projectColor(project.slug, i) }}
                    />
                    <span className="hidden sm:inline">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="block display-tight text-3xl sm:text-4xl font-bold text-cream transition-colors group-hover:text-[var(--hover)]"
                      style={{ ["--hover" as string]: projectColor(project.slug, i) }}
                    >
                      {project.title}
                    </span>
                    <span className="sm:hidden block mt-1 text-sm text-muted truncate">
                      {project.category} · {project.tech.slice(0, 3).join(", ")}
                    </span>
                  </span>
                  <span className="hidden sm:block text-muted">
                    {project.category} · {project.tech.slice(0, 3).join(", ")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid place-items-center w-10 h-10 rounded-full border border-line text-cream transition-all group-hover:bg-albero group-hover:text-ink group-hover:border-albero group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 text-lg font-bold text-albero link-underline"
          >
            {t.viewAllProjects} ({projectsData.length}) →
          </Link>
        </div>
      </section>
    </>
  );
}
