import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { SituationsBand } from "@/components/situations-band";
import { SubHeading, Text } from "@/components/typography";

const DOMAINS = [
  {
    title: "Votre marketing produit-il des résultats, ou seulement du contenu ?",
    body: "Une équipe marketing sans direction claire travaille beaucoup et avance peu. Je pose une stratégie qui priorise, je structure ce qui manque, et j'exécute ou je transmets, ponctuellement ou en format fractionné selon vos besoins.",
  },
  {
    title: "Vos process tiennent-ils encore la croissance que vous visez ?",
    body: "Une organisation qui grandit sans revoir ses process ne ralentit pas progressivement. Elle craque d'un coup. Je clarifie les responsabilités, je repère les points de friction avant qu'ils ne coûtent cher, et j'intègre l'IA là où elle change vraiment l'équation.",
  },
];

export default function Home() {
  return (
    <>
      <Container>
        <Hero />

        <section className="space-y-[30px] py-9">
          <div>
            <SubHeading>Le point de bascule</SubHeading>
            <Text>
              Le jour où il faut arbitrer entre trois urgences à la fois, ce qui
              marchait à l&apos;instinct ne suffit plus. Vous avez construit
              votre entreprise ainsi, brique par brique, sans suivre de plan
              précis. Ça a tenu, jusqu&apos;à un certain point.
            </Text>
          </div>
          <div>
            <SubHeading>Ce que ça coûte</SubHeading>
            <Text>
              Vous passez vos journées à éteindre des urgences plutôt
              qu&apos;à avancer. Toutes les décisions reviennent vers vous,
              parce que rien n&apos;a été structuré pour qu&apos;il en soit
              autrement. Le recul nécessaire pour changer ça, vous ne
              l&apos;avez plus.
            </Text>
          </div>
          <div>
            <SubHeading>Mon rôle</SubHeading>
            <Text>
              Je m&apos;appelle Sébastien. Je ne suis pas un consultant qui
              conseille sans jamais mettre les mains dans le cambouis, ni un
              coach qui accompagne sans jamais faire à votre place. Je pense la
              stratégie et je l&apos;exécute, ou je forme votre équipe à le
              faire.
            </Text>
            <Text className="mt-3.5">
              J&apos;ai passé sept ans à construire ce genre de structure de
              l&apos;intérieur, dans un startup studio, avant de le refaire sur
              un département marketing entier. J&apos;interviens
              aujourd&apos;hui comme Chief of Staff externe, en partenaire
              opérationnel indépendant : vous parlez toujours à la même
              personne, jamais à une agence ou à une équipe de juniors.
            </Text>
          </div>
        </section>
      </Container>

      <SituationsBand />

      <Container>
        <section className="grid grid-cols-1 gap-5 py-9 sm:grid-cols-2">
          {DOMAINS.map((domain) => (
            <article
              key={domain.title}
              className="border border-t-[3px] border-line border-t-orange px-6 py-[26px]"
            >
              <h3 className="mb-3 font-serif text-[1.14rem] leading-[1.35] font-medium italic">
                {domain.title}
              </h3>
              <p className="text-[0.98rem] leading-[1.65]">{domain.body}</p>
            </article>
          ))}
        </section>

        <section className="py-9">
          <Link
            href="/methode"
            className="group flex items-center justify-between gap-5 border border-ink px-[26px] py-[22px] transition-colors duration-150 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper focus-visible:outline-none"
          >
            <span>
              <span className="block font-serif text-[1.25rem]">Ma méthode</span>
              <span className="mt-1 block text-[0.9rem] text-muted group-hover:text-[#C9C9C2] group-focus-visible:text-[#C9C9C2]">
                Comment j&apos;aborde une structure, en sept principes.
              </span>
            </span>
            <ArrowIcon size={20} />
          </Link>
        </section>
      </Container>

      <CtaBand />
    </>
  );
}
