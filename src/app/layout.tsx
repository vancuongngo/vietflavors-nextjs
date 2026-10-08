import type { Metadata, Viewport } from "next";
import { Nunito_Sans, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/asset";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const title = `${site.name} – Vietnamesisk restaurang i Täby`;

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: absoluteUrl("/images/og.jpg"), width: 1920, height: 1080 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${poppins.variable} ${nunito.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
