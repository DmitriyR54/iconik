// components
import { splideCarousel, splideInstance } from 'Components/splideCarousel/splideCarousel';
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
// styles
import './Services.scss';

// initiate the carousel
splideCarousel('services__carousel');

// carousel items
const filterItems = document.querySelectorAll('#services__carousel .splide__slide');

// filter buttons
const filterBtn = document.querySelectorAll('[data-services-filter-btn]');

// main filter function
function servicesFilter(btn) {
    const btnAttr = btn.getAttribute('data-services-filter-btn');

    splideInstance.remove('.splide__slide');

    filterItems.forEach((item) => {
        item.style.opacity = 0;

        if (btnAttr === item.getAttribute('data-services-filter-item')) {
            splideInstance.add(item);
        } else if (btnAttr === 'all') {
            splideInstance.add(item);
        }

        setTimeout(() => {
            item.style.opacity = 1;
        }, 50);

        lazyLoadImages();
    });

    filterBtn.forEach((btn) => {
        btn.classList.remove('btn--active');
    });

    // btn.classList.add('btn--active');G
    btn.blur();

    document.querySelectorAll(`[data-services-filter-btn=${btnAttr}]`).forEach((btn) => btn.classList.add('btn--active'));
}

filterBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        servicesFilter(btn);
    });
});
