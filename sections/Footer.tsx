import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";
import { PriglasiCredit } from "@/components/PriglasiCredit";

export function Footer({ language }: { language: Language }) {
  return <footer className="footer"><AnimatedContainer><p>{t(invitation.footer.message, language)}</p><h2>{t(invitation.footer.hosts, language)}</h2><p className="footer-note">{t(invitation.footer.note, language)}</p></AnimatedContainer><Image src="/images/floral-footer.png" width={671} height={372} alt="" /><PriglasiCredit language={language} /></footer>;
}
