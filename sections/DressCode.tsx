import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import type { InvitationConfig } from "@/types/invitation";

export function DressCode({ dressCode }: { dressCode: InvitationConfig["dressCode"] }) {
  return <section className="paper-section dress-section"><AnimatedContainer><SectionTitle>Дресс-код</SectionTitle><p className="body-copy">{dressCode.text}</p><div className="palette" aria-label="Цветовая палитра">{dressCode.colors.map((color) => <span key={color} style={{ backgroundColor: color }} />)}</div><Image className="table-art" src="/images/floraltable.png" width={519} height={481} alt="Праздничный стол с цветами" /></AnimatedContainer></section>;
}
