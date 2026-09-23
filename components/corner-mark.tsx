// Le motif du site : un coin de cadre orange, deux traits formant un angle.
export function CornerMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 8V2H8"
        stroke="var(--color-orange)"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
