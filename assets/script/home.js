import Splide from '@splidejs/splide';


console.log('home')


document.addEventListener('turbo:load', function () {
    const element = document.querySelector('#produit-carousel');
    if (element && !element.classList.contains('is-initialized')) {
        new Splide(element, {
            type: 'loop',
            perPage: 1,
            gap: '1rem',
            autoplay: true,
            breakpoints: {
                768: { perPage: 1 },
                1024: { perPage: 2 }
            }
        }).mount();
    }
});


const imgs = document.querySelectorAll('.img');
const modals=document.querySelectorAll('.modal');
imgs.forEach(function (img, index) {
    const modal = modals[index];
    if (!modal) return; // sécurité au cas où

    img.addEventListener('mouseenter', function () {
        modal.style.display = 'block';
        console.log('mouseenter');
    });

    img.addEventListener('mouseleave', function () {
        modal.style.display = 'none';
        console.log('mouseleave');
    });
});
console.log('home5')
