import type { Metadata } from "next";
import { PageHero } from "@/components/Hero";
import { MapEmbed } from "@/components/InfoBand";
import { Social } from "@/components/Social";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakta oss",
  description: `Hitta hit: ${site.address}. Öppet ${site.hours.days} ${site.hours.time}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Kontakta oss" text="Tveka inte att kontakta oss" />
      <div className="container contact-grid">
        <div>
          <h4>Öppettider</h4>
          <div className="hours-row">
            <span>{site.hours.days}</span>
            <span>{site.hours.time}</span>
          </div>
          <div className="dotted" style={{ borderTopWidth: 3 }} />
        </div>
        <div className="contact-card">
          <h3>Hitta hit</h3>
          <p>{site.address}</p>
          <a className="btn btn--sm" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            Visa på karta
          </a>
        </div>
        <div>
          <h4>Hör av dig</h4>
          <a className="contact-phone" style={{ display: "block" }} href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
            {site.phone}
          </a>
          <Social />
        </div>
      </div>
      <MapEmbed />
    </>
  );
}
