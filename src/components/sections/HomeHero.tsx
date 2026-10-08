import Image from "next/image";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.bg}
        src={asset("/images/hero-bg.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <Container className={styles.content}>
        <h1>
          Upplev Vietnams
          <br />
          Smaker
        </h1>
        <p>Autentisk vietnamesisk mat tillagad med kärlek – precis som hemma i Vietnam</p>
        <Button href="/menu" size="md">
          {site.labels.seeMenu}
        </Button>
      </Container>
    </section>
  );
}
