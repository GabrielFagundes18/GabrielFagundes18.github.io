import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaCss3,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiStyledcomponents,
  SiVercel,
  SiExpress,
  SiHtml5,
  SiBootstrap,
  SiFramer,
} from "react-icons/si";

// Chave (string, vem de src/data/skills.js) -> componente de ícone.
// Manter esse mapa separado dos dados evita guardar JSX em arquivos de
// conteúdo e permite trocar a lib de ícones em um único lugar.
export const iconMap = {
  react: FaReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: FaCss3,
  styledcomponents: SiStyledcomponents,
  bootstrap: SiBootstrap,
  nodejs: FaNodeJs,
  express: SiExpress,
  postgresql: SiPostgresql,
  java: FaJava,
  python: FaPython,
  git: FaGitAlt,
  vercel: SiVercel,
  framer: SiFramer,
};

export const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export function SkillIcon({ name, ...props }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" focusable="false" {...props} />;
}

export function SocialIcon({ name, ...props }) {
  const Icon = socialIconMap[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" focusable="false" {...props} />;
}
