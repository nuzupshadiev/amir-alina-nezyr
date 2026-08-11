import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { invitation, t } from "@/data/invitation";
import type { Language, TimelineItem } from "@/types/invitation";

const icons: Record<TimelineItem["icon"], string> = { guests: "♡", blessing: "✦", dinner: "♨", dance: "♫" };

export function Timeline({ language }: { language: Language }) {
  return <section className="paper-section timeline-section">
    <AnimatedContainer><SectionTitle eyebrow={t(invitation.timeline.eyebrow, language)}>{t(invitation.timeline.heading, language)}</SectionTitle></AnimatedContainer>
    <div className="timeline-list">{invitation.timeline.items.map((item, index) => <AnimatedContainer className={`timeline-item ${index % 2 ? "reverse" : ""}`} key={item.time}><div className="timeline-icon" aria-hidden="true">{icons[item.icon]}</div><div className="timeline-copy"><time>{item.time}</time><h3>{t(item.title, language)}</h3><p>{t(item.description, language)}</p></div></AnimatedContainer>)}</div>
  </section>;
}
