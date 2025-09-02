import React, { useCallback } from "react";

import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { generatePersonSchema } from "@/lib/schema-generator";
import aboutMeCover from "@/public/assets/about-me/about-me-cover.webp";
import { getAboutMetadata } from "@/app/[locale]/(marketing)/metadata.config";
import { PAGE_CONTENT } from "@/app/[locale]/(marketing)/about_me/pageContent";
import { MENU_ITEMS_CONFIG } from "@/app/[locale]/(marketing)/about_me/pageContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getAboutMetadata(params);
}

export default function AboutMePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const getTextBySectionName = useCallback(
    function (sectionName: string) {
      return PAGE_CONTENT[
        sectionName.toUpperCase() as keyof typeof PAGE_CONTENT
      ][locale.toUpperCase() as keyof ITranslations];
    },
    [locale],
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <Container>
        <div className="w-full">
          <Image
            src={aboutMeCover}
            alt="about_me_cover"
            className="w-full object-cover max-md:object-[67%] max-md:h-[615px]"
            priority
            placeholder="blur"
          />
        </div>
        <div className="px-4 md:px-10">
          <div className="flex justify-between py-5 md:py-10 font-bold text-[36px] leading-[36px] md:leading-[39px] tracking-[.15em]">
            <span className="text-primaryBlue font-roboto-serif">
              {getTextBySectionName("title")}
            </span>
          </div>
          <div className="text-base md:text-[24px] md:leading-[30px] tracking-[.05em] text-black font-helvetica">
            <span className={locale === "sr" ? "block" : "inline"}>
              <span className="font-bold">{getTextBySectionName("name")}</span>
              {getTextBySectionName("born")}
            </span>
            <span>{getTextBySectionName("graduated")}</span>
            <span className="font-bold text-primaryBlue">
              {getTextBySectionName("faculty")}
            </span>
            {getTextBySectionName("graduated_at")}
            <span className="font-bold text-primaryBlue">
              {getTextBySectionName("department")}
            </span>

            <span className="block my-4 md:my-6">
              <span>{getTextBySectionName("ma_degree")}</span>
              {getTextBySectionName("ma_degree_details")}
            </span>

            <span className="block">
              <span className="font-bold">{getTextBySectionName("phd")}</span>
              {getTextBySectionName("phd_details")}
            </span>
            <span className="blcok">
              {getTextBySectionName("scholarship_start")}
              <span className="font-bold">
                {getTextBySectionName("scholarship_holder")}
              </span>
              {getTextBySectionName("scholarship_and_associations_details")}
              <span className="font-bold">
                {getTextBySectionName("scholarship_end")}
              </span>
            </span>
            <span className="font-bold text-primaryBlue block">
              {getTextBySectionName("ulus_details")}
            </span>
          </div>
        </div>
        <div className="flex flex-col max-md:gap-2.5 max-md:mx-4 md:flex-row md:border-y md:border-l border-borderSecondary text-overlayBlue h-fit md:h-[150px] my-5 md:my-7 overflow-hidden">
          {Object.values(MENU_ITEMS_CONFIG).map((item) => (
            <Link
              key={item.ID}
              href={`/${locale}/${item.LINK}`}
              replace
              className="border-b md:border-r md:border-b-0 flex-1 flex justify-center items-center h-[84px] md:h-[150px]"
            >
              <Image
                className="w-auto md:w-[90%] object-cover h-[84px] md:h-auto"
                src={item.BUTTON[locale.toUpperCase() as keyof ITranslations]}
                alt={item.ALT}
                placeholder="blur"
                priority
              />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
