import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

const featured = projects.find((project) => project.featured);
const others = projects.filter((project) => !project.featured);

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <span className="eyebrow">~/projects</span>
      <h2 id="projects-title" className={styles.title}>
        Projetos selecionados<span className={styles.dotPunct}>.</span>
      </h2>
      <p className={styles.lead}>
        Do mais completo ao mais simples. Cada card mostra o problema, a stack usada e um
        desafio técnico que eu resolvi.
      </p>

      {featured && (
        <div className={styles.featured}>
          <ProjectCard project={featured} featured />
        </div>
      )}

      <div className={styles.grid}>
        {others.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={(index % 2) * 0.12} />
        ))}
      </div>
    </section>
  );
}
