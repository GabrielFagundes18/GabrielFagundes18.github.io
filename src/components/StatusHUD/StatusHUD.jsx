import { useEffect, useState } from "react";
import { sections } from "../../data/navigation";
import { useActiveSection } from "../../contexts/ActiveSectionContext";
import styles from "./StatusHUD.module.css";

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// Elemento de assinatura do design: trata o portfólio como um sistema
// rodando ao vivo. Mostra a seção atual como "processo" ativo e um
// contador de tempo de sessão. É decorativo, por isso fica oculto para
// leitores de tela (a navegação já informa a seção atual).
export function StatusHUD() {
  const activeId = useActiveSection();
  const activeSection = sections.find((section) => section.id === activeId);

  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Date.now() - start);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hud} aria-hidden="true">
      <span className={styles.dot} />
      <span className={styles.process}>{activeSection?.path ?? "~/home"}</span>
      <span className={styles.divider} />
      <span className={styles.uptime}>{formatUptime(uptime)}</span>
    </div>
  );
}
