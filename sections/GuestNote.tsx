import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function GuestNote({ language }: { language: Language }) {
  return <section className="paper-section guest-note-section"><AnimatedContainer><SectionTitle eyebrow={t(invitation.guestNote.eyebrow, language)}>{t(invitation.guestNote.heading, language)}</SectionTitle><span className="guest-note-heart" aria-hidden="true">♡</span><p className="body-copy">{t(invitation.guestNote.message, language)}</p></AnimatedContainer></section>;
}
