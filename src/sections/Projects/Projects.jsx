import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import { Button } from "../../components/Button/Button";
import { projects } from "../../data/projects";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/animations";

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={fadeUp}>
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable
        glareMaxOpacity={0.08}
        glareColor="#5eead4"
        glarePosition="all"
        glareBorderRadius="16px"
        className={styles.tiltWrapper}
      >
        <div
          className={styles.projectWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.browserHeader}>
            <div className={styles.dots}>
              <span />
              <span />
              <span />
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

            <div className={styles.infoOverlay} style={{ opacity: isHovered ? 0 : 1 }}>
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
        </div>
      </Tilt>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`}>
      <span className="eyebrow">~/projects</span>
      <h2 className={styles.title}>
        Projetos Selecionados<span className={styles.dotPunct}>.</span>
      </h2>

      <motion.div
        className={styles.grid}
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
