import { CornerMark } from "./corner-mark";

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
    <section className="relative overflow-hidden pt-11 pb-[30px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1.5 -right-1.5 size-16 opacity-55"
      >
        <CornerMark className="absolute -top-px -left-px size-[53px]" />
        <CornerMark className="absolute -right-px -bottom-px size-[53px] rotate-180" />
      </div>

      <p className="mb-5 text-[0.95rem] font-medium text-orange-ink">
        Chief of Staff externe, basé en Wallonie.
      </p>

      <h1 className="max-w-[16ch] font-serif text-[clamp(2rem,6vw,2.85rem)] leading-[1.16] font-normal">
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
    </section>
  );
}
