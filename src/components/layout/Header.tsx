"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NavLinks } from "./NavLinks";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={site.name}>
          <Image
            src={asset("/images/logo.webp")}
            alt={site.name}
            width={800}
            height={200}
            priority
          />
        </Link>
        <div className={styles.right}>
          <nav id="main-nav" className={styles.nav} data-open={open} aria-label="Huvudmeny">
            <NavLinks onNavigate={() => setOpen(false)} />
            <a
              className={styles.navOrder}
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.labels.order}
            </a>
          </nav>
          <Button href={site.orderUrl} external className={styles.order}>
            {site.labels.order}
          </Button>
          <button
            className={styles.toggle}
            aria-label="Meny"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d={open ? "M5 5l14 14M19 5L5 19" : "M3 6h18M3 12h18M3 18h18"} />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
