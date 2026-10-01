import { cn } from "@/lib/cn";

/**
 * Infinite horizontal marquee of labels with bullet separators.
 * Pure CSS (duplicated track + translateX animation). Pauses for
 * prefers-reduced-motion via the global motion rule.
 */
export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const Track = ({ hidden = false }: { hidden?: boolean }) => (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
    >
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-10 sm:gap-16">
          <span className="whitespace-nowrap font-display text-2xl font-semibold text-slate-500 sm:text-4xl">
            {item}
          </span>
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("mask-x overflow-hidden py-8", className)}>
      <div className="flex w-max animate-marquee">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
