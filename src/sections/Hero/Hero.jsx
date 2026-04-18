import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Button } from "../../components/Button/Button";
import minhaImagem from '../../assets/Gabriel.jpg';


import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCss3,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiStyledcomponents,
  SiVercel,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiLucide,
  SiBootstrap,
  SiPostman
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiNetbeans } from "react-icons/di";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { ChevronRight } from "lucide-react";

import styles from "./Hero.module.css";

export function Hero() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hardSkills = [
    { icon: <FaReact />, name: "React 19", color: "#61DAFB" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <FaDatabase />, name: "Database", color: "#4169E1" },
    {
      icon: <SiStyledcomponents />,
      name: "Styled Components",
      color: "#DB7093",
    },
    { icon: <FaJava />, name: "Java", color: "#ED8B00" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <SiExpress />, name: "Express", color: "#ffffff" },
    { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
    { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiLucide />, name: "Lucide", color: "#22C55E" },
    { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
    { icon: <VscVscode />, name: "Visual Studio Code", color: "#0078D4" },
    { icon: <DiNetbeans />, name: "NetBeans", color: "#0078D4" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  ];

  const orbStack = useMemo(() => {
    const totalIcons = hardSkills.length;
    const radius = isMobile ? 60 : 72;

    return hardSkills.map((tech, index) => {
      const angle = (index / totalIcons) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return {
        ...tech,
        top: `${50 + y}%`,
        left: `${50 + x}%`,
        initial: { x: x * 0.5, y: y * 0.5, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, hardSkills.length]);

  return (
    <section id="home" className={styles.hero}>
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
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                grab: {
                  distance: 250,
                  links: {
                    opacity: 0.3,
                    color: "#3b82f6",
                  },
                },
              },
            },
            particles: {
              color: { value: "#3b82f6" },
              links: {
                enable: true,
                distance: 150,
                color: "#3b82f6",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: {
                value: isMobile ? 40 : 100,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            <span className={styles.dot} />
            Gabriel Fagundes Oliveira
          </div>
          <h1 className={styles.title}>
            Desenvolvedor <br />
            <span className={styles.accent}>Full Stack</span>
            <span>.</span>
          </h1>
          <p className={styles.description}>
            Transformando código em soluções reais com as melhores tecnologias
            do mercado.
          </p>
          <div className={styles.actions}>
            <Button onClick={() => (window.location.hash = "projects")}>
              Ver Projetos <ChevronRight size={18} />
            </Button>
            <div className={styles.metrics}>
              <div className={styles.metricItem}>
                <FaGithub size={16} /> <span>GabrielFagundes18</span>
              </div>
              <div className={styles.metricItem}>
                <HiOutlineLightningBolt size={16} className={styles.zapIcon} />{" "}
                <span>Status: Online</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.imageSection}>
          <div className={styles.photoContainer}>
            <div className={styles.orbitWrapper}>
              {!isMobile &&
                orbStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.techIconOrb}
                    style={{
                      top: tech.top,
                      left: tech.left,
                      color: tech.color,
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
            </div>

            <motion.div className={styles.hexFrame}>
              <img
                src={minhaImagem}
                alt="Gabriel Oliveira"
                className={styles.photo}
              />
              <div className={styles.overlay} />
            </motion.div>

            <div className={styles.photoBg} />
          </div>
        </div>
      </div>
    </section>
  );
}
