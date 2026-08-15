"use client";

import React, { useEffect, useRef, useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/Button";
import { INDUSTRY_OPTIONS, SUPPORT_OPTIONS, STAGE_OPTIONS } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const renderedAt = useRef<number | null>(null);
  const hasStartedTracking = useRef(false);

  // Record mount time client-side (not during render) — used as a spam heuristic.
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  function trackStart() {
    if (!hasStartedTracking.current) {
      hasStartedTracking.current = true;
      track("contact_form_started");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      title: formData.get("title"),
      stage: formData.get("stage"),
      industry: formData.get("industry"),
      openRoles: formData.get("openRoles"),
      hiringFor: formData.get("hiringFor"),
      supportType: formData.get("supportType"),
      message: formData.get("message"),
      website: formData.get("website"),
      renderedAt: renderedAt.current,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setErrorMessage(result.error ?? "Please check the highlighted fields and try again.");
        setStatus("error");
        return;
      }

      track("contact_form_submitted");
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong sending your message. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-stone-200 bg-white p-10 text-center"
      >
        <h3 className="text-xl text-ink">Thanks, we&rsquo;ve got it.</h3>
        <p className="mt-3 text-stone-600">
          We&rsquo;ll be in touch soon to see if Just Genius is a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onChange={trackStart} noValidate className="space-y-6">
      {/* Honeypot — hidden from sighted and screen-reader users, visible to bots that fill every field. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Company website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} className={inputClass(!!errors.name)} />
        </Field>
        <Field id="email" label="Work email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} className={inputClass(!!errors.email)} />
        </Field>
        <Field id="company" label="Company" required error={errors.company}>
          <input id="company" name="company" type="text" autoComplete="organization" required aria-invalid={!!errors.company} className={inputClass(!!errors.company)} />
        </Field>
        <Field id="title" label="Job title" error={errors.title}>
          <input id="title" name="title" type="text" autoComplete="organization-title" className={inputClass(!!errors.title)} />
        </Field>
        <Field id="stage" label="Company stage" error={errors.stage}>
          <select id="stage" name="stage" defaultValue="" className={inputClass(!!errors.stage)}>
            <option value="" disabled>
              Select stage
            </option>
            {STAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="industry" label="Industry" required error={errors.industry}>
          <select id="industry" name="industry" defaultValue="" required aria-invalid={!!errors.industry} className={inputClass(!!errors.industry)}>
            <option value="" disabled>
              Select industry
            </option>
            {INDUSTRY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="openRoles" label="Number of open roles" error={errors.openRoles}>
          <input id="openRoles" name="openRoles" type="text" inputMode="numeric" className={inputClass(!!errors.openRoles)} />
        </Field>
        <Field id="supportType" label="Type of support needed" required error={errors.supportType}>
          <select id="supportType" name="supportType" defaultValue="" required aria-invalid={!!errors.supportType} className={inputClass(!!errors.supportType)}>
            <option value="" disabled>
              Select support type
            </option>
            {SUPPORT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="hiringFor" label="What are you hiring for?" required error={errors.hiringFor}>
        <input
          id="hiringFor"
          name="hiringFor"
          type="text"
          placeholder="e.g. VP Engineering, 2 clinical nurses, GTM team"
          required
          aria-invalid={!!errors.hiringFor}
          className={inputClass(!!errors.hiringFor)}
        />
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" name="message" rows={4} className={inputClass(!!errors.message)} />
      </Field>

      {errorMessage ? (
        <p role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Get a Recruiting Assessment"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactElement;
}) {
  const errorId = `${id}-error`;
  const field = React.cloneElement(children, {
    "aria-describedby": error ? errorId : undefined,
  });

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      <div className="mt-1.5">{field}</div>
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm transition-colors",
    "focus-visible:outline-2",
    hasError ? "border-red-400" : "border-stone-300",
  ].join(" ");
}
