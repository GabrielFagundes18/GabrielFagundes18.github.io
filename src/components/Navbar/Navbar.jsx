import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Code2, User, Send, Layers, Home} from "lucide-react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquear scroll quando menu mobile estiver aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.navIsland}
      >
        <div className={styles.logo}>
          G<span>.</span> Fagundes
        </div>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
            <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#tech">Stack</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>

          <li>
            <a href="#about">Sobre</a>
          </li>
        </ul>

        <a href="#contact" className={styles.cta}>
          Contato
        </a>

        {/* Toggle Mobile */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Overlay Estilo Fullscreen Tech */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className={styles.mobileOverlay}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={styles.mobileContent}
            >
               <a href="#home" onClick={() => setIsOpen(false)}>
                <Home size={24} /> Home
              </a>
              <a href="#tech" onClick={() => setIsOpen(false)}>
                <Code2 size={24} /> Tecnologia
              </a><a href="#projects" onClick={() => setIsOpen(false)}>
                <Layers size={24} /> Projetos
              </a>
              <a href="#about" onClick={() => setIsOpen(false)}>
                <User size={24} /> Sobre
              </a>
              <a
                href="#contact"
                className={styles.mobileCta}
                onClick={() => setIsOpen(false)}
              >
                <Send size={20} /> Mandar Mensagem
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
