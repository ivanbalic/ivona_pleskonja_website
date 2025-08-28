import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import { getContactMetadata } from "../metadata.config";
import { generatePersonSchema } from "@/lib/schema-generator";
import contactBackground from "@/public/assets/contact/contact-background.svg";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getContactMetadata(params);
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <div className="relative w-full h-dvh">
        <Image
          className="w-full min-h-dvh object-cover max-md:object-[66%]"
          src={contactBackground}
          alt="woman-painting"
          priority
        />
        <div
          className={cn(
            "w-full h-dvh",
            "absolute top-0 flex flex-col justify-end gap-4 lg:gap-[22px] xl:gap-[45px]",
            "p-[16px] lg:p-[75px] xl:p-[135px] tracking-[.15em] text-[16px] leading-[16px] lg:text-[22px] lg:leading-[22px] xl:text-[45px] xl:leading-[45px] font-roboto-serif",
          )}
        >
          <div className="flex gap-1">
            <span className="font-bold">TEL</span>
            <Link className="tracking-[.08em]" href="tel:+381638444003">
              +381 63 8 444 003
            </Link>
          </div>
          <div className="flex gap-1">
            <span className="font-bold">E-MAIL</span>
            <Link
              className="tracking-[.08em] underline"
              href="mailto:ivonapleskonja@hotmail.com"
            >
              ivonapleskonja@hotmail.com
            </Link>
          </div>
          <Link
            className="font-bold"
            href="https://www.instagram.com/ivonapleskonjafineart?igsh=eTQ5dzhnbnVzNGV1"
            target="_blank"
          >
            INSTAGRAM
          </Link>
          <Link
            className="font-bold"
            href="https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr"
            target="_blank"
          >
            FACEBOOK
          </Link>
          <Link
            className="font-bold"
            href="https://www.tiktok.com/@ivonapleskonja?_t=ZM-8ySKKdS4hRG&_r=1"
            target="_blank"
          >
            TIK TOK
          </Link>
          <Link
            className="font-bold"
            href="https://www.youtube.com/@ivonapleskonja"
            target="_blank"
          >
            YOUTUBE
          </Link>
        </div>
      </div>
    </>
  );
}
