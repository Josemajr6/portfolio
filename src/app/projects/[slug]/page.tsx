"use client";

import { projectsDataES } from "@/data/project";
import { projectsDataEN } from "@/data/project_en";
import { projectColor } from "@/data/projectColors";
import { notFound } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { useState, use, useEffect, ReactNode } from "react";
import BackButton from "@/components/ui/BackButton";
import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Reveal from "@/components/ui/Reveal";
import { TechIcons } from "@/components/icons/TechIcons";

import { FaGithub, FaCode, FaDatabase, FaServer, FaRocket } from "react-icons/fa";
import {
  SiSpring, SiAngular, SiFlutter, SiDart,
  SiAndroid, SiTypescript, SiDocker, SiMysql, SiSwagger,
  SiSwift, SiApple, SiThemoviedatabase, SiMongodb, SiVapor
} from "react-icons/si";

// Helper de iconos
const imgIcon = (src: string) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt="" className="w-5 h-5 object-contain inline-block" />
);

const getTechIcon = (techName: string) => {
  const normalize = techName.toLowerCase();

  // Iconos en imagen de public/images/tools/
  if (normalize.includes("java")) return imgIcon("/images/tools/java.png");
  if (normalize.includes("postgres")) return imgIcon("/images/tools/postgresql.png");
  if (normalize.includes("ionic")) return imgIcon("/images/tools/ionic.svg");
  if (normalize.includes("stripe")) return imgIcon("/images/tools/stripe.svg");
  if (normalize.includes("sqlite")) return <TechIcons.SQLite className="w-5 h-5" />;
  if (normalize.includes("gradle")) return <TechIcons.Gradle className="w-5 h-5" />;

  // Iconos de librerías estándar
  if (normalize.includes("spring")) return <SiSpring />;
  if (normalize.includes("angular")) return <SiAngular />;
  if (normalize.includes("mysql")) return <SiMysql />;
  if (normalize.includes("mongo")) return <SiMongodb />;
  if (normalize.includes("vapor")) return <SiVapor />;
  if (normalize.includes("type")) return <SiTypescript />;
  if (normalize.includes("swagger")) return <SiSwagger />;
  if (normalize.includes("docker")) return <SiDocker />;
  if (normalize.includes("flutter")) return <SiFlutter />;
  if (normalize.includes("dart")) return <SiDart />;
  if (normalize.includes("android")) return <SiAndroid />;
  if (normalize.includes("swift")) return <SiSwift />;
  if (normalize.includes("ios") || normalize.includes("macos")) return <SiApple />;
  if (normalize.includes("tmdb")) return <SiThemoviedatabase />;
  if (normalize.includes("retrofit")) return <FaServer />;
  if (normalize.includes("room")) return <FaDatabase />;
  if (normalize.includes("gamekit")) return <FaRocket />;

  return <FaCode />;
};

// Captura sin marco: tamaño natural, bordes redondeados y sombra suave
const Screenshot = ({ imageUrl, alt, narrow }: { imageUrl: string; alt: string; narrow?: boolean }) => (
  <Image
    src={imageUrl}
    alt={alt}
    width={0}
    height={0}
    sizes={narrow ? "300px" : "(max-width: 768px) 100vw, 900px"}
    className={`h-auto rounded-2xl shadow-[0_20px_50px_-20px_rgba(5,10,25,0.8)] ${
      narrow ? "w-full max-w-[300px] mx-auto" : "w-full"
    }`}
  />
);

