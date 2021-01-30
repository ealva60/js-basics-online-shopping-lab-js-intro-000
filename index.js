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

function viewCart() {
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    var msg = "In your cart, you have"
    var i=0
    for (i = 0, items = 1; i < cart.length; i++, items++) {
      if (i > 0) {
        msg = msg + ","
      }
      if (cart.length === items && items > 1) {
        msg = msg + " and"
      }
      msg = `${msg} ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    msg = msg + "."
    return msg
  }
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
