import Image from "next/image";
import { asset } from "@/lib";

export function PageHero({ title, text }: { title: string; text?: string }) {
  return (
    <section className="hero hero--page">
      <Image className="hero__bg" src={asset("/images/page-hero.jpg")} alt="" fill priority sizes="100vw" />
      <div className="container hero__content">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
