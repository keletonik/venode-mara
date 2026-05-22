"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";

type Result =
  | { state: "safe" }
  | { state: "pwned"; count: number };

async function sha1Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-1",
    new TextEncoder().encode(text),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

export default function PasswordCheckerClient() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  async function check() {
    if (!password) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const hash = await sha1Hex(password);
      const prefix = hash.slice(0, 5);
      const suffix = hash.slice(5);
      const res = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`,
      );
      if (!res.ok) throw new Error("bad response");
      const body = await res.text();
      let count = 0;
      for (const line of body.split("\n")) {
        const [s, c] = line.trim().split(":");
        if (s === suffix) {
          count = parseInt(c, 10) || 0;
          break;
        }
      }
      setResult(count > 0 ? { state: "pwned", count } : { state: "safe" });
    } catch {
      setError(
        "Could not reach the breach database. Check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <label
        htmlFor="pw"
        className="block text-sm font-medium text-slate-200"
      >
        Enter a password to check
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            id="pw"
            type={show ? "text" : "password"}
            value={password}
            autoComplete="off"
            spellCheck={false}
            onChange={(e) => {
              setPassword(e.target.value);
              setResult(null);
              setError("");
            }}
            onKeyDown={(e) => e.key === "Enter" && check()}
            placeholder="Type or paste a password"
            className="w-full rounded-sm border border-ink-700 bg-ink-900 px-4 py-3 pr-12 font-mono text-white placeholder:text-slate-600 focus:border-accent"
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
        <button
          type="button"
          onClick={check}
          disabled={loading || !password}
          className="rounded-sm bg-accent px-6 py-3 font-semibold text-ink-950 transition hover:bg-accent-soft disabled:opacity-40"
        >
          {loading ? "Checking…" : "Check"}
        </button>
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500">
        <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Your password is hashed with SHA-1 inside your browser. Only the first
        5 characters of that hash are sent — never the password itself. This is
        the k-anonymity model used by Have I Been Pwned.
      </p>

      {error && (
        <div className="mt-5 rounded-sm border border-signal-warn/40 bg-signal-warn/10 p-4 text-sm text-signal-warn">
          {error}
        </div>
      )}

      {result?.state === "pwned" && (
        <div className="mt-5 animate-rise rounded-sm border border-signal-bad/40 bg-signal-bad/10 p-5">
          <div className="flex items-center gap-2 text-signal-bad">
            <Icon name="alert" className="h-6 w-6" />
            <h3 className="text-lg font-bold">This password has been breached</h3>
          </div>
          <p className="mt-2 text-slate-200">
            It appears{" "}
            <strong className="text-white">
              {result.count.toLocaleString()}
            </strong>{" "}
            times in known data breaches. Attackers feed exactly these
            passwords into automated login attempts.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
            <li>• Stop using it on every account immediately.</li>
            <li>• Replace it with a unique, randomly generated password.</li>
            <li>• Turn on two-factor authentication where you used it.</li>
          </ul>
          <Link
            href="/tools/password-generator"
            className="mt-4 inline-flex items-center gap-1.5 rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-accent-soft"
          >
            Generate a safe replacement
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      )}

      {result?.state === "safe" && (
        <div className="mt-5 animate-rise rounded-sm border border-signal-good/40 bg-signal-good/10 p-5">
          <div className="flex items-center gap-2 text-signal-good">
            <Icon name="check" className="h-6 w-6" />
            <h3 className="text-lg font-bold">
              Not found in known breaches
            </h3>
          </div>
          <p className="mt-2 text-slate-200">
            This password does not appear in the breach database. That is good
            — but it does not mean the password is strong, or that it is safe
            to reuse. Make sure it is long, random and unique to one account.
          </p>
          <Link
            href="/tools/password-strength"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            Test how strong it is
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
