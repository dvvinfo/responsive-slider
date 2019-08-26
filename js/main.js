// Слайдер
let slideIndex = 1,
// Слайд
slides = document.querySelectorAll('.slider-item'),
// Элементы управления. Стрелочки вперед назад
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
// Элементы упраления. Точки
dotsWrap = document.querySelector('.slider-dots'),
dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

// Создаем функцию показа одного слайда
function showSlides(n) {

if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}

slides.forEach((item) => item.style.display = 'none');

dots.forEach((item) => item.classList.remove('dot-active'));

slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add('dot-active');

}

function plusSlides(n) {
showSlides(slideIndex += n);
}
// Функция которая устанавливает текущий слайд
function currentSlide(n) {
showSlides(slideIndex = n);
}
// Обработчик событий для стрелки "назад"
prev.addEventListener('click', function () {
plusSlides(-1);
});
// Обработчик событий для стрелки "вперед"
next.addEventListener('click', function () {
plusSlides(1);
});
// Обработчик событий для "точек"
dotsWrap.addEventListener('click',function (event) {
for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
        currentSlide(i);
    }
}
});