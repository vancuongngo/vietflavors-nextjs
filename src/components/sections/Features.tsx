import Image from "next/image";
import type { ReactNode } from "react";
import { asset } from "@/lib/asset";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Features.module.css";

export interface Feature {
  image: string;
  title: string;
  text: ReactNode;
}

export function Features({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: Feature[];
}) {
  return (
    <Section spacing="top">
      <SectionHeading title={title} subtitle={subtitle} />
      <div className={styles.grid}>
        {items.map((f) => (
          <article key={f.title}>
            <Image src={asset(f.image)} alt={f.title} width={480} height={480} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
