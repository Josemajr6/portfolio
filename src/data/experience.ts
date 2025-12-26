export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
  techs?: string[]; 
}

export const experienceData: Experience[] = [
  {
    id: "edu-1",
    role: "CFGM Sistemas Microinformáticos y Redes",
    company: "IES La Campiña",
    period: "2022 - 2024",
    description: "Formación técnica base. Fundamentos sólidos de hardware, montaje de equipos, despliegue de redes locales y administración de sistemas operativos propietarios y libres.",
    type: "education",
    techs: ["Hardware", "Redes", "Windows Server", "Linux"]
  },
  {
    id: "work-1",
    role: "Técnico Informático",
    company: "TECNIARAHAL QUITO SL",
    period: "04/2024 - 06/2024",
    description: "Mantenimiento, reparación y configuración de equipos informáticos. Instalación de software y sistemas Windows/GNU-Linux. Resolución de incidencias técnicas y soporte directo a clientes.",
    type: "work",
    techs: ["Soporte", "Reparación", "Atención Cliente", "Sistemas"]
  },
  {
    id: "edu-2",
    role: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    company: "IES Francisco Rodríguez Marín",
    period: "2024 - Actualidad",
    description: "Especialización avanzada en desarrollo de software. Arquitectura backend, diseño de bases de datos complejas y programación móvil nativa e híbrida.",
    type: "education",
    techs: ["Java", "Spring Boot", "Android", "SQL"]
  },
  {
    id: "work-2",
    role: "Desarrollador de Software",
    company: "Ayuntamiento de Arahal",
    period: "01/2025 - 03/2025",
    description: "Instalación y configuración de servidores web en entorno GNU/Linux. Adaptación de aplicaciones web en PHP, gestión de servicios Apache y administración de bases de datos Oracle.",
    type: "work",
    techs: ["PHP", "Oracle", "Apache", "Linux"]
  }
];