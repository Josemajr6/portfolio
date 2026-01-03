"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiSpring, SiAngular, SiPostgresql, SiOracle, SiApache, SiPhp, 
  SiFlutter, SiDart, SiAndroid, SiHtml5, SiCss3, SiLinux, 
  SiDocker, SiGit, SiPostman, SiSwagger, SiTypescript, SiJavascript, 
  SiSwift, SiMysql, SiFirebase, SiGithub, SiWordpress,
  SiEclipseide, SiNpm, SiAndroidstudio, SiXcode,
  SiReact, SiPython, SiMongodb, SiOdoo
} from "react-icons/si";
import { VscCode, VscJson } from "react-icons/vsc"; 
import { SiCsharp } from '@meronex/icons/si';
import { FaJava, FaTerminal, FaServer, FaMobileAlt, FaTools, FaCode } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

const categories = [
  { id: "backend", label: "~/backend", icon: FaServer, color: "text-emerald-400" },
  { id: "mobile", label: "~/mobile", icon: FaMobileAlt, color: "text-cyan-400" },
  { id: "frontend", label: "~/frontend", icon: FaCode, color: "text-pink-400" },
  { id: "languages", label: "~/langs", icon: FaTerminal, color: "text-yellow-400" },
  { id: "tools", label: "~/sysadmin", icon: FaTools, color: "text-orange-400" },
];

const technologies = {
  backend: [
    { name: "Spring Boot", icon: SiSpring, color: "group-hover:text-[#6DB33F]", desc: "Framework Principal" },
    { name: "Oracle DB", icon: SiOracle, color: "group-hover:text-[#F80000]", desc: "Gestión de BBDD" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-[#4169E1]", desc: "Relacional Avanzada" },
    { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]", desc: "Base de Datos" },
    { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-[#47A248]", desc: "NoSQL Database" },
    { name: "Firebase", icon: SiFirebase, color: "group-hover:text-[#FFCA28]", desc: "BaaS / Realtime" },
    { name: "Apache", icon: SiApache, color: "group-hover:text-[#D22128]", desc: "Servidor Web" },
    { name: "API REST", icon: VscJson, color: "group-hover:text-white", desc: "Diseño de APIs" },
    { name: "Odoo ERP", icon: SiOdoo, color: "group-hover:text-[#714B67]", desc: "ERP & CRM System" },
  ],
  mobile: [
    { name: "Android", icon: SiAndroid, color: "group-hover:text-[#3DDC84]", desc: "Nativo (Java/XML)" },
    { name: "Flutter", icon: SiFlutter, color: "group-hover:text-[#02569B]", desc: "Multiplataforma" },
    { name: "Dart", icon: SiDart, color: "group-hover:text-[#0175C2]", desc: "Lenguaje Core" },
    { name: "Swift / iOS", icon: SiSwift, color: "group-hover:text-[#FA7343]", desc: "iOS / macOS" },
    { name: "XML Layouts", icon: FaCode, color: "group-hover:text-orange-400", desc: "Diseño UI Nativo" },
  ],
  frontend: [
    { name: "Angular", icon: SiAngular, color: "group-hover:text-[#DD0031]", desc: "Framework SPA" },
    { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]", desc: "Librería UI" },
    { name: "HTML5", icon: SiHtml5, color: "group-hover:text-[#E34F26]", desc: "Estructura Web" },
    { name: "CSS3", icon: SiCss3, color: "group-hover:text-[#1572B6]", desc: "Estilos Modernos" },
    { name: "WordPress", icon: SiWordpress, color: "group-hover:text-[#21759B]", desc: "CMS / Web" },
  ],
  languages: [
    { name: "Java", icon: FaJava, color: "group-hover:text-[#007396]", desc: "Lenguaje Principal" },
    { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]", desc: "Scripting / Backend" },
    { name: "C#", icon: SiCsharp, color: "group-hover:text-[#A47DDD]", desc: "Desarrollo .NET" },
    { name: "PHP", icon: SiPhp, color: "group-hover:text-[#777BB4]", desc: "Backend Web" },
    { name: "SQL", icon: SiPostgresql, color: "group-hover:text-blue-300", desc: "Consultas BBDD" },
    { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]", desc: "Scripting Web" },
    { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]", desc: "Superset JS" },
  ],
  tools: [
    { name: "Linux", icon: SiLinux, color: "group-hover:text-[#FCC624]", desc: "Admin. Servidores" },
    { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]", desc: "Contenedores" },
    { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]", desc: "Control de Versiones" },
    { name: "GitHub", icon: SiGithub, color: "group-hover:text-white", desc: "Repositorios" },
    { name: "Postman", icon: SiPostman, color: "group-hover:text-[#FF6C37]", desc: "Testing API" },
    { name: "Swagger", icon: SiSwagger, color: "group-hover:text-[#85EA2D]", desc: "Documentación API" },
    { name: "VS Code", icon: VscCode, color: "group-hover:text-[#007ACC]", desc: "Editor de Código" },
    { name: "Visual Studio", icon: DiVisualstudio, color: "group-hover:text-[#5C2D91]", desc: "IDE Profesional" },
    { name: "Android Studio", icon: SiAndroidstudio, color: "group-hover:text-[#3DDC84]", desc: "IDE Android" },
    { name: "Xcode", icon: SiXcode, color: "group-hover:text-[#147EFB]", desc: "IDE Apple" },
    { name: "Eclipse", icon: SiEclipseide, color: "group-hover:text-[#2C2255]", desc: "IDE Java" },
    { name: "NPM", icon: SiNpm, color: "group-hover:text-[#CB3837]", desc: "Gestor Paquetes" },
  ],
};

export default function TechArsenal() {
  const [activeTab, setActiveTab] = useState("backend");

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      
      {/* HEADER TABS */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1 bg-zinc-900/80 border border-white/10 rounded-xl backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 font-mono text-sm ${
                activeTab === cat.id
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
              }`}
            >
              <cat.icon className={activeTab === cat.id ? cat.color : ""} />
              <span>{cat.label}</span>
              {activeTab === cat.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* GRID DE MÓDULOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {technologies[activeTab as keyof typeof technologies].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 10 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="group relative bg-black/40 border border-zinc-800 hover:border-zinc-600 p-4 rounded-xl flex items-center gap-4 cursor-crosshair overflow-hidden transition-all hover:bg-zinc-900/60"
            >
              {/* Scanline hover effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none" />
              
              <div className={`p-3 rounded-lg bg-zinc-900 border border-zinc-800 ${tech.color} text-zinc-500 transition-colors duration-300 group-hover:bg-black`}>
                <tech.icon size={24} />
              </div>

              <div className="flex flex-col">
                <span className="text-zinc-200 font-bold font-mono text-sm tracking-wide group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-zinc-500 font-mono group-hover:text-emerald-500/80">
                  {tech.desc}
                </span>
              </div>

              <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}