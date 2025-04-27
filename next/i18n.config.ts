export const i18n = {
  defaultLocale: 'ser',
  locales: ['eng', 'ser']
} as const

export type Locale = (typeof i18n)['locales'][number]
