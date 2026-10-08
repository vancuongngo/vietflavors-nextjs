import { site } from "@/data/site";
import styles from "./MapEmbed.module.css";

export function MapEmbed() {
  const q = encodeURIComponent(site.mapQuery);
  return (
    <iframe
      className={styles.map}
      title={`Karta över ${site.name}`}
      src={`https://maps.google.com/maps?q=${q}&z=14&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
