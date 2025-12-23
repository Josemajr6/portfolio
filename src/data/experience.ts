export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work" | "education";
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador de Software",
    company: "Ayuntamiento de Arahal",
    period: "Actualidad",
    description: "Desarrollo y mantenimiento de soluciones software internas.",
    type: "work"
  },
  {
    id: "exp-2",
    role: "Técnico Informático",
    company: "TECNIARAHAL QUITO SL",
    period: "202X - 202X", // Ajustar fechas reales
    description: "Soporte técnico, mantenimiento de infraestructura y redes.",
    type: "work"
  },
  {
    id: "edu-1",
    role: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    company: "IES Francisco Rodríguez Marín",
    period: "2023 - 2025",
    description: "Especialización en desarrollo backend (Java/Spring) y móvil.",
    type: "education"
  },
  {
    id: "edu-2",
    role: "CFGM Sistemas Microinformáticos y Redes",
    company: "IES La Campiña",
    period: "2021 - 2023",
    description: "Fundamentos de hardware, redes y sistemas operativos.",
    type: "education"
  }
];