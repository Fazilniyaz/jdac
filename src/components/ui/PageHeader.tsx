import { TriStripe } from "@/components/TriStripe";

/** Dark page header used at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <header className="bg-navy text-white">
      <div className="container-page py-14 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-lg text-white/75">{lead}</p>
        ) : null}
      </div>
      <TriStripe />
    </header>
  );
}
