// libraries
// styles
import 'modern-normalize/modern-normalize.css';
import 'Src/styles/styles.scss';
import './Home.scss';
// components
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
import 'Components/lazyLoadImages/lazyLoadImages.scss';
import { hideLoadingPlaceholder } from 'Components/loadingPlaceholder/hideLoadingPlaceholder';
import 'Components/smoothShow/smoothShow';
// sections
import 'Sections/Header/Header';
import './homeSections/Intro/Intro.scss';
import './homeSections/Services/Services';
import './homeSections/Roadmap/Roadmap';
import './homeSections/Plans/Plans.scss';
import './homeSections/Lifestyle/Lifestyle';
import 'Sections/Footer/Footer.scss';

window.addEventListener('DOMContentLoaded', () => {
    hideLoadingPlaceholder();
    lazyLoadImages();
});
