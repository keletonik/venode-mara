import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-start pt-32 pb-40">
      <p className="label">404</p>
      <h1 className="mt-8 text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tightest">
        <span className="font-medium">Not found.</span>{" "}
        <span className="text-ink-500">
          Either the link is wrong, or we have not written this yet.
        </span>
      </h1>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
      >
        Back to Hugo
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}
