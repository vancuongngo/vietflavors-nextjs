import type { Dish } from "@/data/menu";
import { MenuItem } from "./MenuItem";
import styles from "./MenuList.module.css";

/** Dishes in two balanced columns (left column gets the extra one when odd). */
export function MenuList({ dishes }: { dishes: Dish[] }) {
  const mid = Math.ceil(dishes.length / 2);
  const columns = [dishes.slice(0, mid), dishes.slice(mid)];
  return (
    <div className={styles.grid}>
      {columns.map((column, i) => (
        <ul key={i} className={styles.column}>
          {column.map((dish) => (
            <MenuItem key={dish.id} dish={dish} />
          ))}
        </ul>
      ))}
    </div>
  );
}
