"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useLanguage();

  const facts = [
    { label: t.factLocation, value: t.factLocationValue },
    { label: t.factLooking, value: t.factLookingValue },
    { label: t.factLanguages, value: t.factLanguagesValue },
    { label: t.factLicense, value: t.factLicenseValue },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading id="about-title" title={t.aboutTitle} />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
          <Reveal className="space-y-6 text-xl sm:text-2xl leading-snug text-cream">
            <p>{t.aboutText1}</p>
            <p className="text-muted">{t.aboutText2}</p>
            <p>
              <mark className="bg-albero text-ink px-1.5 rounded-sm box-decoration-clone">{t.aboutText3}</mark>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="border-t border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-6 py-4 border-b border-line">
                  <dt className="text-muted">{fact.label}</dt>
                  <dd className="font-semibold text-cream text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-10 mb-4 text-sm font-bold uppercase tracking-[0.14em] text-albero">
              {t.softSkillsTitle}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {t.softSkills.map((skill) => (
                <li key={skill} className="rounded-full border border-cream/25 px-4 py-1.5 text-[15px] text-cream">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
