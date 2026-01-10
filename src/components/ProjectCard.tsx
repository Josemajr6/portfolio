"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaCloudSun, FaDesktop, FaGlobeAmericas, FaServer, FaDatabase } from "react-icons/fa";
import { 
  SiSpring, SiAngular, SiPostgresql, SiFlutter, SiDart, 
  SiAndroid, SiTypescript, SiDocker, SiMysql, SiSwagger,
  SiSwift, SiApple, SiThemoviedatabase, SiVapor, SiMongodb
} from "react-icons/si";

import { Project } from "@/data/project";

const getTechIcon = (techName: string) => {
  const normalize = techName.toLowerCase();
  if (normalize.includes("spring")) return <SiSpring className="text-emerald-500" />;
  if (normalize.includes("angular")) return <SiAngular className="text-red-600" />;
  if (normalize.includes("postgres")) return <SiPostgresql className="text-blue-400" />;
  if (normalize.includes("mysql")) return <SiMysql className="text-blue-500" />;
  if (normalize.includes("mongo")) return <SiMongodb className="text-green-500" />;
  if (normalize.includes("vapor")) return <SiVapor className="text-purple-400" />;
  if (normalize.includes("react")) return <SiTypescript className="text-blue-400" />;
  if (normalize.includes("type")) return <SiTypescript className="text-blue-600" />;
  if (normalize.includes("java")) return <FaCode className="text-orange-600" />;
  if (normalize.includes("swagger")) return <SiSwagger className="text-green-600" />;
  if (normalize.includes("docker")) return <SiDocker className="text-blue-500" />;
  if (normalize.includes("flutter")) return <SiFlutter className="text-cyan-400" />;
  if (normalize.includes("dart")) return <SiDart className="text-blue-500" />;
  if (normalize.includes("android")) return <SiAndroid className="text-green-500" />;
  if (normalize.includes("swift")) return <SiSwift className="text-orange-500" />;
  if (normalize.includes("ios")) return <SiApple className="text-gray-100" />;
  if (normalize.includes("macos")) return <FaDesktop className="text-gray-300" />;
  if (normalize.includes("tmdb")) return <SiThemoviedatabase className="text-blue-400" />;
  if (normalize.includes("weather")) return <FaCloudSun className="text-yellow-400" />;
  if (normalize.includes("rest countries") || normalize.includes("restcountries")) return <FaGlobeAmericas className="text-green-400" />;
  if (normalize.includes("xml")) return <FaCode className="text-blue-300" />;
  if (normalize.includes("retrofit")) return <FaServer className="text-green-400" />;
  if (normalize.includes("sqlite")) return <FaDatabase className="text-yellow-500" />;
  if (normalize.includes("gamekit")) return <FaCode className="text-purple-400" />;
  if (normalize.includes("visionos")) return <SiApple className="text-indigo-400" />;
  return <FaCode className="text-zinc-500" />; 
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isCompleted = project.status === "Completed";
  
  // Lista de proyectos que necesitan 'contain'
  const projectsWithContain = [
    "nexus-app", 
    "manyworker-api", 
    "aura-notch",
    "moneyflow"
  ];

  const useContainMode = projectsWithContain.includes(project.slug);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative w-full h-[600px] bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 transition-colors duration-500 overflow-hidden flex flex-col"
    >
      {/* HUD Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-700 group-hover:border-emerald-400 transition-colors z-20" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-zinc-700 group-hover:border-emerald-400 transition-colors z-20" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-zinc-700 group-hover:border-emerald-400 transition-colors z-20" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-700 group-hover:border-emerald-400 transition-colors z-20" />
      
      {/* Header Terminal */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800 z-10">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${isCompleted ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          <span className="font-mono text-xs text-emerald-500 tracking-widest">
            PRJ-0{index + 1} // {project.category.toUpperCase()}
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-500">SECURE_DATA</span>
      </div>

      {/* Main Image Container */}
      <div className="relative h-72 w-full overflow-hidden border-b border-zinc-800 bg-black group-hover:h-64 transition-all duration-500 ease-in-out">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        
        {/* Scanlines */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />
        
        <Image
          src={project.mainImage} 
          alt={project.title}
          fill
          className={`
            transition-all duration-700
            ${useContainMode 
              ? "object-contain p-4 opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
              : "object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
            }
          `}
        />
        
        {/* Badge Status */}
        <div className={`
          absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm border text-[10px] font-mono z-20
          ${isCompleted 
            ? "border-emerald-500/30 text-emerald-400" 
            : "border-amber-500/30 text-amber-400 animate-pulse"}
        `}>
          STATUS: {project.status.toUpperCase()}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow relative bg-zinc-950/90">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10">
          <Link href={`/projects/${project.slug}`} className="group/title block w-fit">
            <h3 className="text-2xl font-bold text-zinc-100 font-mono tracking-tight group-hover/title:text-emerald-400 transition-colors mb-2 flex items-center gap-3">
              {project.title}
              <FaExternalLinkAlt size={14} className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all" />
            </h3>
          </Link>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-mono border-l-2 border-zinc-800 pl-3 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto relative z-10">
          <div className="text-[10px] text-zinc-600 font-mono mb-2 uppercase tracking-wider">
            Used_Technologies:
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((t) => (
              <div key={t} className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors cursor-help" title={t}>
                <span className="text-lg">{getTechIcon(t)}</span>
                <span className="text-[10px] font-mono">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-zinc-900 border border-zinc-700 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 text-zinc-300 text-xs font-mono uppercase tracking-wider transition-all"
              >
                <FaGithub size={14} /> Source_Code
              </a>
            )}
            <Link 
              href={`/projects/${project.slug}`}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-zinc-100 text-zinc-950 border border-zinc-100 hover:bg-white font-bold text-xs font-mono uppercase tracking-wider transition-all"
            >
              View_Details &gt;
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}