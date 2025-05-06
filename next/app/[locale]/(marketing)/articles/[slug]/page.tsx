'use client';
import { ArticleCover } from '@/components/exhibitions/ArticleCover';
import { SubNavBredCrumbs } from '@/components/subnav-bredcrumbs/SubNavBredCrumbs';
import { getSectionComponentByType } from '@/components/exhibitions/sectionComponentMap';
import { getExhibitionById } from '@/app/[locale]/(marketing)/articles/[slug]/pageContent';

export default function ExhibitionDetails({ params: { locale, slug } }: { params: { locale: string, slug: string }}) {
    const exhibition = getExhibitionById(parseInt(slug));

    if(!exhibition) return null;

    return (
        <div className="pt-[85px] md:pt-[125px] tracking-[.15em]">
            <SubNavBredCrumbs navItems={exhibition.HISTORY ?? []} locale={locale} page={'exhibition'} />
            <ArticleCover locale={locale} cover={exhibition.COVER} />
            {exhibition.SECTIONS.map((s, key) => {
                const Component = getSectionComponentByType(s.TYPE);
                // @ts-ignore
                return <Component key={`${s.TYPE}_${key}`} locale={locale} section={s} />
            })}
        </div>
    );
}
