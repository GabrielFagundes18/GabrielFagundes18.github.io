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

export function About() {
  const [repoCount, setRepoCount] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/GabrielFagundes18")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.public_repos || 0))
      .catch(() => setRepoCount(12));
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.blurTop} />

      <div className={styles.container}>
        <div className={styles.visualSide}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tilt
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="32px"
              className={styles.tiltCard}
            >
              <div className={styles.photoWrapper}>
                <div className={styles.imageOverlay} />
                <img
                  src="/gabriel.jpg"
                  alt="Gabriel Fagundes"
                  className={styles.profileImg}
                />
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
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.header}>
            <span className={styles.badge}>Minha História</span>
            <h2>
              Gabriel Fagundes<span className={styles.dot}>.</span>
            </h2>
          </div>

          <div className={styles.bio}>
            <p>
              Minha trajetória começou no atendimento ao público, onde
              desenvolvi forte capacidade de
              <strong>
                {" "}
                comunicação, resolução de problemas e atuação sob pressão
              </strong>{" "}
              — habilidades que hoje aplico diretamente no desenvolvimento de
              software, com foco na experiência do usuário.
            </p>
            <p>
              Atualmente curso{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> e atuo no
              desenvolvimento de aplicações web modernas, performáticas e
              integradas a APIs, utilizando o ecossistema{" "}
              <strong>React, TypeScript e Node.js</strong>.
            </p>
            <p>
              Meu foco vai além de escrever código: busco construir soluções que
              sejam úteis, escaláveis e alinhadas ao problema real. Estou em
              busca da minha primeira oportunidade como <strong>Júnior</strong>{" "}
              para gerar impacto real e evoluir tecnicamente.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <MdOutlineCode className={styles.featureIcon} />
              <div>
                <h4>Stack Prática</h4>
                <p>React 19, TypeScript & Node</p>
              </div>
            </div>

            <div className={styles.feature}>
              <MdOutlineRocketLaunch className={styles.featureIcon} />
              <div>
                <h4>Foco em Entrega</h4>
                <p>Sistemas Full-stack & Dashboards</p>
              </div>
            </div>

            <div className={styles.feature}>
              <MdTranslate className={styles.featureIcon} />
              <div>
                <h4>Idiomas</h4>
                <p>Inglês (Estudo constante)</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              href="/Resume_Gabriel_Fagundes.pdf"
              target="_blank"
              className={styles.mainBtn}
            >
              <FaDownload size={18} />
              Download CV
            </a>
            <a
              href="https://github.com/GabrielFagundes18"
              target="_blank"
              className={styles.secondaryBtn} rel="noopener noreferrer"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
