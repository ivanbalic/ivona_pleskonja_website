import { Metadata } from "next";
import { ReactNode } from "react";
import { getSubPageContentById } from "@/app/[locale]/(marketing)/artworks/pageContent";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const page = getSubPageContentById(params.slug);
  return {
    title: `${page?.TITLE} | Ivona Pleskonja`,
    description: page?.DESCRIPTION[0].EN,
    alternates: {
      canonical: `https://ivonapleskonja.com/${params.locale}/artworks/${params.slug}`,
      languages: {
        en: `https://ivonapleskonja.com/en/artworks/${params.slug}`,
        sr: `https://ivonapleskonja.com/sr/artworks/${params.slug}`,
      },
    },
  };
}

export default function ArtworkDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
