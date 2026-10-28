"use client";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { projectsDataES } from "@/data/project";
import { CONTACT } from "@/data/contact";

// Insignia circular con la foto y un texto que gira alrededor
function PhotoBadge({ text }: { text: string }) {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 -rotate-6">
      <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 w-full h-full animate-badge">
        <defs>
          <path id="badge-circle" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#f5c451" />
        {/* textLength reparte el texto por toda la circunferencia (2·π·82 ≈ 515) */}
        <text className="fill-[#13213f] font-sans font-bold uppercase" fontSize="15">
          <textPath href="#badge-circle" textLength="510" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] rounded-full overflow-hidden ring-4 ring-[#13213f]">
        <Image
          src="/avatar.webp"
          alt="José Manuel Jiménez Rodríguez"
          fill
          priority
          sizes="120px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  const facts = [
    t.factDam,
    t.factCompanies,
    `${projectsDataES.length} ${t.factProjects}`,
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="pt-32 sm:pt-40 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative">
          <div className="mb-8 lg:mb-0 lg:absolute lg:right-0 lg:-top-24">
            <PhotoBadge text={t.heroBadge} />
          </div>
          <h1
            id="hero-title"
            className="display-tight font-bold text-albero text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[7.4rem]"
          >
            {t.heroHello}
            <br />
            <span className="text-cream">{t.heroLine}</span>
          </h1>
        </div>

        <div className="mt-10 sm:mt-14 grid md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-end">
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl">{t.heroIntro}</p>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#work"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-cream text-ink font-bold hover:bg-albero transition-colors"
            >
              {t.heroCtaWork} <span aria-hidden="true">↓</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="glass inline-flex items-center gap-2 h-12 px-6 rounded-full text-cream font-bold hover:text-albero transition-colors"
            >
              {t.heroCtaEmail}
            </a>
          </div>
        </div>

        <ul className="mt-14 sm:mt-20 pt-6 border-t border-line flex flex-wrap gap-x-3 gap-y-2 text-[15px] font-medium text-cream">
          {facts.map((fact, i) => (
            <li key={fact} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="text-albero">✦</span>}
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
