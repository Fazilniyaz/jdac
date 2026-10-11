import { cn } from "@/lib/cn";
import { Reveal } from "@/components/Reveal";

/**
 * A vertical page section. `tone`: "base" sits on the page canvas, "band" is the
 * alternate surface, "navy" is the theme-independent navy feature band.
 */
export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "base",
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "base" | "band" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "jx-section",
        tone === "band" && "jx-band",
        tone === "navy" && "jx-navy",
        className
      )}
    >
      {tone === "navy" && <div aria-hidden className="jx-glow -right-48 -top-64" />}
      <div className={cn("container-page relative", containerClassName)}>{children}</div>
    </section>
  );
}

/** Section heading: optional eyebrow, a title, and an optional lead. Reveals on scroll. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow ? <span className="jx-eyebrow mb-5">{eyebrow}</span> : null}
      <h2 className="jx-display-lg mt-5">{title}</h2>
      {lead ? <p className="jx-lead mt-5">{lead}</p> : null}
    </Reveal>
  );
}
