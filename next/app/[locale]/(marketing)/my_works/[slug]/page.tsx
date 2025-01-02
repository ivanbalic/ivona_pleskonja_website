'use client';
import React, { useCallback, useState} from "react";

import Link from "next/link";
import Image from 'next/image';

import { cn } from "@/lib/utils";
import {Translations} from "@/types/types";
import IVFull from '@/public/images/IV-full.png';
import { Container } from "@/components/container";
import IVPreview from '@/public/images/IV-preview.png';
import holyDustFull from '@/public/images/holy-dust-full.png';
import holyDustPreview from '@/public/images/holy-dust-preview.png';
import creatingLifeFull from '@/public/images/creating-life-full.png';
import creatingAngelFull from '@/public/images/creating-angel-full.png';
import { GalleryRowItem, MyWorks } from "@/components/my-works/MyWorks";
import skyOverPanamaFull from '@/public/images/sky-over-panama-full.png';
import gabrielAndPanFull from '@/public/images/gabriel-and-pan-full.png';
import mahavatarBabajiFull from '@/public/images/mahavatar-babaji-full.png';
import creatingLifePreview from '@/public/images/creating-life-preview.png';
import creatingAngelPreview from '@/public/images/creating-angel-preview.png';
import gabrielAndPanPreview from '@/public/images/gabriel-and-pan-preview.png';
import skyOverPanamaPreview from '@/public/images/sky-over-panama-preview.png';
import mahavatarBabajiPreview from '@/public/images/mahavatar-babaji-preview.png';
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";

