import { IMyWorks } from "@/types/types";
// CREATING OF LIGHT
import IVFull from "@/public/images/creating-of-light/IV-full.png";
import IVPreview from "@/public/images/creating-of-light/IV-preview.png";
import holyDustFull from "@/public/images/creating-of-light/holy-dust-full.png";
import holyDustPreview from "@/public/images/creating-of-light/holy-dust-preview.png";
import creatingLifeFull from "@/public/images/creating-of-light/creating-life-full.png";
import creatingAngelFull from "@/public/images/creating-of-light/creating-angel-full.png";
import gabrielAndPanFull from "@/public/images/creating-of-light/gabriel-and-pan-full.png";
import skyOverPanamaFull from "@/public/images/creating-of-light/sky-over-panama-full.png";
import creatingLifePreview from "@/public/images/creating-of-light/creating-life-preview.png";
import mahavatarBabajiFull from "@/public/images/creating-of-light/mahavatar-babaji-full.png";
import creatingAngelPreview from "@/public/images/creating-of-light/creating-angel-preview.png";
import gabrielAndPanPreview from "@/public/images/creating-of-light/gabriel-and-pan-preview.png";
import skyOverPanamaPreview from "@/public/images/creating-of-light/sky-over-panama-preview.png";
import mahavatarBabajiPreview from "@/public/images/creating-of-light/mahavatar-babaji-preview.png";
// 11 POWERS
import palWork from '@/public/images/eleven-powers/pal-work.png';
import lazarChange from '@/public/images/eleven-powers/lazar-change.png';
import palWorkThumb from '@/public/images/eleven-powers/pal-work-thumb.png';
import palWorkGraph from '@/public/images/eleven-powers/pal-work-graph.png';
import rankoTheMind from '@/public/images/eleven-powers/ranko-the-mind.png';
import chironIdentity from '@/public/images/eleven-powers/chiron-identity.png';
import tasjaHappiness from '@/public/images/eleven-powers/tasja-happiness.png';
import gabrielCreation from '@/public/images/eleven-powers/gabriel-creation.png';
import srkiPersistence from '@/public/images/eleven-powers/srki-persistence.png';
import ivonaCompassion from '@/public/images/eleven-powers/ivona-compassion.png';
import veronaGentleness from '@/public/images/eleven-powers/verona-gentleness.png';
import lazarChangeGraph from '@/public/images/eleven-powers/lazar-change-graph.png';
import lazarChangeThumb from '@/public/images/eleven-powers/lazar-change-thumb.png';
import rankoTheMindThumb from '@/public/images/eleven-powers/ranko-the-mind-thumb.png';
import palWorkGraphThumb from '@/public/images/eleven-powers/pal-work-graph-thumb.png';
import rankoTheMindGraph from '@/public/images/eleven-powers/ranko-the-mind-graph.png';
import orlandoRealisation from '@/public/images/eleven-powers/orlando-realisation.png';
import tasjaHappinessThumb from '@/public/images/eleven-powers/tasja-happiness-thumb.png';
import chironIdentityThumb from '@/public/images/eleven-powers/chiron-identity-thumb.png';
import chironIdentityGraph from '@/public/images/eleven-powers/chiron-identity-graph.png';
import tasjaHappinessGraph from '@/public/images/eleven-powers/tasja-happiness-graph.png';
import gabrielCreationThumb from '@/public/images/eleven-powers/gabriel-creation-thumb.png';
import srkiPersistenceThumb from '@/public/images/eleven-powers/srki-persistence-thumb.png';
import ivonaCompassionThumb from '@/public/images/eleven-powers/ivona-compassion-thumb.png';
import ivonaCompassionGraph from '@/public/images/eleven-powers/ivona-compassion-graph.png';
import gabrielCreationGraph from '@/public/images/eleven-powers/gabriel-creation-graph.png';
import srkiPersistenceGraph from '@/public/images/eleven-powers/srki-persistence-graph.png';
import veronaGentlenessThumb from '@/public/images/eleven-powers/verona-gentleness-thumb.png';
import veronaGentlenessGraph from '@/public/images/eleven-powers/verona-gentleness-graph.png';
import lazarChangeGraphThumb from '@/public/images/eleven-powers/lazar-change-graph-thumb.png';
import ksenijaLoveSmellsRose from '@/public/images/eleven-powers/ksenija-love-smells-rose.png';
import ksenijaLoveForEveryone from '@/public/images/eleven-powers/ksenija-love-for-everyone.png';
import rankoTheMindGraphThumb from '@/public/images/eleven-powers/ranko-the-mind-graph-thumb.png';
import orlandoRealisationThumb from '@/public/images/eleven-powers/orlando-realisation-thumb.png';
import orlandoRealisationGraph from '@/public/images/eleven-powers/orlando-realisation-graph.png';
import chironIdentityGraphThumb from '@/public/images/eleven-powers/chiron-identity-graph-thumb.png';
import tasjaHappinessGraphThumb from '@/public/images/eleven-powers/tasja-happiness-graph-thumb.png';
import ivonaCompassionGraphThumb from '@/public/images/eleven-powers/ivona-compassion-graph-thumb.png';
import gabrielCreationGraphThumb from '@/public/images/eleven-powers/gabriel-creation-graph-thumb.png';
import srkiPersistenceGraphThumb from '@/public/images/eleven-powers/srki-persistence-graph-thumb.png';
import veronaGentlenessGraphThumb from '@/public/images/eleven-powers/verona-gentleness-graph-thumb.png';
import ksenijaLoveSmellsRoseThumb from '@/public/images/eleven-powers/ksenija-love-smells-rose-thumb.png';
import ksenijaLoveSmellsRoseGraph from '@/public/images/eleven-powers/ksenija-love-smells-rose-graph.png';
import ksenijaLoveForEveryoneThumb from '@/public/images/eleven-powers/ksenija-love-for-everyone-thumb.png';
import orlandoRealisationGraphThumb from '@/public/images/eleven-powers/orlando-realisation-graph-thumb.png';
import weAreNotAloneTheLightIsHere from '@/public/images/eleven-powers/we-are-not-alone-the-light-is-here.png';
import ksenijaLoveSmellsRoseGraphThumb from '@/public/images/eleven-powers/ksenija-love-smells-rose-graph-thumb.png';
import weAreNotAloneTheLightIsHereThumb from '@/public/images/eleven-powers/we-are-not-alone-the-light-is-here-thumb.png';

