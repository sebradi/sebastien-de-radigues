import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CornerMark } from "@/components/corner-mark";
import { CtaBand } from "@/components/cta-band";
import { SubHeading, Text } from "@/components/typography";

export const metadata: Metadata = {
  title: "Ma méthode",
  description:
    "Comment j'aborde une structure, en sept principes : diagnostiquer, prioriser, simplifier, impliquer, mesurer, itérer, transmettre.",
};

const PRINCIPLES = [
  {
    title: "Diagnostiquer",
    body: "Comprendre ce qui existe déjà avant de vouloir le changer.",
  },
  {
    title: "Prioriser",
    body: "Prioriser ce qui débloque le plus, pas ce qui se voit le plus.",
  },
  {
    title: "Simplifier",
    body: "Construire des systèmes simples qui tiennent, jamais des process lourds copiés d'un livre.",
  },
  {
    title: "Impliquer",
    body: "Un process qui ignore les humains qui doivent le suivre échoue, même parfait sur le papier. L'adhésion compte autant que la conception.",
  },
  {
    title: "Mesurer",
    body: "Un process est un mindset avant d'être un outil. Mesurer, comprendre, améliorer avec les retours du terrain, même sans logiciel, même offline.",
  },
  {
    title: "Itérer",
    body: "Un process n'est jamais bon du premier coup. Il s'améliore par itérations successives, jamais par une refonte parfaite dès le départ.",
  },
  {
    title: "Transmettre",
    body: "Transmettre plutôt que rendre dépendant.",
  },
];

export default function MethodePage() {
  return (
    <>
      <Container>
        <section className="py-9">
          <h1 className="mb-4 font-serif text-[clamp(1.9rem,5.5vw,2.6rem)] leading-[1.15] font-normal">
            Ma méthode
          </h1>
          <p className="max-w-[32ch] font-serif text-[1.15rem] leading-[1.4] text-orange-ink italic">
            J&apos;ai commencé à structurer des organisations avant de mettre ce
            mot dessus.
          </p>
        </section>

        <section className="grid grid-cols-1 items-start gap-[34px] py-9 min-[620px]:grid-cols-[220px_1fr]">
          {/* TODO: remplacer par la vraie photo (next/image). */}
          <div className="relative aspect-[4/5] max-w-[220px] border border-line bg-[#EDECE6]">
            <CornerMark className="absolute -top-px -left-px size-5" />
            <CornerMark className="absolute -right-px -bottom-px size-5 rotate-180" />
            <span className="absolute right-2.5 bottom-2.5 left-2.5 text-[0.72rem] text-muted italic">
              photo à intégrer
            </span>
          </div>
          <div>
            <SubHeading>Le studio</SubHeading>
            <Text>
              Pendant sept ans, dans un startup studio, co-lancer des startups
              voulait dire partir d&apos;une idée floue et construire, en même
              temps, l&apos;organisation qui la porte. Les opérations. Les
              premières ventes. Le marketing. Parfois une levée de fonds.
              Parfois les premiers recrutements.
            </Text>
          </div>
        </section>
      </Container>

      <section className="bg-dark text-dark-text">
        <Container className="py-[52px] text-center">
          <blockquote className="mx-auto max-w-[44ch] font-serif text-[clamp(1.3rem,3.6vw,1.7rem)] leading-[1.45] font-normal italic">
            <p>
              Une startup qui lève des fonds sans process de vente clair
              improvise sa croissance. Une équipe qui recrute sans organisation
              lisible <em className="text-orange-soft">dilue son énergie</em>{" "}
              au lieu de l&apos;accélérer.
            </p>
          </blockquote>
        </Container>
      </section>

      <Container>
        <section className="py-9">
          <SubHeading>Le même réflexe, ailleurs</SubHeading>
          <Text>
            Pendant un an et demi, responsable marketing dans une startup,
            j&apos;ai porté cette même logique sur un département entier plutôt
            que sur une startup entière. Repérer ce qui, dans le désordre
            apparent, doit devenir un système. Poser une structure qui tient,
            pas une usine à gaz.
          </Text>
        </section>

        <section className="py-9">
          <SubHeading className="mb-6">Sept principes</SubHeading>
          <ol className="mt-2 border-t border-line">
            {PRINCIPLES.map((principle, i) => (
              <li
                key={principle.title}
                className="grid grid-cols-[44px_1fr] items-start gap-3.5 border-b border-line py-[26px] min-[620px]:grid-cols-[64px_1fr] min-[620px]:gap-[22px]"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-[1.6rem] leading-none text-orange"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[1.1rem] font-medium">
                    {principle.title}
                  </h3>
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
