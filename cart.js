// cart.js
// load cart from local storage
let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [];
}
// Function to handle adding products to the cart
function addToCart(productId) {
  // check if product is already in cart
  var product = cart.find(function(product) {
    return product.id === productId;
  });
  // If it is, increment the quantity
  if (product) {
    product.quantity += 1;
  } else {
    // If it isn't, add the product to the cart
    cart.push({
      id: productId,
      quantity: 1
    });
  }

  // save the cart to local storage
  saveCart();

  /// log the cart contents to the console
  console.log(cart);
}

// save cart to local storage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to handle removing products from the cart
function removeFromCart(productId) {
  // Find the index of the product in the cart
  var index = cart.findIndex(function(product) {
    return product.id === productId;
  });

  // If the product was found, remove it from the cart
  if (index !== -1) {
    cart.splice(index, 1);
  }

  saveCart();
}

// reduce quantity of item in cart
function reduceQuantity(productId){
  let product = cart.find(function(product){
    return product.id === productId;
  });
  if(product){
    product.quantity -= 1;
  }
  saveCart();
}

// Function to display the cart contents
function displayCart() {
  cart.forEach(function(product) {
    console.log(product.title + ": " + product.price);
  });
}

// Function to clear the entire cart
function clearCart() {
  cart = [];
  saveCart();
}