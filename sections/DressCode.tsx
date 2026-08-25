import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function DressCode({ language }: { language: Language }) {
  return <section className="paper-section dress-section"><AnimatedContainer><SectionTitle>{t(invitation.dressCode.title, language)}</SectionTitle><p className="body-copy">{t(invitation.dressCode.description, language)}</p><Image className="table-art" src="/images/floraltable.png" width={519} height={481} alt={t(invitation.dressCode.imageAlt, language)} /></AnimatedContainer></section>;
}
