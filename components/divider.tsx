export function Divider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3.5 ${className}`}>
      <span className="size-2 rounded-full bg-orange" />
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
