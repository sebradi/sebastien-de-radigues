import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CornerMark } from "@/components/corner-mark";
import { CtaBand } from "@/components/cta-band";
import { Divider } from "@/components/divider";
import { IconBadge, type IconName } from "@/components/icon";
import { SectionRow } from "@/components/section-row";

export const metadata: Metadata = {
  title: "Ma méthode",
  description:
    "Comment j'aborde une structure, en sept principes : diagnostiquer, prioriser, simplifier, impliquer, mesurer, itérer, transmettre.",
};

const PRINCIPLES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Diagnostiquer",
    body: "Comprendre ce qui existe déjà avant de vouloir le changer.",
    icon: "search",
  },
  {
    title: "Prioriser",
    body: "Prioriser ce qui débloque le plus, pas ce qui se voit le plus.",
    icon: "flag",
  },
  {
    title: "Simplifier",
    body: "Construire des systèmes simples qui tiennent, jamais des process lourds copiés d'un livre.",
    icon: "simplify",
  },
  {
    title: "Impliquer",
    body: "Un process qui ignore les humains qui doivent le suivre échoue, même parfait sur le papier. L'adhésion compte autant que la conception.",
    icon: "users",
  },
  {
    title: "Mesurer",
    body: "Un process est un mindset avant d'être un outil. Mesurer, comprendre, améliorer avec les retours du terrain, même sans logiciel, même offline.",
    icon: "ruler",
  },
  {
    title: "Itérer",
    body: "Un process n'est jamais bon du premier coup. Il s'améliore par itérations successives, jamais par une refonte parfaite dès le départ.",
    icon: "refresh",
  },
  {
    title: "Transmettre",
    body: "Transmettre plutôt que rendre dépendant.",
    icon: "share",
  },
];

export default function MethodePage() {
  return (
    <>
      <Container>
        <section className="pt-[52px]">
          <h1 className="mb-[18px] font-serif text-[clamp(2.4rem,7vw,3.6rem)] leading-[1.08] font-normal">
            Ma méthode
          </h1>
          <p className="max-w-[32ch] font-serif text-[1.2rem] leading-[1.4] text-orange-ink italic">
            J&apos;ai commencé à structurer des organisations avant de mettre ce
            mot dessus.
          </p>
          <Divider className="mt-14" />
        </section>

        <section className="grid grid-cols-1 items-start gap-[34px] py-11 min-[680px]:grid-cols-[220px_1fr]">
          {/* TODO: remplacer par la vraie photo (next/image). */}
          <div className="relative w-full max-w-[220px]">
            <div className="relative aspect-[4/5] rounded-card border border-line bg-[#EDECE6]">
              <span className="absolute right-3 bottom-3 left-3 text-[0.72rem] text-muted italic">
                photo à intégrer
              </span>
            </div>
            <CornerMark className="absolute -top-2 -left-2 size-6" />
            <CornerMark className="absolute -right-2 -bottom-2 size-6 rotate-180" />
          </div>
          <SectionRow icon="layers" title="Le studio">
            <p>
              Pendant sept ans, dans un startup studio, co-lancer des startups
              voulait dire partir d&apos;une idée floue et construire, en même
              temps, l&apos;organisation qui la porte. Les opérations. Les
              premières ventes. Le marketing. Parfois une levée de fonds.
              Parfois les premiers recrutements.
            </p>
          </SectionRow>
        </section>

        <section className="mb-11 rounded-band bg-dark px-7 py-[52px] text-center text-dark-text">
          <blockquote className="mx-auto max-w-[44ch] font-serif text-[clamp(1.3rem,3.6vw,1.7rem)] leading-[1.45] font-normal italic">
            <p>
              Une startup qui lève des fonds sans process de vente clair
              improvise sa croissance. Une équipe qui recrute sans organisation
              lisible <em className="text-orange-glow">dilue son énergie</em>{" "}
              au lieu de l&apos;accélérer.
            </p>
          </blockquote>
        </section>

        <section className="py-4">
          <SectionRow icon="repeat" title="Le même réflexe, ailleurs">
            <p>
              Pendant un an et demi, responsable marketing dans une startup,
              j&apos;ai porté cette même logique sur un département entier
              plutôt que sur une startup entière. Repérer ce qui, dans le
              désordre apparent, doit devenir un système. Poser une structure
              qui tient, pas une usine à gaz.
            </p>
          </SectionRow>
        </section>

        <section className="pt-11 pb-[60px]">
          <p className="mb-2.5 text-[0.9rem] font-semibold text-orange-ink">
            Sept principes
          </p>
          <h2 className="mb-[34px] max-w-[22ch] font-serif text-[clamp(1.5rem,4vw,2rem)] leading-[1.25] font-medium">
            Du diagnostic à la transmission
          </h2>

          <ol className="divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
            {PRINCIPLES.map((principle, i) => (
              <li
                key={principle.title}
                className="grid grid-cols-[44px_1fr] items-start gap-x-3.5 px-5 py-6 min-[680px]:grid-cols-[72px_1fr] min-[680px]:gap-x-[22px] min-[680px]:px-[26px]"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-[1.6rem] leading-none text-orange min-[680px]:text-[2.2rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="mb-2.5 flex items-center gap-3">
                    <IconBadge name={principle.icon} />
                    <h3 className="font-serif text-[1.15rem] font-semibold">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="max-w-[56ch] text-[0.98rem] leading-[1.6]">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Container>

      <CtaBand />
    </>
  );
}
