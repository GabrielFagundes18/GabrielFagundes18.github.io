import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

// Anima o conteúdo (uma vez) quando ele entra na viewport. A animação é
// CSS puro; o JS só observa a visibilidade e troca a classe.
export function Reveal({
  as: Tag = "div",
  variant = "fadeUp",
  delay = 0,
  className = "",
  style,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles[variant] : ""} ${className}`}
      style={{ ...style, "--reveal-delay": `${delay}s` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
