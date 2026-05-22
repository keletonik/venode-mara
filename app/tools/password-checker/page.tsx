import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import ToolLayout from "@/components/ToolLayout";
import Client from "./Client";

const tool = getTool("password-checker")!;

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
        "what-to-do-after-a-data-breach",
        "how-often-should-you-change-passwords",
      ]}
      about={[
        "This tool tells you whether a specific password has ever appeared in a publicly known data breach. Breached passwords are the raw material of credential-stuffing attacks: criminals collect billions of leaked passwords and try them automatically against other websites. If a password you use is on those lists, every account that shares it is at risk.",
        "The check is completely private. Your password is converted to a SHA-1 hash inside your own browser. Only the first five characters of that hash leave your device. The breach database returns every leaked hash that starts with those five characters — often hundreds — and the final comparison happens locally. The service therefore never learns which password you searched for. This technique is called k-anonymity.",
        "A clean result is reassuring but not a guarantee of safety: a password can be unbreached and still weak, guessable, or reused. Treat this as one of three checks — not breached, genuinely strong, and unique to a single account.",
      ]}
      faq={[
        {
          q: "Is it safe to type my real password here?",
          a: "Yes. The password never leaves your browser. It is hashed locally and only a 5-character fragment of the hash is sent, which cannot be reversed into your password. That said, if a check shows the password is breached, you should stop using it regardless.",
        },
        {
          q: "Where does the breach data come from?",
          a: "The tool queries the Have I Been Pwned Pwned Passwords database, an industry-standard corpus of passwords exposed in real-world data breaches, accessed through its free k-anonymity range API.",
        },
        {
          q: "My password was not found — does that mean it is strong?",
          a: "No. It only means that exact string has not yet appeared in a breach that has been collected. A short or predictable password can still be cracked quickly. Use the Password Strength Analyzer to assess that separately.",
        },
        {
          q: "My password was found. What should I do?",
          a: "Change it everywhere you have used it, starting with email and banking. Replace it with a unique, randomly generated password, and enable two-factor authentication. A breached password should never be reused anywhere.",
        },
      ]}
    >
      <Client />
    </ToolLayout>
  );
}
