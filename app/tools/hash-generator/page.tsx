import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import ToolLayout from "@/components/ToolLayout";
import Client from "./Client";

const tool = getTool("hash-generator")!;

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
        "A cryptographic hash turns any input into a fixed-length fingerprint. The same input always produces the same hash, but the process cannot be reversed. Hashes are how you verify that a downloaded file is genuine and unmodified: compare the hash you compute against the one the publisher lists, and if they match, the file is intact.",
        "This tool generates the five hashes you will encounter most often — MD5, SHA-1, SHA-256, SHA-384 and SHA-512 — from any text. The SHA family is produced by your browser's built-in Web Crypto engine; MD5 is computed by a bundled implementation since browsers no longer include it.",
        "A note on security: MD5 and SHA-1 are still useful for non-security checksums, but they are considered broken for security purposes and must never be used to store passwords or sign data. For anything security-sensitive, use SHA-256 or stronger.",
      ]}
      faq={[
        {
          q: "Is my text uploaded anywhere?",
          a: "No. All hashing runs locally in your browser using the Web Crypto API and a bundled MD5 implementation. The tool works fully offline.",
        },
        {
          q: "Which hash should I use to verify a download?",
          a: "Use whichever the publisher provides, preferring SHA-256. Compute the hash here and confirm it matches the published value character for character.",
        },
        {
          q: "Why are MD5 and SHA-1 still included?",
          a: "They remain common for legacy file checksums and integrity checks. They are included for compatibility — but they are not safe for passwords, signatures or any security-critical use.",
        },
        {
          q: "Can I get the original text back from a hash?",
          a: "No. Hashing is one-way by design. The only way to 'reverse' a hash is to guess inputs until one matches, which is exactly why strong, unique passwords matter.",
        },
      ]}
    >
      <Client />
    </ToolLayout>
  );
}
