import Link from "next/link";
import Image from "next/image";

import contactBackground from '@/public/images/contact-background.png';


export default async function AboutMePage({ params }: { params: { locale: string } }) {
    return (
        <div>
            <Image className="w-full h-screen object-cover" src={contactBackground} alt='woman-painting' />
            <div className="absolute top-0 bg-overlayBlue/90 w-full h-screen flex flex-col justify-end gap-10 p-[135px] text-[45px] leading-[59px] tracking-[.15em]">
                <div className="flex gap-5">
                    <span className="font-bold">TEL</span><span>+381 63 8 444 003</span>
                </div>
                <div className="flex gap-5">
                    <span className="font-bold">E-MAIL</span><Link href="mailto:ivonapleskonja@hotmail.com">ivonapleskonja@hotmail.com</Link>
                </div>
                <Link className="font-bold" href="https://instagram.com" target="_blank">INSTAGRAM</Link>
                <Link className="font-bold" href="https://facebook.com" target="_blank">FACEBOOK</Link>
            </div>
        </div>
    );
}
