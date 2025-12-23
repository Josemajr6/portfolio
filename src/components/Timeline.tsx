"use client";
import { experienceData } from "@/data/experience";

export default function Timeline() {
  return (
    <div className="relative border-l border-zinc-800 ml-3 space-y-12">
      {experienceData.map((item) => (
        <div key={item.id} className="relative pl-8 group">
          {/* Dot animado */}
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-zinc-600 group-hover:bg-indigo-500 transition-colors ring-4 ring-zinc-950" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-lg font-bold text-zinc-100">{item.role}</h3>
            <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              {item.period}
            </span>
          </div>
          
          <p className="text-indigo-400 text-sm font-medium mb-2">{item.company}</p>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}