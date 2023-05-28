import './smoothShow.scss';

/* smooth appearing on the screen */
const items = document.querySelectorAll('.smooth-show');

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('smooth-show--active');
            observer.unobserve(entry.target);
        }
    });
};

const observerOptions = {
    threshold: 0.33,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

items.forEach((item) => {
    observer.observe(item);
});
