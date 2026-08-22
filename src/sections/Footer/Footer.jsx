import styles from "./Footer.module.css";
import { profile, socials } from "../../data/profile";
import { SocialIcon } from "../../lib/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label={social.name}
          >
            <SocialIcon name={social.icon} />
          </a>
        ))}
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          © {currentYear} — <span className={styles.terminalPrompt}>$</span>{" "}
          construído por <span className={styles.name}>{profile.name}</span>
          <span className={styles.cursor}>_</span>
        </p>
        <p className={styles.stack}>
          React 19 + Framer Motion + GSAP + tsParticles
        </p>
      </div>
    </footer>
  );
}
