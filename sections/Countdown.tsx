"use client";

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { useCountdown } from "@/hooks/useCountdown";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function Countdown({ language }: { language: Language }) {
  const left = useCountdown(`${invitation.weddingDate}T${invitation.startTime}:00+06:00`);
  const labels = invitation.countdown.labels;
  const units = [[left.days, labels.days], [left.hours, labels.hours], [left.minutes, labels.minutes], [left.seconds, labels.seconds]] as const;
  return <section className="paper-section countdown-section"><AnimatedContainer><SectionTitle>{t(invitation.countdown.heading, language)}</SectionTitle><div className="countdown-grid">{units.map(([value, label]) => <div key={t(label, language)}><strong>{String(value).padStart(2, "0")}</strong><span>{t(label, language)}</span></div>)}</div></AnimatedContainer></section>;
}
