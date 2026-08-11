"use client";

import { useEffect, useRef } from "react";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function Hero({ language }: { language: Language }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playOnce = () => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    };
    window.addEventListener("invitation:opened", playOnce, { once: true });
    return () => window.removeEventListener("invitation:opened", playOnce);
  }, []);

  const groomName = invitation.groomName ? t(invitation.groomName, language) : null;
  return <section id="hero" className="hero" aria-label={t(invitation.hero.sectionLabel, language)}>
    <video ref={videoRef} className="hero-video" src={invitation.assets.heroVideo} muted playsInline preload="auto" aria-hidden="true" />
    <div className="hero-shade" />
    <div className="hero-content"><p className="hero-kicker">{t(invitation.hero.announcement, language)}</p><h1>{groomName ? <><span>{groomName}</span><i>&amp;</i></> : null}<span>{t(invitation.brideName, language)}</span></h1><p className="hero-date">{t(invitation.dateLabel, language)}</p><span className="scroll-cue" aria-hidden="true">⌄</span></div>
  </section>;
}
