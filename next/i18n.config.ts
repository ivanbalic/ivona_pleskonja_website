export const i18n = {
  defaultLocale: 'ser',
  locales: ['ser', 'eng']
} as const

export type Locale = (typeof i18n)['locales'][number]
