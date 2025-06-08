// CREATING LIGHT
import gabrielAndPan from '@/public/images/creating-light/gabriel-and-pan-full.webp';
import exhibitionCreatingOfLight1 from '@/public/images/creating-light/exhibition-creating-of-light-1.webp';
import exhibitionCreatingOfLight2 from '@/public/images/creating-light/exhibition-creating-of-light-2.webp';
import exhibitionCreatingOfLight3 from '@/public/images/creating-light/exhibition-creating-of-light-3.webp';
import exhibitionCreatingOfLight4 from '@/public/images/creating-light/exhibition-creating-of-light-4.webp';
import exhibitionCreatingOfLight5 from '@/public/images/creating-light/exhibition-creating-of-light-5.webp';
import exhibitionCreatingOfLight6 from '@/public/images/creating-light/exhibition-creating-of-light-6.webp';
import exhibitionCreatingOfLight7 from '@/public/images/creating-light/exhibition-creating-of-light-7.webp';
import exhibitionCreatingOfLight8 from '@/public/images/creating-light/exhibition-creating-of-light-8.webp';
import exhibitionCreatingOfLight9 from '@/public/images/creating-light/exhibition-creating-of-light-9.webp';
// 11 SNAGA
import exhibition11Snaga1 from '@/public/images/11-snaga/exhibition-11-snaga-1.webp';
import exhibition11Snaga2 from '@/public/images/11-snaga/exhibition-11-snaga-2.webp';
import exhibition11Snaga3 from '@/public/images/11-snaga/exhibition-11-snaga-3.webp';
import exhibition11Snaga4 from '@/public/images/11-snaga/exhibition-11-snaga-4.webp';
import exhibition11Snaga5 from '@/public/images/11-snaga/exhibition-11-snaga-5.webp';
// MURAL LIFE
import muralLife1 from '@/public/images/mural-life/mural-life-1.webp';
import muralLife2 from '@/public/images/mural-life/mural-life-2.webp';
import muralLife3 from '@/public/images/mural-life/mural-life-3.webp';
import muralLife4 from '@/public/images/mural-life/mural-life-4.webp';
import muralLife5 from '@/public/images/mural-life/mural-life-5.webp';
import muralLifeSlide1 from '@/public/images/mural-life/mural-life-slide-1.webp';
import muralLifeSlide2 from '@/public/images/mural-life/mural-life-slide-2.webp';
import muralLifeSlide3 from '@/public/images/mural-life/mural-life-slide-3.webp';
import muralLifeSlide4 from '@/public/images/mural-life/mural-life-slide-4.webp';
import muralLifeSlide5 from '@/public/images/mural-life/mural-life-slide-5.webp';
import muralLifeSlide6 from '@/public/images/mural-life/mural-life-slide-6.webp';
import muralLifeSlide7 from '@/public/images/mural-life/mural-life-slide-7.webp';
import muralLifeSlide8 from '@/public/images/mural-life/mural-life-slide-8.webp';
import muralLifeSlide9 from '@/public/images/mural-life/mural-life-slide-9.webp';

