import type { MenuSection } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuList } from "./MenuList";
import styles from "./MenuCategory.module.css";

export function MenuCategory({ section }: { section: MenuSection }) {
  return (
    <div id={section.id} className={styles.category}>
      <SectionHeading title={section.title} divider />
      <MenuList dishes={section.dishes} />
    </div>
  );
}
