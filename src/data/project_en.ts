// src/data/project_en.ts
import { Project } from "./project";

export const projectsDataEN: Project[] = [
  // === AURA MOVIES ===
  {
    slug: "aura-movies",
    title: "Aura Movies",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "TMDB API", "iOS", "Vapor", "MongoDB"],
    description:
      "Cinematic social network for iOS where you can discover movies, write reviews, follow other cinephiles, and receive real-time notifications.",
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
      tagline: "Your ultimate companion for iOS 🍿",
      description:
        "AuraMovies is a complete cinematic social network that combines movie discovery, a review system, social following, and real-time push notifications. Developed with a modern SwiftUI + Vapor Backend architecture.",
      highlights: [
        "4 curated dynamic lists: Trending, Releases, Popular, and Top Rated",
        "Review system with 1-5 stars + 280-character comments",
        "Complete social network with public/private profiles",
        "Real-time push notifications via APNs",
        "Cloud synchronization with Vapor backend + MongoDB",
        "Adaptive dark mode with fluid animations",
        "Smart search for movies and actors",
        "Integrated YouTube trailers",
      ],
    },

    features: [
      {
        icon: "🎬",
        title: "Discover Movies",
        description:
          "Explore movies with 4 dynamic lists: Trending, Releases, Popular, and Top Rated. Navigate through movies, actors, and filmographies with comprehensive TMDB information. Real-time search and browse by 20+ genres.",
        techs: ["TMDB API", "SwiftUI Lists", "Async/Await", "Combine"],
      },
      {
        icon: "⭐",
        title: "Review System",
        description:
          "Rate movies from 1 to 5 stars and write reviews of up to 280 characters. Save favorites, keep a watch history, and access custom statistics with cloud sync.",
        techs: ["MongoDB", "CloudKit", "Core Data", "SwiftData"],
      },
      {
        icon: "🤝",
        title: "Social Network",
        description:
          "Follow users, manage friend requests, and discover movies through the community. Public/private profiles with full privacy control and a complete connections system.",
        techs: ["JWT Auth", "WebSocket", "Vapor", "Real-time Sync"],
      },
      {
        icon: "🔔",
        title: "Real-Time Notifications",
        description:
          "Receive push notifications when someone follows you, accepts requests, or there are trending movies. Smart badge system with auto-sync every 30 seconds.",
        techs: ["APNs", "Background Tasks", "UserNotifications", "Badges"],
      },
      {
        icon: "🎨",
        title: "Premium Experience",
        description:
          "Adaptive dark mode, fluid animations with smooth transitions, haptic effects, and glassmorphism design. Optimized for iPhone and iPad.",
        techs: ["SwiftUI Animations", "Haptics", "Dark Mode", "Responsive"],
      },
      {
        icon: "🔐",
        title: "Secure Authentication",
        description:
          "Sign up with email verification (6-digit codes via Gmail SMTP). Log in with username/email, password recovery, and Sign in with Apple.",
        techs: ["JWT", "OAuth 2.0", "Gmail SMTP", "Keychain"],
      },
    ],

    techStack: {
      frontend: [
        {
          name: "SwiftUI",
          role: "Declarative UI framework by Apple",
          icon: "swift",
        },
        {
          name: "MVVM + @Observable",
          role: "Reactive architecture with Swift 5.9",
          icon: "code",
        },
        {
          name: "Async/Await",
          role: "Native concurrency in Swift",
          icon: "server",
        },
        {
          name: "Combine",
          role: "Reactive framework for streams",
          icon: "flow",
        },
      ],
      backend: [
        { name: "Vapor 4.x", role: "Web framework in Swift", icon: "vapor" },
        { name: "MongoDB 6.0+", role: "NoSQL database", icon: "database" },
        { name: "JWT", role: "Token-based authentication", icon: "lock" },
        {
          name: "Swift 5.9+",
          role: "Type-safe backend language",
          icon: "swift",
        },
      ],
      apis: [
        { name: "TMDB API", role: "Movie database API", icon: "film" },
        { name: "APNs", role: "Apple push notifications service", icon: "bell" },
        {
          name: "Gmail SMTP",
          role: "Transactional verification emails",
          icon: "mail",
        },
        { name: "YouTube API", role: "Integrated trailers", icon: "video" },
      ],
    },

    installation: {
      requirements: [
        "macOS 13+ (Ventura or higher)",
        "Xcode 15+ with Swift 5.9",
        "MongoDB 6.0+ installed",
        "Gmail account with app password",
        "Free TMDB API Key",
      ],
      steps: [
        {
          title: "Clone Repository",
          commands: [
            "git clone https://github.com/josemajr6/aura-movies.git",
            "cd aura-movies",
          ],
        },
        {
          title: "Install MongoDB",
          description: "Via Homebrew on macOS",
          commands: [
            "brew tap mongodb/brew",
            "brew install mongodb-community@6.0",
            "brew services start mongodb-community@6.0",
          ],
        },
        {
          title: "Configure Backend",
          description: "Edit Backend/.env with your credentials",
          commands: [
            "cd Backend",
            "# Create .env with:",
            "# MONGO_HOST=localhost",
            "# SMTP_EMAIL=your-email@gmail.com",
            "# TMDB_API_KEY=your_key_here",
            "swift build",
            "swift run",
          ],
        },
        {
          title: "Run iOS App",
          commands: [
            "cd App",
            "open AuraMovies.xcodeproj",
            "# Press ⌘ + R in Xcode",
          ],
        },
      ],
    },

    gallery: [
      {
        url: "/images/projects/auramovies/auramovies-login.webp",
        caption: "Login with email verification (iPhone)",
      },
      {
        url: "/images/projects/auramovies/auramovies-home.webp",
        caption: "Home screen with curated movie lists (iPhone)",
      },
      {
        url: "/images/projects/auramovies/auramovies-detail.webp",
        caption: "Movie details with trailer and cast (iPhone)",
      },
      {
        url: "/images/projects/auramovies/auramovies-profile.webp",
        caption: "User profile with statistics (iPhone)",
      },
    ],
  },

  // === NEXUS APP ===
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
      "Multiplatform digital platform unifying second-hand marketplace, community bargain tracker, and B2B advertising in a single ecosystem — Final DAM Project.",
    githubUrl: "https://github.com/SomosNexusApp/",
    mainImage: "/images/projects/nexus/nexus.webp",
    galleryImages: [],
    status: "Completed",
    isFeatured: true,

    overview: {
      tagline:
        "The ultimate savings platform: marketplace, bargains, and ads in one ecosystem 🛒⚡",
      description:
        "Nexus (from Latin nexus: connection, link) is a multiplatform digital platform that centralizes in a single application everything a user needs to save: a second-hand marketplace, a community bargain tracker with Spark/Drip voting, and a B2B advertising channel for companies. Developed as the Final Project for the Higher Degree in DAM (IES Francisco Rodríguez Marín), the project features a Spring Boot backend that simultaneously serves the user app (Angular + Ionic), the administration panel, and the info website.",
      highlights: [
        "Backend with 48 REST controllers + WebSocket STOMP in Spring Boot 3.5 / Java 17",
        "Multiplatform user app: Angular 21 + Ionic 8 + Capacitor 8 (native Android)",
        "Administration panel with 19 comprehensive management modules",
        "Secure payments with Stripe Payment Intents (escrow model) and Stripe Checkout",
        "Multilayer authentication: JWT, 2FA TOTP/Email OTP, Google OAuth, reCAPTCHA v3",
        "Real-time chat via WebSocket STOMP with media support",
        "Spark/Drip voting system to rank community bargains",
        "GDPR compliance: soft delete, double opt-in newsletter, unique unsubscribe tokens",
        "AI support assistant with Google Gemini 1.5-flash / Groq LLaMA 3.3-70b",
        "Cloud deployment: Render (Docker) + Vercel CDN + Cloudinary + managed PostgreSQL",
      ],
    },

    features: [
      {
        icon: "🛒",
        title: "Second-Hand Marketplace",
        description:
          "Publish and sell products, vehicles, and offers with image galleries on Cloudinary. Listing types: SALE, DONATION, and EXCHANGE. Unified search with synonym expansion, advanced filters (price, condition, category, GPS distance) and 180-day automatic expiration.",
        techs: [
          "Spring Boot",
          "Angular 21",
          "Cloudinary",
          "GPS / Geolocation",
          "PostgreSQL",
        ],
      },
      {
        icon: "⚡",
        title: "Community Bargain Tracker",
        description:
          "Offer/bargain publishing and voting system with popularity metrics. Users vote Spark (positive) or Drip (negative). A scheduler recalculates the sparkScore every 5 minutes. Specialized sections: flash sales, free items, and travel. Automatic badges: NEW, BARGAIN, PERCENTAGE, FREE, EXPIRES_TODAY.",
        techs: [
          "WebSocket STOMP",
          "Scheduler",
          "Spring Boot",
          "Angular Signals",
        ],
      },
      {
        icon: "💳",
        title: "Secure Payments with Stripe",
        description:
          "Buy products via Stripe Payment Intents with escrow model (funds are held until the buyer confirms receipt). Advertising contracts via Stripe Checkout Sessions. Webhooks with HMAC signature verification. Discount coupons validated at checkout.",
        techs: [
          "Stripe Payment Intents",
          "Stripe Checkout",
          "Webhooks HMAC",
          "Spring Boot",
        ],
      },
      {
        icon: "💬",
        title: "Real-Time Chat",
        description:
          "Private messaging between buyer and seller with support for multiple message types: TEXT, IMAGE, VIDEO, AUDIO, GIF, and PRICE_OFFER (price proposal with real-time accept/reject). The WebSocketAuthInterceptor validates JWT in the STOMP handshake.",
        techs: [
          "Spring WebSocket",
          "STOMP",
          "SockJS",
          "@stomp/stompjs 7.3.0",
        ],
      },
      {
        icon: "🔐",
        title: "Multilayer Authentication",
        description:
          "JWT with version invalidation (jwtVersion), Google OAuth 2.0, 2FA TOTP with QR (ZXing + dev.samstevens.totp), and 6-digit Email OTP. Passwords hashed with BCrypt. Bot protection with reCAPTCHA v3 (0.5 threshold). Onboarding wizard for new users.",
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
        title: "Administration Panel",
        description:
          "Standalone Angular app on a separate subdomain with exclusive ROLE_ADMIN access. 19 modules: dashboard, live stats, users, moderation, refunds, purchases, contracts, coupons, sponsorships, newsletter with automations, bulk notifications, chat support, and immutable audit log.",
        techs: [
          "Angular 21",
          "TypeScript 5.9",
          "Vercel",
          "Spring Security ROLE_ADMIN",
        ],
      },
      {
        icon: "🤖",
        title: "AI Support Assistant",
        description:
          "Integrated support chatbot with two swappable AI providers: Google Gemini 1.5-flash and Groq LLaMA 3.3-70b. If no agent can resolve the query, the system automatically escalates via email to the support team. The admin can take over the chat live from the panel.",
        techs: [
          "Google Gemini 1.5-flash",
          "Groq LLaMA 3.3-70b",
          "Spring Boot",
          "Gmail SMTP",
        ],
      },
      {
        icon: "📢",
        title: "B2B Advertising for Businesses",
        description:
          "Businesses with ROLE_EMPRESA can request BANNER or POST sponsorships. The admin approves and sets the price; the business pays with Stripe Checkout. The sponsored item appears with a 'Sponsored' label until the automatically calculated expiration date.",
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
          role: "Main framework – 48 REST controllers + WebSocket",
          icon: "spring",
        },
        {
          name: "Java 17",
          role: "LTS language with strong typing and JVM",
          icon: "java",
        },
        {
          name: "Spring Security",
          role: "JWT authentication, BCrypt, and role management",
          icon: "lock",
        },
        {
          name: "Spring WebSocket STOMP",
          role: "Bidirectional real-time chat",
          icon: "server",
        },
        {
          name: "Spring Data JPA + Hibernate",
          role: "ORM and relational database management",
          icon: "database",
        },
        {
          name: "Docker",
          role: "Backend containerization on Render.com",
          icon: "docker",
        },
      ],
      frontend: [
        {
          name: "Angular 21",
          role: "Standalone Components and reactive Signals",
          icon: "angular",
        },
        {
          name: "TypeScript 5.9",
          role: "Typed language for the entire client layer",
          icon: "code",
        },
        {
          name: "Ionic 8",
          role: "Native UI components for mobile",
          icon: "mobile",
        },
        {
          name: "Capacitor 8",
          role: "Native compilation Android/iOS from Angular",
          icon: "mobile",
        },
      ],
      apis: [
        {
          name: "PostgreSQL",
          role: "Relational database on Render DB",
          icon: "postgresql",
        },
        {
          name: "Stripe",
          role: "Payment Intents (escrow) + Checkout Sessions + Webhooks",
          icon: "server",
        },
        {
          name: "Cloudinary",
          role: "Storage and CDN of images and videos",
          icon: "server",
        },
        {
          name: "Gmail SMTP",
          role: "Transactional mail and newsletter with STARTTLS",
          icon: "mail",
        },
        {
          name: "Google Gemini",
          role: "AI assistant for user support",
          icon: "code",
        },
        {
          name: "reCAPTCHA v3",
          role: "Bot protection on registration and login",
          icon: "lock",
        },
      ],
      tools: [
        {
          name: "JJWT 0.11.5",
          role: "JWT tokens signed with HMAC-SHA256",
          icon: "lock",
        },
        {
          name: "SpringDoc OpenAPI",
          role: "Automatic API documentation (Swagger UI)",
          icon: "code",
        },
        {
          name: "Astro",
          role: "Informative web and technical docs",
          icon: "code",
        },
        {
          name: "Vercel",
          role: "Global CDN for frontends (app + admin + web)",
          icon: "server",
        },
      ],
    },

    installation: {
      requirements: [
        "Java 17 LTS installed in the system",
        "Node.js 20+ with Angular CLI 21",
        "PostgreSQL 14+ (or access to Render DB)",
        "Stripe account (test mode) with API keys",
        "Cloudinary account for image storage",
        "Environment variables configured in application.properties",
      ],
      steps: [
        {
          title: "Clone the Repository",
          commands: [
            "git clone https://github.com/SomosNexusApp/nexus-backend.git",
            "git clone https://github.com/SomosNexusApp/nexus-angular-app.git",
            "git clone https://github.com/SomosNexusApp/nexus-admin-web-app.git",
          ],
        },
        {
          title: "Configure Backend",
          description:
            "Edit application.properties with your Stripe, Cloudinary, and PostgreSQL credentials",
          commands: [
            "cd nexus-backend",
            "# Configure application.properties:",
            "# spring.datasource.url=jdbc:postgresql://...",
            "# stripe.secret.key=sk_test_...",
            "# cloudinary.url=cloudinary://...",
            "./mvnw spring-boot:run",
          ],
        },
        {
          title: "Start User App",
          description: "Angular 21 + Ionic 8 on port 4200",
          commands: [
            "cd nexus-angular-app",
            "npm install",
            "ng serve --port 4200",
          ],
        },
        {
          title: "Start Administration Panel",
          description: "Angular 21 on port 4201 (separate subdomain)",
          commands: [
            "cd nexus-admin-web-app",
            "npm install",
            "ng serve --port 4201",
          ],
        },
        {
          title: "Build Android (optional)",
          description: "Compile as native Android app with Capacitor",
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
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-inicio-invitado.png",
        caption: "Guest landing page (PC) — read-only access to catalog",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-Lo-ultimo-en-nexus.png",
        caption: "Main feed — Latest on Nexus with recent items (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-Chollos-del-dia.png",
        caption: "Bargains of the Day — dynamic ranking by Spark/Drip votes (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-top-chollos-flash.png",
        caption: "Top Flash Bargains with countdown timer (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-principal-Explora-por-categoria.png",
        caption: "Explore by category (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/registro-normal.png",
        caption: "Registration form with password strength meter (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/inicio-sesion-google.png",
        caption: "Login with Google OAuth 2.0 (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/verificacion-registro.png",
        caption: "Email verification with OTP (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/registro-eleccion-seguridad.png",
        caption: "Onboarding wizard – Security settings (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-vehiculos.png",
        caption: "Vehicle catalog with advanced filters (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/coche-detail.png",
        caption: "Vehicle details with complete datasheet (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/producto-detail.png",
        caption: "Second-hand product details (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/oferta-producto-detail.png",
        caption: "Offer/bargain details with Spark/Drip voting (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-gratis.png",
        caption: "Free Section – products in donation (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-viajes.png",
        caption: "Travel Section with specialized offers (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pantalla-prueba-cerca-de-ti-radar-10km-1coche.png",
        caption: "Bargains 'Near you' – 10 km GPS radar (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-producto-detalles-basicos.png",
        caption: "Publishing wizard – Basic details (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-subir-producto-Fotos-y-descripcion.png",
        caption: "Upload photos and product description (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-producto-publicado.png",
        caption: "Product published successfully (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicar-vehiculo.png",
        caption: "Vehicle publishing wizard (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/pantalla_mensajes_pc.png",
        caption: "Real-time chat with seller (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_fotos_pc.png",
        caption: "Send images in chat (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/envio_propuesta_precio.png",
        caption: "Price proposal with real-time acceptance (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-msg-editoranuncios-reservas/pc/popup_reserva_pc.png",
        caption: "Product reservation popup (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/vista_producto_pc.png",
        caption: "Product view before buying (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/metodo_envio_1_pc.png",
        caption: "Select shipping method (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/datos_pago_pc.png",
        caption: "Stripe payment form (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/confirmacion_pago_pc.png",
        caption: "Successful payment confirmation (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-compra/pc/gmail_compra_auriculares_pc.png",
        caption: "Automatic purchase confirmation email (Gmail)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/perfil-resumen.png",
        caption: "Profile – User activity summary (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/perfil-mis-productos-con-productos.png",
        caption: "Profile – Published products (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/perfil-mis-compras.png",
        caption: "Profile – Purchase history (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/micuenta-seguridad.png",
        caption: "My Account – Security and 2FA settings (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/publicidad-paso-1.png",
        caption: "Sponsorship request – Step 1 (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas/pagar-patrocinio-paso-1.png",
        caption: "Sponsorship contract payment with Stripe Checkout (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/dashboard.png",
        caption: "Administration panel dashboard (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/estadisticas-live-1.png",
        caption: "Live statistics – users and activity (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/usuarios-lista.png",
        caption: "User management with filters (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/productos.png",
        caption: "Moderation of published products (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/reportes-lista.png",
        caption: "Report management and moderation (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/soporte-chat-panel.png",
        caption: "Support panel with real-time chat (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/newsletter-automatizacion-semanal.png",
        caption: "Newsletter – scheduled weekly automation (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-admin/login-2fa-activado.png",
        caption: "Admin panel login with 2FA enabled (PC)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-mobile/pantalla-inicio-invitado.png",
        caption: "Home screen in mobile version (Android)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-mobile/producto-publicado.png",
        caption: "Product published from mobile device (Android)",
      },
      {
        url: "/images/projects/nexus/img-pruebas-mobile/pantalla-categoria-coches.png",
        caption: "Car catalog in mobile version (Android)",
      },
    ],
  },

  // === LEPOKEDEX ===
  {
    slug: "lepokedex",
    title: "LePokedex",
    category: "Android",
    tech: ["Java", "Android Studio", "XML", "Retrofit"],
    description:
      "Native Android application to manage your Pokémon sighting collection with Material Design and detailed statistics.",
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
      tagline: "Manage your own Pokémon sighting collection 📱",
      description:
        "LePokedex is a native Android application developed in Java that allows you to manage your own Pokémon sighting collection. With a modern interface based on Material Design and card views, it offers a clean and organized visual experience, including detailed statistics and classification by elemental types.",
      highlights: [
        "Complete CRUD system with local database",
        "Modern interface with CardView and dynamic colors by type",
        "Dynamic filtering by elemental type with Spinner",
        "Base statistics: HP, Attack, Defense, Speed",
        "Responsive layouts with ConstraintLayout",
        "Intuitive navigation between activities",
        "Official website with documentation: lepokedex.es",
        "APK downloadable from GitHub Releases",
      ],
    },

    features: [
      {
        icon: "🔍",
        title: "Visualization & Filtering",
        description:
          "Interactive list with custom cards and visual indicators for elemental types. Dynamic filtering by Pokémon type with a Spinner that updates the list instantly.",
        techs: ["RecyclerView", "CardView", "Spinner", "Custom Adapters"],
      },
      {
        icon: "📝",
        title: "Complete CRUD",
        description:
          "Complete management system: create new records with a validated form, edit existing data, delete records safely, and consult complete details of each Pokémon.",
        techs: [
          "Local Database",
          "ContentValues",
          "Cursor",
          "Database Helper",
        ],
      },
      {
        icon: "📊",
        title: "Detailed Statistics",
        description:
          "Visualization of base stats for each Pokémon: HP, Attack, Defense, and Speed. Automatic calculation of totals and range validation system.",
        techs: ["Data Binding", "Custom Views", "Validation"],
      },
      {
        icon: "🎨",
        title: "Material Design",
        description:
          "Modern interface with rounded corners, soft shadows, and a coherent color palette. Dynamic colors that change according to the Pokémon's elemental type.",
        techs: ["Material Components", "Custom Drawables", "Styles & Themes"],
      },
      {
        icon: "📱",
        title: "Optimized UX",
        description:
          "Extensive use of ConstraintLayout to guarantee adaptability in different screen sizes. FloatingActionButton for primary actions and fluid navigation.",
        techs: ["ConstraintLayout", "FAB", "Intent Navigation"],
      },
      {
        icon: "🌐",
        title: "Official Web",
        description:
          "Dedicated web portal with extended documentation, news, direct APK download, and guides of use. Responsive design for consultation from any device.",
        techs: ["GitHub Pages", "Responsive Design", "Documentation"],
      },
    ],

    techStack: {
      mobile: [
        {
          name: "Java 8+",
          role: "Main programming language",
          icon: "java",
        },
        {
          name: "Android Studio",
          role: "Official Android development IDE",
          icon: "android",
        },
        {
          name: "XML Layouts",
          role: "Declarative interface design",
          icon: "xml",
        },
        {
          name: "Local Database",
          role: "Data persistence on the device",
          icon: "database",
        },
      ],
      frontend: [
        {
          name: "RecyclerView",
          role: "Efficient handling of lists",
          icon: "list",
        },
        { name: "CardView", role: "Information containers", icon: "card" },
        {
          name: "FloatingActionButton",
          role: "Primary actions button",
          icon: "button",
        },
        {
          name: "ConstraintLayout",
          role: "Adaptive layouts",
          icon: "layout",
        },
      ],
      tools: [
        { name: "Gradle", role: "Build compilation system", icon: "build" },
        { name: "Git", role: "Version control", icon: "git" },
        { name: "Material Design", role: "Design guide rules", icon: "design" },
      ],
    },

    installation: {
      requirements: [
        "Android Studio (Koala / Ladybug or higher)",
        "JDK 8+ installed on the system",
        "Android 6.0+ device or emulator",
        "Git to clone the repository",
      ],
      steps: [
        {
          title: "Clone the Repository",
          commands: [
            "git clone https://github.com/Josemajr6/LePokedex.git",
            "cd LePokedex",
          ],
        },
        {
          title: "Open in Android Studio",
          description: "Import project in Android Studio",
          commands: [
            "# In Android Studio:",
            "# File > Open",
            "# Select folder LePokedex",
          ],
        },
        {
          title: "Sync Gradle",
          description: "Wait for Gradle to download dependencies",
          commands: [
            "# Android Studio does it automatically",
            "# Or manually: Build > Rebuild Project",
          ],
        },
        {
          title: "Run the App",
          description: "Select emulator or physical device connected",
          commands: [
            "# Select recommended Pixel emulator",
            "# Or connect your Android device via USB",
            "# Press Run (Shift + F10)",
          ],
        },
      ],
    },

    gallery: [
      {
        url: "/images/projects/lepokedex/lepokedex-main.webp",
        caption: "Main list with type filter (Android)",
      },
      {
        url: "/images/projects/lepokedex/lepokedex-detail.webp",
        caption: "Pokémon details with statistics (Android)",
      },
      {
        url: "/images/projects/lepokedex/lepokedex-create.webp",
        caption: "Form to register new Pokémon (Android)",
      },
    ],
  },

  // === AURA QUIZ ===
  {
    slug: "aura-quiz",
    title: "Aura Quiz",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "REST Countries API", "GameKit", "iOS", "macOS"],
    description:
      "Global flags and world capitals challenge with game modes, difficulty levels, and a study library organized by continents.",
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
      tagline: "Global flags and world capitals challenge 🌍✨",
      description:
        "AuraQuiz is a multiplatform application designed with SwiftUI that tests your geography knowledge. Challenge your mind by identifying flags and capitals from all over the world through a modern interface with neon aesthetics.",
      highlights: [
        "Two game modes: Flags and Capitals",
        "Three difficulty levels: Easy, Medium, and Hard",
        "Optimized for iOS and macOS",
        "Study library organized by continents",
        "Modern interface with neon aesthetics",
        "MVVM architecture with @Observable",
        "Real-time data via RestCountries API",
        "Score and statistics system",
      ],
    },

    features: [
      {
        icon: "🎮",
        title: "Game Modes",
        description:
          "Two distinct modalities: identify countries by their flags or guess capitals. Each mode has optimized mechanics and visual feedback.",
        techs: ["SwiftUI", "NavigationStack", "State Management"],
      },
      {
        icon: "⚙️",
        title: "Difficulty Levels",
        description:
          "Three adjustable levels: Easy (known countries), Medium (global mix), and Hard (obscure countries). Adjust the challenge to your level.",
        techs: ["GameLogic", "Difficulty Algorithm", "Adaptive Content"],
      },
      {
        icon: "📱",
        title: "Multiplatform",
        description:
          "Optimized experience for iPhone, iPad, and Mac. Same codebase adapted to each platform with native controls and responsive design.",
        techs: ["SwiftUI", "iOS 17+", "macOS 14+"],
      },
      {
        icon: "📚",
        title: "Study Library",
        description:
          "Consult all countries organized by continent before playing. Study flags, capitals, and key data to improve performance in the challenges.",
        techs: ["List Views", "Sections", "Search & Filter"],
      },
      {
        icon: "🌐",
        title: "Real-Time API",
        description:
          "Updated data from RestCountries API: high-quality flags, official names, capitals, and regions. No hardcoded data.",
        techs: ["URLSession", "Async/Await", "Codable", "REST API"],
      },
      {
        icon: "✨",
        title: "Neon Design",
        description:
          "Modern aesthetics with vibrant gradients, neon effects, and smooth animations. Native dark mode with colors that pop.",
        techs: ["SwiftUI Animations", "Gradients", "Visual Effects"],
      },
    ],

    techStack: {
      frontend: [
        {
          name: "SwiftUI",
          role: "Declarative multiplatform UI framework",
          icon: "swift",
        },
        {
          name: "MVVM + @Observable",
          role: "Reactive architecture with Swift 5.9",
          icon: "code",
        },
        {
          name: "Combine",
          role: "Reactive framework for state management",
          icon: "flow",
        },
        {
          name: "NavigationStack",
          role: "Modern navigation system",
          icon: "nav",
        },
      ],
      apis: [
        {
          name: "RestCountries API",
          role: "Countries and flags database API",
          icon: "api",
        },
        { name: "URLSession", role: "Native HTTP client", icon: "network" },
        {
          name: "Async/Await",
          role: "Asynchronous request handling",
          icon: "async",
        },
      ],
      mobile: [
        { name: "iOS 17+", role: "Main mobile platform", icon: "ios" },
        { name: "macOS 14+", role: "Desktop version", icon: "mac" },
        { name: "GameKit", role: "Game logic and scoring", icon: "game" },
      ],
    },

    installation: {
      requirements: [
        "macOS 14+ (Sonoma or higher)",
        "Xcode 16+ with Swift 5.9",
        "Internet connection to load API data",
        "iOS 17+ device or emulator",
      ],
      steps: [
        {
          title: "Clone the Repository",
          commands: [
            "git clone https://github.com/josemajr6/aura-quiz.git",
            "cd aura-quiz",
          ],
        },
        {
          title: "Open in Xcode",
          commands: [
            "open AuraQuiz.xcodeproj",
            "# O drag the folder into Xcode",
          ],
        },
        {
          title: "Configure Destination",
          description: "Select your preferred device",
          commands: [
            "# In Xcode:",
            "# Select iPhone 15 Pro (emulator)",
            "# Or your connected physical device",
            "# Or Mac (My Mac) for desktop version",
          ],
        },
        {
          title: "Run the App",
          commands: [
            "# Press ⌘ + R in Xcode",
            "# Or use Product > Run",
            "# The app downloads data at startup",
          ],
        },
      ],
    },

    gallery: [
      {
        url: "/images/projects/auraquiz/auraquiz-inicio-mac.webp",
        caption: "Start screen with mode selection (macOS)",
      },
      {
        url: "/images/projects/auraquiz/auraquiz-dificultad.webp",
        caption: "Difficulty level selection (iPhone)",
      },
      {
        url: "/images/projects/auraquiz/auraquiz-banderas.webp",
        caption: "Game mode: identify flags (iPhone)",
      },
      {
        url: "/images/projects/auraquiz/auraquiz-capitales.webp",
        caption: "Game mode: guess capitals (iPhone)",
      },
    ],
  },

  // === AURA HABITS ===
  {
    slug: "aura-habits",
    title: "Aura Habits",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Swift Charts", "WidgetKit", "iOS", "macOS"],
    description:
      "Habit tracking application with a minimalist focus and smooth experience.",
    githubUrl: "https://github.com/josemajr6/aura-habits",
    mainImage: "/images/projects/aurahabits/aurahabits.webp",
    galleryImages: [],
    status: "Completed",
    isFeatured: false,
  },

  // === MANYWORKER API ===
  {
    slug: "manyworker-api",
    title: "ManyWorker API",
    category: "Backend",
    tech: ["Spring Boot", "Swagger", "JUNIT"],
    description: "REST API in development for task and user management.",
    githubUrl: "https://github.com/Josemajr6/ManyWorker",
    mainImage: "/images/projects/manyworker/manyworker.webp",
    galleryImages: [],
    status: "In Progress",
    isFeatured: false,
  },

  // === AURA WEATHER ===
  {
    slug: "aura-weather",
    title: "Aura Weather",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "Weather API", "CoreLocation", "macOS"],
    description:
      "Elegant weather application with automatic geolocation and detailed forecast.",
    githubUrl: "https://github.com/josemajr6/aura-weather",
    mainImage: "/images/projects/auraweather/auraweather.webp",
    galleryImages: [],
    status: "Completed",
  },

  // === AURA NOTES ===
  {
    slug: "aura-notes",
    title: "Aura Notes",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "SwiftData", "macOS"],
    description:
      "Native notes editor for macOS with efficient persistence and minimalist design.",
    githubUrl: "https://github.com/josemajr6/aura-notes",
    mainImage: "/images/projects/auranotes/auranotes.webp",
    galleryImages: [],
    status: "Completed",
  },

  // === AURA NOTCH ===
  {
    slug: "aura-notch",
    title: "Aura Notch",
    category: "Swift/iOS",
    tech: ["Swift", "SwiftUI", "AppKit", "macOS"],
    description:
      "macOS system utility that transforms the Notch into an interactive area for media controls.",
    githubUrl: "https://github.com/josemajr6/aura-notch",
    mainImage: "/images/projects/auranotch/auranotch.webp",
    galleryImages: [],
    status: "Completed",
  },

  // === MR REBUJITO ===
  {
    slug: "mr-rebujito",
    title: "Mr. Rebujito",
    category: "Full Stack",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
    description:
      "Comprehensive management platform for Fairs: booths administration, member control, inventory, and official procedures with the Town Hall.",
    githubUrl: "https://github.com/MrRebujito",
    demoUrl: "",
    mainImage: "/images/projects/mrrebujito/mrrebujito-banner.webp",
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
      tagline: "Smart management for your Fair Booth 💃🍷",
      description:
        "Mr. Rebujito digitizes the Fair experience. A Full Stack system connecting managers, the town hall, and members. From official licenses to real-time stock control.",
      highlights: [
        "Secure architecture with Spring Security and JWT",
        "SPA reactive frontend with Angular 17+",
        "Management of procedures and licenses with the Town Hall",
        "Robust relational database with PostgreSQL",
      ],
    },

    techStack: {
      frontend: [
        { name: "Angular 17+", role: "SPA Framework", icon: "angular" },
        { name: "TypeScript", role: "Typed logic", icon: "code" },
        { name: "RxJS", role: "Reactivity", icon: "flow" },
      ],
      backend: [
        { name: "Spring Boot 3", role: "Backend Framework", icon: "spring" },
        { name: "Java 17", role: "Core Language", icon: "java" },
        { name: "Spring Security", role: "JWT Security", icon: "lock" },
      ],
      apis: [
        {
          name: "PostgreSQL",
          role: "Relational Database",
          icon: "postgresql",
        },
        { name: "REST API", role: "JSON Endpoints", icon: "server" },
        { name: "Maven", role: "Dependency Management", icon: "build" },
      ],
    },

    installation: {
      requirements: ["Java JDK 17", "Node.js 18+", "PostgreSQL 14+"],
      steps: [
        {
          title: "Database",
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

  // === GRAN ZONA MARCIANA ===
  {
    slug: "gran-zona-marciana",
    title: "Gran Zone Martian",
    category: "Android",
    tech: ["Java", "Android Studio", "SQLite", "Room", "Material Design"],
    description:
      "Comprehensive system for Reality Show management. Native app with role management (Admin/Contestant), real-time voting, and offline mode.",
    githubUrl: "https://github.com/Josemajr6/GranZonaMarciana",
    demoUrl: "",
    mainImage: "/images/projects/granzonamarciana/granzonamarciana-banner.webp",
    galleryImages: [
      "/images/projects/granzonamarciana/granzonamarciana-home.webp",
      "/images/projects/granzonamarciana/granzonamarciana-login.webp",
      "/images/projects/granzonamarciana/granzonamarciana-vote.webp",
      "/images/projects/granzonamarciana/granzonamarciana-admin.webp",
    ],
    status: "Completed",
    isFeatured: true,

    overview: {
      tagline: "Manage the Reality Show of Gran Zona Marciana 👽",
      description:
        "Native application designed to centralize interactions between production, participants, and the audience. Implements a robust MVC architecture with local persistence via Room, allowing management of multiple editions, live shows, and a secure voting system.",
      highlights: [
        "Adapted MVC architecture with Repository Pattern",
        "Advanced security with BCrypt encryption for credentials",
        "Robust local relational database (SQLite + Room)",
        "Role System: Administrator, Contestant, and Spectator",
        "Complex management of temporal events (Editions and Live Shows)",
      ],
    },

    features: [
      {
        icon: "🔐",
        title: "Security & Roles",
        description:
          "Custom authentication system with session management. The interface adapts dynamically depending on whether the user is an Administrator (full management), Contestant (profile and challenges), or Spectator (votes).",
        techs: ["BCrypt", "Session Mgmt", "Role Based UI"],
      },
      {
        icon: "🗳️",
        title: "Voting System",
        description:
          "Scoring mechanism (1-10) with logical validations to avoid duplicates. Automatic calculation of averages and contestant rankings in real time.",
        techs: ["Business Logic", "Data Validation", "Live Stats"],
      },
      {
        icon: "📅",
        title: "Event Management",
        description:
          "Administrators can create 'Editions' (seasons) and schedule 'Live Shows' within specific date ranges, with cross-temporal validation.",
        techs: ["Date Logic", "Complex CRUD", "Admin Dashboard"],
      },
      {
        icon: "🗄️",
        title: "Offline Persistence",
        description:
          "Use of Room Database (layer over SQLite) to ensure the app works offline, syncing complex data and relationships between entities.",
        techs: ["Room", "SQLite", "DAO", "TypeConverters"],
      },
      {
        icon: "🎨",
        title: "Material Design 3",
        description:
          "Modern interface using the latest Material Design components, with a custom color palette (Green/Purple) and responsive layouts.",
        techs: ["XML Layouts", "CardView", "ConstraintLayout"],
      },
      {
        icon: "📰",
        title: "News & Multimedia",
        description:
          "News module with asynchronous loading of external images using Picasso, keeping the community informed about reality show updates.",
        techs: ["Picasso", "Async Loading", "RecyclerView"],
      },
    ],

    techStack: {
      mobile: [
        { name: "Java 11", role: "Main language", icon: "java" },
        { name: "Android SDK", role: "API 26 (Oreo) to 34", icon: "android" },
        {
          name: "Room / SQLite",
          role: "ORM local persistence",
          icon: "sqlite",
        },
        { name: "Gradle", role: "Build System", icon: "gradle" },
      ],
      frontend: [
        { name: "XML Layouts", role: "Interface design", icon: "xml" },
        { name: "Material Design", role: "Design system", icon: "layout" },
        { name: "Picasso", role: "Image loading", icon: "image" },
      ],
      backend: [
        { name: "BCrypt", role: "Security and Hashing", icon: "lock" },
        { name: "MVC Pattern", role: "Architecture", icon: "structure" },
      ],
    },

    installation: {
      requirements: [
        "Android Studio Ladybug (2024.2.1+)",
        "JDK 21",
        "Android 8.0+ device",
      ],
      steps: [
        {
          title: "Clone Repository",
          commands: [
            "git clone https://github.com/ecentia/gran-zona-marciana.git",
          ],
        },
        {
          title: "Open in Android Studio",
          description: "Sync project with Gradle",
          commands: ["File > Open > Select folder"],
        },
        {
          title: "Run",
          description: "Select Pixel 6 Pro emulator (API 34)",
          commands: ["Shift + F10 (Run)"],
        },
      ],
    },
  },
];
