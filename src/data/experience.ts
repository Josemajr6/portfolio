export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  type: "work" | "education";
  grade?: string;
  inProgress?: boolean;
  techs?: string[];
}

// Ordenado del más reciente al más antiguo (igual que en el CV)
export const experienceDataES: Experience[] = [
  {
    id: "work-everybind",
    role: "Desarrollador Full Stack",
    company: "EveryBind",
    period: "02/2026 - 06/2026",
    description: [
      "Desarrollo y mantenimiento de aplicaciones web con Laravel y Angular.",
      "Creación y administración de sitios WordPress, optimización SEO y rendimiento.",
    ],
    type: "work",
    techs: ["PHP", "Laravel", "Angular", "WordPress", "SEO"],
  },
  {
    id: "work-arahal",
    role: "Desarrollador Web",
    company: "Ayuntamiento de Arahal",
    period: "01/2025 - 03/2025",
    description: [
      "Instalación y configuración de servidores web Apache en GNU/Linux.",
      "Adaptación de aplicaciones web en PHP conectadas a bases de datos Oracle.",
    ],
    type: "work",
    techs: ["PHP", "Oracle", "Apache", "Linux"],
  },
  {
    id: "work-tecniarahal",
    role: "Técnico Informático",
    company: "Tecniarahal Quito S.L.",
    period: "04/2024 - 06/2024",
    description: [
      "Mantenimiento de equipos, instalación de sistemas y redes, y soporte técnico a clientes.",
    ],
    type: "work",
    techs: ["Soporte", "Sistemas", "Redes"],
  },
  {
    id: "edu-daw",
    role: "CFGS Desarrollo de Aplicaciones Web",
    company: "Digitech FP (online)",
    period: "2026 - 2027",
    description: [],
    type: "education",
    inProgress: true,
  },
  {
    id: "edu-dam",
    role: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    company: "IES Francisco Rodríguez Marín",
    location: "Osuna",
    period: "2024 - 2026",
    description: [],
    type: "education",
    grade: "9,00",
  },
  {
    id: "edu-smr",
    role: "CFGM Sistemas Microinformáticos y Redes",
    company: "IES La Campiña",
    location: "Arahal",
    period: "2022 - 2024",
    description: [],
    type: "education",
    grade: "8,90",
  },
];

export const experienceDataEN: Experience[] = [
  {
    id: "work-everybind",
    role: "Full Stack Developer",
    company: "EveryBind",
    period: "02/2026 - 06/2026",
    description: [
      "Developed and maintained web applications with Laravel and Angular.",
      "Built and managed WordPress sites, improving SEO and performance.",
    ],
    type: "work",
    techs: ["PHP", "Laravel", "Angular", "WordPress", "SEO"],
  },
  {
    id: "work-arahal",
    role: "Web Developer",
    company: "Arahal City Council",
    period: "01/2025 - 03/2025",
    description: [
      "Installed and configured Apache web servers on GNU/Linux.",
      "Adapted PHP web applications connected to Oracle databases.",
    ],
    type: "work",
    techs: ["PHP", "Oracle", "Apache", "Linux"],
  },
  {
    id: "work-tecniarahal",
    role: "IT Technician",
    company: "Tecniarahal Quito S.L.",
    period: "04/2024 - 06/2024",
    description: [
      "Computer maintenance, system and network setup, and customer IT support.",
    ],
    type: "work",
    techs: ["Support", "Systems", "Networking"],
  },
  {
    id: "edu-daw",
    role: "Higher VET Diploma in Web Application Development",
    company: "Digitech FP (online)",
    period: "2026 - 2027",
    description: [],
    type: "education",
    inProgress: true,
  },
  {
    id: "edu-dam",
    role: "Higher VET Diploma in Multiplatform Application Development",
    company: "IES Francisco Rodríguez Marín",
    location: "Osuna",
    period: "2024 - 2026",
    description: [],
    type: "education",
    grade: "9.00/10",
  },
  {
    id: "edu-smr",
    role: "VET Diploma in Microcomputer Systems and Networks",
    company: "IES La Campiña",
    location: "Arahal",
    period: "2022 - 2024",
    description: [],
    type: "education",
    grade: "8.90/10",
  },
];

// Default fallback export
export const experienceData = experienceDataES;
