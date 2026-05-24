"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "@/components/Icons";

type Deployment = "on-prem" | "hosted" | "hybrid" | "undecided";

const INDUSTRIES = [
  "Financial services",
  "Healthcare & life sciences",
  "Critical infrastructure",
  "Government & public sector",
  "Scientific research",
  "Technology & SaaS",
  "Telecommunications",
  "Energy & utilities",
  "Defence & aerospace",
  "Other",
];

const ORG_SIZES = [
  "1 – 50 employees",
  "51 – 500",
  "501 – 2,000",
  "2,001 – 10,000",
  "10,001 – 50,000",
  "50,000+",
];

const SEAT_BANDS = [
  "5 – 10 seats",
  "11 – 25",
  "26 – 50",
  "51 – 100",
  "100 – 250",
  "250+",
];

const TIMELINES = [
  "Evaluating, no timeline yet",
  "0 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12+ months",
];

const COMPLIANCE = [
  "SOC 2",
  "ISO 27001",
  "FedRAMP",
  "HIPAA",
  "PCI DSS",
  "GDPR",
  "DORA",
  "NIS2",
];

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "live.com",
  "msn.com",
]);

type FormState = {
  fullName: string;
  workEmail: string;
  jobTitle: string;
  orgName: string;
  orgDomain: string;
  orgRegistrationId: string;
  industry: string;
  country: string;
  orgSize: string;
  securityTeamSize: string;
  seatBand: string;
  deployment: Deployment | "";
  currentStack: string;
  compliance: string[];
  timeline: string;
  useCase: string;
  notes: string;
  consent: boolean;
};

const INITIAL: FormState = {
  fullName: "",
  workEmail: "",
  jobTitle: "",
  orgName: "",
  orgDomain: "",
  orgRegistrationId: "",
  industry: "",
  country: "",
  orgSize: "",
  securityTeamSize: "",
  seatBand: "",
  deployment: "",
  currentStack: "",
  compliance: [],
  timeline: "",
  useCase: "",
  notes: "",
  consent: false,
};

function validate(s: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!s.fullName.trim()) errors.fullName = "Required";
  if (!s.workEmail.trim()) errors.workEmail = "Required";
  else {
    const m = s.workEmail.match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/);
    if (!m) errors.workEmail = "Use a valid email address";
    else if (FREE_EMAIL_DOMAINS.has(m[1].toLowerCase()))
      errors.workEmail = "Please use your work email, not a personal account";
  }
  if (!s.jobTitle.trim()) errors.jobTitle = "Required";
  if (!s.orgName.trim()) errors.orgName = "Required";
  if (!s.industry) errors.industry = "Required";
  if (!s.orgSize) errors.orgSize = "Required";
  if (!s.seatBand) errors.seatBand = "Required";
  if (!s.deployment) errors.deployment = "Required";
  if (!s.useCase.trim() || s.useCase.trim().length < 20)
    errors.useCase = "Tell us a little more (20+ characters)";
  if (!s.consent) errors.consent = "Required to submit";
  return errors;
}

