import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaCss3, FaDatabase, FaJava, FaPython, FaGitAlt 
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiPostgresql, SiStyledcomponents, 
  SiExpress, SiVercel, SiGithub, SiHtml5, SiLucide, SiBootstrap,SiFramer,SiPostman
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiNetbeans } from "react-icons/di";

import styles from "./Tech.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaReact />, name: "React 19", color: "#61DAFB" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
      { icon: <SiStyledcomponents />, name: "Styled Components", color: "#DB7093" },
      { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
    ]
  },
  {
    title: "Backend & DB",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
      { icon: <SiExpress />, name: "Express", color: "#ffffff" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
      { icon: <FaDatabase />, name: "Database", color: "#4169E1" },
      { icon: <FaJava />, name: "Java", color: "#ED8B00" },
      { icon: <FaPython />, name: "Python", color: "#3776AB" },
      {icon: <SiPostman />, name: "Postman", color: "#FF6C37" },

    ]
  },
  {
    title: "Ferramentas & Infra",
    skills: [
      { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
      { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
      { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
      { icon: <VscVscode />, name: "VS Code", color: "#0078D4" },
      { icon: <DiNetbeans />, name: "NetBeans", color: "#0078D4" },
      { icon: <SiLucide />, name: "Lucide Icons", color: "#22C55E" },
      { icon: <SiFramer />, name: "Framer Motion", color: "#0055FF" },
      
    ]
  }
];

const softSkills = [
  "Comunicação Assertiva", "Resolução de Problemas", "Foco em UX", 
  "Mentalidade Ágil", "Pensamento Analítico", "Colaboração em Equipe", 
  "Aprendizado Contínuo", "Gestão de Tempo", "Adaptabilidade"
];



export function Tech() {
  return (
    <section id="tech" className={styles.techSection}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Competências</span>
        <h2 className={styles.title}>Tecnologias & Skills</h2>
      </div>

      <div className={styles.mainGrid}>
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={category.title} 
            className={styles.column}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className={styles.columnTitle}>
              <span className={styles.hash}>#</span> {category.title}
            </h3>
            
            <div className={styles.list}>
              {category.skills.map((tech) => (
                <motion.div
                  key={tech.name}
                  className={styles.listItem}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className={styles.iconBox} style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className={styles.softSkillsRow}>
        {softSkills.map((skill, i) => (
          <motion.span 
            key={i} 
            className={styles.minimalBadge}
            whileHover={{ y: -5, color: "#3b82f6" }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}