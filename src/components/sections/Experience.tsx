"use client";
import { experienceDataES, experienceDataEN, Experience as ExperienceItem } from "@/data/experience";
import { useLanguage } from "@/components/providers/LanguageProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Experience() {
  const { t, language } = useLanguage();
  const data = language === "es" ? experienceDataES : experienceDataEN;

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading id="experience-title" title={t.experienceTitle} />

        <Group title={t.workSection} items={data.filter((item) => item.type === "work")} />
        <div className="h-16" />
        <Group title={t.educationSection} items={data.filter((item) => item.type === "education")} />
      </div>
    </section>
  );
}

function Group({ title, items }: { title: string; items: ExperienceItem[] }) {
  const { t } = useLanguage();

  return (
    <div className="grid md:grid-cols-[12rem_1fr] gap-4 md:gap-10">
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-albero md:pt-7">{title}</h3>

      <ol className="border-t border-line">
        {items.map((item) => (
          <li key={item.id} className="border-b border-line">
            <Reveal>
              <article className="grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2 py-6">
                <div>
                  <h4 className="display-tight text-3xl sm:text-4xl font-bold text-cream">{item.company}</h4>
                  <p className="mt-2 text-lg font-semibold text-cream/90">
                    {item.role}
                    {item.location && <span className="font-normal text-muted"> · {item.location}</span>}
                  </p>

                  {item.description.length > 0 && (
                    <ul className="mt-3 space-y-1 text-muted leading-relaxed">
                      {item.description.map((line) => (
                        <li key={line} className="flex gap-3">
                          <span aria-hidden="true" className="text-albero">—</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.techs && item.techs.length > 0 && (
                    <p className="mt-3 text-sm text-cream/70">{item.techs.join(" · ")}</p>
                  )}
                </div>

                <div className="sm:text-right order-first sm:order-none">
                  <p className="text-[15px] font-semibold tabular-nums text-muted">{item.period}</p>
                  {item.inProgress && (
                    <p className="mt-2 inline-block rounded-full bg-albero px-3 py-0.5 text-sm font-bold text-ink">
                      {t.inProgress}
                    </p>
                  )}
                  {item.grade && (
                    <p className="mt-2 text-[15px] text-cream">
                      {t.averageGrade} <strong className="text-albero text-lg">{item.grade}</strong>
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
