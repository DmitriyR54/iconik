import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
// styles
import './splideCarousel.scss';

let splideInstance;

const splideCarousel = (carouselId) => {
    splideInstance = new Splide(`#${carouselId}`, {
        perPage: 3,
        gap: '20px',
        pagination: false,
        flickPower: 200,
        breakpoints: {
            768: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            },
        },
    });

    splideInstance.mount();
};

export { splideCarousel, splideInstance };
