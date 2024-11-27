const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const btnLeft = document.querySelector('.slider-btn.left');
const btnRight = document.querySelector('.slider-btn.right');

let currentSlide = 0;


btnLeft.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : sliderItems.length - 1;
    updateSlider();
});

btnRight.addEventListener('click', () => {
    currentSlide = (currentSlide < sliderItems.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}