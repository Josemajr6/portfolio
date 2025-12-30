import type { Metadata, Viewport } from "next"; // Importamos Viewport también
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import CyberCursor from "@/components/ui/CyberCursor";
import WelcomeScreen from "@/components/layout/WelcomeScreen";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
    default: "José Manuel Jiménez | Software Developer & Full Stack",
    template: "%s | José Manuel Jiménez",
  },
  description: "Portfolio de José Manuel Jiménez (josemajr6). Desarrollador de Software Full Stack y Móvil especializado en Next.js, React, Backend y soluciones digitales innovadoras.",
  applicationName: "JosemaJr6 Portfolio",
  authors: [{ name: "José Manuel Jiménez", url: "https://github.com/josemajr6" }],
  generator: "Next.js",
  keywords: [
    // Tus keywords solicitadas
    "portfolio jose manuel",
    "josemajr proyectos",
    "josemajr6 proyectos",
    "josemajr6 portfolio",
    "jose manuel dev",
    // Keywords técnicas y de nicho (SEO Boost)
    "Software Developer España",
    "Desarrollador Full Stack Junior",
    "Desarrollador DAM",
    "Experto en Next.js",
    "React Developer",
    "Desarrollo de Apps Móviles",
    "Backend Developer",
    "Programador Web",
    "Ingeniero de Software",
    "Portfolio Interactivo",
    "Cyberpunk UI"
  ],
  // Referencia explícita a los iconos para asegurar que salen en Google
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }, // Opcional si creas un SVG
    ],
    apple: '/apple-touch-icon.png', // Opcional para iPhone
  },
  // Configuración para redes sociales (Open Graph)
  openGraph: {
    title: "José Manuel Jiménez | Portfolio de Desarrollo",
    description: "Descubre mis proyectos en Desarrollo Web y Móvil. Especialista en crear experiencias digitales únicas.",
    url: DOMAIN,
    siteName: "JosemaJr6 Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png", // ¡Recomendación! Crea una captura de tu web y guárdala como public/og-image.png
        width: 1200,
        height: 630,
        alt: "José Manuel Jiménez Portfolio Preview",
      },
    ],
  },
  // Configuración para Twitter
  twitter: {
    card: "summary_large_image",
    title: "José Manuel Jiménez | Software Developer",
    description: "Portfolio profesional. Desarrollo web y móvil de alto nivel.",
    creator: "@josemajr6", // Si tienes Twitter ponlo aquí
    // images: ["/og-image.png"],
  },
  // Instrucciones para robots (GoogleBot, etc.)
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
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <WelcomeScreen />
          <CyberCursor />
          <main className="relative z-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}