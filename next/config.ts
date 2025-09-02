export const defaultLocale = "sr" as const;
export const locales = ["sr", "en"] as const;

export type Locale = (typeof locales)[number];

export const pathnames = {};
export const localePrefix = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_URL
  ? `https://${process.env.WEBSITE_URL}`
  : `http://localhost:${port}`;
