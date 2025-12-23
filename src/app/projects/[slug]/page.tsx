
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { projectsData } from "@/data/project";

// Esto genera las rutas estáticas al compilar (Mejora SEO y Performance)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 min-h-screen">
      <Link 
        href="/" 
        className="inline-flex items-center text-zinc-500 hover:text-zinc-100 transition-colors mb-8 group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Volver al inicio
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-indigo-400 font-mono text-sm border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-400">
              {t}
            </span>
          ))}
        </div>

        <p className="text-xl text-zinc-300 leading-relaxed mb-8">
          {project.longDescription || project.description}
        </p>

        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            className="inline-flex items-center bg-zinc-100 text-zinc-900 px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
          >
            <Github className="mr-2 h-5 w-5" /> Ver Código en GitHub
          </a>
        )}
      </div>

      {/* Placeholder visual para la imagen del proyecto */}
      <div className="w-full h-64 md:h-96 bg-zinc-900 rounded-3xl border border-zinc-800 flex items-center justify-center text-zinc-700">
        <span className="text-sm font-mono">Vista previa del proyecto {project.title}</span>
      </div>
    </main>
  );
}