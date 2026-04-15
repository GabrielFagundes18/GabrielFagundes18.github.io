import styles from "./Button.module.css";

export function Button({ children, variant = "primary", ...props }) {
  const className = `${styles.btn} ${variant === "primary" ? styles.primary : styles.outline}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
