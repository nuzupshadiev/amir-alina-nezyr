import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["cyrillic", "latin"], weight: ["400", "500", "600"] });
const sans = Montserrat({ variable: "--font-sans", subsets: ["cyrillic", "latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = { title: "Азамат & Айдана — приглашение на свадьбу", description: "Приглашение на свадебный той Азамата и Айданы" };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#f8f3e9" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className={`${serif.variable} ${sans.variable}`}><body suppressHydrationWarning>{children}</body></html>;
}
