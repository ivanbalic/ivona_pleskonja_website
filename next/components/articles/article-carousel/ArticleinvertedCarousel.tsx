import React, { useCallback } from 'react';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

import { useIsMobile } from "@/hooks/useIsMobile";
import { LeftArrow } from "@/components/art-gallery/LeftArrow";
import { RightArrow } from "@/components/art-gallery/RightArrow";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '@/components/articles/article-carousel/ArticleCarousleArrowButtons';

type PropType = {
    section: Record<string, any>,
    options?: EmblaOptionsType
}

export const ArticleInvertedCarousel: React.FC<PropType> = ( { section }) => {
    const isMobile = useIsMobile();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true}, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop;

        resetOrStop();
    }, []);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    return (
        <div>
            <section className="embla article-inverted-carousel">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {section.SLIDES.map((s: { SRC: string, ALT: string }, key: number) => (
                            <div key={key} className="embla__slide">
                                <Image src={s.SRC} alt={s.ALT} className='embla__slide__number w-full full object-contain md:object-contain' placeholder='blur' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

