// Fonte única das skills técnicas. Antes isso estava duplicado em Hero.jsx
// e Tech.jsx, cada um com sua própria lista de imports de ícones.
export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React 19", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "Styled Components", icon: "styledcomponents", color: "#DB7093" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "Express", icon: "express", color: "#ffffff" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "Database", icon: "database", color: "#4169E1" },
      { name: "Java", icon: "java", color: "#ED8B00" },
      { name: "Python", icon: "python", color: "#3776AB" },
    ],
  },
  {
    title: "Ferramentas & Infra",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#ffffff" },
      { name: "Vercel", icon: "vercel", color: "#ffffff" },
      { name: "VS Code", icon: "vscode", color: "#0078D4" },
      { name: "NetBeans", icon: "netbeans", color: "#0078D4" },
      { name: "Lucide Icons", icon: "lucide", color: "#22C55E" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
    ],
  },
];

// Lista achatada — usada no orbital do Hero, que precisa de todas as
// skills sem a divisão por categoria.
export const allSkills = skillCategories.flatMap((c) => c.skills);

export const softSkills = [
  "Comunicação Assertiva",
  "Resolução de Problemas",
  "Foco em UX",
  "Mentalidade Ágil",
  "Pensamento Analítico",
  "Colaboração em Equipe",
  "Aprendizado Contínuo",
  "Gestão de Tempo",
  "Adaptabilidade",
];
