import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { invitation, t } from "@/data/invitation";
import "./globals.css";
import { RevealScript } from "@/components/RevealScript";

const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600"] });
const sans = Montserrat({ variable: "--font-sans", subsets: ["cyrillic", "latin"], weight: ["300", "400", "500", "600"] });

const language = invitation.defaultLanguage ?? "ru";
const names = invitation.groomName ? `${t(invitation.groomName, language)} & ${t(invitation.brideName, language)}` : t(invitation.brideName, language);
export const metadata: Metadata = { title: `${names} — ${t(invitation.metadata.titleSuffix, language)}`, description: t(invitation.metadata.description, language) };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#f8f3e9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning><head><RevealScript /></head><body suppressHydrationWarning>{children}</body></html>;
}
