import { useEffect, useState, useMemo, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { Button } from "../../components/Button/Button";
import { SkillIcon } from "../../lib/icons";
import { allSkills } from "../../data/skills";
import { profile } from "../../data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sequência de entrada orquestrada com GSAP: o badge, título, descrição
  // e ações entram em cascata em vez de um único fade genérico.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.badge}`, {
        opacity: 0,
        y: 12,
        duration: 0.6,
        delay: 0.1,
      });
      gsap.from(`.${styles.titleLine}`, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from(`.${styles.description}`, {
        opacity: 0,
        y: 16,
        duration: 0.7,
        delay: 0.7,
      });
      gsap.from(`.${styles.actions}`, {
        opacity: 0,
        y: 16,
        duration: 0.7,
        delay: 0.85,
      });
    }, introRef);

    return () => ctx.revert();
  }, []);

  const orbStack = useMemo(() => {
    const total = allSkills.length;
    const radius = isMobile ? 60 : 78;

    return allSkills.map((tech, index) => {
      const angle = (index / total) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return {
        ...tech,
        top: `${50 + y}%`,
        left: `${50 + x}%`,
      };
    });
  }, [isMobile]);

  return (
    <section id="home" className={styles.hero} ref={introRef}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.2,0.1 C0.4,-0.1 0.8,0 0.9,0.2 S1,0.7 0.8,0.9 S0.3,1 0.1,0.8 S0,0.3 0.2,0.1" />
          </clipPath>
        </defs>
      </svg>

      {init && (
        <Particles
          id="tsparticles"
          className={styles.particles}
          options={{
            fpsLimit: 90,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                grab: { distance: 250, links: { opacity: 0.3, color: "#5eead4" } },
              },
            },
            particles: {
              color: { value: "#5eead4" },
              links: {
                enable: true,
                distance: 150,
                color: "#5eead4",
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.4,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: { value: isMobile ? 32 : 90, density: { enable: true, area: 800 } },
              opacity: { value: 0.25 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`eyebrow ${styles.badge}`}>~/{profile.githubUser}</span>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>Desenvolvedor</span>
            <span className={`${styles.titleLine} ${styles.accent}`}>
              Full Stack<span className={styles.dotPunct}>.</span>
            </span>
          </h1>

          <p className={styles.description}>{profile.tagline}</p>

          <div className={styles.actions}>
            <Button onClick={() => (window.location.hash = "projects")}>
              Ver Projetos <ChevronRight size={18} />
            </Button>
            <div className={styles.metrics}>
              <div className={styles.metricItem}>
                <FaGithub size={16} /> <span>{profile.githubUser}</span>
              </div>
              <div className={styles.metricItem}>
                <HiOutlineLightningBolt size={16} className={styles.zapIcon} />
                <span>Status: Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.photoContainer}>
            <div className={styles.orbitWrapper}>
              {!isMobile &&
                orbStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={styles.techIconOrb}
                    style={{ top: tech.top, left: tech.left, color: tech.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.04, duration: 0.4 }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <SkillIcon name={tech.icon} />
                  </motion.div>
                ))}
            </div>

            <motion.div
              className={styles.hexFrame}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={profile.photo} alt={profile.shortName} className={styles.photo} />
              <div className={styles.overlay} />
            </motion.div>

            <div className={styles.photoBg} />
          </div>
        </div>
      </div>
    </section>
  );
}