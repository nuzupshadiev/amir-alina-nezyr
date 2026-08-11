import type { Language } from "@/types/invitation";
import { resolveRsvpEndpoint } from "@/lib/rsvp-endpoint";

export interface RSVPPayload {
  guestName: string;
  attendance: "yes" | "no";
  guestCount: number;
  language: Language;
  invitationSlug: string;
  submittedAt: string;
}

export async function submitRSVP(payload: RSVPPayload, endpoint?: string) {
  const target = resolveRsvpEndpoint(endpoint, payload.language);
  const response = await fetch(target, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("RSVP submission failed");
}
