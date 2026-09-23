import { IconBadge, type IconName } from "./icon";

// Une ligne de contenu : pastille d'icône à gauche, titre et texte à droite.
export function SectionRow({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[36px_1fr] gap-x-[22px]">
      <IconBadge name={icon} />
      <div>
        <h2 className="mt-0.5 mb-2 font-serif text-[1.15rem] font-semibold">
          {title}
        </h2>
        <div className="space-y-3.5 text-[1.02rem] leading-[1.65] *:max-w-[58ch]">
          {children}
        </div>
      </div>
    </div>
  );
}
