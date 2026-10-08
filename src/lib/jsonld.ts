import { site } from "@/data/site";
import { absoluteUrl } from "./asset";

/** schema.org Restaurant description for search engines. */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.legalName,
    description: site.description,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/og.jpg"),
    logo: absoluteUrl("/images/logo.webp"),
    telephone: site.phone,
    servesCuisine: "Vietnamese",
    menu: absoluteUrl("/menu/"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      ...site.hours.schema,
    },
  };
}
