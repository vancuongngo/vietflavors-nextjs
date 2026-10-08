export const site = {
  name: "Viet Flavors",
  legalName: "Vietflavors",
  description:
    "Autentisk vietnamesisk mat i Täby – färska råvaror, traditionella recept och kärlek till maten.",
  phone: "+46 76-206 69 93",
  address: {
    street: "Stora Marknadsvägen 15",
    postalCode: "183 70",
    city: "Täby",
    country: "SE",
  },
  /** Opening hours: display text and schema.org spec. */
  hours: {
    days: "Mon-Sön",
    time: "10:00AM – 08:00PM",
    schema: {
      dayOfWeek: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      opens: "10:00",
      closes: "20:00",
    },
  },
  orderUrl: "https://qopla.com/v2/restaurant/viet-flavours---taby/qORoWVxMOr/order",
  mapsUrl: "https://maps.app.goo.gl/aAuH6d51SmMqYkbZ7",
  mapQuery: "Mama Viet, Stora Marknadsvägen 15, 183 70 Täby",
  labels: { order: "Beställ Mat", contact: "Kontakta oss", seeMenu: "Se vår meny" },
  nav: [
    { href: "/", label: "Hem" },
    { href: "/menu", label: "Meny" },
    { href: "/about", label: "Om oss" },
    { href: "/contact", label: "Kontakta" },
  ],
  social: [
    { label: "Facebook", href: "#", icon: "facebook-logo" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
