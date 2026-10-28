"use client";
import { useEffect } from "react";

import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechStack from "@/components/sections/TechStack";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // --- RESTAURACIÓN DE SCROLL al volver de la ficha de un proyecto ---
  useEffect(() => {
    let savedPos: string | null = null;
    try {
      savedPos = sessionStorage.getItem("portfolioScrollPos");
      sessionStorage.removeItem("portfolioScrollPos");
    } catch {}
    if (savedPos) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPos), behavior: "instant" });
      }, 50);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <FeaturedProjects />
        <About />
        <Experience />
        <TechStack />
        <Certifications />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
