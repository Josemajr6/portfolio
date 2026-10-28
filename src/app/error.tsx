"use client";
import Link from "next/link";
import { useEffect } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Se muestra si una página falla al renderizar; "reset" vuelve a intentarlo
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { language } = useLanguage();
  const es = language === "es";

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen overflow-x-clip flex flex-col">
      <SiteHeader />

      <main id="main" tabIndex={-1} className="focus:outline-none flex-1 pt-32 sm:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
            {es ? "Algo ha fallado" : "Something went wrong"}
          </p>
          <h1 className="mt-4 display-tight font-bold text-albero text-6xl sm:text-8xl">
            {es ? "Se ha roto algo." : "Something broke."}
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
            {es
              ? "Ha habido un error al cargar esta página. Prueba otra vez y, si sigue fallando, vuelve al inicio."
              : "There was an error loading this page. Try again, and if it keeps failing, head back home."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center h-12 px-6 rounded-full bg-albero text-ink font-bold hover:bg-cream transition-colors"
            >
              {es ? "Reintentar" : "Try again"}
            </button>
            <Link
              href="/"
              className="glass inline-flex items-center h-12 px-6 rounded-full text-cream font-bold hover:text-albero transition-colors"
            >
              {es ? "Volver al inicio" : "Back to home"}
            </Link>
          </div>
          {error.digest && (
            <p className="mt-10 text-sm text-muted">
              {es ? "Código de error" : "Error code"}: <code className="font-mono text-cream">{error.digest}</code>
            </p>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
