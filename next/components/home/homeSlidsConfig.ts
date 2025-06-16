import signatureBlue from '@/public/assets/home/signature-blue.webp';
import signatureWhite from '@/public/assets/home/signature-white.webp';

const WHITE = '#FFFFFF';
const BRAND_COLOR = '#3769E6';

export const SLIDES_CONFIG = {
    0: {
        MOBILE: {
            COLOR: WHITE,
            LOGO: signatureWhite,
        },
        DESKTOP: {
            COLOR: WHITE,
            LOGO: signatureBlue,
        }
    },
    1: {
        MOBILE: {
            COLOR: BRAND_COLOR,
            LOGO: signatureBlue,
        },
        DESKTOP: {
            COLOR: BRAND_COLOR,
            LOGO: signatureBlue,
        }
    },
    2: {
        MOBILE: {
            COLOR: WHITE,
            LOGO: signatureWhite,
        },
        DESKTOP: {
            COLOR: BRAND_COLOR,
            LOGO: signatureBlue,
        }
    }
};
