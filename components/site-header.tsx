import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { Container } from "./container";
import { NavLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <Container>
      <header className="flex items-center justify-between gap-3 py-[26px]">
        <Link href="/" className="shrink-0 font-serif text-[0.98rem] sm:text-[1.05rem] font-semibold whitespace-nowrap">
          {SITE_NAME}
        </Link>
        <NavLinks className="justify-end" />
      </header>
    </Container>
  );
}
