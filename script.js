document.body.classList.add('js-ready');
const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(item);
});

document.querySelectorAll('details').forEach((item) => {
    item.addEventListener('toggle', () => {
        if (!item.open) return;
        document.querySelectorAll('details[open]').forEach((otherItem) => {
            if (otherItem !== item) otherItem.removeAttribute('open');
        });
    });
});
