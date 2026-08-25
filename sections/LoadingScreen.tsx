"use client";

import { useEffect, useRef, useState } from "react";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

/** Matches the CSS exit transition on `.intro`. */
const EXIT_MS = 800;

export function LoadingScreen({ language }: { language: Language }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  // Keeps the overlay in the DOM while it fades out, the way AnimatePresence did.
  useEffect(() => {
    if (visible) return;
    const timer = window.setTimeout(() => setMounted(false), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const play = async () => {
    if (playing || !videoRef.current) return;
    setPlaying(true);
    try {
      videoRef.current.currentTime = 0;
      const videoPlayback = videoRef.current.play();
      void audioRef.current?.play().then(() => setMusicPlaying(true)).catch(() => undefined);
      await videoPlayback;
    }
    catch { finish(); }
  };
  const finish = () => {
    setVisible(false);
    setOpened(true);
    window.dispatchEvent(new Event("invitation:opened"));
    window.setTimeout(() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }), 250);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); setMusicPlaying(true); } catch { setMusicPlaying(false); }
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  return <><audio ref={audioRef} src={invitation.assets.music} preload="none" loop onPlay={() => setMusicPlaying(true)} onPause={() => setMusicPlaying(false)} />{mounted ? (
    <div className={visible ? "intro" : "intro is-leaving"} role="dialog" aria-label={t(invitation.loadingScreen.openLabel, language)} onClick={play}>
      <video ref={videoRef} className="intro-video" poster={invitation.assets.loadingPoster} muted playsInline preload="metadata" onEnded={finish} onError={finish} aria-label={t(invitation.loadingScreen.videoLabel, language)}><source src={invitation.assets.loadingVideo} type="video/mp4" />{t(invitation.loadingScreen.videoLabel, language)}</video>
      {!playing ? <button className="intro-prompt" type="button" onClick={play}><span className="intro-ring">✦</span>{t(invitation.loadingScreen.openText, language)}</button> : null}
    </div>
  ) : null}{opened ? <button className={`music-toggle is-entering ${musicPlaying ? "is-playing" : ""}`} type="button" onClick={toggleMusic} aria-label={t(musicPlaying ? invitation.controls.musicOff : invitation.controls.musicOn, language)} aria-pressed={musicPlaying}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" />{!musicPlaying ? <path className="music-slash" d="M4 4l16 16" /> : null}</svg></button> : null}</>;
}
