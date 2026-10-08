import Image from "next/image";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";
import { NavLinks } from "./NavLinks";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src={asset("/images/logo-footer.webp")}
        alt={site.name}
        width={800}
        height={200}
      />
      <nav className={styles.nav} aria-label="Sidfot">
        <NavLinks />
      </nav>
      <p>
        Copyright © {new Date().getFullYear()}{" "}
        <span className={styles.brand}>{site.legalName.toLowerCase()}</span>
      </p>
    </footer>
  );
}
