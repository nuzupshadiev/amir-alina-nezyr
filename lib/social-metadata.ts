import type { Metadata } from "next";

type SocialMetadataInput = {
  title: string;
  description: string;
  language?: string;
  siteName?: string;
};

function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!configuredUrl) return "http://localhost:3000";
  return configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
}

export function createSocialMetadata({
  title,
  description,
  language = "ru",
  siteName = title,
}: SocialMetadataInput): Metadata {
  const locale = language === "ky" ? "ky_KG" : language === "ru" ? "ru_RU" : language;
  const alternateLocale =
    language === "ky" ? ["ru_RU"] : language === "ru" ? ["ky_KG"] : undefined;

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      url: "/",
      siteName,
      locale,
      alternateLocale,
      title,
      description,
      images: [
        {
          url: "/og-preview.jpg",
          width: 1200,
          height: 1600,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-preview.jpg"],
    },
  };
}

