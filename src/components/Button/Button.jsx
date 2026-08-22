import { motion } from "framer-motion";
import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}) {
  const combinedClassName = `${styles.btn} ${
    variant === "primary" ? styles.primary : styles.outline
  } ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={combinedClassName}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      <span className={styles.label}>{children}</span>
    </Component>
  );
}
