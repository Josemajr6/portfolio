"use client";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function BackButton() {
  const router = useRouter();
  const { language } = useLanguage();

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
      type="button"
      onClick={handleBack}
      className="glass group inline-flex items-center gap-2 h-10 px-4 rounded-full text-cream font-semibold hover:text-albero transition-colors"
    >
      <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
      {language === 'es' ? 'Volver' : 'Back'}
    </button>
  );
}
