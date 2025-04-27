import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import contactBackground from '@/public/images/contact/contact-background.svg';

export default function ContactPage() {
    return (
        <div className="relative w-full h-screen">
            <Image className="w-full min-h-screen object-cover max-md:object-[66%]" src={contactBackground} alt='woman-painting' priority />
            <div className={cn(
                "w-full h-screen",
                "absolute top-0 flex flex-col justify-end gap-4 lg:gap-[22px] xl:gap-[45px]",
                "p-[16px] lg:p-[75px] xl:p-[135px] tracking-[.15em] text-[16px] leading-[16px] lg:text-[22px] lg:leading-[22px] xl:text-[45px] xl:leading-[45px] font-roboto-serif"
            )}>
                <div className="flex gap-1">
                    <span className="font-bold">TEL</span><Link className="tracking-[.08em]" href="tel:+381638444003">+381 63 8 444 003</Link>
                </div>
                <div className="flex gap-1">
                    <span className="font-bold">E-MAIL</span><Link className="tracking-[.08em] underline" href="mailto:ivonapleskonja@hotmail.com">ivonapleskonja@hotmail.com</Link>
                </div>
                <Link className="font-bold"
                      href="https://www.instagram.com/ivonapleskonja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank">INSTAGRAM</Link>
                <Link className="font-bold mb-[100px]"
                      href="https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfrhttps://facebook.comhttps://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr"
                      target="_blank">FACEBOOK</Link>
            </div>
        </div>
    );
}
