type RsvpLanguage = "ru" | "ky";

const configurationMessages: Record<RsvpLanguage, string> = {
  ru: "Форма RSVP не настроена: отсутствует абсолютный адрес отправки.",
  ky: "RSVP формасы жөндөлгөн эмес: жөнөтүү үчүн абсолюттук дарек жок.",
};

export class RsvpConfigurationError extends Error {
  constructor(language: RsvpLanguage) {
    super(configurationMessages[language]);
    this.name = "RsvpConfigurationError";
  }
}

export function resolveRsvpEndpoint(endpoint: string | undefined, language: RsvpLanguage): string {
  const configuredEndpoint = endpoint?.trim();

  if (configuredEndpoint) {
    try {
      const url = new URL(configuredEndpoint);
      if (url.protocol === "https:" || url.protocol === "http:") return url.toString();
    } catch {
      // The localized configuration error below is clearer than a URL parser error.
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn("[RSVP] Configure an absolute rsvp.endpoint or rsvp.submitUrl before submitting.");
  }

  throw new RsvpConfigurationError(language);
}

export function getRsvpErrorMessage(error: unknown, fallback: string): string {
  return error instanceof RsvpConfigurationError ? error.message : fallback;
}
