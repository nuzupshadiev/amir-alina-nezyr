import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import type { TimelineItem } from "@/types/invitation";

const icons: Record<TimelineItem["icon"], string> = { guests: "♡", blessing: "✦", dinner: "♨", dance: "♫" };

export function Timeline({ items }: { items: TimelineItem[] }) {
  return <section className="paper-section timeline-section">
    <AnimatedContainer><SectionTitle eyebrow="Күн тартиби">Программа тоя</SectionTitle></AnimatedContainer>
    <div className="timeline-list">{items.map((item, index) => <AnimatedContainer className={`timeline-item ${index % 2 ? "reverse" : ""}`} key={item.time}><div className="timeline-icon" aria-hidden="true">{icons[item.icon]}</div><div className="timeline-copy"><time>{item.time}</time><h3>{item.title}</h3><p>{item.description}</p></div></AnimatedContainer>)}</div>
  </section>;
}
