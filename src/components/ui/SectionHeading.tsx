import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  /** Show the short accent line under the title. */
  divider?: boolean;
}

export function SectionHeading({ title, subtitle, divider = false }: SectionHeadingProps) {
  return (
    <header className={styles.head}>
      <h2>{title}</h2>
      {divider && <div className={styles.divider} />}
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
