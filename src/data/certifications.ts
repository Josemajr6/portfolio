export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdfUrl: string;
  color: string;
  linkText: string;
}

export const certificationsData: Certification[] = [
  {
    id: "udemy-ts",
    title: "Curso Completo de Typescript. Desde las Bases a la Práctica.",
    issuer: "Udemy",
    date: "dic. 2025",
    // Usamos esta URL alternativa de Wikimedia que suele ser más estable
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/1200px-Udemy_logo.svg.png",
    pdfUrl: "/certifications/UC-10ac23a5-2ecc-4a72-9921-629523b4bd5a.pdf",
    color: "group-hover:shadow-[0_0_30px_rgba(164,53,240,0.3)] group-hover:border-purple-500/50",
    linkText: "Ver Certificado"
  },
  {
    id: "santander-ia",
    title: "Google: Inteligencia Artificial y productividad",
    issuer: "Santander",
    date: "feb. 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png",
    pdfUrl: "/certifications/santander_ia_productividad.pdf",
    color: "group-hover:shadow-[0_0_30px_rgba(236,0,0,0.3)] group-hover:border-red-500/50",
    linkText: "Ver Certificado"
  },
  {
    id: "cisco-js",
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "dic. 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    pdfUrl: "/certifications/JavaScript_Essentials_1_certificate_josemajimenezrodriguez8-gmail-com_0c6a1147-97ba-4f83-b178-85feb3d6b812.pdf",
    color: "group-hover:shadow-[0_0_30px_rgba(4,159,217,0.3)] group-hover:border-cyan-500/50",
    linkText: "Mostrar credencial"
  }
];