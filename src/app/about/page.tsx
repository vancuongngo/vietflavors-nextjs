import type { Metadata } from "next";
import { InfoBand } from "@/components/sections/InfoBand";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Social } from "@/components/ui/Social";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Vietflavors är en vietnamesisk restaurang i Täby som erbjuder äkta smaker från Vietnam.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Om Oss"
        text="Vietflavors är en vietnamesisk restaurang i Täby som erbjuder äkta smaker från Vietnam. Med färska råvaror, traditionella recept och kärlek till maten skapar vi rätter som Phở, Bánh Mì, Gỏi och mycket mer – alltid lagade med omsorg. Välkommen att upptäcka vår matglädje!"
      />
      <Section spacing="both" className={styles.section}>
        <div className={styles.prose}>
          <h2>Vår berättelse</h2>
          <p>
            Vietflavors föddes ur en kärlek till vietnamesisk mat och en önskan att dela våra
            barndomsminnen, familjerecept och traditionella smaker med människor i Sverige. För oss
            handlar mat inte bara om att äta – det är ett sätt att föra människor samman, att skapa
            gemenskap och att bevara kultur.
          </p>
          <p>
            Vi växte upp med doften av citrongräs, vitlök och färska örter i köket. Varje måltid var
            ett hantverk, tillagat med omsorg och glädje. Med Vietflavors vill vi återskapa just den
            känslan – oavsett om du väljer en varm skål <em>Phở</em>, en fräsch <em>Gỏi</em> eller
            en krispig <em>Bánh Xèo</em>.
          </p>
          <p>
            Sedan vi öppnade vår restaurang i Täby har vi haft ett tydligt mål: att erbjuda genuin
            vietnamesisk mat lagad med färska ingredienser, precis som hemma. Vi kombinerar
            traditionella recept med en modern touch och anpassar rätterna för att passa både
            nyfikna nybörjare och riktiga matälskare.
          </p>
          <p>Det här är vår berättelse – och nu vill vi gärna bli en del av din.</p>
          <hr />
          <h5>Följ oss</h5>
          <Social />
        </div>
      </Section>
      <InfoBand />
    </>
  );
}
