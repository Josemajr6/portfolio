export interface Project {
  slug: string;
  title: string;
  category: "Spring Boot" | "Android" | "Flutter" | "Swift" | "Backend" | "Full Stack";
  tech: string[];
  description: string;
  longDescription?: string;
  githubUrl?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    slug: "nexus-app",
    title: "Nexus App",
    category: "Full Stack",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
    description: "Plataforma de compra-venta con arquitectura escalable y seguridad avanzada.",
    githubUrl: "https://github.com/tu-usuario/nexus-app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    slug: "lepokedex",
    title: "LePokedex",
    category: "Android",
    tech: ["Java", "Android Studio", "XML", "Retrofit"],
    description: "App nativa optimizada con consumo de API y patrón MVVM.",
    githubUrl: "https://github.com/tu-usuario/lepokedex",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "moneyflow",
    title: "MoneyFlow",
    category: "Flutter",
    tech: ["Flutter", "Dart", "SQLite"],
    description: "Control de gastos multiplataforma con gráficos y persistencia local.",
    githubUrl: "https://github.com/tu-usuario/moneyflow",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop"
  },
  {
    slug: "manyworker-api",
    title: "ManyWorker API",
    category: "Backend",
    tech: ["Spring Boot", "Swagger", "JUNIT"],
    description: "API REST pura documentada para gestión de flujos de trabajo.",
    githubUrl: "https://github.com/tu-usuario/manyworker",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop"
  }
];