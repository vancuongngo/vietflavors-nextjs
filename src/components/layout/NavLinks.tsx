"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const normalize = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = normalize(usePathname());
  return (
    <>
      {site.nav.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          aria-current={pathname === href ? "page" : undefined}
          onClick={onNavigate}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
