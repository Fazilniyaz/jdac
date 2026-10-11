import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="text-center">
      <span className="jx-eyebrow">404</span>
      <h1 className="jx-display-lg mt-6">Page not found</h1>
      <p className="jx-lead mx-auto mt-4 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-ink">
          <Home size={16} /> Back to home
        </Link>
        <Link href="/program" className="btn btn-ghost">
          View the program <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
