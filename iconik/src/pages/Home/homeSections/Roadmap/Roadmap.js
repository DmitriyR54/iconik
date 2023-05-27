// libraries
import Splide from '@splidejs/splide';
// components
import { splideConfig } from 'Components/splideCarousel/splideCarousel';
// styles
import './Roadmap.scss';

// initiate the carousel
new Splide('#roadmap__carousel', splideConfig(3, false, true)).mount();
