import Link from "next/link";
import { Icon } from "./icon";

const VARIANTS = {
  ink: "bg-ink text-paper focus-visible:outline-ink",
  orange: "bg-orange text-cta-ink focus-visible:outline-orange",
};

export function PillButton({
  href,
  variant = "ink",
  external = false,
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANTS;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = `inline-flex min-h-12 items-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:hover:translate-y-0 ${VARIANTS[variant]}`;
  const content = (
    <>
      {children}
      <Icon name="chevron" className="size-4" />
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
