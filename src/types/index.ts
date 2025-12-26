// src/types/index.ts

export interface Project {
  slug: string;       // ID único para la URL (ej: "app-delivery")
  title: string;
  description: string;
  tech: string[];     // Array de tecnologías ["React", "Node"]
  github: string;     // URL repo
  demo?: string;      // URL demo (opcional)
  category?: string;  // "Mobile", "Backend", etc.
}