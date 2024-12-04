"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import coverSlide1 from '../public/images/cover-slide-1.png';
import coverSlide2 from '../public/images/cover-slide-2.png';
import coverSlide3 from '../public/images/cover-slide-3.png';

export function HomePageCoverCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div key={1} className="embla__slide">
                        <Image src={coverSlide1} alt='hero' className='embla__slide__number w-full h-screen object-cover'/>
                    </div>
                    <div key={2} className="embla__slide">
                        <Image src={coverSlide2} alt='hero' className='embla__slide__number w-full h-screen object-cover'/>
                    </div>
                    <div key={3} className="embla__slide">
                        <Image src={coverSlide3} alt='hero' className='embla__slide__number w-full h-screen object-cover'/>
                    </div>
                </div>
            </div>
        </section>
    );
}
