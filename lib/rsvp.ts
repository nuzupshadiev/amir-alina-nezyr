import type { Language } from "@/types/invitation";

export interface RSVPPayload {
  guestName: string;
  attendance: "yes" | "no";
  guestCount: number;
  language: Language;
  invitationSlug: string;
  submittedAt: string;
}

export async function submitRSVP(payload: RSVPPayload, endpoint?: string) {
  if (!endpoint) return { ok: true, preview: true } as const;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("RSVP submission failed");
  return { ok: true, preview: false } as const;
}
