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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled && !menuOpen ? "bg-[#13213f]/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/#top" className="font-display font-bold text-lg tracking-tight text-cream">
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

        <div className="flex items-center gap-3">
          <LanguageSelector />
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-full bg-albero text-ink text-sm font-bold hover:bg-cream transition-colors"
          >
            {t.cv} ↗
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden relative z-10 h-9 px-4 rounded-full border border-cream/25 text-sm font-semibold text-cream"
          >
            {menuOpen ? t.closeMenu : language === "es" ? "Menú" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t.mainNav}
          className="md:hidden fixed inset-0 top-16 bg-[#13213f] px-5 pt-6 pb-10 flex flex-col"
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
