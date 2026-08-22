import { motion } from "framer-motion";
import { skillCategories, softSkills, allSkills } from "../../data/skills";
import { SkillIcon } from "../../lib/icons";
import { Marquee } from "../../components/Marquee/Marquee";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/animations";
import styles from "./Tech.module.css";

export function Tech() {
  return (
    <section id="tech" className={`section ${styles.techSection}`}>
      <span className="eyebrow">~/tech-stack</span>
      <h2 className={styles.title}>Tecnologias & Skills</h2>

      <div className={styles.marqueeWrap}>
        <Marquee speed={38}>
          {allSkills.map((tech) => (
            <div key={tech.name} className={styles.marqueeItem}>
              <span style={{ color: tech.color }}>
                <SkillIcon name={tech.icon} />
              </span>
              {tech.name}
            </div>
          ))}
        </Marquee>
      </div>

      <motion.div
        className={styles.mainGrid}
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} className={styles.column} variants={fadeUp}>
            <h3 className={styles.columnTitle}>
              <span className={styles.hash}>#</span> {category.title}
            </h3>

            <div className={styles.list}>
              {category.skills.map((tech) => (
                <motion.div
                  key={tech.name}
                  className={styles.listItem}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className={styles.iconBox} style={{ color: tech.color }}>
                    <SkillIcon name={tech.icon} />
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.softSkillsRow}>
        {softSkills.map((skill) => (
          <motion.span
            key={skill}
            className={styles.minimalBadge}
            whileHover={{ y: -5, color: "var(--accent)" }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
