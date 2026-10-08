import Link from "next/link";
import { asset } from "@/lib";

interface CtaProps {
  title: string;
  text: string;
  button: string;
  image: string;
  /** Absolute URL: opens in a new tab. Defaults to the contact page. */
  externalHref?: string;
}

export function Cta({ title, text, button, image, externalHref }: CtaProps) {
  return (
    <section className="cta" style={{ backgroundImage: `url(${asset(image)})` }}>
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        {externalHref ? (
          <a href={externalHref} target="_blank" rel="noopener noreferrer" className="btn btn--sm">
            {button}
          </a>
        ) : (
          <Link href="/contact" className="btn btn--sm">
            {button}
          </Link>
        )}
      </div>
    </section>
  );
}
