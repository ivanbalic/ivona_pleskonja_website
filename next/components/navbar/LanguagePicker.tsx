import React from "react";

import Link from 'next/link';
import { i18n } from '@/i18n.config';
import { usePathname, useSearchParams } from 'next/navigation';

import { cn } from "@/lib/utils";

export function LanguagePicker({ isPrimary }: { isPrimary: boolean }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = pathName.split('/')[1];

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;

    return segments.join('/');
  }

  return (
    <div className="flex justify-center items-center gap-2 lg:gap-5 rounded-md">
      {i18n.locales.map((locale) => (
        <Link
          key={locale}
          href={`${redirectedPathName(locale)}?${searchParams.toString()}`}
        >
          <React.Fragment >
            <div
              className={cn(
                'flex cursor-pointer items-center justify-center font-light text-md lg:text-2xl tracking-[.15em] transition duration-200',
                locale === currentLocale
                  ? 'border-b-2 font-bold'
                  : "",
                  isPrimary ? 'text-primaryBlue border-primaryBlue' : 'text-white border-white',
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
