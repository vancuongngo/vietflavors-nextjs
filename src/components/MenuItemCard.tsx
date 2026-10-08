import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { asset } from "@/lib";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <li className="menu-item">
      <Image
        className="menu-item__img"
        src={asset(`/images/menu/${item.image}.webp`)}
        alt=""
        width={88}
        height={88}
      />
      <div className="menu-item__body">
        <div className="menu-item__head">
          <span className="menu-item__title">
            {item.name}
            {item.spicy && (
              <span role="img" aria-label="Stark" title="Stark">
                {" "}
                🌶️
              </span>
            )}
          </span>
          <span className="menu-item__line" aria-hidden />
          <span className="menu-item__price">{item.price}kr</span>
        </div>
        <p className="menu-item__desc">{item.description}</p>
      </div>
    </li>
  );
}

export function MenuColumns({ columns }: { columns: MenuItem[][] }) {
  return (
    <div className="menu-grid">
      {columns.map((items, i) => (
        <ul key={i} className="menu-col" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((it) => (
            <MenuItemCard key={it.name} item={it} />
          ))}
        </ul>
      ))}
    </div>
  );
}

/** Split items into two balanced columns (left-heavy), like the original layout. */
export function splitColumns<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}
