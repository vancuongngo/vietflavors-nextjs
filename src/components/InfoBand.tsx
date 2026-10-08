import Link from "next/link";
import { Social } from "./Social";
import { site } from "@/data/site";

export function MapEmbed() {
  const q = encodeURIComponent(`Mama Viet, ${site.address}`);
  return (
    <iframe
      className="map"
      title="Karta över Viet Flavors"
      src={`https://maps.google.com/maps?q=${q}&z=14&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function InfoBand() {
  return (
    <>
      <MapEmbed />
      <section className="info">
        <div className="container info__grid">
          <div className="info__card">
            <h4>Kom och upplev Vietflavors!</h4>
            <p>
              Kom förbi vår restaurang och njut av äkta vietnamesisk mat i hjärtat av Täby.
              <br />
              Har du frågor eller vill boka bord? Hör gärna av dig – vi ser fram emot ditt besök!
            </p>
            <Link href="/contact" className="btn btn--sm">
              Kontakta oss
            </Link>
          </div>
          <div className="info__cols">
            <div className="info__hours">
              <h4>Öppettider</h4>
              <p>{site.hours.days}</p>
              <p>{site.hours.time}</p>
              <div className="dotted" />
            </div>
            <div className="info__phone">
              <h4>Hör av dig</h4>
              <a className="tel" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
                {site.phone}
              </a>
              <Social />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
