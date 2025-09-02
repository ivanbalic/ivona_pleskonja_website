import React, { useState } from "react";

import Link from "next/link";
import { i18n } from "@/i18n.config";
import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { LanguagePickerIcon } from "@/components/icons/LanguagePickerIcon";

const LOCALE_LABEL_MAP = {
  en: "English",
  sr: "Serbian",
};

export function LanguagePicker({ color }: { color: string }) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  const currentLocale = pathName.split("/")[1];

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <div className="relative flex items-center justify-center h-full">
      <div
        className="flex items-center justify-center cursor-pointer w-6 md:w-10 max-w-[40px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LanguagePickerIcon color={color} />
      </div>
      {isOpen ? (
        <div className="absolute flex flex-col rounded-md bg-white h-fit px-[10.615px] top-[57.5px] md:top-[70px] lg:top-[82.5px] right-[10px] z-10 shadow-lg">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={`${redirectedPathName(locale)}?${searchParams.toString()}`}
            >
              <div
                className={cn(
                  "p-2.5",
                  "transition duration-200",
                  "flex items-center justify-center",
                  locale !== currentLocale
                    ? "text-inactive font-normal"
                    : "text-articleBgBlue font-bold",
                  "font-helvetica text-[16px] leading-[20px] tracking-[.15em]",
                )}
              >
                {LOCALE_LABEL_MAP[locale]}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
