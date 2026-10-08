import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  size?: "md" | "sm";
  /** Open in a new tab (use for off-site URLs). */
  external?: boolean;
  className?: string;
}

/** Link styled as a button. Internal URLs use next/link, external ones a plain anchor. */
export function Button({
  href,
  children,
  variant = "solid",
  size = "sm",
  external = false,
  className,
}: ButtonProps) {
  const classes = cx(styles.btn, styles[variant], size === "sm" && styles.sm, className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
