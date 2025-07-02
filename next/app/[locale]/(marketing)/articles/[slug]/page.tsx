'use client';
import { cn } from "@/lib/utils";
import {useIsMobile} from "@/hooks/useIsMobile";
import { ArticleCover } from '@/components/articles/ArticleCover';
import { SubNavBredCrumbs } from '@/components/subnav-bredcrumbs/SubNavBredCrumbs';
import { getSectionComponentByType } from '@/components/articles/sectionComponentMap';
import { getExhibitionById } from '@/app/[locale]/(marketing)/articles/[slug]/pageContent';

export default function ExhibitionDetails({ params: { locale, slug } }: { params: { locale: string, slug: string }}) {
    const isMobile = useIsMobile();
    const exhibition = getExhibitionById(parseInt(slug));

    if(!exhibition) return null;

    return (
        <div className={cn(
            slug === '6' ? "bg-articleBgBlue min-h-[100vh] w-[100vw]" : '',
            "pt-[85px] md:pt-[125px] tracking-[.15em]"
        )}>
            <div className={cn("max-md:bg-articleBgBlue")}>
                <SubNavBredCrumbs navItems={exhibition.HISTORY ?? []} locale={locale} page={'exhibition'} inverted={slug === '6'} />
                <ArticleCover locale={locale} cover={exhibition.COVER} />
            </div>
            {// @ts-ignore
                exhibition.SECTIONS?.[(isMobile ? 'MOBILE' : 'DESKTOP') as keyof typeof exhibition.SECTIONS]?.map((s, key) => {
                const Component = getSectionComponentByType(s.TYPE);
                // @ts-ignore
                return <Component key={`${s.TYPE}_${key}`} locale={locale} section={s} />
            })}
        </div>
    );
}
