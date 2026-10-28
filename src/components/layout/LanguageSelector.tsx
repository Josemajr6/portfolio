"use client";

import { useLanguage, Language } from "@/components/providers/LanguageProvider";

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  const options: { value: Language; label: string; name: string }[] = [
    { value: "es", label: "es", name: "Español" },
    { value: "en", label: "en", name: "English" },
  ];

  return (
    <div role="group" aria-label={t.languageLabel} className="flex items-center text-sm font-semibold">
      {options.map((option, i) => {
        const isActive = language === option.value;
        return (
          <span key={option.value} className="flex items-center">
            {i > 0 && <span aria-hidden="true" className="text-cream/30 px-0.5">/</span>}
            <button
              type="button"
              lang={option.value}
              onClick={() => setLanguage(option.value)}
              aria-pressed={isActive}
              aria-label={option.name}
              className={`px-1.5 py-1.5 transition-colors ${
                isActive ? "text-albero underline underline-offset-4 decoration-2" : "text-muted hover:text-cream"
              }`}
            >
              {option.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
