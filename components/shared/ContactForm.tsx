"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "../icons";

const reasons = [
  "General question",
  "Insurance / billing question",
  "New patient inquiry",
  "Existing patient inquiry",
  "Feedback / review",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [k]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-cream-deep to-cream-soft p-8 shadow-lift lg:p-12">
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/[0.15] blur-3xl animate-glow-pulse" />
        <div className="relative flex flex-col items-center gap-5 text-center">
          <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold shadow-gold-strong">
            <span className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
            <CheckIcon className="relative h-8 w-8 fill-white" />
          </span>
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-[-0.01em] text-navy sm:text-[30px]">
            Message sent, <span className="text-gradient-gold">{form.name.split(" ")[0] || "thank you!"}</span>
          </h2>
          <p className="max-w-[520px] text-[14.5px] leading-[1.7] text-ink-muted">
            We typically respond within <span className="font-semibold text-navy">1 business day</span>. Need an answer sooner? Call us at <span className="font-semibold text-navy">416-267-6789</span>.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 text-[12.5px] font-semibold text-gold hover:underline"
          >
            ← Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-3xl border border-cream-line bg-white p-6 shadow-lift sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={onChange("name")}
            placeholder="Jane Smith"
            className="input"
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={onChange("email")}
            placeholder="jane@example.com"
            className="input"
          />
        </Field>
        <Field label="Phone Number">
          <input
            type="tel"
            value={form.phone}
            onChange={onChange("phone")}
            placeholder="(416) 555-0123"
            className="input"
          />
        </Field>
        <Field label="Reason for Contact" required>
          <select required value={form.reason} onChange={onChange("reason")} className="input">
            <option value="">Choose a reason…</option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Your Message" required>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={onChange("message")}
              placeholder="How can we help?"
              className="input resize-none"
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 flex flex-col items-stretch gap-4 border-t border-cream-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] leading-[1.5] text-ink-muted">
          We never share your info. Replies typically arrive within one business day.
        </p>
        <button
          type="submit"
          className="group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative">Send Message</span>
          <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRightIcon className="h-3.5 w-3.5 fill-white" />
          </span>
        </button>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-cream-line);
          background: rgba(247, 245, 234, 0.4);
          padding: 0.75rem 1rem;
          font-size: 14px;
          color: var(--color-navy);
          transition: all 200ms;
          outline: none;
        }
        .input:focus {
          background: white;
          border-color: var(--color-gold);
          box-shadow: 0 0 0 4px rgba(162, 132, 78, 0.12);
        }
        .input::placeholder {
          color: rgba(0, 0, 51, 0.35);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-navy/70">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
