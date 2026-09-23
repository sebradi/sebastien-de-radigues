import { IconBadge, type IconName } from "./icon";

export function DomainCard({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-card border border-line bg-white px-[26px] py-7">
      <div className="mb-[18px]">
        <IconBadge name={icon} variant="outline" />
      </div>
      <h3 className="mb-3 font-serif text-[1.18rem] leading-[1.35] font-medium italic">
        {title}
      </h3>
      <p className="text-[0.98rem] leading-[1.6]">{children}</p>
    </article>
  );
}
