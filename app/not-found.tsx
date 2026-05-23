import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-start py-32 sm:py-40">
      <span className="eyebrow">404 · Not found</span>
      <h1 className="display mt-7 max-w-2xl text-[clamp(2.75rem,7vw,5rem)] leading-[1.04]">
        Not found.{" "}
        <em>Either the link is wrong or we have not written this yet.</em>
      </h1>
      <Link href="/" className="btn-primary mt-12">
        Back to venode <ArrowRight className="h-3 w-3" />
      </Link>
    </section>
  );
}
