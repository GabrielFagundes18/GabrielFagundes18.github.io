import { skillGroups } from "../../data/skills";
import { SkillIcon } from "../../lib/icons";
import { Reveal } from "../../components/Reveal/Reveal";
import styles from "./Tech.module.css";

export function Tech() {
  return (
    <section id="tech" className="section" aria-labelledby="tech-title">
      <span className="eyebrow">~/tech-stack</span>
      <h2 id="tech-title" className={styles.title}>
        Stack<span className={styles.dot}>.</span>
      </h2>
      <p className={styles.lead}>
        Separei o que eu uso de verdade no dia a dia do que ainda estou aprofundando.
      </p>

      <div className={styles.groups}>
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.12}
            className={`${styles.group} ${group.primary ? styles.primary : ""}`}
          >
            <h3 className={styles.groupTitle}>
              <span className={styles.hash} aria-hidden="true">
                #
              </span>{" "}
              {group.title}
            </h3>
            <p className={styles.groupNote}>{group.note}</p>

            <ul className={styles.list}>
              {group.skills.map((skill) => (
                <li key={skill.name} className={styles.item}>
                  <span className={styles.icon} style={{ color: skill.color }}>
                    <SkillIcon name={skill.icon} />
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
