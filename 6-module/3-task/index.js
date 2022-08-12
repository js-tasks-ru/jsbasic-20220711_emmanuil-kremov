import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  slides = [];
  elem = null; 

  constructor(slides) {
    this.slides = slides;
    this.mainCaruselTemplate();
  }

  get elem() {
    return this.elem;
  }

  renderSlidesComponent() {
    let slidesBlock = '';

    for(let obj of this.slides){
      slidesBlock += `
      <div class="carousel__slide" data-id="${obj.id}">
        <img src="/assets/images/carousel/${obj.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${obj.price}</span>
          <div class="carousel__title">${obj.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
    }
    return slidesBlock;
  }

  mainCaruselTemplate() {
    this.elem = createElement(`
    <!--Корневой элемент карусели-->
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner">
        ${this.renderSlidesComponent()}
      </div>
    </div>
    `);

    this.initCarousel(); 
    this.elem.querySelectorAll('.carousel__button').forEach( item => item.addEventListener('click', this.onPlusButton));
  }


  initCarousel = () => {
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let slides = this.elem.querySelectorAll('.carousel__slide');

    let transform = 0;
  
    let arrowR = this.elem.querySelector('.carousel__arrow_right');
  
    arrowR.addEventListener('click', () => {
      transform += - carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(${transform}px)`;
      let caruselLenght = `translateX(${- carouselInner.offsetWidth * (slides.length - 1)}px)`;
  
      arrowL.style.display = '';
  
      carouselInner.style.transform === caruselLenght ? 
        arrowR.style.display = 'none' : 0;
    })

    let arrowL = this.elem.querySelector('.carousel__arrow_left');
    arrowL.style.display = 'none';

    arrowL.addEventListener('click', () => {
    transform += carouselInner.offsetWidth;
    carouselInner.style.transform = `translateX(${transform}px)`;

    arrowR.style.display = '';

    carouselInner.style.transform === `translateX(0px)` ? 
      arrowL.style.display = 'none': 0;
    })
  }

  onPlusButton = (event) => {
    let id = event.target.closest('.carousel__slide').dataset.id
    let customEvent = new CustomEvent('product-add', { bubbles: true, detail: id });
    this.elem.dispatchEvent(customEvent);
  } 
}

