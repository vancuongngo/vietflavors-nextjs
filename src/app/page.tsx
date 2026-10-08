import { Features, type Feature } from "@/components/sections/Features";
import { HomeHero } from "@/components/sections/HomeHero";
import { InfoBand } from "@/components/sections/InfoBand";
import { MenuTeaser } from "@/components/sections/MenuTeaser";
import { dishImagePath } from "@/data/menu";
import { restaurantJsonLd } from "@/lib/jsonld";

const featureImage = (no: number, id: string) => dishImagePath({ no, id });

const features: Feature[] = [
  {
    image: featureImage(14, "pho"),
    title: "Smaker Från Vietnam",
    text: (
      <>
        Traditionella rätter som <em>phở</em>, <em>bún bò</em> och <em>gỏi cuốn</em>, precis som du
        hittar dem i Vietnam.
      </>
    ),
  },
  {
    image: featureImage(20, "banh-xeo"),
    title: "Färska Råvaror Varje Dag",
    text: "Vi lagar vår mat dagligen med färska ingredienser för bästa kvalitet och smak.",
  },
  {
    image: featureImage(8, "banh-mi"),
    title: "En Bit Av Vietnam i Sverige",
    text: "Vår restaurang är en plats där vietnamesisk matkultur möter svensk värme och gemenskap.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
      />
      <HomeHero />
      <Features
        title="Vad Vi Erbjuder"
        subtitle="Äkta vietnamesiska smaker, tillagade med kärlek – mitt i Sverige."
        items={features}
      />
      <MenuTeaser
        title="Vår meny"
        subtitle="Upptäck våra autentiska vietnamesiska rätter, tillagade med färska råvaror och traditionella smaker. Här hittar du allt från fräscha sallader och klassiska soppor till smakrika wok- och grillrätter – alla noggrant komponerade för en äkta Vietflavors-upplevelse."
      />
      <InfoBand />
    </>
  );
}
