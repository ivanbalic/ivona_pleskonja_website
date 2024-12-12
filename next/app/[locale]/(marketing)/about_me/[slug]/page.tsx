import React from "react";

import Link from "next/link";
import {cn} from "@/lib/utils";

import {Container} from "@/components/container";

type Title = {
    SER: string,
    ENG: string,
};

const PAGE_CONTENT = Object.freeze({
    AWARDS: {
        ID: 'awards',
        TITLE: {
            SER: "Nagrade",
            ENG: "Awards",
        },
        CONTENT: {
            SER: [
                '2016. III nagrada Novembarskog Salona, Kraljevo',
                '2007. Telenorova nagrada za idejno rešenje',
                '2002. III nagrada za fotografiju, iz Fonda BS Procesor, Beograd',
                '1997. Nagrada za najbolji crtež iz Fonda FLU',
                '1994. Nagrada za najbolju studiju iz Fonda FLU',
            ],
            ENG: [
                '2016. III nagrada Novembarskog Salona, Kraljevo',
                '2007. Telenorova nagrada za idejno rešenje',
                '2002. III nagrada za fotografiju, iz Fonda BS Procesor, Beograd',
                '1997. Nagrada za najbolji crtež iz Fonda FLU',
                '1994. Nagrada za najbolju studiju iz Fonda FLU',
            ]
        },
    },
    INDEPENDENT_EXHIBITIONS: {
        ID: 'independent_exhibitions',
        TITLE: {
            SER: "Samostalne Izložbe",
            ENG: "Inedependent Exhibitions",
        },
        CONTENT: {
            SER: [
                "2023. Galerija Šab, Stvaranje svetla / Nežni smo rodjeni, Beograd",
                "2022. Galerija Štab, 11 Snaga, Beograd",
                "2020. Zgrada Sky Line / spoljna fasada / mural, Life, Beograd",
                "2019. Nacinalna Galerija, 11 Snaga, Beograd",
                "2019. Izlog FLU, 11 Snaga, Beograd",
                "2019. Galerija Centra za grafiku FLU, 11 Snaga, Beograd",
                "2018. Muzej i Galerija Tivat, Deca Sunca, Tivat",
                "2016. Likovna Galerija Doma Kulture, Jaki ljudi, Prijepolje",
                "2015. Galerija Kulturnog centra, Deca Sunca, Požega",
                "2015. BLOK Galerija, Vremenske stanice, Beograd",
                "2014. Likovna galerija Kulturnog centra, Deca Sunca, Beograd",
                "2014. Galerija Centra za grafiku FLU, Deca Sunca, Beograd",
                "2012. Likovni Salon Kulturnog Centra, Duh, Novi Sad",
                "2011. Galerija ULUS, Duh, Beograd",
                "2009. Galerija Arte, Jedan Svet, Beograd",
                "2007. Galerija Rothamel, Belgrade Double, Erfurt, Nemačka",
                "2007. Nacionalna Galerija, Izvor, Beograd",
                "2007. Galerija Beograd, Heroji, Beograd",
                "2003. Galerija školskog internacionalnog centra “Jelena Anžujska”, Le Soleil, Pariz",
                "2002. Galerija Pesak, Zimska Čarolija, Beograd",
                "2000. Galerija FLU, Prvo Svetlo, Beograd",
                "1998. Izlog FLU, Taki, Beograd",
            ],
            ENG: [
                "2023. Galerija Šab, Stvaranje svetla / Nežni smo rodjeni, Beograd",
                "2022. Galerija Štab, 11 Snaga, Beograd",
                "2020. Zgrada Sky Line / spoljna fasada / mural, Life, Beograd",
                "2019. Nacinalna Galerija, 11 Snaga, Beograd",
                "2019. Izlog FLU, 11 Snaga, Beograd",
                "2019. Galerija Centra za grafiku FLU, 11 Snaga, Beograd",
                "2018. Muzej i Galerija Tivat, Deca Sunca, Tivat",
                "2016. Likovna Galerija Doma Kulture, Jaki ljudi, Prijepolje",
                "2015. Galerija Kulturnog centra, Deca Sunca, Požega",
                "2015. BLOK Galerija, Vremenske stanice, Beograd",
                "2014. Likovna galerija Kulturnog centra, Deca Sunca, Beograd",
                "2014. Galerija Centra za grafiku FLU, Deca Sunca, Beograd",
                "2012. Likovni Salon Kulturnog Centra, Duh, Novi Sad",
                "2011. Galerija ULUS, Duh, Beograd",
                "2009. Galerija Arte, Jedan Svet, Beograd",
                "2007. Galerija Rothamel, Belgrade Double, Erfurt, Nemačka",
                "2007. Nacionalna Galerija, Izvor, Beograd",
                "2007. Galerija Beograd, Heroji, Beograd",
                "2003. Galerija školskog internacionalnog centra “Jelena Anžujska”, Le Soleil, Pariz",
                "2002. Galerija Pesak, Zimska Čarolija, Beograd",
                "2000. Galerija FLU, Prvo Svetlo, Beograd",
                "1998. Izlog FLU, Taki, Beograd",
            ]
        },
    },
    GROUP_EXHIBITIONS: {
        ID: "group_exhibitions",
        TITLE: {
            SER: "Grupne Izložbe",
            ENG: "Group Exhibitions",
        },
        CONTENT: {
            SER: [
                "2023. Susreti, Paviljon Cvijeta Zuzorić, Beograd",
                "2022. Jesenji Salon, Paviljon Cvijeta Zuzorić, Beograd",
                "2020. Čukarički likovni salon, Galerija 73, Beograd",
                "2020. Akt, Galerija X Vitamin, Beograd",
                "2019. Majska izložba grafika beogradskog kruga, ULUS Galerija, Beograd",
                "2018. INTERBIFEP, Tuzla",
                "2018. Bijenale Minijature, Gornji Milanovac",
                "2017. OUTSIDE THE LINES, New Moment Galerija, Beograd",
                "2017. Jesenji Salon, Paviljon Cvijeta Zuzorić, Beograd",
                "2017. Akvizicije Ministarstva kulture, Sportsko – kulturni centar, Obrenovac",
                "2016. Novembarski salon, Kraljevo",
                "2016. ART MARKET, Budimpešta",
                "2015. ART MARKET, Budimpešta",
                "2015. Kolonija Mileševa, Dom Kulture, Prijepolje",
                "2014. EX YU Grafika, Nacionalna Galerija, Beograd",
                "2013. Dani Mađarskog Slikarstva, Srpki Paviljon / srpsko savremeno slikarstvo, Budimpešta",
                "2013. Izložba 2, Galerija opštine Vračar, Beograd",
                "2013. Majska izložba grafika beogradskog kruga, Galerija Grafički kolektiv, Beograd",
                "2013. Sopoćnska viđenja, Mala Galerija Medija Centra Odbrana, Beograd",
                "2012. Kolonija Sopoćanska viđenja, Novi Pazar",
                "2012. Jesenja izložba, Paviljon Cvijeta Zuzorić, Beograd",
                "2011. Umetnost Prvi Dah Života, Narodni Muzej, Beograd",
                "2011. Objekti i Radovi na Papiru III, Galerija Beograd, Beograd",
                "2010. NAF, Niš",
                "2008. Balkan Art Fluxion, Amsterdam",
                "2007. Objekti i Radovi na Papiru II, Galerija Beograd, Beograd",
                "2007. Bijenale Crteža i Male Plastike, Paviljon Cvijeta Zuzorić, Beograd",
                "2006. Kolonija Sv. Rafailo Deronjski, Deronje",
                "2005. Revijalna izložba članova ULUS-a, Paviljon Cvijeta Zuzorić Kalemegdan, Beograd",
                "2005. Izmeštanje, Galerija Zvono, Beograd",
                "2005. “Aukcija” u organizaciji Madl’Art, Paviljon Cvijeta Zuzorić Kalemegda, Beograd",
                "2005. Amazonke, Galerija SKC, Beograd",
                "2005. Total Art Sale, Galerija SULUJ, Beograd",
                "2005. Vino, Paviljon Cvijeta Zuzorić Kalemegdan, Beograd",
                "2004. Imaginarni Grad, Reed Collage, Portland, USA",
                "2004. BELEF, Kalemegdan, Beograd",
                "2004. Izmeštanje, Kolonija Kalenić",
                "2004. Jesenji Salon, Paviljon Cvijeta Zuzorić Kalemegdan, Beograd",
                "2003. BELEF, Kalemegdan, Beograd",
                "2002. Vaterpolo, Galerija ULUS, Beograd",
                "2002. Evinost, Galerija “Pesak”, Beograd",
                "2002. Voda Vazduh, Klub “Skalar”,  Beograd",
                "2002. V jugoslovenski likovni bijenale mladih, Vršac",
                "2002. Izložba fotografija, galerija ARTGET KCB, Beograd",
                "2001. aukcija slika, Skupština grada Beograda, Beograd",
                "2001. prodajna izložba članova ULUS-a, Galerija ULUS,  Beograd",
                "2001. Novembarsko Proleće, Galerija “Paleta” KCB, Beograd",
                "2001. majska izložba Sartid, Galerija muzeja, Smederevo",
                "2000. Insomnija, Galerija SULUJ, Beograd",
                "2000. IV jugoslovenski likovni bijenale mladih, Vršac",
                "1999. Paviljon Cvijeta Zuzorić, Beograd",
                "1999. XXXII Hercegnovski Zimski Salon, Herceg Novi",
                "1999. Portret, NU Braća Stamenković, Beograd",
                "1999. novoprimljeni članovi ULUS-a, Paviljon Cvijeta Zuzorić, Beograd",
                "1999. izložba u okviru slikarske kolonije, Pinakoteka, Lamia, Grčka",
                "1998. 27. izložba crteža studenata FLU, Galerija Doma Omladine,  Beograd",
                "1998. III Jugoslovenski Likovni Bijenale Mladih, Vršac",
                "1998. XXXIX OKTOBARSKI SALON, Beograd",
                "1997. 26. izložba crteža studenata FLU, Galerija Doma Omladine, Beograd",
                "1997. izložba nagrađenih studenata FLU, Galerija FLU, Beograd",
                "1996. Telo, Galerija FLU, Beograd",
                "1996. 25. izložba crteža studenata FLU, Galerija Doma Omladine, Beograd",
                "1996. Matićevi Dani, Dom VJ, Ćuprija",
                "1995. Izložba u okviru Međunarodne slikarske kolonije, Didimoteihon, Grčka",
                "1995. 24. izložba crteža studenata FLU, Galerija Doma Omladine, Beograd",
                "1994. izložba nagrađenih studenata FLU, Galerija FLU,  Beograd",
                "1994. Kolonija akvarela, Ečka",
            ],
            ENG: [
                "2023. Susreti, Paviljon Cvijeta Zuzorić, Beograd",
                "2022. Jesenji Salon, Paviljon Cvijeta Zuzorić, Beograd",
                "2020. Čukarički likovni salon, Galerija 73, Beograd",
                "2020. Akt, Galerija X Vitamin, Beograd",
                "2019. Majska izložba grafika beogradskog kruga, ULUS Galerija, Beograd",
                "2018. INTERBIFEP, Tuzla",
                "2018. Bijenale Minijature, Gornji Milanovac",
                "2017. OUTSIDE THE LINES, New Moment Galerija, Beograd",
                "2017. Jesenji Salon, Paviljon Cvijeta Zuzorić, Beograd",
                "2017. Akvizicije Ministarstva kulture, Sportsko – kulturni centar, Obrenovac",
                "2016. Novembarski salon, Kraljevo",
                "2016. ART MARKET, Budimpešta",
                "2015. ART MARKET, Budimpešta",
                "2015. Kolonija Mileševa, Dom Kulture, Prijepolje",
                "2014. EX YU Grafika, Nacionalna Galerija, Beograd",
                "2013. Dani Mađarskog Slikarstva, Srpki Paviljon / srpsko savremeno slikarstvo, Budimpešta",
                "2013. Izložba 2, Galerija opštine Vračar, Beograd",
                "2013. Majska izložba grafika beogradskog kruga, Galerija Grafički kolektiv, Beograd",
                "2013. Sopoćnska viđenja, Mala Galerija Medija Centra Odbrana, Beograd",
                "2012. Kolonija Sopoćanska viđenja, Novi Pazar",
                "2012. Jesenja izložba, Paviljon Cvijeta Zuzorić, Beograd",
                "2011. Umetnost Prvi Dah Života, Narodni Muzej, Beograd",
                "2011. Objekti i Radovi na Papiru III, Galerija Beograd, Beograd",
                "2010. NAF, Niš",
                "2008. Balkan Art Fluxion, Amsterdam",
                "2007. Objekti i Radovi na Papiru II, Galerija Beograd, Beograd",
                "2007. Bijenale Crteža i Male Plastike, Paviljon Cvijeta Zuzorić, Beograd",
                "2006. Kolonija Sv. Rafailo Deronjski, Deronje",
                "2005. Revijalna izložba članova ULUS-a, Paviljon Cvijeta Zuzorić Kalemegdan, Beograd",
                "2005. Izmeštanje, Galerija Zvono, Beograd",
                "2005. “Aukcija” u organizaciji Madl’Art, Paviljon Cvijeta Zuzorić Kalemegda, Beograd",
                "2005. Amazonke, Galerija SKC, Beograd",
                "2005. Total Art Sale, Galerija SULUJ, Beograd",
                "2005. Vino, Paviljon Cvijeta Zuzorić Kalemegdan, Beograd",
                "2004. Imaginarni Grad, Reed Collage, Portland, USA",
                "2004. BELEF, Kalemegdan, Beograd",
                "2004. Izmeštanje, Kolonija Kalenić",
                "2004. Jesenji Salon, Paviljon Cvijeta Zuzorić Kalemegdan, Beograd",
                "2003. BELEF, Kalemegdan, Beograd",
                "2002. Vaterpolo, Galerija ULUS, Beograd",
                "2002. Evinost, Galerija “Pesak”, Beograd",
                "2002. Voda Vazduh, Klub “Skalar”,  Beograd",
                "2002. V jugoslovenski likovni bijenale mladih, Vršac",
                "2002. Izložba fotografija, galerija ARTGET KCB, Beograd",
                "2001. aukcija slika, Skupština grada Beograda, Beograd",
                "2001. prodajna izložba članova ULUS-a, Galerija ULUS,  Beograd",
                "2001. Novembarsko Proleće, Galerija “Paleta” KCB, Beograd",
                "2001. majska izložba Sartid, Galerija muzeja, Smederevo",
                "2000. Insomnija, Galerija SULUJ, Beograd",
                "2000. IV jugoslovenski likovni bijenale mladih, Vršac",
                "1999. Paviljon Cvijeta Zuzorić, Beograd",
                "1999. XXXII Hercegnovski Zimski Salon, Herceg Novi",
                "1999. Portret, NU Braća Stamenković, Beograd",
                "1999. novoprimljeni članovi ULUS-a, Paviljon Cvijeta Zuzorić, Beograd",
                "1999. izložba u okviru slikarske kolonije, Pinakoteka, Lamia, Grčka",
                "1998. 27. izložba crteža studenata FLU, Galerija Doma Omladine,  Beograd",
                "1998. III Jugoslovenski Likovni Bijenale Mladih, Vršac",
                "1998. XXXIX OKTOBARSKI SALON, Beograd",
                "1997. 26. izložba crteža studenata FLU, Galerija Doma Omladine, Beograd",
                "1997. izložba nagrađenih studenata FLU, Galerija FLU, Beograd",
                "1996. Telo, Galerija FLU, Beograd",
                "1996. 25. izložba crteža studenata FLU, Galerija Doma Omladine, Beograd",
                "1996. Matićevi Dani, Dom VJ, Ćuprija",
                "1995. Izložba u okviru Međunarodne slikarske kolonije, Didimoteihon, Grčka",
                "1995. 24. izložba crteža studenata FLU, Galerija Doma Omladine, Beograd",
                "1994. izložba nagrađenih studenata FLU, Galerija FLU,  Beograd",
                "1994. Kolonija akvarela, Ečka",
            ]
        },
    },
    COLLECTIONS: {
        ID: 'collections',
        TITLE: {
            SER: "Kolekcije",
            ENG: "Collections",
        },
        CONTENT: {
            SER: [
                "2020. Privatna kolekcija Aleksić",
                "2020. Privatna kolekcija porodica Medan",
                "2018. Privatna kolekcija Beko",
                "2017. Narodni muzej Zaječar",
                "2016. Kulturni centar Obrenovac",
                "2015. Kolekcija hotel Marriott, Beograd",
                "2015. Kulturni centar Požega",
                "2009. Kolekcija Galerije Arte, Beograd",
                "2007. Kolekcija FITEX, Beograd",
                "2006. Kolekcija Muzeja grada Beograda, Beograd",
                "1999. Kolekcija Pinakoteke, Lamia, Grčka",
            ],
            ENG: [
                "2020. Privatna kolekcija Aleksić",
                "2020. Privatna kolekcija porodica Medan",
                "2018. Privatna kolekcija Beko",
                "2017. Narodni muzej Zaječar",
                "2016. Kulturni centar Obrenovac",
                "2015. Kolekcija hotel Marriott, Beograd",
                "2015. Kulturni centar Požega",
                "2009. Kolekcija Galerije Arte, Beograd",
                "2007. Kolekcija FITEX, Beograd",
                "2006. Kolekcija Muzeja grada Beograda, Beograd",
                "1999. Kolekcija Pinakoteke, Lamia, Grčka",
            ]
        },
    }
});

