import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CyberCursor from "@/components/ui/CyberCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Manuel Jiménez | Software Developer",
  description: "Portfolio profesional de Desarrollo de Software Multiplataforma",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* Añadimos suppressHydrationWarning para evitar errores 
       cuando extensiones del navegador (como ColorZilla o Grammarly) 
       modifican el HTML antes de que React cargue.
    */
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30`}
        suppressHydrationWarning
      >
        <CyberCursor />
        {children}
      </body>
    </html>
  );
}