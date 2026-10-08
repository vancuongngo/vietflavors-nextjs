import Image from "next/image";
import { NavLinks } from "./NavLinks";
import { asset } from "@/lib";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <Image className="footer__logo" src={asset("/images/logo-footer.webp")} alt={site.name} width={800} height={200} />
      <nav aria-label="Sidfot">
        <NavLinks />
      </nav>
      <p>
        Copyright © {new Date().getFullYear()} <span className="brand">vietflavors</span>
      </p>
    </footer>
  );
}
