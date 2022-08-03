function initCarousel() {

  let carousel = document.querySelector('.carousel');
  let carouselInner = carousel.querySelector('.carousel__inner');
  let slides = carousel.querySelectorAll('.carousel__slide');

  let offsetWidth = carouselInner.offsetWidth;
  let transform = 0;

  let arrowR = carousel.querySelector('.carousel__arrow_right');

  arrowR.addEventListener('click', () => {
    transform += - offsetWidth;
    carouselInner.style.transform = `translateX(${transform}px)`;
    let caruselLenght = `translateX(${- offsetWidth * (slides.length - 1)}px)`;

    arrowL.style.display = '';

    carouselInner.style.transform === caruselLenght ? 
      arrowR.style.display = 'none' : 0;
  })

  let arrowL = carousel.querySelector('.carousel__arrow_left');
  arrowL.style.display = 'none';

  arrowL.addEventListener('click', () => {
    transform += offsetWidth;
    carouselInner.style.transform = `translateX(${transform}px)`;

    arrowR.style.display = '';

    carouselInner.style.transform === `translateX(0px)` ? 
      arrowL.style.display = 'none': 0;
  })
}
