import Link from "next/link";
import { LINKEDIN_URL } from "@/lib/site";

const linkClass =
  "border-b border-transparent pb-0.5 text-muted transition-colors duration-150 hover:border-orange hover:text-ink focus-visible:border-orange focus-visible:text-ink focus-visible:outline-none";

export function NavLinks({
  linkedinLabel = "LinkedIn",
  className = "",
}: {
  linkedinLabel?: string;
  className?: string;
}) {
  return (
    <nav className={`flex items-center gap-x-3.5 gap-y-2 text-[0.85rem] whitespace-nowrap sm:gap-x-[22px] sm:text-[0.92rem] ${className}`}>
      <Link href="/methode" className={linkClass}>
        Ma méthode
      </Link>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {linkedinLabel}
      </a>
    </nav>
  );
}
