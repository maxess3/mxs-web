import Splide from '@splidejs/splide';

var splide = new Splide( '.splide', {
    perPage: 3,
    gap: '2rem',
    height: '400px',
    breakpoints: {
        1280: {
            perPage: 2,
        },
        768: {
            perPage: 1,
        }
    }
} ).mount();