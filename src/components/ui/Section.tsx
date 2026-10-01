import { cn } from "@/lib/cn";

/** A vertical page section with consistent rhythm and a centered container. */
export function Section({
  children,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}

/** Section heading: optional eyebrow, a title, and an optional lead paragraph. */
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
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-lg text-ink/70">{lead}</p> : null}
    </div>
  );
}
