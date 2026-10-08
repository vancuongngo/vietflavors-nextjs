import { MenuList } from "@/components/menu/MenuList";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allDishes } from "@/data/menu";
import styles from "./MenuTeaser.module.css";

/** Home page section listing every dish with a link to the full menu. */
export function MenuTeaser({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Section tone="tint">
      <SectionHeading title={title} subtitle={subtitle} />
      <MenuList dishes={allDishes} />
      <div className={styles.action}>
        <Button href="/menu">Se hela menyn</Button>
      </div>
    </Section>
  );
}
