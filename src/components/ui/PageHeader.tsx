import Image from "next/image";

/**
 * Inner-page header. With an `image`, it becomes a split header: copy on the
 * left, a framed photo on the right that settles in on load.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <header className="border-b border-line">
      <div
        className={
          image
            ? "container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]"
            : "container-page py-14 sm:py-20"
        }
      >
        <div>
          {eyebrow ? (
            <span className="jx-eyebrow jx-rise" style={{ ["--d" as string]: "0ms" }}>
              {eyebrow}
            </span>
          ) : null}
          <h1 className="jx-display-lg jx-rise mt-6 max-w-3xl" style={{ ["--d" as string]: "90ms" }}>
            {title}
          </h1>
          {lead ? (
            <p className="jx-lead jx-rise mt-6 max-w-2xl" style={{ ["--d" as string]: "180ms" }}>
              {lead}
            </p>
          ) : null}
        </div>
        {image ? (
          <div className="photo jx-photo-in aspect-[16/10] rounded-panel shadow-md">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" priority />
          </div>
        ) : null}
      </div>
    </header>
  );
}
