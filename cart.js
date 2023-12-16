// cart.js

// Initialize an empty cart
var cart = [];

// Function to handle adding products to the cart
function addToCart(productId) {
  // Find the product in the products array
  var product = products.find(function(product) {
    return product.id === productId;
  });

  // If the product was found, add it to the cart
  if (product) {
    cart.push(product);
  }
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
}