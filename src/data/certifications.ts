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
    id: "udemy-flutter",
    title: "Curso completo de Flutter y Dart.",
    issuer: "Udemy",
    date: "may. 2026",
    // Usamos esta URL alternativa de Wikimedia que suele ser más estable
    image: "/images/issuers/udemy.webp",
    pdfUrl:
      "https://www.udemy.com/certificate/UC-5b5d8734-3f58-4db2-b6b4-f332a337b6dc/",
    color:
      "group-hover:shadow-[0_0_30px_rgba(164,53,240,0.3)] group-hover:border-purple-500/50",
    linkText: "Ver Certificado",
  },
  {
    id: "udemy-ts",
    title: "Curso Completo de Typescript. Desde las Bases a la Práctica.",
    issuer: "Udemy",
    date: "dic. 2025",
    // Usamos esta URL alternativa de Wikimedia que suele ser más estable
    image: "/images/issuers/udemy.webp",
    pdfUrl:
      "https://www.udemy.com/certificate/UC-10ac23a5-2ecc-4a72-9921-629523b4bd5a/",
    color:
      "group-hover:shadow-[0_0_30px_rgba(164,53,240,0.3)] group-hover:border-purple-500/50",
    linkText: "Ver Certificado",
  },
  {
    id: "cisco-js",
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "dic. 2024",
    image: "/images/issuers/cisco.webp",
    pdfUrl:
      "/certifications/JavaScript_Essentials_1_certificate_josemajimenezrodriguez8-gmail-com_0c6a1147-97ba-4f83-b178-85feb3d6b812.pdf",
    color:
      "group-hover:shadow-[0_0_30px_rgba(4,159,217,0.3)] group-hover:border-cyan-500/50",
    linkText: "Mostrar credencial",
  },
];
