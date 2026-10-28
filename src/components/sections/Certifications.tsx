"use client";
import { certificationsDataES, certificationsDataEN } from "@/data/certifications";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  const { language, t } = useLanguage();
  const certificationsData = language === "es" ? certificationsDataES : certificationsDataEN;

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading id="certifications-title" title={t.certificationsTitle} />

        <ul className="border-t border-line">
          {certificationsData.map((cert) => (
            <li key={cert.id} className="border-b border-line">
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] sm:grid-cols-[7rem_1fr_14rem_auto] items-center gap-x-6 gap-y-1 py-5"
              >
                <span className="hidden sm:block text-[15px] tabular-nums text-muted">{cert.date}</span>
                <span className="text-xl sm:text-2xl font-semibold text-cream group-hover:text-albero transition-colors">
                  {cert.title}
                  <span className="sm:hidden block mt-1 text-sm font-normal text-muted">
                    {cert.issuer} · {cert.date}
                  </span>
                </span>
                <span className="hidden sm:block text-muted">{cert.issuer}</span>
                <span className="text-sm font-semibold text-albero whitespace-nowrap">
                  <span className="hidden md:inline">{t.viewCredential} </span>
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only md:hidden">{t.viewCredential}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