const PAGE_CONTENT = Object.freeze({
    CREATING_OF_LIFE: {
        ID: 'creating_of_light',
        HISTORY: [
            {
                ID: 'home',
                TITLE: {
                    SER: 'Početna',
                    ENG: 'Home',
                },
                LINK: ''
            },
            {
                ID: 'my_works',
                TITLE: {
                    SER: "Moji Radovi",
                    ENG: 'My Works',
                },
                LINK: 'my_works'
            },
            {
                ID: 'creating_of_light',
                TITLE: {
                    SER: '„Stvaranje svetla – Nežni smo rođeni“',
                    ENG: '„Creating Of Light - We Are Born Tender“'
                },
                LINK: 'my_works/creating_of_light'
            },
        ],
        TITLE: {
            SER: '„Stvaranje svetla – Nežni smo rođeni“',
            ENG: '„CREATING OF LIGHT - WE ARE BORN TENDER“'
        },
        DESCRIPTION: [
            {
                SER: 'Ideja o ovom ciklusu slika nastala je tokom slikanja monumentalne kompozicije DECA SUNCA, 2014. godine,kao predstava nastavka promena, rasta i transformacija koje se dešavaju usled prosvetljenja koje sam tada slikala.',
                ENG: 'The idea for this series of paintings arose while I was painting the monumental compositions CHILDREN OF THE SUN in 2014. It represents the continuation of changes, growth and transformations that occur due to enlightenment, which was the subject of my paintings at the time.'
            },
            {
                SER: 'Moja namera je da predstavim publici šta se dešava nakon bljeska misteriozne blještave bele svetlosti iz svemira na planetu Zemlju, nakon što sva bića na našoj planeti dožive prosvetljenje. Ciklus slika STVARANJE SVETLA / NEŽNI SMO ROĐENI predstavlja proces kreiranja svetlosti iz tame. Svetlost probija kroz tamnu materiju i stvara Anđele.',
                ENG: ' My intention is to present to the audience what happens after a flash of mysterious brilliant white light from space onto planet Earth, when all beings on our planet experience enlightenment. The series of paintings CREATING OF LIGHT / WE ARE BORN TENDER represents the process of creating light from darkness. Light breaks through dark matter and creates Angels.'
            }
        ],
        GALLERY: [
            [
                {
                    ID: 1,
                    SRC: {
                        FULL: gabrielAndPanFull,
                        PREVIEW: gabrielAndPanPreview,
                    },
                    ALT: "gabriel-and-pan",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 7.5 m',
                        NAME: {
                            SER: 'GABRIEL I PAN' ,
                            ENG: 'GABRIEL AND PAN'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu/poliptih',
                            ENG: 'Acrylic on canvas/polyptych'
                        },
                        DESCRIPTION: {
                            SER: 'Ova monumentalna kompozicija predstavlja blagovesti koje Arhangeo Gavrilo donosi svetu. Na dubljem ličnom, kao i dubljem kolektivnom nivou, ova slika predstavlja susret sa samim sobom, susret Svetog duha sa našim srcem.',
                            ENG: 'This monumental composition is a representation of the Announcement that Archangel Gabriel brings to the world. On a deeper personal level, as well as on a deeper collective level, this is an encounter with oneself, the encounter of the human spirit with the heart.'
                        },
                    }
                }
            ],
            [
                {
                    ID: 2,
                    SRC: {
                        FULL: IVFull,
                        PREVIEW: IVPreview,
                    },
                    ALT: "IV",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 2 m',
                        NAME: {
                            SER: 'IV',
                            ENG: 'IV'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu/diptih',
                            ENG: 'Acrylic on canvas/diptych'
                        },
                        DESCRIPTION: {
                            SER: 'Autoportret kojim predstavljam sebe u trenutku prekretnice u svom životu, koja mi se dešavala 2015. godine. U ovom trenutku stojim uspravno, prihvatam istinu i doživljavam preobražaj.',
                            ENG: 'Self-portrait painted at a turning point in my own life, which happened in 2015. At that moment, I stand tall, accept the truth, and experience a transformation.'
                        },
                    }
                },
                {
                    ID: 3,
                    SRC: {
                        FULL: holyDustFull,
                        PREVIEW: holyDustPreview,
                    },
                    ALT: "holy-dust",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 2 m',
                        NAME: {
                            SER: 'HOLY DUST',
                            ENG: 'HOLY DUST'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu',
                            ENG: 'Acrylic on canvas'
                        },
                        DESCRIPTION: {
                            SER: 'Ova monumentalna kompozicija predstavlja Blagovest koju Arhanđel Gavrilo donosi svetu. Na dubljem ličnom nivou, kao i na dubljem kolektivnom nivou, ovo je susret sa samim sobom, susret ljudskog duha sa srcem.',
                            ENG: 'This monumental composition is a representation of the Announcement that Archangel Gabriel brings to the world. On a deeper personal level, as well as on a deeper collective level, this is an encounter with oneself, the encounter of the human spirit with the heart.',
                        }
                    }
                },
                {
                    ID: 4,
                    SRC: {
                        FULL: creatingLifeFull,
                        PREVIEW: creatingLifePreview
                    },
                    ALT: "creation-of-life",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 3.15 m',
                        NAME: {
                            SER: 'STVARANJE ŽIVOTA',
                            ENG: 'CREATING LIFE'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu/triptih',
                            ENG: 'Acrylic on canvas/triptych'
                        },
                        DESCRIPTION: {
                            SER: 'Rađanje misteriozne, nežne a jake ženske energije. Devojka koju slikam zove se život, zove se Vida. Vida je spremna da se uskoro probudi / rodi, ustane i krene u svet.',
                            ENG: 'The birth of a mysterious, gentle and at the same time strong female energy. The girl I painted is called Life - her name is Vida. Vida is ready to wake up soon / to be born, to get up and go out into the world.'
                        }
                    }
                }
            ],
            [
                {
                    ID: 5,
                    SRC: {
                        FULL: skyOverPanamaFull,
                        PREVIEW: skyOverPanamaPreview,
                    },
                    ALT: "sky-over-panama",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 3.15 m',
                        NAME: {
                            SER: 'NEBO NAD PANAMOM',
                            ENG: 'SKY OVER PANAMA'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu/triptih',
                            ENG: 'Acrylic on canvas/triptych'
                        },
                        DESCRIPTION: {
                            SER: 'Mladi čovek leži okrenut ka nebu sa punim poverenjem u Nebo i više sile, dok ga svetla panamskog neba, u svim bojama opčinjavaju. Zagledan u svetlost, on je u stanju potpunog blaženstva. Ova slika nastala je u mom umu 2019. godine na panamskom aerodromu, dok je sunce grejalo atmosferu.',
                            ENG: 'A young man lies facing the sky with full trust in Heaven and a higher power. The lights of the Panama sky, with all the colours, enchant him. Gazing into the light, he is in a state of complete bliss. This image was created in my mind in 2019 at the Panama airport, as the sun warmed the atmosphere.'
                        }
                    }
                },
                {
                    ID: 6,
                    SRC: {
                        FULL: mahavatarBabajiFull,
                        PREVIEW: mahavatarBabajiPreview,
                    },
                    ALT: "mahavatar-babaji",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 1.5 m',
                        NAME: {
                            SER: 'MAHAVATAR BABAJI',
                            ENG: 'MAHAVATAR BABAJI'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu',
                            ENG: 'Acrylic on canvas'
                        },
                        DESCRIPTION: {
                            SER: 'Portret Mahavatara Babadija nastao je kroz telepatsku komunikaciju sa ovim velikim kosmičkim učiteljem, uz nameru da kroz ovaj sveti lik približim i svetu i sebi istine Univerzuma. Istine se mogu osetiti gledanjem u Babađijeve zenice. Sve je zapisano u njegovom oku.',
                            ENG: 'The portrait of Mahavatar Babaji was created through telepathic communication with this great cosmic teacher, with the intention of bringing the truths of the Universe closer to the world and to myself through this holy figure. Truths can be felt by looking into Babaji\'s pupils. It is all written in his eye.'
                        }
                    }
                },
                {
                    ID: 7,
                    SRC: {
                        FULL: creatingAngelFull,
                        PREVIEW: creatingAngelPreview,
                    },
                    ALT: "creation-of-angel",
                    DETAILS: {
                        CREATED_AT: '2023.',
                        DIMENSIONS: '2 x 1.5 m',
                        NAME: {
                            SER: 'STVARANJE ANÐELA',
                            ENG: 'CREATING ANGEL'
                        },
                        TECHNIQUE: {
                            SER: 'Akril na platnu',
                            ENG: 'Acrylic on canvas'
                        },
                        DESCRIPTION: {
                            SER: 'Svetim prahom posuto lice upravo stvorenog Anđela, koji dolazi u ovaj svet da bude među ljudima.',
                            ENG: 'The holy dust on the face of the newly created Angel, who comes to this world to be among people.'
                        }
                    }
                },
            ]
        ],
    },
});

