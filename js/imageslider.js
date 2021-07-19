const galleryImages = document.querySelector('#small-images');
const imageSlider = document.querySelector('.image_slider');
const indicators = document.querySelectorAll('.carousel-indicators > li');
const carItems = document.querySelectorAll('.carousel-inner > .carousel-item');
const closeBtn = document.querySelector('.image_slider > button');
const body = document.querySelector('body');

galleryImages.addEventListener('click', (e) => {
    body.setAttribute('style', 'overflow: hidden');
    if (e.target.tagName === 'IMG') {
        const number = parseInt(e.target.alt);
        indicators[number].classList.add('active');
        carItems[number].classList.add('active');
        imageSlider.classList.remove('close');
    }
});
closeBtn.addEventListener('click', () => {
    body.removeAttribute('style');
    indicators.forEach((indicator) => {
        if (indicator.classList.contains('active')) {
            indicator.classList.remove('active');
        }
    });
    carItems.forEach((carItem) => {
        if (carItem.classList.contains('active')) {
            carItem.classList.remove('active');
        }
    });
    imageSlider.classList.add('close');
});
