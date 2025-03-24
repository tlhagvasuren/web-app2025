$(window).on('scroll load', function(){
    $('.fa-bars').removeClass('active');  
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
    } else {
        $('header').removeClass('header-active');
    }
});
// hereglegchiijn setgegdel
let currentIndex = 0;
const slides = document.querySelectorAll('.comment-slide');
const wrapper = document.querySelector('.comment-wrapper');
const totalSlides = slides.length;

function updateSlidePosition() {
  const offset = -currentIndex * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}
//outside slide



const sliderTrack = document.getElementById('sliderTrack');
const slides1 = document.querySelectorAll('.mySlide');
const dotContainer = document.getElementById('dotContainer');
let currentSlide = 0;

// Create dots
slides1.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides1.length - 1;
  if (currentSlide >= slides1.length) currentSlide = 0;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Auto Slide
let slideInterval = setInterval(() => {
  moveSlide(1);
}, 4000);

// Initial load
window.addEventListener('load', () => {
  updateSlider();
});