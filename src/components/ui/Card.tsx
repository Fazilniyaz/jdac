import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("card", className)}>{children}</div>;
}

/** A small pill/badge. */
export function Badge({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "navy" | "orange" | "muted";
  className?: string;
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-700",
    navy: "bg-navy text-white",
    orange: "bg-orange-50 text-orange-600",
    muted: "bg-mist text-ink/70",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
