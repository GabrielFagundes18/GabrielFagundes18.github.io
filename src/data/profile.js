import { GITHUB_USER, links } from "./links";

export const profile = {
  name: "Gabriel Fagundes de Oliveira",
  shortName: "Gabriel Fagundes",
  role: "Desenvolvedor Full Stack",
  tagline:
    "Construo aplicações web completas com React, TypeScript, Node.js e PostgreSQL — do banco de dados à interface. Estou em busca da minha primeira vaga Júnior ou de Estágio.",
  availability: "Júnior ou Estágio",
  location: "Guarulhos, SP",
  workModes: "presencial, híbrida ou remota",
  email: links.email.replace("mailto:", ""),
  photo: {
    src: "/gabriel-800.webp",
    srcSet: "/gabriel-400.webp 400w, /gabriel-800.webp 800w",
  },
};

export const socials = [
  {
    name: "GitHub",
    handle: GITHUB_USER,
    href: links.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "gabrielfagundesdeoliveira",
    href: links.linkedin,
    icon: "linkedin",
  },
];
