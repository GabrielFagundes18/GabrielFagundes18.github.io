import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

// Quanto o anel percorre da distância até o mouse a cada quadro (0–1).
// Valores menores deixam o movimento mais "elástico".
const FOLLOW = 0.25;

// Cursor customizado: some em telas sensíveis ao toque (mobile) e
// respeita prefers-reduced-motion. É puramente decorativo — não
// substitui o cursor nativo em nenhuma interação real.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarsePointer || reducedMotion) return undefined;

    setEnabled(true);

    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let frame = null;

    // O loop só roda enquanto o anel ainda não alcançou o mouse.
    const tick = () => {
      current.x += (target.x - current.x) * FOLLOW;
      current.y += (target.y - current.y) * FOLLOW;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }
      const settled =
        Math.abs(target.x - current.x) < 0.1 && Math.abs(target.y - current.y) < 0.1;
      frame = settled ? null : requestAnimationFrame(tick);
    };

    const handleMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setIsPointer(Boolean(e.target.closest("a, button")));
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      className={`${styles.cursor} ${isPointer ? styles.hover : ""}`}
      aria-hidden="true"
    />
  );
}
