import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid { 
  elem = null;
  products = [];
  filters = {} 


   constructor(products) {
      this.products = products;
      this.filters = {};
      this.elem = createElement(`<div class="products-grid"></div>`);    
      this.render(this.products);
    }
  
   render(products) {
      this.cards = products.map((item) => {
        let card = new ProductCard(item);
        item = card.elem;
        return item;
      });
  
      if (this.cardGrid) {
         this.cardGrid.remove();
      }
      this.cardGrid = createElement('<div class="products-grid__inner"></div>');
  
      this.cards.forEach((item) => this.cardGrid.append(item));
      this.elem.append(this.cardGrid);
   }

   updateFilter(filters) {
      for (let key in filters) {
        if (filters[key] === undefined) continue;
        this.filters[key] = filters[key];
      }
  
      this.filteredProducts = this.products;
  
      if (this.filters.noNuts) {
        this.filteredProducts = this.filteredProducts.filter(item => item.nuts === false || item.nuts == undefined);
      }
  
      if (this.filters.vegeterianOnly) {
        this.filteredProducts = this.filteredProducts.filter(item => item.vegeterian === true);
      }
  
      if (this.filters.maxSpiciness) {
        this.filteredProducts = this.filteredProducts.filter(item => item.spiciness <= this.filters.maxSpiciness);
      }
  
      if (this.filters.category && this.filters.category != '') {
        this.filteredProducts = this.filteredProducts.filter(item => item.category === this.filters.category);
      }
  
      this.render(this.filteredProducts);
    }
    
}