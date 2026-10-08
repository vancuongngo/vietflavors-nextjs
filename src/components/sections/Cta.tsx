import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import styles from "./Cta.module.css";

interface CtaProps {
  title: string;
  text: string;
  button: string;
  /** Background image path under /public. */
  image: string;
  /** Defaults to the contact page; pass `external` for off-site URLs. */
  href?: string;
  external?: boolean;
}

export function Cta({ title, text, button, image, href = "/contact", external }: CtaProps) {
  return (
    <section className={styles.cta} style={{ backgroundImage: `url(${asset(image)})` }}>
      <Container>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button href={href} external={external}>
            {button}
          </Button>
        </div>
      </Container>
    </section>
  );
}
