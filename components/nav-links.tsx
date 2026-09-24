import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/site";

// La zone cliquable fait au moins 44x44px ; le soulignement reste collé au texte.
const linkClass =
  "group inline-flex min-h-11 min-w-11 items-center justify-center px-1.5 text-muted transition-colors duration-150 hover:text-ink focus-visible:text-ink focus-visible:outline-none";
const labelClass =
  "border-b border-transparent pb-0.5 transition-colors duration-150 group-hover:border-orange group-focus-visible:border-orange";

export function NavLinks({
  withPrivacy = false,
  className = "",
}: {
  withPrivacy?: boolean;
  className?: string;
}) {
  return (
    <nav
      className={`-mx-1.5 flex items-center gap-x-1 text-[0.85rem] whitespace-nowrap sm:gap-x-3 sm:text-[0.92rem] ${className}`}
    >
      <Link href="/methode" className={linkClass}>
        <span className={labelClass}>Ma méthode</span>
      </Link>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <span className={labelClass}>Contact</span>
      </a>
      {withPrivacy && (
        <Link href="/confidentialite" className={linkClass}>
          <span className={labelClass}>Confidentialité</span>
        </Link>
      )}
    </nav>
  );
}
