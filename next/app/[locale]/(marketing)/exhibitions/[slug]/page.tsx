'use client';
import { ArticleCover } from "@/components/exhibitions/ArticleCover";
import { SubNavBredCrumbs } from "@/components/subnav-bredcrumbs/SubNavBredCrumbs";
import { getExhibitionById } from "@/app/[locale]/(marketing)/exhibitions/[slug]/pageContent";
import {getSectionComponentByType} from "@/components/exhibitions/sectionComponentMap";

export default function ExhibitionDetails({ params: { locale, slug } }: { params: { locale: string, slug: string }}) {
    const exhibition = getExhibitionById(parseInt(slug));

    if(!exhibition) return null;

    return (
        <div className="pt-[75px] md:pt-[100px] lg:pt-[125px] tracking-[.15em] mb-20">
            <SubNavBredCrumbs navItems={exhibition.HISTORY ?? []} locale={locale} page={'exhibition'} subItemClass='max-[480px]:max-w-[250px] truncate' />
            <ArticleCover locale={locale} cover={exhibition.COVER} />
            {exhibition.SECTIONS.map((s, key) => {
                const Component = getSectionComponentByType(s.TYPE);
                // @ts-ignore
                return <Component key={`${s.TYPE}_${key}`} locale={locale} section={s} />
            })}
        </div>
    );
}
