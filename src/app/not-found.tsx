import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="py-24 text-center sm:py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-ink/70">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-secondary">
          <Home size={16} /> Back to home
        </Link>
        <Link href="/program" className="btn-outline">
          View the program <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
