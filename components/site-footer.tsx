import Link from "next/link";
import { LINKEDIN_LABEL } from "@/lib/site";
import { Container } from "./container";
import { NavLinks } from "./nav-links";

export function SiteFooter() {
  return (
    <Container>
      <footer className="pt-16 pb-10 text-center">
        <Link
          href="/"
          className="mb-[18px] block font-serif text-[clamp(2.4rem,9vw,4.4rem)] leading-none transition-colors hover:text-orange-ink"
        >
          Sébastien
          <br />
          de Radiguès
        </Link>
        <NavLinks
          linkedinLabel={LINKEDIN_LABEL}
          className="flex-wrap justify-center text-[0.9rem]"
        />
      </footer>
    </Container>
  );
}
