import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return <div className={cn(light ? "card-light" : "card", className)}>{children}</div>;
}

/** A small pill/badge. */
export function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "navy" | "orange" | "muted" | "outline";
  className?: string;
}) {
  const tones = {
    blue: "bg-blue-500/15 text-blue-300",
    navy: "bg-white/10 text-white",
    orange: "bg-orange/15 text-orange-100",
    muted: "bg-white/5 text-slate-300",
    outline: "border border-white/15 bg-transparent text-slate-200",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
