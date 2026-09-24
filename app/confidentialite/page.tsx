import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { pageMetadata } from "@/lib/metadata";
import { LINKEDIN_URL } from "@/lib/site";

const title = "Confidentialité, Sébastien de Radiguès";
const description =
  "Comment ce site utilise Google Analytics et traite les données de navigation.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/confidentialite",
});

const GA_OPT_OUT_URL = "https://tools.google.com/dlpage/gaoptout";

function LinkedInLink() {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-orange underline-offset-2 hover:text-orange-ink"
    >
      LinkedIn
    </a>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2.5 font-serif text-[1.15rem] font-semibold">{title}</h2>
      <div className="space-y-3.5 text-[1.02rem] leading-[1.65] *:max-w-[60ch]">
        {children}
      </div>
    </section>
  );
}

export default function ConfidentialitePage() {
  return (
    <Container>
      <section className="pt-[52px]">
        <h1 className="mb-[18px] font-serif text-[clamp(2.4rem,7vw,3.6rem)] leading-[1.08] font-normal">
          Confidentialité
        </h1>
        <p className="max-w-[60ch] text-[1.08rem] leading-[1.6] text-muted">
          Cette page explique quelles données sont collectées sur ce site,
          pourquoi, et comment les gérer.
        </p>
        <Divider className="mt-14" />
      </section>

      <div className="space-y-10 py-11">
        <Section title="Qui est responsable de ce site">
          <p>
            Ce site est édité par Sébastien de Radiguès, en nom propre. Pour
            toute question relative à vos données, vous pouvez me contacter
            directement via <LinkedInLink />.
          </p>
        </Section>

        <Section title="Quelles données sont collectées">
          <p>
            Ce site utilise Google Analytics pour comprendre, de façon agrégée,
            comment il est consulté : pages visitées, durée de visite, type
            d&apos;appareil et de navigateur, provenance géographique
            approximative (pays ou ville).
          </p>
          <p>
            Aucun formulaire ne collecte vos coordonnées sur ce site : le seul
            point de contact proposé est le lien vers LinkedIn.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Google Analytics dépose des cookies pour reconnaître votre
            navigateur d&apos;une visite à l&apos;autre. Vous pouvez les refuser
            ou les supprimer à tout moment dans les réglages de votre
            navigateur, ou installer le{" "}
            <a
              href={GA_OPT_OUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-orange underline-offset-2 hover:text-orange-ink"
            >
              module de désactivation officiel de Google Analytics
            </a>
            .
          </p>
        </Section>

        <Section title="Durée de conservation">
          <p>
            Les données de navigation sont conservées 14 mois par Google
            Analytics, la durée par défaut du service, après quoi elles sont
            automatiquement supprimées.
          </p>
        </Section>

        <Section title="Partage des données">
          <p>
            Les données transitent uniquement par Google, qui agit comme
            sous-traitant technique pour la mesure d&apos;audience. Elles ne
            sont ni vendues, ni partagées avec un autre tiers.
          </p>
          <p>
            Ce site est hébergé par Vercel, et son nom de domaine géré via
            Cloudflare. Ces prestataires techniques peuvent traiter des données
            de connexion standard (adresse IP, journaux serveur) dans le cadre
            normal de l&apos;hébergement, indépendamment de Google Analytics.
          </p>
        </Section>

        <Section title="Vos droits">
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, de suppression et d&apos;opposition sur vos données.
            Pour l&apos;exercer, contactez-moi via <LinkedInLink />.
          </p>
        </Section>

        <Section title="Mise à jour de cette page">
          <p>
            Cette page peut évoluer. Dernière mise à jour : 24 septembre 2026.
          </p>
        </Section>
      </div>
    </Container>
  );
}
