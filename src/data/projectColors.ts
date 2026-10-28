// Color de fondo de cada proyecto en las tarjetas (texto siempre en tinta oscura)
const PROJECT_COLORS: Record<string, string> = {
  "nexus-app": "#cbbcff",
  "mr-rebujito": "#ffd98a",
  "aura-movies": "#ffb8a6",
  "gran-zona-marciana": "#b9eccb",
  lepokedex: "#ffc4d6",
  "aura-quiz": "#a9dcff",
  "aura-habits": "#d6f19a",
  "manyworker-api": "#e2d6c4",
  "aura-weather": "#9fe3ea",
  "aura-notes": "#f6e39a",
  "aura-notch": "#d9d2ff",
};

const FALLBACK = ["#cbbcff", "#ffd98a", "#b9eccb", "#ffb8a6", "#a9dcff"];

export const projectColor = (slug: string, index = 0) =>
  PROJECT_COLORS[slug] ?? FALLBACK[index % FALLBACK.length];