export const PAGE_CONTENT = Object.freeze({
    CREATING_LIFE: {
        ID: 1,
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
                ID: 'works',
                TITLE: {
                    SER: "Radovi",
                    ENG: 'Works',
                },
                LINK: 'works'
            },
            {
                ID: 'creating_light',
                TITLE: {
                    SER: 'Stvaranje svetla / Nežni smo rođeni',
                    ENG: 'Creating Light / We Are Born Gentle'
                },
                LINK: 'works/creating_light'
            },
            {
                ID: 'exhibition',
                TITLE: {
                    SER: 'O izložbi',
                    ENG: 'About Exhibition',
                },
                LINK: 'articles/1'
            }
        ],
        COVER: {
            TITLE: {
                SER: 'STVARANJE SVETLA / NEŽNI SMO ROÐENI',
                ENG: 'CREATING LIGHT / WE ARE BORN GENTLE',
            },
            AUTHOR: {
                SER: 'Ana Kršljanin, istoričar umetnosti',
                ENG: 'Ana Kršljanin, art historian'
            },
            YEAR: 2023,
            TEXT: {
                SER: 'Nakon momenta prosvetljenja sledi iskonsko buđenje bića. Ovo je priča o svetlosti iz dubine Svemira, svetlosti koja nas obasjava - rastvarajući dubine mraka, ona donosi anđele. Pre buđenja ovih stvorenja moramo se zapitati ko je onaj ko ih je stvorio?',
                ENG: 'A primordial awakening of the being follows the moment of enlightenment. This is a story of a light from the depths of Universe. It is the light that illuminates us - dissolving the deptlis of darkness. It brings out angels. Before awakening these creatures, we must ask ourselves - who created them?'
            },
            IMAGE: {
                MAX_HEIGHT: 360,
                SRC: gabrielAndPan,
                ALT: 'exhibition-cover',
            },
            EXTERNAL_LINK: {
                URL: '',
                LABEL: {
                    SER: 'POGLEDAJ CEO INTERVJU OVDE',
                    ENG: 'WATCH INTERVIEW HERE'
                }
            },
        },
        SECTIONS: {
            MOBILE: [
                {
                    TYPE: 'title',
                    TEXT: {
                        ENG: 'Who is Ivona?',
                        SER: 'Ko je Ivona?'
                    }
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Umetnica koja istražuje samo biće i njegovu suštinu, koja ima priču za svaki predstavljeni lik kome gotovo sinestetički udahnjuje život uvodeći boju, oblik, reč i zvuk. Ona stvara živu sliku. Kroz cikluse koje razvija, prisutna je izuzetna težnja za skladom alegoričnost predstave, kontemplativnost momenta, ispitivanje fenomena prosvetljenja, monumentalnost kao način komunikacije i konačno filantropija kao zaboravljena veština.',
                                    ENG: 'She\'s an artist who explores the very being and its essence. She has a story for each represented character. She almost synesthetically breathes in the breath of life into them, by introducing color, shape, word and sound. She creates a living painting. In her series of paintings, the artist strives for harmony through allegorical performance, by contemplating the moment, by examining the phenomenon of enlightenment, with monumentality as a way of communication and finally with philanthropy as a forgotten skill.',
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Duboko intuitivna, autorka istovremeno jača i ogoljuje svoja bića smeštajući ih u dubinu, za šta koristi najtamnije tonove plave. Simbolički to je boja intelekta, duhovnosti i introspekcije.',
                                    ENG: 'Deeply intuitive, the author simultaneously empowers and exposes her creatures, by placing them in the depths. To attain that, she uses the darkest tones of blue.'
                                },
                            },
                        ],
                    ],
                },
                {
                    TYPE: 'contained_image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                ALT: 'exhibition-view-wide',
                                SRC: exhibitionCreatingOfLight2,
                            },
                        ],
                    ]
                },
                {
                    TYPE: 'contained_image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                WIDTH: 48,
                                ALT: 'exhibition-view',
                                SRC: exhibitionCreatingOfLight1,
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 48,
                                ALT: 'exhibition-view',
                                SRC: exhibitionCreatingOfLight5,
                            },
                        ],
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Dubinom postignutom samo plavom autorka ostvaruje vanvremešnost, univerzalnost i metafizičku dimenziju kojom briše prostorne i vremenske okvire.',
                                    ENG: 'Symbolically, blue is the color of intellect, spirituality and introspection. By using only the color blue, the author brings about depth, timelessness, universality and a metaphysical dimension that erases space and time. The primordial and ancient archetypes, found in the past and in the archaic, are fused with a being of the future a new, strong and wise one that will incarnate as the best version of the self.'
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Ona spaja arhetipe, iskonske i drevne, koje pronalazi u prošlosti i arhajskom i buduće, novo, snažno i mudro biće koje će se ovaplotiti kao najbolja verzija sopstva. Svako biće koje se nalazi pred nama rodeno je iz izvora, ideje i vizije, divovskih je razmera i androginog izgleda. Deo je kosmosa ali istovremeno čitav kosmos nosi u svom pogledu ili položaju tela.',
                                    ENG: 'Every creature that we see before us, was born from a source, from an idea and from a vision. It is of gigantic proportions and is androgynous in appearance. It is part of the universe, but at the same time it carries the entire universe in the gaze of its eyes or in the position of its body.',
                                },
                            },
                        ]
                    ],
                },
                {
                    TYPE: 'image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                ALT: 'exhibition-view-medium',
                                SRC: exhibitionCreatingOfLight3,
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'read_more',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'inverted_quote',
                                            TEXT: {
                                                SER: '“Prema nekim mitovima i Kosmos i Prvobitni čovek nastali su iz Svetlosti dakle u osnovi kao Svetlost. Jedna druga tradicija objašnjava kako se odigrao preobražaj Čoveka - Svetlosti u ljude kakvi postoje na Zemlji. U početku su ljudi bili bespolni i nisu imali polnih želja; oni su u sebi imali Svetlost i zračili su. Sunce i Mesec nisu postojali”.¹',
                                                ENG: '“According to some myths, both the Universe and the Primordial Human were created from Light, therefore basically they are Light themselves. Another tradition explains how a transformation of Light People into ordinary people, as they exist on Earth, took place. In the beginning, people were sexless and had no sexual desires,they had the Light in them and they radiated. The sun and the moon did not exist”.¹',
                                            },
                                        },
                                        {
                                            TYPE: 'image',
                                            ALT: 'exhibition-view-medium',
                                            SRC: exhibitionCreatingOfLight6,
                                        },
                                    ]
                                ]
                            },
                            {
                                TYPE: 'text_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            TEXT:{
                                                SER: 'Buđenjem polnog nagona i stvaranjem polova ugasila se svetlost koju su nosili ljudi, tada se svetlost sklonila sa planete Zemlje, a na nebu su se pojavili Sunce i Mesec. Ivona nas vraća korak nazad donoseći svetlost na Zemlju rađanjem savršenog, univerzalnog stvorenja.',
                                                ENG: 'With the awakening of the sexual drive and the creation of the sexes, the light that people carried within was extinguished. It disappeared from the planer Earth, and the Sun and the Moon appeared in the sky. Ivona takes us a step back by invoking the light back to the Earth through creation of a perfect, universal creature.'
                                            }
                                        },
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: 'Blještava svetlost koja se probija kroz ova bića ne bi se pokazala u svojoj snazi da nema dubine, tame, introspektivnog povlačenja. Ivona je slikarka buđenja; svi anđeli koji izranjaju iz tame doživljavaju rast, duhovnu spoznaju i susret sa vlastitim sopstvom koji je krajnja realnost. Fenomen mistične svetlosti jedan je od punktova gde umetnica posebno usmerava svoje interesovanje i ostvaruje još jedan vid komunikacije na neverbalnom, duhovnom nivou kroz profanu umetnost utemeljenu na ličnoj spiritualnosti.',
                                                ENG: 'The dazzling light that shines through these beings would not be visible in all its power without the depth, the darkness and the introspective withdrawal. Ivona is a painter of awakening All angels who emerge from the darkness experience growth, spiritual realization and an encounter with their own self which is an ultimate reality. The phenomenon of a mystical light is of the artist\'s particular interest. She achieves another form of communication on a non - verbal, spiritual level through profane art based on personal spirituality',
                                            }
                                        },
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: 'Mirča Elijade, Mefistofeles i Androgin, prevod Slavica Miletić, (Beograd: Gradac, 1996), 29.',
                                                ENG: 'Mirča Elijade, Mefistofeles i Androgin, translation Slavica Miletić, (Belgrade: Gradac, 1996), 29.',
                                            }
                                        },
                                    ]
                                ]
                            },
                            {
                                TYPE: 'image_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'image',
                                            ALT: 'exhibition-view-medium',
                                            SRC: exhibitionCreatingOfLight7,
                                        },
                                    ]
                                ]
                            },
                            {
                                TYPE: 'text_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: '“Rađanje svetla” se dogodilo nakon „Dece Sunca”. Bitno je napomenuti da su „Deca Sunca” Ivonin utopistički osvrt na bolji svet, koji dobija nakon predviđanja brojnih kataklizmi koje neposredno prethode prosperitetu i novoj eri. Ovo se fenomenološki može poistovetiti sa brojnim mitovima duhovnim uverenjima.',
                                                ENG: 'The series of paintings, the "Birth of Light" was painted after the "Children of the Sun" series. It is important to note that "Children of the Sun" series represents Ivona\'s utopian vision of a better world, which comes after the prediction of numerous cataclysms that immediately precede prosperity and a new era. This can be phenomenologically identified with numerous myths and spiritual beliefs.',
                                            },
                                        },
                                    ],
                                ]
                            },
                            {
                                TYPE: 'image_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'inverted_quote',
                                            TEXT: {
                                                SER: '“Prema jednoj tradiciji (...) pošto je svet uništen u njemu su ostala samo sjajna bića (...) ona su imala eterična tela i letela su kroz vazduh zračeći sopstvenu svetlost i živela su beskonačno dugo”.2',
                                                ENG: '“According to one legend (...) since the world was destroyed, only lustrous beings remained in it (...) they had ethereal bodies and flew through the air radiating their own light and they lived eternally”.2',
                                            },
                                        },
                                        {
                                            TYPE: 'image',
                                            ALT: 'exhibition-view-medium',
                                            SRC: exhibitionCreatingOfLight8,
                                        },
                                    ]
                                ]
                            },
                            {
                                TYPE: 'text_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: 'Ivonini radovi nisu klasični portreti, oni su kompleksne studije duše koju možete da čujete i osetite, a čija telesnost traži proučavanje i posvećenost. Umetnica se samo oslanja na ikoničko predstavljanje koje svojim gabaritom pruža snagu i mir. Njena bića u sebi nose kosmičku ljubav.',
                                                ENG: 'Ivona\'s works are not typical portraits. They are complex studies of a soul that one can hear and feel, and whose physicality demands study and dedication. The artist relies only on an iconic representation that provides strength and peace with its dimensions. Her beings carry cosmic love within them.',
                                            }
                                        },
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: 'U jednom od svojih romana koji ujedno predstavlja jedno od najznačajnijih književnih dela koje obraduje temu androginije Balzak predstavlja to savršeno, uzvišeno biće - alegoriju serafimske ljubavi, koje je osamljeno, melanholično, erudita i u koje se zaljubljuju i muškarac i žena jer ono predstavlja savršeno, „potpuno stvorenje”. U pesmi „Reči Stalkera”, Tarkovski ističe - slabost je velika stvar, a sila je ništavna.',
                                                ENG: 'In one of his novels, which is at the same time one of the most significant literary works dealing with the theme of androgyny, Balzac presents a perfect, sublime being an allegory of seraphim\'s love. It is solitary, melancholic, erudite, and both men and women fall in love with it because it represents a perfect, "complete creature." In the poem "Words of Stalker", Tarkovsky indicates that weakness is a good thing, while strength is nothing.',
                                            }
                                        },
                                        {
                                            TYPE: 'quote',
                                            TEXT: {
                                                SER: '„Kada se čovek rodi on je slab i lomljiv, a kada umire, jak je i čvrst. Kada drvo raste nežno je i savitljivo ali kada je suvo i tvrdo tada umire. Tvrdoća i snaga su saputnici smrti. Ranjivost i nejakost su izraz svežine postojanja. Jer, nešto što je očvrsnulo nikada neće pobediti”.',
                                                ENG: '„When a man is just born, he is weak and flexible. When he dies, he is hard and insensitive. When a tree is growing, it\'s tender and pliant. But when it\'s dry and hard, it dies. Hardness and strength are death\'s companions. Pliancy and weakness are expressions of the freshness of being. Because what has hardened will never win”. 21',
                                            }
                                        }
                                    ]
                                ]
                            },
                            {
                                TYPE: 'image_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'image',
                                            ALT: 'exhibition-view-medium',
                                            SRC: exhibitionCreatingOfLight9,
                                        },
                                    ]
                                ]
                            },
                            {
                                TYPE: 'inverted_text_grid',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: 'Ova divovska stvorenja personifikuju svežinu postojanja i čistotu i ranjivost novorođenog. Ona su nejaka, na njima nema tragova očvrslosti, okoštalosti ili grubosti koju čini vreme i iskustvo. Ivona predstavlja šest celina. Teži da nas vrati na početak i pokaže tu nežnost iz koje smo izronili u svet koji nas je promenio. Ona skida sve oklope koje je čovek stvorio kako bi se zaštitio i opstao. Pokazuje suštinu, a to je ljubav i nežnost koja je u korenu svakog od nas.',
                                                ENG: 'These giant creatures personify the freshness of existence and the purity and vulnerability of a time newborn. They are frail, there are no traces of hardness, ossification or roughness caused by t and experience. Ivona has six segments on display. She seeks to bring us back to the beginning and to show the tenderness from which we have emerged into the world-which has changed us subsequently. She takes off all the armor that a human being has created in order to protect itself and survive. She shows the essence the love and',
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: 'Kroz svoj antropološko- filantropski pristup ona običnom čoveku daje snagu božanko- nebeskog stvorenja, predstavljajući ga kao te inicijalne tvorevine koje u sebi poseduju oba pola, emociju i razum. Vizuelizovanjem duhovnog i bukvalnog buđenja života, ona sugeriše na snagu nežnosti čije posedovanje stvara svetlost potpunog bića.',
                                                ENG: 'tenderness that are at the core of each of us. Through her anthropological and philanthropic approach, she gives ordinary human beings the strength of divine, heavenly creatures, presenting them as primordial creations that possess both sexes, emotion and reason. By visualizing the spiritual and the literal awakening of life, the artist implies the power of tenderness required to bring forth the light of a complete being',
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: '* Mirča Elijade, Mefistofeles i Androgin, prevod Slavica Miletić, (Beograd: Gradac, 1996), 21.',
                                                ENG: '* Mirča Elijade, Mefistofeles i Androgin, translation Slavica Miletić, (Belgrade: Gradac, 1996), 21.',
                                            },
                                        },
                                    ]
                                ],
                                CLASS_NAME: 'mt-0',
                            }
                        ]
                    ]
                }
            ],
            DESKTOP: [
                {
                    TYPE: 'title',
                    TEXT: {
                        ENG: 'Who is Ivona?',
                        SER: 'Ko je Ivona?'
                    }
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Umetnica koja istražuje samo biće i njegovu suštinu, koja ima priču za svaki predstavljeni lik kome gotovo sinestetički udahnjuje život uvodeći boju, oblik, reč i zvuk. Ona stvara živu sliku. Kroz cikluse koje razvija, prisutna je izuzetna težnja za skladom alegoričnost predstave, kontemplativnost momenta, ispitivanje fenomena prosvetljenja, monumentalnost kao način komunikacije i konačno filantropija kao zaboravljena veština.',
                                    ENG: 'She\'s an artist who explores the very being and its essence. She has a story for each represented character. She almost synesthetically breathes in the breath of life into them, by introducing color, shape, word and sound. She creates a living painting. In her series of paintings, the artist strives for harmony through allegorical performance, by contemplating the moment, by examining the phenomenon of enlightenment, with monumentality as a way of communication and finally with philanthropy as a forgotten skill.',
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Duboko intuitivna, autorka istovremeno jača i ogoljuje svoja bića smeštajući ih u dubinu, za šta koristi najtamnije tonove plave. Simbolički to je boja intelekta, duhovnosti i introspekcije.',
                                    ENG: 'Deeply intuitive, the author simultaneously empowers and exposes her creatures, by placing them in the depths. To attain that, she uses the darkest tones of blue.'
                                },
                            },
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Dubinom postignutom samo plavom autorka ostvaruje vanvremešnost, univerzalnost i metafizičku dimenziju kojom briše prostorne i vremenske okvire.',
                                    ENG: 'Symbolically, blue is the color of intellect, spirituality and introspection. By using only the color blue, the author brings about depth, timelessness, universality and a metaphysical dimension that erases space and time. The primordial and ancient archetypes, found in the past and in the archaic, are fused with a being of the future a new, strong and wise one that will incarnate as the best version of the self.'
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Ona spaja arhetipe, iskonske i drevne, koje pronalazi u prošlosti i arhajskom i buduće, novo, snažno i mudro biće koje će se ovaplotiti kao najbolja verzija sopstva. Svako biće koje se nalazi pred nama rodeno je iz izvora, ideje i vizije, divovskih je razmera i androginog izgleda. Deo je kosmosa ali istovremeno čitav kosmos nosi u svom pogledu ili položaju tela.',
                                    ENG: 'Every creature that we see before us, was born from a source, from an idea and from a vision. It is of gigantic proportions and is androgynous in appearance. It is part of the universe, but at the same time it carries the entire universe in the gaze of its eyes or in the position of its body.',
                                },
                            },
                        ]
                    ],
                },
                {
                    TYPE: 'contained_image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'inverted_quote',
                                WIDTH: 59,
                                TEXT: {
                                    SER: '“Prema nekim mitovima i Kosmos i Prvobitni čovek nastali su iz Svetlosti dakle u osnovi kao Svetlost. Jedna druga tradicija objašnjava kako se odigrao preobražaj Čoveka - Svetlosti u ljude kakvi postoje na Zemlji. U početku su ljudi bili bespolni i nisu imali polnih želja; oni su u sebi imali Svetlost i zračili su. Sunce i Mesec nisu postojali”.¹',
                                    ENG: '“According to some myths, both the Universe and the Primordial Human were created from Light, therefore basically they are Light themselves. Another tradition explains how a transformation of Light People into ordinary people, as they exist on Earth, took place. In the beginning, people were sexless and had no sexual desires,they had the Light in them and they radiated. The sun and the moon did not exist”.¹',
                                },
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 41,
                                ALT: 'exhibition-view',
                                SRC: exhibitionCreatingOfLight1,
                            },
                        ],
                        [
                            {
                                TYPE: 'image',
                                ALT: 'exhibition-view-wide',
                                SRC: exhibitionCreatingOfLight2,
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT:{
                                    SER: 'Buđenjem polnog nagona i stvaranjem polova ugasila se svetlost koju su nosili ljudi, tada se svetlost sklonila sa planete Zemlje, a na nebu su se pojavili Sunce i Mesec. Ivona nas vraća korak nazad donoseći svetlost na Zemlju rađanjem savršenog, univerzalnog stvorenja.',
                                    ENG: 'With the awakening of the sexual drive and the creation of the sexes, the light that people carried within was extinguished. It disappeared from the planer Earth, and the Sun and the Moon appeared in the sky. Ivona takes us a step back by invoking the light back to the Earth through creation of a perfect, universal creature.'
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Blještava svetlost koja se probija kroz ova bića ne bi se pokazala u svojoj snazi da nema dubine, tame, introspektivnog povlačenja. Ivona je slikarka buđenja; svi anđeli koji izranjaju iz tame doživljavaju rast, duhovnu spoznaju i susret sa vlastitim sopstvom koji je krajnja realnost. Fenomen mistične svetlosti jedan je od punktova gde umetnica posebno usmerava svoje interesovanje i ostvaruje još jedan vid komunikacije na neverbalnom, duhovnom nivou kroz profanu umetnost utemeljenu na ličnoj spiritualnosti.',
                                    ENG: 'The dazzling light that shines through these beings would not be visible in all its power without the depth, the darkness and the introspective withdrawal. Ivona is a painter of awakening All angels who emerge from the darkness experience growth, spiritual realization and an encounter with their own self which is an ultimate reality. The phenomenon of a mystical light is of the artist\'s particular interest. She achieves another form of communication on a non - verbal, spiritual level through profane art based on personal spirituality',
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Mirča Elijade, Mefistofeles i Androgin, prevod Slavica Miletić, (Beograd: Gradac, 1996), 29.',
                                    ENG: 'Mirča Elijade, Mefistofeles i Androgin, translation Slavica Miletić, (Belgrade: Gradac, 1996), 29.',
                                }
                            },
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: '“Rađanje svetla” se dogodilo nakon „Dece Sunca”. Bitno je napomenuti da su „Deca Sunca” Ivonin utopistički osvrt na bolji svet, koji dobija nakon predviđanja brojnih kataklizmi koje neposredno prethode prosperitetu i novoj eri. Ovo se fenomenološki može poistovetiti sa brojnim mitovima duhovnim uverenjima.',
                                    ENG: 'The series of paintings, the "Birth of Light" was painted after the "Children of the Sun" series. It is important to note that "Children of the Sun" series represents Ivona\'s utopian vision of a better world, which comes after the prediction of numerous cataclysms that immediately precede prosperity and a new era. This can be phenomenologically identified with numerous myths and spiritual beliefs.',
                                },
                            },
                            {
                                TYPE: 'quote',
                                TEXT: {
                                    SER: '“Prema jednoj tradiciji (...) pošto je svet uništen u njemu su ostala samo sjajna bića (...) ona su imala eterična tela i letela su kroz vazduh zračeći sopstvenu svetlost i živela su beskonačno dugo”.2',
                                    ENG: '“According to one legend (...) since the world was destroyed, only lustrous beings remained in it (...) they had ethereal bodies and flew through the air radiating their own light and they lived eternally”.2',
                                },
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                WIDTH: 35,
                                MAX_HEIGHT: 448,
                                ALT: 'exhibition-view-medium',
                                SRC: exhibitionCreatingOfLight3,
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 65,
                                MAX_HEIGHT: 448,
                                ALT: 'exhibition-view-medium',
                                SRC: exhibitionCreatingOfLight4,
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Ivonini radovi nisu klasični portreti, oni su kompleksne studije duše koju možete da čujete i osetite, a čija telesnost traži proučavanje i posvećenost. Umetnica se samo oslanja na ikoničko predstavljanje koje svojim gabaritom pruža snagu i mir. Njena bića u sebi nose kosmičku ljubav.',
                                    ENG: 'Ivona\'s works are not typical portraits. They are complex studies of a soul that one can hear and feel, and whose physicality demands study and dedication. The artist relies only on an iconic representation that provides strength and peace with its dimensions. Her beings carry cosmic love within them.',
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'U jednom od svojih romana koji ujedno predstavlja jedno od najznačajnijih književnih dela koje obraduje temu androginije Balzak predstavlja to savršeno, uzvišeno biće - alegoriju serafimske ljubavi, koje je osamljeno, melanholično, erudita i u koje se zaljubljuju i muškarac i žena jer ono predstavlja savršeno, „potpuno stvorenje”. U pesmi „Reči Stalkera”, Tarkovski ističe - slabost je velika stvar, a sila je ništavna.',
                                    ENG: 'In one of his novels, which is at the same time one of the most significant literary works dealing with the theme of androgyny, Balzac presents a perfect, sublime being an allegory of seraphim\'s love. It is solitary, melancholic, erudite, and both men and women fall in love with it because it represents a perfect, "complete creature." In the poem "Words of Stalker", Tarkovsky indicates that weakness is a good thing, while strength is nothing.',
                                }
                            },
                        ],
                        [
                            {
                                TYPE: 'quote',
                                TEXT: {
                                    SER: '„Kada se čovek rodi on je slab i lomljiv, a kada umire, jak je i čvrst. Kada drvo raste nežno je i savitljivo ali kada je suvo i tvrdo tada umire. Tvrdoća i snaga su saputnici smrti. Ranjivost i nejakost su izraz svežine postojanja. Jer, nešto što je očvrsnulo nikada neće pobediti”.',
                                    ENG: '„When a man is just born, he is weak and flexible. When he dies, he is hard and insensitive. When a tree is growing, it\'s tender and pliant. But when it\'s dry and hard, it dies. Hardness and strength are death\'s companions. Pliancy and weakness are expressions of the freshness of being. Because what has hardened will never win”. 21',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'inverted_text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Ova divovska stvorenja personifikuju svežinu postojanja i čistotu i ranjivost novorođenog. Ona su nejaka, na njima nema tragova očvrslosti, okoštalosti ili grubosti koju čini vreme i iskustvo. Ivona predstavlja šest celina. Teži da nas vrati na početak i pokaže tu nežnost iz koje smo izronili u svet koji nas je promenio. Ona skida sve oklope koje je čovek stvorio kako bi se zaštitio i opstao. Pokazuje suštinu, a to je ljubav i nežnost koja je u korenu svakog od nas.',
                                    ENG: 'These giant creatures personify the freshness of existence and the purity and vulnerability of a time newborn. They are frail, there are no traces of hardness, ossification or roughness caused by t and experience. Ivona has six segments on display. She seeks to bring us back to the beginning and to show the tenderness from which we have emerged into the world-which has changed us subsequently. She takes off all the armor that a human being has created in order to protect itself and survive. She shows the essence the love and',
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Kroz svoj antropološko- filantropski pristup ona običnom čoveku daje snagu božanko- nebeskog stvorenja, predstavljajući ga kao te inicijalne tvorevine koje u sebi poseduju oba pola, emociju i razum. Vizuelizovanjem duhovnog i bukvalnog buđenja života, ona sugeriše na snagu nežnosti čije posedovanje stvara svetlost potpunog bića.',
                                    ENG: 'tenderness that are at the core of each of us. Through her anthropological and philanthropic approach, she gives ordinary human beings the strength of divine, heavenly creatures, presenting them as primordial creations that possess both sexes, emotion and reason. By visualizing the spiritual and the literal awakening of life, the artist implies the power of tenderness required to bring forth the light of a complete being',
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: '* Mirča Elijade, Mefistofeles i Androgin, prevod Slavica Miletić, (Beograd: Gradac, 1996), 21.',
                                    ENG: '* Mirča Elijade, Mefistofeles i Androgin, translation Slavica Miletić, (Belgrade: Gradac, 1996), 21.',
                                },
                            },
                        ]
                    ]
                }
            ],
        },
    },
    ['11_SNAGA']: {
        ID: 2,
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
                ID: 'works',
                TITLE: {
                    SER: "Radovi",
                    ENG: 'Works',
                },
                LINK: 'works'
            },
            {
                ID: '11-snaga',
                TITLE: {
                    SER: '„11 snaga“',
                    ENG: '„11 snaga“'
                },
                LINK: 'works/11_snaga'
            },
            {
                ID: 'exhibition',
                TITLE: {
                    SER: 'O izložbi',
                    ENG: 'About Exhibition',
                },
                LINK: 'articles/2'
            }
        ],
        COVER: {
            TITLE: {
                SER: '„11 SNAGA“',
                ENG: '„11 SNAGA“',
            },
            AUTHOR: {
                SER: 'Nataša Radojević',
                ENG: 'Nataša Radojević'
            },
            YEAR: 2019,
            TEXT: {
                SER: 'Serija slika i grafika 11 SNAGA nastavak je rada započetog u okviru doktorskog umetničkog projekta Ivone Pleskonje, predstavljenog na izložbi Deca Sunca.',
                ENG: 'The series of paintings and graphics 11 STRENGTH is a continuation of the work started within the doctoral art project of Ivona Pleskonje, presented at the Children of the Sun exhibition.'
            },
            IMAGE: {
                MAX_HEIGHT: 439,
                ALT: 'exhibition-cover',
                SRC: exhibition11Snaga1,
            },
            EXTERNAL_LINK: {
                URL: '',
                LABEL: {
                    SER: 'POGLEDAJ CEO INTERVJU OVDE',
                    ENG: 'WATCH INTERVIEW HERE'
                }
            },
        },
        SECTIONS: {
            MOBILE: [
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Istraživanje se zasniva na problemu likovnog prikaza momenta u kome biće doživljava prosvetljenje, a koje je po svojoj prirodi nestvoreno, nevidljivo čulima, neopisivo materijalnim elementima. Likovno psihološka analiza stanja tela, uma i duha u pripremi i tokom izvođenja performansa Marine Abramović, likova svetitelja na ikonama Andreja Rubljova i analiza emocionalnog doživljaja portreta kineskog umetnika Zanga Ksiaoganga, predstavlja zasebnu celinu istraživanja u kome Ivona pronalazi vezu i inspiraciju u proučavanju prosvetljenja i načina komunikacije sa publikom.',
                                    ENG: 'The research is based on the problem of visual representation of the moment in which a being experiences enlightenment, which by its nature is uncreated, invisible to the senses, indescribable by material elements. The artistic psychological analysis of the state of the body, mind and spirit in the preparation and during the performance of Marina Abramović, the figures of the saints on the icons of Andrei Rublev and the analysis of the emotional experience of the portraits of the Chinese artist Zhang Xiaogang, represents a separate body of research in which Ivona finds a connection and inspiration in the study of enlightenment and ways communication with the audience.'
                                },
                            }
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Polazeći od samospoznaje, izučavanja religijsko-filozofskih rasprava o vremenu, biću i postojanju, praktikovanje različitih tehnika kontemplativne prakse, putevi su kojima Ivona traga za postupcima prevazilaženja fizičke dimenzije. Naglašen je značaj procesa pripreme umetnika za fazu stvaranja, tokom koje kreator neminovno projektuje svoje stanje svesti, dok u daljoj komunikaciji sa posmatračem snaga duha oličena u slici se transformiše u apsolutno prisustvo koje dotiče ljudsku suštinu i omogućava preobražaj. Telo svodi na instrument za dostizanje novih nivoa svesti, oslobađanje duše, usavršavanja vrlina u težnji ka najvišem dobru.',
                                    ENG: 'Starting from self-knowledge, studying religious-philosophical debates about time, being and existence, practicing different techniques of contemplative practice, these are the ways that Ivona searches for ways to overcome the physical dimension. The importance of the process of preparing the artist for the creation phase is emphasized, during which the creator inevitably projects his state of consciousness, while in further communication with the observer, the spirit power embodied in the image is transformed into an absolute presence that touches the human essence and enables transformation. It reduces the body to an instrument for reaching new levels of consciousness, freeing the soul, perfecting virtues in the pursuit of the highest good.',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'contained_image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'inverted_quote',
                                WIDTH: 783,
                                TEXT: {
                                    SER: 'Širon IDENTITET, Gabrijel STVARANJE, Ivona SAOSEĆAJNOST, Lazar PROMENA, Srki ISTRAJNOST, Pal RAD, Tasja SREĆA, Verona BLAGOST, Ranko UM, Orlando REALIZACIJA i Ksenija Lea LJUBAV koja se javlja u dva oblika.',
                                    ENG: 'Shiron IDENTITY, Gabriel CREATION, Ivona COMPASSION, Lazar CHANGE, Srki PERSISTENCE, Pal WORK, Tasja HAPPINESS, Verona GENTLENESS, Ranko THE MIND, Orlando REALISATION and Ksenia Lea LOVE which appears in two forms.',
                                },
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 577,
                                ALT: 'exhibition-view',
                                SRC: exhibition11Snaga2,
                            },
                        ],
                        [
                            {
                                TYPE: 'image',
                                MAX_HEIGHT: 561,
                                ALT: 'exhibition-view-wide',
                                SRC: exhibition11Snaga3,
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT:{
                                    SER: 'Kritički odnos usmeren je ka pojedincu od koga zavisi napredak kolektivne svesti, svesnost o individualnom nivou koji dotiče duh univerzuma i doprinosi redu i harmoniji. Poput stvaralaštva Zanga Ksiaoganga, kineskog umetnika čija dela nastaju u atmosferi kulturno političke krize 60-ih i 70-ih godina XX veka uz osećaj sputanosti pojedinca od strane tradicije i represivnog režima, Ivona pravi otklon od socijalnih tema prostora u kome egzistira i okreće se otkrivanju iskonskih ljudskih identiteta koje smatra nužnim za opstanak.',
                                    ENG: 'The critical relationship is directed towards the individual on whom the progress of the collective consciousness depends, the awareness of the individual level that touches the spirit of the universe and contributes to order and harmony. Like the work of Zhang Xiaogang, a Chinese artist whose works were created in the atmosphere of the cultural and political crisis of the 60s and 70s of the 20th century with the feeling of the individual being constrained by tradition and a repressive regime, Yvona makes a departure from the social themes of the space in which she exists and turns to discovering primordial human identities that he considers necessary for survival.'
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: '11 SNAGA su bića poslata iz središa Univerzuma i manifestovana na planeti Zemlji, materijalizovana rađanjem 11 divova datih čovečanstvu, simboličnih nosilaca pojmova koji su im dodeljeni na osnovu dominantnih osobina koje čine njihovu moć.',
                                    ENG: 'The 11 SNAGA are beings sent from the center of the Universe and manifested on planet Earth, materialized by the birth of 11 giants given to humanity, symbolic bearers of terms assigned to them based on the dominant features that make up their power.',
                                }
                            },
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Likovi koje Ivona prenosi na slike i grafike prema doživljaju linearnog protoka vremena nisu savremenici, oni se upoznaju kroz osećaj povezanosti univerzalnim vremenom koje briše razlike između prošlog i budućeg, u apsolutnom jedinstvu sa trenutkom potire se prolaznost, a osećaj za vreme prestaje da postoji jer smo transformisani u čistu svest u vanvremenu i vanprostoru – momentu koji je večan, baš kao i sama svest.',
                                    ENG: 'The characters that Ivona transfers to pictures and graphics according to the experience of the linear passage of time are not contemporaries, they are known through a sense of connection with universal time that erases the differences between the past and the future, in absolute unity with the moment, transience is erased, and the sense of time ceases to exist because we transformed into pure consciousness outside time and space – a moment that is eternal, just like consciousness itself.',
                                },
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                WIDTH: 511,
                                MAX_HEIGHT: 448,
                                ALT: 'exhibition-view-medium',
                                SRC: exhibition11Snaga4,
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 929,
                                MAX_HEIGHT: 448,
                                ALT: 'exhibition-view-medium',
                                SRC: exhibition11Snaga5,
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Dolazak snaga na Zemlju uzburkava vibracije u atmosferi, kontakt sa tlom planete stvara snažan potres, energetske strune se pokreću i melodični zvuci šire, objavljuju da je život snage na Zemlji počeo. Zvučni efekti koji prate izložbu potiču iz prirode, delo su autora Vladimira Živkovića (dizajner zvuka) i Marijane Dujović (muzikolog), dati u vidu kratke muzičke numere čine skup konkretnih i generisanih zvukova uz melodijsko-ritmičke delove koji su odsvirani na različitim instrumentima.',
                                    ENG: 'The arrival of forces on Earth stirs up vibrations in the atmosphere, contact with the ground of the planet creates a powerful tremor, energy strings are set in motion and melodious sounds spread, announcing that the life of the force on Earth has begun. The sound effects that accompany the exhibition come from nature, they are the work of Vladimir Živković (sound designer) and Marijana Dujović (musicologist), given in the form of short musical tracks, they form a set of concrete and generated sounds with melodic and rhythmic parts played on different instruments.',
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Marijana Dujović navodi da je muzika inspirisana slikama osmišljena kao zvuk onostranog prostora koji snage donose sa sobom na našu planetu. Muzika doprinosi apsorbovanju unutrašnje atmosfere, spoj nestvorenog sa prisutnim kroz doživljaj harmonije Sunčevog i mističnog dolazećeg svetla.',
                                    ENG: 'Marijana Dujović states that the music inspired by images is designed as the sound of other space that the forces bring with them to our planet. Music contributes to the absorption of the inner atmosphere, the union of the uncreated with the present through the experience of the harmony of the Sun and the mystical incoming light.',
                                }
                            },
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Vizualizacija duhovne dimenzije prosvetljenja sugeriše promenu i beleži trenutak koji sublimira vreme u beskonačnost, istovremeno objedinjuje kretanje i apsolutni mir, u kome se sve događa ali i prestaje u sinergiji uma, tela i duha.',
                                    ENG: 'The visualization of the spiritual dimension of enlightenment suggests change and captures a moment that sublimates time into infinity, simultaneously uniting movement and absolute peace, in which everything happens but also ceases in the synergy of mind, body and spirit.',
                                }
                            },
                            {
                                TYPE: 'quote',
                                TEXT: {
                                    SER: 'Fokus je na očima, medijuma razmene energije, koji efekatom ogledala uvodi u introspekciju apsorbujući okolne senzacije, dok je istovremeno slika sredstvo komunikacije sa umetnikom i nagoveštava njegovo prisustvo.',
                                    ENG: 'The focus is on the eyes, the medium of energy exchange, which with the effect of a mirror leads to introspection by absorbing the surrounding sensations, while at the same time the painting is a means of communication with the artist and hints at his presence.',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'inverted_text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Filozofija zen budizma inspirisala je Ivonin rad na više nivoa, prevashodno se odnosi na način na koji umetnica stupa u odnos sa svetom kroz samospoznaju odnosno uvid, putem koga preobražava portretisane emotivnim i duhovnim procesima sopstvenog bića. U radu je prisutna redukcija, nema prostorne odrednice u pozadini slike koja bi ometala pogled, već ukazuje na prazninu, metafizičku dimenziju prostora i vremena u kojoj se prošlost, sadašnjost i budućnost sažimaju u kružnom kretanju večnosti.',
                                    ENG: 'The philosophy of Zen Buddhism inspired Yvonne\'s work on several levels, primarily related to the way in which the artist enters into a relationship with the world through self-knowledge, i.e. insight, through which she transforms the portrayed through the emotional and spiritual processes of her own being. Reduction is present in the work, there is no spatial determinant in the background of the picture that would obstruct the view, but it points to the void, the metaphysical dimension of space and time in which the past, present and future are condensed in the circular movement of eternity.',
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Praznina je nezavisni entitet, usmerava akcenat na aktere platna i njihovu energiju u kojoj svetlost proizilazi iz same monohromne pozadine. Ekspresija pokreta u procesu stvaranja u Ivoninom radu kreira energetske vibracije nanosima boja, što se manifestuje treperenjem kontrasta u igri svetlosti i senki, transferom energetskog polja od stvaraoca ka posmatraču koje uspostavlja prisustvo duha. Uvođenje mistične svetlosti van funkcije optičkog fenomena na ravnu površinu slike predstavlja polje sile koje emituje senzacije izvan čulnosti, nagoveštava komunikaciju bića na nivou duše.',
                                    ENG: 'The void is an independent entity, it directs the accent to the actors of the canvas and their energy in which the light emanates from the monochrome background itself. The expression of movement in the process of creation in Yvonne\'s work creates energy vibrations with the application of colors, which is manifested by flickering contrasts in the play of light and shadows, by the transfer of the energy field from the creator to the observer, which establishes the presence of the spirit. The introduction of mystical light beyond the function of an optical phenomenon onto the flat surface of the picture represents a field of force that emits sensations beyond sensibility, hinting at the communication of beings at the level of the soul.',
                                },
                            },
                        ]
                    ]
                }
            ],
            DESKTOP: [
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Istraživanje se zasniva na problemu likovnog prikaza momenta u kome biće doživljava prosvetljenje, a koje je po svojoj prirodi nestvoreno, nevidljivo čulima, neopisivo materijalnim elementima. Likovno psihološka analiza stanja tela, uma i duha u pripremi i tokom izvođenja performansa Marine Abramović, likova svetitelja na ikonama Andreja Rubljova i analiza emocionalnog doživljaja portreta kineskog umetnika Zanga Ksiaoganga, predstavlja zasebnu celinu istraživanja u kome Ivona pronalazi vezu i inspiraciju u proučavanju prosvetljenja i načina komunikacije sa publikom.',
                                    ENG: 'The research is based on the problem of visual representation of the moment in which a being experiences enlightenment, which by its nature is uncreated, invisible to the senses, indescribable by material elements. The artistic psychological analysis of the state of the body, mind and spirit in the preparation and during the performance of Marina Abramović, the figures of the saints on the icons of Andrei Rublev and the analysis of the emotional experience of the portraits of the Chinese artist Zhang Xiaogang, represents a separate body of research in which Ivona finds a connection and inspiration in the study of enlightenment and ways communication with the audience.'
                                },
                            }
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Polazeći od samospoznaje, izučavanja religijsko-filozofskih rasprava o vremenu, biću i postojanju, praktikovanje različitih tehnika kontemplativne prakse, putevi su kojima Ivona traga za postupcima prevazilaženja fizičke dimenzije. Naglašen je značaj procesa pripreme umetnika za fazu stvaranja, tokom koje kreator neminovno projektuje svoje stanje svesti, dok u daljoj komunikaciji sa posmatračem snaga duha oličena u slici se transformiše u apsolutno prisustvo koje dotiče ljudsku suštinu i omogućava preobražaj. Telo svodi na instrument za dostizanje novih nivoa svesti, oslobađanje duše, usavršavanja vrlina u težnji ka najvišem dobru.',
                                    ENG: 'Starting from self-knowledge, studying religious-philosophical debates about time, being and existence, practicing different techniques of contemplative practice, these are the ways that Ivona searches for ways to overcome the physical dimension. The importance of the process of preparing the artist for the creation phase is emphasized, during which the creator inevitably projects his state of consciousness, while in further communication with the observer, the spirit power embodied in the image is transformed into an absolute presence that touches the human essence and enables transformation. It reduces the body to an instrument for reaching new levels of consciousness, freeing the soul, perfecting virtues in the pursuit of the highest good.',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'contained_image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'inverted_quote',
                                WIDTH: 783,
                                TEXT: {
                                    SER: 'Širon IDENTITET, Gabrijel STVARANJE, Ivona SAOSEĆAJNOST, Lazar PROMENA, Srki ISTRAJNOST, Pal RAD, Tasja SREĆA, Verona BLAGOST, Ranko UM, Orlando REALIZACIJA i Ksenija Lea LJUBAV koja se javlja u dva oblika.',
                                    ENG: 'Shiron IDENTITY, Gabriel CREATION, Ivona COMPASSION, Lazar CHANGE, Srki PERSISTENCE, Pal WORK, Tasja HAPPINESS, Verona GENTLENESS, Ranko THE MIND, Orlando REALISATION and Ksenia Lea LOVE which appears in two forms.',
                                },
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 577,
                                ALT: 'exhibition-view',
                                SRC: exhibition11Snaga2,
                            },
                        ],
                        [
                            {
                                TYPE: 'image',
                                MAX_HEIGHT: 561,
                                ALT: 'exhibition-view-wide',
                                SRC: exhibition11Snaga3,
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT:{
                                    SER: 'Kritički odnos usmeren je ka pojedincu od koga zavisi napredak kolektivne svesti, svesnost o individualnom nivou koji dotiče duh univerzuma i doprinosi redu i harmoniji. Poput stvaralaštva Zanga Ksiaoganga, kineskog umetnika čija dela nastaju u atmosferi kulturno političke krize 60-ih i 70-ih godina XX veka uz osećaj sputanosti pojedinca od strane tradicije i represivnog režima, Ivona pravi otklon od socijalnih tema prostora u kome egzistira i okreće se otkrivanju iskonskih ljudskih identiteta koje smatra nužnim za opstanak.',
                                    ENG: 'The critical relationship is directed towards the individual on whom the progress of the collective consciousness depends, the awareness of the individual level that touches the spirit of the universe and contributes to order and harmony. Like the work of Zhang Xiaogang, a Chinese artist whose works were created in the atmosphere of the cultural and political crisis of the 60s and 70s of the 20th century with the feeling of the individual being constrained by tradition and a repressive regime, Yvona makes a departure from the social themes of the space in which she exists and turns to discovering primordial human identities that he considers necessary for survival.'
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: '11 SNAGA su bića poslata iz središa Univerzuma i manifestovana na planeti Zemlji, materijalizovana rađanjem 11 divova datih čovečanstvu, simboličnih nosilaca pojmova koji su im dodeljeni na osnovu dominantnih osobina koje čine njihovu moć.',
                                    ENG: 'The 11 SNAGA are beings sent from the center of the Universe and manifested on planet Earth, materialized by the birth of 11 giants given to humanity, symbolic bearers of terms assigned to them based on the dominant features that make up their power.',
                                }
                            },
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Likovi koje Ivona prenosi na slike i grafike prema doživljaju linearnog protoka vremena nisu savremenici, oni se upoznaju kroz osećaj povezanosti univerzalnim vremenom koje briše razlike između prošlog i budućeg, u apsolutnom jedinstvu sa trenutkom potire se prolaznost, a osećaj za vreme prestaje da postoji jer smo transformisani u čistu svest u vanvremenu i vanprostoru – momentu koji je večan, baš kao i sama svest.',
                                    ENG: 'The characters that Ivona transfers to pictures and graphics according to the experience of the linear passage of time are not contemporaries, they are known through a sense of connection with universal time that erases the differences between the past and the future, in absolute unity with the moment, transience is erased, and the sense of time ceases to exist because we transformed into pure consciousness outside time and space – a moment that is eternal, just like consciousness itself.',
                                },
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                WIDTH: 511,
                                MAX_HEIGHT: 448,
                                ALT: 'exhibition-view-medium',
                                SRC: exhibition11Snaga4,
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 929,
                                MAX_HEIGHT: 448,
                                ALT: 'exhibition-view-medium',
                                SRC: exhibition11Snaga5,
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Dolazak snaga na Zemlju uzburkava vibracije u atmosferi, kontakt sa tlom planete stvara snažan potres, energetske strune se pokreću i melodični zvuci šire, objavljuju da je život snage na Zemlji počeo. Zvučni efekti koji prate izložbu potiču iz prirode, delo su autora Vladimira Živkovića (dizajner zvuka) i Marijane Dujović (muzikolog), dati u vidu kratke muzičke numere čine skup konkretnih i generisanih zvukova uz melodijsko-ritmičke delove koji su odsvirani na različitim instrumentima.',
                                    ENG: 'The arrival of forces on Earth stirs up vibrations in the atmosphere, contact with the ground of the planet creates a powerful tremor, energy strings are set in motion and melodious sounds spread, announcing that the life of the force on Earth has begun. The sound effects that accompany the exhibition come from nature, they are the work of Vladimir Živković (sound designer) and Marijana Dujović (musicologist), given in the form of short musical tracks, they form a set of concrete and generated sounds with melodic and rhythmic parts played on different instruments.',
                                }
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Marijana Dujović navodi da je muzika inspirisana slikama osmišljena kao zvuk onostranog prostora koji snage donose sa sobom na našu planetu. Muzika doprinosi apsorbovanju unutrašnje atmosfere, spoj nestvorenog sa prisutnim kroz doživljaj harmonije Sunčevog i mističnog dolazećeg svetla.',
                                    ENG: 'Marijana Dujović states that the music inspired by images is designed as the sound of other space that the forces bring with them to our planet. Music contributes to the absorption of the inner atmosphere, the union of the uncreated with the present through the experience of the harmony of the Sun and the mystical incoming light.',
                                }
                            },
                        ],
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Vizualizacija duhovne dimenzije prosvetljenja sugeriše promenu i beleži trenutak koji sublimira vreme u beskonačnost, istovremeno objedinjuje kretanje i apsolutni mir, u kome se sve događa ali i prestaje u sinergiji uma, tela i duha.',
                                    ENG: 'The visualization of the spiritual dimension of enlightenment suggests change and captures a moment that sublimates time into infinity, simultaneously uniting movement and absolute peace, in which everything happens but also ceases in the synergy of mind, body and spirit.',
                                }
                            },
                            {
                                TYPE: 'quote',
                                TEXT: {
                                    SER: 'Fokus je na očima, medijuma razmene energije, koji efekatom ogledala uvodi u introspekciju apsorbujući okolne senzacije, dok je istovremeno slika sredstvo komunikacije sa umetnikom i nagoveštava njegovo prisustvo.',
                                    ENG: 'The focus is on the eyes, the medium of energy exchange, which with the effect of a mirror leads to introspection by absorbing the surrounding sensations, while at the same time the painting is a means of communication with the artist and hints at his presence.',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'inverted_text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Filozofija zen budizma inspirisala je Ivonin rad na više nivoa, prevashodno se odnosi na način na koji umetnica stupa u odnos sa svetom kroz samospoznaju odnosno uvid, putem koga preobražava portretisane emotivnim i duhovnim procesima sopstvenog bića. U radu je prisutna redukcija, nema prostorne odrednice u pozadini slike koja bi ometala pogled, već ukazuje na prazninu, metafizičku dimenziju prostora i vremena u kojoj se prošlost, sadašnjost i budućnost sažimaju u kružnom kretanju večnosti.',
                                    ENG: 'The philosophy of Zen Buddhism inspired Yvonne\'s work on several levels, primarily related to the way in which the artist enters into a relationship with the world through self-knowledge, i.e. insight, through which she transforms the portrayed through the emotional and spiritual processes of her own being. Reduction is present in the work, there is no spatial determinant in the background of the picture that would obstruct the view, but it points to the void, the metaphysical dimension of space and time in which the past, present and future are condensed in the circular movement of eternity.',
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'Praznina je nezavisni entitet, usmerava akcenat na aktere platna i njihovu energiju u kojoj svetlost proizilazi iz same monohromne pozadine. Ekspresija pokreta u procesu stvaranja u Ivoninom radu kreira energetske vibracije nanosima boja, što se manifestuje treperenjem kontrasta u igri svetlosti i senki, transferom energetskog polja od stvaraoca ka posmatraču koje uspostavlja prisustvo duha. Uvođenje mistične svetlosti van funkcije optičkog fenomena na ravnu površinu slike predstavlja polje sile koje emituje senzacije izvan čulnosti, nagoveštava komunikaciju bića na nivou duše.',
                                    ENG: 'The void is an independent entity, it directs the accent to the actors of the canvas and their energy in which the light emanates from the monochrome background itself. The expression of movement in the process of creation in Yvonne\'s work creates energy vibrations with the application of colors, which is manifested by flickering contrasts in the play of light and shadows, by the transfer of the energy field from the creator to the observer, which establishes the presence of the spirit. The introduction of mystical light beyond the function of an optical phenomenon onto the flat surface of the picture represents a field of force that emits sensations beyond sensibility, hinting at the communication of beings at the level of the soul.',
                                },
                            },
                        ]
                    ]
                }
            ]
        }
    },
    MURAL_LIFE: {
        ID: 3,
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
                ID: 'works',
                TITLE: {
                    SER: "Radovi",
                    ENG: 'Works',
                },
                LINK: 'works'
            },
            {
                ID: 'exhibition',
                TITLE: {
                    SER: 'Mural, Life',
                    ENG: 'Mural, Life'
                },
                LINK: 'articles/3'
            },
        ],
        COVER: {
            TITLE: {
                SER: 'MURAL, LIFE',
                ENG: 'MURAL, LIFE',
            },
            AUTHOR: {
                SER: 'Autor murala: Ivona Pleskonja',
                ENG: 'Mural author: Ivona Pleskonja'
            },
            YEAR: 2020,
            TEXT: {
                SER: 'Mural LIFE posvećen je vremenu u kome živimo. Ove monumentalne slike jedinstva ljudi, životinja i biljaka u urbanoj sredini pozivaju na našu povezanost sa prirodom i duboki značaj našeg jedinstva.',
                ENG: 'Mural LIFE is dedicated to the time we live in. These vivid monumental images of the unity of humans, animals and plants in the urban environment call for our connection with nature and the profound importance of our collectiveness.'
            },
            IMAGE: {
                MAX_HEIGHT: 574,
                ALT: 'exhibition-cover',
                SRC: muralLife1,
            },
            EXTERNAL_LINK: {
                URL: '',
                LABEL: {
                    SER: 'POGLEDAJ CEO INTERVJU OVDE',
                    ENG: 'WATCH INTERVIEW HERE'
                }
            },
        },
        SECTIONS: {
            MOBILE: [
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'U ovom jedinstvu svih živih bića, zauvek su uklonjene geografske, vremenske, društvene i duhovne odvojenosti. Mural je posvećen našem zajedničkom životu na planeti Zemlji. Snaga života za sva živa bića, biljke, životinje, ljude i životni nektar, podržana je energijom oko nas za naše veće dobro. Poštujući prirodu, vraćamo snagu, nežnost, ljubav i osveženje u naš urbani stil života.',
                                    ENG: 'We are all interconnected, through our lives and in nature. In this unity of all living beings, geographical, temporal, social and spiritual detachments are removed forever. Mural is dedicated to our shared life on planet Earth. The power of life for all living beings, plants, animals, humans and life nectar, is supported by the energy around us for our greater good.',
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: '',
                                    ENG: 'In respect to nature we are bringing back our strength, tenderness, love and refreshes to our urban lifestyle.',
                                },
                            }
                        ],
                    ]
                },
                {
                    TYPE: 'carousel',
                    SLIDES: [
                        {
                            SRC: muralLifeSlide1,
                            ALT: 'mural-life-slide-1',
                        },
                        {
                            SRC: muralLifeSlide2,
                            ALT: 'mural-life-slide-2',
                        },
                        {
                            SRC: muralLifeSlide3,
                            ALT: 'mural-life-slide-3',
                        },
                        {
                            SRC: muralLifeSlide4,
                            ALT: 'mural-life-slide-4',
                        },
                        {
                            SRC: muralLifeSlide5,
                            ALT: 'mural-life-slide-5',
                        },
                        {
                            SRC: muralLifeSlide6,
                            ALT: 'mural-life-slide-6',
                        },
                        {
                            SRC: muralLifeSlide7,
                            ALT: 'mural-life-slide-7',
                        },
                        {
                            SRC: muralLifeSlide8,
                            ALT: 'mural-life-slide-8',
                        },
                        {
                            SRC: muralLifeSlide9,
                            ALT: 'mural-life-slide-9',
                        },
                    ]
                },
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'quote',
                                TEXT: {
                                    SER: 'Svi smo jednaki i svi smo jedna porodica. Ova monumentalna slika je moj doprinos našem jedinstvu na planeti Zemlji i životu.',
                                    ENG: 'We are all equal and we are all one family. This monumental painting is my contribution to our unity on this planet Earth and to this life.',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'image_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'image',
                                WIDTH: 100,
                                ALT: 'exhibition-view',
                                SRC: muralLife2,
                            },
                            {
                                TYPE: 'inverted_text_grid',
                                CLASS_NAME: 'overflow-hidden w-full flex flex-row justify-between text-[16px] leading-[100%] tracking-[.15em] font-light italic -mt-0 max-md:pr-0',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px]',
                                            TEXT: {
                                                SER: "Asistenti slikari:",
                                                ENG: "Assistant painters:"
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px]',
                                            TEXT: {
                                                SER: "Bojan Dimić",
                                                ENG: "Bojan Dimić",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Relja Banović",
                                                ENG: "Relja Banović",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "David Radonjić",
                                                ENG: "David Radonjić",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Leonora Ćormarković",
                                                ENG: "Leonora Ćormarković",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Ananije Bešović",
                                                ENG: "Ananije Bešović",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Jovan Ivanov",
                                                ENG: "Jovan Ivanov",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Milica Ljubić",
                                                ENG: "Milica Ljubić",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Sofija Vujić",
                                                ENG: "Sofija Vujić",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Marija Solujić",
                                                ENG: "Marija Solujić",
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'w-[192px] -mt-[18px]',
                                            TEXT: {
                                                SER: "Ljubica Jovanović",
                                                ENG: "Ljubica Jovanović",
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            TYPE: 'image',
                                            CLASS_NAME: 'relative max-sm:w-[246px] max-sm:h-[180px]',
                                            ALT: 'exhibition-view',
                                            SRC: muralLife4,
                                        },
                                    ]
                                ]
                            }
                        ],
                        [
                            {
                                TYPE: 'image',
                                MAX_HEIGHT: 561,
                                ALT: 'exhibition-view-wide',
                                SRC: muralLife3,
                            },
                        ],
                        [
                            {
                                TYPE: 'text_grid',
                                CLASS_NAME: 'pb-5',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'text-primaryBlue',
                                            TEXT: {
                                                SER: 'MURAL LIFE, 7 x 30 m, fasadna boja na zidu, 2021.',
                                                ENG: 'MURAL LIFE, 7 x 30 m, facade paint on the wall, 2021.',
                                            }
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'text-primaryBlue -mt-5',
                                            TEXT: {
                                                SER: 'Skyline, Sarajevska ulica, Beograd',
                                                ENG: 'Skyline, Sarajevska Street, Belgrade',
                                            }
                                        },
                                    ]
                                ]
                            },
                        ],

                    ]
                },
                {
                    TYPE: 'image',
                    ALT: 'exhibition-view-wide',
                    SRC: muralLife5,
                },
                {
                    TYPE: 'inverted_text_grid',
                    CLASS_NAME: '-mt-0 pb-20',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                CLASS_NAME: 'text-[26px] leading-[100%] tracking-[.15em]',
                                TEXT: {
                                    SER: "Posenba zahvalnost:",
                                    ENG: "Special thanks:",
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: "Skyline, Beograd",
                                    ENG: "Skyline, Beograd",
                                },
                            },
                            {
                                TYPE: 'text',
                                CLASS_NAME: '-mt-5',
                                TEXT: {
                                    SER: "Ksenija Lea Ronai",
                                    ENG: "Ksenija Lea Ronai",
                                },
                            },
                            {
                                TYPE: 'text',
                                CLASS_NAME: '-mt-5',
                                TEXT: {
                                    SER: "Srđan Rusić",
                                    ENG: "Srđan Rusić",
                                },
                            }
                        ]
                    ]
                }
            ],
            DESKTOP: [
                {
                    TYPE: 'text_grid',
                    CONTENT: [
                        [
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: 'U ovom jedinstvu svih živih bića, zauvek su uklonjene geografske, vremenske, društvene i duhovne odvojenosti. Mural je posvećen našem zajedničkom životu na planeti Zemlji. Snaga života za sva živa bića, biljke, životinje, ljude i životni nektar, podržana je energijom oko nas za naše veće dobro. Poštujući prirodu, vraćamo snagu, nežnost, ljubav i osveženje u naš urbani stil života.',
                                    ENG: 'We are all interconnected, through our lives and in nature. In this unity of all living beings, geographical, temporal, social and spiritual detachments are removed forever. Mural is dedicated to our shared life on planet Earth. The power of life for all living beings, plants, animals, humans and life nectar, is supported by the energy around us for our greater good.',
                                },
                            },
                            {
                                TYPE: 'text',
                                TEXT: {
                                    SER: '',
                                    ENG: 'In respect to nature we are bringing back our strength, tenderness, love and refreshes to our urban lifestyle.',
                                },
                            }
                        ],
                        [
                            {
                                TYPE: 'quote',
                                CLASS_NAME: 'flex items-center justify-center',
                                TEXT: {
                                    SER: 'Svi smo jednaki i svi smo jedna porodica. Ova monumentalna slika je moj doprinos našem jedinstvu na planeti Zemlji i životu.',
                                    ENG: 'We are all equal and we are all one family. This monumental painting is my contribution to our unity on this planet Earth and to this life.',
                                }
                            }
                        ]
                    ]
                },
                {
                    TYPE: 'carousel',
                    SLIDES: [
                        {
                            SRC: muralLifeSlide1,
                            ALT: 'mural-life-slide-1',
                        },
                        {
                            SRC: muralLifeSlide2,
                            ALT: 'mural-life-slide-2',
                        },
                        {
                            SRC: muralLifeSlide3,
                            ALT: 'mural-life-slide-3',
                        },
                        {
                            SRC: muralLifeSlide4,
                            ALT: 'mural-life-slide-4',
                        },
                        {
                            SRC: muralLifeSlide5,
                            ALT: 'mural-life-slide-5',
                        },
                        {
                            SRC: muralLifeSlide6,
                            ALT: 'mural-life-slide-6',
                        },
                        {
                            SRC: muralLifeSlide7,
                            ALT: 'mural-life-slide-7',
                        },
                        {
                            SRC: muralLifeSlide8,
                            ALT: 'mural-life-slide-8',
                        },
                        {
                            SRC: muralLifeSlide9,
                            ALT: 'mural-life-slide-9',
                        },
                    ]
                },
                {
                    TYPE: 'image_grid',
                    CLASS_NAME: 'pt-0 md:pt-0',
                    CONTENT: [
                        [
                            {
                                TYPE: 'inverted_quote',
                                WIDTH: 38,
                                CLASS_NAME: 'md:text-[26px] font-light tracking-[.15em]',
                                TEXT: {
                                    SER: "Asistenti slikari:  <br/>" +
                                        "<br />" +
                                        "Bojan Dimić <br/>" +
                                        "Relja Banović  <br/>" +
                                        "David Radonjić  <br/>" +
                                        "Leonora Ćormarković  <br/>" +
                                        "Ananije Bešović  <br/>" +
                                        "Jovan Ivanov  <br/>" +
                                        "Milica Ljubić  <br/>" +
                                        "Sofija Vujić  <br/>" +
                                        "Marija Solujić  <br/>" +
                                        "Ljubica Jovanović",
                                    ENG: "Assistant painters:  <br/>" +
                                        "<br />" +
                                        "Bojan Dimić <br/>" +
                                        "Relja Banović  <br/>" +
                                        "David Radonjić  <br/>" +
                                        "Leonora Ćormarković  <br/>" +
                                        "Ananije Bešović  <br/>" +
                                        "Jovan Ivanov  <br/>" +
                                        "Milica Ljubić  <br/>" +
                                        "Sofija Vujić  <br/>" +
                                        "Marija Solujić  <br/>" +
                                        "Ljubica Jovanović",
                                },
                            },
                            {
                                TYPE: 'image',
                                WIDTH: 62,
                                ALT: 'exhibition-view',
                                SRC: muralLife2,
                            },
                        ],
                        [
                            {
                                TYPE: 'text_grid',
                                CLASS_NAME: 'pb-10',
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'quote',
                                            CENTERED: true,
                                            TEXT: {
                                                SER: 'MURAL LIFE, 7 x 30 m, fasadna boja na zidu, 2021.',
                                                ENG: 'MURAL LIFE, 7 x 30 m, facade paint on the wall, 2021.',
                                            }
                                        },
                                        {
                                            TYPE: 'quote',
                                            CENTERED: true,
                                            TEXT: {
                                                SER: 'Skyline, Sarajevska ulica, Beograd',
                                                ENG: 'Skyline, Sarajevska Street, Belgrade',
                                            }
                                        },
                                    ]
                                ]
                            },
                        ],
                        [
                            {
                                TYPE: 'image',
                                MAX_HEIGHT: 561,
                                ALT: 'exhibition-view-wide',
                                SRC: muralLife3,
                            },
                        ]
                    ]
                },
                {
                    TYPE: 'contained_image_grid',
                    STYLE: {
                        paddingTop: '0',
                        position: 'relative',
                    },
                    CONTENT: [
                        [
                            {
                                TYPE: 'inverted_text_grid',
                                CLASS_NAME: "w-[351px] right-[0px] bottom-[0px] flex flex-col text-[16px] md:px-[50px] md:py-[50px] absolute tracking-[.15em]",
                                CONTENT: [
                                    [
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: 'text-[26px] leading-[100%] tracking-[.15em]',
                                            TEXT: {
                                                SER: "Posenba zahvalnost:",
                                                ENG: "Special thanks:"
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            TEXT: {
                                                SER: "Skyline, Beograd",
                                                ENG: "Skyline, Beograd"
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: '-mt-5',
                                            TEXT: {
                                                SER: "Ksenija Lea Ronai",
                                                ENG: "Ksenija Lea Ronai"
                                            },
                                        },
                                        {
                                            TYPE: 'text',
                                            CLASS_NAME: '-mt-5',
                                            TEXT: {
                                                SER: "Srđan Rusić",
                                                ENG: "Srđan Rusić",
                                            },
                                        },
                                    ]
                                ]
                            }
                        ]
                    ]
                },
            ],
        }
    },
});

export function getExhibitionById(id: number) {
    return Object.values(PAGE_CONTENT).find((exhibition) => exhibition.ID === id);
}
