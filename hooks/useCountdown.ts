"use client";

import { useEffect, useState } from "react";

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };
const empty: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function calculate(target: string): TimeLeft {
  const difference = Math.max(0, new Date(target).getTime() - Date.now());
  return { days: Math.floor(difference / 86_400_000), hours: Math.floor((difference / 3_600_000) % 24), minutes: Math.floor((difference / 60_000) % 60), seconds: Math.floor((difference / 1_000) % 60) };
}

export function useCountdown(target: string) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(empty);
  useEffect(() => {
    const update = () => setTimeLeft(calculate(target));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);
  return timeLeft;
}
