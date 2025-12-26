"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Si hay historial, vuelve atrás (mantiene scroll y contexto). 
    // Si no (ej: abres enlace directo), va a projects.
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/projects');
    }
  };

  return (
    <button 
      onClick={handleBack}
      className="group fixed top-24 left-4 md:left-8 z-50 flex items-center gap-3 px-5 py-3 
                 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-full 
                 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] 
                 transition-all duration-300"
    >
      <div className="p-1 bg-zinc-800 rounded-full text-emerald-500 group-hover:-translate-x-1 transition-transform">
         <FaArrowLeft size={14} />
      </div>
      <span className="font-mono text-sm text-zinc-400 group-hover:text-emerald-400 font-bold tracking-wider uppercase">
        cd ..
      </span>
    </button>
  );
}