// libraries
import Splide from '@splidejs/splide';
// components
import { splideConfig } from 'Components/splideCarousel/splideCarousel';
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
// styles
import './Services.scss';

// setTimeout to impove the PageSpeed performance value
setTimeout(() => {
    // show the section
    document.querySelector('#services').style.opacity = 1;

    // initiate the carousel
    const splideInstance = new Splide('#services__carousel', splideConfig(4)).mount();

    // carousel items
    const filterItems = document.querySelectorAll('#services__carousel .splide__slide');

    // filter buttons
    const filterBtn = document.querySelectorAll('[data-services-filter-btn]');

    // filter function
    function servicesFilter(btn) {
        // pressed button filter attribute
        const btnAttr = btn.getAttribute('data-services-filter-btn');

        // remove all the slides from the carousel
        splideInstance.remove('.splide__slide');

        filterItems.forEach((item) => {
            // hide the slides (animation)
            item.style.opacity = 0;

            // add the matched slides to the carousel
            if (btnAttr === item.getAttribute('data-services-filter-item')) {
                splideInstance.add(item);
            } else if (btnAttr === 'all') {
                splideInstance.add(item);
            }

            // show the slides (animation)
            setTimeout(() => {
                item.style.opacity = 1;
            }, 50);

            // load the images
            lazyLoadImages();
        });

        // remove the focus styles from the pressed button
        btn.blur();

        // remove the active styles from all buttons
        filterBtn.forEach((btn) => {
            btn.classList.remove('btn--active');
        });

        // add the active styles to the pressed button
        document.querySelectorAll(`[data-services-filter-btn=${btnAttr}]`).forEach((btn) => btn.classList.add('btn--active'));
    }

    filterBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            servicesFilter(btn);
        });
    });
}, 500);