export const PAGE_CONTENT = Object.freeze({
    TITLE: {
        SER: "MOJI RADOVI",
        ENG: "MY WORKS"
    },
    CONTENT: {
        SER: [
            { ID: 'creating_of_light', TITLE: '2023 Stvaranje svetla / Nežni smo rodjeni', DISABLED: false, LINK: null },
            { ID: 'mural_life', TITLE: '2020 mural,Life', DISABLED: false, LINK:'exhibitions/3' },
            { ID: '11_powers', TITLE: '2019 11 Snaga', DISABLED: false, LINK: null },
            { ID: 'strong_people', TITLE: '2016 Jaki ljudi', DISABLED: true, LINK: null },
            { ID: 'time_stations', TITLE: '2015 Vremenske stanice', DISABLED: true, LINK: null },
            { ID: 'children_of_the_sun', TITLE: '2014 Deca Sunca', DISABLED: true, LINK: null },
            { ID: 'spirit', TITLE: '2011 Duh', DISABLED: true, LINK: null },
            { ID: 'one_world', TITLE: '2009 Jedan Svet', DISABLED: true, LINK: null },
            { ID: 'the_source', TITLE: '2007 Izvor', DISABLED: true, LINK: null },
            { ID: 'heroes', TITLE: '2007 Heroji', DISABLED: true, LINK: null },
            { ID: 'le_soleil', TITLE: '2003 Le Soleil', DISABLED: true, LINK: null },
            { ID: 'the_first_light', TITLE: '2000 Prvo Svetlo', DISABLED: true, LINK: null },
            { ID: 'taki', TITLE: '2000 Taki', DISABLED: true, LINK: null },
        ],
        ENG: [
            { ID: 'creating_of_light', TITLE: '2023 Creating Of Light / We Are Born Tender', DISABLED: false, LINK: null },
            { ID: 'mural_life', TITLE: '2020 mural,Life', DISABLED: false, LINK: 'exhibitions/3' },
            { ID: '11_powers', TITLE: '2019 11 Powers', DISABLED: false, LINK: null },
            { ID: 'strong_people', TITLE: '2016 Strong People', DISABLED: true, LINK: null },
            { ID: 'time_stations', TITLE: '2015 Time Stations', DISABLED: true, LINK: null },
            { ID: 'children_of_the_sun', TITLE: '2014 Children of the Sun', DISABLED: true, LINK: null },
            { ID: 'spirit', TITLE: '2011 Spirit', DISABLED: true, LINK: null },
            { ID: 'one_world', TITLE: '2009 One World', DISABLED: true, LINK: null },
            { ID: 'the_source', TITLE: '2007 The Source', DISABLED: true, LINK: null },
            { ID: 'heroes', TITLE: '2007 Heroes', DISABLED: true, LINK: null },
            { ID: 'le_soleil', TITLE: '2003 Le Soleil', DISABLED: true, LINK: null },
            { ID: 'the_first_light', TITLE: '2000 The First Light', DISABLED: true, LINK: null },
            { ID: 'taki', TITLE: '2000 Taki', DISABLED: true, LINK: null },
        ]
    },
});

