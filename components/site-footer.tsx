import Link from "next/link";
import { Container } from "./container";
import { NavLinks } from "./nav-links";

export function SiteFooter() {
  return (
    <Container>
      <footer className="mt-12 border-t border-line pt-14 pb-10 text-center">
        <p className="mb-4 text-[0.75rem] font-medium tracking-[0.08em] text-muted uppercase">
          Chief of Staff externe · Belgique
        </p>
        <Link
          href="/"
          className="mb-[18px] block font-serif text-[clamp(2.4rem,9vw,4.4rem)] leading-none transition-colors hover:text-orange-ink"
        >
          Sébastien
          <br />
          de Radiguès
        </Link>
        <NavLinks
          withPrivacy
          className="flex-wrap justify-center text-[0.9rem]"
        />
      </footer>
    </Container>
  );
}
