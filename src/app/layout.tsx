import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    <html lang="es" className="dark" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} antialiased bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}