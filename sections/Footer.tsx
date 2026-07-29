import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";

export function Footer({ names }: { names: string }) {
  return <footer className="footer"><AnimatedContainer><p>С любовью и благодарностью</p><h2>{names}</h2><p className="footer-note">До встречи на нашем празднике!</p></AnimatedContainer><Image src="/images/floral-footer.png" width={671} height={372} alt="" /></footer>;
}
