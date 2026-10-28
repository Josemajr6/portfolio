import { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  title: ReactNode;
  intro?: string;
  as?: "h1" | "h2";
}

export default function SectionHeading({ id, title, intro, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <header className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
      <Tag
        id={id}
        className="display-tight font-bold text-albero text-6xl sm:text-7xl md:text-8xl md:whitespace-nowrap"
      >
        {title}
      </Tag>
      {intro && <p className="text-lg text-muted leading-relaxed max-w-sm md:pb-2">{intro}</p>}
    </header>
  );
}
