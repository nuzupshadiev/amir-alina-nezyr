"use client";

import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { useCountdown } from "@/hooks/useCountdown";

export function Countdown({ target }: { target: string }) {
  const left = useCountdown(target);
  const units = [[left.days, "дней"], [left.hours, "часов"], [left.minutes, "минут"], [left.seconds, "секунд"]] as const;
  return <section className="paper-section countdown-section"><AnimatedContainer><SectionTitle>До нашей свадьбы</SectionTitle><div className="countdown-grid">{units.map(([value, label]) => <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>)}</div></AnimatedContainer></section>;
}
