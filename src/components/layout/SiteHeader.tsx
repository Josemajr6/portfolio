"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import LanguageSelector from "./LanguageSelector";

export default function SiteHeader() {
  const { t, language, cvUrl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "work", label: t.navWork },
    { id: "about", label: t.navAbout },
    { id: "experience", label: t.navExperience },
    { id: "stack", label: t.navStack },
    { id: "contact", label: t.navContact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Al bajar, la barra se encoge en una píldora de cristal flotante
  const pill = scrolled && !menuOpen;

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between gap-3 border transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          pill
            ? "glass mt-3 max-w-4xl h-14 rounded-full pl-5 pr-2"
            : "mt-0 max-w-6xl h-16 rounded-[2rem] px-2 sm:px-3 border-transparent"
        }`}
      >
        <Link href="/#top" className="font-display font-bold text-lg tracking-tight text-cream shrink-0">
          josé manuel<span className="text-albero">.</span>
        </Link>

        <nav aria-label={t.mainNav} className="hidden md:block">
          <ul className="flex items-center text-[15px] font-medium text-muted">
            {navItems.map((item, i) => (
              <li key={item.id} className="flex items-center">
                {i > 0 && <span aria-hidden="true" className="px-2 text-cream/30">/</span>}
                <a href={`/#${item.id}`} className="px-1 py-2 hover:text-albero transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelector />
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center h-10 px-4 rounded-full bg-albero text-ink text-sm font-bold hover:bg-cream transition-colors"
          >
            {t.cv} ↗
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden h-10 px-4 rounded-full glass text-sm font-semibold text-cream"
          >
            {menuOpen ? t.closeMenu : language === "es" ? "Menú" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t.mainNav}
          className="pointer-events-auto md:hidden fixed inset-x-3 top-[4.5rem] bottom-3 rounded-[2rem] glass bg-[#13213f]/80 px-6 pt-6 pb-6 flex flex-col"
        >
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-2 display-tight text-5xl font-bold text-cream hover:text-albero"
                >
                  <span className="font-sans text-sm font-medium tracking-normal text-muted tabular-nums">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center h-14 rounded-full bg-albero text-ink text-lg font-bold"
          >
            {t.downloadCV} ↗
          </a>
        </nav>
      )}
    </header>
  );
}
