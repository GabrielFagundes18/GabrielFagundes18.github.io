import { motion } from "framer-motion";
// Importando do react-icons (fi para Feather Icons e fa para Font Awesome)
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tag}>CONTATO</span>
          <h2 className={styles.title}>
            Iniciar novo projeto<span>.</span>
          </h2>
          <p className={styles.description}>
            Atualmente disponível para oportunidades como{" "}
            <strong>Desenvolvedor Júnior</strong> ou <strong>Estagiário</strong>
            . Se você busca alguém resiliente e focado em soluções Full Stack,
            vamos conversar.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Card Principal de Email */}
          <motion.a
            href="mailto:gabrielfagundesoliveira35@gmail.com"
            className={`${styles.card} ${styles.mainCard}`}
            whileHover={{ y: -5 }}
          >
            <div className={styles.iconBox}>
              <FiMail size={24} />
            </div>
            <div className={styles.cardInfo}>
              <span>E-mail</span>
              <strong>gabrielfagundesoliveira35@gmail.com</strong>
            </div>
            <FiSend size={20} className={styles.arrowIcon} />
          </motion.a>

          {/* Redes Sociais */}
          <div className={styles.socialGroup}>
            <a
              href="https://linkedin.com/in/gabriel-fagundes-de-oliveira-b98a002a2/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialCard}
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/GabrielFagundes"
              target="_blank"
              rel="noreferrer"
              className={styles.socialCard}
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.location}>
            <FiMapPin size={16} className={styles.pin} />
            <p>Guarulhos, SP — Brasil</p>
          </div>
          <div className={styles.status}>
            <span className={styles.pulse}></span>
            <p>Disponível para propostas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
