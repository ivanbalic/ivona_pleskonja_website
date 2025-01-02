import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import contactBackground from '@/public/images/contact-background.svg';

export default function ContactPage() {
    return (
        <div className="relative w-full h-screen">
            <Image className="w-full min-h-screen object-cover" src={contactBackground} alt='woman-painting'/>
            <div className={cn(
                "w-full h-screen",
                "absolute top-0 flex flex-col justify-end gap-10",
                "p-[20px] min-[420px]:p-[40px] sm:p-[65px] min-[1075px]:p-[100px] xl:p-[135px]",
                "tracking-[.15em] text-[14px] leading-[28px] min-[470px]:text-[20px] min-[470px]:leading-[34px] sm:text-[25px] sm:leading-[39px] min-[1075px]:text-[45px] min-[1075px]:leading-[59px]"
            )}>
                <div className="flex gap-5 flex-col min-[1373px]:flex-row">
                    <span className="font-bold">TEL</span><Link href="tel:+381638444003">+381 63 8 444 003</Link>
                </div>
                <div className="flex gap-5 flex-col min-[1373px]:flex-row">
                    <span className="font-bold">E-MAIL</span><Link
                    href="mailto:ivonapleskonja@hotmail.com">ivonapleskonja@hotmail.com</Link>
                </div>
                <Link className="font-bold"
                      href="https://www.instagram.com/ivonapleskonja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank">INSTAGRAM</Link>
                <Link className="font-bold"
                      href="https://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfrhttps://facebook.comhttps://www.facebook.com/share/1AvuPnJMQ2/?mibextid=wwXIfr"
                      target="_blank">FACEBOOK</Link>
            </div>
        </div>
    );
}
