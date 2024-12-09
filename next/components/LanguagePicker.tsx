import React from "react";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n.config'

import { cn } from "@/lib/utils";

export function LanguagePicker() {
  const pathName = usePathname();
  const currentLocale = pathName.split('/')[1]

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex justify-center items-center gap-5 rounded-md">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={redirectedPathName(locale)}
        >
          <React.Fragment >
            <div
              className={cn(
                "flex cursor-pointer items-center justify-center font-light pb-1 text-2xl tracking-[.15em] text-white transition duration-200",
                locale === currentLocale
                  ? "border-b-2 font-bold border-white"
                  : ""
              )}
            >
              {locale.toUpperCase()}
            </div>
          </React.Fragment>
        </Link>
      ))}
    </div>
  );
}
