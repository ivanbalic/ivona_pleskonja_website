"use client";
import React, { useCallback, useEffect, CSSProperties } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import Image, { StaticImageData } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { useActiveSlide } from '@/context/ActiveSlideContext';
import coverSlide3 from '../../public/images/home/chiron.png';
import coverSlide2 from '../../public/images/home/gabriel.png';
import coverSlide1 from '../../public/images/home/auto-portrait.png';

interface CarouselSlide {
    id: number;
    alt: string;
    className: string;
    priority?: boolean;
    image: StaticImageData;
    emblaSlideStyle?: CSSProperties;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
    {
        id: 1,
        image: coverSlide1,
        alt: 'Auto Portrait',
        className: 'w-full h-screen object-cover max-md:object-[42%]',
        priority: true,
    },
    {
        id: 2,
        image: coverSlide2,
        alt: 'Gabriel',
        className: 'relative w-full h-screen object-cover z-1',
        emblaSlideStyle: { zIndex: 1 },
    },
    {
        id: 3,
        image: coverSlide3,
        alt: 'Chiron',
        className: 'w-full h-screen object-cover transform max-md:-translate-y-[20%] max-md:scale-150 md:object-[50%_73%]'
    }
];

const CarouselSlide: React.FC<CarouselSlide> = ({image, alt, className, priority, emblaSlideStyle}) => (
    <div className="embla__slide" style={emblaSlideStyle}>
        <Image
            src={image}
            alt={alt}
            className={`embla__slide__number ${className}`}
            priority={priority}
            fetchPriority={priority ? "high" : undefined}
        />
    </div>
);

export function HomePageCoverCarousel() {
    const {activeSlide, onSlideChange} = useActiveSlide();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        axis: 'y',
        dragFree: false,
    }, [Autoplay()]);

    const handleSlideChange = useCallback(() => {
        onSlideChange(activeSlide + 1);
    }, [activeSlide, onSlideChange]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', handleSlideChange);

        return () => {
            emblaApi.off('select', handleSlideChange);
        };
    }, [emblaApi, handleSlideChange]);

    return (
        <section className="embla home-page-cover-carousel pointer-events-none">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {CAROUSEL_SLIDES.map(slide => (
                        <CarouselSlide key={slide.id} {...slide} />
                    ))}
                </div>
            </div>
        </section>
    );
}


