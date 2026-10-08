import Image from "next/image";
import { asset } from "@/lib/asset";
import { Container } from "@/components/ui/Container";
import styles from "./PageHero.module.css";

export function PageHero({ title, text }: { title: string; text?: string }) {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.bg}
        src={asset("/images/page-hero.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <Container className={styles.content}>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </Container>
    </section>
  );
}