const getTitle = (page: string, locale: string) => {
    const pageContent = PAGE_CONTENT[page.toUpperCase() as keyof typeof PAGE_CONTENT];
    const pageTitle = pageContent?.TITLE[locale.toUpperCase() as keyof Title];
    return pageTitle?.toUpperCase();
};

const getContent = (page: string, locale: string)=> {
    const pageContent = PAGE_CONTENT[page.toUpperCase() as keyof typeof PAGE_CONTENT];
    return pageContent?.CONTENT[locale.toUpperCase() as keyof Title];
};

export default async function AboutMeSubPage({ params: { locale, slug} }: { params: { locale: string, slug: string } }) {
    return (
        <Container>
            <div className='px-[100px] pt-[125px] text-black'>
                <div className='flex justify-center gap-5 mt-5 font-text font-light text-[16px] leading-[19.4px] tracking-[.15em]'>
                    {Object.values(PAGE_CONTENT).map(
                        (content, index) => (
                            <Link href={`/${locale}/about_me/${content.ID}`} key={content.ID} className={cn(
                                'hover:underline cursor-pointer', content.ID === slug ? 'font-bold underline' : '',
                                index ? 'border-l-2 border-black pl-5' : '')}
                            >
                                {content.TITLE[locale.toUpperCase() as keyof Title]}
                            </Link>
                        )
                    )}
                </div>
                <div className="my-10 font-bold text-[36px] leading-[39px] tracking-[.15em]">
                    <span className="text-primaryBlue">{getTitle(slug, locale)}</span>
                </div>
                <div className="flex flex-col gap-2 mb-20">
                    {getContent(slug, locale).map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </Container>
    );
}
