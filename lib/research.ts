/**
 * Research notes from Venode Labs. Each note is a short essay published as
 * part of the Hugo programme. Stored here as structured data so the site
 * needs no CMS or markdown pipeline.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "pullquote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang?: string; text: string };

export type Note = {
  slug: string;
  /** Two-digit number used on the index and detail pages. */
  num: string;
  title: string;
  /** One-line summary; also used as the meta description. */
  description: string;
  /** ISO date. */
  date: string;
  /** Approximate reading time in minutes. */
  readingMinutes: number;
  keywords: string[];
  body: Block[];
};

export const notes: Note[] = [
  {
    slug: "reasoning-about-an-unknown-sample",
    num: "01",
    title: "Reasoning about an unknown sample.",
    description:
      "How Hugo approaches a piece of malware it has never seen before — what to look at, what to suspend judgement on, and where to begin.",
    date: "2026-04-08",
    readingMinutes: 8,
    keywords: [
      "malware triage llm",
      "ai threat intelligence",
      "hugo malware analysis",
    ],
    body: [
      {
        type: "p",
        text: "Most malware is not novel. Most malware is a slight variation on something seen before, dressed up just enough to evade a signature and just little enough not to surprise anyone who has been doing this for a while. The interesting question is not how to catch the easy cases — those are caught — but how to think calmly about a sample when you genuinely do not yet know what it is.",
      },
      {
        type: "p",
        text: "Hugo&apos;s approach is unglamorous on purpose. It begins where a careful analyst begins: with the facts that survive any interpretation.",
      },
      { type: "h2", text: "Begin with what is true regardless of intent." },
      {
        type: "list",
        items: [
          "File type and structural integrity — what the bytes claim to be, and whether the structure agrees.",
          "Imports, sections, certificate, compile timestamp — observable surface, not yet meaning.",
          "Strings and embedded resources — promising leads, always suspect.",
          "Network indicators, where present, and only after deciding whether to ever resolve them.",
        ],
      },
      {
        type: "p",
        text: "Hugo lists these out. It does not yet say what the sample is. It says what is known. The model has been trained to resist the most common analyst mistake — narrating a hypothesis as if it were a finding — by simply not having a finding yet.",
      },
      {
        type: "h2",
        text: "Then form hypotheses, in the plural.",
      },
      {
        type: "p",
        text: "From the surface, Hugo proposes a small set of plausible explanations and ranks them, each with the evidence for and the evidence against. Three or four is usually right. One is overconfident; ten is performative. The discipline is to keep more than one alive long enough for the analysis to actually discriminate between them.",
      },
      {
        type: "pullquote",
        text: "An analyst is paid to be uncertain in the right way, for the right amount of time.",
      },
      { type: "h2", text: "Test against behaviour, not against confidence." },
      {
        type: "p",
        text: "Static analysis ends, eventually, where the sample wants you to think it ends. From there the question is what the sample actually does. Hugo connects to a sandbox of your choosing, reads the trace, and asks whether what it sees is consistent with each hypothesis it still holds open — including the boring ones it would rather rule out. A theory that survives boredom is usually right.",
      },
      {
        type: "code",
        lang: "transcript",
        text: `you   Look at the dropped payload from yesterday's IR — is it the same family?

hugo  Three things first. Same packer, yes. Same loader stub layout, mostly — one
      new resolver. Same C2 protocol header. So: same author or shared toolkit.
      Not enough to call it the same campaign.

      Two ways this comes apart:
        (a) shared crimeware kit, two unrelated operators
        (b) one operator iterating

      The differences I'd expect for (a): different infrastructure clusters,
      different lure documents, different timezone. Want me to check?`,
      },
      {
        type: "p",
        text: "The transcript above is illustrative, not a quote. But the shape of the conversation is the shape Hugo is trained to produce: facts first, hypotheses second, discriminators third, and a question back to the human when the next step is a decision that should not be made by a model.",
      },
    ],
  },
  {
    slug: "attribution-under-uncertainty",
    num: "02",
    title: "Attribution under uncertainty.",
    description:
      "Why Hugo hedges on threat-actor names, and why we believe a model that hedges well is more useful than one that names confidently.",
    date: "2026-03-22",
    readingMinutes: 6,
    keywords: [
      "threat attribution",
      "cti analysis llm",
      "responsible threat intelligence",
    ],
    body: [
      {
        type: "p",
        text: "Naming an actor is the cheapest part of an investigation and the most expensive thing to get wrong. A confident, premature attribution closes off lines of inquiry that a careful one keeps open. It also leaks into reports, into briefings, into press, and into policy, where its uncertainty is quietly stripped away by people who did not see how thin the evidence was.",
      },
      {
        type: "pullquote",
        text: "A model that hedges well is more useful than one that names confidently.",
      },
      {
        type: "p",
        text: "Hugo is trained, deliberately, to use the same calibrated language an experienced analyst uses: assess with high confidence, assess with moderate confidence, evidence is consistent with, cannot rule out. The point is not to be timid. The point is to be exactly as certain as the evidence allows, and no more.",
      },
      { type: "h2", text: "What we ask Hugo to do." },
      {
        type: "list",
        items: [
          "Surface the specific overlaps that support a name — and the ones that don&apos;t.",
          "Distinguish observed behaviour from inferred intent.",
          "Treat shared infrastructure as a hypothesis, never a conclusion.",
          "Name an actor only when the evidence would survive a sceptical second reader.",
        ],
      },
      {
        type: "p",
        text: "The result is reports that are sometimes a little duller and almost always more useful. Decisions made from them have not yet been embarrassed.",
      },
    ],
  },
  {
    slug: "a-note-on-evals",
    num: "03",
    title: "A note on evals.",
    description:
      "How we measure whether Hugo is actually useful for the work analysts do — not the work benchmarks pretend they do.",
    date: "2026-03-10",
    readingMinutes: 7,
    keywords: ["llm evaluation", "security model evals", "cti benchmarks"],
    body: [
      {
        type: "p",
        text: "Most benchmarks for security models test trivia. They ask the model to identify a vulnerability class from a snippet, or to name an ATT&amp;CK technique from a sentence. The model gets a number. The number goes up over time. None of this is the work.",
      },
      {
        type: "p",
        text: "The work is sitting at 3 a.m. with a half-formed alert, three unrelated logs and a manager asking what to do. The work is reading a sandbox report that is mostly noise and deciding which two lines matter. The work is writing the post-mortem so that the people on next week&apos;s shift do not make the same mistake.",
      },
      { type: "h2", text: "What we measure instead." },
      {
        type: "list",
        items: [
          "Triage realism — does Hugo&apos;s ranking of a queue match how a senior analyst would have ranked it?",
          "Discriminating questions — when uncertain, does Hugo ask the question that actually separates hypotheses?",
          "Calibration — when Hugo says &lsquo;high confidence&rsquo;, is it right at the rate we tell users to expect?",
          "Useful refusals — does Hugo decline to fabricate, and decline gracefully?",
        ],
      },
      {
        type: "p",
        text: "These metrics are harder to publish because they require a panel of practitioners and not a leaderboard. We publish them anyway. We publish the failure modes too. A model is something you have to live with, not something you launch.",
      },
      {
        type: "pullquote",
        text: "A model is something you have to live with, not something you launch.",
      },
    ],
  },
  {
    slug: "working-in-the-open",
    num: "04",
    title: "Working in the open.",
    description:
      "Why our research notes, our model cards and our evals are public — and which parts of Hugo we keep closed, and why.",
    date: "2026-02-27",
    readingMinutes: 5,
    keywords: ["open source security", "responsible ai disclosure"],
    body: [
      {
        type: "p",
        text: "Security tooling has a long, complicated relationship with openness. Defensive work benefits from open knowledge — papers, talks, IOCs, playbooks. Offensive capability benefits from openness too, and not in a way anyone is grateful for. The honest position is to be specific about which is which.",
      },
      { type: "h2", text: "What we publish." },
      {
        type: "list",
        items: [
          "Research notes, including the ones that argue against work we shipped.",
          "Model cards: training data sources, refusal behaviour, known failure modes.",
          "Evals, including the ones Hugo fails.",
          "Methodology: how we red-team the model, what we instruct it not to do, and why.",
        ],
      },
      { type: "h2", text: "What we keep closed." },
      {
        type: "list",
        items: [
          "Weights, for now. Not because they are precious, but because we have not yet finished the work to publish them responsibly.",
          "Specific dual-use prompts that mostly help attackers and only marginally help defenders.",
          "Customer data of any kind. Always.",
        ],
      },
      {
        type: "p",
        text: "We expect to move more of the first list outwards over time, and to keep the second list short and defensible. If you think a particular line is in the wrong place, write to us. The case will be considered on its merits, in public.",
      },
    ],
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
