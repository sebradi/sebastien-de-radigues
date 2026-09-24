import { CornerMark } from "./corner-mark";
import { Divider } from "./divider";
import { Icon } from "./icon";

const LINES: React.ReactNode[] = [
  "L'instinct suffit pour",
  "lancer une entreprise.",
  <>
    Il ne suffit plus pour la{" "}
    <em className="text-orange-ink italic">faire tenir</em>.
  </>,
];

export function Hero() {
  return (
    <section className="relative pt-[52px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-1 hidden size-[70px] opacity-60 sm:block"
      >
        <CornerMark className="absolute -top-px -left-px size-[58px]" />
        <CornerMark className="absolute -right-px -bottom-px size-[58px] rotate-180" />
      </div>

      <p className="mb-[26px] inline-flex items-center gap-2 rounded-full bg-orange-soft px-3.5 py-[7px] text-[0.85rem] font-semibold text-orange-ink">
        <Icon name="clock" className="size-3.5" />
        Chief of Staff externe, basé en Belgique.
      </p>

      <h1 className="max-w-[15ch] font-serif text-[clamp(2.4rem,7vw,3.6rem)] leading-[1.08] font-normal">
        {LINES.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <span
              className="block motion-safe:animate-reveal"
              style={{ animationDelay: `${120 + i * 140}ms` }}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>

      <Divider className="mt-14" />
    </section>
  );
}
