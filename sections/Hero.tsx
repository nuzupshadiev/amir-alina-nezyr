"use client";

import { useEffect, useRef } from "react";
import type { InvitationConfig } from "@/types/invitation";

export function Hero({ config }: { config: InvitationConfig }) {
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

  return <section id="hero" className="hero" aria-label="Главная">
    <video ref={videoRef} className="hero-video" src={config.heroVideo} muted playsInline preload="auto" aria-hidden="true" />
    <div className="hero-shade" />
    <div className="hero-content"><p className="hero-kicker">Биздин үйлөнүү тоюбуз</p><h1><span>{config.couple.groom}</span><i>&amp;</i><span>{config.couple.bride}</span></h1><p className="hero-date">{config.dateLabel}</p><span className="scroll-cue" aria-hidden="true">⌄</span></div>
  </section>;
}
