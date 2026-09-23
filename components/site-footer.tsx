import Link from "next/link";
import { LINKEDIN_LABEL, SITE_NAME } from "@/lib/site";
import { Container } from "./container";
import { NavLinks } from "./nav-links";

export function SiteFooter() {
  return (
    <Container>
      <footer className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-[30px] pb-[46px] text-[0.86rem]">
        <Link
          href="/"
          className="font-serif text-muted transition-colors hover:text-ink"
        >
          {SITE_NAME}
        </Link>
        <NavLinks linkedinLabel={LINKEDIN_LABEL} />
      </footer>
    </Container>
  );
}
