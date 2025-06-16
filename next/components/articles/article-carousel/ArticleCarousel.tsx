import React, { useCallback } from 'react';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '@/components/articles/article-carousel/ArticleCarousleArrowButtons';
import { DotButton, useDotButton } from '@/components/articles/article-carousel/ArticleCarouselDotButtons';

type PropType = {
    section: Record<string, any>,
    options?: EmblaOptionsType
}

export const ArticleCarousel: React.FC<PropType> = ( { section }) => {
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

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    );

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    return (
        <div className="mt-5 md:mt-10">
            <section className="embla article-carousel">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {section.SLIDES.map((s: { SRC: string, ALT: string }, key: number) => (
                            <div key={key} className="embla__slide">
                                <Image src={s.SRC} alt={s.ALT} className='embla__slide__number w-full full object-cover md:object-contain' placeholder='blur' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
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

