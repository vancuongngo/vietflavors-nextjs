import type { Metadata } from "next";
import { MenuCategory } from "@/components/menu/MenuCategory";
import { Cta } from "@/components/sections/Cta";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { getSection } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Meny",
  description: "Autentiska vietnamesiska rätter: Gỏi, Bún, Bánh Mì, Phở och mycket mer.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        title="Vår meny"
        text="Upptäck våra autentiska vietnamesiska rätter, tillagade med färska råvaror och traditionella smaker. Här hittar du allt från fräscha sallader och klassiska soppor till smakrika wok- och grillrätter – alla noggrant komponerade för en äkta Vietflavors-upplevelse."
      />
      <Section>
        <MenuCategory section={getSection("goi")} />
        <MenuCategory section={getSection("bun")} />
      </Section>
      <Cta
        title="Naturliga ingredienser och god mat"
        text="Vi använder färska och naturliga råvaror i alla våra rätter. Med traditionella vietnamesiska smaker och omsorgsfullt tillagade ingredienser bjuder vi på mat som både är hälsosam och full av smak."
        button={site.labels.contact}
        image="/images/cta-1.jpg"
      />
      <Section>
        <MenuCategory section={getSection("specials")} />
      </Section>
      <Cta
        title="Njut av god smak och lev livet"
        text="Hos Vietflavors vill vi att du ska uppleva maten med alla sinnen. Med våra autentiska vietnamesiska rätter, tillagade med kärlek och de bästa råvarorna, bjuder vi in dig att njuta av god smak och skapa minnen. Livet är till för att levas – och det görs bäst med fantastisk mat och gott sällskap."
        button={site.labels.order}
        image="/images/cta-2.jpg"
        href={site.orderUrl}
        external
      />
      <MapEmbed />
    </>
  );
}
