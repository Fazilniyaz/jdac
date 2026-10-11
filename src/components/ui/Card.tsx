import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  hover = false,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return <div className={cn("card", hover && "jx-hover", className)}>{children}</div>;
}

/** A small label badge. */
export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  tone?: "brand" | "spark" | "neutral" | "outline" | "danger";
  className?: string;
}) {
  const tones = {
    brand: "bg-brand/10 text-accent",
    spark: "bg-spark/15 text-[#c2410c] [html[data-theme=dark]_&]:text-spark",
    neutral: "bg-surface-2 text-ink-2",
    outline: "border border-line text-ink-2",
    danger: "bg-[#e01e26]/10 text-[#b91c1c] [html[data-theme=dark]_&]:text-[#f87171]",
  } as const;
  return (
    <span
      className={cn(
        "jx-label inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
