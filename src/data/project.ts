export interface Project {
  slug: string;
  title: string;
  category: "Spring Boot" | "Android" | "Flutter" | "Swift/iOS" | "Backend" | "Full Stack";
  tech: string[];
  description: string;
  longDescription?: string;
  githubUrl?: string;
  demoUrl?: string;
  mainImage: string;
  galleryImages: string[];
  status: "Completed" | "In Progress" | "On Hold";
  isFeatured?: boolean;
}

export const projectsData: Project[] = [
  // --- FULL STACK & BACKEND ---
  {
    slug: "nexus-app",
    title: "Nexus App",
    category: "Full Stack",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
    description: "Plataforma de compra-venta con arquitectura escalable y seguridad avanzada.",
    longDescription: "Nexus App es una solución completa...",
    githubUrl: "https://github.com/SomosNexusApp/",
    mainImage: "/images/projects/nexus.png",
    galleryImages: ["/images/projects/nexus-1.png"],
    status: "In Progress",
    isFeatured: true // SALDRÁ EN HOME
  },
  {
    slug: "lepokedex",
    title: "LePokedex",
    category: "Android",
    tech: ["Java", "Android Studio", "XML", "Retrofit"],
    description: "Le Pokedex es una aplicación nativa de Android desarrollada en Java que permite gestionar tu propia colección de avistamientos Pokémon. Con una interfaz moderna basada en Material Design y tarjetas, ofrece una experiencia visual limpia y organizada, incluyendo estadísticas detalladas y clasificación por tipos elementales.",
    githubUrl: "https://github.com/Josemajr6/LePokedex",
    mainImage: "/images/projects/lepokedex.png",
    galleryImages: [],
    status: "Completed",
    isFeatured: true // SALDRÁ EN HOME
  },
  /*
  {
    slug: "moneyflow",
    title: "MoneyFlow",
    category: "Flutter",
    tech: ["Flutter", "Dart", "SQLite"],
    description: "Control de gastos multiplataforma...",
    githubUrl: "https://github.com/tu-usuario/moneyflow",
    mainImage: "/images/projects/moneyflow.png",
    galleryImages: [],
    status: "Completed",
    isFeatured: false // SALDRÁ EN HOME
  },
  */
  {
    slug: "aura-movies",
    title: "Aura Movies",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "TMDB API", "iOS", "Vapor", "MongoDB"],
    description: "Red social cinematográfica para iOS donde puedes descubrir películas, escribir reseñas, seguir a otros cinéfilos y recibir notificaciones en tiempo real sobre tu actividad. Conecta con la comunidad, comparte tus opiniones y nunca te pierdas un estreno.",
    githubUrl: "https://github.com/josemajr6/aura-movies",
    mainImage: "/images/projects/auramovies.png",
    galleryImages: [],
    status: "Completed",
    isFeatured: true // SALDRÁ EN HOME
  },
  // ... resto de proyectos con isFeatured: false (o sin poner nada)
  {
    slug: "manyworker-api",
    title: "ManyWorker API",
    category: "Backend",
    tech: ["Spring Boot", "Swagger", "JUNIT"],
    description: "API REST en desarrollo",
    githubUrl: "https://github.com/Josemajr6/ManyWorker",
    mainImage: "/images/projects/api.png",
    galleryImages: [],
    status: "In Progress",
    isFeatured: false 
  },
  
  {
    slug: "aura-weather",
    title: "Aura Weather",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Weather API", "CoreLocation", "macOS"],
    description: "Aplicación meteorológica elegante con geolocalización automática y previsión detallada por horas.",
    githubUrl: "https://github.com/josemajr6/aura-weather",
    mainImage: "/images/projects/auraweather.png",
    galleryImages: [],
    status: "Completed"
  },
  {
    slug: "aura-quiz",
    title: "Aura Quiz",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "REST Countries API", "GameKit", "iOS", "macOS"],
    description: "Juego tipo trivial geográfico. Lógica de juego dinámica consumiendo datos reales de países vía API REST.",
    githubUrl: "https://github.com/josemajr6/aura-quiz",
    mainImage: "/images/projects/auraquiz.png",
    galleryImages: [],
    status: "Completed",
    isFeatured: true
  },
  {
    slug: "aura-habits",
    title: "Aura Habits",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Swift Charts", "WidgetKit", "iOS", "macOS"],
    description: "Aura Habits es una aplicación de seguimiento de hábitos diseñada para iOS con un enfoque minimalista y una experiencia de usuario fluida.",
    githubUrl: "https://github.com/josemajr6/aura-habits",
    mainImage: "/images/projects/aurahabits.png",
    galleryImages: [],
    status: "Completed",
    isFeatured: true
  },
  {
    slug: "aura-notes",
    title: "Aura Notes",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "SwiftData", "macOS"],
    description: "Editor de notas nativo para macOS. Gestión local de datos con persistencia eficiente y diseño minimalista.",
    githubUrl: "https://github.com/josemajr6/aura-notes",
    mainImage: "/images/projects/auranotes.png",
    galleryImages: [],
    status: "Completed"
  },
  {
    slug: "aura-notch",
    title: "Aura Notch",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "AppKit", "macOS"],
    description: "Utilidad de sistema para macOS que transforma el Notch en un área interactiva para controles multimedia.",
    githubUrl: "https://github.com/josemajr6/aura-notch",
    mainImage: "/images/projects/auranotch.png",
    galleryImages: [],
    status: "Completed"
  }
];