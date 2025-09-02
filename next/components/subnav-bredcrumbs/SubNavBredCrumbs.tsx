"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { ISubNavItem, ITranslations } from "@/types/types";

const ADDITIONAL_BREADCRUMBS_MAP_MOBILE = Object.freeze({
  ["11_snaga"]: {
    1: {
      ID: "paintings",
      TITLE: {
        SR: "11 Snaga Slike",
        EN: "11 Snaga Paintings",
      },
      LINK: "artworks/11_snaga",
    },
    2: {
      ID: "Lithographs",
      TITLE: {
        SR: "11 Snaga Litografije",
        EN: "11 Snaga Lithographs",
      },
      LINK: "artworks/11_snaga",
    },
  },
  children_of_the_sun: {
    1: {
      ID: "paintings",
      TITLE: {
        SR: "Deca Sunca Slike",
        EN: "Children of the Sun Paintings",
      },
      LINK: "artworks/children_of_the_sun",
    },
    2: {
      ID: "Lithographs",
      TITLE: {
        SR: "Deca Sunca Litografije",
        EN: "Children of the Sun Lithographs",
      },
      LINK: "artworks/children_of_the_sun",
    },
  },
});
const ADDITIONAL_BREADCRUMBS_MAP_DESKTOP = Object.freeze({
  ["11_snaga"]: {
    1: {
      ID: "paintings",
      TITLE: {
        SR: "Slike",
        EN: "Paintings",
      },
      LINK: "artworks/children_of_the_sun?gallery=1",
    },
    2: {
      ID: "Lithographs",
      TITLE: {
        SR: "Litografije",
        EN: "Lithographs",
      },
      LINK: "artworks/children_of_the_sun?gallery=2",
    },
  },
  children_of_the_sun: {
    1: {
      ID: "paintings",
      TITLE: {
        SR: "Slike",
        EN: "Paintings",
      },
      LINK: "artworks/children_of_the_sun?gallery=1",
    },
    2: {
      ID: "Lithographs",
      TITLE: {
        SR: "Litografije",
        EN: "Lithographs",
      },
      LINK: "artworks/children_of_the_sun?gallery=2",
    },
  },
});

export function SubNavBredCrumbs({
  navItems,
  locale,
  page,
  compact = false,
  inverted = false,
}: {
  inverted?: boolean;
  navItems: ISubNavItem[];
  locale: string;
  page: string;
  compact?: boolean;
}) {
  const [key, setKey] = useState<string>();
  const searchParams = useSearchParams();

  const isMobile = useIsMobile();
  const additionalBreadcrumbsMap = isMobile
    ? ADDITIONAL_BREADCRUMBS_MAP_MOBILE
    : ADDITIONAL_BREADCRUMBS_MAP_DESKTOP;

  const newItems = [...navItems];
  const gallery = searchParams.get("gallery");
  const pageMap =
    additionalBreadcrumbsMap[page as keyof typeof additionalBreadcrumbsMap];
  const additionalBreadcrumb =
    pageMap?.[(gallery ?? 0) as keyof typeof pageMap];
  if (additionalBreadcrumb) newItems.push(additionalBreadcrumb);

  const breadcrumbs = !compact
    ? newItems
    : newItems.slice(newItems.length - 1, newItems.length);

  useEffect(() => {
    setKey(breadcrumbs.map((b) => b.ID).join("-"));
  }, [breadcrumbs]);

  return (
    <div
      key={key}
      className={cn(
        "flex pt-5 flex-wrap",
        compact ? "font-normal" : "font-light",
        page === "exhibition" && isMobile ? "mx-4" : "",
        "font-helvetica text-black text-[16px] leading-[20px] tracking-[.15em]",
        compact || (page === "exhibition" && isMobile)
          ? "justify-start"
          : "justify-center",
      )}
    >
      {compact && (
        <Link href={`/${locale}/${breadcrumbs?.[0]?.LINK}`}>
          <ArrowLeft
            viewBox="-8 -3 24 24"
            color="#000000"
            width="24px"
            height="24px"
          />
        </Link>
      )}
      {breadcrumbs.map((content, index) => (
        <div
          key={content.ID}
          className={cn(
            "px-[5px] max-md:rounded-[30px] cursor-pointer",
            compact || page === "exhibition" ? "text-wrap" : "text-nowrap",
            index === breadcrumbs.length - 1 && !compact ? "font-bold" : "",
            page === "exhibition"
              ? "max-md:text-white text-black"
              : "text-black",
            inverted ? "text-white" : "text-black",
            index === breadcrumbs.length - 1 &&
              !compact &&
              page !== "exhibition"
              ? "max-md:basis-full"
              : "",
          )}
        >
          <Link
            className={cn(
              compact ? "flex-col" : "items-center",
              "flex gap-2 justify-center ",
            )}
            href={`/${locale}/${content.LINK}`}
          >
            {!compact ? (
              <span className="hover:underline">
                {content.TITLE[locale.toUpperCase() as keyof ITranslations]}
              </span>
            ) : (
              content.TITLE[locale.toUpperCase() as keyof ITranslations]
                .split("/")
                .map((t, i, array) => <span key={t}>{`${t}`}</span>)
            )}
            <span>{index < breadcrumbs.length - 1 ? " / " : ""}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