export const SUBPAGE_CONTENT = Object.freeze({
    CREATING_OF_LIFE: {
        ID: 'creating_of_light',
        EXHIBITION_ID: 1,
        TEMPLATE_ID: 'TEMPLATE_ID',
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
            {
                ID: 1,
                TITLE: null,
                CONTENT: [
                    [
                        {
                            ID: 1,
                            SRC: {
                                FULL: gabrielAndPanFull,
                                PREVIEW: gabrielAndPanPreview,
                            },
                            ALT: "gabriel-and-pan",
                            GRID_PLACES: 4,
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
                            GRID_PLACES: 1,
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
                            GRID_PLACES: 1,
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
                            GRID_PLACES: 2,
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
                            GRID_PLACES: 2,
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
                            GRID_PLACES: 1,
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
                            GRID_PLACES: 1,
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
                ]
            }
        ],
    },
    ELEVEN_POWERS: {
        ID: '11_powers',
        EXHIBITION_ID: 2,
        TEMPLATE_ID: 'TEMPLATE_ID',
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
                ID: '11_powers',
                TITLE: {
                    SER: '„11 snaga“',
                    ENG: '„11 powers“'
                },
                LINK: 'my_works/11_powers'
            },
        ],
        TITLE: {
            SER: '„11 Snaga“',
            ENG: '„11 Powers“'
        },
        DESCRIPTION: [
            {
                SER: 'Centar Univerzuma šalje na planetu Zemlju 11 snaga za čovečanstvo, 11 snaga materijalizovanih u 11 divova. Divovi se spuštaju na našu planetu jedan po jedan ovim redosledom: 1. Širon IDENTITET, 2. Gabriel STVARANJE, 3. Ivona SAOSEĆAJNOST, 4. Lazar PROMENA, 5. Srki ISTRAJNOST, 6. Pal RAD, 7. Tasja SREĆA, 8. Verona BLAGOST, 9. Ranko UM, 10. Orlando REALIZACIJA, 11. Ksenija Lea je materijalizacija snage LJUBAV i dolazi u dva oblika, LJUBAV 1 1 i LJUBAV 1 2. Spuštanje ovih snaga je praćeno prodornim zvucima koji se stvaraju u atmosferi. Prvi kontakt svake snage sa tlom naše planete je snažan i stvara potres, koji se vrlo brzo pretoči u najdivniju melogiju koja se širi po celoj planeti. Tada se može reći da je život te snage na Zemlji počeo. Snage su tu za celo čovečanstvo, a spuštene u centru Beograda pravo na izložbu 11 SNAGA. Dobrodošli svi!',
                ENG: 'Centar Univerzuma šalje na planetu Zemlju 11 snaga za čovečanstvo, 11 snaga materijalizovanih u 11 divova. Divovi se spuštaju na našu planetu jedan po jedan ovim redosledom: 1. Širon IDENTITET, 2. Gabriel STVARANJE, 3. Ivona SAOSEĆAJNOST, 4. Lazar PROMENA, 5. Srki ISTRAJNOST, 6. Pal RAD, 7. Tasja SREĆA, 8. Verona BLAGOST, 9. Ranko UM, 10. Orlando REALIZACIJA, 11. Ksenija Lea je materijalizacija snage LJUBAV i dolazi u dva oblika, LJUBAV 1 1 i LJUBAV 1 2. Spuštanje ovih snaga je praćeno prodornim zvucima koji se stvaraju u atmosferi. Prvi kontakt svake snage sa tlom naše planete je snažan i stvara potres, koji se vrlo brzo pretoči u najdivniju melogiju koja se širi po celoj planeti. Tada se može reći da je život te snage na Zemlji počeo. Snage su tu za celo čovečanstvo, a spuštene u centru Beograda pravo na izložbu 11 SNAGA. Dobrodošli svi!',
            },
            {
                SER: 'Ova izložba se sastoji iz dva dela: slike i grafike (litografije).',
                ENG: 'Ova izložba se sastoji iz dva dela: slike i grafike (litografije).',
            },
            {
                SER: 'Zapravo sam predstavila 11 snaga i svaku tu snagu sam i naslikala i nacrtala putem grafike. Postoji i treći važan segment ove izložbe a to je muzika koju su komponovali za svaku sliku posebno Vladimir Živković (iz grupe VIS Limunada) i Marijana Dujović.',
                ENG: 'Zapravo sam predstavila 11 snaga i svaku tu snagu sam i naslikala i nacrtala putem grafike. Postoji i treći važan segment ove izložbe a to je muzika koju su komponovali za svaku sliku posebno Vladimir Živković (iz grupe VIS Limunada) i Marijana Dujović. ',
            }
        ],
        GALLERY: [
            {
                ID: 1,
                TITLE: {
                    SER: 'Slike',
                    ENG: 'Paintings',
                },
                CONTENT: [
                    [
                        {
                            ID: 1,
                            SRC: {
                                FULL: chironIdentity,
                                PREVIEW: chironIdentityThumb,
                            },
                            ALT: "chiron-identity",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2018',
                                DIMENSIONS: '1.2 x 1.5 m',
                                NAME: {
                                    SER: 'CHIRON / IDENTITET' ,
                                    ENG: 'CHIRON / IDENTITY'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril i ulje na platnu',
                                    ENG: 'Acrylic and oil on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Širon je glavni lik u filmu Beri Dženkinsa, Mesečina. On je dečak koji je svojom snagom postao veći od najvećih problema u kojima je živeo. Postao je najveći srećni čovek! Predstavila sam ga u posebnom i osetljivom momentu u kome preispituje svoj identitet. Širon predstavlja snage svih identiteta koje nosimo u sebi i onih najosetljivijih delova bića koja su toliko ranjiva, a iz kojih zapravo izvire naša najveća snaga. Širon je došao da nam to kaže.',
                                    ENG: 'Chiron is the main character in Barry Jenkins\' movie Moonlight. He is a boy who, with his strength, became bigger than the biggest problems he lived in. He became the happiest man! I presented him in a special and sensitive moment in which he is questioning his identity. Chiron represents the strength of all the identities that we carry within us and those most sensitive parts of being that are so vulnerable, and from which our greatest strength actually springs. Shiron came to tell us that.'
                                },
                            }
                        },
                        {
                            ID: 2,
                            SRC: {
                                FULL: gabrielCreation,
                                PREVIEW: gabrielCreationThumb,
                            },
                            ALT: "gabriel-creation",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '1.2 x 1.5 m',
                                NAME: {
                                    SER: 'GABRIEL / STVARANJE' ,
                                    ENG: 'GABRIEL / CREATION'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril i ulje na platnu',
                                    ENG: 'Acrylic and oil on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Gabrielova radost nas pokreće na igru. Radost i igra su najave da će se stvoriti nešto novo, nešto što svet još nije video. Novostvoreno budi novu radost koja nas opet dalje pokreće na novo stvaranje. Hvala ti Gabriele!',
                                    ENG: 'Gabriel\'s joy drives us to play. Joy and play are announcements that something new will be created, something the world has not yet seen. The newly created awakens a new joy that moves us further to new creation. Thank you Gabriel!'
                                },
                            }
                        },
                        {
                            ID: 3,
                            SRC: {
                                FULL: ivonaCompassion,
                                PREVIEW: ivonaCompassionThumb,
                            },
                            ALT: "ivona-compassion",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '1.2 x 1.5 m',
                                NAME: {
                                    SER: 'IVONA / SAOSEĆAJONST' ,
                                    ENG: 'IVONA / COMPASSION'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Gledam te tvojim očima. Osećam te tvojim srcem. Ti si ja. Ja sam ti. Gledaš me mojim očima. Osećaš me mojim srcem. Svi smo jedno.',
                                    ENG: 'I look at you with your eyes. I feel you with your heart. You are me. I am you. You look at me with my eyes. You feel me with my heart. We are all one.'
                                },
                            }
                        },
                        {
                            ID: 4,
                            SRC: {
                                FULL: ksenijaLoveForEveryone,
                                PREVIEW: ksenijaLoveForEveryoneThumb,
                            },
                            ALT: "ksenija-love-for-everyone",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'KSENIJA LEA / LJUBAV ZA SVE' ,
                                    ENG: 'KSENIJA LEA / LOVE FOR EVERYONE'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Ksenija Lea kaže: “Ljubav za sve u svim pravcima.” Ljubav je i Vera. Ljubav je i Mir. Ljubav je Prisutnost sada ovde zauvek i svuda. Ljubav nas je stvorila. Živela Ljubav!',
                                    ENG: 'Ksenia Lea says: "Love for everyone in all directions." Love is also Faith. Love is also Peace. Love is Presence now here forever and everywhere. Love created us. Long live Love!'
                                },
                            }
                        },

                    ],
                    [
                        {
                            ID: 5,
                            SRC: {
                                FULL: ksenijaLoveSmellsRose,
                                PREVIEW: ksenijaLoveSmellsRoseThumb,
                            },
                            ALT: "ksenija-love-smells-a-rose",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'KSENIJA LEA / LJUBAV MIRIŠE RUŽU' ,
                                    ENG: 'CHIRON / LOVE SMELLS A ROSE'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Ljubav miriše ružu. Ljubav nežno hoda po laticama. Ljubav je živa. Njeno ime je Ljubav.',
                                    ENG: 'Love smells like a rose. Love walks gently on the petals. Love is alive. Her name is Love.'
                                },
                            }
                        },
                        {
                            ID: 6,
                            SRC: {
                                FULL: weAreNotAloneTheLightIsHere,
                                PREVIEW: weAreNotAloneTheLightIsHereThumb,
                            },
                            ALT: "we-are-not-alone-the-light-is-here",
                            GRID_PLACES: 3,
                            DETAILS: {
                                CREATED_AT: '2023',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'NISMO SAMI / SVETLOST JE TU' ,
                                    ENG: 'WE ARE NOT ALONE / THE LIGHT IS HERE'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: '',
                                    ENG: ''
                                },
                            }
                        },
                    ],
                    [
                        {
                            ID: 7,
                            SRC: {
                                FULL: orlandoRealisation,
                                PREVIEW: orlandoRealisationThumb,
                            },
                            ALT: "orlando-realisation",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'ORLANDO / REALIZACIJA' ,
                                    ENG: 'ORLANDO / REALISATION'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Orlando je glavna ličnost u filmu Orlando, režiserke Seli Poter, koji je nastao po istoimenom romanu Virdžinije Vulf, a čiju ulogu u filmu tumači glumica Tilda Svinton, koju sam naslikala kao desetu snagu. Orlando je princ. Orlando je princeza. Orlando se realizuje kao princ. Orlando se realizuje kao princeza. Orlando to radi hrabro i lako.',
                                    ENG: 'Orlando is the main character in the film Orlando, directed by Sally Potter, which was based on Virginia Woolf\'s novel of the same name, and whose role in the film is played by actress Tilda Swinton, whom I painted as the tenth force. Orlando is a prince. Orlando is a princess. Orlando realizes himself as a prince. Orlando realizes herself as a princess. Orlando does it boldly and easily.'
                                },
                            }
                        },
                        {
                            ID: 8,
                            SRC: {
                                FULL: lazarChange,
                                PREVIEW: lazarChangeThumb,
                            },
                            ALT: "lazar-change",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'LAZAR / PROMENA' ,
                                    ENG: 'LAZAR / CHANGE'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Lazar je bokser koji pleše u ritmu celog sveta, gipko pleše kroz vreme. U svakom novom momentu je novi pokret i novi Lazar. On menja sebe u svetu koji se menja. On pleše sa promenama. Zbog toga mu je lepo.',
                                    ENG: 'Lazar is a boxer who dances to the rhythm of the whole world, gracefully dances through time. In every new moment there is a new movement and a new Lazar. He changes himself in a changing world. He dances with change. That\'s why he likes it.'
                                },
                            }
                        },
                        {
                            ID: 9,
                            SRC: {
                                FULL: palWork,
                                PREVIEW: palWorkThumb,
                            },
                            ALT: "pal-work",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'PAL / RAD' ,
                                    ENG: 'PAL / RAD'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Pal je sagradio pola Sente. Pal je sagradio i svoju kuću. Sam je naučio da zida. Učio je i druge kako da zidaju. Pal je sve stvorio svojim radom!',
                                    ENG: 'Pal built half of Senta. Pal also built his own house. He taught himself to build. He also taught others how to build. Pal created everything with his work!'
                                },
                            }
                        },
                        {
                            ID: 10,
                            SRC: {
                                FULL: rankoTheMind,
                                PREVIEW: rankoTheMindThumb,
                            },
                            ALT: "ranko-the-mind",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'RANKO / UM' ,
                                    ENG: 'RANKO / THE MIND '
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Um je bistar. Rankov um je Univerzum. Rankov um radi sa svetlostima koje isijavaju beskonačno mnogo boja. Boje se u svetlostima međusobno kombinuju i stvaraju nove spektre. Ranko otvara fotonske pakete i svojim rukama širi spektre po našem nebeskom svodu, po inteligenciji planete Zemlje. Ranko mi je pokazao kako to radi. Sada svima pokazuje kako um radi.',
                                    ENG: 'The mind is clear. Ranko\'s mind is the Universe. Ranko\'s mind works with lights that glow an infinite number of colors. Colors in light combine with each other and create new spectra. Ranko opens the photon packets and with his hands spreads the spectra across our firmament, according to the intelligence of the planet Earth. Ranko showed me how to do it. Now he\'s showing everyone how the mind works.'
                                },
                            }
                        }
                    ],
                    [
                        {
                            ID: 11,
                            SRC: {
                                FULL: tasjaHappiness,
                                PREVIEW: tasjaHappinessThumb,
                            },
                            ALT: "tasja-happiness",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'TASJA / SREĆA' ,
                                    ENG: 'TASJA / HAPPINESS'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Sreća je lepa, nežna, mudra, dobro organizovana. Sreća je prijatelj. Sreća je prijatna i nasmejana. Sreća je moja najveća sreća u životu. Sreća sluša muziku, voli veselu muziku sa radija. Sreća voli ljubav. Sreća voli dom. Sreća radi na sebi. Sreća ne prepušta sebe slučajnostima. Sreća je veoma dobro organizovana, organizovana Srećom.',
                                    ENG: 'Happiness is beautiful, gentle, wise, well organized. Happiness is a friend. Happiness is pleasant and smiling. Happiness is my greatest happiness in life. Happiness listens to music, likes cheerful music from the radio. Happiness loves love. Happiness loves home. Happiness works on itself. Happiness does not leave itself to chance. Happiness is very well organized, organized Luckily.'
                                },
                            }
                        },
                        {
                            ID: 12,
                            SRC: {
                                FULL: veronaGentleness,
                                PREVIEW: veronaGentlenessThumb,
                            },
                            ALT: "verona-gentleness",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'VERONA / BLAGOST' ,
                                    ENG: 'VERONA / GENTLENESS'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: 'Blagost kaže : “Nisam ni znala kako se nosi šešir.” Blagost, nežnost, ljubaznost, razumevanje... izviru iz nevinosti i čistote duše, izviru i prenose se osmehom dalje na ceo svet.',
                                    ENG: 'Gentleness says: "I didn\'t even know how to wear a hat." Gentleness, tenderness, kindness, understanding... spring from the innocence and purity of the soul, spring and spread with a smile to the whole world.'
                                },
                            }
                        },
                        {
                            ID: 13,
                            SRC: {
                                FULL: srkiPersistence,
                                PREVIEW: srkiPersistenceThumb,
                            },
                            ALT: "srki-persistence",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '2 x 1.5 m',
                                NAME: {
                                    SER: 'SRKI / ISTRAJNOST' ,
                                    ENG: 'SRKI / PERSISTENCE'
                                },
                                TECHNIQUE: {
                                    SER: 'Akril na platnu',
                                    ENG: 'Acrylic on canvas'
                                },
                                DESCRIPTION: {
                                    SER: '“Moja najveća snaga je istrajnost.”, kaže Srki. Srki je moj učitelj aikidoa. Srki je dete Save. Savom plove šleperi na kojima piše njegovo ime, Istrajni 1 i Istrajni 2. I ja sam dete Save. Zbog toga je Srki moj brat. Sava nas uči da budemo istrajni kao voda koja teče. Istrajni tok u jednom smeru omogućava ogromnom broju čestica informisanje tokom kretanja, informisanje i prenošenje informacija tamo gde su informacije potrebne. U procesu kretanja i informisanja, čestice dobijaju veliku snagu koju koriste za dalje kretanje. Tako funkcioniše istrajnost. Istrajnost je potrebna u životnim misijama i dugoročnim ciljevima. Istrajnost nas dovodi do ispunjenja misije. Hvala ti Istrajnosti! Hvala ti Srki, učitelju moj!',
                                    ENG: '"My greatest strength is perseverance," says Srki. Srki is my aikido teacher. Srki is Sava\'s child. Sava is sailed by tugboats with his name written on them, Istrajni 1 and Istrajni 2. I am also a child of Sava. That\'s why Srki is my brother. Sava teaches us to be persistent like flowing water. A continuous flow in one direction allows a huge number of particles to be informed while moving, informing and transmitting information where information is needed. In the process of movement and information, the particles get a lot of power, which they use for further movement. That\'s how perseverance works. Perseverance is needed in life\'s missions and long-term goals. Perseverance leads us to the fulfillment of the mission. Thank you Perseverance! Thank you Srki, my teacher!'
                                },
                            }
                        },
                        {
                            ID: 0,
                            SRC: null,
                            ALT: "",
                            GRID_PLACES: 1,
                            DETAILS: null,
                        },
                    ]
                ]
            },
            {
                ID: 2,
                TITLE: {
                    SER: 'Grafike/Litografije',
                    ENG: 'Graphics/Lithographs',
                },
                CONTENT: [
                    [
                        {
                            ID: 1,
                            SRC: {
                                FULL: chironIdentityGraph,
                                PREVIEW: chironIdentityGraphThumb,
                            },
                            ALT: "chiron-identity-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2018',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'CHIRON / IDENTITET',
                                    ENG: 'CHIRON / IDENTITY'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Širon je glavni lik u filmu Beri Dženkinsa, Mesečina. On je dečak koji je svojom snagom postao veći od najvećih problema u kojima je živeo. Postao je najveći srećni čovek! Predstavila sam ga u posebnom i osetljivom momentu u kome preispituje svoj identitet. Širon predstavlja snage svih identiteta koje nosimo u sebi i onih najosetljivijih delova bića koja su toliko ranjiva, a iz kojih zapravo izvire naša najveća snaga. Širon je došao da nam to kaže.',
                                    ENG: 'Chiron is the main character in Barry Jenkins\' movie Moonlight. He is a boy who, with his strength, became bigger than the biggest problems he lived in. He became the happiest man! I presented him in a special and sensitive moment in which he is questioning his identity. Chiron represents the strength of all the identities that we carry within us and those most sensitive parts of being that are so vulnerable, and from which our greatest strength actually springs. Shiron came to tell us that.'
                                },
                            }
                        },
                        {
                            ID: 2,
                            SRC: {
                                FULL: ksenijaLoveSmellsRoseGraph,
                                PREVIEW: ksenijaLoveSmellsRoseGraphThumb,
                            },
                            ALT: "ksenija-love-smells-a-rose-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'KSENIJA LEA / LJUBAV MIRIŠE RUŽU',
                                    ENG: 'KSENIJA / LOVE SMELLS A ROSE'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Ljubav miriše ružu. Ljubav nežno hoda po laticama. Ljubav je živa. Njeno ime je Ljubav.',
                                    ENG: 'Love smells like a rose. Love walks gently on the petals. Love is alive. Her name is Love.'
                                },
                            }
                        },
                        {
                            ID: 3,
                            SRC: {
                                FULL: orlandoRealisationGraph,
                                PREVIEW: orlandoRealisationGraphThumb,
                            },
                            ALT: "orlando-realisation-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'ORLANDO / REALIZACIJA',
                                    ENG: 'ORLANDO / REALISATION'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Orlando je glavna ličnost u filmu Orlando, režiserke Seli Poter, koji je nastao po istoimenom romanu Virdžinije Vulf, a čiju ulogu u filmu tumači glumica Tilda Svinton, koju sam naslikala kao desetu snagu. Orlando je princ. Orlando je princeza. Orlando se realizuje kao princ. Orlando se realizuje kao princeza. Orlando to radi hrabro i lako.',
                                    ENG: 'Orlando is the main character in the film Orlando, directed by Sally Potter, which was based on Virginia Woolf\'s novel of the same name, and whose role in the film is played by actress Tilda Swinton, whom I painted as the tenth force. Orlando is a prince. Orlando is a princess. Orlando realizes himself as a prince. Orlando realizes herself as a princess. Orlando does it boldly and easily.'
                                },
                            }
                        },
                    ],
                    [
                        {
                            ID: 4,
                            SRC: {
                                FULL: ivonaCompassionGraph,
                                PREVIEW: ivonaCompassionGraphThumb,
                            },
                            ALT: "ivona-compassion-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'IVONA / SAOSEĆAJONST',
                                    ENG: 'IVONA / COMPASSION'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Gledam te tvojim očima. Osećam te tvojim srcem. Ti si ja. Ja sam ti. Gledaš me mojim očima. Osećaš me mojim srcem. Svi smo jedno.',
                                    ENG: 'I look at you with your eyes. I feel you with your heart. You are me. I am you. You look at me with my eyes. You feel me with my heart. We are all one.'
                                },
                            }
                        },
                        {
                            ID: 5,
                            SRC: {
                                FULL: gabrielCreationGraph,
                                PREVIEW: gabrielCreationGraphThumb,
                            },
                            ALT: "gabriel-creation-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'GABRIEL / STVARANJE',
                                    ENG: 'GABRIEL / CREATION'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Gabrielova radost nas pokreće na igru. Radost i igra su najave da će se stvoriti nešto novo, nešto što svet još nije video. Novostvoreno budi novu radost koja nas opet dalje pokreće na novo stvaranje. Hvala ti Gabriele!',
                                    ENG: 'Gabriel\'s joy drives us to play. Joy and play are announcements that something new will be created, something the world has not yet seen. The newly created awakens a new joy that moves us further to new creation. Thank you Gabriel!'
                                },
                            }
                        },
                        {
                            ID: 6,
                            SRC: {
                                FULL: tasjaHappinessGraph,
                                PREVIEW: tasjaHappinessGraphThumb,
                            },
                            ALT: "tasja-happiness-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'TASJA / SREĆA',
                                    ENG: 'TASJA / HAPPINESS'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Sreća je lepa, nežna, mudra, dobro organizovana. Sreća je prijatelj. Sreća je prijatna i nasmejana. Sreća je moja najveća sreća u životu. Sreća sluša muziku, voli veselu muziku sa radija. Sreća voli ljubav. Sreća voli dom. Sreća radi na sebi. Sreća ne prepušta sebe slučajnostima. Sreća je veoma dobro organizovana, organizovana Srećom.',
                                    ENG: 'Happiness is beautiful, gentle, wise, well organized. Happiness is a friend. Happiness is pleasant and smiling. Happiness is my greatest happiness in life. Happiness listens to music, likes cheerful music from the radio. Happiness loves love. Happiness loves home. Happiness works on itself. Happiness does not leave itself to chance. Happiness is very well organized, organized Luckily.'
                                },
                            }
                        },
                    ],
                    [
                        {
                            ID: 7,
                            SRC: {
                                FULL: rankoTheMindGraph,
                                PREVIEW: rankoTheMindGraphThumb,
                            },
                            ALT: "ranko-the-mind-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'RANKO / UM',
                                    ENG: 'RANKO / THE MIND'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Um je bistar. Rankov um je Univerzum. Rankov um radi sa svetlostima koje isijavaju beskonačno mnogo boja. Boje se u svetlostima međusobno kombinuju i stvaraju nove spektre. Ranko otvara fotonske pakete i svojim rukama širi spektre po našem nebeskom svodu, po inteligenciji planete Zemlje. Ranko mi je pokazao kako to radi. Sada svima pokazuje kako um radi.',
                                    ENG: 'The mind is clear. Ranko\'s mind is the Universe. Ranko\'s mind works with lights that glow an infinite number of colors. Colors in light combine with each other and create new spectra. Ranko opens the photon packets and with his hands spreads the spectra across our firmament, according to the intelligence of the planet Earth. Ranko showed me how to do it. Now he\'s showing everyone how the mind works.'
                                },
                            }
                        },
                        {
                            ID: 8,
                            SRC: {
                                FULL: srkiPersistenceGraph,
                                PREVIEW: srkiPersistenceGraphThumb,
                            },
                            ALT: "srki-persistence-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'SRKI / ISTRAJNOST',
                                    ENG: 'SRKI / PERSISTENCE'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography',
                                },
                                DESCRIPTION: {
                                    SER: '“Moja najveća snaga je istrajnost.”, kaže Srki. Srki je moj učitelj aikidoa. Srki je dete Save. Savom plove šleperi na kojima piše njegovo ime, Istrajni 1 i Istrajni 2. I ja sam dete Save. Zbog toga je Srki moj brat. Sava nas uči da budemo istrajni kao voda koja teče. Istrajni tok u jednom smeru omogućava ogromnom broju čestica informisanje tokom kretanja, informisanje i prenošenje informacija tamo gde su informacije potrebne. U procesu kretanja i informisanja, čestice dobijaju veliku snagu koju koriste za dalje kretanje. Tako funkcioniše istrajnost. Istrajnost je potrebna u životnim misijama i dugoročnim ciljevima. Istrajnost nas dovodi do ispunjenja misije. Hvala ti Istrajnosti! Hvala ti Srki, učitelju moj!',
                                    ENG: '"My greatest strength is perseverance," says Srki. Srki is my aikido teacher. Srki is Sava\'s child. Sava is sailed by tugboats with his name written on them, Istrajni 1 and Istrajni 2. I am also a child of Sava. That\'s why Srki is my brother. Sava teaches us to be persistent like flowing water. A continuous flow in one direction allows a huge number of particles to be informed while moving, informing and transmitting information where information is needed. In the process of movement and information, the particles get a lot of power, which they use for further movement. That\'s how perseverance works. Perseverance is needed in life\'s missions and long-term goals. Perseverance leads us to the fulfillment of the mission. Thank you Perseverance! Thank you Srki, my teacher!'
                                },
                            }
                        },
                        {
                            ID: 9,
                            SRC: {
                                FULL: veronaGentlenessGraph,
                                PREVIEW: veronaGentlenessGraphThumb,
                            },
                            ALT: "verona-gentleness-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'VERONA / BLAGOST',
                                    ENG: 'VERONA / GENTLENESS'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Blagost kaže : “Nisam ni znala kako se nosi šešir.” Blagost, nežnost, ljubaznost, razumevanje... izviru iz nevinosti i čistote duše, izviru i prenose se osmehom dalje na ceo svet.',
                                    ENG: 'Gentleness says: "I didn\'t even know how to wear a hat." Gentleness, tenderness, kindness, understanding... spring from the innocence and purity of the soul, spring and spread with a smile to the whole world.'
                                },
                            }
                        },
                    ],
                    [
                        {
                            ID: 10,
                            SRC: {
                                FULL: lazarChangeGraph,
                                PREVIEW: lazarChangeGraphThumb,
                            },
                            ALT: "lazar-change-lithography",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'LAZAR / PROMENA',
                                    ENG: 'LAZAR / CHANGE'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Lazar je bokser koji pleše u ritmu celog sveta, gipko pleše kroz vreme. U svakom novom momentu je novi pokret i novi Lazar. On menja sebe u svetu koji se menja. On pleše sa promenama. Zbog toga mu je lepo.',
                                    ENG: 'Lazar is a boxer who dances to the rhythm of the whole world, gracefully dances through time. In every new moment there is a new movement and a new Lazar. He changes himself in a changing world. He dances with change. That\'s why he likes it.'
                                },
                            }
                        },
                        {
                            ID: 11,
                            SRC: {
                                FULL: palWorkGraph,
                                PREVIEW: palWorkGraphThumb,
                            },
                            ALT: "pal-work",
                            GRID_PLACES: 1,
                            DETAILS: {
                                CREATED_AT: '2019',
                                DIMENSIONS: '50 x 50 cm',
                                NAME: {
                                    SER: 'PAL / RAD',
                                    ENG: 'PAL / RAD'
                                },
                                TECHNIQUE: {
                                    SER: 'Litografija',
                                    ENG: 'Lithography'
                                },
                                DESCRIPTION: {
                                    SER: 'Pal je sagradio pola Sente. Pal je sagradio i svoju kuću. Sam je naučio da zida. Učio je i druge kako da zidaju. Pal je sve stvorio svojim radom!',
                                    ENG: 'Pal built half of Senta. Pal also built his own house. He taught himself to build. He also taught others how to build. Pal created everything with his work!'
                                },
                            }
                        },
                        {
                            ID: 0,
                            SRC: null,
                            ALT: "",
                            GRID_PLACES: 1,
                            DETAILS: null,
                        },
                    ]
                ]
            },
        ],
    },
});

export function getSubPageContentById(id: string): IMyWorks | undefined {
    return Object.values(SUBPAGE_CONTENT).find((PAGE) => PAGE.ID === id);
}
