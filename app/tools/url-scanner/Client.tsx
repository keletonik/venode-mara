"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";
import { analyzeUrl, type UrlReport } from "@/lib/security";

export default function UrlScannerClient() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState<UrlReport | null>(null);
  const [error, setError] = useState("");

  function scan() {
    const result = analyzeUrl(url);
    if ("error" in result) {
      setError(result.error);
      setReport(null);
    } else {
      setError("");
      setReport(result);
    }
  }

  const verdictStyle: Record<UrlReport["verdict"], string> = {
    "Looks safe": "border-signal-good/40 bg-signal-good/10 text-signal-good",
    "Be cautious": "border-signal-warn/40 bg-signal-warn/10 text-signal-warn",
    "High risk": "border-signal-bad/40 bg-signal-bad/10 text-signal-bad",
  };
  const statusIcon = { ok: "check", warn: "alert", bad: "x" } as const;
  const statusColor = {
    ok: "text-signal-good",
    warn: "text-signal-warn",
    bad: "text-signal-bad",
  } as const;

  return (
    <div>
      <label htmlFor="url" className="block text-sm font-medium text-slate-200">
        Paste a link to scan
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="url"
          type="text"
          value={url}
          spellCheck={false}
          autoComplete="off"
          onChange={(e) => {
            setUrl(e.target.value);
            setReport(null);
            setError("");
          }}
          onKeyDown={(e) => e.key === "Enter" && scan()}
          placeholder="example.com/login or https://…"
          className="w-full flex-1 rounded-lg border border-ink-600 bg-ink-900 px-4 py-3 font-mono text-white placeholder:text-slate-600 focus:border-accent"
        />
        <button
          type="button"
          onClick={scan}
          disabled={!url}
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink-950 transition hover:bg-accent-soft disabled:opacity-40"
        >
          Scan link
        </button>
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500">
        <Icon name="lock" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        The link is analyzed locally in your browser and is never opened,
        followed or sent anywhere. This is a heuristic structural check — it
        catches common phishing patterns but cannot detect every threat.
      </p>

      {error && (
        <div className="mt-5 rounded-lg border border-signal-warn/40 bg-signal-warn/10 p-4 text-sm text-signal-warn">
          {error}
        </div>
      )}

      {report && (
        <div className="mt-5 animate-rise">
          <div
            className={`flex items-center justify-between rounded-lg border p-4 ${verdictStyle[report.verdict]}`}
          >
            <div className="flex items-center gap-2">
              <Icon
                name={
                  report.verdict === "Looks safe"
                    ? "check"
                    : report.verdict === "High risk"
                      ? "x"
                      : "alert"
                }
                className="h-6 w-6"
              />
              <div>
                <div className="text-lg font-bold">{report.verdict}</div>
                <div className="text-xs opacity-80">
                  Risk score {report.riskScore}/100 · domain {report.host}
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2.5">
            {report.checks.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border border-ink-700 bg-ink-900 p-3"
              >
                <Icon
                  name={statusIcon[c.status]}
                  className={`mt-0.5 h-5 w-5 shrink-0 ${statusColor[c.status]}`}
                />
                <div>
                  <div className="text-sm font-medium text-white">
                    {c.label}
                  </div>
                  <div className="text-sm text-slate-400">{c.detail}</div>
                </div>
              </li>
            ))}
          </ul>

          {report.verdict !== "Looks safe" && (
            <p className="mt-4 rounded-lg border border-ink-700 bg-ink-900 p-3 text-sm text-slate-300">
              When in doubt, do not click. Instead, open the company&apos;s
              website yourself by typing its address directly into your
              browser.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
