"use client";

import { FormEvent, useState } from "react";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { invitation, t } from "@/data/invitation";
import { submitRSVP } from "@/lib/rsvp";
import type { Language } from "@/types/invitation";

export function RSVP({ language }: { language: Language }) {
  const [guestName, setGuestName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no" | "">("");
  const [guests, setGuests] = useState(invitation.rsvp.minGuests);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || !attendance) return;
    setSubmitting(true);
    setError(false);
    try {
      await submitRSVP({ guestName, attendance, guestCount: guests, language, invitationSlug: invitation.slug, submittedAt: new Date().toISOString() }, invitation.rsvp.endpoint);
      setSent(true);
    } catch { setError(true); } finally { setSubmitting(false); }
  }

  const labels = invitation.rsvp.labels;
  return <section className="paper-section rsvp-section" id="rsvp"><AnimatedContainer><SectionTitle eyebrow={t(invitation.rsvp.eyebrow, language)}>{t(invitation.rsvp.heading, language)}</SectionTitle><p className="body-copy">{t(invitation.rsvp.deadline, language)}</p>{sent ? <div className="success" role="status"><span>♡</span><h3>{t(labels.success, language)}</h3><p>{t(labels.successDetail, language)}</p></div> : <form onSubmit={submit} className="rsvp-form"><label>{t(labels.guestName, language)}<input name="name" type="text" required autoComplete="name" placeholder={t(labels.guestNamePlaceholder, language)} value={guestName} onChange={(event) => setGuestName(event.target.value)} /></label><fieldset><legend>{t(labels.attendance, language)}</legend><label className="radio"><input required type="radio" name="attendance" value="yes" checked={attendance === "yes"} onChange={() => setAttendance("yes")} /> {t(invitation.rsvp.attendanceOptions.yes, language)}</label><label className="radio"><input type="radio" name="attendance" value="no" checked={attendance === "no"} onChange={() => setAttendance("no")} /> {t(invitation.rsvp.attendanceOptions.no, language)}</label></fieldset><div className="guest-field"><span>{t(labels.guestCount, language)}</span><div className="counter"><button type="button" aria-label={t(labels.decreaseGuests, language)} onClick={() => setGuests(Math.max(invitation.rsvp.minGuests, guests - 1))}>−</button><output>{guests}</output><button type="button" aria-label={t(labels.increaseGuests, language)} onClick={() => setGuests(Math.min(invitation.rsvp.maxGuests, guests + 1))}>+</button></div><small>{t(labels.guestLimit, language)}</small></div>{error ? <p className="rsvp-error" role="alert">{t(labels.error, language)}</p> : null}<button className="garden-button submit-button" disabled={submitting}>{t(submitting ? labels.submitting : labels.submit, language)}</button></form>}</AnimatedContainer></section>;
}
