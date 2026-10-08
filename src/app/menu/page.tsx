import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/Hero";
import { InfoBand } from "@/components/InfoBand";
import { MenuColumns, splitColumns } from "@/components/MenuItemCard";
import { menuSections } from "@/data/menu";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Meny",
  description: "Autentiska vietnamesiska rätter: Gỏi, Bún, Bánh Mì, Phở och mycket mer.",
};

export default function MenuPage() {
  const [salads, noodles, specials] = menuSections;
  const render = (section: (typeof menuSections)[number]) => (
    <section className="container menu-category" style={{ paddingBlock: 0 }}>
      <h2>{section.title}</h2>
      <div className="divider-accent" />
      <MenuColumns columns={splitColumns(section.items)} />
    </section>
  );

  return (
    <>
      <PageHero
        title="Vår meny"
        text="Upptäck våra autentiska vietnamesiska rätter, tillagade med färska råvaror och traditionella smaker. Här hittar du allt från fräscha sallader och klassiska soppor till smakrika wok- och grillrätter – alla noggrant komponerade för en äkta Vietflavors-upplevelse."
      />
      <div style={{ paddingBlock: 90 }}>{render(salads)}</div>
      <div style={{ paddingBottom: 90 }}>{render(noodles)}</div>
      <Cta
        title="Naturliga ingredienser och god mat"
        text="Vi använder färska och naturliga råvaror i alla våra rätter. Med traditionella vietnamesiska smaker och omsorgsfullt tillagade ingredienser bjuder vi på mat som både är hälsosam och full av smak."
        button="Kontakta oss"
        image="/images/cta-1.jpg"
      />
      <div style={{ paddingBlock: 90 }}>{render(specials)}</div>
      <Cta
        title="Njut av god smak och lev livet"
        text="Hos Vietflavors vill vi att du ska uppleva maten med alla sinnen. Med våra autentiska vietnamesiska rätter, tillagade med kärlek och de bästa råvarorna, bjuder vi in dig att njuta av god smak och skapa minnen. Livet är till för att levas – och det görs bäst med fantastisk mat och gott sällskap."
        button="Beställ Mat"
        externalHref={site.orderUrl}
        image="/images/cta-2.jpg"
      />
      <InfoBand />
    </>
  );
}

