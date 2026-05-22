import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import ToolLayout from "@/components/ToolLayout";
import Client from "./Client";

const tool = getTool("password-generator")!;

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
      affiliate="onepassword"
      relatedGuides={[
        "password-manager-vs-browser-saved-passwords",
        "personal-cybersecurity-checklist",
      ]}
      about={[
        "A strong password is one a computer cannot guess and a human did not invent. People are predictably bad at randomness — we lean on names, dates, keyboard patterns and common substitutions, all of which attackers model. This generator removes the human factor entirely: every character is drawn from your browser's cryptographically secure random number generator.",
        "Length is the single most important setting. Each additional character multiplies the number of combinations an attacker must try. A 20-character random password is astronomically harder to crack than an 8-character one, even a 'complex' eight. Default to 16 characters or more, and longer for important accounts.",
        "Generating a strong password only helps if you never reuse it. The realistic way to keep a unique password for every account is a password manager — it stores them so you do not have to remember any of them. Generate here, save there.",
      ]}
      faq={[
        {
          q: "Are these passwords actually random?",
          a: "Yes. They use the Web Crypto API's getRandomValues, the same cryptographically secure source browsers use for encryption keys — not the predictable Math.random function.",
        },
        {
          q: "Does the password get sent anywhere?",
          a: "No. Generation happens entirely in your browser. Nothing is transmitted, logged or stored. You can disconnect from the internet and the tool still works.",
        },
        {
          q: "How long should my password be?",
          a: "Use at least 16 characters for everyday accounts and 20 or more for critical ones like email and banking. With a password manager filling it for you, length costs you nothing.",
        },
        {
          q: "Should I exclude look-alike characters?",
          a: "Only enable that option if you will need to type or read the password by hand. If a password manager handles it for you, leave it off — a larger character set makes the password marginally stronger.",
        },
      ]}
    >
      <Client />
    </ToolLayout>
  );
}
