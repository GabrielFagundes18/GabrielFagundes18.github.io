import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import styles from "./Contact.module.css";
import { profile, contact, socials } from "../../data/profile";
import { SocialIcon } from "../../lib/icons";
import { fadeUp, viewportOnce } from "../../lib/animations";

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.container}`}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.content}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">~/contact</span>
          <h2 className={styles.title}>
            Iniciar novo projeto<span>.</span>
          </h2>
          <p className={styles.description}>
            Atualmente disponível para oportunidades como <strong>{profile.availability}</strong>.
            Se você busca alguém resiliente e focado em soluções Full Stack, vamos conversar.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.a
            href={`mailto:${contact.email}`}
            className={`${styles.card} ${styles.mainCard}`}
            whileHover={{ y: -5 }}
          >
            <div className={styles.iconBox}>
              <FiMail size={24} />
            </div>
            <div className={styles.cardInfo}>
              <span>E-mail</span>
              <strong>{contact.email}</strong>
            </div>
            <FiSend size={20} className={styles.arrowIcon} />
          </motion.a>

          <div className={styles.socialGroup}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialCard}
              >
                <SocialIcon name={social.icon} size={20} />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.location}>
            <FiMapPin size={16} className={styles.pin} />
            <p>{profile.location}</p>
          </div>
          <div className={styles.status}>
            <span className={styles.pulse} />
            <p>Disponível para propostas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
