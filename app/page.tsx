"use client";

import { LanguageProvider, LanguageToggle, useLanguage } from "@/components/LanguageProvider";
import { invitation } from "@/data/invitation";
import { Countdown } from "@/sections/Countdown";
import { DressCode } from "@/sections/DressCode";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { LoadingScreen } from "@/sections/LoadingScreen";
import { Location } from "@/sections/Location";
import { RSVP } from "@/sections/RSVP";
import { Timeline } from "@/sections/Timeline";
import { WeddingDate } from "@/sections/WeddingDate";

function InvitationPage() {
  const { language } = useLanguage();
  return <><LanguageToggle /><LoadingScreen language={language} /><main className="invitation-shell"><Hero language={language} /><WeddingDate language={language} /><Countdown language={language} /><Location language={language} /><Timeline language={language} /><DressCode language={language} />{invitation.rsvp.enabled ? <RSVP language={language} /> : null}<Footer language={language} /></main></>;
}

export default function Home() {
  return <LanguageProvider><InvitationPage /></LanguageProvider>;
}
