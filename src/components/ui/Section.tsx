import { cn } from "@/lib/cn";

/**
 * A vertical page section. `light` renders a light surface band (dark text);
 * otherwise it sits on the dark page background.
 */
export function Section({
  children,
  className,
  containerClassName,
  id,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  light?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28", light && "surface-light", className)}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}

/** Section heading: optional eyebrow pill, a title, and an optional lead. */
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
      {eyebrow ? (
        <p className={cn("mb-5", center && "justify-center")}>
          <span className="eyebrow-pill">{eyebrow}</span>
        </p>
      ) : null}
      <h2 className="text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">{title}</h2>
      {lead ? (
        <p className="mt-5 text-lg text-slate-400 [.surface-light_&]:text-ink/60">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
