"use client";
import Image from "next/image";
import { Metadata } from "next";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ITranslations } from "@/types/types";
import comingSoonSignature from "@/public/assets/coming-soon/signature_coming-soon.png";
import comingSoonBackground from "@/public/assets/coming-soon/coming-soon-background.webp";

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

export default function ComingSoonPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const comingSoonText =
    locale === "ser" ? "Izrada u toku..." : "Work in progress...";

  return (
    <div className="relative w-full h-dvh">
      <Image
        className="w-full min-h-dvh object-cover max-md:object-[66%]"
        src={comingSoonBackground}
        alt="painting-brush"
        priority
      />
      <div
        className={cn(
          "w-full h-dvh",
          "absolute top-0 flex flex-col justify-center items-center",
          "p-[16px] lg:p-[75px] xl:p-[135px] tracking-[.15em] text-[22px] leading-[22px] lg:text-[30px] lg:leading-[30px] font-roboto-serif",
        )}
      >
        <div className="flex justify-center items-center flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              className="w-[45%]"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <Image
                className="w-full object-cover"
                src={comingSoonSignature}
                alt="painting-brush"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <span className="font-bold">{comingSoonText}</span>
        </div>
      </div>
    </div>
  );
}
