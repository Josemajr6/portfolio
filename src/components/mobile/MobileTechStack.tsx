"use client";
import { 
  SiSpring, SiAngular, SiPostgresql, SiOracle, SiApache, SiPhp, 
  SiFlutter, SiDart, SiAndroid, SiHtml5, SiCss3, SiLinux, 
  SiDocker, SiGit, SiPostman, SiSwagger, SiTypescript, SiJavascript, 
  SiSwift, SiMysql, SiFirebase, SiGithub, SiWordpress,
  SiEclipseide, SiNpm, SiAndroidstudio, SiXcode,
  SiReact, SiPython,
  SiMongodb,
  SiOdoo, 
} from "react-icons/si";
import { VscJson, VscCode } from "react-icons/vsc"; 
import { SiCsharp } from '@meronex/icons/si';
import { FaJava, FaServer, FaMobileAlt, FaTools, FaCode } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

// MAPA COMPLETO DE TU ARSENAL (Basado en TechArsenal.tsx)
const fullStackData = [
  {
    category: "Backend & DB",
    icon: FaServer,
    color: "text-emerald-400",
    items: [
      { name: "Spring Boot", icon: SiSpring },
      { name: "Oracle DB", icon: SiOracle },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb},
      { name: "Apache", icon: SiApache },
      { name: "API REST", icon: VscJson },
      { name: "PHP", icon: SiPhp },
      { name: "Odoo", icon: SiOdoo}
    ]
  },
  {
    category: "Mobile Development",
    icon: FaMobileAlt,
    color: "text-cyan-400",
    items: [
      { name: "Android Nativo", icon: SiAndroid },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Swift / iOS", icon: SiSwift },
      { name: "XML Layouts", icon: FaCode },
    ]
  },
  {
    category: "Frontend & Web",
    icon: FaCode,
    color: "text-pink-400",
    items: [
      { name: "Angular", icon: SiAngular },
      { name: "React", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "WordPress", icon: SiWordpress },
    ]
  },
  {
    category: "Lenguajes Core",
    icon: VscCode,
    color: "text-yellow-400",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C#", icon: SiCsharp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: SiPostgresql },
    ]
  },
  {
    category: "DevOps & Herramientas",
    icon: FaTools,
    color: "text-orange-400",
    items: [
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "VS Code", icon: VscCode },
      { name: "Visual Studio", icon: DiVisualstudio },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Xcode", icon: SiXcode },
      { name: "Eclipse", icon: SiEclipseide },
      { name: "NPM", icon: SiNpm },
    ]
  }
];

export default function MobileTechStack() {
  return (
    <div className="w-full space-y-6 pb-4">
      {fullStackData.map((section, idx) => (
        <div key={idx} className="space-y-3">
           <div className="flex items-center gap-2 px-1">
              <section.icon className={`${section.color} text-lg`} />
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">{section.category}</h3>
           </div>
           
           {/* Grid denso de 'Chips' */}
           <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-2">
              {section.items.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 px-3 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-lg active:scale-95 transition-transform">
                    {/* Renderizamos el icono si existe, si no un genérico */}
                    {tech.icon ? <tech.icon className="text-zinc-400 shrink-0" size={14} /> : <FaCode className="text-zinc-500" size={14}/>}
                    <span className="text-[11px] text-zinc-200 font-medium truncate">{tech.name}</span>
                </div>
              ))}
           </div>
        </div>
      ))}
    </div>
  );
}