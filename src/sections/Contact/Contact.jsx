import { FiDownload, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import styles from "./Contact.module.css";
import { Button } from "../../components/Button/Button";
import { Reveal } from "../../components/Reveal/Reveal";
import { profile, socials } from "../../data/profile";
import { links } from "../../data/links";
import { SocialIcon } from "../../lib/icons";

const [emailUser, emailDomain] = profile.email.split("@");

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.container}`} aria-labelledby="contact-title">
      <div className={styles.wrapper}>
        <Reveal className={styles.content}>
          <span className="eyebrow">~/contact</span>
          <h2 id="contact-title" className={styles.title}>
            Vamos conversar<span>.</span>
          </h2>
          <p className={styles.description}>
            Estou em busca de uma vaga <strong>{profile.availability}</strong> em{" "}
            {profile.location} — {profile.workModes}. O jeito mais rápido de falar
            comigo é por e-mail.
          </p>
        </Reveal>

        <div className={styles.grid}>
          <a href={links.email} className={`${styles.card} ${styles.mainCard}`}>
            <span className={styles.iconBox} aria-hidden="true">
              <FiMail size={24} />
            </span>
            <span className={styles.cardInfo}>
              <span className={styles.cardLabel}>Enviar e-mail</span>
              <strong>
                {emailUser}
                <wbr />@{emailDomain}
              </strong>
            </span>
            <FiSend size={20} className={styles.arrowIcon} aria-hidden="true" />
          </a>

          <ul className={styles.socialGroup}>
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <SocialIcon name={social.icon} size={22} />
                  <span className={styles.socialText}>
                    <span className={styles.socialName}>{social.name}</span>
                    <span className={styles.socialHandle}>{social.handle}</span>
                  </span>
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.resume}>
            <Button href={links.resume} download variant="outline">
              <FiDownload aria-hidden="true" /> Baixar currículo (PDF)
            </Button>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <p className={styles.location}>
            <FiMapPin size={16} className={styles.pin} aria-hidden="true" />
            {profile.location} — Brasil
          </p>
          <p className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            Disponível para vagas {profile.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
