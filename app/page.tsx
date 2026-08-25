"use client";

import { LanguageProvider, LanguageToggle, useLanguage } from "@/components/LanguageProvider";
import { Countdown } from "@/sections/Countdown";
import { DressCode } from "@/sections/DressCode";
import { Footer } from "@/sections/Footer";
import { GuestNote } from "@/sections/GuestNote";
import { Hero } from "@/sections/Hero";
import { LoadingScreen } from "@/sections/LoadingScreen";
import { Location } from "@/sections/Location";
import { WeddingDate } from "@/sections/WeddingDate";

function InvitationPage() {
  const { language } = useLanguage();
  return <><LanguageToggle /><LoadingScreen language={language} /><main className="invitation-shell"><Hero language={language} /><WeddingDate language={language} /><Countdown language={language} /><Location language={language} /><DressCode language={language} /><GuestNote language={language} /><Footer language={language} /></main></>;
}

export default function Home() {
  return <LanguageProvider><InvitationPage /></LanguageProvider>;
}
