import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import ToolLayout from "@/components/ToolLayout";
import Client from "./Client";

const tool = getTool("password-strength")!;

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
      affiliate="dashlane"
      relatedGuides={[
        "how-often-should-you-change-passwords",
        "what-to-do-after-a-data-breach",
      ]}
      about={[
        "Password strength comes down to one question: how many guesses would an attacker need? This analyzer estimates that as entropy — measured in bits — based on the password's length and the variety of characters it uses. More bits means an exponentially larger haystack to search.",
        "Raw entropy is not the whole story, so the analyzer also looks for the shortcuts attackers exploit: passwords on public 'most common' lists, repeated characters, keyboard and alphabet sequences, and embedded years. Any of these collapse the real-world strength far below what the length alone suggests.",
        "The time-to-crack estimate assumes a fast offline attack — roughly a hundred billion guesses per second against a leaked password database. It is deliberately pessimistic, because that is the scenario that actually matters once a site is breached. Treat anything under 'Strong' as a password worth replacing.",
      ]}
      faq={[
        {
          q: "Is it safe to type my real password?",
          a: "Yes. The analysis runs entirely in JavaScript in your browser. Nothing is sent over the network or stored. You can verify this by disconnecting from the internet — the tool still works.",
        },
        {
          q: "What is entropy?",
          a: "Entropy measures unpredictability in bits. Each extra bit doubles the number of possibilities an attacker must try. Aim for 60 bits or more for important accounts; 80+ is excellent.",
        },
        {
          q: "Why does length matter more than symbols?",
          a: "Adding one character multiplies the search space by the size of the character set, while adding a symbol type only widens it once. A long all-lowercase password can easily beat a short 'complex' one.",
        },
        {
          q: "My password scored well — am I done?",
          a: "Not quite. A strong password can still be compromised if it has leaked or is reused. Run it through the breach checker and make sure it is unique to a single account.",
        },
      ]}
    >
      <Client />
    </ToolLayout>
  );
}
