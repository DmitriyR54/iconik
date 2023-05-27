import '@splidejs/splide/dist/css/splide-core.min.css';
// styles
import './splideCarousel.scss';

const splideConfig = (perPage = 3, arrows = true, pagination = false) => {
    return {
        perPage,
        gap: '20px',
        pagination,
        arrows,
        flickPower: 200,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            },
        },
    };
};

export { splideConfig };
