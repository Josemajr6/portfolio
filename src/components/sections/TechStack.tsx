"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="py-24">
      <h3 className="text-2xl font-bold mb-12 italic tracking-tight text-zinc-400">// Stack Tecnológico</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Backend - Caja Grande */}
        <div className="md:col-span-2 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
          <h4 className="text-indigo-400 font-mono mb-4">01. Backend & DB</h4>
          <div className="flex flex-wrap gap-3">
            {skills.backend.map(s => <span key={s} className="px-4 py-2 bg-zinc-950 rounded-xl border border-zinc-800 text-sm">{s}</span>)}
          </div>
        </div>

        {/* Mobile - Caja Alta */}
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex flex-col">
          <h4 className="text-emerald-400 font-mono mb-4">02. Mobile</h4>
          <div className="flex flex-col gap-3">
            {skills.mobile.map(s => <span key={s} className="text-zinc-300 font-medium">{s}</span>)}
          </div>
        </div>

        {/* Frontend & Tools - Cajas Simétricas */}
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
          <h4 className="text-amber-400 font-mono mb-4">03. Frontend</h4>
          <div className="flex flex-wrap gap-2">
             {skills.frontend.map(s => <span key={s} className="text-xs text-zinc-400 underline decoration-zinc-700">{s}</span>)}
          </div>
        </div>

        <div className="md:col-span-2 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex items-center justify-between">
          <h4 className="text-zinc-500 font-mono">04. Herramientas</h4>
          <div className="flex gap-4">
            {skills.tools.map(s => <span key={s} className="text-sm font-bold text-zinc-100">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}