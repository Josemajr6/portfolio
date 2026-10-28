"use client";
import {
  SiSpring, SiAngular, SiPostgresql, SiOracle, SiApache, SiPhp, SiFlutter, SiDart,
  SiAndroid, SiHtml5, SiCss3, SiLinux, SiDocker, SiGit, SiPostman, SiTypescript,
  SiJavascript, SiSwift, SiMysql, SiFirebase, SiGithub, SiWordpress, SiEclipseide,
  SiAndroidstudio, SiXcode, SiPython, SiMongodb, SiOdoo, SiLaravel,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaJava, FaWindows } from "react-icons/fa";
import type { IconType } from "react-icons";
import { useLanguage, Translations } from "@/components/providers/LanguageProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

interface Category {
  key: keyof Translations;
  techs: { name: string; icon: IconType; size?: number }[];
}

const categories: Category[] = [
  {
    key: "catFrontend",
    techs: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Angular", icon: SiAngular },
      { name: "WordPress", icon: SiWordpress },
    ],
  },
  {
    key: "catBackend",
    techs: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpring },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    key: "catMobile",
    techs: [
      { name: "Swift", icon: SiSwift },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Android", icon: SiAndroid },
    ],
  },
  {
    key: "catDatabase",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Oracle DB", icon: SiOracle },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    key: "catTools",
    techs: [
      { name: "GNU/Linux", icon: SiLinux },
      { name: "Windows Server", icon: FaWindows },
      { name: "Docker", icon: SiDocker },
      { name: "Apache", icon: SiApache },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Odoo", icon: SiOdoo },
      { name: "Visual Studio Code", icon: DiVisualstudio, size: 20 },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Xcode", icon: SiXcode },
      { name: "Eclipse", icon: SiEclipseide },
    ],
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" aria-labelledby="stack-title" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading id="stack-title" title={t.stackTitle} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 border-t border-line pt-8">
          {categories.map((category, i) => (
            <Reveal key={category.key} delay={i * 0.05}>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero mb-4">
                {t[category.key] as string}
              </h3>
              <ul className="space-y-2.5">
                {category.techs.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-2.5 text-[17px] text-cream">
                    <tech.icon aria-hidden="true" size={tech.size ?? 16} className="text-muted shrink-0" />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
