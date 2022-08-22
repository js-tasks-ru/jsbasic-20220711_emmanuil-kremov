export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if(!product) { return }
    let cartItem = this.cartItems.find(item => item.product.id == product.id);

    if (!cartItem) {
      cartItem = {product, count: 1};
      this.cartItems.push(cartItem);
    } else {
      cartItem.count++;
    }

    this.onProductUpdate(cartItem);

  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(item => item.product.id == productId);
    cartItem.count += amount;
  
    if (cartItem.count == 0) {
      this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
    }

    this.onProductUpdate(cartItem);

  }

  isEmpty() {
    return this.cartItems.length === 0;

  }

  getTotalCount() {
    let sum = 0;
    this.cartItems.forEach(item => sum += item.count);
    return sum;

  }

  getTotalPrice() {
    let sum = 0;
    this.cartItems.forEach(item => sum += item.product.price * item.count);
    return sum;
  
  }

  onProductUpdate(cartItem) {
    this.cartIcon.update(this);
  }
}

