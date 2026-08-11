"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function LoadingScreen({ language }: { language: Language }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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

  return <><audio ref={audioRef} src={invitation.assets.music} preload="auto" loop onPlay={() => setMusicPlaying(true)} onPause={() => setMusicPlaying(false)} /><AnimatePresence>{visible ? (
    <motion.div className="intro" role="dialog" aria-label={t(invitation.loadingScreen.openLabel, language)} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} onClick={play}>
      <video ref={videoRef} className="intro-video" src={invitation.assets.loadingVideo} poster={invitation.assets.loadingPoster} muted playsInline preload="auto" onEnded={finish} aria-label={t(invitation.loadingScreen.videoLabel, language)} />
      {!playing ? <motion.button className="intro-prompt" type="button" onClick={play} animate={{ opacity: [0.65, 1, 0.65] }} transition={{ repeat: Infinity, duration: 2 }}><span className="intro-ring">✦</span>{t(invitation.loadingScreen.openText, language)}</motion.button> : null}
    </motion.div>
  ) : null}</AnimatePresence>{opened ? <motion.button className={`music-toggle ${musicPlaying ? "is-playing" : ""}`} type="button" onClick={toggleMusic} initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} aria-label={t(musicPlaying ? invitation.controls.musicOff : invitation.controls.musicOn, language)} aria-pressed={musicPlaying}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" />{!musicPlaying ? <path className="music-slash" d="M4 4l16 16" /> : null}</svg></motion.button> : null}</>;
}
