import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/theme");

const config: Config = {
  content: [
    // IMPORTANTE: Esta línea es necesaria para que Tailwind detecte tus clases en src
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      animation: {
        // Animaciones personalizadas para tu Portfolio
        shine: "shine 2s infinite linear",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()], // Activamos el plugin que tenías importado
};

export default config;