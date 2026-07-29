import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import type { InvitationConfig } from "@/types/invitation";

export function Location({ venue }: { venue: InvitationConfig["venue"] }) {
  return <section className="paper-section location-section"><AnimatedContainer><SectionTitle eyebrow="Место проведения">Как нас найти</SectionTitle><Image className="venue-art" src="/images/venue-floral.png" width={478} height={199} alt="Цветочная иллюстрация места праздника" /><h3>{venue.name}</h3><p className="body-copy">{venue.address}</p><a className="garden-button" href={venue.mapUrl} target="_blank" rel="noreferrer">Открыть карту</a></AnimatedContainer></section>;
}
