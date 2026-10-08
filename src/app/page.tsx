import Image from "next/image";
import Link from "next/link";
import { InfoBand } from "@/components/InfoBand";
import { MenuColumns } from "@/components/MenuItemCard";
import { homeMenuColumns } from "@/data/menu";
import { asset } from "@/lib";

const features = [
  {
    image: "14-pho",
    title: "Smaker Från Vietnam",
    text: (
      <>
        Traditionella rätter som <em>phở</em>, <em>bún bò</em> och <em>gỏi cuốn</em>, precis som du hittar dem i
        Vietnam.
      </>
    ),
  },
  {
    image: "20-banh-xeo",
    title: "Färska Råvaror Varje Dag",
    text: "Vi lagar vår mat dagligen med färska ingredienser för bästa kvalitet och smak.",
  },
  {
    image: "8-banh-mi",
    title: "En Bit Av Vietnam i Sverige",
    text: "Vår restaurang är en plats där vietnamesisk matkultur möter svensk värme och gemenskap.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home">
        <Image className="hero__bg" src={asset("/images/hero-bg.jpg")} alt="" fill priority sizes="100vw" />
        <div className="container hero__content">
          <h1>
            Upplev Vietnams
            <br />
            Smaker
          </h1>
          <p>Autentisk vietnamesisk mat tillagad med kärlek – precis som hemma i Vietnam</p>
          <Link href="/menu" className="btn">
            Se vår meny
          </Link>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 105 }}>
        <div className="section-head">
          <h2>Vad Vi Erbjuder</h2>
          <p>Äkta vietnamesiska smaker, tillagade med kärlek – mitt i Sverige.</p>
        </div>
        <div className="features">
          {features.map((f) => (
            <div key={f.title}>
              <Image src={asset(`/images/menu/${f.image}.webp`)} alt="" width={480} height={480} />
              <h5>{f.title}</h5>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="section-head">
            <h2>Vår meny</h2>
            <p style={{ fontSize: 17 }}>
              Upptäck våra autentiska vietnamesiska rätter, tillagade med färska råvaror och traditionella smaker. Här
              hittar du allt från fräscha sallader och klassiska soppor till smakrika wok- och grillrätter – alla
              noggrant komponerade för en äkta Vietflavors-upplevelse.
            </p>
          </div>
          <MenuColumns columns={homeMenuColumns} />
          <div className="section-cta">
            <Link href="/menu" className="btn btn--sm">
              Se hela menyn
            </Link>
          </div>
        </div>
      </section>

      <InfoBand />
    </>
  );
}
