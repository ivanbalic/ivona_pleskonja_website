import React from "react";

import Link from "next/link";
import { Metadata } from "next";

import {
  generatePersonSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema-generator";
import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { BackIcon } from "@/components/icons/BackIcon";
import { MENU_ITEMS_CONFIG } from "@/app/[locale]/(marketing)/about_me/pageContent";
import { CarouselBredCrumbs } from "@/components/subnav-bredcrumbs/CarouselBredCrumbs";

const getTitle = (page: string, locale: string) => {
  const pageContent =
    MENU_ITEMS_CONFIG[page.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];
  const pageTitle =
    pageContent?.TITLE[locale.toUpperCase() as keyof ITranslations];
  return pageTitle?.toUpperCase();
};

const getContent = (page: string, locale: string) => {
  const pageContent =
    MENU_ITEMS_CONFIG[page.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];
  return pageContent?.CONTENT[locale.toUpperCase() as keyof ITranslations];
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  const pageContent =
    MENU_ITEMS_CONFIG[slug.toUpperCase() as keyof typeof MENU_ITEMS_CONFIG];

  const title =
    pageContent?.TITLE?.[locale.toUpperCase() as keyof ITranslations] ||
    "About Ivona Pleskonja";
  const description = `Learn more about Ivona Pleskonja and her ${title}.`;

  return {
    title: `${title} | Ivona Pleskonja`,
    description,
    alternates: {
      canonical: `https://ivona-pleskonja.com/${locale}/about_me/${slug}`,
      languages: {
        en: `https://ivona-pleskonja.com/en/about_me/${slug}`,
        sr: `https://ivona-pleskonja.com/sr/about_me/${slug}`,
      },
    },
  };
}

export default function AboutMeSubPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: `/${locale}` },
              { name: "About Me", url: `/${locale}/about_me` },
              { name: slug, url: `/${locale}/about_me/${slug}` },
            ]),
          ),
        }}
      />
      <Container
        className={cn(
          "text-black",
          "px-4 lg:px-[135px]",
          "pt-[100px] md:pt-[125px]",
        )}
      >
        <CarouselBredCrumbs
          navItems={Object.values(MENU_ITEMS_CONFIG)}
          locale={locale}
          page={slug}
        />
        <div className="flex gap-8 items-center my-5 md:my-10 font-bold text-[36px] leading-[39px] tracking-[.15em]">
          <Link
            href={`/${locale}/about_me`}
            className="hidden md:flex items-center cursor-pointer w-10"
          >
            <BackIcon />
          </Link>
          <span className="text-primaryBlue font-roboto-serif">
            {getTitle(slug, locale)}
          </span>
        </div>
        <div className="flex flex-col mb-20 text-base md:text-[24px] md:leading-[40px] font-helvetica tracking-[.05em]">
          {getContent(slug, locale).map((item, index) => (
            <div key={index}>
              <span className="text-primaryBlue mr-1">{item.YEAR}</span>
              {item.AWARD}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
