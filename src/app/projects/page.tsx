
import ProjectsSection from "@/components/ProjectsSection";
import Section from "@/components/Section";
import Link from "next/link"; // <--- Importante
import { FaDatabase, FaArrowLeft, FaTerminal } from "react-icons/fa"; // <--- Añadimos iconos

export const metadata = {
  title: "Proyectos | José Manuel",
  description: "Archivo completo de proyectos y desarrollo de software.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-200 overflow-hidden selection:bg-emerald-500/30">
      
      {/* --- BOTÓN DE RETROCESO (NUEVO) --- */}
      <div className="absolute top-8 left-6 md:left-12 z-50">
        <Link 
          href="/" 
          className="group flex items-center gap-3 px-4 py-2 bg-black/50 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all backdrop-blur-sm"
        >
          <FaArrowLeft className="text-zinc-500 group-hover:text-emerald-400 group-hover:-translate-x-1 transition-transform" size={12} />
          <span className="font-mono text-xs text-zinc-400 group-hover:text-emerald-400 uppercase tracking-widest">
            cd /home
          </span>
        </Link>
      </div>

      {/* Header de la página interna */}
      <section className="relative pt-32 pb-20 px-6">
         <div className="max-w-7xl mx-auto border-b border-zinc-800 pb-8">
            
            {/* Decoración breadcrumb */}
            <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs mb-6">
                <FaTerminal size={10} />
                <span>root</span>
                <span className="text-zinc-700">/</span>
                <span className="text-emerald-500">projects</span>
            </div>

            <div className="flex items-center gap-3 text-emerald-500 mb-4 font-mono text-sm animate-pulse">
                <FaDatabase />
                <span>DATABASE_ACCESS // GRANTED</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                Archivo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Proyectos</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg font-light">
                Acceso completo al historial de desarrollo. Utiliza la terminal de comandos inferior para filtrar por tecnología o categoría.
            </p>
         </div>
      </section>

      {/* Grid de Proyectos */}
      <Section id="archive" className="pt-10 pb-32">
        <ProjectsSection /> 
      </Section>
      
    </main>
  );
}