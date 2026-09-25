import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { DomainCard } from "@/components/domain-card";
import { Hero } from "@/components/hero";
import { MethodBanner } from "@/components/method-banner";
import { SectionRow } from "@/components/section-row";
import { SituationsBand } from "@/components/situations-band";
import { pageMetadata } from "@/lib/metadata";

const title = "Sébastien de Radiguès — Chief of Staff externe";
const description =
  "Chief of Staff externe basé en Belgique, j'aide les startups et PME à structurer leur marketing et leurs opérations, en stratège et en exécutant.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Container>
        <Hero />

        <section className="space-y-[34px] py-11">
          <SectionRow icon="sparkle" title="Le point de bascule">
            <p>
              Vous avez construit votre entreprise brique par brique, sans plan
              précis. Ça a tenu, jusqu&apos;à un certain point.
            </p>
          </SectionRow>
          <SectionRow icon="circlePlus" title="Ce que ça coûte">
            <p>
              Vous passez vos journées à éteindre des urgences plutôt
              qu&apos;à avancer. Toutes les décisions reviennent vers vous,
              faute de structure. Le recul pour changer ça, vous ne
              l&apos;avez plus.
            </p>
          </SectionRow>
          <SectionRow icon="cross" title="Mon rôle">
            <p>
              Je pense la stratégie et je l&apos;exécute, ou je forme votre
              équipe à le faire. Pas un conseil qui reste sur le papier. Pas un
              accompagnement qui s&apos;arrête au bord du terrain.
            </p>
            <p>
              Sept ans dans un startup studio, à aider des startups à passer
              d&apos;une idée floue à un projet qui tient debout. Un an et demi
              de plus à la tête d&apos;un département marketing, avec la même
              logique. Aujourd&apos;hui, Chief of Staff externe, en partenaire
              opérationnel indépendant. Un point de contact unique, du
              diagnostic à l&apos;exécution.
            </p>
          </SectionRow>
        </section>

        <SituationsBand />

        <section className="grid grid-cols-1 gap-5 pt-2 pb-11 min-[680px]:grid-cols-2">
          <DomainCard
            icon="send"
            title="Votre marketing produit-il des résultats, ou seulement du contenu ?"
          >
            Une équipe marketing sans direction claire travaille beaucoup et
            avance peu. Je pose une stratégie, je structure ce qui manque,
            j&apos;exécute ou je transmets, ponctuellement ou en format
            fractionné.
          </DomainCard>
          <DomainCard
            icon="gear"
            title="Vos process tiennent-ils encore la croissance que vous visez ?"
          >
            Une organisation qui grandit sans revoir ses process ne ralentit pas
            progressivement. Elle craque d&apos;un coup. Je clarifie les
            responsabilités, je repère les points de friction avant qu&apos;ils
            ne coûtent cher. J&apos;intègre l&apos;IA là où elle change
            l&apos;équation.
          </DomainCard>
        </section>

        <MethodBanner />
      </Container>

      <CtaBand />
    </>
  );
}
