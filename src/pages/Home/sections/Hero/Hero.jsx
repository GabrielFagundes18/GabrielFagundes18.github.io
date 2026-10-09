import { lazy, Suspense } from "react";
import { FiChevronRight, FiDownload } from "react-icons/fi";
import { Button } from "../../../../components/ui/Button/Button";
import { SkillIcon, SocialIcon } from "../../../../components/ui/Icons/Icons";
import { useMediaQuery } from "../../../../hooks/useMediaQuery";
import { orbitSkills } from "../../../../data/skills";
import { profile, socials } from "../../../../data/profile";
import { GITHUB_USER, links } from "../../../../data/links";
import styles from "./Hero.module.css";

const HeroParticles = lazy(() => import("./HeroParticles"));

const ORBIT_RADIUS = 78;

const orbit = orbitSkills.map((skill, index) => {
  const angle = (index / orbitSkills.length) * 2 * Math.PI;
  return {
    ...skill,
    top: `${50 + Math.sin(angle) * ORBIT_RADIUS}%`,
    left: `${50 + Math.cos(angle) * ORBIT_RADIUS}%`,
    delay: `${1 + index * 0.05}s`,
  };
});

export function Hero() {
  const showParticles = useMediaQuery(
    "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
  );

  return (
    <section id="home" className={styles.hero}>
      <svg width="0" height="0" className={styles.svgDefs} aria-hidden="true">
        <defs>
          <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.2,0.1 C0.4,-0.1 0.8,0 0.9,0.2 S1,0.7 0.8,0.9 S0.3,1 0.1,0.8 S0,0.3 0.2,0.1" />
          </clipPath>
        </defs>
      </svg>

      {showParticles && (
        <Suspense fallback={null}>
          <HeroParticles className={styles.particles} />
        </Suspense>
      )}

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`eyebrow ${styles.intro}`}>~/{GITHUB_USER}</span>

          <h1 className={styles.title}>
            <span className="sr-only">{profile.shortName}, </span>
            <span className={`${styles.titleLine} ${styles.intro}`}>Desenvolvedor</span>
            <span className={`${styles.titleLine} ${styles.accent} ${styles.intro}`}>
              Full Stack<span className={styles.dotPunct}>.</span>
            </span>
          </h1>

          <p className={`${styles.description} ${styles.intro}`}>{profile.tagline}</p>

          <div className={`${styles.actions} ${styles.intro}`}>
            <div className={styles.buttons}>
              <Button href="#projects">
                Ver projetos <FiChevronRight size={18} aria-hidden="true" />
              </Button>
              <Button href={links.resume} download variant="outline">
                <FiDownload size={16} aria-hidden="true" /> Baixar currículo (PDF)
              </Button>
            </div>

            <ul className={styles.socials}>
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <SocialIcon name={social.icon} size={16} />
                    <span>{social.name}</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.photoContainer}>
            <div className={styles.orbitWrapper} aria-hidden="true">
              {orbit.map((skill) => (
                <span
                  key={skill.name}
                  className={styles.techIconOrb}
                  style={{
                    top: skill.top,
                    left: skill.left,
                    color: skill.color,
                    animationDelay: skill.delay,
                  }}
                >
                  <SkillIcon name={skill.icon} />
                </span>
              ))}
            </div>

            <div className={styles.photoFrame}>
              <img
                src={profile.photo.src}
                srcSet={profile.photo.srcSet}
                sizes="(max-width: 767px) 260px, 360px"
                width="800"
                height="800"
                alt={`Foto de ${profile.shortName}`}
                className={styles.photo}
                fetchPriority="high"
              />
              <div className={styles.overlay} />
            </div>

            <div className={styles.photoBg} />
          </div>
        </div>
      </div>
    </section>
  );
}
