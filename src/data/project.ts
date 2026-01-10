// src/data/project.ts


export interface ProjectOverview {
  tagline: string;
  description: string;
  highlights: string[];
}

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
  techs: string[];
}

export interface TechStackItem {
  name: string;
  role: string;
  icon: string;
}

export interface TechStack {
  frontend?: TechStackItem[];
  backend?: TechStackItem[];
  apis?: TechStackItem[];
  mobile?: TechStackItem[];
  tools?: TechStackItem[];
}

export interface InstallationStep {
  title: string;
  description?: string;
  commands: string[];
}

export interface Installation {
  requirements: string[];
  steps: InstallationStep[];
}

export interface GalleryImage {
  url: string;
  caption: string;
}

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
  
  // Estructura detallada (opcional)
  overview?: ProjectOverview;
  features?: ProjectFeature[];
  techStack?: TechStack;
  installation?: Installation;
  gallery?: GalleryImage[];
}

export const projectsData: Project[] = [
  // === AURA MOVIES - PROYECTO COMPLETO ===
  {
    slug: "aura-movies",
    title: "Aura Movies",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "TMDB API", "iOS", "Vapor", "MongoDB"],
    description: "Red social cinematográfica para iOS donde puedes descubrir películas, escribir reseñas, seguir a otros cinéfilos y recibir notificaciones en tiempo real.",
    githubUrl: "https://github.com/josemajr6/aura-movies",
    mainImage: "/images/projects/auramovies/auramovies.webp",
    galleryImages: [
      "/images/projects/auramovies/auramovies-login.webp",
      "/images/projects/auramovies/auramovies-home.webp",
      "/images/projects/auramovies/auramovies-detail.webp",
      "/images/projects/auramovies/auramovies-profile.webp"
    ],
    status: "Completed",
    isFeatured: true,

    overview: {
      tagline: "Tu compañero cinematográfico definitivo para iOS 🍿",
      description: "AuraMovies es una red social cinematográfica completa que combina descubrimiento de películas, sistema de reseñas, seguimiento social y notificaciones push en tiempo real. Desarrollada con arquitectura moderna SwiftUI + Vapor Backend.",
      highlights: [
        "4 listas dinámicas curadas: Trending, Estrenos, Populares y Top Rated",
        "Sistema de reseñas con 1-5 estrellas + comentarios de 280 caracteres",
        "Red social completa con perfiles públicos/privados",
        "Notificaciones push en tiempo real vía APNs",
        "Sincronización en la nube con backend Vapor + MongoDB",
        "Modo oscuro adaptativo con animaciones fluidas",
        "Búsqueda inteligente de películas y actores",
        "Trailers de YouTube integrados"
      ]
    },

    features: [
      {
        icon: "🎬",
        title: "Descubre Películas",
        description: "Explora películas con 4 listas dinámicas: Trending, Estrenos, Populares y Top Rated. Navega entre películas, actores y filmografías con información completa de TMDB. Búsqueda en tiempo real y exploración por 20+ géneros.",
        techs: ["TMDB API", "SwiftUI Lists", "Async/Await", "Combine"]
      },
      {
        icon: "⭐",
        title: "Sistema de Reseñas",
        description: "Valora películas de 1-5 estrellas y escribe reseñas de hasta 280 caracteres. Guarda favoritas, lleva historial de vistas y accede a estadísticas personalizadas con sincronización en la nube.",
        techs: ["MongoDB", "CloudKit", "Core Data", "SwiftData"]
      },
      {
        icon: "🤝",
        title: "Red Social",
        description: "Sigue usuarios, gestiona solicitudes de amistad y descubre películas a través de la comunidad. Perfiles públicos/privados con control total de privacidad y sistema de conexiones completo.",
        techs: ["JWT Auth", "WebSocket", "Vapor", "Real-time Sync"]
      },
      {
        icon: "🔔",
        title: "Notificaciones Real-Time",
        description: "Recibe push cuando alguien te sigue, acepta solicitudes o hay películas trending. Sistema de badges inteligente con auto-sincronización cada 30 segundos.",
        techs: ["APNs", "Background Tasks", "UserNotifications", "Badges"]
      },
      {
        icon: "🎨",
        title: "Experiencia Premium",
        description: "Modo oscuro adaptativo, animaciones fluidas con transiciones suaves, efectos hápticos y diseño glassmorphism. Optimizado para iPhone y iPad.",
        techs: ["SwiftUI Animations", "Haptics", "Dark Mode", "Responsive"]
      },
      {
        icon: "🔐",
        title: "Autenticación Segura",
        description: "Registro con verificación por email (códigos de 6 dígitos vía Gmail SMTP). Login con usuario/email, recuperación de contraseña y Sign in with Apple.",
        techs: ["JWT", "OAuth 2.0", "Gmail SMTP", "Keychain"]
      }
    ],

    techStack: {
      frontend: [
        { name: "SwiftUI", role: "Framework UI declarativo de Apple", icon: "swift" },
        { name: "MVVM + @Observable", role: "Arquitectura reactiva con Swift 5.9", icon: "code" },
        { name: "Async/Await", role: "Concurrencia nativa de Swift", icon: "server" },
        { name: "Combine", role: "Framework reactivo para streams", icon: "flow" }
      ],
      backend: [
        { name: "Vapor 4.x", role: "Framework web en Swift", icon: "vapor" },
        { name: "MongoDB 6.0+", role: "Base de datos NoSQL", icon: "database" },
        { name: "JWT", role: "Autenticación con tokens", icon: "lock" },
        { name: "Swift 5.9+", role: "Lenguaje backend type-safe", icon: "swift" }
      ],
      apis: [
        { name: "TMDB API", role: "Base de datos de películas", icon: "film" },
        { name: "APNs", role: "Notificaciones push de Apple", icon: "bell" },
        { name: "Gmail SMTP", role: "Envío de emails de verificación", icon: "mail" },
        { name: "YouTube API", role: "Trailers integrados", icon: "video" }
      ]
    },

    installation: {
      requirements: [
        "macOS 13+ (Ventura o superior)",
        "Xcode 15+ con Swift 5.9",
        "MongoDB 6.0+ instalado",
        "Cuenta Gmail con contraseña de aplicación",
        "API Key gratuita de TMDB"
      ],
      steps: [
        {
          title: "Clonar Repositorio",
          commands: [
            "git clone https://github.com/josemajr6/aura-movies.git",
            "cd aura-movies"
          ]
        },
        {
          title: "Instalar MongoDB",
          description: "Vía Homebrew en macOS",
          commands: [
            "brew tap mongodb/brew",
            "brew install mongodb-community@6.0",
            "brew services start mongodb-community@6.0"
          ]
        },
        {
          title: "Configurar Backend",
          description: "Edita Backend/.env con tus credenciales",
          commands: [
            "cd Backend",
            "# Crea .env con:",
            "# MONGO_HOST=localhost",
            "# SMTP_EMAIL=tu-correo@gmail.com",
            "# TMDB_API_KEY=tu_key_aqui",
            "swift build",
            "swift run"
          ]
        },
        {
          title: "Ejecutar App iOS",
          commands: [
            "cd App",
            "open AuraMovies.xcodeproj",
            "# Presiona ⌘ + R en Xcode"
          ]
        }
      ]
    },

    gallery: [
      { url: "/images/projects/auramovies/auramovies-login.webp", caption: "Login con verificación de email (iPhone)" },
      { url: "/images/projects/auramovies/auramovies-home.webp", caption: "Inicio con listas curadas de películas (iPhone)" },
      { url: "/images/projects/auramovies/auramovies-detail.webp", caption: "Detalle de película con trailer y reparto (iPhone)" },
      { url: "/images/projects/auramovies/auramovies-profile.webp", caption: "Perfil de usuario con estadísticas (iPhone)" }
    ]
  },

  // === RESTO DE PROYECTOS (Estructura básica) ===
  {
    slug: "nexus-app",
    title: "Nexus App",
    category: "Full Stack",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "JWT"],
    description: "Plataforma de compra-venta con arquitectura escalable y seguridad avanzada.",
    githubUrl: "https://github.com/SomosNexusApp/",
    mainImage: "/images/projects/nexus/nexus.webp",
    galleryImages: ["/images/projects/nexus/nexus-1.webp"],
    status: "In Progress",
    isFeatured: true
  },
  {
    slug: "lepokedex",
    title: "LePokedex",
    category: "Android",
    tech: ["Java", "Android Studio", "XML", "Retrofit"],
    description: "Aplicación nativa de Android para gestionar tu colección de avistamientos Pokémon con Material Design y estadísticas detalladas.",
    githubUrl: "https://github.com/Josemajr6/LePokedex",
    demoUrl: "https://lepokedex.es",
    mainImage: "/images/projects/lepokedex/lepokedex.webp",
    galleryImages: [
      "/images/projects/lepokedex/lepokedex-main.webp",
      "/images/projects/lepokedex/lepokedex-detail.webp",
      "/images/projects/lepokedex/lepokedex-create.webp"
    ],
    status: "Completed",
    isFeatured: true,

          overview: {
      tagline: "Gestiona tu propia colección de avistamientos Pokémon 📱",
      description: "LePokedex es una aplicación nativa de Android desarrollada en Java que permite gestionar tu propia colección de avistamientos Pokémon. Con una interfaz moderna basada en Material Design y tarjetas, ofrece una experiencia visual limpia y organizada, incluyendo estadísticas detalladas y clasificación por tipos elementales.",
      highlights: [
        "Sistema CRUD completo con base de datos local",
        "Interfaz moderna con CardView y colores dinámicos por tipo",
        "Filtrado dinámico por tipo elemental con Spinner",
        "Estadísticas base: HP, Ataque, Defensa, Velocidad",
        "Layouts responsivos con ConstraintLayout",
        "Navegación intuitiva entre actividades",
        "Web oficial con documentación: lepokedex.es",
        "APK descargable desde GitHub Releases"
      ]
    },

    features: [
      {
        icon: "🔍",
        title: "Visualización y Filtrado",
        description: "Lista interactiva con tarjetas personalizadas e indicadores visuales de tipos elementales. Filtrado dinámico por tipo de Pokémon con Spinner que actualiza la lista al instante.",
        techs: ["RecyclerView", "CardView", "Spinner", "Custom Adapters"]
      },
      {
        icon: "📝",
        title: "CRUD Completo",
        description: "Sistema completo de gestión: crear nuevos registros con formulario validado, editar datos existentes, eliminar registros de forma segura y consultar detalles completos de cada Pokémon.",
        techs: ["Base de Datos Local", "ContentValues", "Cursor", "Database Helper"]
      },
      {
        icon: "📊",
        title: "Estadísticas Detalladas",
        description: "Visualización de stats base de cada Pokémon: HP, Ataque, Defensa y Velocidad. Cálculo automático de totales y sistema de validación de rangos.",
        techs: ["Data Binding", "Custom Views", "Validation"]
      },
      {
        icon: "🎨",
        title: "Material Design",
        description: "Interfaz moderna con bordes redondeados, sombras suaves y paleta de colores coherente. Colores dinámicos que cambian según el tipo elemental del Pokémon.",
        techs: ["Material Components", "Custom Drawables", "Styles & Themes"]
      },
      {
        icon: "📱",
        title: "UX Optimizada",
        description: "Uso extensivo de ConstraintLayout para garantizar adaptabilidad en diferentes tamaños de pantalla. FloatingActionButton para acciones principales y navegación fluida.",
        techs: ["ConstraintLayout", "FAB", "Intent Navigation"]
      },
      {
        icon: "🌐",
        title: "Web Oficial",
        description: "Portal web dedicado con documentación extendida, novedades, descarga directa del APK y guías de uso. Diseño responsive para consulta desde cualquier dispositivo.",
        techs: ["GitHub Pages", "Responsive Design", "Documentation"]
      }
    ],

    techStack: {
      mobile: [
        { name: "Java 8+", role: "Lenguaje de programación principal", icon: "java" },
        { name: "Android Studio", role: "IDE oficial de desarrollo Android", icon: "android" },
        { name: "XML Layouts", role: "Diseño declarativo de interfaces", icon: "xml" },
        { name: "Base de Datos Local", role: "Persistencia de datos en el dispositivo", icon: "database" }
      ],
      frontend: [
        { name: "RecyclerView", role: "Manejo eficiente de listas", icon: "list" },
        { name: "CardView", role: "Contenedores de información", icon: "card" },
        { name: "FloatingActionButton", role: "Acciones principales", icon: "button" },
        { name: "ConstraintLayout", role: "Layouts adaptativos", icon: "layout" }
      ],
      tools: [
        { name: "Gradle", role: "Sistema de compilación", icon: "build" },
        { name: "Git", role: "Control de versiones", icon: "git" },
        { name: "Material Design", role: "Guía de diseño", icon: "design" }
      ]
    },

    installation: {
      requirements: [
        "Android Studio (Koala / Ladybug o superior)",
        "JDK 8+ instalado en el sistema",
        "Dispositivo Android 6.0+ o emulador",
        "Git para clonar el repositorio"
      ],
      steps: [
        {
          title: "Clonar el Repositorio",
          commands: [
            "git clone https://github.com/Josemajr6/LePokedex.git",
            "cd LePokedex"
          ]
        },
        {
          title: "Abrir en Android Studio",
          description: "Importar el proyecto en Android Studio",
          commands: [
            "# En Android Studio:",
            "# File > Open",
            "# Seleccionar la carpeta LePokedex"
          ]
        },
        {
          title: "Sincronizar Gradle",
          description: "Esperar a que Gradle descargue las dependencias",
          commands: [
            "# Android Studio lo hace automáticamente",
            "# O manualmente: Build > Rebuild Project"
          ]
        },
        {
          title: "Ejecutar la App",
          description: "Seleccionar emulador o dispositivo físico",
          commands: [
            "# Selecciona un emulador Pixel recomendado",
            "# O conecta tu dispositivo Android por USB",
            "# Presiona Run (Shift + F10)"
          ]
        }
      ]
    },

    gallery: [
      { url: "/images/projects/lepokedex/lepokedex-main.webp", caption: "Listado principal con filtro por tipo (Android)" },
      { url: "/images/projects/lepokedex/lepokedex-detail.webp", caption: "Detalle del Pokémon con estadísticas (Android)" },
      { url: "/images/projects/lepokedex/lepokedex-create.webp", caption: "Formulario de registro de nuevo Pokémon (Android)" }
    ]
  },
  {
    slug: "aura-quiz",
    title: "Aura Quiz",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "REST Countries API", "GameKit", "iOS", "macOS"],
    description: "Desafío global de banderas y capitales mundiales con modos de juego, niveles de dificultad y biblioteca de estudio organizada por continentes.",
    githubUrl: "https://github.com/josemajr6/aura-quiz",
    mainImage: "/images/projects/auraquiz/auraquiz.webp",
    galleryImages: [
      "/images/projects/auraquiz/auraquiz-inicio-mac.webp",
      "/images/projects/auraquiz/auraquiz-dificultad.webp",
      "/images/projects/auraquiz/auraquiz-banderas.webp",
      "/images/projects/auraquiz/auraquiz-capitales.webp"
    ],
    status: "Completed",
    isFeatured: true,

    overview: {
      tagline: "Desafío global de banderas y capitales mundiales 🌍✨",
      description: "AuraQuiz es una aplicación multiplataforma diseñada con SwiftUI que pone a prueba tus conocimientos de geografía. Desafía tu mente identificando banderas y capitales de todo el mundo a través de una interfaz moderna con estética neón.",
      highlights: [
        "Dos modos de juego: Banderas y Capitales",
        "Tres niveles de dificultad: Fácil, Medio y Difícil",
        "Optimizado para iOS y macOS",
        "Biblioteca de estudio organizada por continentes",
        "Interfaz moderna con estética neón",
        "Arquitectura MVVM con @Observable",
        "Datos en tiempo real vía RestCountries API",
        "Sistema de puntuación y estadísticas"
      ]
    },

    features: [
      {
        icon: "🎮",
        title: "Modos de Juego",
        description: "Dos modalidades distintas: identifica países por sus banderas o adivina capitales de países de todo el mundo. Cada modo con mecánicas optimizadas y feedback visual.",
        techs: ["SwiftUI", "NavigationStack", "State Management"]
      },
      {
        icon: "⚙️",
        title: "Niveles de Dificultad",
        description: "Tres niveles ajustables: Fácil (países conocidos), Medio (mix global) y Difícil (países oscuros). Ajusta el desafío según tu nivel de conocimiento geográfico.",
        techs: ["GameLogic", "Difficulty Algorithm", "Adaptive Content"]
      },
      {
        icon: "📱",
        title: "Multiplataforma",
        description: "Experiencia optimizada para iPhone, iPad y Mac. Misma base de código adaptada a cada plataforma con controles nativos y diseño responsivo.",
        techs: ["SwiftUI", "iOS 17+", "macOS 14+"]
      },
      {
        icon: "📚",
        title: "Biblioteca de Estudio",
        description: "Consulta todos los países organizados por continentes antes de jugar. Estudia banderas, capitales y datos clave para mejorar tu rendimiento en los desafíos.",
        techs: ["List Views", "Sections", "Search & Filter"]
      },
      {
        icon: "🌐",
        title: "API en Tiempo Real",
        description: "Datos actualizados desde RestCountries API: banderas de alta calidad, nombres oficiales, capitales y clasificación por regiones. Sin datos hardcodeados.",
        techs: ["URLSession", "Async/Await", "Codable", "REST API"]
      },
      {
        icon: "✨",
        title: "Diseño Neón",
        description: "Estética moderna con gradientes vibrantes, efectos de neón y animaciones fluidas. Dark mode nativo con colores que resaltan la experiencia de juego.",
        techs: ["SwiftUI Animations", "Gradients", "Visual Effects"]
      }
    ],

    techStack: {
      frontend: [
        { name: "SwiftUI", role: "Framework UI declarativo multiplataforma", icon: "swift" },
        { name: "MVVM + @Observable", role: "Arquitectura reactiva con Swift 5.9", icon: "code" },
        { name: "Combine", role: "Reactive framework para manejo de estados", icon: "flow" },
        { name: "NavigationStack", role: "Sistema de navegación moderno", icon: "nav" }
      ],
      apis: [
        { name: "RestCountries API", role: "Base de datos de países y banderas", icon: "api" },
        { name: "URLSession", role: "Cliente HTTP nativo", icon: "network" },
        { name: "Async/Await", role: "Manejo asíncrono de peticiones", icon: "async" }
      ],
      mobile: [
        { name: "iOS 17+", role: "Plataforma móvil principal", icon: "ios" },
        { name: "macOS 14+", role: "Versión de escritorio", icon: "mac" },
        { name: "GameKit", role: "Lógica de juego y puntuación", icon: "game" }
      ]
    },

    installation: {
      requirements: [
        "macOS 14+ (Sonoma o superior)",
        "Xcode 16+ con Swift 5.9",
        "Conexión a Internet para cargar datos de la API",
        "Dispositivo iOS 17+ o simulador"
      ],
      steps: [
        {
          title: "Clonar el Repositorio",
          commands: [
            "git clone https://github.com/josemajr6/aura-quiz.git",
            "cd aura-quiz"
          ]
        },
        {
          title: "Abrir en Xcode",
          commands: [
            "open AuraQuiz.xcodeproj",
            "# O arrastra la carpeta a Xcode"
          ]
        },
        {
          title: "Configurar Destino",
          description: "Selecciona tu dispositivo preferido",
          commands: [
            "# En Xcode:",
            "# Selecciona iPhone 15 Pro (simulador)",
            "# O tu dispositivo físico conectado",
            "# O Mac (My Mac) para versión de escritorio"
          ]
        },
        {
          title: "Ejecutar la App",
          commands: [
            "# Presiona ⌘ + R en Xcode",
            "# O usa Product > Run",
            "# La app descargará datos al iniciar"
          ]
        }
      ]
    },

    gallery: [
      { url: "/images/projects/auraquiz/auraquiz-inicio-mac.webp", caption: "Pantalla de inicio con selección de modo (macOS)" },
      { url: "/images/projects/auraquiz/auraquiz-dificultad.webp", caption: "Selección de nivel de dificultad (iPhone)" },
      { url: "/images/projects/auraquiz/auraquiz-banderas.webp", caption: "Modo de juego: identificar banderas (iPhone)" },
      { url: "/images/projects/auraquiz/auraquiz-capitales.webp", caption: "Modo de juego: adivinar capitales (iPhone)" }
    ]
  },
  {
    slug: "aura-habits",
    title: "Aura Habits",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Swift Charts", "WidgetKit", "iOS", "macOS"],
    description: "Aplicación de seguimiento de hábitos con enfoque minimalista y experiencia fluida.",
    githubUrl: "https://github.com/josemajr6/aura-habits",
    mainImage: "/images/projects/aurahabits/aurahabits.webp",
    galleryImages: [],
    status: "Completed",
    isFeatured: true
  },
  {
    slug: "manyworker-api",
    title: "ManyWorker API",
    category: "Backend",
    tech: ["Spring Boot", "Swagger", "JUNIT"],
    description: "API REST en desarrollo para gestión de tareas y usuarios.",
    githubUrl: "https://github.com/Josemajr6/ManyWorker",
    mainImage: "/images/projects/manyworker/manyworker.webp",
    galleryImages: [],
    status: "In Progress",
    isFeatured: false
  },
  {
    slug: "aura-weather",
    title: "Aura Weather",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Weather API", "CoreLocation", "macOS"],
    description: "Aplicación meteorológica elegante con geolocalización automática y previsión detallada.",
    githubUrl: "https://github.com/josemajr6/aura-weather",
    mainImage: "/images/projects/auraweather/auraweather.webp",
    galleryImages: [],
    status: "Completed"
  },
  {
    slug: "aura-notes",
    title: "Aura Notes",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "SwiftData", "macOS"],
    description: "Editor de notas nativo para macOS con persistencia eficiente y diseño minimalista.",
    githubUrl: "https://github.com/josemajr6/aura-notes",
    mainImage: "/images/projects/auranotes/auranotes.webp",
    galleryImages: [],
    status: "Completed"
  },
  {
    slug: "aura-notch",
    title: "Aura Notch",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "AppKit", "macOS"],
    description: "Utilidad de sistema para macOS que transforma el Notch en área interactiva para controles multimedia.",
    githubUrl: "https://github.com/josemajr6/aura-notch",
    mainImage: "/images/projects/auranotch/auranotch.webp",
    galleryImages: [],
    status: "Completed"
  }
];