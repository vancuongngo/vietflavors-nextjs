import { site } from "@/data/site";
import styles from "./OpeningHours.module.css";

/** `stacked`: days above time (info band). `inline`: days left, time right (contact page). */
export function OpeningHours({ layout = "stacked" }: { layout?: "stacked" | "inline" }) {
  return (
    <div>
      <h4 className={styles.title}>Öppettider</h4>
      <div className={layout === "inline" ? styles.inline : undefined}>
        <p>{site.hours.days}</p>
        <p>{site.hours.time}</p>
      </div>
      <div className={styles.dotted} />
    </div>
  );
}
