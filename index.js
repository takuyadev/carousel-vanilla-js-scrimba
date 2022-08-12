const slides = document.getElementsByClassName("carousel-item");
const stepper = document.getElementsByClassName("stepper-dot");
const stepper1 = document.getElementById("stepper");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

//rendering step dot indicators and functionality
for (let i = 0; i < slides.length; i++) {
  stepper1.innerHTML += `<div class="stepper-dot" step-attribute="${i}"></div>`;
}

for (let i = 0; i < slides.length; i++) {
  stepper[i].addEventListener("click", function (e) {
    slidePosition = i - 1;
    moveToNextSlide();
  });
}

stepper[0].classList.add("stepper-dot-active");

//all functions for proceeding with slide
function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
  for (let step of stepper) {
    step.classList.remove("stepper-dot-active");
  }
}

function moveToNextSlide() {
  hideAllSlides();
  clearInterval(carouselTimer);
  carouselTimer = setInterval(moveToNextSlide, 3000);

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  stepper[slidePosition].classList.add("stepper-dot-active");
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

//interval for automatic slides
let carouselTimer = setInterval(moveToNextSlide, 3000);
