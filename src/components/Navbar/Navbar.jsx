import { useEffect, useRef, useState } from "react";
import { FiMenu, FiSend, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { Button } from "../Button/Button";
import { navLinks } from "../../data/navigation";
import { useActiveSection } from "../../lib/ActiveSection";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const closeMenu = ({ restoreFocus = false } = {}) => {
    setIsOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) menuRef.current?.querySelector("a")?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mantém o foco do teclado dentro do menu mobile enquanto ele está aberto.
  const trapFocus = (e) => {
    if (!isOpen || e.key !== "Tab" || !menuRef.current) return;
    const focusables = [toggleRef.current, ...menuRef.current.querySelectorAll("a")];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <header className={styles.header} onKeyDown={trapFocus}>
      <nav
        className={`${styles.navIsland} ${scrolled ? styles.scrolled : ""}`}
        aria-label="Navegação principal"
      >
        <a href="#home" className={styles.logo}>
          G<span>.</span>Fagundes
        </a>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeId === link.id ? styles.active : ""}
                aria-current={activeId === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          href="#contact"
          className={styles.cta}
          variant="primary"
          aria-current={activeId === "contact" ? "location" : undefined}
        >
          <FiSend size={16} aria-hidden="true" />
          <span>Contato</span>
        </Button>

        <button
          ref={toggleRef}
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FiX size={22} aria-hidden="true" /> : <FiMenu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Sempre montado: a classe `open` controla a animação de entrada e
          saída, e `visibility: hidden` tira os links do Tab quando fechado. */}
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.open : ""}`}
        onClick={() => closeMenu({ restoreFocus: true })}
      >
        <nav
          id="mobile-menu"
          ref={menuRef}
          className={styles.mobileContent}
          aria-label="Menu"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => closeMenu()}
              aria-current={activeId === link.id ? "location" : undefined}
            >
              <span className={styles.mobilePath} aria-hidden="true">
                {link.path}
              </span>
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={() => closeMenu()}>
            <FiSend size={20} aria-hidden="true" /> Vamos conversar
          </a>
        </nav>
      </div>
    </header>
  );
}
