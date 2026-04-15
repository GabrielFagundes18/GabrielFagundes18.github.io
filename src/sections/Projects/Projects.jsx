import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";

// 1. LISTA DE PROJETOS (Centralizada para fácil manutenção)
const myProjects = [
  {
    title: "Ninja Burger Dashboard",
    url: "https://deshboard-hamburgueria-admin.vercel.app/",
    github: "https://github.com/GabrielFagundes/ninja-burger",
    category: "Full Stack / BI",
    image:
      "https://res.cloudinary.com/dfiahvacg/image/upload/if_w_gt_1000/c_scale,w_1000/if_end/ninjaburgue_y31nbs.jpg",
  },
  {
    title: "Ninja Burger Client",
    url: "https://hamburgueria-gamma-five.vercel.app/",
    github: "https://github.com/GabrielFagundes/ninja-burger",
    category: "Frontend E-commerce",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "EcoLibrary System",
    url: "#",
    github: "https://github.com/GabrielFagundes/library-management",
    category: "Full Stack Management",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Calculadora Moderna",
    url: "https://calculadora-pi-ruddy.vercel.app/",
    github: "https://github.com/GabrielFagundes/calculadora-moderna",
    category: "UX / Frontend Utility",
    image:
      "data:image/jpeg;base64,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",
  },
];

// 2. SUB-COMPONENTE: CARD (Isolando a lógica de hover e iframe)
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.projectWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header Estilo Navegador */}
      <div className={styles.browserHeader}>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.addressBar}>
          <FiExternalLink size={10} />
          <span>{project.url.replace("https://", "").replace("/", "")}</span>
        </div>
      </div>

      <div className={styles.viewContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.bgPlaceholder}
          style={{
            opacity: isHovered ? 0.1 : 1,
            filter: isHovered ? "blur(10px)" : "none",
          }}
        />

        {isHovered && project.url !== "#" && (
          <iframe
            src={project.url}
            title={project.title}
            className={styles.iframeView}
            loading="lazy"
          />
        )}

        {/* Overlay de Texto */}
        <div
          className={styles.infoOverlay}
          style={{ opacity: isHovered ? 0 : 1 }}
        >
          <span className={styles.tag}>{project.category}</span>
          <h3>{project.title}</h3>
        </div>

        {/* Ações Fixas */}
        <div className={styles.persistentActions}>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={styles.btnMain}
          >
            Acessar <FiArrowUpRight />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.btnGit}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// 3. COMPONENTE PRINCIPAL
export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>PORTFÓLIO</span>
        <h2>
          Projetos Selecionados<span>.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {myProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
