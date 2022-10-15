import Splide from '@splidejs/splide';

new Splide( '.splide', {
    perPage: 3,
    gap: '1.5rem',
    height: '300px',
    breakpoints: {
        1280: {
            perPage: 2,
        },
        768: {
            perPage: 1,
        }
    }
} ).mount();