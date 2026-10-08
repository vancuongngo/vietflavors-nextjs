"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { asset } from "@/lib";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label={site.name}>
          <Image src={asset("/images/logo.webp")} alt={site.name} width={800} height={200} priority />
        </Link>
        <div className="header__right">
          <nav id="main-nav" className="nav" data-open={open} aria-label="Huvudmeny">
            <NavLinks onNavigate={() => setOpen(false)} />
          </nav>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--sm header__order"
          >
            Beställ Mat
          </a>
          <button
            className="nav-toggle"
            aria-label="Meny"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open ? "M5 5l14 14M19 5L5 19" : "M3 6h18M3 12h18M3 18h18"} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
