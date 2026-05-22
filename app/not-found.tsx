import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-wide flex flex-col items-start py-32">
      <span className="font-mono text-xs uppercase tracking-widewide text-accent">
        // 404 · Signal lost
      </span>
      <h1 className="mt-4 font-display text-6xl leading-none tracking-tightest text-cream sm:text-7xl">
        Page not found.
      </h1>
      <p className="mt-5 max-w-md text-base text-ash">
        That page does not exist. Head back and pick a security tool instead.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widewide text-ink-950 transition hover:bg-accent-soft"
      >
        Back to home
        <Icon
          name="arrow"
          className="h-4 w-4 transition group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}
