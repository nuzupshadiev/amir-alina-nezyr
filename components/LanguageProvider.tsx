"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { invitation, t } from "@/data/invitation";
import type { Language, LocalizedText } from "@/types/invitation";

const STORAGE_KEY = "invitation-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (value: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(invitation.defaultLanguage ?? "ru");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ru" || stored === "ky") setLanguageState(stored);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  return <LanguageContext.Provider value={{ language, setLanguage, translate: (value) => t(value, language) }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageToggle() {
  const { language, setLanguage, translate } = useLanguage();
  return <div className="language-toggle" role="group" aria-label={translate(invitation.controls.language)}>
    {(["ru", "ky"] as const).map((option) => <button key={option} type="button" className={language === option ? "is-active" : ""} aria-pressed={language === option} onClick={() => setLanguage(option)}>{option === "ru" ? "RU" : "KG"}</button>)}
  </div>;
}
