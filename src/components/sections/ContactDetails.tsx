import { fullAddress, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { OpeningHours } from "./OpeningHours";
import { PhoneBlock } from "./PhoneBlock";
import styles from "./ContactDetails.module.css";

/** Three-column hours / address / phone block for the contact page. */
export function ContactDetails() {
  return (
    <Section>
      <div className={styles.grid}>
        <OpeningHours layout="inline" />
        <div className={styles.card}>
          <h3>Hitta hit</h3>
          <p>{fullAddress}</p>
          <Button href={site.mapsUrl} external>
            Visa på karta
          </Button>
        </div>
        <PhoneBlock />
      </div>
    </Section>
  );
}
