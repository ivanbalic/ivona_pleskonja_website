import { Metadata } from "next";
import { ReactNode } from "react";
import { ITranslations } from "@/types/types";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const titles = {
    ENG: "Coming Soon | Ivona Pleskonja",
    SER: "Izrada u toku | Ivona Pleskonja",
  };
  const descriptions = {
    ENG: "This page is under construction. Please check back soon for new content from Ivona Pleskonja.",
    SER: "Ova stranica je u izradi. Uskoro očekujte novi sadržaj od Ivone Pleskonje.",
  };

  return {
    title: titles[locale as keyof ITranslations] || titles.ENG,
    description:
      descriptions[locale as keyof ITranslations] || descriptions.ENG,
    alternates: {
      canonical: `https://ivona-pleskonja.com/${locale}/coming_soon`,
      languages: {
        en: "https://ivona-pleskonja.com/en/coming_soon",
        sr: "https://ivona-pleskonja.com/sr/coming_soon",
      },
    },
  };
}

export default function ComingSoonLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
