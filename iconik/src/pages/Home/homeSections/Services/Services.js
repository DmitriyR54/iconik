// components
import { splideCarousel, splideInstance } from 'Components/splideCarousel/splideCarousel';
// components
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
// styles
import './Services.scss';

splideCarousel('services__carousel');

const filterItems = document.querySelectorAll('#services__carousel .splide__slide');

let items = [];

filterItems.forEach((item) => {
    items.push(item);
});

// console.log(items);

splideInstance.remove('.splide__slide');

setTimeout(() => {
    items.forEach((item) => {
        splideInstance.add(item);
        console.log(item);
        lazyLoadImages();
    });
}, 3000);
