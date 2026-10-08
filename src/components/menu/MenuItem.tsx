import Image from "next/image";
import { dishImagePath, type Dish } from "@/data/menu";
import { asset } from "@/lib/asset";
import styles from "./MenuItem.module.css";

export function MenuItem({ dish }: { dish: Dish }) {
  return (
    <li className={styles.item}>
      <Image
        className={styles.img}
        src={asset(dishImagePath(dish))}
        alt=""
        width={88}
        height={88}
      />
      <div className={styles.body}>
        <div className={styles.head}>
          <span className={styles.title}>
            {dish.name}
            {dish.spicy && (
              <span role="img" aria-label="Stark" title="Stark">
                {" "}
                🌶️
              </span>
            )}
          </span>
          <span className={styles.line} aria-hidden />
          <span className={styles.price}>{dish.price}kr</span>
        </div>
        <p className={styles.desc}>{dish.description}</p>
      </div>
    </li>
  );
}
