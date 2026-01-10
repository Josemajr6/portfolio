"use client";

import { projectsData } from "@/data/project";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, use } from "react";
import BackButton from "@/components/ui/BackButton";
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
  if (normalize.includes("spring")) return <SiSpring className="text-emerald-500" />;
  if (normalize.includes("angular")) return <SiAngular className="text-red-600" />;
  if (normalize.includes("postgres")) return <SiPostgresql className="text-blue-400" />;
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
  if (normalize.includes("java")) return <FaCode className="text-orange-600" />;
  if (normalize.includes("xml")) return <FaCode className="text-blue-300" />;
  if (normalize.includes("retrofit")) return <FaServer className="text-green-400" />;
  if (normalize.includes("sqlite")) return <FaDatabase className="text-yellow-500" />;
  if (normalize.includes("restcountries")) return <FaCode className="text-indigo-400" />;
  if (normalize.includes("gamekit")) return <FaRocket className="text-purple-400" />;
  return <FaCode className="text-zinc-500" />; 
};

// COMPONENTE DE MOCKUP DE IPHONE
const IPhoneMockup = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="relative mx-auto" style={{ width: '300px' }}>
    {/* Cuerpo del iPhone */}
    <div className="relative bg-black rounded-[55px] p-4 shadow-2xl border-[12px] border-zinc-900">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[25px] z-20"></div>
      
      {/* Pantalla */}
      <div className="relative bg-white rounded-[40px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
        <Image 
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[140px] h-[5px] bg-white/30 rounded-full"></div>
    </div>
    
    {/* Botones laterales */}
    <div className="absolute -left-[2px] top-[100px] w-[3px] h-[35px] bg-zinc-900 rounded-l"></div>
    <div className="absolute -left-[2px] top-[145px] w-[3px] h-[70px] bg-zinc-900 rounded-l"></div>
    <div className="absolute -right-[2px] top-[150px] w-[3px] h-[90px] bg-zinc-900 rounded-r"></div>
  </div>
);

// COMPONENTE DE MOCKUP DE ANDROID
const AndroidMockup = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
  <div className="relative mx-auto" style={{ width: '300px' }}>
    {/* Cuerpo del Android */}
    <div className="relative bg-zinc-800 rounded-[45px] p-3 shadow-2xl">
      {/* Pantalla */}
      <div className="relative bg-white rounded-[38px] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
        <Image 
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
    
    {/* Botones laterales */}
    <div className="absolute -left-[2px] top-[110px] w-[3px] h-[40px] bg-zinc-700 rounded-l"></div>
    <div className="absolute -left-[2px] top-[160px] w-[3px] h-[70px] bg-zinc-700 rounded-l"></div>
    <div className="absolute -right-[2px] top-[140px] w-[3px] h-[80px] bg-zinc-700 rounded-r"></div>
  </div>
);

