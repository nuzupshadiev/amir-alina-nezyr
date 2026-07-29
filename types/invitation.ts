export type TimelineItem = {
  time: string;
  title: string;
  description: string;
  icon: "guests" | "blessing" | "dinner" | "dance";
};

export type InvitationConfig = {
  couple: { bride: string; groom: string };
  date: string;
  dateLabel: string;
  timeLabel: string;
  venue: { name: string; address: string; mapUrl: string };
  intro: { video: string; poster: string; music: string; prompt: string };
  heroVideo: string;
  greeting: string;
  timeline: TimelineItem[];
  dressCode: { text: string; colors: string[] };
  rsvpDeadline: string;
  rsvpEndpoint?: string;
};
