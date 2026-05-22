"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { analyzePassword } from "@/lib/security";

export default function PasswordStrengthClient() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const result = analyzePassword(password);

  const colors = [
    "bg-signal-bad",
    "bg-signal-bad",
    "bg-signal-warn",
    "bg-signal-good",
    "bg-signal-good",
  ];
  const textColors = [
    "text-signal-bad",
    "text-signal-bad",
    "text-signal-warn",
    "text-signal-good",
    "text-signal-good",
  ];

  return (
    <div>
      <label htmlFor="pw" className="block text-sm font-medium text-slate-200">
        Enter a password to analyze
      </label>
      <div className="relative mt-2">
        <input
          id="pw"
          type={show ? "text" : "password"}
          value={password}
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type or paste a password"
          className="w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 pr-12 font-mono text-white placeholder:text-slate-600 focus:border-accent"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-slate-400 hover:text-white"
          aria-label={show ? "Hide password" : "Show password"}
        >
          <Icon name={show ? "x" : "globe"} className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500">
        <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Analysis happens entirely in your browser. Nothing you type is sent or
        stored.
      </p>

      {password && (
        <div className="mt-5 animate-rise">
          {/* Meter */}
          <div className="flex h-2.5 gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-full flex-1 rounded-full ${
                  i <= result.score ? colors[result.score] : "bg-ink-700"
                }`}
              />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <Stat label="Verdict">
              <span className={textColors[result.score]}>{result.label}</span>
            </Stat>
            <Stat label="Entropy">~{result.entropyBits} bits</Stat>
            <Stat label="Time to crack">{result.crackTime}</Stat>
          </div>

          {/* Feedback */}
          <ul className="mt-4 space-y-2">
            {result.feedback.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <Icon
                  name={result.score >= 3 ? "check" : "alert"}
                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                    result.score >= 3 ? "text-signal-good" : "text-signal-warn"
                  }`}
                />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/tools/password-checker"
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink-600 bg-ink-800 px-4 py-2 text-sm font-medium text-slate-200 hover:border-accent/50 hover:text-white"
            >
              Check if it has been breached
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link
              href="/tools/password-generator"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-accent-soft"
            >
              Generate a stronger one
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-ink-700 bg-ink-900 px-3 py-2">
      <div className="text-[11px] uppercase tracking-wider text-slate-500">
        {label}
      </div>
      <div className="font-mono text-sm font-semibold text-white">
        {children}
      </div>
    </div>
  );
}
