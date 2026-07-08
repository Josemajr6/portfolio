export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
  techs?: string[];
}

export const experienceDataES: Experience[] = [
  {
    id: "edu-1",
    role: "CFGM Sistemas Microinformáticos y Redes",
    company: "IES La Campiña",
    period: "2022 - 2024",
    description:
      "Formación técnica base. Fundamentos sólidos de hardware, montaje de equipos, despliegue de redes locales y administración de sistemas operativos propietarios y libres.",
    type: "education",
    techs: ["Hardware", "Redes", "Windows Server", "Linux"],
  },
  {
    id: "work-1",
    role: "Técnico Informático",
    company: "TECNIARAHAL QUITO SL",
    period: "04/2024 - 06/2024",
    description:
      "Mantenimiento, reparación y configuración de equipos informáticos. Instalación de software y sistemas Windows/GNU-Linux. Resolución de incidencias técnicas y soporte directo a clientes.",
    type: "work",
    techs: ["Soporte", "Reparación", "Atención Cliente", "Sistemas"],
  },
  {
    id: "edu-2",
    role: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    company: "IES Francisco Rodríguez Marín",
    period: "2024 - Actualidad",
    description:
      "Especialización avanzada en desarrollo de software. Arquitectura backend, diseño de bases de datos complejas y programación móvil nativa e híbrida.",
    type: "education",
    techs: ["Java", "Spring Boot", "Android", "Angular", "SQL"],
  },
  {
    id: "work-2",
    role: "Desarrollador web",
    company: "Ayuntamiento de Arahal",
    period: "01/2025 - 03/2025",
    description:
      "Instalación y configuración de servidores web en entorno GNU/Linux. Adaptación de aplicaciones web en PHP, gestión de servicios Apache y administración de bases de datos Oracle.",
    type: "work",
    techs: ["PHP", "Oracle", "Apache", "Linux"],
  },
  {
    id: "work-3",
    role: "Desarrollador Full Stack",
    company: "Everybind",
    period: "02/2026 - 06/2026",
    description:
      "Desarrollo de proyectos con Laravel y Angular. Creación de webs y gestión de contenidos mediante WordPress. Implementación de estrategias SEO y optimización web.",
    type: "work",
    techs: ["PHP", "Laravel", "Angular", "WordPress", "SEO"],
  },
  {
    id: "work-4",
    role: "Desarrollador Full Stack",
    company: "Ecentia Marketing",
    period: "06/2026 - Actualidad",
    description:
      "Desarrollo de proyectos web usando Wordpress (Elementor) y Astro.",
    type: "work",
    techs: ["WordPress", "Astro", "Elementor"],
  },
];

export const experienceDataEN: Experience[] = [
  {
    id: "edu-1",
    role: "CFGM Microcomputer Systems and Networks",
    company: "IES La Campiña",
    period: "2022 - 2024",
    description:
      "Basic technical training. Solid fundamentals of hardware, computer assembly, local network deployment, and administration of proprietary and free operating systems.",
    type: "education",
    techs: ["Hardware", "Networks", "Windows Server", "Linux"],
  },
  {
    id: "work-1",
    role: "IT Technician",
    company: "TECNIARAHAL QUITO SL",
    period: "04/2024 - 06/2024",
    description:
      "Maintenance, repair, and configuration of computer equipment. Installation of software and Windows/GNU-Linux systems. Technical incident resolution and direct customer support.",
    type: "work",
    techs: ["Support", "Repair", "Customer Support", "Systems"],
  },
  {
    id: "edu-2",
    role: "CFGS Multiplatform Application Development",
    company: "IES Francisco Rodríguez Marín",
    period: "2024 - Present",
    description:
      "Advanced specialization in software development. Backend architecture, complex database design, and native and hybrid mobile programming.",
    type: "education",
    techs: ["Java", "Spring Boot", "Android", "Angular", "SQL"],
  },
  {
    id: "work-2",
    role: "Web Developer",
    company: "Arahal Town Hall",
    period: "01/2025 - 03/2025",
    description:
      "Installation and configuration of web servers in GNU/Linux environments. Adaptation of PHP web applications, Apache service management, and Oracle database administration.",
    type: "work",
    techs: ["PHP", "Oracle", "Apache", "Linux"],
  },
  {
    id: "work-3",
    role: "Full Stack Developer",
    company: "Everybind",
    period: "02/2026 - 06/2026",
    description:
      "Project development using Laravel and Angular. Website creation and content management through WordPress. Implementation of SEO strategies and web optimization.",
    type: "work",
    techs: ["PHP", "Laravel", "Angular", "WordPress", "SEO"],
  },
  {
    id: "work-4",
    role: "Full Stack Developer",
    company: "Ecentia Marketing",
    period: "06/2026 - Present",
    description:
      "Web project development using WordPress (Elementor) and Astro.",
    type: "work",
    techs: ["WordPress", "Astro", "Elementor"],
  },
];

// Default fallback export
export const experienceData = experienceDataES;

