import { LINKEDIN_URL } from "@/lib/site";
import { ArrowIcon } from "./arrow-icon";
import { Container } from "./container";

export function CtaBand() {
  return (
    <section className="bg-orange text-cta-ink">
      <Container className="py-12 text-center">
        <p className="mx-auto mb-[22px] max-w-[48ch] text-[1.08rem] leading-[1.65]">
          La suite, ça commence par une conversation, sans engagement, pour
          comprendre votre situation avant de parler de quoi que ce soit
          d&apos;autre.
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center gap-2.5 bg-ink px-[26px] py-3.5 text-[0.98rem] font-medium text-paper transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink motion-reduce:hover:translate-y-0"
        >
          Me contacter sur LinkedIn
          <ArrowIcon />
        </a>
      </Container>
    </section>
  );
}
