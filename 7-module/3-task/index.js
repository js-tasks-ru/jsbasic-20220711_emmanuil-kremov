import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  elem = null;
  steps = '';
  value = ''; 

  constructor({ steps, value = 0 }) {
    this.value = value;
    this.steps = steps;
    this.template();
    // console.log(this.elem.querySelector('.slider'))
  }

  // get elem() {
  //   return this.elem
  // }

  template() {
    this.elem = document.createElement('div')
    this.elem.classList.add('slider');
    this.elem.innerHTML = `
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
      <div class="slider__progress" style="width: 0%;"></div>
      <div class="slider__steps">
        ${this.sliderSteps()}
      </div>
    `
    // this.setSteps();
    // this.sliderValueChange();
  }

  sliderSteps() {
    // let div = this.elem.querySelector('.slider__steps');
    let spans;
    for (let i = 0; i < this.steps; i++) {
      spans += document.createElement('span');
    }

    return spans
  }

  // sliderValueChange() {
  //   let slider = this.elem.querySelector('.slider');
  //   let sliderValue = this.elem.querySelector('.slider__value');

  //   slider.addEventListener('click', (event) => {
  //     let left = event.clientX - this.elem.getBoundingClientRect().left;
  //     let leftRelative = left / this.elem.offsetWidth;
  //     let segments = this.steps - 1;
  //     console.log(segments)
  //     let approximateValue = leftRelative * segments;
  //     let value = Math.round(approximateValue);
  //     let valuePercents = value / segments * 100;
  //     console.log(value)

  //     sliderValue.textContent = value


  //     let thumb = this.elem.querySelector('.slider__thumb');
  //     let progress = this.elem.querySelector('.slider__progress');

  //     let leftPercents = valuePercents; 

  //     thumb.style.left = `${leftPercents}%`;
  //     progress.style.width = `${leftPercents}%`;
  //   })
  // }
  
}
