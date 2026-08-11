import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function Location({ language }: { language: Language }) {
  return <section className="paper-section location-section"><AnimatedContainer><SectionTitle eyebrow={t(invitation.venue.eyebrow, language)}>{t(invitation.venue.heading, language)}</SectionTitle><Image className="venue-art" src="/images/venue-floral.png" width={478} height={199} alt={t(invitation.venue.imageAlt, language)} /><h3>{t(invitation.venue.name, language)}</h3><p className="body-copy">{t(invitation.venue.address, language)}</p><a className="garden-button" href={invitation.venue.mapUrl} target="_blank" rel="noreferrer">{t(invitation.venue.mapButtonText, language)}</a></AnimatedContainer></section>;
}
