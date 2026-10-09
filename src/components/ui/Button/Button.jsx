import styles from "./Button.module.css";

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  external = false,
  ...props
}) {
  const combinedClassName = `${styles.btn} ${
    variant === "primary" ? styles.primary : styles.outline
  } ${className}`;

  const content = <span className={styles.label}>{children}</span>;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(external ? externalLinkProps : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
