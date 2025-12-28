import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Cambiamos Geist por fuentes más "Cyber"
import "./globals.css";

import CyberCursor from "@/components/ui/CyberCursor";
import WelcomeScreen from "@/components/layout/WelcomeScreen";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

// Configuración de fuentes para solucionar los errores "Cannot find name"
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

export const metadata: Metadata = {
  title: "José Manuel Jiménez | Software Developer",
  description: "Portfolio profesional de Desarrollo de Software Multiplataforma",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        /* Aquí usamos las variables que acabamos de definir arriba.
           He añadido 'font-sans' por defecto para el texto general.
        */
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* La pantalla de bienvenida se encarga de su propia lógica de sesión */}
          <WelcomeScreen />
          
          <CyberCursor />
          
          {/* El contenido de la web */}
          <main className="relative z-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}