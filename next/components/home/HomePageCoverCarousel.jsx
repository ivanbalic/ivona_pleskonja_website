"use client";
import React, {useEffect} from 'react';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { useActiveSlide } from '@/context/ActiveSlideContext';
import coverSlide3 from '../../public/images/home/chiron.png';
import coverSlide2 from '../../public/images/home/gabriel.png';
import coverSlide1 from '../../public/images/home/auto-portrait.png';

export function HomePageCoverCarousel() {
    const { activeSlide, onSlideChange } = useActiveSlide();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis:'y' }, [Autoplay()]);

    useEffect(() => {
        if(!emblaApi) return;

        emblaApi.on('select', () => {
            onSlideChange(activeSlide + 1);
        });
    }, [activeSlide, emblaApi, onSlideChange]);

    return (
        <section className="embla home-page-cover-carousel">
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


