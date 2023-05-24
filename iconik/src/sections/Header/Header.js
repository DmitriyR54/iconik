import './Header.scss';

// dom elements
const nav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.header__nav-btn');

// show/hide the navigation menu 
// navigation status
let navActive = false;

function showNav() {
    // toggle navigation status
    navActive = true;

    // add the "active" classes
    navBtn.classList.add('header__nav-btn--active');
    nav.classList.add('header__nav--active');

    // prevent scrolling
    document.body.style.overflow = 'hidden';

    // handle the aria attributes
    navBtn.setAttribute('aria-expanded', true);
}

function hideNav() {
    // toggle navigation status
    navActive = false;

    // remove the "active" classes
    navBtn.classList.remove('header__nav-btn--active');
    nav.classList.remove('header__nav--active');

    // allow scrolling
    document.body.style.overflow = 'visible';

    // handle the aria attributes
    navBtn.setAttribute('aria-expanded', false);
}

// handle click on the burger menu button
navBtn.addEventListener('click', () => {
    navActive ? hideNav() : showNav();
});
