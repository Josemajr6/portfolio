"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-albero focus:px-5 focus:py-3 focus:font-bold focus:text-ink"
    >
      {t.skipToContent}
    </a>
  );
}
