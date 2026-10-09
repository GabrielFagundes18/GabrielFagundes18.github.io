import Tilt from "react-parallax-tilt";
import { HiOutlineChip } from "react-icons/hi";
import styles from "./About.module.css";
import { profile } from "../../../../data/profile";
import { Reveal } from "../../../../components/ui/Reveal/Reveal";

const facts = [
  { label: "Formação", value: "Análise e Desenvolvimento de Sistemas — Universidade Cruzeiro do Sul, 3º semestre" },
  { label: "Experiência anterior", value: "Balconista Júnior na Nakao, atendimento ao público (2022–2025)" },
  { label: "Inglês", value: "Em estudo contínuo" },
  {
    label: "Busco",
    value: `Vaga ${profile.availability} em ${profile.location} — ${profile.workModes}`,
  },
];

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className={styles.blurTop} />

      <div className={styles.container}>
        <div className={styles.visualSide}>
          <Reveal variant="scaleIn">
            <Tilt
              perspective={1500}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#5eead4"
              glarePosition="all"
              glareBorderRadius="24px"
              className={styles.tiltCard}
            >
              <div className={styles.photoWrapper}>
                <div className={styles.imageOverlay} />
                <img
                  src={profile.photo.src}
                  srcSet={profile.photo.srcSet}
                  sizes="(max-width: 1024px) 420px, 440px"
                  width="800"
                  height="800"
                  alt={`Foto de ${profile.shortName}`}
                  className={styles.profileImg}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.experienceBadge}>
                  <HiOutlineChip size={20} className={styles.spinningIcon} aria-hidden="true" />
                  <span>{profile.role}</span>
                </div>
              </div>
            </Tilt>
          </Reveal>

          <Reveal as="dl" delay={0.35} className={styles.statusCard}>
            <div className={styles.statusItem}>
              <dt className={styles.statusLabel}>Atendimento ao público</dt>
              <dd className={styles.statusNumber}>3 anos</dd>
            </div>
            <div className={styles.divider} />
            <div className={styles.statusItem}>
              <dt className={styles.statusLabel}>3º semestre</dt>
              <dd className={styles.statusNumber}>ADS</dd>
            </div>
          </Reveal>
        </div>

        <Reveal variant="slideFromRight" className={styles.contentSide}>
          <span className="eyebrow">~/about</span>
          <h2 id="about-title" className={styles.heading}>
            Do balcão ao código<span className={styles.dot}>.</span>
          </h2>

          <div className={styles.bio}>
            <p>
              Passei três anos no balcão da Nakao atendendo o público, muitas vezes em horário de
              pico. Foi lá que aprendi a <strong>entender o que a pessoa precisa antes de
              responder</strong>, a explicar sem jargão e a <strong>resolver o problema sem
              travar a fila</strong> — e é isso que levo hoje para o desenvolvimento.
            </p>
            <p>
              Curso Análise e Desenvolvimento de Sistemas e construo sistemas completos com React,
              TypeScript, Node.js e PostgreSQL. O olhar de atendimento aparece nos detalhes: no
              Ninja Burger, o campo de troco só aparece quando o cliente escolhe pagar em
              dinheiro, e o painel <strong>destaca pedidos parados há mais de 15 minutos</strong>{" "}
              para a equipe agir antes de o cliente ficar insatisfeito.
            </p>
          </div>

          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
