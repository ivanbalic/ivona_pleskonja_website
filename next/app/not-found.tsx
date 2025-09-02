"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import comingSoonBackground from "@/public/assets/coming-soon/coming-soon-background.webp";

const translations = {
  en: {
    title: "404",
    heading: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    returnHome: "Return Home",
  },
  sr: {
    title: "404",
    heading: "Stranica nije pronadjena.",
    description: "Stranica koju tražite ne postoji ili je premeštena.",
    returnHome: "Povratak na početnu",
  },
};

export default function NotFound() {
  const pathName = usePathname();
  const locale = pathName?.split("/")[1] as keyof typeof translations;
  const t = translations[locale];

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
          "p-[16px] lg:p-[75px] xl:p-[135px] tracking-[.15em] text-[22px] leading-[22px] lg:text-[30px] lg:leading-[30px]",
        )}
      >
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <h2 className="text-2xl mb-8">{t.heading}</h2>
        <p className="mb-8 text-center">{t.description}</p>
        <Link
          href={`/${locale}`}
          className="text-overlayBlue hover:underline transition-colors"
        >
          {t.returnHome}
        </Link>
      </div>
    </div>
  );
}
