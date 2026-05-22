import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-wide flex flex-col items-center py-28 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon name="alert" className="h-7 w-7" />
      </span>
      <h1 className="mt-6 text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-2 max-w-md text-slate-400">
        That page does not exist. Head back and pick a security tool instead.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-ink-950 transition hover:bg-accent-soft"
      >
        Back to home
      </Link>
    </section>
  );
}
