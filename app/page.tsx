import { invitation } from "@/data/invitation";
import { Countdown } from "@/sections/Countdown";
import { DressCode } from "@/sections/DressCode";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { LoadingScreen } from "@/sections/LoadingScreen";
import { Location } from "@/sections/Location";
import { RSVP } from "@/sections/RSVP";
import { Timeline } from "@/sections/Timeline";
import { WeddingDate } from "@/sections/WeddingDate";

export default function Home() {
  return <><LoadingScreen videoSrc={invitation.intro.video} posterSrc={invitation.intro.poster} musicSrc={invitation.intro.music} prompt={invitation.intro.prompt} /><main className="invitation-shell"><Hero config={invitation} /><WeddingDate config={invitation} /><Countdown target={invitation.date} /><Location venue={invitation.venue} /><Timeline items={invitation.timeline} /><DressCode dressCode={invitation.dressCode} /><RSVP deadline={invitation.rsvpDeadline} endpoint={invitation.rsvpEndpoint} /><Footer names={`${invitation.couple.groom} & ${invitation.couple.bride}`} /></main></>;
}
