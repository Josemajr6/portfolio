"use client";

import { useLanguage, Language } from "@/components/providers/LanguageProvider";
import { motion } from "framer-motion";

interface LanguageSelectorProps {
  id?: string;
}

export default function LanguageSelector({ id = "desktop" }: LanguageSelectorProps) {
  const { language, setLanguage, mounted } = useLanguage();

  const options: { value: Language; label: string }[] = [
    { value: "es", label: "ES" },
    { value: "en", label: "EN" },
  ];

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-0.5 rounded-lg border bg-zinc-900/50 border-white/5 font-mono text-[10px] opacity-40 select-none">
        <span className="px-2.5 py-1 text-zinc-500 font-bold">ES</span>
        <span className="px-2.5 py-1 text-zinc-500 font-bold">EN</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 p-0.5 rounded-lg border bg-zinc-900/50 border-white/5 relative overflow-hidden font-mono text-[10px] select-none">
      {options.map((option) => {
        const isActive = language === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setLanguage(option.value)}
            className={`relative px-2.5 py-1 rounded transition-colors duration-300 font-bold outline-none ${
              isActive ? "text-black" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`activeLanguage-${id}`}
                className="absolute inset-0 bg-emerald-500 rounded shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
