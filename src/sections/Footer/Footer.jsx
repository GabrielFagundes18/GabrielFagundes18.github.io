import styles from "./Footer.module.css";
import { profile, socials } from "../../data/profile";
import { SocialIcon } from "../../components/ui/Icons/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.socialLinks}>
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={`${social.name} (abre em nova aba)`}
            >
              <SocialIcon name={social.icon} />
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          © {currentYear} — <span className={styles.terminalPrompt}>$</span>{" "}
          construído por <span className={styles.name}>{profile.name}</span>
          <span className={styles.cursor} aria-hidden="true">
            _
          </span>
        </p>
        <p className={styles.stack}>React 19 · CSS Modules · Vercel</p>
      </div>
    </footer>
  );
}
