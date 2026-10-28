"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CONTACT } from "@/data/contact";

// Hora local de Sevilla. Se comprueba cada segundo para cambiar justo al pasar el minuto
// (React no vuelve a renderizar si el texto es el mismo).
function useSevilleTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Madrid",
      }).format(new Date());
    const first = setTimeout(() => setTime(format()), 0);
    const id = setInterval(() => setTime(format()), 1_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  return time;
}

export default function SiteFooter() {
  const { t } = useLanguage();
  const time = useSevilleTime();

  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="display-tight text-3xl font-bold text-cream">
            josé manuel jiménez<span className="text-albero">.</span>
          </p>
          <p className="mt-3 text-muted">
            {time && (
              <>
                {t.footerTime} <time className="text-cream font-semibold tabular-nums">{time}</time> {t.footerIn}.{" "}
              </>
            )}
            © {new Date().getFullYear()}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-cream">
          <li><a className="hover:text-albero" href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-albero" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-albero" href={`mailto:${CONTACT.email}`}>{t.contactEmail}</a></li>
          <li><a className="hover:text-albero" href="#top">{t.backToTop} ↑</a></li>
        </ul>
      </div>
    </footer>
  );
}
