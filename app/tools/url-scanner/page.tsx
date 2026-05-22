import { getTool } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import ToolLayout from "@/components/ToolLayout";
import Client from "./Client";

const tool = getTool("url-scanner")!;

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
      affiliate="bitdefender"
      relatedGuides={[
        "how-to-tell-if-a-link-is-safe",
        "personal-cybersecurity-checklist",
      ]}
      about={[
        "Almost every scam and account takeover begins with a link. This scanner breaks a link down the way a security analyst would and flags the structural red flags that phishing pages rely on: lookalike domains, raw IP-address hosts, punycode tricks, the '@' redirect, link shorteners, suspicious domain endings and trusted brand names hidden in the wrong part of the URL.",
        "The check is purely structural and runs in your browser — the link is never opened or followed, so scanning it cannot trigger anything. That makes it safe to paste in a link you are unsure about. It also means the scanner cannot see the actual content of the destination page, so a clean result is not a guarantee of safety.",
        "Use this as your ten-second gut check before clicking anything in an unexpected email or message. If the scanner raises flags — or even if it does not but something still feels off — the safest move is to ignore the link and navigate to the website yourself.",
      ]}
      faq={[
        {
          q: "Does scanning a link open or visit it?",
          a: "No. The scanner only inspects the text of the URL itself. It never sends a request to the link, so it is safe to scan even a link you strongly suspect is malicious.",
        },
        {
          q: "The scanner said 'Looks safe' — can I trust the link?",
          a: "It means the link has no common phishing patterns in its structure, which is reassuring but not proof. A malicious page can sit on an ordinary-looking domain. Always also consider whether you trust the sender and expected the message.",
        },
        {
          q: "What is the '@' symbol trick?",
          a: "In a URL, everything before an '@' is treated as login info and ignored by the browser. Attackers write something like 'paypal.com@evil.site' so the real destination (evil.site) is easy to miss.",
        },
        {
          q: "What is punycode?",
          a: "Punycode lets domains use non-Latin characters. Attackers exploit it to register domains that look identical to real brands using lookalike letters. The scanner flags the 'xn--' prefix that signals it.",
        },
      ]}
    >
      <Client />
    </ToolLayout>
  );
}
