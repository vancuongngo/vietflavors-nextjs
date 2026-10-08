import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { PageHero } from "@/components/sections/PageHero";
import { fullAddress, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakta oss",
  description: `Hitta hit: ${fullAddress}. Öppet ${site.hours.days} ${site.hours.time}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Kontakta oss" text="Tveka inte att kontakta oss" />
      <ContactDetails />
      <MapEmbed />
    </>
  );
}
