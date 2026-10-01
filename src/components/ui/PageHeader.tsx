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
    <header className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(50rem 24rem at 85% -20%, rgba(69,153,211,0.28) 0, transparent 60%), radial-gradient(40rem 20rem at -10% 120%, rgba(240,86,35,0.18) 0, transparent 55%)",
        }}
      />
      <div className="container-page relative py-16 sm:py-24">
        {eyebrow ? <span className="eyebrow-pill">{eyebrow}</span> : null}
        <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.03] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-lg text-slate-400">{lead}</p>
        ) : null}
      </div>
    </header>
  );
}
