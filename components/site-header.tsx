import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { Container } from "./container";
import { NavLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <Container>
      <header className="flex items-center justify-between gap-4 py-[26px]">
        <Link href="/" className="font-serif text-[1.02rem] font-medium">
          {SITE_NAME}
        </Link>
        <NavLinks />
      </header>
    </Container>
  );
}
