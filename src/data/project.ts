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
  category:
    | "Spring Boot"
    | "Android"
    | "Flutter"
    | "Swift/iOS"
    | "Backend"
    | "Full Stack";
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

export const projectsDataES: Project[] = [
  // === AURA MOVIES - PROYECTO COMPLETO ===
  {
    slug: "aura-movies",
    title: "Aura Movies",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "TMDB API", "iOS", "Vapor", "MongoDB"],
    description:
      "Red social cinematográfica para iOS donde puedes descubrir películas, escribir reseñas, seguir a otros cinéfilos y recibir notificaciones en tiempo real.",
    githubUrl: "https://github.com/josemajr6/aura-movies",
    mainImage: "/images/projects/auramovies/auramovies.webp",
    galleryImages: [
      "/images/projects/auramovies/auramovies-login.webp",
      "/images/projects/auramovies/auramovies-home.webp",
      "/images/projects/auramovies/auramovies-detail.webp",
      "/images/projects/auramovies/auramovies-profile.webp",
    ],
    status: "Completed",
    isFeatured: true,

    overview: {
      tagline: "Tu compañero cinematográfico definitivo para iOS 🍿",
      description:
        "AuraMovies es una red social cinematográfica completa que combina descubrimiento de películas, sistema de reseñas, seguimiento social y notificaciones push en tiempo real. Desarrollada con arquitectura moderna SwiftUI + Vapor Backend.",
      highlights: [
        "4 listas dinámicas curadas: Trending, Estrenos, Populares y Top Rated",
        "Sistema de reseñas con 1-5 estrellas + comentarios de 280 caracteres",
        "Red social completa con perfiles públicos/privados",
        "Notificaciones push en tiempo real vía APNs",
        "Sincronización en la nube con backend Vapor + MongoDB",
        "Modo oscuro adaptativo con animaciones fluidas",
        "Búsqueda inteligente de películas y actores",
        "Trailers de YouTube integrados",
      ],
    },

    features: [
      {
        icon: "🎬",
        title: "Descubre Películas",
        description:
          "Explora películas con 4 listas dinámicas: Trending, Estrenos, Populares y Top Rated. Navega entre películas, actores y filmografías con información completa de TMDB. Búsqueda en tiempo real y exploración por 20+ géneros.",
        techs: ["TMDB API", "SwiftUI Lists", "Async/Await", "Combine"],
      },
      {
        icon: "⭐",
        title: "Sistema de Reseñas",
        description:
          "Valora películas de 1-5 estrellas y escribe reseñas de hasta 280 caracteres. Guarda favoritas, lleva historial de vistas y accede a estadísticas personalizadas con sincronización en la nube.",
        techs: ["MongoDB", "CloudKit", "Core Data", "SwiftData"],
      },
      {
        icon: "🤝",
        title: "Red Social",
        description:
          "Sigue usuarios, gestiona solicitudes de amistad y descubre películas a través de la comunidad. Perfiles públicos/privados con control total de privacidad y sistema de conexiones completo.",
        techs: ["JWT Auth", "WebSocket", "Vapor", "Real-time Sync"],
      },
      {
        icon: "🔔",
        title: "Notificaciones Real-Time",
        description:
          "Recibe push cuando alguien te sigue, acepta solicitudes o hay películas trending. Sistema de badges inteligente con auto-sincronización cada 30 segundos.",
        techs: ["APNs", "Background Tasks", "UserNotifications", "Badges"],
      },
      {
        icon: "🎨",
        title: "Experiencia Premium",
        description:
          "Modo oscuro adaptativo, animaciones fluidas con transiciones suaves, efectos hápticos y diseño glassmorphism. Optimizado para iPhone y iPad.",
        techs: ["SwiftUI Animations", "Haptics", "Dark Mode", "Responsive"],
      },
      {
        icon: "🔐",
        title: "Autenticación Segura",
        description:
          "Registro con verificación por email (códigos de 6 dígitos vía Gmail SMTP). Login con usuario/email, recuperación de contraseña y Sign in with Apple.",
        techs: ["JWT", "OAuth 2.0", "Gmail SMTP", "Keychain"],
      },
    ],

    techStack: {
      frontend: [
        {
          name: "SwiftUI",
          role: "Framework UI declarativo de Apple",
          icon: "swift",
        },
        {
          name: "MVVM + @Observable",
          role: "Arquitectura reactiva con Swift 5.9",
          icon: "code",
        },
        {
          name: "Async/Await",
          role: "Concurrencia nativa de Swift",
          icon: "server",
        },
        {
          name: "Combine",
          role: "Framework reactivo para streams",
          icon: "flow",
        },
      ],
      backend: [
        { name: "Vapor 4.x", role: "Framework web en Swift", icon: "vapor" },
        { name: "MongoDB 6.0+", role: "Base de datos NoSQL", icon: "database" },
        { name: "JWT", role: "Autenticación con tokens", icon: "lock" },
        {
          name: "Swift 5.9+",
          role: "Lenguaje backend type-safe",
          icon: "swift",
        },
      ],
      apis: [
        { name: "TMDB API", role: "Base de datos de películas", icon: "film" },
        { name: "APNs", role: "Notificaciones push de Apple", icon: "bell" },
        {
          name: "Gmail SMTP",
          role: "Envío de emails de verificación",
          icon: "mail",
        },
        { name: "YouTube API", role: "Trailers integrados", icon: "video" },
      ],
    },

    installation: {
      requirements: [
        "macOS 13+ (Ventura o superior)",
        "Xcode 15+ con Swift 5.9",
        "MongoDB 6.0+ instalado",
        "Cuenta Gmail con contraseña de aplicación",
        "API Key gratuita de TMDB",
      ],
      steps: [
        {
          title: "Clonar Repositorio",
          commands: [
            "git clone https://github.com/josemajr6/aura-movies.git",
            "cd aura-movies",
          ],
        },
        {
          title: "Instalar MongoDB",
          description: "Vía Homebrew en macOS",
          commands: [
            "brew tap mongodb/brew",
            "brew install mongodb-community@6.0",
            "brew services start mongodb-community@6.0",
          ],
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
            "swift run",
          ],
        },
        {
          title: "Ejecutar App iOS",
          commands: [
            "cd App",
            "open AuraMovies.xcodeproj",
            "# Presiona ⌘ + R en Xcode",
          ],
        },
      ],
    },

    gallery: [
      {
        url: "/images/projects/auramovies/auramovies-login.webp",
        caption: "Login con verificación de email (iPhone)",
      },
      {
        url: "/images/projects/auramovies/auramovies-home.webp",
        caption: "Inicio con listas curadas de películas (iPhone)",
      },
      {
        url: "/images/projects/auramovies/auramovies-detail.webp",
        caption: "Detalle de película con trailer y reparto (iPhone)",
      },
      {
        url: "/images/projects/auramovies/auramovies-profile.webp",
        caption: "Perfil de usuario con estadísticas (iPhone)",
      },
    ],
  },

  // === NEXUS APP - PROYECTO COMPLETO ===
  {
    slug: "nexus-app",
    title: "Nexus App",
    category: "Full Stack",
    tech: [
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "JWT",
      "Ionic",
      "Stripe",
      "Docker",
      "TypeScript",
    ],
    description:
      "Plataforma digital multiplataforma que unifica marketplace de segunda mano, chollometro comunitario y publicidad B2B en un único ecosistema — Proyecto Final de DAM.",
    githubUrl: "https://github.com/SomosNexusApp/",
    mainImage: "/images/projects/nexus/nexus.webp",
    galleryImages: [],
    status: "Completed",
    isFeatured: true,

    overview: {
      tagline:
        "La plataforma de ahorro definitiva: marketplace, chollos y publicidad en un solo ecosistema 🛒⚡",
      description:
        "Nexus (del latín nexus: conexión, vínculo) es una plataforma digital multiplataforma que centraliza en una sola aplicación todo lo que un usuario necesita para ahorrar: un marketplace de segunda mano, un chollometro comunitario con sistema de votos Spark/Drip y un canal de publicidad B2B para empresas. Desarrollado como Proyecto Final de Ciclo Formativo de Grado Superior en DAM (IES Francisco Rodríguez Marín), el proyecto cuenta con un backend Spring Boot que sirve simultáneamente a la app de usuario (Angular + Ionic), el panel de administración y la web informativa.",
      highlights: [
        "Backend con 48 controladores REST + WebSocket STOMP en Spring Boot 3.5 / Java 17",
        "App de usuario multiplataforma: Angular 21 + Ionic 8 + Capacitor 8 (Android nativo)",
        "Panel de administración con 19 módulos de gestión completos",
        "Pagos seguros con Stripe Payment Intents (modelo escrow) y Stripe Checkout",
        "Autenticación multicapa: JWT, 2FA TOTP/Email OTP, Google OAuth, reCAPTCHA v3",
        "Chat en tiempo real mediante WebSocket STOMP con soporte multimedia",
        "Sistema de votación Spark/Drip para rankear chollos de la comunidad",
        "Cumplimiento RGPD: borrado suave, double opt-in newsletter, tokens de baja únicos",
        "Asistente IA de soporte con Google Gemini 1.5-flash / Groq LLaMA 3.3-70b",
        "Despliegue cloud: Render (Docker) + Vercel CDN + Cloudinary + PostgreSQL gestionado",
      ],
    },

    features: [
      {
        icon: "🛒",
        title: "Marketplace de Segunda Mano",
        description:
          "Publicación y venta de productos, vehículos y ofertas con galería de imágenes en Cloudinary. Tipos de publicación: VENTA, DONACIÓN e INTERCAMBIO. Búsqueda unificada con expansión de sinónimos, filtros avanzados (precio, condición, categoría, distancia GPS) y vigencia automática de 180 días.",
        techs: [
          "Spring Boot",
          "Angular 21",
          "Cloudinary",
          "GPS / Geolocalización",
          "PostgreSQL",
        ],
      },
      {
        icon: "⚡",
        title: "Chollometro Comunitario",
        description:
          "Sistema de publicación y votación de ofertas/chollos con métricas de popularidad. Los usuarios votan con Spark (positivo) o Drip (negativo). Un scheduler recalcula el sparkScore cada 5 minutos. Secciones especializadas: flash sales, gratuitas y viajes. Badges automáticos: NUEVA, CHOLLAZO, PORCENTAJE, GRATUITA, EXPIRA_HOY.",
        techs: [
          "WebSocket STOMP",
          "Scheduler",
          "Spring Boot",
          "Angular Signals",
        ],
      },
      {
        icon: "💳",
        title: "Pagos Seguros con Stripe",
        description:
          "Compra de productos mediante Stripe Payment Intents con modelo escrow (el dinero queda retenido hasta que el comprador confirma la recepción). Contratos publicitarios mediante Stripe Checkout Sessions. Webhooks con verificación de firma HMAC. Cupones de descuento validados en el checkout.",
        techs: [
          "Stripe Payment Intents",
          "Stripe Checkout",
          "Webhooks HMAC",
          "Spring Boot",
        ],
      },
      {
        icon: "💬",
        title: "Chat en Tiempo Real",
        description:
          "Mensajería privada entre comprador y vendedor con soporte para múltiples tipos de mensaje: TEXTO, IMAGEN, VIDEO, AUDIO, GIF y OFERTA_PRECIO (propuesta de precio con aceptación/rechazo en tiempo real). El WebSocketAuthInterceptor valida el JWT en el handshake STOMP.",
        techs: [
          "Spring WebSocket",
          "STOMP",
          "SockJS",
          "@stomp/stompjs 7.3.0",
        ],
      },
      {
        icon: "🔐",
        title: "Autenticación Multicapa",
        description:
          "JWT con invalidación por versión (jwtVersion), Google OAuth 2.0, 2FA TOTP con QR (ZXing + dev.samstevens.totp) y Email OTP de 6 dígitos. Contraseñas hasheadas con BCrypt. Protección anti-bots con reCAPTCHA v3 (umbral 0.5). Wizard de onboarding para nuevos usuarios.",
        techs: [
          "JJWT 0.11.5",
          "Spring Security",
          "Google OAuth",
          "TOTP",
          "reCAPTCHA v3",
        ],
      },
      {
        icon: "🏢",
        title: "Panel de Administración",
        description:
          "Aplicación Angular independiente en subdominio separado con acceso exclusivo ROLE_ADMIN. 19 módulos: dashboard, estadísticas en vivo, usuarios, moderación, devoluciones, compras, contratos, cupones, patrocinios, newsletter con automaciones, notificaciones masivas, soporte de chat y audit log inmutable.",
        techs: [
          "Angular 21",
          "TypeScript 5.9",
          "Vercel",
          "Spring Security ROLE_ADMIN",
        ],
      },
      {
        icon: "🤖",
        title: "Asistente IA de Soporte",
        description:
          "Chatbot de soporte integrado con dos proveedores de IA intercambiables: Google Gemini 1.5-flash y Groq LLaMA 3.3-70b. Cuando ningún agente puede resolver la consulta, el sistema escala automáticamente por email al equipo de soporte. El admin puede tomar el chat en vivo desde el panel.",
        techs: [
          "Google Gemini 1.5-flash",
          "Groq LLaMA 3.3-70b",
          "Spring Boot",
          "Gmail SMTP",
        ],
      },
      {
        icon: "📢",
        title: "Publicidad B2B para Empresas",
        description:
          "Las empresas con ROLE_EMPRESA pueden solicitar patrocinios de tipo BANNER o PUBLICACION. El admin aprueba y fija el precio; la empresa paga con Stripe Checkout. El ítem patrocinado aparece con etiqueta 'Patrocinado' hasta la fecha de expiración calculada automáticamente.",
        techs: [
          "Stripe Checkout",
          "Spring Boot",
          "Angular 21",
          "Role-Based Access",
        ],
      },
    ],

    techStack: {
      backend: [
        {
          name: "Spring Boot 3.5.13",
          role: "Framework principal – 48 REST controllers + WebSocket",
          icon: "spring",
        },
        {
          name: "Java 17",
          role: "Lenguaje LTS con tipificación fuerte y JVM",
          icon: "java",
        },
        {
          name: "Spring Security",
          role: "Autenticación JWT, BCrypt y gestión de roles",
          icon: "lock",
        },
        {
          name: "Spring WebSocket STOMP",
          role: "Chat en tiempo real bidireccional",
          icon: "server",
        },
        {
          name: "Spring Data JPA + Hibernate",
          role: "ORM y gestión de base de datos relacional",
          icon: "database",
        },
        {
          name: "Docker",
          role: "Contenedorización del backend en Render.com",
          icon: "docker",
        },
      ],
      frontend: [
        {
          name: "Angular 21",
          role: "Standalone Components y Signals reactivos",
          icon: "angular",
        },
        {
          name: "TypeScript 5.9",
          role: "Lenguaje tipado para toda la capa cliente",
          icon: "code",
        },
        {
          name: "Ionic 8",
          role: "Componentes UI nativos para móvil",
          icon: "mobile",
        },
        {
          name: "Capacitor 8",
          role: "Compilación nativa Android/iOS desde Angular",
          icon: "mobile",
        },
      ],
      apis: [
        {
          name: "PostgreSQL",
          role: "Base de datos relacional en Render DB",
          icon: "postgresql",
        },
        {
          name: "Stripe",
          role: "Payment Intents (escrow) + Checkout Sessions + Webhooks",
          icon: "server",
        },
        {
          name: "Cloudinary",
          role: "Almacenamiento y CDN de imágenes y vídeos",
          icon: "server",
        },
        {
          name: "Gmail SMTP",
          role: "Correo transaccional y newsletter con STARTTLS",
          icon: "mail",
        },
        {
          name: "Google Gemini",
          role: "Asistente IA de soporte al usuario",
          icon: "code",
        },
        {
          name: "reCAPTCHA v3",
          role: "Protección anti-bots en registro y login",
          icon: "lock",
        },
      ],
      tools: [
        {
          name: "JJWT 0.11.5",
          role: "Tokens JWT firmados con HMAC-SHA256",
          icon: "lock",
        },
        {
          name: "SpringDoc OpenAPI",
          role: "Documentación automática de la API (Swagger UI)",
          icon: "code",
        },
        {
          name: "Astro",
          role: "Web informativa y documentación técnica",
          icon: "code",
        },
        {
          name: "Vercel",
          role: "CDN global para frontends (app + admin + web)",
          icon: "server",
        },
      ],
    },

    installation: {
      requirements: [
        "Java 17 LTS instalado en el sistema",
        "Node.js 20+ con Angular CLI 21",
        "PostgreSQL 14+ (o acceso a Render DB)",
        "Cuenta Stripe (modo test) con claves API",
        "Cuenta Cloudinary para almacenamiento de imágenes",
        "Variables de entorno configuradas en application.properties",
      ],
      steps: [
        {
          title: "Clonar el Repositorio",
          commands: [
            "git clone https://github.com/SomosNexusApp/nexus-backend.git",
            "git clone https://github.com/SomosNexusApp/nexus-angular-app.git",
            "git clone https://github.com/SomosNexusApp/nexus-admin-web-app.git",
          ],
        },
        {
          title: "Configurar el Backend",
          description:
            "Edita application.properties con tus credenciales de Stripe, Cloudinary y PostgreSQL",
          commands: [
            "cd nexus-backend",
            "# Configura application.properties:",
            "# spring.datasource.url=jdbc:postgresql://...",
            "# stripe.secret.key=sk_test_...",
            "# cloudinary.url=cloudinary://...",
            "./mvnw spring-boot:run",
          ],
        },
        {
          title: "Arrancar la App de Usuario",
          description: "Angular 21 + Ionic 8 en puerto 4200",
          commands: [
            "cd nexus-angular-app",
            "npm install",
            "ng serve --port 4200",
          ],
        },
        {
          title: "Arrancar el Panel de Administración",
          description: "Angular 21 en puerto 4201 (subdominio separado)",
          commands: [
            "cd nexus-admin-web-app",
            "npm install",
            "ng serve --port 4201",
          ],
        },
        {
          title: "Build Android (opcional)",
          description: "Compilar como app nativa Android con Capacitor",
          commands: [
            "cd nexus-angular-app",
            "ng build --configuration=production",
            "npx cap sync android",
            "npx cap open android",
          ],
        },
      ],
    },

    gallery: [
      // — App usuario: Pantallas principales —
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-inicio-invitado.png",
        caption: "Pantalla de inicio para visitantes (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-Lo-ultimo-en-nexus.png",
        caption: "Feed principal – Lo último en Nexus (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-Chollos-del-dia.png",
        caption: "Sección Chollos del Día – ranking Spark/Drip (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-top-chollos-flash.png",
        caption: "Top Chollos Flash con cuenta atrás (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-Explora-por-categoria.png",
        caption: "Explorar por categoría (PC)",
      },
      // — Registro y autenticación —
      {
        url: "/images/projects/nexus/img-pruebas/registro-normal.png",
        caption: "Formulario de registro con medidor de contraseña (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/inicio-sesion-google.png",
        caption: "Login con Google OAuth 2.0 (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/verificacion-registro.png",
        caption: "Verificación de email con OTP (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/registro-eleccion-seguridad.png",
        caption: "Wizard de onboarding – Configuración de seguridad (PC)",
      },
      // — Catálogo y detalle —
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-vehiculos.png",
        caption: "Catálogo de vehículos con filtros avanzados (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/coche-detail.png",
        caption: "Detalle de vehículo con ficha técnica completa (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/producto-detail.png",
        caption: "Detalle de producto de segunda mano (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/oferta-producto-detail.png",
        caption: "Detalle de oferta/chollo con votación Spark/Drip (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-gratis.png",
        caption: "Sección Gratis – productos en donación (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-viajes.png",
        caption: "Sección Viajes con ofertas especializadas (PC)",
      },
      // — Geolocalización —
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-prueba-cerca-de-ti-radar-10km-1coche.png",
        caption: "Búsqueda 'Cerca de ti' – radar GPS 10 km (PC)",
      },
      // — Publicar anuncios —
      {
        url: "/images/projects/nexus/img-pruebas/publicar-producto-detalles-basicos.png",
        caption: "Wizard de publicación – Detalles básicos (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-subir-producto-Fotos-y-descripcion.png",
        caption: "Subir fotos y descripción del producto (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-producto-publicado.png",
        caption: "Producto publicado con éxito (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-vehiculo.png",
        caption: "Wizard de publicación de vehículo (PC)",
      },
      // — Chat y mensajería —
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/pantalla_mensajes_pc.png",
        caption: "Chat en tiempo real con el vendedor (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_fotos_pc.png",
        caption: "Envío de imágenes en el chat (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_propuesta_precio.png",
        caption: "Propuesta de precio con aceptación en tiempo real (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/popup_reserva_pc.png",
        caption: "Popup de reserva del producto (PC)",
      },
      // — Flujo de compra —
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/vista_producto_pc.png",
        caption: "Vista de producto antes de comprar (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/metodo_envio_1_pc.png",
        caption: "Selección de método de envío (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/datos_pago_pc.png",
        caption: "Formulario de pago Stripe (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/confirmacion_pago_pc.png",
        caption: "Confirmación de pago exitoso (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/gmail_compra_auriculares_pc.png",
        caption: "Email automático de confirmación de compra (Gmail)",
      },
      // — Perfil de usuario —
      {
        url: "/images/projects/nexus/img-pruebas/perfil-resumen.png",
        caption: "Perfil – Resumen de actividad del usuario (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/perfil-mis-productos-con-productos.png",
        caption: "Perfil – Mis Productos publicados (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/perfil-mis-compras.png",
        caption: "Perfil – Historial de compras (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/micuenta-seguridad.png",
        caption: "Mi Cuenta – Configuración de seguridad y 2FA (PC)",
      },
      // — Publicidad empresas —
      {
        url: "/images/projects/nexus/img-pruebas/publicidad-paso-1.png",
        caption: "Solicitud de patrocinio – Paso 1 (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pagar-patrocinio-paso-1.png",
        caption: "Pago de contrato publicitario con Stripe Checkout (PC)",
      },
      // — Panel de administración —
      {
        url: "/images/projects/nexus/img-pruebas-admin/dashboard.png",
        caption: "Dashboard del panel de administración (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/estadisticas-live-1.png",
        caption: "Estadísticas en vivo – usuarios y actividad (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/usuarios-lista.png",
        caption: "Gestión de usuarios con filtros (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/productos.png",
        caption: "Moderación de productos publicados (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/reportes-lista.png",
        caption: "Gestión de reportes y moderación (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/soporte-chat-panel.png",
        caption: "Panel de soporte con chat en tiempo real (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/newsletter-automatizacion-semanal.png",
        caption: "Newsletter – automación semanal programada (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/login-2fa-activado.png",
        caption: "Login del panel admin con 2FA activado (PC)",
      },
      // — Vistas móvil —
      {
        url: "/images/projects/nexus/img-pruebas-mobile/pantalla-inicio-invitado.png",
        caption: "Pantalla de inicio en versión móvil (Android)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-mobile/producto-publicado.png",
        caption: "Producto publicado desde dispositivo móvil (Android)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-mobile/pantalla-categoria-coches.png",
        caption: "Catálogo de coches en versión móvil (Android)",
      },
    ],
  },
  {
    slug: "lepokedex",
    title: "LePokedex",
    category: "Android",
    tech: ["Java", "Android Studio", "XML", "Retrofit"],
    description:
      "Aplicación nativa de Android para gestionar tu colección de avistamientos Pokémon con Material Design y estadísticas detalladas.",
    githubUrl: "https://github.com/Josemajr6/LePokedex",
    demoUrl: "https://lepokedex.es",
    mainImage: "/images/projects/lepokedex/lepokedex.webp",
    galleryImages: [
      "/images/projects/lepokedex/lepokedex-main.webp",
      "/images/projects/lepokedex/lepokedex-detail.webp",
      "/images/projects/lepokedex/lepokedex-create.webp",
    ],
    status: "Completed",
    isFeatured: false,

    overview: {
      tagline: "Gestiona tu propia colección de avistamientos Pokémon 📱",
      description:
        "LePokedex es una aplicación nativa de Android desarrollada en Java que permite gestionar tu propia colección de avistamientos Pokémon. Con una interfaz moderna basada en Material Design y tarjetas, ofrece una experiencia visual limpia y organizada, incluyendo estadísticas detalladas y clasificación por tipos elementales.",
      highlights: [
        "Sistema CRUD completo con base de datos local",
        "Interfaz moderna con CardView y colores dinámicos por tipo",
        "Filtrado dinámico por tipo elemental con Spinner",
        "Estadísticas base: HP, Ataque, Defensa, Velocidad",
        "Layouts responsivos con ConstraintLayout",
        "Navegación intuitiva entre actividades",
        "Web oficial con documentación: lepokedex.es",
        "APK descargable desde GitHub Releases",
      ],
    },

    features: [
      {
        icon: "🔍",
        title: "Visualización y Filtrado",
        description:
          "Lista interactiva con tarjetas personalizadas e indicadores visuales de tipos elementales. Filtrado dinámico por tipo de Pokémon con Spinner que actualiza la lista al instante.",
        techs: ["RecyclerView", "CardView", "Spinner", "Custom Adapters"],
      },
      {
        icon: "📝",
        title: "CRUD Completo",
        description:
          "Sistema completo de gestión: crear nuevos registros con formulario validado, editar datos existentes, eliminar registros de forma segura y consultar detalles completos de cada Pokémon.",
        techs: [
          "Base de Datos Local",
          "ContentValues",
          "Cursor",
          "Database Helper",
        ],
      },
      {
        icon: "📊",
        title: "Estadísticas Detalladas",
        description:
          "Visualización de stats base de cada Pokémon: HP, Ataque, Defensa y Velocidad. Cálculo automático de totales y sistema de validación de rangos.",
        techs: ["Data Binding", "Custom Views", "Validation"],
      },
      {
        icon: "🎨",
        title: "Material Design",
        description:
          "Interfaz moderna con bordes redondeados, sombras suaves y paleta de colores coherente. Colores dinámicos que cambian según el tipo elemental del Pokémon.",
        techs: ["Material Components", "Custom Drawables", "Styles & Themes"],
      },
      {
        icon: "📱",
        title: "UX Optimizada",
        description:
          "Uso extensivo de ConstraintLayout para garantizar adaptabilidad en diferentes tamaños de pantalla. FloatingActionButton para acciones principales y navegación fluida.",
        techs: ["ConstraintLayout", "FAB", "Intent Navigation"],
      },
      {
        icon: "🌐",
        title: "Web Oficial",
        description:
          "Portal web dedicado con documentación extendida, novedades, descarga directa del APK y guías de uso. Diseño responsive para consulta desde cualquier dispositivo.",
        techs: ["GitHub Pages", "Responsive Design", "Documentation"],
      },
    ],

    techStack: {
      mobile: [
        {
          name: "Java 8+",
          role: "Lenguaje de programación principal",
          icon: "java",
        },
        {
          name: "Android Studio",
          role: "IDE oficial de desarrollo Android",
          icon: "android",
        },
        {
          name: "XML Layouts",
          role: "Diseño declarativo de interfaces",
          icon: "xml",
        },
        {
          name: "Base de Datos Local",
          role: "Persistencia de datos en el dispositivo",
          icon: "database",
        },
      ],
      frontend: [
        {
          name: "RecyclerView",
          role: "Manejo eficiente de listas",
          icon: "list",
        },
        { name: "CardView", role: "Contenedores de información", icon: "card" },
        {
          name: "FloatingActionButton",
          role: "Acciones principales",
          icon: "button",
        },
        {
          name: "ConstraintLayout",
          role: "Layouts adaptativos",
          icon: "layout",
        },
      ],
      tools: [
        { name: "Gradle", role: "Sistema de compilación", icon: "build" },
        { name: "Git", role: "Control de versiones", icon: "git" },
        { name: "Material Design", role: "Guía de diseño", icon: "design" },
      ],
    },

    installation: {
      requirements: [
        "Android Studio (Koala / Ladybug o superior)",
        "JDK 8+ instalado en el sistema",
        "Dispositivo Android 6.0+ o emulador",
        "Git para clonar el repositorio",
      ],
      steps: [
        {
          title: "Clonar el Repositorio",
          commands: [
            "git clone https://github.com/Josemajr6/LePokedex.git",
            "cd LePokedex",
          ],
        },
        {
          title: "Abrir en Android Studio",
          description: "Importar el proyecto en Android Studio",
          commands: [
            "# En Android Studio:",
            "# File > Open",
            "# Seleccionar la carpeta LePokedex",
          ],
        },
        {
          title: "Sincronizar Gradle",
          description: "Esperar a que Gradle descargue las dependencias",
          commands: [
            "# Android Studio lo hace automáticamente",
            "# O manualmente: Build > Rebuild Project",
          ],
        },
        {
          title: "Ejecutar la App",
          description: "Seleccionar emulador o dispositivo físico",
          commands: [
            "# Selecciona un emulador Pixel recomendado",
            "# O conecta tu dispositivo Android por USB",
            "# Presiona Run (Shift + F10)",
          ],
        },
      ],
    },

    gallery: [
      {
        url: "/images/projects/lepokedex/lepokedex-main.webp",
        caption: "Listado principal con filtro por tipo (Android)",
      },
      {
        url: "/images/projects/lepokedex/lepokedex-detail.webp",
        caption: "Detalle del Pokémon con estadísticas (Android)",
      },
      {
        url: "/images/projects/lepokedex/lepokedex-create.webp",
        caption: "Formulario de registro de nuevo Pokémon (Android)",
      },
    ],
  },
  {
    slug: "aura-quiz",
    title: "Aura Quiz",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "REST Countries API", "GameKit", "iOS", "macOS"],
    description:
      "Desafío global de banderas y capitales mundiales con modos de juego, niveles de dificultad y biblioteca de estudio organizada por continentes.",
    githubUrl: "https://github.com/josemajr6/aura-quiz",
    mainImage: "/images/projects/auraquiz/auraquiz.webp",
    galleryImages: [
      "/images/projects/auraquiz/auraquiz-inicio-mac.webp",
      "/images/projects/auraquiz/auraquiz-dificultad.webp",
      "/images/projects/auraquiz/auraquiz-banderas.webp",
      "/images/projects/auraquiz/auraquiz-capitales.webp",
    ],
    status: "Completed",
    isFeatured: false,

    overview: {
      tagline: "Desafío global de banderas y capitales mundiales 🌍✨",
      description:
        "AuraQuiz es una aplicación multiplataforma diseñada con SwiftUI que pone a prueba tus conocimientos de geografía. Desafía tu mente identificando banderas y capitales de todo el mundo a través de una interfaz moderna con estética neón.",
      highlights: [
        "Dos modos de juego: Banderas y Capitales",
        "Tres niveles de dificultad: Fácil, Medio y Difícil",
        "Optimizado para iOS y macOS",
        "Biblioteca de estudio organizada por continentes",
        "Interfaz moderna con estética neón",
        "Arquitectura MVVM con @Observable",
        "Datos en tiempo real vía RestCountries API",
        "Sistema de puntuación y estadísticas",
      ],
    },

    features: [
      {
        icon: "🎮",
        title: "Modos de Juego",
        description:
          "Dos modalidades distintas: identifica países por sus banderas o adivina capitales de países de todo el mundo. Cada modo con mecánicas optimizadas y feedback visual.",
        techs: ["SwiftUI", "NavigationStack", "State Management"],
      },
      {
        icon: "⚙️",
        title: "Niveles de Dificultad",
        description:
          "Tres niveles ajustables: Fácil (países conocidos), Medio (mix global) y Difícil (países oscuros). Ajusta el desafío según tu nivel de conocimiento geográfico.",
        techs: ["GameLogic", "Difficulty Algorithm", "Adaptive Content"],
      },
      {
        icon: "📱",
        title: "Multiplataforma",
        description:
          "Experiencia optimizada para iPhone, iPad y Mac. Misma base de código adaptada a cada plataforma con controles nativos y diseño responsivo.",
        techs: ["SwiftUI", "iOS 17+", "macOS 14+"],
      },
      {
        icon: "📚",
        title: "Biblioteca de Estudio",
        description:
          "Consulta todos los países organizados por continentes antes de jugar. Estudia banderas, capitales y datos clave para mejorar tu rendimiento en los desafíos.",
        techs: ["List Views", "Sections", "Search & Filter"],
      },
      {
        icon: "🌐",
        title: "API en Tiempo Real",
        description:
          "Datos actualizados desde RestCountries API: banderas de alta calidad, nombres oficiales, capitales y clasificación por regiones. Sin datos hardcodeados.",
        techs: ["URLSession", "Async/Await", "Codable", "REST API"],
      },
      {
        icon: "✨",
        title: "Diseño Neón",
        description:
          "Estética moderna con gradientes vibrantes, efectos de neón y animaciones fluidas. Dark mode nativo con colores que resaltan la experiencia de juego.",
        techs: ["SwiftUI Animations", "Gradients", "Visual Effects"],
      },
    ],

    techStack: {
      frontend: [
        {
          name: "SwiftUI",
          role: "Framework UI declarativo multiplataforma",
          icon: "swift",
        },
        {
          name: "MVVM + @Observable",
          role: "Arquitectura reactiva con Swift 5.9",
          icon: "code",
        },
        {
          name: "Combine",
          role: "Reactive framework para manejo de estados",
          icon: "flow",
        },
        {
          name: "NavigationStack",
          role: "Sistema de navegación moderno",
          icon: "nav",
        },
      ],
      apis: [
        {
          name: "RestCountries API",
          role: "Base de datos de países y banderas",
          icon: "api",
        },
        { name: "URLSession", role: "Cliente HTTP nativo", icon: "network" },
        {
          name: "Async/Await",
          role: "Manejo asíncrono de peticiones",
          icon: "async",
        },
      ],
      mobile: [
        { name: "iOS 17+", role: "Plataforma móvil principal", icon: "ios" },
        { name: "macOS 14+", role: "Versión de escritorio", icon: "mac" },
        { name: "GameKit", role: "Lógica de juego y puntuación", icon: "game" },
      ],
    },

    installation: {
      requirements: [
        "macOS 14+ (Sonoma o superior)",
        "Xcode 16+ con Swift 5.9",
        "Conexión a Internet para cargar datos de la API",
        "Dispositivo iOS 17+ o simulador",
      ],
      steps: [
        {
          title: "Clonar el Repositorio",
          commands: [
            "git clone https://github.com/josemajr6/aura-quiz.git",
            "cd aura-quiz",
          ],
        },
        {
          title: "Abrir en Xcode",
          commands: [
            "open AuraQuiz.xcodeproj",
            "# O arrastra la carpeta a Xcode",
          ],
        },
        {
          title: "Configurar Destino",
          description: "Selecciona tu dispositivo preferido",
          commands: [
            "# En Xcode:",
            "# Selecciona iPhone 15 Pro (simulador)",
            "# O tu dispositivo físico conectado",
            "# O Mac (My Mac) para versión de escritorio",
          ],
        },
        {
          title: "Ejecutar la App",
          commands: [
            "# Presiona ⌘ + R en Xcode",
            "# O usa Product > Run",
            "# La app descargará datos al iniciar",
          ],
        },
      ],
    },

    gallery: [
      {
        url: "/images/projects/auraquiz/auraquiz-inicio-mac.webp",
        caption: "Pantalla de inicio con selección de modo (macOS)",
      },
      {
        url: "/images/projects/auraquiz/auraquiz-dificultad.webp",
        caption: "Selección de nivel de dificultad (iPhone)",
      },
      {
        url: "/images/projects/auraquiz/auraquiz-banderas.webp",
        caption: "Modo de juego: identificar banderas (iPhone)",
      },
      {
        url: "/images/projects/auraquiz/auraquiz-capitales.webp",
        caption: "Modo de juego: adivinar capitales (iPhone)",
      },
    ],
  },
  {
    slug: "aura-habits",
    title: "Aura Habits",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Swift Charts", "WidgetKit", "iOS", "macOS"],
    description:
      "Aplicación de seguimiento de hábitos con enfoque minimalista y experiencia fluida.",
    githubUrl: "https://github.com/josemajr6/aura-habits",
    mainImage: "/images/projects/aurahabits/aurahabits.webp",
    galleryImages: [],
    status: "Completed",
    isFeatured: false,
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
    isFeatured: false,
  },
  {
    slug: "aura-weather",
    title: "Aura Weather",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Weather API", "CoreLocation", "macOS"],
    description:
      "Aplicación meteorológica elegante con geolocalización automática y previsión detallada.",
    githubUrl: "https://github.com/josemajr6/aura-weather",
    mainImage: "/images/projects/auraweather/auraweather.webp",
    galleryImages: [],
    status: "Completed",
  },
  {
    slug: "aura-notes",
    title: "Aura Notes",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "SwiftData", "macOS"],
    description:
      "Editor de notas nativo para macOS con persistencia eficiente y diseño minimalista.",
    githubUrl: "https://github.com/josemajr6/aura-notes",
    mainImage: "/images/projects/auranotes/auranotes.webp",
    galleryImages: [],
    status: "Completed",
  },
  {
    slug: "aura-notch",
    title: "Aura Notch",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "AppKit", "macOS"],
    description:
      "Utilidad de sistema para macOS que transforma el Notch en área interactiva para controles multimedia.",
    githubUrl: "https://github.com/josemajr6/aura-notch",
    mainImage: "/images/projects/auranotch/auranotch.webp",
    galleryImages: [],
    status: "Completed",
  },

  // ... en projectsData

  // === MR REBUJITO - PROYECTO FULL STACK ===
  {
    slug: "mr-rebujito",
    title: "Mr. Rebujito",
    category: "Full Stack",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "JWT"], // Actualizado
    description:
      "Plataforma de gestión integral para Ferias: administración de casetas, control de socios, inventario de productos y trámites oficiales con el Ayuntamiento.",
    githubUrl: "https://github.com/MrRebujito",
    demoUrl: "",

    // 1. FOTO DE PORTADA CORREGIDA
    mainImage: "/images/projects/mrrebujito/mrrebujito-banner.webp",

    // 2. GALERÍA (Asegúrate que estos archivos existen en esa ruta)
    galleryImages: [
      "/images/projects/mrrebujito/mrrebujito-login.webp",
      "/images/projects/mrrebujito/mrrebujito-home.webp",
      "/images/projects/mrrebujito/mrrebujito-casetas.webp",
      "/images/projects/mrrebujito/mrrebujito-admin.webp",
      "/images/projects/mrrebujito/mrrebujito-logo.webp",
    ],

    status: "Completed",
    isFeatured: true,

    overview: {
      tagline: "Gestión inteligente para tu Caseta de Feria 💃🍷",
      description:
        "Mr. Rebujito digitaliza la experiencia de la Feria. Sistema Full Stack que conecta gestores, ayuntamiento y socios. Desde licencias oficiales hasta control de stock en tiempo real.",
      highlights: [
        "Arquitectura segura con Spring Security y JWT",
        "Frontend SPA reactivo con Angular 17+",
        "Gestión de trámites y licencias con el Ayuntamiento",
        "Base de datos relacional robusta con PostgreSQL",
      ],
    },

    techStack: {
      frontend: [
        { name: "Angular 17+", role: "Framework SPA", icon: "angular" },
        { name: "TypeScript", role: "Lógica tipada", icon: "code" },
        { name: "RxJS", role: "Reactividad", icon: "flow" },
      ],
      backend: [
        { name: "Spring Boot 3", role: "Backend Framework", icon: "spring" },
        { name: "Java 17", role: "Lenguaje Core", icon: "java" }, // AHORA USARÁ EL ICONO DE LA TAZA
        { name: "Spring Security", role: "Seguridad JWT", icon: "lock" },
      ],
      apis: [
        {
          name: "PostgreSQL",
          role: "Base de Datos Relacional",
          icon: "postgresql",
        }, // NUEVO ICONO
        { name: "REST API", role: "Endpoints JSON", icon: "server" },
        { name: "Maven", role: "Gestión dependencias", icon: "build" },
      ],
    },

    installation: {
      requirements: ["Java JDK 17", "Node.js 18+", "PostgreSQL 14+"], // Actualizado
      steps: [
        {
          title: "Base de Datos",
          commands: ["createdb mrrebujito", "psql -d mrrebujito -f schema.sql"],
        },
        {
          title: "Backend",
          commands: ["./mvnw spring-boot:run"],
        },
        {
          title: "Frontend",
          commands: ["npm install", "ng serve"],
        },
      ],
    },
  },
  // === GRAN ZONA MARCIANA - ANDROID NATIVE ===
  {
    slug: "gran-zona-marciana",
    title: "Gran Zona Marciana",
    category: "Android",
    tech: ["Java", "Android Studio", "SQLite", "Room", "Material Design"],
    description:
      "Sistema integral para la gestión de Reality Shows. App nativa con gestión de roles (Admin/Concursante), votaciones en tiempo real y modo offline.",
    githubUrl: "https://github.com/Josemajr6/GranZonaMarciana", // Ajusta si es tu fork
    demoUrl: "",

    // FOTOS (Asegúrate de tenerlas en public/images/projects/granzonamarciana/)
    mainImage: "/images/projects/granzonamarciana/granzonamarciana-banner.webp",
    galleryImages: [
      "/images/projects/granzonamarciana/granzonamarciana-home.webp",
      "/images/projects/granzonamarciana/granzonamarciana-login.webp",
      "/images/projects/granzonamarciana/granzonamarciana-vote.webp",
      "/images/projects/granzonamarciana/granzonamarciana-admin.webp",
    ],

    status: "Completed",
    isFeatured: true, // Ponlo true si quieres que salga en la home

    overview: {
      tagline: "Gestiona el Reality Show de Gran Zona Marciana 👽",
      description:
        "Aplicación nativa diseñada para centralizar la interacción entre producción, participantes y audiencia. Implementa una arquitectura robusta MVC con persistencia local mediante Room, permitiendo la gestión de múltiples ediciones, galas en directo y un sistema de votaciones seguro.",
      highlights: [
        "Arquitectura MVC adaptada con Repository Pattern",
        "Seguridad avanzada con encriptación BCrypt para credenciales",
        "Base de datos local relacional robusta (SQLite + Room)",
        "Sistema de Roles: Administrador, Concursante y Espectador",
        "Gestión compleja de eventos temporales (Ediciones y Galas)",
      ],
    },

    features: [
      {
        icon: "🔐",
        title: "Seguridad y Roles",
        description:
          "Sistema de autenticación propio con gestión de sesiones. La interfaz se adapta dinámicamente según si el usuario es Administrador (gestión total), Concursante (perfil y retos) o Espectador (votos).",
        techs: ["BCrypt", "Session Mgmt", "Role Based UI"],
      },
      {
        icon: "🗳️",
        title: "Sistema de Votación",
        description:
          "Mecanismo de puntuación (1-10) con validaciones lógicas para evitar duplicados. Cálculo automático de medias y rankings de concursantes en tiempo real.",
        techs: ["Business Logic", "Data Validation", "Live Stats"],
      },
      {
        icon: "📅",
        title: "Gestión de Eventos",
        description:
          "Los administradores pueden crear 'Ediciones' (temporadas) y programar 'Galas' dentro de rangos de fechas específicos, con validación temporal cruzada.",
        techs: ["Date Logic", "Complex CRUD", "Admin Dashboard"],
      },
      {
        icon: "🗄️",
        title: "Persistencia Offline",
        description:
          "Uso de Room Database (capa sobre SQLite) para garantizar que la aplicación funcione sin conexión, sincronizando datos complejos y relaciones entre entidades.",
        techs: ["Room", "SQLite", "DAO", "TypeConverters"],
      },
      {
        icon: "🎨",
        title: "Material Design 3",
        description:
          "Interfaz moderna utilizando los últimos componentes de Material Design, con paleta de colores personalizada (Verde/Morado) y layouts responsivos.",
        techs: ["XML Layouts", "CardView", "ConstraintLayout"],
      },
      {
        icon: "📰",
        title: "Noticias y Multimedia",
        description:
          "Módulo de noticias con carga asíncrona de imágenes externas utilizando Picasso, manteniendo a la comunidad informada sobre las novedades del reality.",
        techs: ["Picasso", "Async Loading", "RecyclerView"],
      },
    ],

    techStack: {
      mobile: [
        { name: "Java 11", role: "Lenguaje principal", icon: "java" },
        { name: "Android SDK", role: "API 26 (Oreo) a 34", icon: "android" },
        {
          name: "Room / SQLite",
          role: "Persistencia local ORM",
          icon: "sqlite",
        }, // Usará el icono nuevo
        { name: "Gradle", role: "Build System", icon: "gradle" }, // Usará el icono nuevo
      ],
      frontend: [
        { name: "XML Layouts", role: "Diseño de interfaz", icon: "xml" }, // Asegúrate que xml exista en techIcons o usa HTML como fallback
        { name: "Material Design", role: "Sistema de diseño", icon: "layout" },
        { name: "Picasso", role: "Carga de imágenes", icon: "image" },
      ],
      backend: [
        { name: "BCrypt", role: "Seguridad y Hashing", icon: "lock" },
        { name: "MVC Pattern", role: "Arquitectura", icon: "structure" },
      ],
    },

    installation: {
      requirements: [
        "Android Studio Ladybug (2024.2.1+)",
        "JDK 21",
        "Dispositivo Android 8.0+",
      ],
      steps: [
        {
          title: "Clonar Repositorio",
          commands: [
            "git clone https://github.com/ecentia/gran-zona-marciana.git",
          ],
        },
        {
          title: "Abrir en Android Studio",
          description: "Sincronizar el proyecto con Gradle",
          commands: ["File > Open > Seleccionar carpeta"],
        },
        {
          title: "Ejecutar",
          description: "Seleccionar emulador Pixel 6 Pro (API 34)",
          commands: ["Shift + F10 (Run)"],
        },
      ],
    },
  },
];

export const projectsData = projectsDataES;

