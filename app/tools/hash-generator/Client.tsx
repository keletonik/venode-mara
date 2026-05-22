"use client";

import { useEffect, useState } from "react";
import CopyButton from "@/components/CopyButton";
import { Icon } from "@/components/Icons";
import { md5 } from "@/lib/md5";

const SUBTLE_ALGOS: { key: string; algo: AlgorithmIdentifier }[] = [
  { key: "SHA-1", algo: "SHA-1" },
  { key: "SHA-256", algo: "SHA-256" },
  { key: "SHA-384", algo: "SHA-384" },
  { key: "SHA-512", algo: "SHA-512" },
];

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function HashGeneratorClient() {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!text) {
        setHashes([]);
        return;
      }
      const data = new TextEncoder().encode(text);
      const out: { key: string; value: string }[] = [
        { key: "MD5", value: md5(text) },
      ];
      for (const { key, algo } of SUBTLE_ALGOS) {
        const buf = await crypto.subtle.digest(algo, data);
        out.push({ key, value: toHex(buf) });
      }
      if (!cancelled) setHashes(out);
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <div>
      <label htmlFor="src" className="block text-sm font-medium text-slate-200">
        Text to hash
      </label>
      <textarea
        id="src"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        spellCheck={false}
        placeholder="Type or paste any text…"
        className="mt-2 w-full resize-y rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 font-mono text-sm text-white placeholder:text-slate-600 focus:border-accent"
      />

      <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-500">
        <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Hashes are computed in your browser as you type. Nothing is uploaded.
      </p>

      <div className="mt-5 space-y-3">
        {hashes.length === 0 && (
          <p className="rounded-lg border border-ink-700 bg-ink-900 p-4 text-sm text-slate-500">
            Hashes will appear here once you enter some text.
          </p>
        )}
        {hashes.map((h) => (
          <div
            key={h.key}
            className="rounded-lg border border-ink-700 bg-ink-900 p-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {h.key}
              </span>
              <CopyButton value={h.value} />
            </div>
            <code className="mt-1.5 block break-all font-mono text-sm text-slate-200">
              {h.value}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
