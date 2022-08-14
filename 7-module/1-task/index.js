import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;
  categories = [];

  constructor(categories) {
    this.categories = categories;
    this.renderRibbonComponent();
  }

  get elem() {
    return this.elem;
  }

  renderRibbonComponent() {
    this.elem = createElement(`
    <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        ${this.categories
          .map(
            (item) =>
              `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`
          )
          .join('')}
      </nav>
  
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>`);

    this.scrollRibbonInner();
    this.toSelectCategory();
  }

  scrollRibbonInner() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner');

    let arrowL = this.elem.querySelector('.ribbon__arrow_left');
    let arrowR = this.elem.querySelector('.ribbon__arrow_right');

    arrowL.classList.toggle('ribbon__arrow_visible');
    arrowR.classList.toggle('ribbon__arrow_visible');

    arrowR.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
      arrowL.classList.add('ribbon__arrow_visible');

      ribbonInner.addEventListener('scroll', () => {
        let scrollWidth = ribbonInner.scrollWidth;
        let scrollLeft = ribbonInner.scrollLeft;
        let clientWidth = ribbonInner.clientWidth;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;
        scrollRight === 0
          ? arrowR.classList.remove('ribbon__arrow_visible')
          : 0;
      });
    });

    arrowL.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);

      ribbonInner.addEventListener('scroll', () => {
        let scrollLeft = ribbonInner.scrollLeft;
        scrollLeft === 0 ? arrowL.classList.remove('ribbon__arrow_visible') : 0;
      });
    });
  }

  toSelectCategory = () => {
    let ribbonInnerItems = this.elem.querySelectorAll('.ribbon__item');

    ribbonInnerItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.target.dispatchEvent(
          new CustomEvent('ribbon-select', {
            detail: event.target.dataset.id,
            bubbles: true,
          })
        );

        ribbonInnerItems.forEach((item) => {
          item.classList.remove('ribbon__item_active');
        });

        item.classList.add('ribbon__item_active');
        event.preventDefault();
      });
    });
  };
}
