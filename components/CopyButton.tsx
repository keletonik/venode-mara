"use client";

import { useState } from "react";
import { Icon } from "./Icons";

export default function CopyButton({
  value,
  label = "Copy",
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-1.5 border border-ink-600 bg-ink-900 px-3 py-2 font-mono text-xs uppercase tracking-widewide text-ash transition hover:border-accent/60 hover:text-cream ${className}`}
    >
      <Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5" />
      {copied ? "Copied" : label}
    </button>
  );
}
