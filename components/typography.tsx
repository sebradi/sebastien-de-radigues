export function SubHeading({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`mb-2.5 font-serif text-[1.02rem] leading-[1.3] font-medium text-orange-ink ${className}`}
    >
      {children}
    </h2>
  );
}

export function Text({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`max-w-[60ch] text-[1.02rem] leading-[1.65] ${className}`}>
      {children}
    </p>
  );
}
