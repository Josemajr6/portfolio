import { Github, Linkedin, Mail } from "lucide-react";

export const personalData = {
  name: "José Manuel Jiménez Rodríguez",
  role: "Desarrollador de Software Multiplataforma",
  tagline: "Construyendo software sólido, escalable y bien diseñado.",
  about: "Técnico Informático y estudiante de DAM. Proactivo, autodidacta y con un enfoque técnico sólido en arquitecturas backend y desarrollo móvil.",
  email: "tu-email@ejemplo.com",
  socials: [
    { name: "GitHub", url: "https://github.com/tu-usuario", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/tu-perfil", icon: Mail },
  ]
};

export const projects = [
  {
    title: "Nexus App",
    category: "Full Stack",
    tech: ["Spring Boot", "Angular", "PostgreSQL"],
    description: "Gestión de artículos de segunda mano con arquitectura escalable.",
    link: "#"
  },
  {
    title: "ManyWorker API",
    category: "Backend",
    tech: ["Spring Boot", "Swagger", "Postman"],
    description: "API REST para gestión de tareas y usuarios.",
    link: "#"
  }
];

export const skills = {
  backend: ["Java", "Spring Boot", "PostgreSQL", "PHP", "Python"],
  mobile: ["Android (Java)", "Flutter", "Swift"],
  frontend: ["Angular", "React", "TypeScript", "Tailwind CSS"],
  tools: ["Docker", "Linux", "Git", "Swagger"]
};