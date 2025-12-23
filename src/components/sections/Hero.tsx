"use client";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <span className="text-zinc-500 font-mono tracking-wider text-sm uppercase">
          // Disponible para nuevos proyectos
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight leading-[1.1]">
          {personalData.name.split(" ")[0]} <br />
          <span className="text-zinc-500">{personalData.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-zinc-400 font-light">
          {personalData.role}
        </h2>
        <p className="max-w-xl text-zinc-400 leading-relaxed text-lg">
          {personalData.tagline}
        </p>
      </motion.div>
    </section>
  );
}