import { Metadata } from "next";
import { getExhibitionById } from "./pageContent";
import { ITranslations } from "@/types/types"; // Adjust import path as needed

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  const exhibition = getExhibitionById(parseInt(slug));

  const title =
    exhibition?.COVER?.TITLE?.[locale.toUpperCase() as keyof ITranslations] ||
    "Article | Ivona Pleskonja";
  const description =
    exhibition?.COVER?.TEXT?.[locale.toUpperCase() as keyof ITranslations] ||
    "Read this article by Ivona Pleskonja.";

  return {
    title: `${title} | Ivona Pleskonja`,
    description,
    alternates: {
      canonical: `https://ivona-pleskonja.com/${locale}/articles/${slug}`,
      languages: {
        en: `https://ivona-pleskonja.com/en/articles/${slug}`,
        sr: `https://ivona-pleskonja.com/sr/articles/${slug}`,
      },
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
