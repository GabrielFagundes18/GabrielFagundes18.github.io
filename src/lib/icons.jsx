import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCss3,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiStyledcomponents,
  SiVercel,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiLucide,
  SiBootstrap,
  SiFramer,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiNetbeans } from "react-icons/di";

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
  database: FaDatabase,
  java: FaJava,
  python: FaPython,
  git: FaGitAlt,
  github: SiGithub,
  vercel: SiVercel,
  vscode: VscVscode,
  netbeans: DiNetbeans,
  lucide: SiLucide,
  framer: SiFramer,
};

export const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

export function SkillIcon({ name, ...props }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}

export function SocialIcon({ name, ...props }) {
  const Icon = socialIconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
