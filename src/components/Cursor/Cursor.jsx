import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./Cursor.module.css";

// Cursor customizado: some em telas sensíveis ao toque (mobile) e
// respeita prefers-reduced-motion. É puramente decorativo — não
// substitui o cursor nativo em nenhuma interação real.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (coarsePointer || reducedMotion) return;

    setEnabled(true);

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      setIsPointer(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className={`${styles.cursor} ${isPointer ? styles.hover : ""}`}
      style={{ translateX: springX, translateY: springY }}
    />
  );
}
