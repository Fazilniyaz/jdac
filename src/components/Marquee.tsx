import { cn } from "@/lib/cn";

/** Infinite marquee of skill labels (pure CSS; stops for reduced motion). */
export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const Track = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14">
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-10 sm:gap-14">
          <span className="whitespace-nowrap font-display text-2xl font-medium text-muted sm:text-[34px]">
            {item}
          </span>
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("mask-x overflow-hidden py-7", className)}>
      <div className="flex w-max animate-marquee">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
