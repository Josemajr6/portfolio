"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

const translations = {
  es: {
    // Accesibilidad
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
    mainNav: "Navegación principal",

    // Navegación
    navWork: "Proyectos",
    navAbout: "Sobre mí",
    navExperience: "Trayectoria",
    navStack: "Stack",
    navContact: "Contacto",
    downloadCV: "Descargar CV",
    cv: "CV",

    // Hero
    heroHello: "Hola, soy José.",
    heroLine: "Hago webs y apps.",
    heroIntro:
      "Desarrollador full stack en Sevilla. Me gusta construir las cosas de principio a fin: el backend que nadie ve y la interfaz que todo el mundo toca.",
    heroBadge: "disponible · prácticas · sevilla · ",
    heroCtaWork: "Ver proyectos",
    heroCtaEmail: "Escríbeme",
    factDam: "DAM con un 9,00 de media",
    factCompanies: "3 empresas",
    factProjects: "proyectos publicados",
    factEnglish: "Inglés B1",

    // Proyectos
    workTitle: "Proyectos.",
    workIntro: "Lo que más orgulloso estoy de haber construido. Cada uno tiene su ficha con capturas, arquitectura e instalación.",
    moreTitle: "Y más cosas.",
    moreIntro: "Apps nativas, APIs y experimentos con los que sigo aprendiendo.",
    viewAllProjects: "Ver el archivo completo",

    // Sobre mí
    aboutTitle: "Sobre mí.",
    aboutText1:
      "Terminé el Grado Superior de DAM con un 9 de media y ahora estoy haciendo DAW en Digitech para centrarme en el desarrollo web.",
    aboutText2:
      "He trabajado con Laravel, Angular y WordPress en EveryBind, y en el Ayuntamiento de Arahal monté servidores web en Linux. Me gusta hacer proyectos por mi cuenta y aprender tecnologías nuevas.",
    aboutText3:
      "Busco hacer las prácticas en Sevilla, en una empresa donde pueda trabajar tanto en frontend como en backend.",
    factLocation: "Dónde",
    factLocationValue: "Sevilla, España",
    factLanguages: "Idiomas",
    factLanguagesValue: "Español nativo, inglés B1",
    factLicense: "Carné",
    factLicenseValue: "B",
    factLooking: "Busco",
    factLookingValue: "Prácticas full stack",
    softSkillsTitle: "Cómo trabajo",
    softSkills: [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Autonomía y proactividad",
      "Aprendo rápido",
      "Atención al cliente",
    ],

    // Trayectoria
    experienceTitle: "Trayectoria.",
    workSection: "Experiencia",
    educationSection: "Formación",
    inProgress: "En curso",
    averageGrade: "Nota media",

    // Stack
    stackTitle: "Con qué trabajo.",
    catFrontend: "Frontend",
    catBackend: "Backend",
    catMobile: "Móvil",
    catDatabase: "Bases de datos",
    catTools: "Sistemas y herramientas",

    // Certificaciones
    certificationsTitle: "Cursos.",
    viewCredential: "Ver credencial",

    // Contacto
    contactTitle: "¿Hablamos?",
    contactText:
      "Si tienes una vacante de prácticas o un proyecto entre manos, escríbeme. Respondo en menos de 24 horas.",
    copyEmail: "Copiar email",
    copied: "¡Copiado!",
    contactPhone: "Teléfono",
    contactEmail: "Email",

    // Footer
    footerTime: "Ahora mismo son las",
    footerIn: "en Sevilla",
    backToTop: "Volver arriba",

    // Archivo de proyectos
    projectsArchiveTitle: "Todos los proyectos.",
    projectsArchiveDesc:
      "El historial completo. Filtra por plataforma para encontrar lo que buscas.",
    backHome: "Inicio",
    filterLabel: "Filtrar proyectos",
    filterAll: "Todos",
    noProjectsFound: "No hay proyectos en esta categoría.",
    projectsCount: "proyectos",

    // Tarjeta de proyecto
    statusCompleted: "Completado",
    statusInProgress: "En desarrollo",
    statusOnHold: "En pausa",
    sourceCode: "Código",
    viewDetails: "Ver proyecto",

    // Página de detalle
    accessingSecureFile: "Ficha del proyecto",
    systemArchitecture: "Arquitectura del sistema",
    projectOverview: "Resumen del proyecto",
    installationRequirements: "Requisitos de instalación",
    installationSteps: "Pasos de instalación",
  },
  en: {
    // Accessibility
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    mainNav: "Main navigation",

    // Navigation
    navWork: "Work",
    navAbout: "About",
    navExperience: "Background",
    navStack: "Stack",
    navContact: "Contact",
    downloadCV: "Download CV",
    cv: "CV",

    // Hero
    heroHello: "Hi, I'm José.",
    heroLine: "I build web & apps.",
    heroIntro:
      "Full stack developer based in Seville. I like building things end to end: the backend nobody sees and the interface everybody touches.",
    heroBadge: "available · internship · seville · ",
    heroCtaWork: "See my work",
    heroCtaEmail: "Email me",
    factDam: "Diploma with a 9/10 average",
    factCompanies: "3 companies",
    factProjects: "published projects",
    factEnglish: "English B1",

    // Work
    workTitle: "Work.",
    workIntro: "The things I'm proudest of building. Each one has its own page with screenshots, architecture and setup.",
    moreTitle: "And more.",
    moreIntro: "Native apps, APIs and experiments I keep learning with.",
    viewAllProjects: "See the full archive",

    // About
    aboutTitle: "About.",
    aboutText1:
      "I finished a Higher VET Diploma in Multiplatform Application Development with a 9/10 average, and I'm now studying Web Application Development at Digitech to focus on the web.",
    aboutText2:
      "I've worked with Laravel, Angular and WordPress at EveryBind, and I set up Linux web servers at Arahal City Council. I enjoy building my own projects and learning new technologies.",
    aboutText3:
      "I'm looking for a team where I can work on both frontend and backend.",
    factLocation: "Where",
    factLocationValue: "Seville, Spain",
    factLanguages: "Languages",
    factLanguagesValue: "Spanish native, English B1",
    factLicense: "Driving licence",
    factLicenseValue: "B",
    factLooking: "Looking for",
    factLookingValue: "Full stack internship / junior role",
    softSkillsTitle: "How I work",
    softSkills: [
      "Teamwork",
      "Problem solving",
      "Autonomy and initiative",
      "Quick learner",
      "Customer support",
    ],

    // Background
    experienceTitle: "Background.",
    workSection: "Experience",
    educationSection: "Education",
    inProgress: "In progress",
    averageGrade: "Average grade",

    // Stack
    stackTitle: "What I use.",
    catFrontend: "Frontend",
    catBackend: "Backend",
    catMobile: "Mobile",
    catDatabase: "Databases",
    catTools: "Systems & tools",

    // Certifications
    certificationsTitle: "Courses.",
    viewCredential: "View credential",

    // Contact
    contactTitle: "Let's talk?",
    contactText:
      "If you have an internship opening or a project in the works, drop me a line. I reply within 24 hours.",
    copyEmail: "Copy email",
    copied: "Copied!",
    contactPhone: "Phone",
    contactEmail: "Email",

    // Footer
    footerTime: "It's currently",
    footerIn: "in Seville",
    backToTop: "Back to top",

    // Projects archive
    projectsArchiveTitle: "All projects.",
    projectsArchiveDesc:
      "The full history. Filter by platform to find what you're looking for.",
    backHome: "Home",
    filterLabel: "Filter projects",
    filterAll: "All",
    noProjectsFound: "No projects in this category.",
    projectsCount: "projects",

    // Project card
    statusCompleted: "Completed",
    statusInProgress: "In progress",
    statusOnHold: "On hold",
    sourceCode: "Code",
    viewDetails: "View project",

    // Detail page
    accessingSecureFile: "Project details",
    systemArchitecture: "System architecture",
    projectOverview: "Project overview",
    installationRequirements: "Installation requirements",
    installationSteps: "Installation steps",
  },
};

export type Translations = typeof translations.es;

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  mounted: boolean;
  cvUrl: string;
  cvFilename: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let savedLang: string | null = null;
      try {
        savedLang = localStorage.getItem("preferred_language");
      } catch {}
      let detectedLang: Language = "es";
      if (savedLang === "es" || savedLang === "en") {
        detectedLang = savedLang;
      } else {
        const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || "es";
        detectedLang = browserLang.toLowerCase().startsWith("es") ? "es" : "en";
      }

      if (detectedLang !== "es") {
        setTimeout(() => {
          setLanguage(detectedLang);
        }, 0);
      }
    }
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, []);

  // Mantiene el atributo lang sincronizado para lectores de pantalla
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("preferred_language", lang);
    } catch {}
  };

  const cvFilename = language === "es" ? "CV-JoseManuelJimenez-ES.pdf" : "CV-JoseManuelJimenez-EN.pdf";
  const cvUrl = `/cv/${cvFilename}`;

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        setLanguage: handleSetLanguage,
        mounted,
        cvUrl,
        cvFilename,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
