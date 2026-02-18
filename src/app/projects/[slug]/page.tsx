"use client";

import { projectsData } from "@/data/project";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, use } from "react";
import BackButton from "@/components/ui/BackButton";
// IMPORTAMOS TUS ICONOS PERSONALIZADOS
import { TechIcons } from "@/components/icons/TechIcons"; 

import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaDatabase, 
  FaLayerGroup, 
  FaServer,
  FaTerminal,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaCog,
  FaChevronRight
} from "react-icons/fa";
import { 
  SiSpring, SiAngular, SiPostgresql, SiFlutter, SiDart, 
  SiAndroid, SiTypescript, SiDocker, SiMysql, SiSwagger,
  SiSwift, SiApple, SiThemoviedatabase, SiMongodb, SiVapor
} from "react-icons/si";

// Helper de iconos
const getTechIcon = (techName: string) => {
  const normalize = techName.toLowerCase();
  
  // Iconos personalizados del archivo TechIcons
  if (normalize.includes("java")) return <TechIcons.Java className="text-orange-600 w-6 h-6" />;
  if (normalize.includes("postgres")) return <TechIcons.PostgreSQL className="text-blue-400 w-6 h-6" />;
  if (normalize.includes("sqlite")) return <TechIcons.SQLite className="text-blue-300 w-6 h-6" />;
  if (normalize.includes("gradle")) return <TechIcons.Gradle className="text-white w-6 h-6" />;
  
  // Iconos de librerías standard
  if (normalize.includes("spring")) return <SiSpring className="text-emerald-500" />;
  if (normalize.includes("angular")) return <SiAngular className="text-red-600" />;
  if (normalize.includes("mysql")) return <SiMysql className="text-blue-500" />;
  if (normalize.includes("mongo")) return <SiMongodb className="text-green-500" />;
  if (normalize.includes("vapor")) return <SiVapor className="text-purple-400" />;
  if (normalize.includes("type")) return <SiTypescript className="text-blue-600" />;
  if (normalize.includes("swagger")) return <SiSwagger className="text-green-600" />;
  if (normalize.includes("docker")) return <SiDocker className="text-blue-500" />;
  if (normalize.includes("flutter")) return <SiFlutter className="text-cyan-400" />;
  if (normalize.includes("dart")) return <SiDart className="text-blue-500" />;
  if (normalize.includes("android")) return <SiAndroid className="text-green-500" />;
  if (normalize.includes("swift")) return <SiSwift className="text-orange-500" />;
  if (normalize.includes("ios")) return <SiApple className="text-gray-100" />;
  if (normalize.includes("tmdb")) return <SiThemoviedatabase className="text-blue-400" />;
  if (normalize.includes("xml")) return <FaCode className="text-blue-300" />;
  if (normalize.includes("retrofit")) return <FaServer className="text-green-400" />;
  if (normalize.includes("room")) return <FaDatabase className="text-yellow-500" />;
  if (normalize.includes("restcountries")) return <FaCode className="text-indigo-400" />;
  if (normalize.includes("gamekit")) return <FaRocket className="text-purple-400" />;
  
  return <FaCode className="text-zinc-500" />; 
};

// === CORRECCIÓN EN MOCKUPS: object-contain ===

// COMPONENTE DE MOCKUP DE IPHONE
const IPhoneMockup = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="relative mx-auto" style={{ width: '300px' }}>
    <div className="relative bg-black rounded-[55px] p-4 shadow-2xl border-[12px] border-zinc-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[25px] z-20"></div>
      {/* CAMBIO: bg-black para que si sobra espacio sea negro, y object-contain */}
      <div className="relative bg-black rounded-[40px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
        <Image src={imageUrl} alt={alt} fill className="object-contain" />
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-white/30 rounded-full"></div>
    </div>
    <div className="absolute -left-[2px] top-[100px] w-[3px] h-[35px] bg-zinc-900 rounded-l"></div>
    <div className="absolute -left-[2px] top-[145px] w-[3px] h-[70px] bg-zinc-900 rounded-l"></div>
    <div className="absolute -right-[2px] top-[150px] w-[3px] h-[90px] bg-zinc-900 rounded-r"></div>
  </div>
);

