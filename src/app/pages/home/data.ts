import { sliderOpt } from 'src/app/shared/data';

export const introSlider = {
    ...sliderOpt,
    nav: false,
    loop: false,
}

export const brandSlider = {
    ...sliderOpt,
    nav: false,
    dots: false,
    margin: 0,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        900: {
            items: 5
        },
        1024: {
            items: 6,
            margin: 30
        }
    }
}

export const productSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 1,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 4,
            margin: 1
        }
    }
}

export const blogSlider = {
    ...sliderOpt,
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        520: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    }
}