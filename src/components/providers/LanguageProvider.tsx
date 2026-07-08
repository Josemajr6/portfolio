"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "es" | "en";

const translations = {
  es: {
    // Welcomes & General status
    systemReady: "// Estado del Sistema: Listo",
    introTitle1: "Desarrollo",
    introTitle2: "Inteligente.",
    aboutMeTitle: "ABOUT_ME",
    aboutMeText1: "Junior Full Stack Developer especializado en el desarrollo de aplicaciones web y móviles. Construyo soluciones end-to-end, desde la lógica backend hasta interfaces frontend modernas.",
    aboutMeText2: "Enfocado en escribir código limpio y escalable, orientado a entornos de producción, mientras sigo ampliando mi stack y desarrollando proyectos reales.",
    techArsenalTitle: "Arsenal Tecnológico",
    selectedWorks: "// Trabajos Seleccionados",
    featuredMissions: "Misiones Destacadas",
    validationTokens: "// VALIDACIÓN_DE_CREDENCIALES",
    certificationsTitle: "Licencias & Certificaciones",
    executionLog: "Log de Ejecución",
    secureChannelOpen: "SECURE_CHANNEL_OPEN",
    startUplink: "INICIAR UPLINK",
    contactText: "¿Tienes una vacante o un proyecto en mente? Despliega tu mensaje. Tiempo de respuesta estimado: ",
    contactHours: "<24h",
    recipient: "Destinatario",
    directCall: "Llamada Directa",
    profileStatus: "PROFILE_STATUS",
    available: "DISPONIBLE",
    downloadCV: "DESCARGAR CV",
    developedWith: "Desarrollado con",
    by: "por",
    endOfTransmission: "/// FIN_DE_LA_TRANSMISIÓN ///",

    // Header & Navigation
    navProjects: "~/proyectos",
    navCertifications: "~/certificados",
    navExperience: "~/trayectoria",
    navContact: "~/hablemos",
    cvButton: "CV_V1.0",

    // Projects Archive Page
    projectsArchiveTitle: "Archivo de Proyectos",
    projectsArchiveDesc: "Acceso completo al historial de desarrollo. Utiliza la terminal de comandos inferior para filtrar por tecnología o categoría.",
    filterCommand: "root@portfolio:~/projects $ filter --type=",
    filterAll: "Todos",
    noProjectsFound: "> No se encontraron proyectos en este directorio...",

    // Project Card
    statusCompleted: "COMPLETADO",
    statusInProgress: "EN PROGRESO",
    statusOnHold: "EN PAUSA",
    usedTechnologies: "Tecnologías_Usadas:",
    sourceCode: "Código_Fuente",
    viewDetails: "Ver_Detalles >",

    // Dynamic Project Slug Page
    accessingSecureFile: "Accediendo_Archivo_Seguro...",
    systemArchitecture: "Arquitectura del Sistema",
    projectOverview: "Resumen del Proyecto",
    viewCredential: "VER CREDENCIAL",
    installationRequirements: "Requisitos de Instalación",
    installationSteps: "Pasos de Instalación",

    // Mobile App View
    fullStackDev: "Full Stack Developer",
    mobileBio: "Transformo ideas en código de alto rendimiento. Especializado en ecosistemas móviles y arquitecturas backend robustas.",
    viewProjectsButton: "Ver Proyectos",
    mobileTabHome: "Inicio",
    mobileTabProjects: "Proyectos",
    mobileTabAbout: "Sobre mí",
    mobileBioTabExperience: "Experiencia",
    mobileBioTabCertifications: "Certificados",
    contactUplink: "Uplink de Contacto",
    mobileCall: "Llamar",
    mobileEmail: "Email",
  },
  en: {
    // Welcomes & General status
    systemReady: "// System Status: Ready",
    introTitle1: "Smart",
    introTitle2: "Development.",
    aboutMeTitle: "ABOUT_ME",
    aboutMeText1: "Junior Full Stack Developer specializing in web and mobile application development. I build end-to-end solutions, from backend logic to modern frontend interfaces.",
    aboutMeText2: "Focused on writing clean and scalable code, oriented towards production environments, while continuing to expand my stack and develop real-world projects.",
    techArsenalTitle: "Tech Arsenal",
    selectedWorks: "// Selected Works",
    featuredMissions: "Featured Missions",
    validationTokens: "// VALIDATION_TOKENS",
    certificationsTitle: "Licenses & Certifications",
    executionLog: "Execution Log",
    secureChannelOpen: "SECURE_CHANNEL_OPEN",
    startUplink: "START UPLINK",
    contactText: "Have an opening or a project in mind? Send your message. Estimated response time: ",
    contactHours: "<24h",
    recipient: "Recipient",
    directCall: "Direct Call",
    profileStatus: "PROFILE_STATUS",
    available: "AVAILABLE",
    downloadCV: "DOWNLOAD CV",
    developedWith: "Developed with",
    by: "by",
    endOfTransmission: "/// END_OF_TRANSMISSION ///",

    // Header & Navigation
    navProjects: "~/projects",
    navCertifications: "~/certifications",
    navExperience: "~/timeline",
    navContact: "~/let's-talk",
    cvButton: "CV_V1.0",

    // Projects Archive Page
    projectsArchiveTitle: "Projects Archive",
    projectsArchiveDesc: "Full access to development history. Use the command terminal below to filter by technology or category.",
    filterCommand: "root@portfolio:~/projects $ filter --type=",
    filterAll: "All",
    noProjectsFound: "> No projects found in this directory...",

    // Project Card
    statusCompleted: "COMPLETED",
    statusInProgress: "IN PROGRESS",
    statusOnHold: "ON HOLD",
    usedTechnologies: "Used_Technologies:",
    sourceCode: "Source_Code",
    viewDetails: "View_Details >",

    // Dynamic Project Slug Page
    accessingSecureFile: "Accessing_Secure_File...",
    systemArchitecture: "System Architecture",
    projectOverview: "Project Overview",
    viewCredential: "VIEW CREDENTIAL",
    installationRequirements: "Installation Requirements",
    installationSteps: "Installation Steps",

    // Mobile App View
    fullStackDev: "Full Stack Developer",
    mobileBio: "I transform ideas into high-performance code. Specialized in mobile ecosystems and robust backend architectures.",
    viewProjectsButton: "View Projects",
    mobileTabHome: "Home",
    mobileTabProjects: "Projects",
    mobileTabAbout: "About me",
    mobileBioTabExperience: "Experience",
    mobileBioTabCertifications: "Credentials",
    contactUplink: "Contact Uplink",
    mobileCall: "Call",
    mobileEmail: "Email",
  },
};

interface LanguageContextType {
  language: Language;
  t: typeof translations.es;
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
      const browserLang = navigator.language || (navigator as any).userLanguage || "es";
      const detectedLang: Language = browserLang.toLowerCase().startsWith("es") ? "es" : "en";
      setLanguage(detectedLang);
    }
    setMounted(true);
  }, []);

  const cvUrl = language === "es" ? "/CV-JoseManuelJimenez-ES.pdf" : "/CV-JoseManuelJimenez-EN.pdf";
  const cvFilename = language === "es" ? "CV-JoseManuelJimenez-ES.pdf" : "CV-JoseManuelJimenez-EN.pdf";

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        setLanguage,
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
