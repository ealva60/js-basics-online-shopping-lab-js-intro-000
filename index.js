var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  cart.push({itemName: item, itemPrice: Math.round(getRandomArbitrary(1,100))})
  return `${item} has been added to your cart.`
}

function total() {
  var total = 0
  for (i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
