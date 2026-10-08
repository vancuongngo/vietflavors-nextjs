import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MapEmbed } from "./MapEmbed";
import { OpeningHours } from "./OpeningHours";
import { PhoneBlock } from "./PhoneBlock";
import styles from "./InfoBand.module.css";

/** Map, "come visit" card, opening hours and phone. Shared by home and about. */
export function InfoBand() {
  return (
    <>
      <MapEmbed />
      <section className={styles.band}>
        <Container className={styles.grid}>
          <div className={styles.card}>
            <h4>Kom och upplev Vietflavors!</h4>
            <p>
              Kom förbi vår restaurang och njut av äkta vietnamesisk mat i hjärtat av Täby.
              <br />
              Har du frågor eller vill boka bord? Hör gärna av dig – vi ser fram emot ditt besök!
            </p>
            <Button href="/contact">{site.labels.contact}</Button>
          </div>
          <div className={styles.cols}>
            <div className={styles.hours}>
              <OpeningHours />
            </div>
            <div className={styles.phone}>
              <PhoneBlock />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
