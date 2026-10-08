import { phoneHref, site } from "@/data/site";
import { Social } from "@/components/ui/Social";
import styles from "./PhoneBlock.module.css";

export function PhoneBlock() {
  return (
    <div className={styles.block}>
      <h4>Hör av dig</h4>
      <a className={styles.tel} href={phoneHref}>
        {site.phone}
      </a>
      <Social />
    </div>
  );
}
