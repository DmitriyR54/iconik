// libraries
import Splide from '@splidejs/splide';
// components
import { splideConfig } from 'Components/splideCarousel/splideCarousel';
// styles
import './Roadmap.scss';

// setTimeout to impove the PageSpeed performance value
setTimeout(() => {
    // show the section
    document.querySelector('.roadmap').style.opacity = 1;

    // initiate the carousel
    new Splide('#roadmap__carousel', splideConfig(3, false, true)).mount();
}, 500);
