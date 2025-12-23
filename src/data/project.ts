export interface Project {
  slug: string;
  title: string;
  category: "Spring Boot" | "Android" | "Flutter" | "Swift" | "Backend";
  tech: string[];
  description: string;
  longDescription?: string; // Para la página de detalle
  githubUrl?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    slug: "nexus-app",
    title: "Nexus App",
    category: "Spring Boot",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
    description: "Plataforma de gestión de artículos de segunda mano con arquitectura escalable.",
    longDescription: "Sistema completo de compra-venta desarrollado como Proyecto Final. Implementa seguridad robusta con JWT, gestión de roles, carga de imágenes y una arquitectura backend basada en capas (Controller, Service, Repository).",
    githubUrl: "https://github.com/tu-usuario/nexus-app",
    image: "/projects/nexus.webp" // Asegúrate de tener imágenes o usa placeholders
  },
  {
    slug: "manyworker-api",
    title: "ManyWorker API",
    category: "Spring Boot", // O "Backend"
    tech: ["Spring Boot", "Swagger", "Postman", "JUnit"],
    description: "API REST pura para sistemas de trabajo colaborativo y gestión de tareas.",
    longDescription: "Backend diseñado para la gestión de flujos de trabajo. Documentación exhaustiva con OpenAPI/Swagger y suite de pruebas de integración.",
    githubUrl: "https://github.com/tu-usuario/manyworker",
    image: "/projects/api.webp"
  },
  {
    slug: "lepokedex",
    title: "LePokedex",
    category: "Android",
    tech: ["Java", "Android Studio", "XML", "Retrofit"],
    description: "App Android nativa con consumo de API externa y patrón MVVM.",
    longDescription: "Aplicación móvil nativa que consume la PokeAPI. Implementa RecyclerViews optimizados, caché local y diseño XML responsive.",
    githubUrl: "https://github.com/tu-usuario/lepokedex",
    image: "/projects/pokedex.webp"
  },
  {
    slug: "moneyflow",
    title: "MoneyFlow",
    category: "Flutter",
    tech: ["Flutter", "Dart", "SQLite"],
    description: "Aplicación multiplataforma para el control y gestión de gastos mensuales.",
    longDescription: "Solución móvil para finanzas personales. Incluye gráficos de gastos, persistencia local de datos y exportación a PDF.",
    githubUrl: "https://github.com/tu-usuario/moneyflow",
    image: "/projects/moneyflow.webp"
  }
];