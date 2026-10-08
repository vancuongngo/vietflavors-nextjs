import Image from "next/image";
import { asset } from "@/lib";
import { site } from "@/data/site";

export function Social() {
  return (
    <div className="social">
      {site.social.map((s) => (
        <a key={s.label} href={s.href} aria-label={s.label} rel="noopener">
          <Image src={asset(`/images/social/${s.icon}.svg`)} alt="" width={12} height={12} />
        </a>
      ))}
    </div>
  );
}
