import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";
import { Container } from "./Container";
import styles from "./Section.module.css";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone?: "default" | "tint";
  /** Which sides get the standard vertical padding. */
  spacing?: "both" | "top" | "bottom" | "none";
}

/** Page section with a standard vertical rhythm and an inner Container. */
export function Section({
  tone = "default",
  spacing = "both",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cx(styles.section, styles[spacing], tone === "tint" && styles.tint, className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
