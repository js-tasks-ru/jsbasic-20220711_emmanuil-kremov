import createElement from '../../assets/lib/create-element.js';

export default class Modal {

  constructor() {
    this.render()
    this.modalClose = this.elem.querySelector('.modal__close')
    this.modalClose.addEventListener('click', this.closeEsc)
    document.addEventListener('keydown', this.closeEsc)
  }

  render() {
    this.elem = createElement(`  
      <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title"></h3>
        </div>

        <div class="modal__body">
        </div>
      </div>
    </div>`);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  setTitle(modalTitle){
    this.elem.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').append(node);
  }

  closeEsc = (event) => {
    if (event.code === 'Escape' || !event.code) {
      document.body.classList.remove('is-modal-open')
      document.body.querySelector('.modal').remove()
    }
    document.removeEventListener('keydown', this.closeEsc)
  }

  close() {
    if (document.querySelector('.modal')) {
      document.body.querySelector('.modal').remove();
      document.body.classList.remove('is-modal-open');
      document.removeEventListener('keydown', this.closeEsc)
    }
  }
  
}
