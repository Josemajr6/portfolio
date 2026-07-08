import type { Metadata, Viewport } from "next"; // Importamos Viewport también
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import CyberCursor from "@/components/ui/CyberCursor";
import WelcomeScreen from "@/components/layout/WelcomeScreen";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";


// Configuración de fuentes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// --- SEO PROFESIONAL ---
// Define aquí tu URL real cuando la tengas (ej: https://josemajr6.dev)
// Si no la tienes aún, usa la de Vercel, pero cámbiala antes de producción.
const DOMAIN = "https://josemajr6.me";

export const viewport: Viewport = {
  themeColor: "#09090b", // Coincide con bg-zinc-950
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "José Manuel Jiménez | Desarrollador Full Stack · Sevilla",
    template: "%s | José Manuel Jiménez",
  },
  description:
    "Portfolio de José Manuel Jiménez Rodríguez (josemajr6), desarrollador Full Stack de Sevilla especializado en Spring Boot, Angular, Laravel y desarrollo móvil. Proyectos reales y experiencia profesional.",
  applicationName: "José Manuel Jiménez Portfolio",
  authors: [
    { name: "José Manuel Jiménez Rodríguez", url: "https://github.com/josemajr6" },
    { name: "josemajr6", url: DOMAIN },
  ],
  generator: "Next.js",
  creator: "José Manuel Jiménez Rodríguez",
  publisher: "José Manuel Jiménez Rodríguez",
  keywords: [
    // Nombre completo — señal de identidad principal
    "Jose Manuel Jimenez",
    "José Manuel Jiménez",
    "José Manuel Jiménez Rodríguez",
    "josemajr6",
    "josemajr portfolio",
    "josemajr6 portfolio",
    "josemajr6 proyectos",
    "jose manuel dev",
    // Localización
    "desarrollador Sevilla",
    "desarrollador Arahal",
    "programador Sevilla",
    "full stack Sevilla",
    "developer Spain Sevilla",
    // Stack real
    "desarrollador Spring Boot",
    "desarrollador Angular",
    "desarrollador Laravel",
    "desarrollador Full Stack Junior",
    "Desarrollador DAM",
    "Desarrollo Aplicaciones Multiplataforma",
    // Genéricas
    "portfolio desarrollador web",
    "programador web España",
    "Backend Developer Junior",
    "Desarrollador Junior España",
    "Angular developer junior",
    "Spring Boot developer",
  ],
  // Canonical URL
  alternates: {
    canonical: DOMAIN,
  },
  // Iconos
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  // Open Graph
  openGraph: {
    title: "José Manuel Jiménez | Desarrollador Full Stack · Sevilla",
    description:
      "Desarrollador Full Stack de Sevilla. Spring Boot, Angular, Laravel y desarrollo móvil. Portfolio con proyectos reales y experiencia profesional.",
    url: DOMAIN,
    siteName: "José Manuel Jiménez Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "José Manuel Jiménez — Desarrollador Full Stack Sevilla",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "José Manuel Jiménez | Desarrollador Full Stack · Sevilla",
    description: "Portfolio de José Manuel Jiménez Rodríguez. Proyectos reales con Spring Boot, Angular y Laravel.",
    creator: "@josemajr6",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "José Manuel Jiménez Rodríguez",
    alternateName: ["josemajr6", "Jose Manuel Jimenez", "Josema Jiménez"],
    url: "https://josemajr6.me",
    sameAs: [
      "https://github.com/josemajr6",
      "https://linkedin.com/in/josemajr6",
    ],
    jobTitle: "Desarrollador Full Stack",
    worksFor: {
      "@type": "Organization",
      name: "Everybind",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sevilla",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Spring Boot",
      "Angular",
      "Laravel",
      "PostgreSQL",
      "Java",
      "TypeScript",
      "WordPress",
      "SEO",
      "Desarrollo Full Stack",
    ],
  };

  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider>
            <CyberCursor />
            <main className="relative z-0">{children}</main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
