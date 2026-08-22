import styles from "./Marquee.module.css";

// Marquee em CSS puro (sem JS por frame) para não pesar performance.
// Duplicamos o conteúdo uma vez e animamos translateX de 0 a -50%,
// criando o efeito de loop infinito.
export function Marquee({ children, speed = 32, reverse = false }) {
  return (
    <div className={styles.marquee}>
      <div
        className={styles.track}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