// COMPONENTE DE VENTANA MACOS
const MacWindowMockup = ({ imageUrl, alt, caption }: { imageUrl: string; alt: string; caption: string }) => (
  <div className="relative w-full max-w-4xl mx-auto">
    <div className="bg-zinc-900 rounded-t-xl border border-zinc-800 overflow-hidden shadow-2xl">
      {/* Barra superior de macOS */}
      <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-zinc-500 ml-4">{caption}</span>
      </div>
      {/* Contenido */}
      <div className="relative bg-black" style={{ aspectRatio: '16/10' }}>
        <Image 
          src={imageUrl}
          alt={alt}
          fill
          className="object-contain"
        />
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

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden font-sans selection:bg-emerald-500/30">
      
      <BackButton />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
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
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-emerald-500 z-30" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-emerald-500 z-30" />
            </div>
          </motion.div>
        </div>

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
                    {project.overview.highlights.map((h, i) => {
                      const getHighlightIcon = (text: string) => {
                        const lower = text.toLowerCase();
                        if (lower.includes("lista") || lower.includes("curada")) return <FaLayerGroup className="text-indigo-500" />;
                        if (lower.includes("reseña") || lower.includes("estrella")) return <FaStar className="text-yellow-500" />;
                        if (lower.includes("social") || lower.includes("perfil")) return <FaRocket className="text-cyan-500" />;
                        if (lower.includes("notif") || lower.includes("push")) return <FaLightbulb className="text-amber-500" />;
                        if (lower.includes("nube") || lower.includes("sync")) return <FaServer className="text-emerald-500" />;
                        if (lower.includes("modo") || lower.includes("oscuro")) return <FaCog className="text-purple-500" />;
                        if (lower.includes("búsqueda") || lower.includes("busca")) return <FaTerminal className="text-pink-500" />;
                        if (lower.includes("trailer") || lower.includes("video")) return <FaExternalLinkAlt className="text-red-500" />;
                        if (lower.includes("crud") || lower.includes("gestión")) return <FaDatabase className="text-blue-500" />;
                        if (lower.includes("filtro") || lower.includes("spinner")) return <FaCog className="text-teal-500" />;
                        if (lower.includes("tarjeta") || lower.includes("card")) return <FaLayerGroup className="text-orange-500" />;
                        if (lower.includes("ui") || lower.includes("ux")) return <FaRocket className="text-violet-500" />;
                        if (lower.includes("modo") || lower.includes("dificultad")) return <FaStar className="text-rose-500" />;
                        if (lower.includes("multi") || lower.includes("plataforma")) return <FaCode className="text-fuchsia-500" />;
                        if (lower.includes("biblioteca") || lower.includes("estudio")) return <FaTerminal className="text-lime-500" />;
                        return <FaCheckCircle className="text-emerald-500" />;
                      };

                      return (
                        <div key={i} className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg hover:border-emerald-500/30 transition-colors">
                          {getHighlightIcon(h)}
                          <span className="text-zinc-300">{h}</span>
                        </div>
                      );
                    })}
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
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <FaCog className="text-emerald-500"/>
                      Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.installation.requirements.map((req, i) => {
                        const getReqIcon = (text: string) => {
                          const lower = text.toLowerCase();
                          if (lower.includes("macos") || lower.includes("mac")) return <SiApple className="text-gray-300" />;
                          if (lower.includes("xcode")) return <FaCode className="text-blue-400" />;
                          if (lower.includes("mongodb") || lower.includes("mongo")) return <SiMongodb className="text-green-500" />;
                          if (lower.includes("gmail") || lower.includes("email")) return <FaServer className="text-red-500" />;
                          if (lower.includes("api key") || lower.includes("tmdb")) return <SiThemoviedatabase className="text-cyan-400" />;
                          if (lower.includes("android studio")) return <SiAndroid className="text-green-500" />;
                          if (lower.includes("java")) return <FaCode className="text-orange-600" />;
                          if (lower.includes("swift")) return <SiSwift className="text-orange-500" />;
                          return <FaCheckCircle className="text-emerald-500" />;
                        };

                        return (
                          <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                            {getReqIcon(req)}
                            <span className="text-zinc-300">{req}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-8">
                    {project.installation.steps.map((step, i) => (
                      <div key={i} className="space-y-4">
                        <h4 className="text-xl font-bold text-white flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-sm border border-emerald-500/30">
                            {i + 1}
                          </span>
                          {step.title}
                        </h4>
                        {step.description && (
                          <p className="text-zinc-400 ml-11">{step.description}</p>
                        )}
                        <div className="ml-11 bg-black/50 border border-zinc-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          {step.commands.map((cmd, j) => (
                            <div key={j} className="mb-2 last:mb-0">
                              {cmd.startsWith('#') ? (
                                <span className="text-zinc-600">{cmd}</span>
                              ) : cmd.trim() === '' ? (
                                <br />
                              ) : (
                                <div className="flex items-center gap-3">
                                  <span className="text-emerald-500">$</span>
                                  <span className="text-zinc-300">{cmd}</span>
                                </div>
                              )}
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

        {/* GALERÍA CON MOCKUPS REALES */}
        {project.gallery && project.gallery.length > 0 && (
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
              {project.gallery.map((img, idx) => {
                const isMacWindow = img.caption.includes("(macOS)");
                const isAndroid = project.category === "Android";
                
                return (
                  <div key={idx} className="flex flex-col items-center gap-4">
                    {isMacWindow ? (
                      <MacWindowMockup imageUrl={img.url} alt={img.caption} caption={img.caption} />
                    ) : isAndroid ? (
                      <AndroidMockup imageUrl={img.url} alt={img.caption} />
                    ) : (
                      <IPhoneMockup imageUrl={img.url} alt={img.caption} />
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