import { motion } from "framer-motion";
import styles from "./Tech.module.css";

// Mantive suas hardSkills e softSkills...
const hardSkills = [
  { name: "React 19", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Styled Components", img: "https://cdn.simpleicons.org/styledcomponents/DB7093" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", img: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Neon", img: "https://neon.com/brand/neon-logomark-dark-color.svg?updated=2026-01-21&dpl=dpl_4a9XNVah4x45ZEjVRAdutg3571oB" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Vercel", img: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "NetBeans", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache-netbeans/1B6AC6" },
];

const softSkills = [
  "Comunicação Assertiva", "Resolução de Problemas", "Foco em UX", 
  "Mentalidade Ágil", "Pensamento Analítico", "Colaboração em Equipe", 
  "Aprendizado Contínuo", "Gestão de Tempo", "Adaptabilidade", "Atenção aos Detalhes"
];

// Configurações de animação (Variantes)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Efeito cascata automático
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Tech() {
  return (
    <section id="tech" className={styles.techSection}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.subtitle}>Ecosistema</span>
        <h2 className={styles.title}>Stack & Infraestrutura</h2>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {hardSkills.map((tech) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 10, // Leve rotação 3D
              borderColor: "#3b82f6",
              boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.3)"
            }}
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <img src={tech.img} alt={tech.name} className={styles.icon} />
            </div>
            <span className={styles.techName}>{tech.name}</span>
            {/* Brilho interno no hover */}
            <div className={styles.glow} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.softSkillsContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {softSkills.map((skill, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "#fff" }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // "Bolinha" elástica
            className={styles.softSkillBadge}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}