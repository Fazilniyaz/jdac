import { cn } from "@/lib/cn";

/** The brand tri-color stripe motif (blue / red / orange). Decorative only. */
export function TriStripe({ className }: { className?: string }) {
  return <div aria-hidden className={cn("tri-stripe h-1 w-full", className)} />;
}
