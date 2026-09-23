import { LINKEDIN_URL } from "@/lib/site";
import { Container } from "./container";
import { PillButton } from "./pill-button";

export function CtaBand() {
  return (
    <Container>
      <section className="mb-2 grid grid-cols-1 items-center gap-[30px] rounded-band bg-ink px-[34px] py-[52px] text-paper min-[680px]:grid-cols-[1.1fr_1fr]">
        <h2 className="font-serif text-[clamp(1.5rem,4vw,2rem)] leading-[1.3] font-normal italic">
          Discutons de votre structure.
        </h2>
        <div>
          <p className="mb-5 max-w-[36ch] text-[0.98rem] leading-[1.65] text-subtle">
            La suite, ça commence par une conversation, sans engagement, pour
            comprendre votre situation avant de parler de quoi que ce soit
            d&apos;autre.
          </p>
          <PillButton href={LINKEDIN_URL} variant="orange" external>
            Me contacter sur LinkedIn
          </PillButton>
        </div>
      </section>
    </Container>
  );
}
