import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaDownload } from "react-icons/fa";
import { HiOutlineChip } from "react-icons/hi";
import {
  MdOutlineCode,
  MdTranslate,
  MdOutlineRocketLaunch,
} from "react-icons/md";
import styles from "./About.module.css";
import { Button } from "../../components/Button/Button";
import { profile, socials } from "../../data/profile";
import { slideFromRight, scaleIn, viewportOnce } from "../../lib/animations";

const features = [
  { icon: MdOutlineCode, title: "Stack Prática", text: "React 19, TypeScript & Node" },
  {
    icon: MdOutlineRocketLaunch,
    title: "Foco em Entrega",
    text: "Sistemas Full-stack & Dashboards",
  },
  { icon: MdTranslate, title: "Idiomas", text: "Inglês (Estudo constante)" },
];

export function About() {
  const [repoCount, setRepoCount] = useState(0);
  const githubSocial = socials.find((s) => s.icon === "github");

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}`)
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos || 0))
      .catch(() => setRepoCount(12));
  }, []);

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={styles.blurTop} />

      <div className={styles.container}>
        <div className={styles.visualSide}>
          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <Tilt
              perspective={1500}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#5eead4"
              glarePosition="all"
              glareBorderRadius="32px"
              className={styles.tiltCard}
            >
              <div className={styles.photoWrapper}>
                <div className={styles.imageOverlay} />
                <img src={profile.photo} alt={profile.shortName} className={styles.profileImg} />
                <div className={styles.experienceBadge}>
                  <HiOutlineChip size={20} className={styles.spinningIcon} />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </Tilt>
          </motion.div>

          <motion.div
            className={styles.statusCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            viewport={viewportOnce}
          >
            <div className={styles.statusItem}>
              <span className={styles.statusNumber}>{repoCount}</span>
              <span className={styles.statusLabel}>Repositórios</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.statusItem}>
              <span className={styles.statusNumber}>ADS</span>
              <span className={styles.statusLabel}>3º Semestre</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.contentSide}
          variants={slideFromRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">~/about</span>
          <h2 className={styles.heading}>
            {profile.shortName}
            <span className={styles.dot}>.</span>
          </h2>

          <div className={styles.bio}>
            <p>
              Minha trajetória começou no atendimento ao público, onde desenvolvi forte
              capacidade de <strong>comunicação, resolução de problemas e atuação sob
              pressão</strong> — habilidades que hoje aplico diretamente no desenvolvimento de
              software, com foco na experiência do usuário.
            </p>
            <p>
              Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> e atuo no
              desenvolvimento de aplicações web modernas, performáticas e integradas a APIs,
              utilizando o ecossistema <strong>React, TypeScript e Node.js</strong>.
            </p>
            <p>
              Meu foco vai além de escrever código: busco construir soluções que sejam úteis,
              escaláveis e alinhadas ao problema real. Estou em busca da minha primeira
              oportunidade como <strong>Júnior</strong> para gerar impacto real e evoluir
              tecnicamente.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map(({ icon: Icon, title, text }) => (
              <div className={styles.feature} key={title}>
                <Icon className={styles.featureIcon} />
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Button href={profile.resumeUrl} download="CV_Gabriel_Fagundes.pdf" variant="primary">
              <FaDownload /> Download CV
            </Button>
            <Button href={githubSocial.href} target="_blank" rel="noopener noreferrer" variant="outline">
              <FaGithub /> GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
