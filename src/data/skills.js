export const skillGroups = [
  {
    title: "Uso no dia a dia",
    note: "A base dos projetos publicados mais abaixo.",
    primary: true,
    skills: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Node.js", icon: "nodejs", color: "#5FA04E" },
      { name: "Express", icon: "express", color: "#E6EBF2" },
      { name: "PostgreSQL", icon: "postgresql", color: "#699ECA" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#2D8FE0" },
      { name: "Git & GitHub", icon: "git", color: "#F05032" },
    ],
  },
  {
    title: "Tenho familiaridade",
    note: "Já usei em projetos ou estudos, mas com menos profundidade.",
    skills: [
      { name: "Styled Components", icon: "styledcomponents", color: "#DB7093" },
      { name: "Framer Motion", icon: "framer", color: "#E6EBF2" },
      { name: "Java", icon: "java", color: "#ED8B00" },
      { name: "Python", icon: "python", color: "#4B8BBE" },
      { name: "Bootstrap", icon: "bootstrap", color: "#9B7AE0" },
      { name: "Vercel", icon: "vercel", color: "#E6EBF2" },
    ],
  },
];

// Ícones decorativos ao redor da foto no Hero.
export const orbitSkills = skillGroups[0].skills;
