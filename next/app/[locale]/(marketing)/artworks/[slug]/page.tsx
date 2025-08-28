"use client";
import { Metadata } from "next";
import React, { useEffect, useMemo, useState } from "react";

import { useSearchParams, useRouter } from "next/navigation";

import {
  generateArtworkSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema-generator";
import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import { Container } from "@/components/container";
import { ArtGallery } from "@/components/art-gallery/ArtGallery";
import { ArtworkDetails } from "@/components/artworks/ArtworkDetails";
import { SelectedImageProvider } from "@/context/SelectedImageContext";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { getSubPageContentById } from "@/app/[locale]/(marketing)/artworks/pageContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const page = getSubPageContentById(params.slug);
  return {
    title: `${page?.TITLE} | Ivona Pleskonja`,
    description: page?.DESCRIPTION[0].ENG,
    alternates: {
      canonical: `https://ivonapleskonja.com/${params.locale}/artworks/${params.slug}`,
      languages: {
        en: `https://ivonapleskonja.com/en/artworks/${params.slug}`,
        sr: `https://ivonapleskonja.com/sr/artworks/${params.slug}`,
      },
    },
  };
}

export default function ArtworkDetailsPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const searchParams = useSearchParams();

  const page = getSubPageContentById(slug);

  const galleryId = useMemo(() => searchParams.get("gallery"), [searchParams]);

  const showGallery = Boolean(galleryId);

  const gallery = useMemo(
    () => page?.GALLERY.find((g) => g.ID === parseInt(galleryId || "")),
    [galleryId, page?.GALLERY],
  );

  if (!page) {
    router.push("/coming_soon");
    return null;
  }

  return (
    <SelectedImageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArtworkSchema(page)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: `/${locale}` },
              { name: "Artworks", url: `/${locale}/artworks` },
              { name: page?.TITLE.ENG, url: `/${locale}/artworks/${slug}` },
            ]),
          ),
        }}
      />
      <Container
        className={cn(
          "pt-[85px] md:pt-[125px] px-4 md:px-[80px] text-black min-h-screen",
          showGallery && "bg-backgroundSecondary max-w-full",
        )}
      >
        <SubNavBredCrumbs
          compact={showGallery && isMobile}
          navItems={page.HISTORY ?? []}
          locale={locale}
          page={slug}
        />
        {showGallery ? (
          <ArtGallery
            locale={locale}
            gallery={gallery?.CONTENT}
            exhibitionId={page.EXHIBITION_ID}
            galleryTitle={
              gallery?.TITLE?.[locale.toUpperCase() as keyof ITranslations] ??
              null
            }
          />
        ) : (
          <ArtworkDetails data={page} locale={locale} />
        )}
      </Container>
    </SelectedImageProvider>
  );
}
