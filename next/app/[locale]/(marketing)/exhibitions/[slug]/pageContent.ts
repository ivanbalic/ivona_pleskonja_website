import gabrielAndPan from '@/public/images/gabriel-and-pan-full.png';
import exhibitionCreatingOfLight1 from '@/public/images/exhibition-creating-of-light-1.png';
import exhibitionCreatingOfLight2 from '@/public/images/exhibition-creating-of-light-2.png';
import exhibitionCreatingOfLight3 from '@/public/images/exhibition-creating-of-light-3.png';
import exhibitionCreatingOfLight4 from '@/public/images/exhibition-creating-of-light-4.png';

export const PAGE_CONTENT = Object.freeze({
    CREATING_OF_LIFE: {
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
            {
                ID: 'exhibition',
                TITLE: {
                    SER: 'O izložbi',
                    ENG: 'About Exhibition',
                },
                LINK: 'exhibitions/1'
            }
        ],
        COVER_QUOTE: {
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
                SRC: gabrielAndPan,
                ALT: 'exhibition-cover',
            },
        },
        EXTERNAL_LINK: {
            URL: '#',
            LABEL: {
                SER: 'POGLEDAJ CEO INTERVJU OVDE',
                ENG: 'WATCH INTERVIEW HERE'
            }
        },
        ARTICLE:{
            TITLE: {
                ENG: 'Who is Ivona?',
                SER: 'Ko je Ivona?'
            },
            PARAGRAPHS: [
                {
                    SER: 'Umetnica koja istražuje samo biće i njegovu suštinu, koja ima priču za svaki predstavljeni lik kome gotovo sinestetički udahnjuje život uvodeći boju, oblik, reč i zvuk. Ona stvara živu sliku. Kroz cikluse koje razvija, prisutna je izuzetna težnja za skladom alegoričnost predstave, kontemplativnost momenta, ispitivanje fenomena prosvetljenja, monumentalnost kao način komunikacije i konačno filantropija kao zaboravljena veština.',
                    ENG: 'She\'s an artist who explores the very being and its essence. She has a story for each represented character. She almost synesthetically breathes in the breath of life into them, by introducing color, shape, word and sound. She creates a living painting. In her series of paintings, the artist strives for harmony through allegorical performance, by contemplating the moment, by examining the phenomenon of enlightenment, with monumentality as a way of communication and finally with philanthropy as a forgotten skill.',
                },
                {
                    SER: 'Duboko intuitivna, autorka istovremeno jača i ogoljuje svoja bića smeštajući ih u dubinu, za šta koristi najtamnije tonove plave. Simbolički to je boja intelekta, duhovnosti i introspekcije.',
                    ENG: 'Deeply intuitive, the author simultaneously empowers and exposes her creatures, by placing them in the depths. To attain that, she uses the darkest tones of blue.'
                },
                {
                    SER: 'Dubinom postignutom samo plavom autorka ostvaruje vanvremešnost, univerzalnost i metafizičku dimenziju kojom briše prostorne i vremenske okvire.',
                    ENG: 'Symbolically, blue is the color of intellect, spirituality and introspection. By using only the color blue, the author brings about depth, timelessness, universality and a metaphysical dimension that erases space and time. The primordial and ancient archetypes, found in the past and in the archaic, are fused with a being of the future a new, strong and wise one that will incarnate as the best version of the self.'
                },
                {
                    SER: 'Ona spaja arhetipe, iskonske i drevne, koje pronalazi u prošlosti i arhajskom i buduće, novo, snažno i mudro biće koje će se ovaplotiti kao najbolja verzija sopstva. Svako biće koje se nalazi pred nama rodeno je iz izvora, ideje i vizije, divovskih je razmera i androginog izgleda. Deo je kosmosa ali istovremeno čitav kosmos nosi u svom pogledu ili položaju tela.',
                    ENG: 'Every creature that we see before us, was born from a source, from an idea and from a vision. It is of gigantic proportions and is androgynous in appearance. It is part of the universe, but at the same time it carries the entire universe in the gaze of its eyes or in the position of its body.',
                },
                {
                    SER: 'Buđenjem polnog nagona i stvaranjem polova ugasila se svetlost koju su nosili ljudi, tada se svetlost sklonila sa planete Zemlje, a na nebu su se pojavili Sunce i Mesec. Ivona nas vraća korak nazad donoseći svetlost na Zemlju rađanjem savršenog, univerzalnog stvorenja.',
                    ENG: 'With the awakening of the sexual drive and the creation of the sexes, the light that people carried within was extinguished. It disappeared from the planer Earth, and the Sun and the Moon appeared in the sky. Ivona takes us a step back by invoking the light back to the Earth through creation of a perfect, universal creature.'
                },
                {
                    SER: 'Blještava svetlost koja se probija kroz ova bića ne bi se pokazala u svojoj snazi da nema dubine, tame, introspektivnog povlačenja. Ivona je slikarka buđenja; svi anđeli koji izranjaju iz tame doživljavaju rast, duhovnu spoznaju i susret sa vlastitim sopstvom koji je krajnja realnost. Fenomen mistične svetlosti jedan je od punktova gde umetnica posebno usmerava svoje interesovanje i ostvaruje još jedan vid komunikacije na neverbalnom, duhovnom nivou kroz profanu umetnost utemeljenu na ličnoj spiritualnosti.',
                    ENG: 'The dazzling light that shines through these beings would not be visible in all its power without the depth, the darkness and the introspective withdrawal. Ivona is a painter of awakening All angels who emerge from the darkness experience growth, spiritual realization and an encounter with their own self which is an ultimate reality. The phenomenon of a mystical light is of the artist\'s particular interest. She achieves another form of communication on a non - verbal, spiritual level through profane art based on personal spirituality',
                },
                {
                    SER: 'Mirča Elijade, Mefistofeles i Androgin, prevod Slavica Miletić, (Beograd: Gradac, 1996), 29.',
                    ENG: 'Mirča Elijade, Mefistofeles i Androgin, translation Slavica Miletić, (Belgrade: Gradac, 1996), 29.',
                },
                {
                    SER: '“Rađanje svetla” se dogodilo nakon „Dece Sunca”. Bitno je napomenuti da su „Deca Sunca” Ivonin utopistički osvrt na bolji svet, koji dobija nakon predviđanja brojnih kataklizmi koje neposredno prethode prosperitetu i novoj eri. Ovo se fenomenološki može poistovetiti sa brojnim mitovima duhovnim uverenjima.',
                    ENG: 'The series of paintings, the "Birth of Light" was painted after the "Children of the Sun" series. It is important to note that "Children of the Sun" series represents Ivona\'s utopian vision of a better world, which comes after the prediction of numerous cataclysms that immediately precede prosperity and a new era. This can be phenomenologically identified with numerous myths and spiritual beliefs.',
                },
                {
                    SER: 'Ivonini radovi nisu klasični portreti, oni su kompleksne studije duše koju možete da čujete i osetite, a čija telesnost traži proučavanje i posvećenost. Umetnica se samo oslanja na ikoničko predstavljanje koje svojim gabaritom pruža snagu i mir. Njena bića u sebi nose kosmičku ljubav.',
                    ENG: 'Ivona\'s artworks are not typical portraits. They are complex studies of a soul that one can hear and feel, and whose physicality demands study and dedication. The artist relies only on an iconic representation that provides strength and peace with its dimensions. Her beings carry cosmic love within them.',
                },
                {
                    SER: 'U jednom od svojih romana koji ujedno predstavlja jedno od najznačajnijih književnih dela koje obraduje temu androginije Balzak predstavlja to savršeno, uzvišeno biće - alegoriju serafimske ljubavi, koje je osamljeno, melanholično, erudita i u koje se zaljubljuju i muškarac i žena jer ono predstavlja savršeno, „potpuno stvorenje”. U pesmi „Reči Stalkera”, Tarkovski ističe - slabost je velika stvar, a sila je ništavna.',
                    ENG: 'In one of his novels, which is at the same time one of the most significant literary works dealing with the theme of androgyny, Balzac presents a perfect, sublime being an allegory of seraphim\'s love. It is solitary, melancholic, erudite, and both men and women fall in love with it because it represents a perfect, "complete creature." In the poem "Words of Stalker", Tarkovsky indicates that weakness is a good thing, while strength is nothing.',
                },
                {
                    SER: 'Ova divovska stvorenja personifikuju svežinu postojanja i čistotu i ranjivost novorođenog. Ona su nejaka, na njima nema tragova očvrslosti, okoštalosti ili grubosti koju čini vreme i iskustvo. Ivona predstavlja šest celina. Teži da nas vrati na početak i pokaže tu nežnost iz koje smo izronili u svet koji nas je promenio. Ona skida sve oklope koje je čovek stvorio kako bi se zaštitio i opstao. Pokazuje suštinu, a to je ljubav i nežnost koja je u korenu svakog od nas.',
                    ENG: 'These giant creatures personify the freshness of existence and the purity and vulnerability of a time newborn. They are frail, there are no traces of hardness, ossification or roughness caused by t and experience. Ivona has six segments on display. She seeks to bring us back to the beginning and to show the tenderness from which we have emerged into the world-which has changed us subsequently. She takes off all the armor that a human being has created in order to protect itself and survive. She shows the essence the love and',
                },
                {
                    SER: 'Kroz svoj antropološko- filantropski pristup ona običnom čoveku daje snagu božanko- nebeskog stvorenja, predstavljajući ga kao te inicijalne tvorevine koje u sebi poseduju oba pola, emociju i razum. Vizuelizovanjem duhovnog i bukvalnog buđenja života, ona sugeriše na snagu nežnosti čije posedovanje stvara svetlost potpunog bića.',
                    ENG: 'tenderness that are at the core of each of us. Through her anthropological and philanthropic approach, she gives ordinary human beings the strength of divine, heavenly creatures, presenting them as primordial creations that possess both sexes, emotion and reason. By visualizing the spiritual and the literal awakening of life, the artist implies the power of tenderness required to bring forth the light of a complete being',
                },
                {
                    SER: '* Mirča Elijade, Mefistofeles i Androgin, prevod Slavica Miletić, (Beograd: Gradac, 1996), 21.',
                    ENG: '* Mirča Elijade, Mefistofeles i Androgin, translation Slavica Miletić, (Belgrade: Gradac, 1996), 21.',
                },
            ],
            QUOTES: [
                {
                    SER: '“Prema nekim mitovima i Kosmos i Prvobitni čovek nastali su iz Svetlosti dakle u osnovi kao Svetlost.',
                    ENG: '“According to some myths, both the Universe and the Primordial Human were created from Light, therefore basically they are Light themselves.',
                },
                {
                    SER: 'Jedna druga tradicija objašnjava kako se odigrao preobražaj Čoveka - Svetlosti u ljude kakvi postoje na Zemlji. U početku su ljudi bili bespolni i nisu imali polnih želja; oni su u sebi imali Svetlost i zračili su. Sunce i Mesec nisu postojali”.¹',
                    ENG: 'Another tradition explains how a transformation of Light People into ordinary people, as they exist on Earth, took place. In the beginning, people were sexless and had no sexual desires,they had the Light in them and they radiated. The sun and the moon did not exist”.¹',
                },
                {
                    SER: '“Prema jednoj tradiciji (...) pošto je svet uništen u njemu su ostala samo sjajna bića (...) ona su imala eterična tela i letela su kroz vazduh zračeći sopstvenu svetlost i živela su beskonačno dugo”.2',
                    ENG: '“According to one legend (...) since the world was destroyed, only lustrous beings remained in it (...) they had ethereal bodies and flew through the air radiating their own light and they lived eternally”.2',
                },
                {
                    SER: '„Kada se čovek rodi on je slab i lomljiv, a kada umire, jak je i čvrst. Kada drvo raste nežno je i savitljivo ali kada je suvo i tvrdo tada umire. Tvrdoća i snaga su saputnici smrti. Ranjivost i nejakost su izraz svežine postojanja. Jer, nešto što je očvrsnulo nikada neće pobediti”.',
                    ENG: '„When a man is just born, he is weak and flexible. When he dies, he is hard and insensitive. When a tree is growing, it\'s tender and pliant. But when it\'s dry and hard, it dies. Hardness and strength are death\'s companions. Pliancy and weakness are expressions of the freshness of being. Because what has hardened will never win”. 21',
                }
            ],
            IMAGES: [
                {
                    ALT: 'exhibition-view',
                    SRC: exhibitionCreatingOfLight1,
                },
                {
                    ALT: 'exhibition-view-wide',
                    SRC: exhibitionCreatingOfLight2,
                },
                {
                    ALT: 'exhibition-view-medium',
                    SRC: exhibitionCreatingOfLight3,
                },
                {
                    ALT: 'exhibition-view-medium',
                    SRC: exhibitionCreatingOfLight4,
                }
            ]
        }
    }
});

export function getExhibitionById(id: number) {
    return Object.values(PAGE_CONTENT).find((exhibition) => exhibition.ID === id);
}