function getPageContentById(id: string): MyWorks | undefined {
    return Object.values(PAGE_CONTENT).find((PAGE) => PAGE.ID === id);
}

export default function WorkDetailsPage({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
    const [selected, setSelected] = useState<GalleryRowItem | null>(null);

    const page = getPageContentById(slug);

    const onPrev = useCallback(() => {
        const prev = page?.GALLERY.flat()[(selected?.ID ?? 0) - 2];

        if (!prev) return;

        setSelected(prev);
    }, [page?.GALLERY, selected?.ID]);
    const onNext = useCallback(() => {
        const next = page?.GALLERY.flat()[(selected?.ID ?? 0)];

        if (!next) return;

        setSelected(next);
    }, [page?.GALLERY, selected?.ID]);

    if (!page) return null;

    return (
        <Container className={cn('pt-[75px] md:pt-[100px] lg:pt-[125px] text-black min-h-screen', selected && 'bg-backgroundSecondary max-w-full')}>
            <SubNavBredCrumbs navItems={page.HISTORY ?? []} locale={locale} page={slug} subItemClass='max-[480px]:max-w-[250px] truncate' />
            { selected
                ?
                <Container className="flex flex-col lg:flex-row gap-20 px-[72px] pt-10 pb-[135px] h-full">
                    <div className="flex justify-center items-center h-[715px] max-h-full w-full lg:w-[739px] max-w-full bg-white">
                        <Image src={selected.SRC.FULL} alt={selected.ALT} />
                    </div>
                    <div className="flex flex-1 flex-col justify-end items-start text-primaryBlue tracking-[.15em]">
                        <div className="text-black font-bold text-[16px] leading-[21px] mb-5">
                            <span className="cursor-pointer hover:underline" onClick={onPrev}>PREV</span> / <span className="cursor-pointer hover:underline" onClick={onNext}>NEXT</span>
                        </div>
                        <div className="text-[32px] leading-[42.2px] font-bold">{selected.DETAILS.NAME[locale.toUpperCase() as keyof Translations]}</div>
                        <div className="flex flex-col text-[22px] leading-[29px] font-bold mb-5">
                            <div>{selected.DETAILS.CREATED_AT} | {selected.DETAILS.DIMENSIONS}</div>
                            <div>{selected.DETAILS.TECHNIQUE[locale.toUpperCase() as keyof Translations]}</div>
                        </div>
                        <div className="text-black font-text text-[16px] leading-[19px] mb-20">{selected.DETAILS.DESCRIPTION[locale.toUpperCase() as keyof Translations]}</div>
                        <Link href={'/'} className="text-[16px] leading-[21px] font-bold">{locale === 'ser' ? 'ODVEDI ME NA IZLOŽBU' : 'TAKE ME TO EXIBITION'}</Link>
                    </div>
                </Container>
                : <MyWorks data={page} locale={locale} onSelect={setSelected} />
            }
        </Container>
    );
}
