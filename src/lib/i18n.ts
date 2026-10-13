import { SITE_URL } from "@/data/resume-data";

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

/** Public path for a language: English lives at "/", Spanish at "/es". */
export const langPath = (lang: Lang) => (lang === "en" ? "/" : "/es");
export const langUrl = (lang: Lang) => (lang === "en" ? SITE_URL : `${SITE_URL}/es`);
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_AR" };
