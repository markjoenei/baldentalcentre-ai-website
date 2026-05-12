"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "../icons";
import { services } from "./servicesData";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    newPatient: "yes",
    notes: "",
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
            Thanks, <span className="text-gradient-gold">{form.name.split(" ")[0] || "we got it!"}</span>
          </h2>
          <p className="max-w-[520px] text-[14.5px] leading-[1.7] text-ink-muted">
            Your booking request has been received. A team member will call you within{" "}
            <span className="font-semibold text-navy">2 business hours</span> to confirm
            your appointment for{" "}
            <span className="font-semibold text-navy">{form.date || "your selected date"}</span>{" "}
            at <span className="font-semibold text-navy">{form.time || "your preferred time"}</span>.
          </p>
          <div className="mt-2 grid grid-cols-2 gap-4 text-left sm:gap-6">
            <div className="rounded-xl border border-cream-line bg-white p-4">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-gold">Service</p>
              <p className="mt-1 text-[13.5px] font-semibold text-navy">
                {services.find((s) => s.slug === form.service)?.label || "General consultation"}
              </p>
            </div>
            <div className="rounded-xl border border-cream-line bg-white p-4">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-gold">Contact</p>
              <p className="mt-1 text-[13.5px] font-semibold text-navy">{form.phone || form.email}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-3 text-[12.5px] font-semibold text-gold hover:underline"
          >
            ← Book another appointment
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
        <Field label="Phone Number" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={onChange("phone")}
            placeholder="(416) 555-0123"
            className="input"
          />
        </Field>
        <Field label="Are you a new patient?" required>
          <select
            required
            value={form.newPatient}
            onChange={onChange("newPatient")}
            className="input"
          >
            <option value="yes">Yes, I'm new</option>
            <option value="returning">No, returning patient</option>
            <option value="emergency">It's an emergency</option>
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="What service are you interested in?" required>
            <select
              required
              value={form.service}
              onChange={onChange("service")}
              className="input"
            >
              <option value="">Choose a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.label}
                </option>
              ))}
              <option value="not-sure">Not sure — I need a consultation</option>
            </select>
          </Field>
        </div>
        <Field label="Preferred Date" required>
          <input
            type="date"
            required
            value={form.date}
            onChange={onChange("date")}
            min={new Date().toISOString().split("T")[0]}
            className="input"
          />
        </Field>
        <Field label="Preferred Time" required>
          <select required value={form.time} onChange={onChange("time")} className="input">
            <option value="">Choose a time…</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything else we should know?">
            <textarea
              rows={4}
              value={form.notes}
              onChange={onChange("notes")}
              placeholder="Specific concerns, insurance details, or accessibility needs…"
              className="input resize-none"
            />
          </Field>
        </div>
      </div>

      <div className="mt-7 flex flex-col items-stretch gap-4 border-t border-cream-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] leading-[1.5] text-ink-muted">
          By submitting, you agree to be contacted by our team to confirm. We never share your data.
        </p>
        <button
          type="submit"
          className="group relative inline-flex shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-[14px] font-semibold tracking-wide text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-gold-strong"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          <span className="relative">Request Appointment</span>
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
          background: var(--color-cream);
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
