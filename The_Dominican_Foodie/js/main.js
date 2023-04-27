const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageWidth = sliderImages.clientWidth;

let imageIndex = 0;

function slideImages() {
  sliderImages.style.transform = `translateX(-${imageIndex * imageWidth}px)`;
}

function nextSlide() {
  imageIndex++;
  if (imageIndex > sliderImages.children.length - 1) {
    imageIndex = 0;
  }
  slideImages();
}

function prevSlide() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = sliderImages.children.length - 1;
  }
  slideImages();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
