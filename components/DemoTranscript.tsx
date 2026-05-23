"use client";

import { useEffect, useRef, useState } from "react";

type Turn = {
  who: "analyst" | "mara";
  text: string;
};

const TURNS: Turn[] = [
  {
    who: "analyst",
    text: "alert just popped — process tree below, hash unknown. sev?",
  },
  {
    who: "mara",
    text:
      "Two things change the answer. Was wmic invoked from a script the user normally runs? Is the parent shell interactive? If both yes, lean low and I'll dig deeper. If either no, treat as medium and pull the parent. I'd want the script before I commit to a severity.",
  },
  {
    who: "analyst",
    text: "ok pulling. while you wait — is this Lazarus?",
  },
  {
    who: "mara",
    text:
      "I would not name them. Two overlaps — the loader stub and the C2 header — are consistent with several DPRK-aligned clusters and three crimeware kits that borrow from them. Moderate confidence DPRK-adjacent. Lazarus specifically needs infrastructure or victimology I don't have.",
  },
];

const CHAR_MS = 16;
const GAP_BEFORE_MARA = 700;
const GAP_BEFORE_ANALYST = 900;

export default function DemoTranscript() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState<string[]>(TURNS.map(() => ""));
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [thinking, setThinking] = useState<number>(-1);
  const [done, setDone] = useState(false);
  const [runId, setRunId] = useState(0);
  const startedRef = useRef(false);

  // Run the sequence once when the section first becomes visible.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            setRunId((id) => id + 1);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Drive the typing animation. New runId resets and re-plays.
  useEffect(() => {
    if (runId === 0) return;
    let cancelled = false;
    const timers: number[] = [];

    setRevealed(TURNS.map(() => ""));
    setActiveIdx(-1);
    setThinking(-1);
    setDone(false);

    async function run() {
      for (let i = 0; i < TURNS.length; i++) {
        if (cancelled) return;
        const gap = i === 0 ? 400 : TURNS[i].who === "mara" ? GAP_BEFORE_MARA : GAP_BEFORE_ANALYST;
        await wait(gap, timers);
        if (cancelled) return;
        if (TURNS[i].who === "mara") {
          setThinking(i);
          await wait(900, timers);
          if (cancelled) return;
          setThinking(-1);
        }
        setActiveIdx(i);
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
        setActiveIdx(-1);
        setDone(true);
      }
    }

    run();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [runId]);

  return (
    <div
      ref={rootRef}
      className="border border-hairline bg-[#0c0b0e]"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(244,241,234,0.04), 0 30px 80px -40px rgba(200,51,75,0.18)",
      }}
    >
      {/* Terminal chrome — title row + status */}
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent/70" aria-hidden />
          <span
            className="font-mono text-[11px] uppercase text-ink-2"
            style={{ letterSpacing: "0.22em" }}
          >
            session — soc-3 · live
          </span>
        </div>
        <span
          className="font-mono text-[11px] uppercase text-ink-3"
          style={{ letterSpacing: "0.22em" }}
        >
          mara v0.1
        </span>
      </div>

      <div className="space-y-7 px-5 py-7 sm:px-8 sm:py-9">
        {TURNS.map((t, i) => (
          <Bubble
            key={i}
            who={t.who}
            text={revealed[i]}
            typing={activeIdx === i && revealed[i].length < t.text.length}
            thinking={thinking === i}
            visible={revealed[i].length > 0 || thinking === i || activeIdx === i}
          />
        ))}

        {done && (
          <div className="flex items-center justify-between gap-4 border-t border-hairline pt-5">
            <span
              className="font-mono text-[11px] uppercase text-ink-3"
              style={{ letterSpacing: "0.22em" }}
            >
              end of session — illustrative
            </span>
            <button
              type="button"
              onClick={() => setRunId((id) => id + 1)}
              className="font-mono text-[11px] uppercase text-ink-2 transition hover:text-ink"
              style={{ letterSpacing: "0.22em" }}
            >
              replay ↻
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Bubble({
  who,
  text,
  typing,
  thinking,
  visible,
}: {
  who: "analyst" | "mara";
  text: string;
  typing: boolean;
  thinking: boolean;
  visible: boolean;
}) {
  if (!visible) return <div aria-hidden style={{ minHeight: 0 }} />;
  return (
    <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <span
        className={`shrink-0 font-mono text-[11px] uppercase ${
          who === "mara" ? "text-accent" : "text-ink-2"
        }`}
        style={{ letterSpacing: "0.22em" }}
      >
        {who === "mara" ? "mara@v0.1" : "analyst@soc-3"}
      </span>
      <div>
        {thinking ? (
          <span
            className="inline-flex items-center gap-2 font-mono text-[13px] text-ink-3"
            style={{ letterSpacing: "0.08em" }}
          >
            thinking
            <span className="inline-flex gap-1">
              <Dot delay={0} />
              <Dot delay={140} />
              <Dot delay={280} />
            </span>
          </span>
        ) : (
          <p
            className={`text-[15.5px] leading-[1.7] ${
              who === "mara" ? "text-ink" : "text-ink-2"
            }`}
          >
            {text}
            {typing && (
              <span
                className="ml-0.5 inline-block align-baseline"
                style={{
                  width: "0.55em",
                  height: "0.08em",
                  background: "var(--accent)",
                  animation: "cursor-blink 0.9s steps(2) infinite",
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

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="inline-block h-1 w-1 rounded-full bg-ink-2"
      style={{
        animation: "cursor-blink 1.1s steps(2) infinite",
        animationDelay: `${delay}ms`,
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
