export type Language = "ru" | "ky"; export type InvitationType = "wedding" | "kyz_uzatuu";
export interface LocalizedText { ru: string; ky: string }
export interface TimelineItem { time: string; title: LocalizedText; description: LocalizedText; icon: "guests" | "blessing" | "dinner" | "dance" }
export interface InvitationData {
  slug: string; type: InvitationType; defaultLanguage?: Language; brideName: LocalizedText; groomName?: LocalizedText; weddingDate: string; startTime: string; dateLabel: LocalizedText;
  loadingScreen: { openText: LocalizedText; openLabel: LocalizedText; videoLabel: LocalizedText };
  hero: { announcement: LocalizedText; sectionLabel: LocalizedText };
  weddingDetails: { heading: LocalizedText; customMessage: LocalizedText; eyebrow: LocalizedText; month: LocalizedText; timeLabel: LocalizedText; weekdays: Record<Language, string[]>; imageAlt: LocalizedText };
  countdown: { heading: LocalizedText; labels: { days: LocalizedText; hours: LocalizedText; minutes: LocalizedText; seconds: LocalizedText } };
  venue: { eyebrow: LocalizedText; heading: LocalizedText; name: LocalizedText; address: LocalizedText; mapUrl: string; mapButtonText: LocalizedText; imageAlt: LocalizedText };
  timeline: { eyebrow: LocalizedText; heading: LocalizedText; items: TimelineItem[] };
  dressCode: { title: LocalizedText; description: LocalizedText; paletteLabel: LocalizedText; imageAlt: LocalizedText; colors: string[] };
  rsvp: { enabled: boolean; endpoint?: string; minGuests: number; maxGuests: number; eyebrow: LocalizedText; heading: LocalizedText; deadline: LocalizedText; labels: { guestName: LocalizedText; guestNamePlaceholder: LocalizedText; attendance: LocalizedText; guestCount: LocalizedText; guestLimit: LocalizedText; submit: LocalizedText; submitting: LocalizedText; success: LocalizedText; successDetail: LocalizedText; error: LocalizedText; decreaseGuests: LocalizedText; increaseGuests: LocalizedText }; attendanceOptions: { yes: LocalizedText; no: LocalizedText } };
  footer: { message: LocalizedText; hosts: LocalizedText; note: LocalizedText };
  controls: { language: LocalizedText; musicOn: LocalizedText; musicOff: LocalizedText };
  metadata: { titleSuffix: LocalizedText; description: LocalizedText };
  assets: { loadingVideo: string; loadingPoster: string; music: string; heroVideo: string };
}
