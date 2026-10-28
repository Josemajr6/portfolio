"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Project } from "@/data/project";
import { projectColor } from "@/data/projectColors";

// Capturas que se ven mejor sin recortar
const projectsWithContain = ["nexus-app", "manyworker-api", "aura-notch", "moneyflow"];

interface ProjectCardProps {
  project: Project;
  index: number;
  size?: "large" | "small";
}

export default function ProjectCard({ project, index, size = "small" }: ProjectCardProps) {
  const { t } = useLanguage();
  const large = size === "large";
  const techs = project.tech.filter((tech) => tech.toLowerCase() !== "jwt").slice(0, 3);
  const contain = projectsWithContain.includes(project.slug);

  const statusText =
    project.status === "Completed"
      ? null
      : project.status === "In Progress"
        ? t.statusInProgress
        : t.statusOnHold;

  const saveScroll = () => {
    try {
      sessionStorage.setItem("portfolioScrollPos", window.scrollY.toString());
    } catch {}
  };

  return (
    <article
      style={{ backgroundColor: projectColor(project.slug, index) }}
      className="group relative isolate flex flex-col h-full overflow-hidden rounded-[2rem] text-ink"
    >
      {/* Sin "relative" aquí: el enlace estirado (::after) debe cubrir toda la tarjeta, captura incluida */}
      <div className="p-6 pr-20 sm:p-8 sm:pr-20">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/70">
          {project.category} · {techs.join(", ")}
        </p>
        <h3 className={`mt-2 display-tight font-bold ${large ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"}`}>
          <Link
            href={`/projects/${project.slug}`}
            onClick={saveScroll}
            className="after:absolute after:inset-0 after:z-20 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className={`mt-3 text-ink/80 leading-snug line-clamp-2 ${large ? "max-w-md text-base sm:text-lg" : "max-w-sm"}`}>
          {project.description}
        </p>
        {statusText && (
          <p className="mt-3 inline-block rounded-full bg-ink px-3 py-1 text-xs font-bold text-cream">{statusText}</p>
        )}
      </div>

      {/* La captura "se sale" por abajo a la derecha; el hueco es 16:9 como las imágenes, así no se recorta */}
      <div className={`mt-auto pt-2 ${large ? "pl-10 sm:pl-20" : "pl-8 sm:pl-12"}`}>
        <div className="relative aspect-video overflow-hidden rounded-tl-2xl bg-ink shadow-[0_-10px_40px_-10px_rgba(19,33,63,0.45)]">
          <Image
            src={project.mainImage}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 50vw"
            className={`origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
              contain ? "object-contain p-3" : "object-cover"
            }`}
          />
        </div>
      </div>

      {/* Indicador visible al pasar el ratón o al enfocar con teclado */}
      <span
        aria-hidden="true"
        className="glass-light pointer-events-none absolute top-6 right-6 z-10 grid place-items-center w-11 h-11 rounded-full text-ink text-lg font-bold transition-transform duration-300 group-hover:rotate-45 group-focus-within:rotate-45"
      >
        ↗
      </span>

      <div className="absolute inset-0 rounded-[2rem] ring-0 ring-ink group-focus-within:ring-4 pointer-events-none z-30" />
    </article>
  );
}