// COMPONENTE DE MOCKUP DE ANDROID
const AndroidMockup = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="relative mx-auto" style={{ width: '300px' }}>
    <div className="relative bg-zinc-800 rounded-[45px] p-3 shadow-2xl">
      {/* CAMBIO: bg-black y object-contain */}
      <div className="relative bg-black rounded-[38px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
        <Image src={imageUrl} alt={alt} fill className="object-contain" />
      </div>
    </div>
    <div className="absolute -left-[2px] top-[110px] w-[3px] h-[40px] bg-zinc-700 rounded-l"></div>
    <div className="absolute -left-[2px] top-[160px] w-[3px] h-[70px] bg-zinc-700 rounded-l"></div>
    <div className="absolute -right-[2px] top-[140px] w-[3px] h-[80px] bg-zinc-700 rounded-r"></div>
  </div>
);

// COMPONENTE DE VENTANA WEB / MACOS
const DesktopWindowMockup = ({ imageUrl, alt, caption }: { imageUrl: string; alt: string; caption: string }) => (
  <div className="relative w-full max-w-4xl mx-auto group">
    <div className="bg-zinc-900 rounded-t-xl border border-zinc-800 overflow-hidden shadow-2xl transition-colors group-hover:border-zinc-700">
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 flex-1 flex justify-center">
            <div className="bg-zinc-800 px-3 py-1 rounded text-xs text-zinc-500 font-mono truncate max-w-[200px]">
                {caption}
            </div>
        </div>
      </div>
      <div className="relative bg-zinc-950" style={{ aspectRatio: '16/10' }}>
        <Image src={imageUrl} alt={alt} fill className="object-contain" />
      </div>
    </div>
  </div>
);

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectsData.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "tech" | "install">("overview");

  if (!project) {
    notFound();
  }

  const isCompleted = project.status === "Completed";
  const isMacOS = project.tech.some(t => t.toLowerCase().includes("macos"));
  const displayCategory = isMacOS ? "macOS" : project.category;
  const hasDetailedContent = !!(project.overview || project.features || project.techStack || project.installation);

  // Lógica de galería unificada
  const displayedGallery = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : (project.galleryImages || []).map(img => ({
        url: img,
        caption: "Captura de pantalla"
      }));

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden font-sans selection:bg-emerald-500/30">
      
      <BackButton />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* Header Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-zinc-800 pb-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div className="space-y-2 font-mono">
            <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-500">
              <span className="text-emerald-500 font-bold">root</span>
              <span>/</span>
              <span>projects</span>
              <span>/</span>
              <span className="text-zinc-300 font-bold bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">{slug}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-emerald-500 animate-pulse text-xs uppercase tracking-widest">
                <FaDatabase />
                <span>Accessing_Secure_File...</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-1.5 rounded-sm border text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                isMacOS 
                  ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300' 
                  : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
              }`}>
                <FaTerminal size={12}/>
                {displayCategory}
              </span>

              <span className={`px-4 py-1.5 rounded-sm border text-xs font-mono uppercase tracking-widest flex items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                isCompleted 
                  ? 'border-green-500/40 bg-green-500/10 text-green-300' 
                  : 'border-amber-500/40 bg-amber-500/10 text-amber-300'
              }`}>
                <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`} />
                {project.status}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {project.title}
              <span className="text-emerald-500">.</span>
            </h1>

            <div className="relative bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-xl backdrop-blur-sm group hover:border-emerald-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent opacity-50" />
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                {project.overview?.tagline || project.description}
              </p>
            </div>

            {project.overview?.highlights && project.overview.highlights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.overview.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <FaStar className="text-emerald-500 mt-1 shrink-0" size={12}/>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" className="relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-zinc-950 border border-zinc-700 text-white rounded transition-all group hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <FaGithub size={22} className="relative z-10" />
                  <div className="flex flex-col text-left leading-none relative z-10">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-emerald-400">Repository</span>
                    <span className="font-bold">View Source</span>
                  </div>
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" className="relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-emerald-600 text-black rounded transition-all hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <FaExternalLinkAlt size={20} className="relative z-10" />
                  <div className="flex flex-col text-left leading-none relative z-10">
                    <span className="text-[10px] font-mono text-emerald-900 uppercase font-bold">Deploy</span>
                    <span className="font-bold">Live Demo</span>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group w-full"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
              <Image 
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none z-20 mix-blend-overlay opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaLayerGroup className="text-emerald-500 text-xl" />
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">System Architecture</h2>
            <div className="h-[1px] flex-grow bg-zinc-800" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.tech.map((t) => (
              <div key={t} className="group relative bg-zinc-900/40 border border-zinc-800 p-4 rounded hover:bg-zinc-900 hover:border-emerald-500/50 transition-all flex flex-col items-center justify-center gap-3">
                <div className="text-3xl text-zinc-500 group-hover:text-white transition-colors">
                  {getTechIcon(t)}
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider group-hover:text-emerald-400 text-center">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs Content */}
        {hasDetailedContent && (
          <>
            <div className="flex flex-wrap gap-2 mb-12 border-b border-zinc-800 pb-4">
              {[
                { id: "overview", label: "Overview", icon: FaRocket, show: !!project.overview },
                { id: "features", label: "Features", icon: FaLightbulb, show: !!project.features },
                { id: "tech", label: "Tech Stack", icon: FaLayerGroup, show: !!project.techStack },
                { id: "install", label: "Installation", icon: FaCog, show: !!project.installation }
              ].filter(tab => tab.show).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                      : "bg-zinc-900/50 text-zinc-500 border border-zinc-800 hover:text-zinc-300"
                  }`}
                >
                  <tab.icon size={14}/>
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "overview" && project.overview && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8 mb-16"
                >
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {project.overview.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {project.overview.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-emerald-500/30 transition-colors">
                          <FaCheckCircle className="text-emerald-500 mt-1" />
                          <span className="text-zinc-300">{h}</span>
                        </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "features" && project.features && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 gap-8 mb-16"
                >
                  {project.features.map((feature, i) => (
                    <div key={i} className="group relative bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-emerald-500/30 transition-all">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-zinc-400 mb-4 leading-relaxed">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.techs.map((tech) => (
                          <span key={tech} className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "tech" && project.techStack && (
                <motion.div
                  key="tech"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12 mb-16"
                >
                  {Object.entries(project.techStack).map(([category, items]) => (
                    items && items.length > 0 && (
                      <div key={category}>
                        <h3 className="text-2xl font-bold text-white mb-6 capitalize flex items-center gap-3">
                          <FaLayerGroup className="text-emerald-500"/>
                          {category}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {items.map((item: { name: string; role: string }, i: number) => (
                            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-emerald-500/30 transition-all">
                              <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
                              <p className="text-sm text-zinc-400">{item.role}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </motion.div>
              )}

              {activeTab === "install" && project.installation && (
                <motion.div
                  key="install"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8 mb-16"
                >
                   <div className="grid md:grid-cols-2 gap-4">
                      {project.installation.requirements.map((req, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                            <FaCheckCircle className="text-emerald-500" />
                            <span className="text-zinc-300">{req}</span>
                          </div>
                      ))}
                    </div>
                    <div className="space-y-8 mt-8">
                    {project.installation.steps.map((step, i) => (
                      <div key={i} className="space-y-4">
                        <h4 className="text-xl font-bold text-white flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-sm border border-emerald-500/30">
                            {i + 1}
                          </span>
                          {step.title}
                        </h4>
                        {step.description && <p className="text-zinc-400 ml-11">{step.description}</p>}
                        <div className="ml-11 bg-black/50 border border-zinc-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          {step.commands.map((cmd, j) => (
                            <div key={j} className="mb-2 last:mb-0">
                              <div className="flex items-center gap-3">
                                  <span className="text-emerald-500">$</span>
                                  <span className="text-zinc-300">{cmd}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Galería (Actualizada con lógica corregida) */}
        {displayedGallery.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-12">
              <FaServer className="text-emerald-500 text-xl" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Screenshots</h2>
              <div className="h-[1px] flex-grow bg-zinc-800" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {displayedGallery.map((img, idx) => {
                const isMacWindow = img.caption?.includes("(macOS)") || project.category.includes("Full Stack") || project.category.includes("Backend");
                const isAndroid = project.category === "Android";
                
                return (
                  <div key={idx} className="flex flex-col items-center gap-4">
                    {isMacWindow ? (
                      <DesktopWindowMockup imageUrl={img.url} alt={img.caption || ""} caption={img.caption || "Screenshot"} />
                    ) : isAndroid ? (
                      <AndroidMockup imageUrl={img.url} alt={img.caption || ""} />
                    ) : (
                      <IPhoneMockup imageUrl={img.url} alt={img.caption || ""} />
                    )}
                    <p className="text-xs text-zinc-500 font-mono text-center max-w-[300px]">
                      {img.caption}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}