// Sección con etiqueta a la izquierda, como en la trayectoria de la home
function DetailSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="py-12 sm:py-16 border-t border-line">
      <div className="grid md:grid-cols-[16rem_1fr] gap-6 md:gap-10">
        <h2 id={id} className="display-tight text-3xl font-bold text-albero break-words">
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { language, t, mounted } = useLanguage();
  const es = language === "es";

  const projectsData = es ? projectsDataES : projectsDataEN;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (project) document.title = `${project.title} | José Manuel Jiménez`;
  }, [project]);

  if (!mounted) return null;

  if (!project) {
    notFound();
  }

  const color = projectColor(project.slug, projectIndex);
  const isMacOS = project.tech.some((tech) => tech.toLowerCase().includes("macos"));
  const displayCategory = isMacOS ? "macOS" : project.category;
  const statusText =
    project.status === "Completed" ? t.statusCompleted : project.status === "In Progress" ? t.statusInProgress : t.statusOnHold;

  // Lógica de galería unificada
  const displayedGallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : (project.galleryImages || []).map((img) => ({
          url: img,
          caption: es ? "Captura de pantalla" : "Screenshot",
        }));

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  const techStackLabels: Record<string, string> = es
    ? { frontend: "Frontend", backend: "Backend", apis: "APIs y servicios", mobile: "Móvil", tools: "Herramientas" }
    : { frontend: "Frontend", backend: "Backend", apis: "APIs & services", mobile: "Mobile", tools: "Tools" };

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="focus:outline-none pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <BackButton />

          {/* --- CABECERA: tarjeta grande con el color del proyecto --- */}
          <header
            style={{ backgroundColor: color }}
            className="relative mt-6 overflow-hidden rounded-[2.5rem] text-ink"
          >
            <div className="relative z-10 p-6 sm:p-10 md:p-14 md:pb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/70">
                {displayCategory} · {statusText}
              </p>
              <h1 className="mt-3 display-tight font-bold text-6xl sm:text-7xl md:text-8xl">{project.title}</h1>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-ink/85">
                {project.overview?.tagline || project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-ink text-cream font-bold hover:bg-ink/85 transition-colors"
                  >
                    <FaGithub aria-hidden="true" size={18} />
                    {es ? "Ver código" : "View code"}
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full border-2 border-ink font-bold hover:bg-ink hover:text-cream transition-colors"
                  >
                    {es ? "Ver demo" : "Live demo"} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Captura principal que "se sale" por abajo */}
            {/* Hueco 16:9 como las imágenes principales, para que se vean enteras y sin barras */}
            <div className="relative mx-6 sm:mx-10 md:ml-auto md:mr-14 md:w-[62%] aspect-video rounded-t-2xl overflow-hidden bg-ink shadow-[0_-20px_60px_-20px_rgba(19,33,63,0.5)]">
              <Image
                src={project.mainImage}
                alt={es ? `Captura principal de ${project.title}` : `${project.title} main screenshot`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 62vw"
                className={
                  ["nexus-app", "aura-notch"].includes(project.slug) ? "object-contain p-3" : "object-cover"
                }
              />
            </div>
          </header>

          {/* --- DATOS RÁPIDOS --- */}
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="glass rounded-2xl p-5">
              <dt className="text-sm text-muted">{es ? "Plataforma" : "Platform"}</dt>
              <dd className="mt-1 text-lg font-semibold text-cream">{displayCategory}</dd>
            </div>
            <div className="glass rounded-2xl p-5">
              <dt className="text-sm text-muted">{es ? "Estado" : "Status"}</dt>
              <dd className="mt-1 text-lg font-semibold text-cream">{statusText}</dd>
            </div>
            <div className="glass rounded-2xl p-5">
              <dt className="text-sm text-muted">{es ? "Stack principal" : "Main stack"}</dt>
              <dd className="mt-1 text-lg font-semibold text-cream">
                {project.tech.filter((tech) => tech.toLowerCase() !== "jwt").slice(0, 3).join(", ")}
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            {/* --- RESUMEN --- */}
            {(project.overview || project.longDescription) && (
              <DetailSection id="overview-title" title={es ? "Resumen" : "Overview"}>
                <Reveal>
                  <p className="text-xl leading-relaxed text-cream">
                    {project.overview?.description || project.longDescription}
                  </p>
                  {project.overview?.highlights && project.overview.highlights.length > 0 && (
                    <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {project.overview.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-muted leading-relaxed">
                          <span aria-hidden="true" className="text-albero">✦</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </DetailSection>
            )}

            {/* --- TECNOLOGÍAS --- */}
            <DetailSection id="tech-title" title={t.systemArchitecture}>
              <ul className="flex flex-wrap gap-2.5">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="inline-flex items-center gap-2.5 rounded-full border border-cream/20 px-4 py-2 text-[15px] font-medium text-cream"
                  >
                    <span aria-hidden="true" className="flex items-center text-lg text-muted">
                      {getTechIcon(tech)}
                    </span>
                    {tech}
                  </li>
                ))}
              </ul>

              {project.techStack && (
                <div className="mt-10 space-y-8">
                  {Object.entries(project.techStack).map(([category, items]) =>
                    items && items.length > 0 ? (
                      <div key={category}>
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-3">
                          {techStackLabels[category] ?? category}
                        </h3>
                        <dl className="border-t border-line">
                          {items.map((item: { name: string; role: string }) => (
                            <div key={item.name} className="grid sm:grid-cols-[12rem_1fr] gap-x-6 gap-y-1 py-3 border-b border-line">
                              <dt className="font-semibold text-cream">{item.name}</dt>
                              <dd className="text-muted">{item.role}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ) : null,
                  )}
                </div>
              )}
            </DetailSection>

            {/* --- CARACTERÍSTICAS --- */}
            {project.features && project.features.length > 0 && (
              <DetailSection id="features-title" title={es ? "Características" : "Features"}>
                <ol className="border-t border-line">
                  {project.features.map((feature, i) => (
                    <li key={feature.title} className="py-6 border-b border-line">
                      <Reveal>
                        <div className="grid grid-cols-[3rem_1fr] gap-4">
                          <span aria-hidden="true" className="text-sm font-medium tabular-nums text-muted pt-2">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-2xl font-bold text-cream">
                              <span aria-hidden="true" className="mr-2">{feature.icon}</span>
                              {feature.title}
                            </h3>
                            <p className="mt-2 text-muted leading-relaxed">{feature.description}</p>
                            {feature.techs.length > 0 && (
                              <p className="mt-3 text-sm text-cream/70">{feature.techs.join(" · ")}</p>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </DetailSection>
            )}

            {/* --- GALERÍA --- */}
            {displayedGallery.length > 0 && (
              <DetailSection id="gallery-title" title={es ? "Capturas" : "Screenshots"}>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                  {displayedGallery.map((img, idx) => {
                    const isMacWindow =
                      img.caption?.includes("(macOS)") ||
                      project.category.includes("Full Stack") ||
                      project.category.includes("Backend");
                    const alt = img.caption || project.title;

                    return (
                      <li key={`${img.url}-${idx}`} className={isMacWindow ? "sm:col-span-2" : ""}>
                        <button
                          type="button"
                          onClick={() => setSelectedImage({ url: img.url, caption: alt })}
                          aria-label={`${es ? "Ampliar" : "Enlarge"}: ${alt}`}
                          className="block w-full cursor-zoom-in transition-transform duration-300 hover:-translate-y-1"
                        >
                          <Screenshot imageUrl={img.url} alt={alt} narrow={!isMacWindow} />
                        </button>
                        {img.caption && <p className="mt-4 text-center text-muted">{img.caption}</p>}
                      </li>
                    );
                  })}
                </ul>
              </DetailSection>
            )}

            {/* --- INSTALACIÓN --- */}
            {project.installation && (
              <DetailSection id="install-title" title={es ? "Instalación" : "Setup"}>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-3">
                  {t.installationRequirements}
                </h3>
                <ul className="flex flex-wrap gap-2 mb-10">
                  {project.installation.requirements.map((req) => (
                    <li key={req} className="rounded-full border border-cream/20 px-4 py-1.5 text-cream">
                      {req}
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-3">
                  {t.installationSteps}
                </h3>
                <ol className="space-y-6">
                  {project.installation.steps.map((step, i) => (
                    <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                      <span
                        aria-hidden="true"
                        className="grid place-items-center w-9 h-9 rounded-full bg-albero text-ink font-bold"
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-lg font-semibold text-cream pt-1">{step.title}</p>
                        {step.description && <p className="mt-1 text-muted">{step.description}</p>}
                        <pre className="mt-3 rounded-xl bg-[#0b1428] border border-line p-4 text-sm font-mono text-cream overflow-x-auto">
                          {step.commands.map((cmd) => (
                            <code key={cmd} className="block">
                              <span aria-hidden="true" className="text-albero select-none">$ </span>
                              {cmd}
                            </code>
                          ))}
                        </pre>
                      </div>
                    </li>
                  ))}
                </ol>
              </DetailSection>
            )}
          </div>

          {/* --- SIGUIENTE PROYECTO --- */}
          {nextProject && nextProject.slug !== project.slug && (
            <Link
              href={`/projects/${nextProject.slug}`}
              style={{ backgroundColor: projectColor(nextProject.slug, projectIndex + 1) }}
              className="group mt-8 flex items-center justify-between gap-6 rounded-[2rem] p-6 sm:p-10 text-ink"
            >
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.14em] text-ink/70">
                  {es ? "Siguiente proyecto" : "Next project"}
                </span>
                <span className="mt-1 block display-tight text-4xl sm:text-6xl font-bold">{nextProject.title}</span>
              </span>
              <span
                aria-hidden="true"
                className="glass-light grid place-items-center shrink-0 w-14 h-14 rounded-full text-ink text-2xl font-bold transition-transform group-hover:rotate-45"
              >
                ↗
              </span>
            </Link>
          )}
        </div>
      </main>

      <SiteFooter />

      {/* --- VISOR DE IMÁGENES --- */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0b1428]/95 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 h-10 px-4 rounded-full bg-albero text-ink text-sm font-bold"
            >
              {es ? "Cerrar" : "Close"} <span aria-hidden="true">✕</span>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="mt-4 text-center text-cream">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
