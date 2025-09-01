"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { generateBreadcrumbSchema } from "@/lib/schema-generator";
import comingSoonSignature from "@/public/assets/coming-soon/signature_coming-soon.png";
import comingSoonBackground from "@/public/assets/coming-soon/coming-soon-background.webp";

export default function ComingSoonPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const comingSoonText =
    locale === "ser" ? "Izrada u toku..." : "Work in progress...";

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: `/${locale}` },
    { name: comingSoonText, url: `/${locale}/coming_soon` },
  ]);
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: comingSoonText,
    url: `https://ivona-pleskonja.com/${locale}/coming_soon`,
    description: comingSoonText,
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
          __html: JSON.stringify(webPageSchema),
        }}
      />
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
    </>
  );
}
