"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ITranslations } from "@/types/types";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getExhibitionById } from "./pageContent";
import { ArticleCover } from "@/components/articles/ArticleCover";
import { generateBreadcrumbSchema } from "@/lib/schema-generator";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { getSectionComponentByType } from "@/components/articles/sectionComponentMap";

export default function ExhibitionDetails({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const isMobile = useIsMobile();
  const router = useRouter();
  const exhibition = getExhibitionById(parseInt(slug));

  if (!exhibition) {
    router.push("/coming_soon");
    return null;
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `/${locale}` },
    { name: "Articles", url: `/${locale}/articles` },
    {
      name:
        exhibition?.COVER?.TITLE?.[
          locale.toUpperCase() as keyof ITranslations
        ] ?? slug,
      url: `/${locale}/articles/${slug}`,
    },
  ]);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      exhibition?.COVER?.TITLE?.[locale.toUpperCase() as keyof ITranslations] ??
      slug,
    description:
      exhibition?.COVER?.TEXT?.[locale.toUpperCase() as keyof ITranslations] ??
      "",
    image: exhibition?.COVER?.MEDIA.DESKTOP?.SRC ?? "",
    author: {
      "@type": "Person",
      name: "Ivona Pleskonja",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ivona-pleskonja.com/${locale}/articles/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <div
        className={cn(
          slug === "6" ? "bg-articleBgBlue min-h-[100vh] w-[100vw]" : "",
          "pt-[85px] md:pt-[125px] tracking-[.15em]",
        )}
      >
        <div className={cn("max-md:bg-articleBgBlue")}>
          <SubNavBredCrumbs
            navItems={exhibition.HISTORY ?? []}
            locale={locale}
            page={"exhibition"}
            inverted={slug === "6"}
          />
          <ArticleCover locale={locale} cover={exhibition.COVER} />
        </div>
        {// @ts-ignore
        exhibition.SECTIONS?.[
          (isMobile ? "MOBILE" : "DESKTOP") as keyof typeof exhibition.SECTIONS
        ]?.map((s, key) => {
          const Component = getSectionComponentByType(s.TYPE);
          return (
            // @ts-ignore
            <Component key={`${s.TYPE}_${key}`} locale={locale} section={s} />
          );
        })}
      </div>
    </>
  );
}