function composeMailto(email: string, s: FormState): string {
  const lines = [
    "── Contact ─────────────────────────────────",
    `Name:           ${s.fullName}`,
    `Work email:     ${s.workEmail}`,
    `Job title:      ${s.jobTitle}`,
    "",
    "── Organisation ───────────────────────────",
    `Name:           ${s.orgName}`,
    `Domain:         ${s.orgDomain || "—"}`,
    `Registration #: ${s.orgRegistrationId || "—"}`,
    `Industry:       ${s.industry}`,
    `Country:        ${s.country || "—"}`,
    `Org size:       ${s.orgSize}`,
    `Sec team size:  ${s.securityTeamSize || "—"}`,
    `Seats wanted:   ${s.seatBand}`,
    "",
    "── Security context ───────────────────────",
    `Deployment:     ${s.deployment}`,
    `Current stack:  ${s.currentStack || "—"}`,
    `Compliance:     ${s.compliance.length ? s.compliance.join(", ") : "—"}`,
    `Timeline:       ${s.timeline || "—"}`,
    "",
    "── Use case ───────────────────────────────",
    s.useCase,
    "",
  ];
  if (s.notes.trim()) {
    lines.push("── Notes ──────────────────────────────────", s.notes, "");
  }
  const subject = `Mara preview · ${s.orgName}`;
  const body = lines.join("\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function JoinForm({ contactEmail }: { contactEmail: string }) {
  const [s, setS] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => composeMailto(contactEmail, s), [contactEmail, s]);

  function set<K extends keyof FormState>(k: K, v: FormState[K]) {
    setS((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  }

  function toggleCompliance(item: string) {
    setS((prev) => ({
      ...prev,
      compliance: prev.compliance.includes(item)
        ? prev.compliance.filter((c) => c !== item)
        : [...prev.compliance, item],
    }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(s);
    setErrors(v);
    if (Object.keys(v).length) {
      const first = document.querySelector<HTMLElement>("[data-has-error='1']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl">
        <span className="eyebrow">Submitted</span>
        <h2 className="display mt-6 text-[clamp(2rem,4vw,3rem)] leading-[1.06]">
          Thank you. We will be in touch.
        </h2>
        <p className="mt-6 text-[16.5px] leading-[1.65] text-ink-2">
          Your details are on their way to the venode team. A human reads every
          submission. If your mail client did not open automatically, you can
          send the same payload directly to{" "}
          <a
            href={mailto}
            className="text-ink underline-offset-4 hover:underline"
          >
            {contactEmail}
          </a>
          .
        </p>
        <p className="mt-4 text-[15.5px] leading-[1.65] text-ink-2/80">
          We typically reply inside one business day. If your request is
          time-sensitive, write to{" "}
          <a
            href={`mailto:${contactEmail}?subject=Urgent%20preview%20request`}
            className="text-ink underline-offset-4 hover:underline"
          >
            {contactEmail}
          </a>{" "}
          with &ldquo;Urgent&rdquo; in the subject.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto max-w-3xl"
      aria-labelledby="join-form-h"
    >
      <h2 id="join-form-h" className="sr-only">
        Enterprise preview enquiry
      </h2>

      {/* ── Section 1: Your details ─────────────────────────────── */}
      <FormSection
        index="01"
        title="Your details."
        hint="Who you are. Required so we can reply."
      >
        <FieldGrid>
          <Field
            label="Full name"
            error={errors.fullName}
            required
          >
            <input
              type="text"
              autoComplete="name"
              className="field-input"
              value={s.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              required
            />
          </Field>
          <Field
            label="Work email"
            error={errors.workEmail}
            hint="Use your organisation address, not a personal account."
            required
          >
            <input
              type="email"
              autoComplete="email"
              className="field-input"
              value={s.workEmail}
              onChange={(e) => set("workEmail", e.target.value)}
              required
            />
          </Field>
          <Field
            label="Job title / role"
            error={errors.jobTitle}
            required
          >
            <input
              type="text"
              autoComplete="organization-title"
              className="field-input"
              placeholder="e.g. Head of Security, SOC Manager, CTI Lead"
              value={s.jobTitle}
              onChange={(e) => set("jobTitle", e.target.value)}
              required
            />
          </Field>
          <Field label="Country / region">
            <input
              type="text"
              autoComplete="country-name"
              className="field-input"
              placeholder="e.g. United Kingdom"
              value={s.country}
              onChange={(e) => set("country", e.target.value)}
            />
          </Field>
        </FieldGrid>
      </FormSection>

      {/* ── Section 2: Your organisation ────────────────────────── */}
      <FormSection
        index="02"
        title="Your organisation."
        hint="So we know who we are talking to."
      >
        <FieldGrid>
          <Field
            label="Organisation name"
            error={errors.orgName}
            required
          >
            <input
              type="text"
              autoComplete="organization"
              className="field-input"
              value={s.orgName}
              onChange={(e) => set("orgName", e.target.value)}
              required
            />
          </Field>
          <Field
            label="Organisation domain"
            hint="Used to verify the request."
          >
            <input
              type="text"
              className="field-input"
              placeholder="e.g. acme.com"
              value={s.orgDomain}
              onChange={(e) => set("orgDomain", e.target.value)}
            />
          </Field>
          <Field
            label="Registration / Tax ID"
            hint="Optional — e.g. Companies House, EIN, VAT ID."
          >
            <input
              type="text"
              className="field-input"
              value={s.orgRegistrationId}
              onChange={(e) => set("orgRegistrationId", e.target.value)}
            />
          </Field>
          <Field
            label="Industry"
            error={errors.industry}
            required
          >
            <select
              className="field-select"
              value={s.industry}
              onChange={(e) => set("industry", e.target.value)}
              required
            >
              <option value="" disabled>
                Select industry
              </option>
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label="Organisation size"
            error={errors.orgSize}
            required
          >
            <select
              className="field-select"
              value={s.orgSize}
              onChange={(e) => set("orgSize", e.target.value)}
              required
            >
              <option value="" disabled>
                Total employees
              </option>
              {ORG_SIZES.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Security team size">
            <input
              type="text"
              className="field-input"
              placeholder="e.g. 18 analysts, 4 IR"
              value={s.securityTeamSize}
              onChange={(e) => set("securityTeamSize", e.target.value)}
            />
          </Field>
        </FieldGrid>
      </FormSection>

      {/* ── Section 3: Security context ─────────────────────────── */}
      <FormSection
        index="03"
        title="Security context."
        hint="How you would deploy Mara and what it needs to fit alongside."
      >
        <div className="space-y-8">
          <Field
            label="Estimated seats / users"
            hint="Mara + Hugo is per-seat with a 5-seat organisation minimum."
            error={errors.seatBand}
            required
          >
            <select
              className="field-select"
              value={s.seatBand}
              onChange={(e) => set("seatBand", e.target.value)}
              required
            >
              <option value="" disabled>
                How many people would use Mara
              </option>
              {SEAT_BANDS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Deployment preference"
            error={errors.deployment}
            required
          >
            <div className="field-radio-group mt-2">
              {(
                [
                  ["on-prem", "On-premise"],
                  ["hosted", "Hosted by venode"],
                  ["hybrid", "Hybrid"],
                  ["undecided", "Not sure yet"],
                ] as [Deployment, string][]
              ).map(([val, label]) => (
                <label
                  key={val}
                  className={`field-radio ${s.deployment === val ? "is-on" : ""}`}
                >
                  <input
                    type="radio"
                    name="deployment"
                    value={val}
                    checked={s.deployment === val}
                    onChange={() => set("deployment", val)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </Field>

          <Field
            label="Current security stack"
            hint="SIEM, EDR, sandbox, TIP, ticketing — anything Mara would sit alongside."
          >
            <input
              type="text"
              className="field-input"
              placeholder="e.g. Splunk + CrowdStrike + MISP + Jira"
              value={s.currentStack}
              onChange={(e) => set("currentStack", e.target.value)}
            />
          </Field>

          <Field
            label="Compliance requirements"
            hint="Select all that apply."
          >
            <div className="field-radio-group mt-2">
              {COMPLIANCE.map((c) => {
                const on = s.compliance.includes(c);
                return (
                  <label
                    key={c}
                    className={`field-radio ${on ? "is-on" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggleCompliance(c)}
                    />
                    {c}
                  </label>
                );
              })}
            </div>
          </Field>

          <Field label="Rollout timeline">
            <select
              className="field-select"
              value={s.timeline}
              onChange={(e) => set("timeline", e.target.value)}
            >
              <option value="" disabled>
                When would you want to start
              </option>
              {TIMELINES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </FormSection>

      {/* ── Section 4: Use case ─────────────────────────────────── */}
      <FormSection
        index="04"
        title="What you want Mara to do."
        hint="A few sentences is enough. We read these carefully."
      >
        <Field
          label="Primary use case"
          error={errors.useCase}
          required
        >
          <textarea
            className="field-textarea"
            value={s.useCase}
            onChange={(e) => set("useCase", e.target.value)}
            placeholder="e.g. Triage SOC alerts and draft incident write-ups for our IR team. We are particularly interested in malware analysis on long sandbox reports."
            required
          />
        </Field>
        <Field
          label="Anything else"
          hint="Procurement constraints, data residency, things we should know."
        >
          <textarea
            className="field-textarea"
            value={s.notes}
            onChange={(e) => set("notes", e.target.value)}
          />
        </Field>
      </FormSection>

      <div className="mt-12 border-t border-hairline pt-8">
        <label
          className={`flex items-baseline gap-3 text-[14.5px] leading-[1.6] ${
            errors.consent ? "text-accent" : "text-ink-2"
          }`}
          data-has-error={errors.consent ? "1" : undefined}
        >
          <input
            type="checkbox"
            checked={s.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-1 h-4 w-4 accent-[var(--accent)]"
          />
          <span>
            I confirm I am submitting on behalf of my organisation and consent
            to venode contacting me about this enquiry. We do not share your
            details with anyone else.
          </span>
        </label>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <button type="submit" className="btn-primary">
            Send enquiry <ArrowRight className="h-3 w-3" />
          </button>
          <a href={`mailto:${contactEmail}`} className="btn-ghost">
            Or email us directly
          </a>
        </div>
      </div>
    </form>
  );
}

/* ────────────────────────────────────────────────────────────── */

function FormSection({
  index,
  title,
  hint,
  children,
}: {
  index: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline pt-10 pb-2 first:border-t-0 first:pt-0">
      <div className="mb-8 grid items-baseline gap-3 md:grid-cols-[4rem_1fr]">
        <span
          className="font-mono text-[12px] uppercase text-accent"
          style={{ letterSpacing: "0.22em" }}
        >
          {index}
        </span>
        <div>
          <h3 className="font-display text-[clamp(1.25rem,2.25vw,1.625rem)] font-bold tracking-display text-ink">
            {title}
          </h3>
          {hint && (
            <p className="mt-2 max-w-xl text-[14.5px] leading-[1.6] text-ink-2">
              {hint}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function FieldGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">{children}</div>;
}

function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block" data-has-error={error ? "1" : undefined}>
      <span className="field-label flex items-baseline gap-2">
        <span>{label}</span>
        {required && (
          <span aria-hidden className="text-accent">
            *
          </span>
        )}
      </span>
      <div className="mt-2">{children}</div>
      <span className="mt-2 block min-h-[18px] text-[12.5px] leading-[1.5]">
        {error ? (
          <span className="text-accent">{error}</span>
        ) : hint ? (
          <span className="text-ink-2/70">{hint}</span>
        ) : null}
      </span>
    </label>
  );
}
