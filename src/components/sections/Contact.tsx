"use client";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { CONTACT } from "@/data/contact";

export default function Contact() {
  const { t, cvUrl } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const links = [
    { label: t.contactPhone, value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}`, external: false },
    { label: "LinkedIn", value: "in/josemajr6", href: CONTACT.linkedin, external: true },
    { label: "GitHub", value: "josemajr6", href: CONTACT.github, external: true },
    { label: t.cv, value: t.downloadCV, href: cvUrl, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-[2.5rem] bg-albero text-ink px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
          <h2 id="contact-title" className="display-tight font-bold text-6xl sm:text-8xl md:text-9xl">
            {t.contactTitle}
          </h2>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink/80 leading-relaxed">{t.contactText}</p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-display font-bold tracking-tight text-xl sm:text-3xl md:text-4xl break-all link-underline"
            >
              {CONTACT.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="self-start sm:self-auto shrink-0 h-11 px-5 rounded-full bg-ink text-cream text-sm font-bold hover:bg-ink/85 transition-colors"
            >
              {copied ? t.copied : t.copyEmail}
            </button>
            <span role="status" className="sr-only">
              {copied ? t.copied : ""}
            </span>
          </div>

          <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/15 rounded-2xl overflow-hidden">
            {links.map((link) => (
              <li key={link.label} className="bg-albero">
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block p-4 sm:p-5 h-full hover:bg-ink hover:text-cream transition-colors"
                >
                  <span className="block text-sm font-semibold opacity-70">{link.label}</span>
                  <span className="mt-1 block font-bold">
                    {link.value} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
