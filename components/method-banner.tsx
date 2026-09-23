import { PillButton } from "./pill-button";

export function MethodBanner() {
  return (
    <section className="relative mb-11 grid grid-cols-1 items-center gap-5 overflow-hidden rounded-band bg-orange-soft px-[34px] py-11 min-[680px]:grid-cols-[1fr_auto]">
      <span
        aria-hidden="true"
        className="absolute top-1/2 right-2 hidden -translate-y-1/2 font-serif text-[9rem] leading-none text-orange-watermark select-none min-[680px]:block"
      >
        07
      </span>
      <div className="relative">
        <h2 className="mb-2 font-serif text-[1.7rem]">Ma méthode</h2>
        <p className="max-w-[40ch] text-base text-orange-ink">
          Comment j&apos;aborde une structure, en sept principes.
        </p>
      </div>
      <div className="relative">
        <PillButton href="/methode">
          Découvrir<span className="sr-only"> ma méthode</span>
        </PillButton>
      </div>
    </section>
  );
}
