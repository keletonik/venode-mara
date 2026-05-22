"use client";

import { useCallback, useEffect, useState } from "react";
import CopyButton from "@/components/CopyButton";
import { Icon } from "@/components/Icons";

type Mode = "uuid" | "token";

function randomToken(bytes: number): string {
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return [...arr].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function UuidGeneratorClient() {
  const [mode, setMode] = useState<Mode>("uuid");
  const [count, setCount] = useState(5);
  const [bytes, setBytes] = useState(24);
  const [values, setValues] = useState<string[]>([]);

  const generate = useCallback(() => {
    const next: string[] = [];
    for (let i = 0; i < count; i++) {
      next.push(mode === "uuid" ? crypto.randomUUID() : randomToken(bytes));
    }
    setValues(next);
  }, [mode, count, bytes]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div>
      {/* Mode switch */}
      <div className="flex gap-2">
        {(
          [
            ["uuid", "UUID v4"],
            ["token", "Random token"],
          ] as const
        ).map(([m, label]) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              mode === m
                ? "bg-accent text-ink-950"
                : "border border-ink-600 bg-ink-800 text-slate-300 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="count" className="text-sm font-medium text-slate-200">
              How many
            </label>
            <span className="font-mono text-accent">{count}</span>
          </div>
          <input
            id="count"
            type="range"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="mt-2 w-full accent-accent"
          />
        </div>
        {mode === "token" && (
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="bytes" className="text-sm font-medium text-slate-200">
                Length (bytes)
              </label>
              <span className="font-mono text-accent">
                {bytes} → {bytes * 2} hex chars
              </span>
            </div>
            <input
              id="bytes"
              type="range"
              min={8}
              max={64}
              value={bytes}
              onChange={(e) => setBytes(Number(e.target.value))}
              className="mt-2 w-full accent-accent"
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={generate}
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
        >
          <Icon name="bolt" className="h-4 w-4" />
          Generate
        </button>
        <CopyButton value={values.join("\n")} label="Copy all" />
      </div>

      {/* Output */}
      <div className="mt-5 space-y-2">
        {values.map((v, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 rounded-lg border border-ink-700 bg-ink-900 px-3 py-2.5"
          >
            <code className="break-all font-mono text-sm text-slate-200">
              {v}
            </code>
            <CopyButton value={v} label="" className="shrink-0" />
          </div>
        ))}
      </div>

      <p className="mt-4 flex items-start gap-1.5 text-xs text-slate-500">
        <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Generated with the Web Crypto API in your browser. Values are never
        transmitted — safe to use for real secrets and API keys.
      </p>
    </div>
  );
}
