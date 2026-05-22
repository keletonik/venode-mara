"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import { Icon } from "@/components/Icons";
import { analyzePassword } from "@/lib/security";

const AMBIGUOUS = new Set("Il1O0o");

function randInt(max: number): number {
  const arr = new Uint32Array(1);
  const limit = Math.floor(0xffffffff / max) * max;
  let x: number;
  do {
    crypto.getRandomValues(arr);
    x = arr[0];
  } while (x >= limit);
  return x % max;
}

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()-_=+?.",
};

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(20);
  const [opts, setOpts] = useState({
    lower: true,
    upper: true,
    numbers: true,
    symbols: true,
    noAmbiguous: false,
  });
  const [password, setPassword] = useState("");

  const generate = useCallback(() => {
    const sets: string[] = [];
    (["lower", "upper", "numbers", "symbols"] as const).forEach((k) => {
      if (opts[k]) {
        let chars = SETS[k];
        if (opts.noAmbiguous) {
          chars = [...chars].filter((c) => !AMBIGUOUS.has(c)).join("");
        }
        if (chars) sets.push(chars);
      }
    });

    if (sets.length === 0) {
      setPassword("");
      return;
    }

    const pool = sets.join("");
    const out: string[] = [];
    for (const s of sets) {
      if (out.length < length) out.push(s[randInt(s.length)]);
    }
    while (out.length < length) out.push(pool[randInt(pool.length)]);
    setPassword(shuffle(out).slice(0, length).join(""));
  }, [length, opts]);

  useEffect(() => {
    generate();
  }, [generate]);

  const strength = analyzePassword(password);
  const meterColor = ["bg-signal-bad", "bg-signal-bad", "bg-signal-warn", "bg-signal-good", "bg-signal-good"][
    strength.score
  ];

  const noneSelected =
    !opts.lower && !opts.upper && !opts.numbers && !opts.symbols;

  return (
    <div>
      {/* Output */}
      <div className="rounded-sm border border-ink-700 bg-ink-900 p-4">
        <div className="flex items-center gap-3">
          <code className="flex-1 break-all font-mono text-lg text-white">
            {password || "Select at least one character type"}
          </code>
          <button
            type="button"
            onClick={generate}
            className="shrink-0 rounded-sm border border-ink-700 bg-ink-800 p-2.5 text-slate-200 transition hover:border-accent/50 hover:text-white"
            aria-label="Regenerate"
          >
            <Icon name="bolt" className="h-5 w-5" />
          </button>
          <CopyButton value={password} />
        </div>
        {password && (
          <div className="mt-3">
            <div className="flex h-1.5 gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-full flex-1 rounded-full ${
                    i <= strength.score ? meterColor : "bg-ink-700"
                  }`}
                />
              ))}
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              {strength.label} · ~{strength.entropyBits} bits of entropy ·
              estimated time to crack: {strength.crackTime}
            </p>
          </div>
        )}
      </div>

      {/* Length */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <label htmlFor="len" className="text-sm font-medium text-slate-200">
            Length
          </label>
          <span className="font-mono text-accent">{length}</span>
        </div>
        <input
          id="len"
          type="range"
          min={6}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="mt-2 w-full accent-accent"
        />
      </div>

      {/* Options */}
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {(
          [
            ["lower", "Lowercase (a–z)"],
            ["upper", "Uppercase (A–Z)"],
            ["numbers", "Numbers (0–9)"],
            ["symbols", "Symbols (!@#…)"],
            ["noAmbiguous", "Exclude look-alikes (l, 1, O, 0)"],
          ] as const
        ).map(([key, label]) => (
          <label
            key={key}
            className="flex cursor-pointer items-center gap-2.5 rounded-sm border border-ink-700 bg-ink-900 px-3 py-2.5 text-sm text-slate-200"
          >
            <input
              type="checkbox"
              checked={opts[key]}
              onChange={(e) =>
                setOpts((o) => ({ ...o, [key]: e.target.checked }))
              }
              className="h-4 w-4 accent-accent"
            />
            {label}
          </label>
        ))}
      </div>

      {noneSelected && (
        <p className="mt-3 text-sm text-signal-warn">
          Select at least one character type to generate a password.
        </p>
      )}

      <p className="mt-5 flex items-start gap-1.5 text-xs text-slate-500">
        <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Generated locally with your browser&apos;s cryptographically secure
        random generator. The password is never transmitted or logged. Store it
        in a{" "}
        <Link href="/guides/password-manager-vs-browser-saved-passwords" className="underline hover:text-accent">
          password manager
        </Link>{" "}
        rather than reusing it.
      </p>
    </div>
  );
}
