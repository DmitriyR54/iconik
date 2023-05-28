import data from './lifestyleInfo.json';
//components
import { modalWindow } from 'Components/modalWindow/modalWindow';
import { lazyLoadImages } from 'Components/lazyLoadImages/lazyLoadImages';
// styles
import './Lifestyle.scss';

// list of the images
const thumbnails = document.querySelectorAll('.lifestyle__gallery .lazy-image');

function showModal(img) {
    // clicked thumbnail attribute
    const imgAttr = img.getAttribute('data-lifestyle');

    // data of the item
    let itemData = {};

    data.forEach((item) => {
        if (item.id === imgAttr) {
            itemData = { ...item };
        }
    });

    const modalContent = `
<div class="modal-window__inner lifestyle__modal">
    <figure class="lazy-image">
        <img data-src="${itemData.img}" alt="Lifestyle illustration">
    </figure>
    <div class="lifestyle__modal-text">
        <h4 class="title title--sm">${itemData.title}</h4>
        <p class="paragraph">${itemData.description}</p>
        <button class="btn btn--secondary btn--rad modal-window-close">
            Close
        </button>
    </div>
</div>`;

    modalWindow(modalContent);
    lazyLoadImages();
}

thumbnails.forEach((img) => {
    img.addEventListener('click', () => {
        showModal(img);
    });

    img.addEventListener('keyup', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            showModal(img);
        }
    });
});
