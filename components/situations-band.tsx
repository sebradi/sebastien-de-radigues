import { Icon, type IconName } from "./icon";

const TONES = {
  rust: "bg-rust text-rust-text [&_svg]:text-orange-glow",
  dark: "bg-dark-raised text-dark-text [&_svg]:text-orange-glow",
  gold: "bg-gold text-gold-ink",
};

const SITUATIONS: { text: string; icon: IconName; tone: keyof typeof TONES }[] = [
  {
    text: "Toutes les décisions repassent par vous, même les plus mineures.",
    icon: "clock",
    tone: "rust",
  },
  {
    text: "Deux membres de votre équipe vous donneraient deux priorités différentes.",
    icon: "diverge",
    tone: "dark",
  },
  {
    text: "Certains sujets n'avancent pas parce que personne n'en est clairement responsable.",
    icon: "door",
    tone: "gold",
  },
  {
    text: "Vos process ont tenu jusqu'à dix personnes. Ils ne tiennent plus à trente.",
    icon: "users",
    tone: "dark",
  },
  {
    text: "Vous avez les bons outils, mais chacun les utilise à sa manière.",
    icon: "briefcase",
    tone: "rust",
  },
  {
    text: "Vous savez qu'il faut structurer. Vous n'avez simplement jamais le temps de vous y mettre.",
    icon: "hourglass",
    tone: "gold",
  },
];

export function SituationsBand() {
  return (
    <section className="mb-[60px] rounded-band bg-dark px-7 py-[52px] text-dark-text">
      <h2 className="mb-[34px] max-w-[22ch] font-serif text-[clamp(1.5rem,4vw,2rem)] leading-[1.25] font-medium">
        Le symptôme avant le diagnostic
      </h2>

      <ul className="grid grid-cols-1 gap-4 min-[680px]:grid-cols-2">
        {SITUATIONS.map(({ text, icon, tone }) => (
          <li
            key={text}
            className={`rounded-card px-5 py-[22px] text-[0.98rem] leading-normal font-medium ${TONES[tone]}`}
          >
            <Icon name={icon} className="mb-3.5 size-[22px]" />
            {text}
          </li>
        ))}
      </ul>

      <p className="mt-[26px] max-w-[60ch] text-[0.98rem] leading-[1.65] text-dark-muted">
        Ça vous parle si votre structure a dépassé le stade où vous pouvez tout
        gérer seul. Ce qui manque, c&apos;est quelqu&apos;un pour la structurer.
      </p>
    </section>
  );
}
