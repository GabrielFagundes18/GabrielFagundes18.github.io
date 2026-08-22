export const profile = {
  name: "Gabriel Fagundes Oliveira",
  shortName: "Gabriel Fagundes",
  role: "Desenvolvedor Full Stack",
  githubUser: "GabrielFagundes18",
  tagline: "Transformando código em soluções reais com as melhores tecnologias do mercado.",
  bio:
    "Desenvolvedor full stack focado em construir produtos web rápidos, acessíveis e bem estruturados — do banco de dados à interface. Gosto de resolver problemas reais, aprender rápido e escrever código que o próximo dev (ou eu mesmo, 6 meses depois) consiga entender sem sofrer.",
  availability: "Desenvolvedor Júnior ou Estagiário",
  location: "Guarulhos, SP — Brasil",
  photo: "/gabriel.jpg",
  resumeUrl: require("../assets/Gabriel_Fagundes_de_Oliveira_Curriculo.pdf"),
};

export const contact = {
  email: "gabrielfagundesvv@gmail.com",
};

export const socials = [
  {
    name: "GitHub",
    href: `https://github.com/${profile.githubUser}`,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gabrielfagundesdeoliveira/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gabrielfagundes___/",
    icon: "instagram",
  },
];

export const navLinks = [
  { label: "Home", href: "#home", path: "~/home", icon: "home" },
  { label: "Stack", href: "#tech", path: "~/tech-stack", icon: "code" },
  { label: "Projetos", href: "#projects", path: "~/projects", icon: "layers" },
  { label: "Sobre", href: "#about", path: "~/about", icon: "user" },
];
