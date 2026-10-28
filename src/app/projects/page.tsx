"use client";

import Link from "next/link";
import { useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import SkipLink from "@/components/layout/SkipLink";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ProjectsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.projectsArchiveTitle} | José Manuel Jiménez`;
  }, [t]);

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1} className="focus:outline-none pt-28 sm:pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Link href="/" className="inline-block mb-8 text-muted font-semibold hover:text-albero">
            ← {t.backHome}
          </Link>
          <SectionHeading as="h1" id="archive-title" title={t.projectsArchiveTitle} intro={t.projectsArchiveDesc} />
          <ProjectsSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
