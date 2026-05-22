import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import ToolLayout from "@/components/ToolLayout";
import Client from "./Client";

const tool = getTool("uuid-generator")!;

export const metadata = pageMetadata({
  title: tool.name,
  description: tool.description,
  path: `/tools/${tool.slug}`,
  keywords: tool.keywords,
});

export default function Page() {
  return (
    <ToolLayout
      tool={tool}
      relatedGuides={["personal-cybersecurity-checklist"]}
      about={[
        "A UUID (Universally Unique Identifier) is a 128-bit value used to label things — database rows, files, events, API requests — without a central authority handing out numbers. Version 4 UUIDs are almost entirely random, which makes accidental collisions effectively impossible in practice.",
        "Random tokens serve a different job: they are secrets. API keys, session identifiers, password-reset links and webhook signing keys all need a value an attacker cannot guess. The strength of a token comes from its length and the quality of its randomness — both of which this tool maximises.",
        "Everything here is produced with the Web Crypto API, the same cryptographically secure generator browsers use for encryption. Generation is local, so the values never touch a network and are safe to use as real production secrets.",
      ]}
      faq={[
        {
          q: "Are these UUIDs and tokens safe to use in production?",
          a: "Yes. They come from crypto.randomUUID and crypto.getRandomValues — cryptographically secure sources — and are generated locally, so no one else ever sees them.",
        },
        {
          q: "How long should an API key or secret be?",
          a: "For secrets that must resist guessing, use at least 24 bytes (48 hex characters); 32 bytes is a comfortable, common choice.",
        },
        {
          q: "What is the difference between a UUID and a random token?",
          a: "A UUID is a standardised identifier — fine to expose publicly as an ID. A random token is a secret that should be kept private, like a password. Do not use a UUID where you need a secret.",
        },
        {
          q: "Could two generated UUIDs ever collide?",
          a: "The probability is so small it is safe to treat as zero — you would need to generate billions of UUIDs before a collision became remotely likely.",
        },
      ]}
    >
      <Client />
    </ToolLayout>
  );
}
