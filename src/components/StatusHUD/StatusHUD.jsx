import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../data/profile";
import { useActiveSection } from "../../lib/useActiveSection";
import styles from "./StatusHUD.module.css";

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// Elemento de assinatura do design: trata o portfólio como um sistema
// rodando ao vivo. Mostra a seção atual como "processo" ativo e um
// contador de tempo de sessão — reforça a identidade de dev full stack
// sem depender de decoração solta.
export function StatusHUD() {
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);
  const activeLink = navLinks.find((l) => l.href === `#${activeId}`);

  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Date.now() - start);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.hud}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      <span className={styles.dot} />
      <span className={styles.process}>{activeLink?.path ?? "~/home"}</span>
      <span className={styles.divider} />
      <span className={styles.uptime}>{formatUptime(uptime)}</span>
    </motion.div>
  );
}
