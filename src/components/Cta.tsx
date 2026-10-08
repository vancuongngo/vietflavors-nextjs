import Link from "next/link";
import { asset } from "@/lib";

export function Cta({ title, text, button, image }: { title: string; text: string; button: string; image: string }) {
  return (
    <section className="cta" style={{ backgroundImage: `url(${asset(image)})` }}>
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href="/contact" className="btn btn--sm">
          {button}
        </Link>
      </div>
    </section>
  );
}
