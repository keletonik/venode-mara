"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Demo transcript — restyled as an editorial conversation. No terminal
 * chrome. Headings are mono labels, replies are body-set, typewriter
 * fills the analyst's question and Mara's response over time.
 */

type Turn = { who: "analyst" | "mara"; text: string };

const TURNS: Turn[] = [
  {
    who: "analyst",
    text: "alert popped this morning. hash unknown. severity?",
  },
  {
    who: "mara",
    text:
      "Two things change the answer. Was wmic invoked from a script the user normally runs, and is the parent shell interactive? If both, lean low. If either is no, treat it as medium and pull the parent. I'd want the script before I commit to a severity.",
  },
  {
    who: "analyst",
    text: "ok pulling. while you wait — is this Lazarus?",
  },
  {
    who: "mara",
    text:
      "I would not name them. The loader stub and the C2 header are consistent with several DPRK-aligned clusters and three crimeware kits that borrow from them. Moderate confidence DPRK-adjacent; Lazarus specifically needs infrastructure or victimology I do not have.",
  },
];

const CHAR_MS = 18;
const GAP_BEFORE_MARA = 700;
const GAP_BEFORE_ANALYST = 900;

export default function DemoTranscript() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState<string[]>(TURNS.map(() => ""));
  const [thinking, setThinking] = useState<number>(-1);
  const [active, setActive] = useState<number>(-1);
  const [done, setDone] = useState(false);
  const [runId, setRunId] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            setRunId((id) => id + 1);
            io.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (runId === 0) return;
    let cancelled = false;
    const timers: number[] = [];

    setRevealed(TURNS.map(() => ""));
    setActive(-1);
    setThinking(-1);
    setDone(false);

    async function run() {
      for (let i = 0; i < TURNS.length; i++) {
        if (cancelled) return;
        await wait(i === 0 ? 400 : TURNS[i].who === "mara" ? GAP_BEFORE_MARA : GAP_BEFORE_ANALYST, timers);
        if (cancelled) return;
        if (TURNS[i].who === "mara") {
          setThinking(i);
          await wait(800, timers);
          if (cancelled) return;
          setThinking(-1);
        }
        setActive(i);
        const full = TURNS[i].text;
        for (let c = 1; c <= full.length; c++) {
          if (cancelled) return;
          await wait(CHAR_MS, timers);
          setRevealed((prev) => {
            const next = prev.slice();
            next[i] = full.slice(0, c);
            return next;
          });
        }
      }
      if (!cancelled) {
        setActive(-1);
        setDone(true);
      }
    }

    run();
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [runId]);

  return (
    <div ref={ref} className="space-y-12 sm:space-y-14">
      {TURNS.map((t, i) => (
        <Turn
          key={i}
          turn={t}
          shown={revealed[i]}
          typing={active === i && revealed[i].length < t.text.length}
          thinking={thinking === i}
        />
      ))}

      {done && (
        <div className="flex items-center justify-between border-t border-hairline pt-8">
          <span
            className="font-mono text-[11px] uppercase text-ink-3"
            style={{ letterSpacing: "0.18em" }}
          >
            illustrative · live transcript at mara.venode.ai
          </span>
          <button
            type="button"
            onClick={() => setRunId((id) => id + 1)}
            className="arrow-link"
          >
            Replay
          </button>
        </div>
      )}
    </div>
  );
}

function Turn({
  turn,
  shown,
  typing,
  thinking,
}: {
  turn: Turn;
  shown: string;
  typing: boolean;
  thinking: boolean;
}) {
  const isMara = turn.who === "mara";
  return (
    <div className="grid gap-3 md:grid-cols-12">
      <p
        className="font-mono text-[11px] uppercase text-ink-3 md:col-span-2"
        style={{ letterSpacing: "0.18em" }}
      >
        {isMara ? "mara" : "analyst"}
      </p>
      <div className="md:col-span-10">
        {thinking ? (
          <p className="font-mono text-[14px] text-ink-3">
            thinking
            <span className="ml-1 inline-flex gap-1 align-middle">
              <Dot d={0} />
              <Dot d={160} />
              <Dot d={320} />
            </span>
          </p>
        ) : (
          <p
            className={`text-[clamp(1.1rem,1.6vw,1.375rem)] leading-[1.6] ${
              isMara ? "text-ink" : "text-ink-2"
            }`}
            style={{ fontWeight: isMara ? 400 : 400 }}
          >
            {shown}
            {typing && (
              <span
                className="ml-0.5 inline-block align-baseline"
                style={{
                  width: "0.55em",
                  height: "0.08em",
                  background: "var(--accent)",
                  animation: "cursor-blink-fast 0.9s steps(2) infinite",
                  marginBottom: "0.16em",
                }}
                aria-hidden
              />
            )}
          </p>
        )}
      </div>
    </div>
  );
}

function Dot({ d }: { d: number }) {
  return (
    <span
      className="inline-block h-1 w-1 rounded-full bg-ink-3"
      style={{
        animation: "cursor-blink-fast 1.1s steps(2) infinite",
        animationDelay: `${d}ms`,
      }}
    />
  );
}

function wait(ms: number, timers: number[]): Promise<void> {
  return new Promise((resolve) => {
    const id = window.setTimeout(() => resolve(), ms);
    timers.push(id);
  });
}
