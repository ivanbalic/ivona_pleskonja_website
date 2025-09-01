"use client";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { generateBreadcrumbSchema } from "@/lib/schema-generator";
import { PAGE_CONTENT } from "@/app/[locale]/(marketing)/artworks/pageContent";

const getTitle = (locale: string) => {
  return PAGE_CONTENT?.TITLE[locale.toUpperCase() as keyof ITranslations];
};

export default function ArtworksPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: `/${locale}` },
              { name: "Artworks", url: `/${locale}/artworks` },
            ]),
          ),
        }}
      />
      <div className="pt-[85px] md:pt-[125px] pb-10 bg-overlayBlue h-screen overflow-scroll">
        <Container className="px-4 md:px-[135px]">
          <div className="my-10 font-bold text-[36px] leading-[39px] tracking-[.15em] font-roboto-serif">
            <span>{getTitle(locale)}</span>
          </div>
          <div className="flex flex-col gap-6 text-[16px] md:text-[24px] leading-[16px] md:leading-[24px] font-mono tracking-[.15em] uppercase">
            {PAGE_CONTENT.CONTENT.map((item) => {
              const text =
                item.TITLE[locale.toUpperCase() as keyof ITranslations].TEXT;
              const year =
                item.TITLE[locale.toUpperCase() as keyof ITranslations].YEAR;

              return (
                <Link
                  key={item.ID}
                  href={`/${locale}/${item.LINK ?? `artworks/${item.ID}`}`}
                  className={cn(
                    "flex gap-4",
                    "hover:font-bold",
                    item.DISABLED
                      ? "pointer-events-none opacity-60"
                      : "pointer-events-auto opacity-100",
                    "relative cursor-pointer w-fit bg-origin-border bg-contain bg-no-repeat bg-clip-border bg-top-left",
                  )}
                >
                  {year && <span>{year}</span>}
                  <div className="flex flex-col gap-1">
                    {text.split("/").map((t, i, array) => (
                      <span
                        key={t}
                      >{`${t}${i < array.length - 1 ? "/" : ""}`}</span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
