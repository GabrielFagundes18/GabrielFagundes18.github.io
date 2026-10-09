import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Button } from "../../../../components/ui/Button/Button";
import { Reveal } from "../../../../components/ui/Reveal/Reveal";
import styles from "./ProjectCard.module.css";

const NEW_TAB = "(abre em nova aba)";

export function ProjectCard({ project, featured = false, delay = 0 }) {
  const { id, title, category, problem, stack, challenge, image, links } = project;

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.media}>
        <div className={styles.browserBar} aria-hidden="true">
          <span className={styles.dots}>
            <span />
            <span />
            <span />
          </span>
          <span className={styles.path}>~/projetos/{id}</span>
        </div>

        <div className={styles.shot}>
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={
              featured ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 861px) 560px, 100vw"
            }
            width="1200"
            height="750"
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={styles.image}
          />
          <div className={styles.caption}>
            <span className={styles.tag}>{category}</span>
            <h3 id={`${id}-title`} className={styles.title}>
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.problem}>{problem}</p>

        <ul className={styles.stack} aria-label={`Tecnologias usadas em ${title}`}>
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={styles.challenge}>
          <span className={styles.challengeLabel}>Desafio técnico</span>
          <p>{challenge}</p>
        </div>

        <div className={styles.actions}>
          {links.deploy && (
            <Button href={links.deploy} external aria-label={`Ver projeto ${title} ${NEW_TAB}`}>
              Ver projeto <FiArrowUpRight aria-hidden="true" />
            </Button>
          )}
          <Button
            href={links.repo}
            external
            variant="outline"
            aria-label={`Ver código de ${title} no GitHub ${NEW_TAB}`}
          >
            <FaGithub aria-hidden="true" /> Ver código
          </Button>
          {links.apiRepo && (
            <a
              href={links.apiRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.apiLink}
              aria-label={`Código da API de ${title} no GitHub ${NEW_TAB}`}
            >
              Código da API <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
