import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import { Button } from "../../components/Button/Button";

const myProjects = [
  {
    title: "Ninja Burger Dashboard",
    url: "https://deshboard-hamburgueria-admin.vercel.app/",
    github: "https://github.com/GabrielFagundes18/Deshboard-Hamburgueria-Admin",
    category: "Full Stack / BI",
    image:
      "https://res.cloudinary.com/dfiahvacg/image/upload/if_w_gt_1000/c_scale,w_1000/if_end/ninjaburgue_y31nbs.jpg",
  },
  {
    title: "Ninja Burger Client",
    url: "https://hamburgueria-gamma-five.vercel.app/",
    github: "https://github.com/GabrielFagundes18/Hamburgueria",
    category: "Frontend E-commerce",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Biblioteca Java (Projeto Acadêmico)",
    url: "#",
    github: "https://github.com/GabrielFagundes18/ProjetoBibliotecaJava",
    category: "Backend / Java",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Golden Razon Barbearia (em desenvolvimento)",
    url: "#",
    github: "https://github.com/GabrielFagundes18/GOLDEN-RAZOR-BARBEARIA",
    category: "Frontend / React ",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
  },
];

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

        <div
          className={styles.infoOverlay}
          style={{ opacity: isHovered ? 0 : 1 }}
        >
          <span className={styles.tag}>{project.category}</span>
          <h3>{project.title}</h3>
        </div>

        <div className={styles.persistentActions}>
          <Button href={project.url} target="_blank" variant="primary">
            Acessar <FiArrowUpRight />
          </Button>

          <Button
            href={project.github}
            target="_blank"
            variant="outline"
            className={styles.iconButton}
          >
            <FaGithub size={20} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

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
