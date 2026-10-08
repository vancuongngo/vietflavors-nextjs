export const site = {
  name: "Viet Flavors",
  description:
    "Autentisk vietnamesisk mat i Täby – färska råvaror, traditionella recept och kärlek till maten.",
  phone: "+46 76-206 69 93",
  address: "Stora Marknadsvägen 15, 183 70 Täby",
  orderUrl: "https://qopla.com/v2/restaurant/viet-flavours---taby/qORoWVxMOr/order",
  mapsUrl: "https://maps.app.goo.gl/aAuH6d51SmMqYkbZ7",
  hours: { days: "Mon-Sön", time: "10:00AM – 08:00PM" },
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
