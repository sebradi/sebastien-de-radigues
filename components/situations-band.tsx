import { Container } from "./container";
import { CornerMark } from "./corner-mark";

const SITUATIONS = [
  "Toutes les décisions repassent par vous, même les plus mineures.",
  "Un chiffre important change selon la personne qui vous le communique.",
  "Votre équipe a grandi, mais plus personne ne sait exactement qui décide quoi.",
  "Chaque nouvelle recrue apprend le métier en observant, parce que rien n'est écrit nulle part.",
  "Vous avez les bons outils, mais chacun les utilise à sa manière.",
  "Vous savez qu'il faut structurer. Vous n'avez simplement jamais le temps de vous y mettre.",
];

export function SituationsBand() {
  return (
    <section className="bg-dark text-dark-text">
      <Container className="py-11">
        <h2 className="mb-[22px] text-[0.98rem] leading-[1.65] text-dark-muted">
          Reconnaissez-vous une de ces situations ?
        </h2>

        <ul className="grid grid-cols-1 gap-4 min-[620px]:max-w-[640px] min-[620px]:grid-cols-2">
          {SITUATIONS.map((situation, i) => (
            <li
              key={situation}
              className={`relative border border-dark-line bg-dark-card pt-5 pr-[18px] pb-[18px] pl-5 text-[0.98rem] leading-normal ${
                i % 2 === 1 ? "min-[620px]:mt-[26px]" : ""
              }`}
            >
              <CornerMark className="absolute top-2 left-2 size-3.5" />
              {situation}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-[60ch] text-[0.98rem] leading-[1.65] text-dark-muted">
          Ça vous parle si votre structure a dépassé le stade où vous pouvez
          tout gérer seul, mais n&apos;a pas encore de fonction Marketing ou
          Opérations dédiée.
        </p>
      </Container>
    </section>
  );
}
