"use client";
import Link from "next/link";
import { useEffect } from "react";
import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function NotFound() {
  const { language } = useLanguage();
  const es = language === "es";

  useEffect(() => {
    document.title = es ? "Página no encontrada | José Manuel Jiménez" : "Page not found | José Manuel Jiménez";
  }, [es]);

  const suggestions = [
    { href: "/#work", label: es ? "Proyectos destacados" : "Featured work" },
    { href: "/projects", label: es ? "Todos los proyectos" : "All projects" },
    { href: "/#about", label: es ? "Sobre mí" : "About me" },
    { href: "/#contact", label: es ? "Contacto" : "Contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip flex flex-col">
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="focus:outline-none flex-1 pt-32 sm:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
            {es ? "Error 404" : "Error 404"}
          </p>

          <h1 className="mt-4 display-tight font-bold text-albero text-[5.5rem] sm:text-[9rem] md:text-[12rem]">
            4<span aria-hidden="true" className="inline-block text-cream -rotate-12">✦</span>4
            <span className="sr-only">{es ? " — Página no encontrada" : " — Page not found"}</span>
          </h1>

          <div className="mt-6 grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
            <div>
              <p className="display-tight font-bold text-cream text-4xl sm:text-5xl">
                {es ? "Esta página se ha ido de feria." : "This page went off to the fair."}
              </p>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-lg">
                {es
                  ? "El enlace está roto o la página ya no existe. No pasa nada: aquí tienes por dónde seguir."
                  : "The link is broken or the page no longer exists. No worries — here's where you can go next."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center h-12 px-6 rounded-full bg-albero text-ink font-bold hover:bg-cream transition-colors"
                >
                  {es ? "Volver al inicio" : "Back to home"}
                </Link>
                <Link
                  href="/projects"
                  className="glass inline-flex items-center h-12 px-6 rounded-full text-cream font-bold hover:text-albero transition-colors"
                >
                  {es ? "Ver proyectos" : "See projects"}
                </Link>
              </div>
            </div>

            <nav aria-label={es ? "Sugerencias" : "Suggestions"}>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-3">
                {es ? "Quizá buscabas" : "Maybe you were looking for"}
              </h2>
              <ul className="border-t border-line">
                {suggestions.map((s) => (
                  <li key={s.href} className="border-b border-line">
                    <Link
                      href={s.href}
                      className="group flex items-center justify-between py-4 text-xl font-semibold text-cream hover:text-albero transition-colors"
                    >
                      {s.label}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
